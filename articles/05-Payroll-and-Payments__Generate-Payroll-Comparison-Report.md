# How Do I Generate Payroll Comparison Report?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Payroll-Comparison-Report](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Payroll-Comparison-Report)

---

DOCUMENTATION
00. READINESS JOURNEY
01. GETTING STARTED
02. MEMBERS AND RECORDS
03. CONTRIBUTIONS AND BUYBACKS
04. RETIREMENT AND BENEFITS
05. PAYROLL AND PAYMENTS
Overview
Lock and Unlock Payment Records
Generate Locked Payment Accounts Report
Delete Zero Payment Deduction Codes
Find Payroll and Vendor Related Reports
06. REFUNDS AND DISTRIBUTIONS
07. ACCOUNTING AND COMPLIANCE
08. REPORTS AND ANALYTICS
09. COMMUNICATIONS AND MEMBER ENGAGEMENT
10. BATCH PROCESSING AND OPERATIONS
11. SYSTEM ADMINISTRATION
Documentation
chevron_right
Payroll And Payments
chevron_right
Generate Payroll Comparison Report
How Do I Generate Payroll Comparison Report?

Category: Payroll and Payments Time: 5-10 minutes Difficulty: ⭐ Beginner

Before You Begin:

Have Check/DD register history for the periods you want to compare (reports use register date ranges, not generic "posting number" pairs in the modals)
Use Reports Center (hamburger menu) — these reports are not generated inside the Retiree Payroll wizard

Related Topics:

Run Retiree Payroll
Generate Payroll Warrant
Find Payroll and Vendor-Related Reports
What This Does

Generates comparison reports that highlight payment differences between periods or between data sources. PensionPro+ (Next Step) includes three related reports under Retiree Payroll in Reports Center:

Comparison Report w/ Check/DD Register — Compares register activity across prior vs current Check/DD register date ranges (with a member scope control).
Comparison Report w/ Warrant — For a period, compares Check/DD register data to the payroll warrant (same-period reconciliation style—not a generic "period-over-period warrant" story).
Retiree Federal Tax Compare — Federal tax comparison (SSN display and file format options).
Quick Steps
Hamburger menu (☰) → Reports Center
Search compare (recommended) — searching only comparison may not list Retiree Federal Tax Compare; compare is the safer keyword
Open the report you need from the Retiree Payroll category
Fill in that report's modal (each modal differs — see below)
Choose File Format: PDF, Web Viewer, XLSX, or CSV
Click Generate Report
Use the Report Details view (download buttons) when it appears; use the collapsible Previously Generated section at the bottom of each modal for earlier runs
Review variances and investigate material changes
Step 1: Navigate to Reports Center

Option A: Search

☰ → Reports Center
In the search bar, type compare

Option B: Browse

☰ → Reports Center
Open the Retiree Payroll folder in the left navigation
Step 2: Select the report type

Use the report that matches your task:

Register-to-register trends → Comparison Report w/ Check/DD Register
Register vs warrant for a run → Comparison Report w/ Warrant
Federal tax focus → Retiree Federal Tax Compare
Step 3: Parameters (each modal is different)
Comparison Report w/ Check/DD Register

Typical fields:

Create Report for Member (searchable dropdown)
Current Employee Only?* (dropdown)
(Prior) Beginning Check/DD Register Date*
(Prior) Ending Check/DD Register Date*
(Current) Beginning Check/DD Register Date*
(Current) Ending Check/DD Register Date*
File Format — PDF, Web Viewer, XLSX, CSV

Previously Generated — expandable section at the bottom of the modal for prior outputs.

Comparison Report w/ Warrant

Typical fields:

Create Report for Member (searchable dropdown)
Current Employee Only?* (dropdown)
(Prior) Beginning Check/DD Register Date*
(Prior) Ending Check/DD Register Date*
File Format — PDF, Web Viewer, XLSX, CSV

Previously Generated — expandable section at the bottom of the modal.

Retiree Federal Tax Compare

Typical fields:

SSN Display* (dropdown)
File Format — PDF, Web Viewer, XLSX, CSV

Previously Generated — expandable section at the bottom of the modal.

Note: These modals do not use the generic "two posting numbers" pattern described in older documentation. Always match fields shown on screen.

Step 4: After generation — Report Details

After you generate a report, the UI commonly shows a Report Details view with download actions (e.g. PDF, XLSX, CSV) instead of only a generic "batch queue" description. Batch monitoring, if used, is via the top BATCH entry point where your tenant enables it.

Reports Archive

In Reports Center, the tab for saved/historical reports is labeled Reports Archive (not "Report Archives").

Understanding the reports
Comparison Report w/ Check/DD Register

Purpose: Compare register-based payment activity between a prior and current Check/DD register date range.

Typical content:

Records-to-compare counts
New Payments / Ended Payments style sections (as rendered)
Payment Reconciliation table and related totals
Comparison Report w/ Warrant

Purpose: For the analysis period, compares Check/DD register records to the payroll warrant (warrant vs register view), not a simple month-over-month warrant-only comparison.

Typical content:

Records to compare
New Payments section (and other sections as rendered)
Retiree Federal Tax Compare

Purpose: Compare federal tax–related amounts across the comparison logic encoded in the report.

Typical columns (as rendered):

Name, SSN, Payment Info Amount, Warrant Amount, Difference
Common scenarios
Pre-posting validation
Complete payroll and warrant review in Retiree Payroll wizard Step 2: Warrant
In Reports Center, run Comparison Report w/ Warrant or w/ Check/DD Register with the correct date ranges
Investigate unexpected variances before Post to Register
Tax change verification
Open Retiree Federal Tax Compare
Set SSN Display and dates/parameters as shown
Generate and download from Report Details
Monthly documentation
Generate the chosen comparison report after payroll
Download PDF (or XLSX/CSV) from Report Details
Store with the month's payroll package
Best Practices

✅ DO: Run comparisons before posting when policy requires; keep PDF/XLSX/CSV copies; use compare when searching; use Reports Archive for history.

❌ DON'T: Assume all three reports share the same parameters; don't rely on outdated "two posting number" wording.

Common Questions

Q: Where are these reports? A: Reports Center only — not inside the Retiree Payroll wizard for initial generation.

Q: What search term should I use? A: Prefer compare so all three reports appear.

Q: Which tab lists old reports? A: Reports Archive inside Reports Center.

Q: Excel format? A: The UI uses XLSX as a format label alongside PDF, Web Viewer, and CSV.

Q: Can I generate from the wizard? A: New comparison reports are created from Reports Center. The wizard's report areas may show other warrant-related outputs.

Troubleshooting

Cannot find a report — Confirm Retiree Payroll category and search compare.

Empty report — Verify date ranges and member selection; ensure register data exists for those dates.

Wrong report for my question — w/ Warrant is for warrant vs register; w/ Check/DD Register is for register period vs period; Retiree Federal Tax Compare is tax-focused.

Related Tasks
Run Retiree Payroll
Generate Payroll Warrant
Update COLA and Dependent Allowance
Find Payroll and Vendor-Related Reports

Last Updated: March 2026 (feedback and UI review)

← Back to Payroll and Payments
|
Next: Find Payroll Reports →

ON THIS PAGE
What This Does
Quick Steps
Step 1: Navigate to Reports Center
Step 2: Select the report type
Step 3: Parameters (each modal is different)
Comparison Report w/ Check/DD Register
Comparison Report w/ Warrant
Retiree Federal Tax Compare
Step 4: After generation — Report Details
Understanding the reports
Comparison Report w/ Check/DD Register
Comparison Report w/ Warrant
Retiree Federal Tax Compare
Common scenarios
Pre-posting validation
Tax change verification
Monthly documentation
Best Practices
Common Questions
Troubleshooting
Related Tasks