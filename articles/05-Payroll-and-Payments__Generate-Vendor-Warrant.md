# How Do I Generate Vendor Warrant?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Vendor-Warrant](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Vendor-Warrant)

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
Generate Vendor Warrant
How Do I Generate Vendor Warrant?

Category: Payroll and Payments Time: 5 minutes Difficulty: ⭐ Beginner

Before You Begin:

Payroll / vendor processing must be completed through Step 1: Run Payroll in the Retiree Payroll wizard (when your tenant uses vendor payments)
Have payroll and payment posting identifiers available as shown in the wizard header (each board defines its own numbering conventions; there is no required system-wide pattern)

Related Topics:

Manage Vendor Payments
Generate Payroll Warrant
Run Retiree Payroll
What This Does

Generates an official vendor payment warrant that lists third-party payments (insurance, garnishments, fees, etc.) for the same posting run as retiree payroll. The vendor warrant is reviewed before posting, alongside the retiree payroll warrant.

Important: The vendor warrant is not a separate wizard step. In Payment Center → Retiree Payroll, open Step 2: Warrant and click the Vendor tab. Retiree lines are on the Payroll tab; vendor lines are on the Vendor tab. Header fields (Payroll Posting #, Payment Posting #, Posting Date) are shared for both tabs.

Posting numbers: The Payroll Posting # format is determined entirely by each retirement board’s own practices—there is no single required pattern. Payment Posting # is the posting number associated with end checks (vendor) for the run; it is likewise defined by the board. Do not assume a particular alphanumeric scheme; use the values your board assigns and what appears in the wizard for that posting.

Retiree Payroll wizard (5 steps)
Run Payroll
Warrant — Review payroll and vendor warrant details in one place. (Payroll / Vendor tabs)
Create Reports
Post to Register
View Registers

Vendor and payroll registers are posted from Step 4: Post to Register and reviewed under Step 5: View Registers (and related Payment Center register screens)—not from non-existent "Step 6" / "Step 7" labels.

Quick Steps
Complete Step 1: Run Payroll (combined payroll and vendor processing when applicable)
Open Step 2: Warrant → Vendor tab
Review the vendor warrant grid
In the action bar, click Print → Print Vendor Warrant (when shown) or use the vendor warrant report flow from the Print menu
After generation, use Report Details (downloads such as PDF, XLSX, CSV as offered) or prior outputs from the report modal's "previously generated" section where available
Step-by-Step Instructions
Step 1: Open the Vendor tab (Step 2: Warrant)

Option A: During payroll processing

Payment Center → Retiree Payroll
Complete Step 1: Run Payroll
When the wizard advances to Step 2: Warrant, click the Vendor tab

Option B: Returning later

Payment Center → Retiree Payroll
Jump to Step 2: Warrant in the stepper
Click the Vendor tab

If your implementation hides vendor processing, the Vendor tab and vendor print actions may not appear—see your administrator.

Step 2: Review the vendor warrant on screen

Header (shared with Payroll tab)

Payroll Posting # — Board-defined identifier for this payroll posting (format varies by board)
Payment Posting # — Board-defined posting number for the vendor/end-checks side of the same run (format varies by board)
Posting Date

Typical vendor grid columns (may vary slightly by configuration):

Register / payment identifiers
Check # / payment reference
Dates and amounts
Vendor key and vendor name
Unit
Payment type (e.g. check vs direct deposit)

Summary footer

May include record counts and totals for checks and direct deposits.

Step 3: Print / generate the vendor warrant report
Use Print in the action bar above the warrant area (same bar as Batch Result, Rerun, Back, Next Step)
Choose Print Vendor Warrant when available (opens the vendor warrant report modal)

Complete the modal fields as shown in the UI, then generate. Output title in the viewer often follows the pattern Payroll Warrant For Posting Number … or your tenant's report naming—confirm on screen.

After generation, the Report Details view typically offers Download PDF, Download XLSX, Download CSV (or equivalent) rather than only "PDF vs Excel" wording.

Step 4: Save or distribute
Download from Report Details, or
Reopen a prior run from the expandable previously generated section in the report modal (wording may match other warrant reports)

For long-term storage, you can also use Reports Center → Reports Archive when that fits your process.

Suggested file naming

Vendor-Warrant-[PostingId]-[Date].pdf — use the posting identifiers your board uses (Payment Posting # reflects end checks/vendor posting for the run; format is not standardized in documentation).

Vendor warrant vs. payroll warrant
Aspect	Payroll tab	Vendor tab
Purpose	Retiree pension payments	Third-party / vendor payments
Wizard location	Step 2: Warrant → Payroll tab	Step 2: Warrant → Vendor tab
Posting references	Payroll posting # (and shared header fields)	Same header; vendor lines use payment context as configured

Both should be reviewed before Step 4: Post to Register.

Common scenarios
Monthly vendor warrant with payroll
Run Step 1: Run Payroll
Step 2: Warrant → Payroll tab — review retirees
Vendor tab — review vendors (insurance, garnishments, etc.)
Print → generate vendor warrant report; download from Report Details
Continue to Create Reports → Post to Register → View Registers per your checklist
Proof of payment to a vendor
Open Step 2: Warrant → Vendor tab for the posting in question
Locate the vendor line
Generate/save the vendor warrant PDF (or CSV/XLSX) from Report Details
Best Practices

✅ DO: Review vendor totals against deductions and invoices; keep downloads with payroll documentation; resolve issues with Rerun before posting.

❌ DON'T: Post while vendor lines are wrong; discard audit copies.

Common Questions

Q: Where is "Step 3: Review Vendor Warrant"? A: That label is outdated. Use Step 2: Warrant → Vendor tab.

Q: Why does my PDF say "Payroll Warrant" and a posting number? A: Report naming is configured per report; use the on-screen title and posting number shown in the viewer.

Q: What format should Payroll Posting # and Payment Posting # use? A: Each board sets its own conventions. Payment Posting # corresponds to the end checks (vendor) posting number for the run. There is no standard pattern documented here—enter and use the identifiers your board requires.

Q: Can I unvoid or fix a line on the warrant? A: You cannot edit the grid directly—use Rerun or void/posting corrections per your procedures.

Troubleshooting
No vendor data: Confirm members have vendor-related deductions and that vendor processing is enabled.
No Print Vendor Warrant: Tenant may use skip vendor payment mode; confirm with configuration.
Related Tasks
Manage Vendor Payments
Run Retiree Payroll
Generate Payroll Warrant
Lock and Unlock Payment Records

Last Updated: March 2026 (aligned with Retiree Payroll wizard UI and feedback review)

← Back to Payroll and Payments
|
Next: Manage Vendor Payments →

ON THIS PAGE
What This Does
Retiree Payroll wizard (5 steps)
Quick Steps
Step-by-Step Instructions
Step 1: Open the Vendor tab (Step 2: Warrant)
Step 2: Review the vendor warrant on screen
Step 3: Print / generate the vendor warrant report
Step 4: Save or distribute
Vendor warrant vs. payroll warrant
Common scenarios
Monthly vendor warrant with payroll
Proof of payment to a vendor
Best Practices
Common Questions
Troubleshooting
Related Tasks