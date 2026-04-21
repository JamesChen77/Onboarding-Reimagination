# PensionPro+

> **Source:** [https://dev.pensiontech.io/documentation/04-Retirement-and-Benefits/Run-Quick-Retirement-Estimate](https://dev.pensiontech.io/documentation/04-Retirement-and-Benefits/Run-Quick-Retirement-Estimate)

---

DOCUMENTATION
00. READINESS JOURNEY
01. GETTING STARTED
02. MEMBERS AND RECORDS
03. CONTRIBUTIONS AND BUYBACKS
04. RETIREMENT AND BENEFITS
Overview
Run Pension Calculation
Run Quick Retirement Estimate
Run, Save, Share Benefit Calculation Results
Review Calculation Inputs and Outputs
05. PAYROLL AND PAYMENTS
06. REFUNDS AND DISTRIBUTIONS
07. ACCOUNTING AND COMPLIANCE
08. REPORTS AND ANALYTICS
09. COMMUNICATIONS AND MEMBER ENGAGEMENT
10. BATCH PROCESSING AND OPERATIONS
11. SYSTEM ADMINISTRATION
Documentation
chevron_right
Retirement And Benefits
chevron_right
Run Quick Retirement Estimate
PensionPro+
<!-- Resource hints for faster loading -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Icons -->
<link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#1d6065">

<!-- Critical inline CSS for instant paint -->
<style>
  :root {
    --initial-bg-color: #fff;
    --initial-text-color: #333;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --initial-bg-color: #1a1a1a;
      --initial-text-color: #e8e6e3;
    }
  }
  body {
    background-color: var(--initial-bg-color);
    color: var(--initial-text-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    margin: 0;
    padding: 0;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes pleaseWaitFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }
  body:has(#initial-loader) {
    overflow: hidden;
  }
</style>

<!-- Preload logo for faster display -->
<link rel="preload" as="image" href="assets/img/logo.svg">

<!-- Non-blocking font loading - optimized weights only -->
<link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&amp;family=Roboto+Mono:wght@400;500&amp;display=swap">
<noscript>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
</noscript>

<!-- Non-blocking Material Icons -->
<link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<noscript>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</noscript>

      <!-- Please wait text -->
      <div style="
          font-size: 16px;
          font-weight: 500;
          color: var(--initial-text-color);
          opacity: 0;
          animation: pleaseWaitFadeIn 1s ease-out 5s forwards;
        ">
        Please wait...
      </div>
    </div>
  </div>
</app-root>
<noscript>Please enable JavaScript to continue using this application.</noscript>

<!-- Google Maps API for Address Autocomplete -->
<script id="google-maps-loader">
  // This script will be loaded by the app component with the environment API key
  // See app.component.ts for initialization
</script>

ON THIS PAGE

No headings in this page