/**
 * Fetches all HDI articles from the PensionPro dev documentation site.
 *
 * The site is a JavaScript SPA, so we use Playwright (headless Chromium) to:
 *   1. Load the docs root and wait for the sidebar navigation to render.
 *   2. Collect every article href from the nav.
 *   3. Visit each article URL, wait for the main content to render, and
 *      save the result as JSON + plain-text files under ./output/.
 *
 * Usage:
 *   npm install
 *   npx playwright install chromium
 *   node fetch-hdi-articles.js
 *
 * Optional env vars:
 *   BASE_URL   - override the base URL (default: https://dev.pensiontech.io)
 *   OUTPUT_DIR - directory to write results (default: ./output)
 *   CONCURRENCY - parallel page workers (default: 3)
 *   TIMEOUT_MS  - navigation/selector timeout in ms (default: 30000)
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL    = process.env.BASE_URL    || 'https://dev.pensiontech.io';
const DOCS_PATH   = '/documentation/01-Getting-Started/Login-to-PensionPro';
const OUTPUT_DIR  = process.env.OUTPUT_DIR  || path.join(__dirname, 'output');
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '3', 10);
const TIMEOUT_MS  = parseInt(process.env.TIMEOUT_MS  || '30000', 10);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(url) {
  return url.replace(/^https?:\/\/[^/]+/, '').replace(/\//g, '__').replace(/[^a-zA-Z0-9_.-]/g, '-') || 'index';
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function waitForContent(page) {
  // Wait until the SPA's loading spinner disappears or main content appears.
  // Adjust these selectors to match the actual rendered DOM if needed.
  await page.waitForFunction(
    () => !document.body?.innerText?.includes('Please wait...'),
    { timeout: TIMEOUT_MS }
  );
  // Give the page a short additional settle time for lazy-loaded content.
  await page.waitForTimeout(1000);
}

// ---------------------------------------------------------------------------
// Step 1 – Discover all article links from the navigation sidebar
// ---------------------------------------------------------------------------

async function discoverArticleLinks(browser) {
  console.log(`\n[discover] Opening ${BASE_URL}${DOCS_PATH} …`);
  const page = await browser.newPage();

  try {
    await page.goto(`${BASE_URL}${DOCS_PATH}`, { waitUntil: 'domcontentloaded', timeout: TIMEOUT_MS });
    await waitForContent(page);

    // Collect every internal /documentation href in the sidebar / nav.
    // We cast a wide net with multiple common selector patterns; duplicates
    // are deduped below.
    const hrefs = await page.evaluate((base) => {
      const anchors = Array.from(document.querySelectorAll('a[href]'));
      return anchors
        .map(a => {
          const href = a.getAttribute('href') || '';
          if (href.startsWith('/documentation') || href.startsWith(base + '/documentation')) {
            return href.startsWith('http') ? href : base + href;
          }
          return null;
        })
        .filter(Boolean);
    }, BASE_URL);

    const unique = [...new Set(hrefs)];
    console.log(`[discover] Found ${unique.length} article link(s).`);
    return unique;
  } finally {
    await page.close();
  }
}

// ---------------------------------------------------------------------------
// Step 2 – Fetch and save one article
// ---------------------------------------------------------------------------

async function fetchArticle(browser, url, index, total) {
  console.log(`[fetch ${index}/${total}] ${url}`);
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: TIMEOUT_MS });
    await waitForContent(page);

    const article = await page.evaluate(() => {
      // Try common content-container selectors used by docs frameworks.
      const contentSelectors = [
        'article',
        '[class*="content"]',
        '[class*="article"]',
        'main',
        '#main-content',
        '.markdown-body',
        '[class*="doc"]',
      ];

      let contentEl = null;
      for (const sel of contentSelectors) {
        const el = document.querySelector(sel);
        if (el && el.innerText.trim().length > 100) { contentEl = el; break; }
      }

      const title =
        document.querySelector('h1')?.innerText?.trim() ||
        document.querySelector('title')?.innerText?.trim() ||
        '';

      const bodyText = contentEl ? contentEl.innerText.trim() : document.body.innerText.trim();
      const bodyHtml = contentEl ? contentEl.innerHTML.trim() : document.body.innerHTML.trim();

      // Collect all headings to build a simple outline
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map(h => ({
        level: parseInt(h.tagName[1], 10),
        text: h.innerText.trim(),
      }));

      // Collect all in-page links
      const links = Array.from(document.querySelectorAll('a[href]')).map(a => ({
        text: a.innerText.trim(),
        href: a.getAttribute('href'),
      }));

      return { title, bodyText, bodyHtml, headings, links };
    });

    const slug = slugify(url);
    const result = {
      url,
      title: article.title,
      fetchedAt: new Date().toISOString(),
      headings: article.headings,
      links: article.links,
      bodyText: article.bodyText,
    };

    // Save JSON record
    const jsonPath = path.join(OUTPUT_DIR, `${slug}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2), 'utf8');

    // Save plain-text for easy reading
    const txtPath = path.join(OUTPUT_DIR, `${slug}.txt`);
    fs.writeFileSync(
      txtPath,
      `URL: ${url}\nTitle: ${article.title}\nFetched: ${result.fetchedAt}\n\n${article.bodyText}`,
      'utf8'
    );

    return { url, title: article.title, ok: true };
  } catch (err) {
    console.error(`  [error] ${url}: ${err.message}`);
    return { url, ok: false, error: err.message };
  } finally {
    await page.close();
  }
}

// ---------------------------------------------------------------------------
// Step 3 – Run with limited concurrency
// ---------------------------------------------------------------------------

async function runWithConcurrency(tasks, concurrency) {
  const results = [];
  const queue = [...tasks];

  async function worker() {
    while (queue.length) {
      const task = queue.shift();
      results.push(await task());
    }
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

  try {
    // 1. Discover all article URLs
    let articleUrls = await discoverArticleLinks(browser);

    if (articleUrls.length === 0) {
      console.warn('\n[warn] No article links found via sidebar traversal.');
      console.warn('       Falling back to the seed URL only.');
      articleUrls = [`${BASE_URL}${DOCS_PATH}`];
    }

    // 2. Fetch each article
    console.log(`\n[main] Fetching ${articleUrls.length} article(s) with concurrency=${CONCURRENCY} …\n`);
    const total = articleUrls.length;
    let index = 0;

    const tasks = articleUrls.map(url => async () => {
      index++;
      return fetchArticle(browser, url, index, total);
    });

    const results = await runWithConcurrency(tasks, CONCURRENCY);

    // 3. Write a summary manifest
    const manifestPath = path.join(OUTPUT_DIR, '_manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(results, null, 2), 'utf8');

    const ok  = results.filter(r => r.ok).length;
    const bad = results.filter(r => !r.ok).length;
    console.log(`\n[done] ${ok} succeeded, ${bad} failed.`);
    console.log(`[done] Output written to: ${OUTPUT_DIR}`);
    console.log(`[done] Manifest: ${manifestPath}`);
  } finally {
    await browser.close();
  }
})();
