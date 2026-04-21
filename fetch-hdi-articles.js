/**
 * Fetches all HDI articles from the PensionPro dev documentation site and
 * produces a single articles.html file you can open in any browser.
 *
 * Usage:
 *   npm install
 *   npx playwright install chromium          (one-time setup)
 *   DOCS_EMAIL=you@company.com DOCS_PASS=yourpassword node fetch-hdi-articles.js
 *
 * Then open:  output/articles.html
 *
 * Optional env vars:
 *   BASE_URL    - site to scrape  (default: https://dev.pensiontech.io)
 *   OUTPUT_DIR  - where to write  (default: ./output)
 *   CONCURRENCY - parallel tabs   (default: 3)
 *   TIMEOUT_MS  - page timeout ms (default: 30000)
 *   DOCS_EMAIL  - login email     (required)
 *   DOCS_PASS   - login password  (required)
 *   DEBUG       - set to "1" for screenshots at each step
 */

const { chromium } = require('playwright');
const fs   = require('fs');
const path = require('path');

const BASE_URL    = process.env.BASE_URL    || 'https://dev.pensiontech.io';
const DOCS_PATH   = '/documentation/01-Getting-Started/Login-to-PensionPro';
const OUTPUT_DIR  = process.env.OUTPUT_DIR  || path.join(__dirname, 'output');
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '3', 10);
const TIMEOUT_MS  = parseInt(process.env.TIMEOUT_MS  || '30000', 10);
const DOCS_EMAIL  = process.env.DOCS_EMAIL  || '';
const DOCS_PASS   = process.env.DOCS_PASS   || '';
const DEBUG       = process.env.DEBUG === '1';
const DEBUG_DIR   = path.join(OUTPUT_DIR, '_debug');
const MAX_RETRIES = 3;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const sleep = ms => new Promise(r => setTimeout(r, ms));

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function debugSnapshot(page, label) {
  if (!DEBUG) return;
  ensureDir(DEBUG_DIR);
  const safe = label.replace(/[^a-zA-Z0-9_-]/g, '_');
  await page.screenshot({ path: path.join(DEBUG_DIR, `${safe}.png`), fullPage: true });
  fs.writeFileSync(path.join(DEBUG_DIR, `${safe}.html`), await page.content(), 'utf8');
  console.log(`  [debug] snapshot saved: _debug/${safe}.{png,html}`);
}

async function waitForContent(page) {
  await page.waitForFunction(
    () => !document.body?.innerText?.includes('Please wait...'),
    { timeout: TIMEOUT_MS }
  );
  await page.waitForTimeout(1000);
}

// ---------------------------------------------------------------------------
// Login
// ---------------------------------------------------------------------------

async function login(ctx) {
  if (!DOCS_EMAIL || !DOCS_PASS) {
    throw new Error(
      'DOCS_EMAIL and DOCS_PASS env vars are required.\n' +
      'Example: DOCS_EMAIL=you@example.com DOCS_PASS=secret node fetch-hdi-articles.js'
    );
  }

  console.log('[login] Authenticating …');
  const page = await ctx.newPage();

  try {
    await page.goto(`${BASE_URL}/documentation`, { waitUntil: 'domcontentloaded', timeout: TIMEOUT_MS });
    // Keycloak form: fields are name="username" and name="password"
    await page.waitForSelector('#username, input[name="username"]', { timeout: TIMEOUT_MS });
    await debugSnapshot(page, '01_login_form');

    await page.fill('#username, input[name="username"]', DOCS_EMAIL);
    await page.fill('#password, input[name="password"]', DOCS_PASS);

    const submitBtn = await page.$('#kc-login, button[type="submit"], input[type="submit"]');
    if (submitBtn) await submitBtn.click();
    else await page.keyboard.press('Enter');

    await page.waitForFunction(
      () => !document.querySelector('input[type="password"]'),
      { timeout: TIMEOUT_MS }
    );
    await page.waitForTimeout(2000);
    await debugSnapshot(page, '02_after_login');

    // Handle "Select Tenant" interstitial that appears after Keycloak login
    const bodyText = await page.evaluate(() => document.body.innerText);
    if (bodyText.includes('Select Tenant')) {
      console.log('[login] Tenant selection page detected — picking first tenant …');
      // Click the first tenant card (they are rendered as clickable rows/divs)
      const firstTenant = await page.$('[class*="tenant-item"], [class*="tenantItem"], ul li, .list-group-item');
      if (firstTenant) {
        await firstTenant.click();
      } else {
        // Fallback: click the first element that looks like a tenant name
        await page.click('text=/Chicago Parks|Demo MACRS|Georgia|Kansas|Massport|Mobile|PA/');
      }
      await page.waitForTimeout(3000);
      await debugSnapshot(page, '02b_after_tenant_select');
    }

    console.log('[login] Authenticated successfully.');
  } finally {
    await page.close();
  }
}

// ---------------------------------------------------------------------------
// Resolve a raw href into an absolute documentation URL
// ---------------------------------------------------------------------------

function resolveDocUrl(href, pageUrl) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:')) return null;

  let resolved;
  try {
    resolved = new URL(href, pageUrl).href;
  } catch (_) {
    return null;
  }

  // Must be on the same host
  if (!resolved.startsWith(BASE_URL)) return null;

  // Must be a documentation page (not an asset or API path)
  const pathname = new URL(resolved).pathname;
  if (!pathname.startsWith('/documentation')) return null;

  // Strip .md extension — the SPA serves the same page without it
  resolved = resolved.replace(/\.md(#.*)?$/, (_, hash) => hash || '');

  // Drop anchor fragments — we want the page URL only
  resolved = resolved.split('#')[0].replace(/\/$/, '');

  return resolved || null;
}

// ---------------------------------------------------------------------------
// Collect all links visible on a single page
// ---------------------------------------------------------------------------

async function collectLinksFromPage(page) {
  const pageUrl = page.url();
  const rawHrefs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a[href]')).map(a => a.getAttribute('href'))
  );
  return rawHrefs
    .map(href => resolveDocUrl(href, pageUrl))
    .filter(Boolean);
}

// ---------------------------------------------------------------------------
// Discover article links — BFS crawl starting from the docs root
// ---------------------------------------------------------------------------

async function discoverArticleLinks(ctx) {
  const rootUrl = `${BASE_URL}/documentation`;
  console.log(`\n[discover] Crawling from ${rootUrl} …`);

  const visited = new Set();
  const queue   = [rootUrl, `${BASE_URL}${DOCS_PATH}`];
  const articleUrls = new Set();

  const page = await ctx.newPage();

  try {
    let crawlIndex = 0;
    while (queue.length > 0) {
      const url = queue.shift();
      if (visited.has(url)) continue;
      visited.add(url);

      crawlIndex++;
      process.stdout.write(`  [crawl ${crawlIndex}] ${url}\n`);

      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: TIMEOUT_MS });
        await waitForContent(page);

        if (crawlIndex <= 2) await debugSnapshot(page, `0${crawlIndex + 2}_crawl`);

        const links = await collectLinksFromPage(page);

        for (const link of links) {
          articleUrls.add(link);
          if (!visited.has(link)) queue.push(link);
        }
      } catch (err) {
        console.warn(`  [crawl skip] ${url}: ${err.message}`);
      }
    }
  } finally {
    await page.close();
  }

  const unique = [...articleUrls];
  console.log(`[discover] Found ${unique.length} article URL(s) across ${visited.size} page(s) crawled.`);
  return unique;
}

// ---------------------------------------------------------------------------
// Fetch one article
// ---------------------------------------------------------------------------

async function fetchArticleOnce(ctx, url) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: TIMEOUT_MS });
    await waitForContent(page);

    return await page.evaluate(() => {
      const contentSelectors = ['article', '[class*="content"]', '[class*="article"]',
        'main', '#main-content', '.markdown-body', '[class*="doc"]'];

      let contentEl = null;
      for (const sel of contentSelectors) {
        const el = document.querySelector(sel);
        if (el && el.innerText.trim().length > 100) { contentEl = el; break; }
      }

      const title =
        document.querySelector('h1')?.innerText?.trim() ||
        document.querySelector('title')?.innerText?.trim() || '(untitled)';

      const bodyHtml = contentEl ? contentEl.innerHTML.trim() : document.body.innerHTML.trim();
      const bodyText = contentEl ? contentEl.innerText.trim() : document.body.innerText.trim();

      return { title, bodyHtml, bodyText };
    });
  } finally {
    await page.close();
  }
}

async function fetchArticle(ctx, url, index, total) {
  console.log(`[fetch ${index}/${total}] ${url}`);
  let lastErr;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const article = await fetchArticleOnce(ctx, url);
      return { url, title: article.title, bodyHtml: article.bodyHtml, bodyText: article.bodyText, ok: true };
    } catch (err) {
      lastErr = err;
      if (attempt < MAX_RETRIES) {
        const wait = 2 ** attempt * 1000;
        console.warn(`  [retry ${attempt}] ${url} — waiting ${wait / 1000}s`);
        await sleep(wait);
      }
    }
  }
  console.error(`  [error] ${url}: ${lastErr.message}`);
  return { url, title: url, bodyHtml: `<p class="error">Failed to load: ${lastErr.message}</p>`, bodyText: '', ok: false };
}

// ---------------------------------------------------------------------------
// Build the HTML viewer
// ---------------------------------------------------------------------------

function buildHtml(articles) {
  const fetchedAt = new Date().toLocaleString();

  const navItems = articles.map((a, i) =>
    `<li><a href="#article-${i}" class="${a.ok ? '' : 'failed'}">${escHtml(a.title)}</a></li>`
  ).join('\n');

  const articleSections = articles.map((a, i) => `
    <section id="article-${i}" class="article${a.ok ? '' : ' article--error'}">
      <div class="article-meta"><a href="${escHtml(a.url)}" target="_blank" rel="noopener">${escHtml(a.url)}</a></div>
      <h2>${escHtml(a.title)}</h2>
      <div class="article-body">${a.bodyHtml}</div>
    </section>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>HDI Articles — PensionPro Dev</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 15px;
      color: #1a1a2e;
      display: flex;
      height: 100vh;
      overflow: hidden;
    }

    /* Sidebar */
    #sidebar {
      width: 280px;
      min-width: 220px;
      max-width: 340px;
      background: #f8f9fb;
      border-right: 1px solid #e2e5ea;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    #sidebar-header {
      padding: 18px 16px 12px;
      border-bottom: 1px solid #e2e5ea;
    }
    #sidebar-header h1 { font-size: 14px; font-weight: 700; color: #0057b8; letter-spacing: .02em; }
    #sidebar-header p  { font-size: 11px; color: #888; margin-top: 3px; }

    #search-wrap { padding: 10px 12px; border-bottom: 1px solid #e2e5ea; }
    #search {
      width: 100%; padding: 7px 10px; border: 1px solid #d0d5dd;
      border-radius: 6px; font-size: 13px; outline: none;
      background: #fff;
    }
    #search:focus { border-color: #0057b8; box-shadow: 0 0 0 2px #0057b820; }

    #nav { flex: 1; overflow-y: auto; padding: 8px 0; }
    #nav ul { list-style: none; }
    #nav li a {
      display: block; padding: 7px 16px; font-size: 13px;
      color: #333; text-decoration: none; border-left: 3px solid transparent;
      transition: background .1s, color .1s;
      word-break: break-word;
    }
    #nav li a:hover  { background: #eef2ff; color: #0057b8; }
    #nav li a.active { background: #eef2ff; color: #0057b8; border-left-color: #0057b8; font-weight: 600; }
    #nav li a.failed { color: #c0392b; }
    #nav li.hidden   { display: none; }

    #nav-count { padding: 6px 16px 4px; font-size: 11px; color: #aaa; }

    /* Main content */
    #main {
      flex: 1;
      overflow-y: auto;
      padding: 0;
      scroll-behavior: smooth;
    }

    #top-bar {
      position: sticky; top: 0; z-index: 10;
      background: #fff; border-bottom: 1px solid #e2e5ea;
      padding: 12px 32px;
      display: flex; align-items: center; gap: 16px;
    }
    #top-bar strong { font-size: 14px; color: #555; }
    #top-bar .count { font-size: 13px; color: #888; }

    .article {
      padding: 40px 48px;
      border-bottom: 1px solid #e2e5ea;
      max-width: 860px;
    }
    .article:last-child { border-bottom: none; }
    .article-meta { font-size: 11px; color: #aaa; margin-bottom: 8px; word-break: break-all; }
    .article-meta a { color: #aaa; text-decoration: none; }
    .article-meta a:hover { text-decoration: underline; }
    .article h2 { font-size: 22px; font-weight: 700; margin-bottom: 20px; color: #0d1b40; }

    /* Render whatever HTML the docs site produced */
    .article-body h1, .article-body h2, .article-body h3, .article-body h4 {
      margin: 1.4em 0 .5em; font-weight: 600; color: #0d1b40;
    }
    .article-body h1 { font-size: 1.5em; }
    .article-body h2 { font-size: 1.25em; }
    .article-body h3 { font-size: 1.1em; }
    .article-body p  { line-height: 1.7; margin-bottom: 1em; color: #333; }
    .article-body ul, .article-body ol { margin: .5em 0 1em 1.5em; line-height: 1.7; }
    .article-body li { margin-bottom: .3em; }
    .article-body a  { color: #0057b8; }
    .article-body img { max-width: 100%; border-radius: 4px; margin: 8px 0; }
    .article-body table { border-collapse: collapse; width: 100%; margin-bottom: 1em; }
    .article-body th, .article-body td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; font-size: 13px; }
    .article-body th { background: #f4f6f9; font-weight: 600; }
    .article-body code { background: #f4f6f9; padding: 2px 5px; border-radius: 3px; font-size: .9em; }
    .article-body pre  { background: #f4f6f9; padding: 14px; border-radius: 6px; overflow-x: auto; margin-bottom: 1em; }
    .article-body pre code { background: none; padding: 0; }
    .article--error h2 { color: #c0392b; }
    p.error { color: #c0392b; }

    @media (max-width: 700px) {
      body { flex-direction: column; height: auto; overflow: auto; }
      #sidebar { width: 100%; max-width: 100%; height: auto; border-right: none; border-bottom: 1px solid #e2e5ea; }
      #main { overflow: visible; }
      .article { padding: 24px 20px; }
    }
  </style>
</head>
<body>

<nav id="sidebar">
  <div id="sidebar-header">
    <h1>HDI Articles</h1>
    <p>PensionPro Dev &bull; ${escHtml(fetchedAt)}</p>
  </div>
  <div id="search-wrap">
    <input id="search" type="search" placeholder="Search articles…" autocomplete="off">
  </div>
  <div id="nav-count"></div>
  <div id="nav">
    <ul>${navItems}</ul>
  </div>
</nav>

<main id="main">
  <div id="top-bar">
    <strong>All Articles</strong>
    <span class="count">${articles.length} total &bull; ${articles.filter(a => a.ok).length} loaded successfully</span>
  </div>
  ${articleSections}
</main>

<script>
  // Search filter
  const search   = document.getElementById('search');
  const navCount = document.getElementById('nav-count');
  const navLinks = document.querySelectorAll('#nav li');

  function updateCount() {
    const visible = [...navLinks].filter(li => !li.classList.contains('hidden')).length;
    navCount.textContent = visible + ' article' + (visible === 1 ? '' : 's');
  }
  updateCount();

  search.addEventListener('input', () => {
    const q = search.value.toLowerCase().trim();
    navLinks.forEach(li => {
      const text = li.textContent.toLowerCase();
      li.classList.toggle('hidden', q.length > 0 && !text.includes(q));
    });
    updateCount();
  });

  // Highlight active article on scroll
  const articles = document.querySelectorAll('.article');
  const links    = document.querySelectorAll('#nav li a');
  const main     = document.getElementById('main');

  function onScroll() {
    let current = 0;
    articles.forEach((sec, i) => {
      if (sec.getBoundingClientRect().top <= 120) current = i;
    });
    links.forEach((a, i) => a.classList.toggle('active', i === current));
  }
  main.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth-scroll nav clicks into the main panel
  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
</script>
</body>
</html>`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---------------------------------------------------------------------------
// Concurrency runner
// ---------------------------------------------------------------------------

async function runWithConcurrency(tasks, concurrency) {
  const results = [];
  const queue = [...tasks];
  async function worker() {
    while (queue.length) results.push(await queue.shift()());
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

(async () => {
  ensureDir(OUTPUT_DIR);

  const browser = await chromium.launch({ headless: true });
  const ctx     = await browser.newContext({ ignoreHTTPSErrors: true });

  try {
    await login(ctx);

    let articleUrls = await discoverArticleLinks(ctx);
    if (articleUrls.length === 0) {
      console.warn('\n[warn] No article links found — falling back to seed URL.');
      articleUrls = [`${BASE_URL}${DOCS_PATH}`];
    }

    console.log(`\n[main] Fetching ${articleUrls.length} article(s) …\n`);
    let index = 0;
    const tasks = articleUrls.map(url => async () => fetchArticle(ctx, url, ++index, articleUrls.length));
    const articles = await runWithConcurrency(tasks, CONCURRENCY);

    // Sort articles by URL path so they appear in the same order as the site
    articles.sort((a, b) => a.url.localeCompare(b.url));

    // Write each article as a Markdown file inside articles/
    const articlesDir = path.join(__dirname, 'articles');
    ensureDir(articlesDir);

    for (const article of articles) {
      const slug = article.url
        .replace(/^https?:\/\/[^/]+/, '')   // strip origin
        .replace(/^\/documentation\//, '')  // strip /documentation/ prefix
        .replace(/\//g, '__')               // slashes → __
        .replace(/[^a-zA-Z0-9_.-]/g, '-')  // sanitise
        || 'index';

      const md = [
        `# ${article.title}`,
        '',
        `> **Source:** [${article.url}](${article.url})`,
        '',
        '---',
        '',
        article.ok ? article.bodyText : `⚠️ Failed to load this article: ${article.bodyText}`,
      ].join('\n');

      fs.writeFileSync(path.join(articlesDir, `${slug}.md`), md, 'utf8');
    }

    // Write a README index inside articles/
    const indexLines = [
      '# HDI Articles',
      '',
      `_Fetched from [${BASE_URL}](${BASE_URL}) on ${new Date().toUTCString()}_`,
      '',
      '| Article | URL |',
      '|---------|-----|',
      ...articles.map(a => {
        const slug = a.url
          .replace(/^https?:\/\/[^/]+/, '')
          .replace(/^\/documentation\//, '')
          .replace(/\//g, '__')
          .replace(/[^a-zA-Z0-9_.-]/g, '-') || 'index';
        return `| [${a.title}](./${slug}.md) | [link](${a.url}) |`;
      }),
    ];
    fs.writeFileSync(path.join(articlesDir, 'README.md'), indexLines.join('\n'), 'utf8');

    const ok  = articles.filter(a => a.ok).length;
    const bad = articles.filter(a => !a.ok).length;
    console.log(`\n[done] ${ok} succeeded, ${bad} failed.`);
    console.log(`[done] Articles saved to: ${articlesDir}`);
  } finally {
    await ctx.close();
    await browser.close();
  }
})();
