# How Do I Generate Notice of Deposits (NODs)?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Notice-of-Deposits-NODs](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Notice-of-Deposits-NODs)

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
Generate Notice of Deposits (NODs)
How Do I Generate Notice of Deposits (NODs)?

Category: Payroll and Payments Time: 5-10 minutes Difficulty: ⭐ Beginner

Before You Begin:

Complete payroll processing with direct deposits
ACH file submitted to bank (when applicable)
Verify retiree mailing addresses or email addresses

Related Topics:

Generate Direct Deposit Files
Run Retiree Payroll
Generate Retiree Checks
What This Does

Generates Notice of Deposit (NOD) documents that inform retirees they received a direct deposit payment. NODs provide payment details (amount, date, deductions) and serve as payment stubs for retirees who don't receive physical checks.

Report names in the UI

From the Retiree Payroll wizard flow: prompts and cards use Retiree Notice of Deposits wording (not "Print NODs"). Use this path for first-time generation after payroll processing.
Reprint - Retiree Notice of Deposit in Reports Center is not an alternative way to create NODs for the first time. It is only for reprinting notices for deposits that have already been posted to the Check/DD Register. See How to Reprint a Notice of Deposit below.
Quick Steps

Initial generation (first-time NODs): Work inside Payment Center → Retiree Payroll.

Complete payroll through Step 1: Run Payroll and prior steps as required
Go to Step 3: Create Reports in the Retiree Payroll wizard
Generate NODs using one of:
Option A: Generate All Reports via Wizard (modal title: Generate Reports Wizard) — when the flow reaches Retiree Notice of Deposits, generate
Option B: Retiree Payroll reports area → open Retiree Notice of Deposits Report (or equivalent card label on screen)
Set parameters in the modal (labels differ slightly by path — see below)
Generate; use Previously Generated Retiree Notice of Deposits in the modal and/or Reports Center → Reports Archive tab for history
Distribute (print/mail or secure email if configured)

Reprinting only (already posted to Check/DD Register): Use
How to Reprint a Notice of Deposit
—do not use Reports Center reprint as a substitute for the wizard steps above when you have not yet posted the run.

Step-by-Step Instructions
Step 1: Locate NOD generation (first-time)

Option A: Generate Reports Wizard

Payment Center → Retiree Payroll
Step 3: Create Reports
Open Generate All Reports via Wizard (left/sidebar entry as shown in your tenant)
The modal title is Generate Reports Wizard
When the wizard reaches the Retiree Notice of Deposits step, click Generate Report (or follow the on-screen prompt)

Option B: Direct report card (wizard)

Payment Center → Retiree Payroll → Step 3: Create Reports
In the retiree payroll reports section, open Retiree Notice of Deposits Report (not the legacy name "Print NODs")
How to Reprint a Notice of Deposit

Use this scenario when you need another copy of a Notice of Deposit for a deposit that has already been posted to the Check/DD Register. The Reprint - Retiree Notice of Deposit function cannot produce first-time NODs for a run that has not been through posting; for new notices, always use Step 3: Create Reports in the Retiree Payroll wizard (
Step 1
above).

☰ → Reports Center
Search or browse Retiree Payroll
Select Reprint - Retiree Notice of Deposit
The modal title is Reprint - Retiree Notice of Deposit Report
Complete fields as shown (e.g. Transaction Number for the payroll posting / NOD transaction as required) and generate
Use Reports Archive or the modal’s history section for prior outputs as needed
Step 2: Configure parameters

First-time generation (Options A and B — wizard)

Payroll NOD Number — typically pre-filled
Generates Individual NOD* — dropdown (often defaults to ALL); replaces older docs that referred to a "Member Link" field label
File Format — PDF is commonly pre-selected (field label File Format, not "Report Format")

Reprint only (
How to Reprint a Notice of Deposit
)

Transaction Number — enter the payroll posting / NOD transaction number as required for the posting that is already on the Check/DD Register
Other fields as shown; File Format applies here as well

Note: A separate Date Range filter was not confirmed in review; use only if your modal shows it.

Step 3: Generate and review
Click Generate Report
Processing may take 30–60 seconds depending on volume
Use the Previously Generated Retiree Notice of Deposits section inside the modal when present
For cross-session history, use Reports Center → Reports Archive (tab label: Reports Archive — plural "Reports", singular "Archive")

Review PDF

Each page may represent one NOD
Verify counts vs direct deposits
Check amounts, names, dates, deductions
Step 4: Distribute NODs

Print and mail

Print on plain or letterhead paper
Window envelopes if used
Mail within your policy timeline (often within a few business days of pay date)

Email (if configured)

Use secure email and approved templates
NOD contents

Each NOD typically shows

Retiree name and address
Payment date
Line items for payment breakdown — the PDF may use a label such as Net Check even when the payment method is direct deposit; treat as the net payment line per the rendered form
Gross pension amount
Itemized deductions
Net deposit amount
Bank account (masked / last digits when shown)
Year-to-date totals (when included)
Common scenarios
Monthly retiree NODs
Complete monthly payroll and ACH
Generate Retiree Notice of Deposits from Step 3: Create Reports (wizard—first-time generation)
Review PDF; print and mail

If you later need additional copies after the run is posted to the Check/DD Register, use
How to Reprint a Notice of Deposit
.

Vendor NODs

Vendor NOD flows vary by configuration. Confirm the exact tab names and report cards in your environment (e.g. vendor payment reports in Step 3: Create Reports) with your system administrator or SME.

Best Practices

✅ DO: Generate for all direct deposits; mail or deliver promptly; keep PDFs; follow retention policy.

❌ DON'T: Skip required notices where regulations apply; send sensitive data over unsecured email.

Common Questions

Q: Are NODs required by law? A: Depends on jurisdiction; confirm with counsel.

Q: Can I email NODs? A: Only with appropriate security and consent.

Q: Do check recipients need NODs? A: Generally no—they receive a check stub.

Q: What if an address is wrong? A: Update the member record, then regenerate from the wizard (if the run is not yet posted) or use Reprint - Retiree Notice of Deposit after posting if you only need a corrected copy for an already-posted deposit—subject to the parameters your modal allows (e.g. Generates Individual NOD on first-time generation).

Q: Can I use Reports Center “Reprint - Retiree Notice of Deposit” to generate NODs the first time? A: No. That report is only for reprinting NODs tied to deposits already posted to the Check/DD Register. First-time generation is done through Retiree Payroll → Step 3: Create Reports as described in this document.

Related Tasks
Generate Direct Deposit Files
Run Retiree Payroll
Update Contact Information

Last Updated: March 2026 (feedback and UI naming review)

← Back to Payroll and Payments

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Locate NOD generation (first-time)
How to Reprint a Notice of Deposit
Step 2: Configure parameters
Step 3: Generate and review
Step 4: Distribute NODs
NOD contents
Common scenarios
Monthly retiree NODs
Vendor NODs
Best Practices
Common Questions
Related Tasks