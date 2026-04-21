# How Do I Generate Retiree Checks?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Retiree-Checks](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Retiree-Checks)

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
Generate Retiree Checks
How Do I Generate Retiree Checks?

Category: Payroll and Payments Time: 10-15 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

Complete retiree payroll processing (Steps 1-2 of Payroll Wizard)
Have check stock loaded in printer
Verify printer is configured for check printing
Know your beginning check number

Related Topics:

Run Retiree Payroll
Generate Direct Deposit Files
Generate Notice of Deposits (NODs)
What This Does

Generates and prints physical checks for retirees who receive pension payments by check (rather than direct deposit). This process creates formatted checks with MICR encoding that can be printed on check stock and mailed to retirees.

The system automatically:

Selects retirees with payment method = "Check"
Assigns sequential check numbers
Formats checks with payee name, amount, date
Includes MICR encoding for bank processing
Creates a printable PDF file
Quick Steps

Note: All following actions are performed within the Payroll & Vendor Payment wizard section in Payment Center.

Complete payroll processing through Step 2 (Warrant)
Navigate to Step 3: Create Reports
Generate retiree checks using one of two methods:
Option A (Generate All via Wizard): Click "Generate All Reports via Wizard" → When the Retiree Checks modal appears, review fields and click "Generate Report"
Option B (Payroll Reports subsection): Expand "Payroll Reports" → click the Retiree Checks card
In the Retiree Checks Report modal, confirm Starting and Ending Check Numbers and File Format
Click Generate Report to create the check PDF
Download the PDF from the Generated Reports panel on the right, or from the "Previously Generated Retiree Checks" section at the bottom of the modal
Review the PDF thoroughly, then print checks on check stock
Verify check numbers and amounts
Step-by-Step Instructions
Step 1: Complete Payroll Processing

Before Generating Checks:

Run retiree payroll (Step 1 of Payroll Wizard)
Review Payroll Warrant (Step 2 — Warrant)
Verify all retiree payments are correct
Note your posting number (value comes from your payroll run; format is board-defined)

📌 Important: Complete payroll processing before generating checks. Checks reflect the approved payroll warrant.

Step 2: Navigate to Check Generation

Where to Go:

You have two options to generate retiree checks. Both are accessed from Step 3: Create Reports in the Payroll & Vendor Payment wizard:

Option A: Generate All Reports via Wizard (Guided Flow)

You're in the Payroll & Vendor Payment wizard
Click Step 3: Create Reports in the stepper
Click the Generate All Reports via Wizard button at the top of the Generate Reports panel
The wizard will walk you through each report type in sequence
When the Retiree Checks step appears, review the displayed fields and click Generate Report (or Skip to bypass)

Option B: Payroll Reports Subsection (Direct Selection)

You're in the Payroll & Vendor Payment wizard
Click Step 3: Create Reports in the stepper
Expand the Payroll Reports subsection
Find and click the Retiree Checks card (subtitle: "Print retiree payroll checks")

💡 Recommended: Most users prefer Option B for direct access, or Option A to generate all required reports in sequence.

Note: A Vendor Reports subsection also exists on the same page but is not used for retiree check generation.

Step 3: Open the Retiree Checks Report Modal

What to Do:

Click the Retiree Checks card
The Retiree Checks Report modal opens, showing a Generate New Report section

What You'll See in the Modal:

Modal title: Retiree Checks Report
Section header: Generate New Report
Report name: Retiree Checks / subtitle: "Print retiree payroll checks"
Fields for the current payroll run (see Step 4 below)
A collapsible Previously Generated Retiree Checks section at the bottom (see note below)

Previously Generated Retiree Checks section: This collapsible section at the bottom of the modal allows you to view or re-download reports from prior runs without regenerating them. Click the chevron to expand it.

Step 4: Review Parameters and Generate

The modal displays the following fields for the current payroll run. All fields are a single view with no separate tabs.

Informational Fields (read-only):

Total Chk Gross Payroll Amt — Total gross benefit amount across all check recipients before deductions. Verify this matches your payroll warrant totals before proceeding.

Total Chk Net Payroll Amt — Total net amount that will be printed on checks after all deductions (taxes, insurance premiums, etc.). This is the sum of all check amounts in the batch.

Required Input Fields:

Starting Check Number (required, marked with asterisk) — The first check number in the sequence. Verify this matches the beginning check number entered during payroll processing (Step 1).

Ending Check Number (required) — The last check number in the sequence. Auto-populated based on the number of check recipients.

Format:

File Format — Defaults to PDF (checkbox). This is the required format for printing physical checks.

What to Do:

Confirm the gross and net totals match your payroll warrant
Verify the Starting and Ending Check Numbers are correct
If check numbers are wrong, use the Renumber Checks or Renumber Checks Single card in the Payroll Reports subsection before generating
Click Generate Report

💡 Tip: For monthly payroll, no additional filtering is needed — the modal automatically reflects the current payroll run's data.

Step 5: Generate the Check PDF

What to Do:

Click Generate Report button
System creates the report

What Happens:

Report is sent to batch queue
Processing usually takes 30-60 seconds
Green success message appears
Report added to batch process

Where to Find Your Report:

The Generated Reports panel on the right side of Step 3 updates automatically
Or expand the Previously Generated Retiree Checks section at the bottom of the modal
Or navigate to Reports Center from main menu
Step 6: Download and Review the PDF

What to Do:

In the Generated Reports panel (or Previously Generated section), find your check report
Click the Download icon or report name
PDF file downloads to your computer
Open the PDF to review

What to Review:

Check Count - Verify number of checks matches expected recipients
Check Numbers - Confirm sequential numbering (e.g., 10001, 10002, 10003)
Payee Names - Scan names for accuracy
Amounts - Verify amounts are correct
Date - Confirm check date is correct
MICR Line - Check routing/account numbers are present
Earnings Stub - Review the earnings breakdown above the check portion, including pension components (Pension, Annuity, COLA, Dependent Allowance, etc.), deductions (health insurance, life insurance, etc.), and YTD totals. Verify these match the payroll warrant.

⚠️ Important: Review carefully BEFORE printing. Checks cannot be unprinted once on check stock.

Step 7: Print Checks

Printer Setup:

Before First Print:

Load check stock in printer
Use high-security check stock with MICR ink
Load according to printer specs (usually face up or face down depending on printer)
Verify printer settings:
Select correct printer
Paper size: Check stock size (usually 8.5" x 11")
Print quality: High
Double-sided: Off
Do a test print on plain paper first

Printing:

Open the downloaded check PDF
Click Print (or Ctrl+P)
Select your check printer
Print settings:
Pages: All
Scaling: None (100%)
Orientation: Portrait
Click Print

After Printing:

Check first page carefully for alignment
Verify MICR line is clear and dark
Confirm all text is legible
Review check numbers match PDF
Step 8: Verify and Secure Checks

Verification Steps:

Count checks - Match printed checks to PDF count
Check numbers - Verify sequential numbering
Spot check amounts - Random sample of 5-10 checks
Signature line - Verify authorized signature (if pre-signed stock)

Security Steps:

Store securely - Lock checks in secure location
Track check stock - Log check numbers used
Reconcile immediately - Note check numbers in system
Prepare for mailing - Envelopes, postage, mail date

💡 Best Practice: Two-person verification for high-value checks or large batches.

Common Scenarios
Scenario: Monthly Retiree Check Run

Situation: Generate checks for all retirees who receive payment by check for monthly pension.

Steps:

Complete payroll wizard through Step 2 (Warrant)
Navigate to Step 3: Create Reports
Expand Payroll Reports → click "Retiree Checks"
Verify gross/net totals and check numbers in modal
Click Generate Report
Review PDF for accuracy (including earnings stub)
Load check stock
Print all checks
Verify and secure

Timeline:

Generation: 1-2 minutes
Review: 5 minutes
Printing: 3-10 minutes (depending on count)
Verification: 5-10 minutes
Scenario: Reprinting a Single Check

Situation: Need to reprint one check due to printer error, lost check, or damaged check.

Steps:

Navigate to Step 3: Create Reports
Expand Payroll Reports → click "Retiree Checks"
In the modal, verify the Starting/Ending Check Number range includes only the check(s) you need to reprint
Generate report
Review PDF (confirm it shows the correct check)
Print on check stock
Verify check details
Void the original check in system (if needed)

📌 Note: The Retiree Checks Report modal does not have a member-level filter. If you need to reprint a single check from a prior run, use the Previously Generated Retiree Checks section to re-download the original report, or rerun the report for that posting number and print only the relevant page.

Scenario: Printing Checks for Partial Payroll

Situation: Running a supplemental payroll for select retirees, need to print only those checks.

Steps:

Process supplemental payroll with a unique posting number per your board’s conventions
Navigate to Step 3: Create Reports in that wizard session
Expand Payroll Reports → click "Retiree Checks"
Verify the modal shows the supplemental payroll's gross/net totals and check numbers
Generate report
Print checks
Verify all are from supplemental payroll
Check Printing Best Practices

✅ DO:

Test print on plain paper first
Review PDF thoroughly before printing on check stock (including earnings stub)
Use high-security check stock with security features
Print in secure location with minimal personnel present
Count and reconcile checks immediately after printing
Lock check stock when not in use
Keep printer log of check numbers used
Sign checks promptly (if manual signature required)
Mail checks the same day or next business day

❌ DON'T:

Print checks without reviewing PDF first
Use low-quality or plain paper for checks
Leave check stock in printer unattended
Print checks far in advance of mailing
Store unsigned checks with signed checks
Forget to reconcile check numbers in system
Skip verification step
Allow unauthorized personnel in check printing area
Common Questions

Q: How do I know which retirees get checks vs. direct deposit? A: The system automatically filters based on payment method in each member's record. Only members with payment method = "Check" are included in the check report. Members with "Direct Deposit" are excluded.

Q: Can I print checks on regular paper? A: No. You must use proper check stock with MICR encoding for bank processing. Regular paper checks will be rejected by banks.

Q: What if check numbers don't match what I expected? A: Check numbers are assigned during payroll processing (Step 1). If they're wrong, use the Renumber Checks card (to renumber the entire batch sequentially) or the Renumber Checks Single card (to renumber an individual check) in the Payroll Reports subsection of Step 3: Create Reports.

Q: How do I change check alignment on the printed checks? A: Alignment is typically set in System Settings → Check Configuration. If checks don't align properly, contact your system administrator to adjust printer settings and check stock templates.

Q: Can I print checks for multiple payroll runs at once? A: No. Each payroll run (posting number) generates a separate check report. This ensures proper tracking and reconciliation.

Q: What if I need to print more checks than my printer can handle at once? A: You can print in batches, but track check numbers carefully to ensure no gaps or duplicates. Better solution: use a high-capacity printer for payroll.

Q: Do checks expire? A: Most checks have a "void after X days" notation (typically 90-180 days). Check your organization's policy and state law requirements.

Q: What if a retiree lost their check? A: Issue a stop payment on the original check, void it in the system, and generate a replacement check. Follow your organization's procedures for lost checks.

Q: Can I email checks instead of printing? A: No. Physical checks must be printed on check stock. For electronic payments, use direct deposit instead.

Q: How do I get check stock? A: Order from authorized check stock suppliers (Deluxe, Harland Clarke, etc.). Provide them with your bank account information and MICR encoding details. Check with your bank for approved vendors.

Troubleshooting
Issue: Checks not printing correctly (cut off, misaligned)

Possible Causes:

Printer settings incorrect
Check stock loaded wrong
PDF scaling applied
Wrong paper size selected

Solutions:

Verify check stock is loaded correctly (face up/down per printer)
In print dialog, ensure Scaling is set to "None" or "100%"
Select correct paper size (8.5" x 11" or check stock size)
Check printer driver settings for custom paper sizes
Test print on plain paper first to verify alignment
Contact system administrator for check template adjustments
Issue: MICR line is too light or missing

Possible Causes:

Using non-MICR check stock
Printer not configured for MICR printing
Low toner/ink
Wrong check stock

Solutions:

Verify you're using MICR-encoded check stock
If using MICR toner printer, ensure MICR toner cartridge installed
Replace toner/ink if low
Use check stock approved by your bank
Don't use pre-printed MICR checks if system generates MICR
Contact check stock vendor for MICR troubleshooting
Issue: Wrong check numbers assigned

Possible Causes:

Incorrect beginning check number entered in Step 1
Check numbering continued from previous run
Checks previously voided but numbers not freed

Solutions:

Before printing: Use Renumber Checks utility in Step 3: Create Reports
Click Renumber Checks card (to renumber entire batch) or Renumber Checks Single card (to renumber an individual check)
Enter correct beginning check number
System renumbers checks sequentially
Regenerate check report
After printing wrong numbers:
Shred the incorrect checks
Rerun payroll with correct check number (Step 1)
Regenerate checks
Track check stock to ensure no gaps in numbering
Issue: Missing checks for some retirees

Possible Causes:

Members have payment method set to "Direct Deposit" not "Check"
Members not included in payroll run
Payment records locked
Filter applied in report generation

Solutions:

Review payroll warrant (Step 2) to see which members were included
Check member records for payment method
Verify no unintended settings applied when generating check report
Check for locked payment records (see Lock/Unlock Payment Records doc)
If member should get check but doesn't, update payment method and rerun payroll
Issue: Report generation fails or times out

Possible Causes:

Large number of checks
System performance issue
Network connectivity problem

Solutions:

Wait a few minutes and check the Generated Reports panel or batch queue
Report may be processing in background
Contact system administrator if repeated failures
Check system resources and batch job status
Issue: Printer jams frequently with check stock

Possible Causes:

Check stock too thick for printer
Check stock loaded incorrectly
Printer needs maintenance
Using wrong type of check stock

Solutions:

Verify check stock is compatible with your printer type
Check load orientation (face up/down)
Don't overload paper tray
Clean printer rollers and interior
Use printer-recommended check stock
Consider dedicated check printer for high volumes
Security Considerations

Check Stock Security:

Store blank check stock in locked cabinet
Limit access to authorized personnel only
Use check stock with security features (watermarks, etc.)
Track check stock usage daily
Investigate missing check stock immediately

Printing Security:

Print in secure, monitored location
Don't leave checks unattended in printer
Shred voided/damaged checks immediately
Log all check printing activities
Require two-person verification for high amounts

Mailing Security:

Mail checks promptly (same/next business day)
Use secure mailing procedures
Track mailing date for each batch
Use certified mail for high-value checks (optional)
Verify mailing addresses before sealing envelopes
Related Tasks
Run Retiree Payroll - Complete payroll processing before generating checks
Generate Direct Deposit Files - Alternative to physical checks
Generate Notice of Deposits (NODs) - For direct deposit recipients
Void Check or Transaction - Cancel incorrect checks
Generate Positive Pay Files - Fraud prevention for checks

Last Updated: March 2026

← Back to Payroll and Payments
|
Next: Generate Direct Deposit Files →

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Complete Payroll Processing
Step 2: Navigate to Check Generation
Step 3: Open the Retiree Checks Report Modal
Step 4: Review Parameters and Generate
Step 5: Generate the Check PDF
Step 6: Download and Review the PDF
Step 7: Print Checks
Step 8: Verify and Secure Checks
Common Scenarios
Scenario: Monthly Retiree Check Run
Scenario: Reprinting a Single Check
Scenario: Printing Checks for Partial Payroll
Check Printing Best Practices
Common Questions
Troubleshooting
Issue: Checks not printing correctly (cut off, misaligned)
Issue: MICR line is too light or missing
Issue: Wrong check numbers assigned
Issue: Missing checks for some retirees
Issue: Report generation fails or times out
Issue: Printer jams frequently with check stock
Security Considerations
Related Tasks