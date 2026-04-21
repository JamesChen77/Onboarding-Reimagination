# fetch-hdi-articles

Fetches all HDI articles from the PensionPro dev documentation site and saves them as JSON + plain-text files.

The site is a JavaScript SPA that requires authentication, so the scraper uses **Playwright** (headless Chromium) to log in, wait for the sidebar to render, collect every article link, and extract each article's content.

## Prerequisites

- Node.js 18+
- Internet access to `dev.pensiontech.io`
- A valid PensionPro dev account

## Setup

```bash
npm install
npx playwright install chromium   # one-time browser download (~112 MB)
```

## Usage

```bash
DOCS_EMAIL=you@company.com DOCS_PASS=yourpassword node fetch-hdi-articles.js
```

Results are written to `./output/`:

| File | Contents |
|------|----------|
| `__documentation__<category>__<slug>.json` | Structured article data (title, headings, links, body text) |
| `__documentation__<category>__<slug>.txt` | Plain-text version for easy reading |
| `_manifest.json` | Summary of every URL fetched (ok / error) |

## Options

All options are set via environment variables or CLI flags.

| Variable | Default | Description |
|----------|---------|-------------|
| `DOCS_EMAIL` | *(required)* | Login email |
| `DOCS_PASS` | *(required)* | Login password |
| `BASE_URL` | `https://dev.pensiontech.io` | Target site base URL |
| `OUTPUT_DIR` | `./output` | Directory to write results |
| `CONCURRENCY` | `3` | Number of parallel page workers |
| `TIMEOUT_MS` | `30000` | Navigation/selector timeout (ms) |
| `DEBUG` | `0` | Set to `1` to save screenshots + HTML dumps |

### Retry failed articles

After a full run, re-fetch only the articles that errored (without re-scraping successful ones):

```bash
DOCS_EMAIL=you@company.com DOCS_PASS=yourpassword node fetch-hdi-articles.js --retry-failed
```

### Debug mode

Saves screenshots and full-page HTML at each key step to `output/_debug/`:

```bash
DEBUG=1 DOCS_EMAIL=you@company.com DOCS_PASS=yourpassword node fetch-hdi-articles.js
```

| File | What it shows |
|------|---------------|
| `01_login_form.{png,html}` | Login page — confirms the form was found |
| `02_after_login.{png,html}` | Page state after successful authentication |
| `03_discover_before_expand.{png,html}` | Sidebar before nav-toggle clicks |
| `04_discover_after_expand.{png,html}` | Sidebar after expansion attempts |
| `all_anchors.json` | Every `<a href>` found — useful if 0 links are discovered |

## Troubleshooting

### 0 article links found

Run with `DEBUG=1` and inspect `output/_debug/04_discover_after_expand.png` to see what the rendered sidebar looks like. The `all_anchors.json` file lists every `<a>` tag on the page, which helps identify the correct selectors.

### `ERR_CERT_AUTHORITY_INVALID`

Already handled — the browser context runs with `ignoreHTTPSErrors: true` for dev environment compatibility.

### Slow or timing-out articles

Increase the timeout:

```bash
TIMEOUT_MS=60000 DOCS_EMAIL=... DOCS_PASS=... node fetch-hdi-articles.js
```

Or reduce concurrency to put less load on the server:

```bash
CONCURRENCY=1 DOCS_EMAIL=... DOCS_PASS=... node fetch-hdi-articles.js
```
