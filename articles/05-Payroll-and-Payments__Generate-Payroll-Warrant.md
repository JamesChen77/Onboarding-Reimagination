# How Do I Generate Payroll Warrant?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Payroll-Warrant](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Payroll-Warrant)

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
Generate Payroll Warrant
How Do I Generate Payroll Warrant?

Category: Payroll and Payments Time: 5 minutes Difficulty: ⭐ Beginner

Before You Begin:

Payroll must be run first (Step 1: Run Payroll in the Retiree Payroll wizard)
Have the posting number ready for the payroll you want to warrant

Related Topics:

Run Retiree Payroll
Generate Payroll Comparison Report
Generate Vendor Warrant
What This Does

Generates an official payroll warrant document that itemizes all retiree pension payments for a specific payroll period. The warrant serves as an authorization and detailed record of payments before they're officially posted to the payment register.

A payroll warrant is essentially a detailed payment authorization form that shows:

Each retiree being paid
Payment amounts (gross and net)
Deductions taken
Check numbers or direct deposit confirmations
Total payroll cost
Authorization signatures (in some systems)

The warrant is reviewed before posting payments to make them official and permanent.

Retiree Payroll wizard (5 steps)

Open the workflow from Payment Center → Retiree Payroll (breadcrumb: Payment Center > Retiree Payroll). The stepper shows five steps:

Run Payroll
Warrant — subtitle: Review payroll and vendor warrant details in one place.
Create Reports
Post to Register
View Registers

On Step 2: Warrant, use the Payroll tab to review the retiree payroll warrant. The Vendor tab shows vendor warrant data for the same posting (see
Generate Vendor Warrant
). The header fields (Payroll Posting #, Payment Posting #, Posting Date) are shared for both tabs.

Quick Steps
Complete Step 1: Run Payroll in the Retiree Payroll wizard
Go to Step 2: Warrant → Payroll tab
Review the warrant on screen
In the action bar (with Batch Result, Rerun, Back, Next Step), open Print → Print Report
Complete the Detailed Warrant modal and generate the report
Use Report Details (viewer / download) or the Previously Generated Detailed Warrant section in the modal to access output
Step-by-Step Instructions
Step 1: Access the warrant

Where to Go:

Option A: During payroll processing (most common)

Open Payment Center → Retiree Payroll
Complete Step 1: Run Payroll
Wait for the batch to complete
The wizard advances to Step 2: Warrant
Select the Payroll tab — the retiree warrant displays

Option B: After a payroll run

Navigate to Payment Center → Retiree Payroll
The wizard reopens at your last saved step
Click Step 2: Warrant in the stepper
Open the Payroll tab — the warrant displays
Step 2: Review the warrant on screen

What You'll See:

Header information

The header banner shows:

Payroll Posting # — Identifier for this payroll; each board defines its own numbering rules (no single required format)
Payment Posting # — Posting number for the vendor/end-checks side of the run when applicable; also board-defined (often aligns with Vendor Posting Number from Run Payroll)
Posting Date — Date for this payroll posting

These header values apply to the whole Warrant step (both Payroll and Vendor tabs).

Payment detail table

Columns include:

Payment/Calculation Type — Values come from your organization's code list (the paymentType code table). Many payrolls show Direct Dep (or similar) for direct-deposit payments; other codes may appear for checks, adjustments, or other payment types.
Transaction Number
Transaction Date
Payee Name / SSN Last 4
Member Employee #
Payee Type
Payment ID
Annuity / Pension
Gross Amount / Net Amount
Unit

Summary footer

Totals typically include annuity, pension, gross payment, and net payment amounts.

Step 3: Generate the Detailed Warrant report

What to Do:

In Step 2: Warrant, use the Print button in the action bar above the warrant area (same bar as Batch Result, Rerun, Back, Next Step)
Choose Print Report (opens the Detailed Warrant report; other menu items include Print Report by Unit and, when vendor processing applies, Print Vendor Warrant)

Report modal (Detailed Warrant)

The generate modal is titled for the Detailed Warrant report (report name / description align with Payroll Warrant Print in the UI). Typical parameters include:

Include Payee Address on Report? (dropdown)
PAYMENT DISTRICT (dropdown)
Updated Only (dropdown)
Sort Order (dropdown, e.g. Name)
Re-Format — PDF, Web Viewer, HTML, CSV (not Excel-only; there is no Excel-specific option here)

Click Generate Report to run the report.

Previously Generated Detailed Warrant

At the bottom of the modal, an expandable Previously Generated Detailed Warrant section lists prior runs for this report (e.g. for re-download). Open it to access earlier outputs without regenerating.

Step 4: Open, save, or print the warrant

After generation, the app typically opens a Report Details view with the report in a viewer and download actions (e.g. PDF and other formats supported by the report). You can also use Previously Generated Detailed Warrant inside the modal.

You may still open Reports Center and use the Reports Archive tab for historical report access; the exact path can vary by tenant workflow.

Recommended file naming

Use your posting identifier in the file name, for example:

Payroll-Warrant-[PostingNumber]-[Date].pdf

Posting identifiers are board-defined—use whatever values your board assigns for that run (there is no standard pattern to illustrate here).

Understanding the Warrant
Why warrants are important

Legal authorization

Formal authorization to issue payments
Required for audit trail
May need approval signatures (per your organization's policy)

Financial control

Review totals before committing to payments
Catch errors before posting becomes permanent
Verify budget alignment

Audit documentation

Required for financial audits
Shows who was paid, when, and how much
Tracks changes between payroll periods

Record keeping

Permanent record of each payroll
Reference for questions or disputes
Historical documentation
What information the warrant contains
Individual payment details

For each retiree:

Full name and member ID
Social Security Number (last 4 digits)
Payment method (check number or direct deposit)
Gross pension amount
Itemized deductions (federal/state tax, insurance, garnishments, etc.)
Net payment amount
Summary information
Total number of retirees paid
Total gross payroll
Total deductions by category
Total net payroll
Posting number and payroll date
Report generation date and time
Common Scenarios
Scenario: Monthly payroll warrant

Situation: Generate warrant for regular monthly retiree pension payments.

Steps:

Run monthly payroll (Step 1: Run Payroll)
Wait for the batch to complete
On Step 2: Warrant → Payroll tab, review the warrant
Scan for unusual amounts or unexpected members
Print → Print Report → generate Detailed Warrant (usually PDF)
Save using your posting number and date
If errors are found: use Rerun (action bar) to correct and regenerate
If correct: continue with Step 3: Create Reports, then Step 4: Post to Register, then Step 5: View Registers as your process requires
Scenario: Corrected payroll warrant

Situation: Error after payroll run; need a corrected warrant.

Steps:

On Step 2: Warrant, click Rerun
Correct inputs in the rerun flow
After reprocessing, review the updated warrant
Print → Print Report to generate a new Detailed Warrant PDF
File with a clear "Corrected" note and date
Scenario: Warrant for board approval

Situation: Board must review the warrant before authorizing payment.

Steps:

Run payroll several days before the meeting
Generate the Detailed Warrant PDF from Step 2: Warrant
Add to board packet (totals, budget comparison, member count, notable changes)
After approval, complete Post to Register and retain the approved warrant with minutes
Warrant vs. register

Payroll warrant (Step 2: Warrant — preview)

Preview of planned payments before posting
Changes still possible (e.g. Rerun)
Not yet the final register record
Used for review and internal approval

Payment register (after Step 4: Post to Register; reviewed in Step 5: View Registers)

Official record after posting
Permanent; corrections use void/reissue workflows
Legal financial record

Workflow (wizard)

Run Payroll → 2. Warrant (review payroll and vendor tabs as needed) → 3. Create Reports → 4. Post to Register → 5. View Registers

There is no separate Approve step in the stepper; approvals follow your organization's policy outside or alongside these steps.

Best Practices

✅ DO:

Generate and save a Detailed Warrant for every payroll run
Review the warrant carefully before posting
Keep PDF copies in an organized payroll folder
Compare warrant totals to budget expectations
File warrants chronologically

❌ DON'T:

Skip reviewing the warrant before posting
Delete warrant PDFs needed for audit
Post to the register if totals are unexplained
Ignore unusual payment amounts
Common Questions

Q: What is a payroll warrant? A: An official listing of pension payments for a payroll period, used for authorization and review before posting.

Q: When is the warrant shown? A: After Step 1: Run Payroll completes, the wizard moves to Step 2: Warrant; the retiree grid is on the Payroll tab.

Q: Do I have to print the warrant? A: Generating the Detailed Warrant PDF (or other format) is strongly recommended for records and audit; physical printing depends on policy.

Q: Can I edit the warrant directly? A: No. Use Rerun from Step 2 to reprocess payroll with corrections.

Q: What's the difference between warrant and register? A: Step 2: Warrant is the pre-posting review. After Post to Register, the View Registers step and Payment Center registers hold the official posted transactions.

Q: Where is the Print button? A: In the action bar on Step 2: Warrant (with Batch Result, Rerun, Back, Next Step), not only at the edge of the data table.

Troubleshooting
Issue: Warrant shows no data
Batch still running — use Batch Result
Batch failed — review errors and Rerun
No eligible retirees — verify payment setup
Issue: Can't find Print
Confirm you are on Step 2: Warrant
Check permissions for report generation
Issue: Generated report looks wrong
Wait and retry; check Previously Generated Detailed Warrant for an earlier good copy
Confirm parameters in the Detailed Warrant modal (district, sort order, etc.)
Issue: Warrant totals seem wrong
Use Generate Payroll Comparison Report where appropriate
Review Batch Result and member-level detail
Related Tasks
Run Retiree Payroll
Generate Payroll Comparison Report
Generate Vendor Warrant
Lock and Unlock Payment Records

Last Updated: March 2026 (aligned with Retiree Payroll wizard UI and feedback review)

← Back to Payroll and Payments
|
Next: Generate Vendor Warrant →

ON THIS PAGE
What This Does
Retiree Payroll wizard (5 steps)
Quick Steps
Step-by-Step Instructions
Step 1: Access the warrant
Step 2: Review the warrant on screen
Step 3: Generate the Detailed Warrant report
Step 4: Open, save, or print the warrant
Understanding the Warrant
Why warrants are important
What information the warrant contains
Individual payment details
Summary information
Common Scenarios
Scenario: Monthly payroll warrant
Scenario: Corrected payroll warrant
Scenario: Warrant for board approval
Warrant vs. register
Best Practices
Common Questions
Troubleshooting
Issue: Warrant shows no data
Issue: Can't find Print
Issue: Generated report looks wrong
Issue: Warrant totals seem wrong
Related Tasks