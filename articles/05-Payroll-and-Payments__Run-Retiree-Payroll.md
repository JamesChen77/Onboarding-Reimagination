# How Do I Run Retiree Payroll?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Run-Retiree-Payroll](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Run-Retiree-Payroll)

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
Run Retiree Payroll
How Do I Run Retiree Payroll?

Category: Payroll and Payments Time: 45-60 minutes Difficulty: ⭐⭐⭐ Advanced

Before You Begin:

Ensure all member status updates are complete
Verify deduction changes have been entered
Have bank account information ready
Back up your data before processing payroll
Verify federal tax year is set correctly
Combined run must be authorized
All required payroll settings configured
Begin payroll check numbers available
Vendor payment numbers assigned
Latest member and vendor data updated

Related Topics:

Manage Vendor Payments
Generate Retiree Checks
Generate Direct Deposit Files
Generate Notice of Deposits (NODs)
What This Does

Runs the complete retiree payroll and vendor payment processing workflow through a 7-step wizard. Processes monthly payroll and vendor payments simultaneously using a combined batch process. This guided workflow walks you through starting the payroll run, validating payment amounts, reviewing warrant details, creating reports, and posting transactions to the register. The Combined Run ensures payroll and vendor payments are processed together efficiently and accurately.

The Payroll Wizard handles:

Retiree payroll - Monthly pension payments to retired members
Vendor payments - Payments to service providers and vendors
Combined processing - Both payroll and payments in a single unified workflow
Warrant generation - Creates payment warrants for review
Register posting - Posts approved payments to the financial register

Key Features:

✅ Integrated Processing

Process payroll and vendor payments together
Single batch run combines both functions
Saves time and reduces manual steps

✅ Built-In Validation

Gross payment amount verification
Net payment amount confirmation
Batch integrity checks before advancing
Transaction detail review capability

✅ Comprehensive Warranty Review

Access payroll warrant details
View individual member transactions
Review vendor payment warrant
Print reports for audit trail

✅ Complete Transaction Recording

All payments posted to register
Member check register maintained
Vendor register updated
Full audit trail created

✅ Flexible Control

Review at each step before advancing
Rerun payroll if needed
Access multiple views of transaction data
Generate reports as required
Quick Steps
Navigate to Payment Center → Payroll & Vendor Payment Wizard
Run Combined Payroll & Vendor Payments (Step 1)
Review Payroll Warrant (Step 2)
Review Vendor Warrant (Step 3)
Generate Reports (Step 4)
Post to Register (Step 5)
Review Registers and Complete (Steps 6-7)
Step-by-Step Instructions
Step 1: Open the Payroll Wizard

Where to Go:

Click hamburger menu (☰) → Payment Center
Click Payroll & Vendor Payment wizard card
The Payroll Processing Wizard opens

What You'll See:

7-step horizontal wizard interface
Step 1: Run Payroll (active)
All other steps disabled until payroll is run

💡 Tip: The wizard saves your progress automatically. You can close and return to resume where you left off.

Step 2: Run Combined Payroll & Vendor Payments

Where to Go:

You're on Step 1: Run Payroll
Click Run Combined Payroll & Vendor Payments button

What to Enter:

The "Run Payroll & Payment" modal opens with two side-by-side sections:

Payroll Run Settings Section:

Payroll Date (required)

Select the payment date for payroll processing
Usually the 1st of the month for retirees
Example: 02/01/2026

Begin Payroll Check Number (required)

Enter starting check number for retiree payments
Example: 10001
System will increment for each check

Payroll Posting Number (required)

Enter a unique identifier (up to 10 characters)
Format is defined by each retirement board—use your board’s convention; do not assume a particular pattern
Used to track this payroll run

Federal Tax Year (read-only)

Automatically populated from system settings
Verify it shows current year

Vendor Payment Settings Section:

Posting Date (required)

Select the date for vendor payment posting

Begin Vendor Check Number (required, unless continuing from member check number)

Enter starting check number for vendor payments
Example: 20001
Hidden when "Continue With Member Check Number" is checked

Vendor Posting Number (required)

Enter unique identifier for vendor (end checks) payments
Format is defined by each retirement board; there is no required pattern—use your board’s convention and keep it distinct from the payroll posting number when your process requires that

Continue With Member Check Number (checkbox)

When checked, vendor checks continue numbering from the last member payroll check
Hides the separate Begin Vendor Check Number field

Skip Vendor Payment Processing (checkbox)

When checked, disables all vendor payment fields and runs payroll only
Button label changes to "Run Payroll" instead of "Run Payroll & Payment"

What Happens:

Click Run Payroll & Payment (or Run Payroll if skipping vendor payments)
System validates your entries
Batch job is created and sent to queue
Success message: "Payroll Run Sent to Batch Process Successfully"
Wizard advances to Step 2

⚠️ Important: The payroll calculation runs as a batch job. This may take 2-10 minutes depending on the number of records.

During Processing:

Batch progress indicator shows on screen
Status shows "Queued" or "In Progress"
Wait for batch to complete before proceeding
Click Batch Result button to view batch details
Step 3: View Warrant (Step 2)

Where to Go:

Wizard automatically enables Step 2 after payroll runs
Or click Step 2 in the wizard stepper

What You'll See:

The View Warrant screen displays a table of all calculated retiree payments with the following columns:

Column	Description
Payment/Calculation Type	The payment or calculation type
Transaction Number	Unique transaction identifier
Transaction Date	Date of the transaction
Payee Name / SSN Last 4	Payee name with last 4 digits of SSN
Member Employee #	Member's employee number
Payee Type	Type of payee
Payment ID	Payment identifier
Annuity	Annuity amount
Pension	Pension amount
Gross Amount	Gross payment amount
Net Amount	Net payment amount
Unit	Member's organizational unit

Totals displayed at the bottom of the table:

Annuity Amount - Total annuity across all records
Pension Amount - Total pension across all records
Gross Payment Amount - Total gross payment across all records
Net Payment Amount - Total net payment across all records

Available Filters:

Payment Type - Filter by payment or calculation type
Unit - Filter by organizational unit
Member Search - Locate a specific member record (available under "More Filters")
Voided Only - Show only voided records (available under "More Filters")

What to Review:

Annuity Amount - Verify annuity values are correct
Pension Amount - Verify pension values are correct
Gross Payment Amount - Confirm total gross payments match expectations
Net Payment Amount - Check net amounts after deductions
Transaction Date - Confirm payment date is correct

Actions Available:

Batch Result - View batch processing details/errors
Print - Generate warrant reports
Print Report
Print Report by Unit
Rerun - Reprocess payroll if corrections needed
Next Step - Proceed to Step 3

If You Find Errors:

Click Rerun button
Make corrections in the modal
System will reprocess the payroll
Review the updated warrant

💡 Tip: Click any row to see full transaction details in a popup.

Step 4: Review Vendor Warrant (Step 3)

Where to Go:

Click Next Step from Step 2
Or click Step 3 in the wizard stepper

What You'll See:

Table showing all vendor payment transactions
Payment Posting Number displayed in header
Vendor names, amounts, and payment details

What to Review:

Vendor Count - Number of vendors being paid
Payment Amounts - Verify amounts are correct
Payment Types - Check types (checks, EFT, etc.)
Vendor Names - Confirm all vendors are correct

Actions Available:

Batch Result - View batch processing details
Print - Generate Vendor Payment Warrant Report
Rerun - Reprocess if corrections needed
Next Step - Proceed to Step 4
Step 5: Generate Reports (Step 4)

Where to Go:

Click Next Step from Step 3
Or click Step 4: Create Reports in the stepper

What You'll See:

Three tabs: Payroll Report Wizard, Payroll Reports, Vendor Payment Reports
Cards for each available report
Report Archives section at bottom

Report Options:

Payroll Report Wizard Tab:

Generate All Reports via Wizard - Run multiple reports in sequence

Payroll Reports Tab:

Print Retiree Payroll Checks - Physical checks for retirees
Print NODs - Notice of Deposits for direct deposit recipients
Print Zero Amount Checks - Checks with $0.00 amount (if any)
DD File Report - Direct deposit ACH file
Check Reconciliation Report - For bank reconciliation
Positive Pay File - Fraud prevention file for bank
Renumber Checks - Change check numbers in sequence
Warrant Reports - Various warrant detail reports

Vendor Payment Reports Tab:

Print Vendor Checks - Physical checks for vendors
Print Vendor NODs - Notice of payments
Renumber Vendor Checks - Change vendor check numbers

How to Generate Reports:

Click the report card you need
Report generation modal opens
Posting number pre-filled automatically
Adjust any parameters (date range, filters, etc.)
Select output format (PDF, Excel, CSV)
Click Generate Report
Report is added to batch queue

Typical Reports to Generate:

Print Retiree Payroll Checks (if using physical checks)
Print NODs (for direct deposit recipients)
DD File Report (ACH file for bank)
Positive Pay File (for fraud prevention)
Vendor Checks (if applicable)

💡 Tip: Use the Payroll Report Wizard to generate all required reports at once in a streamlined workflow.

When Done with Reports:

Click Next Step to proceed to Step 5
Step 6: Post to Register (Step 5)

Where to Go:

Click Next Step from Step 4
Or click Step 5: Post to Register in the stepper

What This Does: Posts the approved payroll and vendor payment warrants to the financial register, making the transactions official and permanent.

What to Do:

Review the posting numbers displayed:
Payroll Posting #
Payment Posting #
Posting Date
Click Post to Payroll and Vendor Register button
Confirmation modal appears

In the Modal:

Posting Number - Pre-filled with your payroll posting number
Total Gross Payment Amount - Read-only, shows total gross
Total Net Payment Amount - Read-only, shows total net

Final Steps:

Review the totals
Click Post to Register
System creates batch job for posting
Success message: "Posting to Register Sent to Batch Process"
Wait for batch to complete (usually 1-3 minutes)

⚠️ Important: Once posted to the register, transactions become permanent. Ensure warrants are correct before posting.

What Happens:

Payroll transactions posted to Check/DD Register
Vendor transactions posted to Vendor Register
Accounting entries created
Member payment history updated
Vendor payment history updated
Step 7: View Vendor Register (Step 6)

Where to Go:

Wizard automatically enables Step 6 after posting
Or click Step 6: View Vendor Register

What You'll See:

Table showing all posted vendor payment records
Register entries with transaction details
Batch Result button to check posting results

What to Review:

All vendor payments posted correctly
Transaction numbers assigned
Register entries are complete

Actions Available:

Batch Result - View posting batch details
Print - Generate Vendor Payment Report
Next Step - Proceed to final step
Step 8: View Payroll Register (Step 7)

Where to Go:

Click Next Step from Step 6
Or click Step 7: View Payroll Register

What You'll See:

Check/Direct Deposit Register
All posted retiree payment records
Transaction numbers, check numbers, amounts

What to Review:

All retiree payments posted correctly
Check numbers assigned properly
Direct deposit records are correct
Register entries match warrant

Actions Available:

Batch Result - View posting batch details
Complete Payroll Run - Finish and close the wizard
Step 9: Complete the Wizard

When You're Ready:

Review both registers (Steps 6 & 7)
Verify all postings are correct
Click Complete Payroll Run button
Confirmation popup appears

What Happens:

Wizard is marked as complete
Wizard session is deleted
You return to Payment Center
A new wizard can be started for next payroll cycle

✅ Success: Your retiree payroll and vendor payments are now complete and posted!

Common Scenarios
Scenario: Standard Monthly Retiree Payroll

Situation: Process regular monthly pension payments on the 1st of the month.

Steps:

Run wizard on the last business day of prior month
Enter a Payroll Posting Number per your board’s rules (conventions vary by board—there is no single required format)
Set payroll date to 1st of month
Review warrants for any exceptions
Generate all standard reports (checks, NODs, DD file)
Post to register
Review registers and complete

Timeline:

Day 1: Run payroll and review warrants
Day 2: Generate reports and post to register
Day 3: Review registers and complete
Scenario: Including COLA Increases

Situation: Annual Cost of Living Adjustment (COLA) effective this month.

Before Running Payroll:

Navigate to Payment Center → COLA Processing → COLA
Calculate and post COLA increases
Verify COLA amounts updated in member records

Then:

Run normal retiree payroll process
Verify gross amounts reflect COLA increase
Generate Payroll Comparison Report to show increases
Complete payroll as normal
Scenario: New Retirees This Month

Situation: Members retired last month, first pension payment this month.

Before Running Payroll:

Verify member status changed to "Retired"
Confirm retirement calculation is complete
Verify payment method (check or direct deposit) is set
Ensure bank account info entered (if direct deposit)

Then:

Run payroll as normal
New retirees automatically included
Review warrant carefully for new retirees
Verify first payment amounts are correct
Complete payroll process
Scenario: Correcting Payroll After Running

Situation: You found an error after running payroll but before posting.

Steps:

In Step 2 or 3 (warrant review), click Rerun button
Modal opens with current parameters pre-filled
Make necessary corrections
Click Run Combined Payroll & Vendor Payments
System reprocesses with corrections
Review updated warrants
If correct, proceed to reports and posting

⚠️ Important: You can only rerun before posting to register. After posting, you'll need to void and reprocess.

Best Practices

✅ DO:

Run payroll at least 2 days before payment date
Review batch results for errors or warnings
Generate Payroll Comparison Report for audit trail
Verify total gross and net amounts match budget
Save warrant PDFs before posting
Review exception reports for unusual amounts
Confirm bank accounts are current before running
Back up data before processing payroll
Set federal tax year before first payroll of year
Process COLA increases before affected payroll run

❌ DON'T:

Post to register without reviewing warrants carefully
Skip checking the Batch Result for errors
Run payroll on the actual payment date (too late)
Forget to generate required reports before posting
Process payroll with pending member status changes
Ignore warning messages from the system
Run multiple payroll batches simultaneously
Close wizard before completing all steps
Skip the vendor warrant review step
Common Questions

Q: How long does the payroll batch take to run? A: Typically 2-10 minutes depending on the number of retirees. Small systems (under 500 retirees) usually complete in 2-3 minutes. Watch the batch progress indicator for status updates.

Q: Can I close the wizard and come back later? A: Yes! The wizard saves your progress automatically. Return to Payment Center, then reopen the Payroll & Vendor Payment wizard card. It will resume at your last step with all posting numbers preserved.

Q: What if the batch job fails? A: Click the Batch Result button to view error details. Common causes: missing bank accounts, invalid member statuses, or incorrect deduction codes. Fix the underlying issue and click Rerun to try again.

Q: Can I run payroll for retirees only without vendor payments? A: The wizard is designed for combined processing, but you can leave vendor check number as 0 or minimal and simply not include vendors in the run. However, it's more efficient to process both together.

Q: What's the difference between the warrant and the register? A: The warrant (Steps 2-3) is a calculated preview before posting - you can still make changes. The register (Steps 6-7) shows officially posted transactions - these are permanent and require voids to correct.

Q: How do I know which reports to generate? A: At minimum:

Print Checks (if using physical checks)
Print NODs (for direct deposit)
DD File Report (ACH file for bank)
Positive Pay File (fraud prevention) Use the Payroll Report Wizard to generate all required reports at once.

Q: Can I edit payments after posting to the register? A: No. Once posted, transactions are permanent. You must void the incorrect payment and create a manual correction, or include the correction in next month's payroll.

Q: What if a retiree didn't get included in the payroll? A: Check their member status - must be "Retired" or "Active-Retired". If status is correct but still missing, verify they have payment information set up. You may need to process a manual payment for that member.

Q: How do I handle a retiree who passed away mid-month? A: Update their status to "Deceased" before running payroll. They won't be included in the current run. For death benefits or refunds, use the Death Refund processing workflow separately.

Q: What's the purpose of the federal tax year field? A: Determines which tax tables to use for withholding calculations. System auto-fills from settings. Only relevant for members with tax withholding. Should update January 1st each year.

Q: Can I process two different payrolls in one month? A: Yes, but use different posting numbers for each run (per your board’s numbering rules). Each creates a separate wizard session. Process completely before starting the next.

Troubleshooting
Issue: "No data found" in Step 2 (Payroll Warrant)

Possible Causes:

Batch job is still running (wait for completion)
Batch job failed (check Batch Result)
No retirees met criteria for payment

Solutions:

Click Batch Result button to check batch status
If batch shows errors, review error messages
Common error: No active retired members with payment info
Click Rerun to reprocess after fixing issues
If no errors but no data, verify retiree statuses in system
Issue: Batch job stuck in "Processing" status

Solutions:

Wait at least 10 minutes - large payrolls take time
Refresh the page (wizard state is saved)
Check Batch Center for detailed status
Contact system administrator if stuck >30 minutes
Do not start a new payroll run - wait for current batch
Issue: Retiree missing from warrant

Possible Causes:

Member status not set to "Retired"
Payment method not configured
Bank account missing (for direct deposit)
Member payment is locked

Solutions:

Navigate to the member's profile
Check Status field - should be "Retired" or "Active-Retired"
Check Payment Information section for payment method
Verify bank account details if direct deposit
Check for payment lock (see Lock and Unlock Payment Records doc)
Update member record and rerun payroll
Issue: Incorrect payment amount

Possible Causes:

Retirement calculation not updated
Deduction amount changed but not reflected
COLA not applied
Manual adjustment needed

Solutions:

Review member's retirement calculation record
Check deduction amounts in member profile
Verify COLA was processed if applicable
After fixing: Click Rerun in Step 1
Or void payment after posting and create manual correction
Issue: Cannot post to register - button disabled

Possible Causes:

Still viewing earlier steps (not on Step 5)
Batch job still running
No warrant data available

Solutions:

Ensure you're on Step 5: Post to Register
Wait for any batch jobs to complete
Verify Steps 2 and 3 show warrant data
Check Batch Result for errors
May need to rerun payroll if warrants are empty
Issue: Wrong check numbers assigned

Possible Causes:

Entered incorrect beginning check number
Check numbering continued from previous run incorrectly

Solutions:

Before posting: Click Rerun and enter correct check number
After posting: Use Renumber Checks utility
Go to Step 4: Create Reports
Click "Renumber Checks" card
Enter new beginning check number
System renumbers all checks in sequence
Generate new check reports with correct numbers
Issue: Direct deposit file won't generate

Possible Causes:

No direct deposit members in payroll
Bank routing information missing
ACH file settings not configured

Solutions:

Verify some retirees have payment method = "Direct Deposit"
Check bank routing numbers in member profiles
Review System Settings → Bank Information
Ensure ACH file format is configured
Contact system administrator for ACH setup issues
Related Tasks
Manage Vendor Payments - Process vendor payments separately
Update COLA and Dependent Allowance - Apply COLA increases
Update Federal Tax Withholdings - Modify tax withholding
Lock and Unlock Payment Records - Control payment processing
Generate Retiree Checks - Print physical checks
Generate Direct Deposit Files - Create ACH files
Generate Notice of Deposits (NODs) — First-time NODs from Retiree Payroll → Step 3: Create Reports; Reports Center → Reprint - Retiree Notice of Deposit is only for copies after posting to the Check/DD Register (see that topic)
Generate Positive Pay Files - Fraud prevention files
Void Check or Transaction - Correct payment errors

Last Updated: January 2026

← Back to Payroll and Payments
|
Next: Generate Retiree Checks →

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Open the Payroll Wizard
Step 2: Run Combined Payroll & Vendor Payments
Step 3: View Warrant (Step 2)
Step 4: Review Vendor Warrant (Step 3)
Step 5: Generate Reports (Step 4)
Step 6: Post to Register (Step 5)
Step 7: View Vendor Register (Step 6)
Step 8: View Payroll Register (Step 7)
Step 9: Complete the Wizard
Common Scenarios
Scenario: Standard Monthly Retiree Payroll
Scenario: Including COLA Increases
Scenario: New Retirees This Month
Scenario: Correcting Payroll After Running
Best Practices
Common Questions
Troubleshooting
Issue: "No data found" in Step 2 (Payroll Warrant)
Issue: Batch job stuck in "Processing" status
Issue: Retiree missing from warrant
Issue: Incorrect payment amount
Issue: Cannot post to register - button disabled
Issue: Wrong check numbers assigned
Issue: Direct deposit file won't generate
Related Tasks