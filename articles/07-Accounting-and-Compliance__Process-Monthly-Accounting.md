# How Do I Process Monthly Accounting?

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-Monthly-Accounting](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-Monthly-Accounting)

---

DOCUMENTATION
00. READINESS JOURNEY
01. GETTING STARTED
02. MEMBERS AND RECORDS
03. CONTRIBUTIONS AND BUYBACKS
04. RETIREMENT AND BENEFITS
05. PAYROLL AND PAYMENTS
06. REFUNDS AND DISTRIBUTIONS
07. ACCOUNTING AND COMPLIANCE
Overview
Generate General Ledger
Update 10-Year Records
Generate 38c Reports
Process 38c Billing
Generate 38c Payable Amounts Report
08. REPORTS AND ANALYTICS
09. COMMUNICATIONS AND MEMBER ENGAGEMENT
10. BATCH PROCESSING AND OPERATIONS
11. SYSTEM ADMINISTRATION
Documentation
chevron_right
Accounting And Compliance
chevron_right
Process Monthly Accounting
How Do I Process Monthly Accounting?

Category: Accounting and Compliance Time: 30-60 minutes (depending on complexity) Difficulty: ⭐⭐⭐⭐ Expert

Related Topics:

Generate General Ledger
Process Cash Receipts and Disbursements
Process Adjustments

March 2026 UI review: Use ☰ → Accounting Center → Accounting card → left-nav targets (e.g. Cash Receipts). Bank reconciliation screens in this doc may not exist as written—confirm in app. Control Account Reconciliation Report visibility should be verified. Adjustments modals use Basic Information, Debit Details, and Credit Details with Amount #1–#9 / Account Number #1–#9. Trial Balance lives under Accounting left-nav with Beginning Date, Ending Date, Exclude Closing Entries, Roll Sub Accts, Show Zero Accounts, File Format (PDF, Web Viewer, XLSX, CSV)—no Account Filter. Year-end close steps referencing Accounting > Period Close or System Administration > Accounting Periods need codebase confirmation. Calculation Results is a left sidebar item, not a tab. Replace Contribution Center with Contributions Center where applicable.

What This Does

The monthly accounting process is a comprehensive month-end close procedure that ensures all financial transactions are recorded, reconciled, and reported accurately for a given accounting period. This process maintains the integrity of your retirement system's financial records, supports regulatory compliance, and provides timely financial information for decision-making.

Why This is Important:

Ensures accurate financial reporting
Maintains compliance with accounting standards
Supports audit trail requirements
Provides timely management information
Identifies errors or discrepancies early
Supports cash flow management
Before You Begin

Prerequisites Checklist:

✅ All Transactions Recorded:

All payroll processed and posted
All member contributions recorded
All benefit payments entered
All employer contributions posted
All cash receipts documented
All cash disbursements recorded

✅ Supporting Documents:

Bank statements received
Investment statements available
Vendor invoices processed
Payroll reports completed

✅ System Access:

Appropriate accounting permissions
Access to all required reports
Ability to post journal entries
Permission to close period (if applicable)

✅ Time Allocation:

Allow 2-4 hours for complete process
Schedule during low-activity period
Ensure availability for questions
Plan for potential issues
Quick Steps
Verify Transaction Completeness - Ensure all transactions are posted
Reconcile Bank Accounts - Match bank statements to system records
Review Control Accounts - Verify balances are reasonable
Process Adjustments - Enter month-end journal entries
Generate Trial Balance - Verify debits equal credits
Review Financial Reports - Analyze results for accuracy
Document and Archive - Save all reports and documentation
Close Period - Lock accounting period (if applicable)
Step-by-Step Instructions
Step 1: Verify Transaction Completeness

Purpose: Ensure all financial activity for the period is recorded in the system.

Actions:

Review Payroll:

Navigate to Payment Center
Review warrant registers for all processed payroll periods
Check for pending payment processing
Confirm payroll totals match expectations
Review and resolve any payroll errors

Check Cash Receipts:

Go to Accounting > Cash Receipts
Review all receipts for the month
Verify deposits match bank statement
Check for missing receipts
Confirm payor information is complete

Verify Cash Disbursements:

Click hamburger menu (☰) → Accounting Center
Click the Accounting card
Click Cash Disbursements in the left navigation menu
Review all disbursements
Match to checks issued
Verify warrant numbers
Check for unrecorded disbursements

Confirm Member Contributions:

Click hamburger menu → Contributions Center
Review contribution batches
Verify all employers submitted data
Check for late or missing contributions
Reconcile contribution totals

Validation:

Run Transaction Summary Report for the month
Compare totals to prior months
Investigate unusual variances
Document any missing transactions
Step 2: Reconcile Bank Accounts

Purpose: Ensure bank statement balances match system cash accounts.

Actions:

Gather Bank Statements:

Obtain bank statements for all accounts
Download electronic statements if available
Note statement ending dates
Review for unusual transactions

Access Control Accounts:

Click hamburger menu (☰) → Accounting Center
Click the Accounting card
Click Control Accounts in the left navigation menu
Locate and select the cash account to reconcile

Mark Cleared Items:

Review list of outstanding checks
Mark checks that cleared the bank
Review list of deposits in transit
Mark deposits that posted to bank

Identify Discrepancies:

Bank Statement Balance:        $1,500,000.00
Less: Outstanding Checks:        ($45,250.00)
Add: Deposits in Transit:         $28,500.00
Adjusted Bank Balance:         $1,483,250.00

System Cash Balance:           $1,483,250.00

Difference:                            $0.00 ✓


Resolve Differences:

Investigate any unreconciled amounts
Common causes:
Timing differences
Bank errors
Recording errors
Missing transactions
Make corrections as needed
Document resolutions

Complete Reconciliation:

Click Save Reconciliation
Print reconciliation report
Obtain approval if required
File with bank statement

Best Practices:

Reconcile within 5 business days of receiving statement
Never force a reconciliation
Document all adjustments
Maintain reconciliation workpapers
Step 3: Review Control Accounts

Purpose: Verify that control account balances are reasonable and supported by detail.

Actions:

Access Control Accounts:

Click hamburger menu (☰) → Accounting Center
Click the Accounting card
Click Control Accounts in the left navigation menu
Review list of all accounts

Review Cash Accounts:

Verify balances match bank reconciliations
Check for negative balances
Review activity for the month
Confirm beginning balance + activity = ending balance

Review Receivable Accounts:

Member Receivables: Match to subsidiary ledger
Employer Receivables: Verify contributions due
Other Receivables: Review aging
Check for old or uncollectible items

Review Payable Accounts:

Benefits Payable: Match to benefit payment schedule
Accounts Payable: Match to vendor aging
Accrued Expenses: Verify amounts are reasonable
Check for missing liabilities

Review Investment Accounts:

Verify balance matches investment statement
Reconcile purchases and sales
Confirm income posting
Check for unrealized gains/losses

Run Control Account Reconciliation Report:

Control Account: Members' Accounts Receivable
System Balance: $250,000.00

Detail (Subsidiary Ledger):
- Member 123456: $500.00
- Member 234567: $1,200.00
- Member 345678: $750.00
... (all members)
Total Detail: $250,000.00

Difference: $0.00 ✓


Red Flags to Investigate:

Negative balances (in wrong account type)
Balances that don't match expectations
Large month-to-month changes
Control vs. detail differences
Inactive accounts with balances
Step 4: Process Month-End Adjustments

Purpose: Record accruals, deferrals, and corrections needed for accurate month-end financials.

Common Month-End Adjustments:

✅ Accrued Expenses:

Unpaid invoices received
Utilities incurred but not billed
Salaries for partial pay periods
Professional services rendered

✅ Prepaid Expenses:

Insurance amortization
Annual fees allocation
Software licenses

✅ Accrued Revenue:

Investment income earned
Interest receivable
Contributions earned but not received

✅ Depreciation:

Monthly depreciation expense
Asset value adjustments

Process:

Click hamburger menu (☰) → Accounting Center
Click the Accounting card
Click Adjustments in the left navigation menu
Click + Adjustment or navigate to existing adjustment
Enter adjustment details:
Date: Last day of month
Description: Clear explanation
Journal Entry Number: Sequential numbering
Debit/Credit Accounts: Proper account codes
Verify debits equal credits
Add comments documenting the adjustment
Click Save

Example Month-End Adjustment:

Date: 01/31/2024
Description: Accrue legal fees for January
Journal Entry: JE-2024-001

Debit:  Legal Fees Expense         $5,000.00  (6400)
Credit: Accrued Legal Fees         $5,000.00  (2120)

Comments: Legal services provided in January.
Invoice #12345 received 02/05/2024.


Documentation:

Maintain adjustment schedule
Attach supporting workpapers
Obtain approvals for significant items
File chronologically
Step 5: Generate and Review Trial Balance

Purpose: Verify that the general ledger is in balance before closing the period.

Actions:

Generate Trial Balance:

Navigate to Reports > Accounting Reports
Select Trial Balance Report
Parameters:
As of Date: Last day of month
Account Filter: All or specific accounts
Include Zero Balances: Yes/No

Review Trial Balance:

TRIAL BALANCE
As of January 31, 2024

Account                    Debit           Credit
───────────────────────────────────────────────────
ASSETS
Cash - Operating          $1,483,250.00
Investments              $45,000,000.00
Receivables                 $250,000.00
───────────────────────────────────────────────────
Total Assets             $46,733,250.00

LIABILITIES
Benefits Payable                         $850,000.00
Accounts Payable                         $125,000.00
───────────────────────────────────────────────────
Total Liabilities                        $975,000.00

EQUITY
Fund Balance                          $45,500,000.00
Net Income (YTD)                         $258,250.00
───────────────────────────────────────────────────
Total Equity                          $45,758,250.00

───────────────────────────────────────────────────
TOTALS                   $46,733,250.00 $46,733,250.00
═══════════════════════════════════════════════════

✓ Trial Balance is in Balance


Verify Balance:

Total Debits MUST equal Total Credits
If out of balance, investigate immediately
Check recent transactions
Review adjustments
Verify posting was complete

Review Account Balances:

Assets should have debit balances
Liabilities should have credit balances
Equity should have credit balance
Revenue should have credit balance
Expenses should have debit balances

Compare to Prior Month:

Identify significant changes
Verify changes are expected
Investigate unusual variances
Document explanations

If Out of Balance:

STOP - Do not proceed
Review most recent transactions
Check adjustment entries
Look for unposted items
Run data integrity checks
Contact IT/support if needed
Step 6: Generate Financial Reports

Purpose: Produce management reports showing financial position and performance.

Key Reports to Generate:

✅ 1. Statement of Financial Position (Balance Sheet):

Shows assets, liabilities, and fund balance
As of last day of month
Compare to prior month and year-end

✅ 2. Account Activity Detail:

Detail for key accounts
Investment activity
Benefit payments
Contribution receipts

Review Process:

Generate Each Report:

Use consistent date parameters
Select appropriate detail level
Include comparative information

Review for Accuracy:

Numbers tie to trial balance
Math is correct
Comparative data is accurate
Formatting is proper

Analyze Results:

Compare to budget
Review trends
Identify unusual items
Calculate key ratios

Document Findings:

Note significant variances
Explain unusual items
Highlight concerns
Prepare management commentary
Step 7: Document and Archive

Purpose: Maintain complete records for audit trail and future reference.

Documentation Checklist:

✅ Month-End Package:

Trial balance
Balance sheet
Income statement
Cash flow statement
Bank reconciliations
Control account reconciliations
Adjustment schedule with support
Variance analysis
Management commentary

✅ Supporting Documents:

Bank statements
Investment statements
Payroll summaries
Contribution reports
Invoice files
Correspondence

✅ Electronic Files:

Export reports to PDF
Save to month-end folder
Backup general ledger
Archive email communications

Organization:

Accounting Records/
  └─ 2024/
     └─ 01-January/
        ├─ Trial Balance.pdf
        ├─ Financial Statements.pdf
        ├─ Bank Reconciliations/
        ├─ Adjustments/
        ├─ Supporting Documents/
        └─ Management Reports/


Retention:

Maintain for required retention period
Follow organization's record retention policy
Ensure accessibility for audits
Store securely
Step 8: Close Accounting Period (If Applicable)

Purpose: Lock the accounting period to prevent changes to closed month data.

⚠️ Important: Only close the period after all review and approval is complete.

Process:

Final Review:

All reports generated and reviewed
All reconciliations complete
All adjustments approved
All documentation archived

Obtain Approvals:

Supervisor review
Management sign-off
Board approval (if required)

Close Period:

 

Method: Year-End Processing Center (For Fiscal Year Close)

 

For closing the accounting year, the system uses a batch process:

Navigate to Year-End Processing Center
Select Calculation Results tab
Click Acct Year End Close button
This submits a batch job that:
Moves the accounting year forward one year
Rolls control account fields forward (Curr Year → Prior Year → 2nd Prior Year → 3rd Prior Year)

⚠️ Prerequisites before running Year End Close:

Run "Acct Close To Rollup" in PERAC Annual Statement section
Generate and verify Trial Balance for the year being closed
Ensure Trial Balance is in balance

Note: For monthly period closes (non-year-end), contact your system administrator for guidance on your organization's specific period close procedures.

Verify Closure:

Period shows appropriate status
System enforces posting restrictions as configured
Audit trail reflects closure

Notes:

Monthly period closes may be managed differently than year-end closes
Consult your system administrator about your organization's specific procedures
Some systems use permissions-based access rather than hard period locks
Document closure in month-end checklist
Maintain ability to make corrections through adjustments if needed
Common Scenarios
Scenario 1: First Month as New Accountant

Situation: You're performing your first month-end close.

Approach:

Review prior month's documentation
Use month-end checklist religiously
Ask questions early and often
Allow extra time for learning
Document your process
Have someone review your work
Note improvements for next month
Scenario 2: Discrepancy Found After Initial Close

Situation: Error discovered after period appears closed.

Actions:

Document the error and impact
Determine if material
If material:
Reopen period if possible
Make correction
Regenerate reports
Re-close with documentation
If immaterial:
Correct in current period
Document in current month notes
Scenario 3: Bank Reconciliation Won't Balance

Situation: Can't reconcile bank account.

Steps:

Verify statement balance entered correctly
Check all cleared items marked
Review outstanding checks list
Look for duplicate entries
Check for transposed numbers
Review bank statement for errors
Look for timing differences
Don't force - find the issue!
Scenario 4: Significant Budget Variance

Situation: Expenses significantly over budget.

Actions:

Identify specific accounts over budget
Review detail transactions
Determine causes:
One-time expenses?
Timing differences?
Unapproved spending?
Budget too low?
Document explanation
Notify management
Recommend corrective action
Best Practices
Process Management

✅ Follow Consistent Schedule:

Close same time each month
Use month-end checklist
Set deadlines for completion
Allow buffer time

✅ Work Systematically:

Complete steps in order
Don't skip steps
Document as you go
Review before moving on

✅ Communicate Effectively:

Notify staff of close schedule
Request needed information early
Provide status updates
Report issues promptly
Quality Control

✅ Reconcile Everything:

Bank accounts
Control accounts
Subsidiary ledgers
Investment accounts

✅ Review for Reasonableness:

Compare to prior periods
Check against budget
Verify unusual items
Calculate key ratios

✅ Document Thoroughly:

Support all adjustments
Explain variances
Maintain audit trail
File systematically
Efficiency Tips

✅ Prepare in Advance:

Request bank statements early
Gather invoices throughout month
Update accrual schedules
Prepare standard adjustments

✅ Use Technology:

Automate recurring entries
Use electronic bank statements
Generate reports in batches
Export to Excel for analysis

✅ Learn and Improve:

Time each step
Note bottlenecks
Streamline processes
Update procedures
Common Questions

Q: How long should month-end close take? A: Typically 30-60 minutes for routine close once experienced. First few closes may take 2-4 hours. Complex months (year-end, quarter-end) take longer. Aim to complete within 5 business days of month-end.

Q: Can I make changes after closing the period? A: Depends on system configuration. Some systems allow reopening with proper permissions. Others require adjustment entries in current period. Check your system's period close functionality and policies.

Q: What if the trial balance doesn't balance? A: Do NOT proceed with closing. The trial balance must balance. Review recent transactions, check adjustments, look for unposted items, and investigate recent deletions. Contact support if you can't find the issue.

Q: Do I need to close every month? A: Best practice is yes - monthly closes ensure timely financial information and catch errors quickly. Some smaller systems may close quarterly, but monthly is recommended for good financial management.

Q: What if bank reconciliation is off by a small amount? A: Never ignore differences, even small ones. They indicate an error somewhere. Common causes: math errors, transposed numbers, missing transactions, bank errors. Find and correct the difference.

Q: Should I close the month if there are pending transactions? A: No. All transactions for the period must be recorded before closing. Verify payroll posted, contributions recorded, bills entered, and adjustments made before proceeding with close.

Q: Who should review my month-end work? A: Have supervisor or senior accountant review initially. After several months of accurate closes, may require review only quarterly or for unusual items. Always have second person review significant adjustments.

Q: How do I handle transactions that span month-end? A: Use accrual accounting: record expenses in the month incurred (even if not paid) and revenue in month earned (even if not received). This requires month-end adjusting entries.

Q: What reports do I need to provide to management? A: At minimum: balance sheet, income statement (with budget comparison), and narrative explaining significant variances. May also include cash flow statement, investment performance, and key metrics.

Q: How far back should I compare financial results? A: Compare to: (1) prior month, (2) same month last year, and (3) budget. Year-to-date comparisons are also valuable. This helps identify trends and unusual variances.

Troubleshooting
Issue: Transaction Posted to Wrong Period

Symptoms: Transaction shows in wrong month's reports

Solutions:

If period still open:
Edit transaction date
Verify new date is correct
Regenerate reports
If period closed:
May need to reopen period
Or make correcting entry in current period
Document the correction
Adjust comparative reports
Issue: Adjustment Entry Rejected

Symptoms: System won't save journal entry

Solutions:

Verify debits equal credits exactly
Check all required fields completed
Ensure account numbers are valid
Verify date is in open period
Check permissions for adjustments
Review for any validation errors
Issue: Report Shows Unexpected Balance

Symptoms: Account balance doesn't match expectations

Solutions:

Run account activity detail report
Review all transactions for the period
Check beginning balance
Verify transactions posted correctly
Look for duplicate entries
Check for missing transactions
Compare to prior period
Issue: Can't Complete Close On Time

Symptoms: Month-end dragging past deadlines

Solutions:

Identify the bottleneck:
Waiting for information?
Technical issues?
Resource constraints?
Short-term:
Request deadline extension
Prioritize critical items
Get help from colleagues
Long-term:
Start earlier next month
Improve communication
Streamline processes
Update procedures
Issue: Significant Unexplained Variance

Symptoms: Large budget variance or month-to-month change

Solutions:

Generate detailed account activity
Review significant transactions
Compare to prior year same month
Check for:
Unusual expenses
Timing differences
Reclassifications
Data entry errors
Missing reversing entries
Document findings
Correct errors or explain variance
Related Tasks
Generate General Ledger
Process Cash Receipts and Disbursements
Process Adjustments
Process Accounting Year-End Close

Last Updated: January 2026

← Back to Accounting and Compliance

ON THIS PAGE
What This Does
Before You Begin
Quick Steps
Step-by-Step Instructions
Step 1: Verify Transaction Completeness
Step 2: Reconcile Bank Accounts
Step 3: Review Control Accounts
Step 4: Process Month-End Adjustments
Step 5: Generate and Review Trial Balance
Step 6: Generate Financial Reports
Step 7: Document and Archive
Step 8: Close Accounting Period (If Applicable)
Common Scenarios
Scenario 1: First Month as New Accountant
Scenario 2: Discrepancy Found After Initial Close
Scenario 3: Bank Reconciliation Won't Balance
Scenario 4: Significant Budget Variance
Best Practices
Process Management
Quality Control
Efficiency Tips
Common Questions
Troubleshooting
Issue: Transaction Posted to Wrong Period
Issue: Adjustment Entry Rejected
Issue: Report Shows Unexpected Balance
Issue: Can't Complete Close On Time
Issue: Significant Unexplained Variance
Related Tasks