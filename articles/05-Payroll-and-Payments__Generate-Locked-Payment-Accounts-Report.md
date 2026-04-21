# How Do I Generate Locked Payment Accounts Report?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Locked-Payment-Accounts-Report](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Locked-Payment-Accounts-Report)

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
Generate Locked Payment Accounts Report
How Do I Generate Locked Payment Accounts Report?

Category: Payroll and Payments Time: 5-10 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

You have access to Payment Center
Payroll date information is available
You understand SSN display preferences
You know the desired sort order for the report

Related Topics:

Lock and Unlock Payment Records
Run Retiree Payroll
What This Does

Allows you to run the Locked Payment Accounts Report from Payment Center for a specified payroll date. Generates a report showing all member payment accounts that are currently locked and cannot be included in payroll processing. This report helps you identify which members won't receive payments in the next payroll run and understand why their accounts are locked.

You can customize how Social Security Numbers (SSNs) are displayed, choose your preferred sort order, and select your output format. Once submitted, you can verify and download completed reports from the Previously Generated list.

Payment accounts can be locked automatically by the system (due to errors or data issues) or manually by staff (to prevent payment while resolving a problem).

What This Report Shows:

All payment accounts locked for a specified payroll date
Reason for each lock (system-generated or manual)
Member identification details
Lock status and lock date

Report Use Cases:

Identifying payment account issues before payroll runs
Tracking locked accounts for reconciliation
Managing payment processing exceptions
Generating compliance documentation
Understanding which members won't be paid

Key Features:

✅ Customizable Parameters

Specify exact payroll date
Control SSN display format (Full, Last Four, Masked)
Choose preferred sort order (Name, Employee #, Unit)

✅ Multiple Output Formats

PDF for printing and archiving
Web Viewer for immediate review
XLSX for spreadsheet analysis
CSV for system integration

✅ Report History Tracking

View all previously generated reports
Filter by date range
Sort by report name, creation date, or creator
Download any historical report

✅ User Attribution

Track who generated each report
Record creation date and time
Maintain audit trail for compliance
Quick Steps
Navigate to Payment Center → Reports (or Locked Payment Accounts Report card)
Click Locked Payment Accounts Report card to open report generator
Enter Payroll Date for the report
Select SSN Display format (Full, Last Four, or Masked)
Select Sort Order (Payee Name, Mbr EE#, or Unit)
Select File Format (PDF, Web Viewer, XLSX, or CSV)
Click Generate Report button
Report is sent to batch queue for processing
Download completed report from Previously Generated list or Report Archives
Review locked accounts and take action to unlock as needed
Step-by-Step Instructions
Step 1: Navigate to the Report

Where to Go:

Click hamburger menu (☰) → Payment Center
Click Reports section
Locate the Locked Payment Accounts Report card
Click the card to open the report generator
Step 2: Generate the Report

What to Do:

Report generation modal opens
Configure the report parameters:
Payroll Date - Enter the payroll date for the report
SSN Display - Select how to display Social Security Numbers:
Full - Display complete SSN
Last Four - Display only last 4 digits
Masked - Display masked format (XXX-XX-####)
Sort Order - Select how to organize the report:
Payee Name - Sort alphabetically by member name
Mbr EE# - Sort by member employee number
Unit - Sort by organizational unit
File Format - Choose output format:
PDF - Printable document format
Web Viewer - View in browser
XLSX - Excel spreadsheet
CSV - Comma-separated values file
Click Generate Report button

What Happens:

Report is sent to batch queue
Processing typically takes 10-30 seconds
Report becomes available in Report Archives
Success message appears when complete
Step 3: Review the Report

What You'll See:

The report displays a table with these columns:

Member Information:

Member ID - Unique member identifier
Member Name - Full name of the member
SSN - Last 4 digits of Social Security Number
Status - Member status (usually Retired)

Lock Information:

Locked Date - The date when the payment record was locked (column shows lock status)

Account Details:

Payment Method - Check or Direct Deposit
Last Payment Date - Date of last successful payment
Next Expected Payment - Would-be payment amount if unlocked
Understanding Lock Reasons

Common Lock Reasons:

Locks are indicated by the presence of a Locked Date. To understand why a payment is locked, you'll need to:

Review the member's profile and payment information
Check member notes and memos
Review audit history for recent changes
Look for data validation issues (missing bank info, invalid routing number, etc.)

System-Generated Locks:

Missing Bank Account - Direct deposit selected but no bank info entered
Invalid Routing Number - Bank routing number failed validation
Deceased Member - Member status changed to deceased
Payment Validation Error - Calculation or amount error
Duplicate Payment Detected - System prevented duplicate processing
Insufficient Account Data - Required payment information missing

Manual Locks:

Under Investigation - Staff locked while researching an issue
Benefit Suspension - Payment suspended per administrator
Pending Verification - Awaiting documentation or confirmation
Administrative Hold - Locked for administrative reasons
Common Scenarios
Scenario: Pre-Payroll Review

Situation: Check for locked accounts before running monthly payroll.

Steps:

2-3 days before payroll date, generate the Locked Payment Accounts Report
Review all locked accounts
For each locked account:
Check the Locked Date
Review member profile for notes explaining why locked
Check member payment information for data issues
Determine if it can be resolved before payroll
Take action to unlock if appropriate
Re-generate report after unlocking accounts to verify
Proceed with payroll run

Best Practice: Make this part of your standard pre-payroll checklist.

Scenario: Identifying Why a Member Didn't Get Paid

Situation: A retiree calls asking why they didn't receive their pension payment.

Steps:

Generate Locked Payment Accounts Report
Search for the member's name or ID
Check if they appear on the report with a Locked Date
Review the member's profile for lock reason in notes or payment information
Explain reason to member
Take corrective action:
Unlock account after resolving issue (clear Locked Date)
Process manual payment if needed
Update member's next regular payroll
Scenario: Clearing Locks After Data Updates

Situation: You've updated missing bank information for several members.

Steps:

Generate Locked Payment Accounts Report
Identify members with Locked Dates that were locked due to missing bank information
Verify their bank information is now complete
Navigate to each member and clear their Locked Date field
Re-generate the report to confirm locks are cleared
Members will be included in next payroll run
What to Do With Locked Accounts

For Each Locked Account:

Check the Locked Date - See when it was locked
Investigate Why It's Locked:
Review member profile notes
Check payment information for data issues
Look at audit history
Check for missing bank account, invalid data, or status changes
Determine If Lock Is Still Valid - Is the lock still necessary?
Take Corrective Action:
Fix missing data (bank account, payment method, etc.)
Verify member status is correct
Resolve any data validation errors
Investigate and resolve issues causing lock
Unlock the Account - Clear the Locked Date field (See Lock and Unlock Payment Records)
Document the Resolution - Add memo to member record explaining what was fixed
Report Output Options

PDF Format:

Best for printing and filing
Preserves formatting
Easy to share via email
Good for audit trail

Excel Format:

Best for data analysis
Sort and filter capabilities
Calculate totals and counts
Integrate with other reports

💡 Tip: Export to Excel to sort by lock reason and tackle similar issues together.

Best Practices

✅ DO:

Run this report before every payroll
Review all locks and take action on resolvable issues
Keep a copy of the report for audit purposes
Document why you unlock each account
Communicate with members about payment delays
Track recurring lock issues and address root causes

❌ DON'T:

Ignore locked accounts - they won't be paid
Unlock accounts without understanding the reason
Run payroll without checking this report first
Forget to verify fixes before unlocking
Skip documenting why accounts were locked/unlocked
Common Questions

Q: Why do accounts get locked? A: Accounts lock automatically when the system detects data issues that would prevent successful payment (missing bank info, invalid routing numbers, calculation errors). Staff can also manually lock accounts by setting a Locked Date to prevent payment while investigating issues.

Q: Can I run payroll with locked accounts? A: Yes, but locked accounts will be skipped. Those members won't receive payments. That's why it's critical to review this report before running payroll and unlock any accounts that should be paid.

Q: How do I unlock an account? A: Navigate to the member's profile, go to their payment information section, and clear the Locked Date field. See
Lock and Unlock Payment Records
for detailed instructions.

Q: If I unlock an account, will it be included in the current payroll? A: Only if you unlock it (clear the Locked Date) before running the payroll. If payroll has already been processed, the member will be included in the next payroll cycle, or you can process a manual payment.

Q: How often should I run this report? A: At minimum, run it 2-3 days before each payroll. Many organizations run it weekly to stay on top of account issues.

Q: Can I filter the report to show only certain types of locks? A: The report shows all locks. Export to Excel to filter by member name, status, or other criteria. Lock reasons are not displayed on the report - check member profiles for details.

Q: What if I don't understand why an account is locked? A: Review the member's profile, check payment information for missing data, look at member notes and memos, and review audit history. Click into their profile and check payment information, status, and recent history. Contact your system administrator if you can't determine the cause.

Q: How long do locks stay in place? A: Locks remain until manually removed by staff. They don't automatically clear when the underlying issue is fixed - you must clear the Locked Date field after resolving the problem.

Troubleshooting
Issue: Report shows no locked accounts, but member wasn't paid

Possible Causes:

Member was locked, paid, then unlocked by the time you ran report
Member's status changed after payroll
Member doesn't have payment method configured
Member payment amount is $0

Solutions:

Check the member's payment history
Review payroll warrant for that period
Verify member status at time of payroll
Check if member has payment information set up
Issue: Can't generate report - error message appears

Solutions:

Refresh the page and try again
Check your report generation permissions
Try different output format (PDF vs Excel)
Contact system administrator if error persists
Issue: Report shows account locked but member record shows unlocked

Solutions:

Refresh the member's profile page
The lock may have been removed after report was generated
Generate a fresh copy of the report
Check audit history to see when lock status changed
Related Tasks
Lock and Unlock Payment Records - How to manually lock/unlock accounts
Run Retiree Payroll - Process pension payments
Update Payment Information - Fix missing payment data
Change Checking/Bank Account Details - Update bank information

Last Updated: January 2026

← Back to Payroll and Payments
|
Next: Lock and Unlock Records →

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Navigate to the Report
Step 2: Generate the Report
Step 3: Review the Report
Understanding Lock Reasons
Common Scenarios
Scenario: Pre-Payroll Review
Scenario: Identifying Why a Member Didn't Get Paid
Scenario: Clearing Locks After Data Updates
What to Do With Locked Accounts
Report Output Options
Best Practices
Common Questions
Troubleshooting
Issue: Report shows no locked accounts, but member wasn't paid
Issue: Can't generate report - error message appears
Issue: Report shows account locked but member record shows unlocked
Related Tasks