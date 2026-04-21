# Generate General Ledger

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Generate-General-Ledger](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Generate-General-Ledger)

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
Generate General Ledger
Generate General Ledger
Overview

The General Ledger (GL) is the comprehensive record of all financial transactions in your retirement system. It serves as the foundation for financial statements, audit trails, and regulatory reporting. This guide explains how to generate and use General Ledger reports in PensionPro to analyze account activity, verify balances, and maintain accurate financial records.

Time Estimate: 15-30 minutes depending on report complexity Frequency: Monthly, Quarterly, Year-End, or As Needed User Role Required: Accountant, Financial Administrator, Auditor

Table of Contents
Prerequisites
Understanding the General Ledger
Access General Ledger Reports
Generate GL Reports
Trial Balance Reports
Account Activity Reports
Reconciliation Reports
Analyze General Ledger Data
Best Practices
Troubleshooting
Prerequisites

Before generating General Ledger reports, ensure:

✅ All transactions are posted to the appropriate accounts
✅ Control accounts are properly configured and maintained
✅ Account structure follows your chart of accounts
✅ Period close procedures are complete (for period-end reports)
✅ Appropriate permissions are assigned to your user role
✅ Reconciliations are current for key accounts
Understanding the General Ledger
What is the General Ledger?

The General Ledger is the central repository of all accounting data in the system. It contains:

All financial transactions from various modules
Account balances for assets, liabilities, equity, revenue, and expenses
Transaction details including dates, amounts, descriptions, and references
Audit trail showing who entered and modified transactions
GL Structure

Account Components:

Account Number: 1010-01-001
              │  │  │  └─ Sub-account
              │  │  └──── Department
              │  └─────── Account Type
              └────────── Major Category

Example:
1010 = Cash - Operating Account (Asset)
2110 = Accounts Payable (Liability)
3100 = Fund Balance (Equity)
4010 = Member Contributions (Revenue)
6100 = Salaries Expense (Expense)

Transaction Sources

Transactions flow into the GL from multiple modules:

Cash Receipts - Money received
Cash Disbursements - Money paid out
Adjustments - Non-cash journal entries
Member Transactions - Contribution and benefit activity
Payroll Processing - Payroll and deductions
Year-End Processing - Closing and allocation entries
Access General Ledger Reports
Navigation Method 1: From Accounting Center
Click hamburger menu (☰) → Accounting Center
Click the Reports card
The Reports tab opens with Accounting category reports filtered
Choose from available GL reports
Navigation Method 2: From Reports Center
Click Reports Center from main menu
Filter by Category: Accounting
Browse available Accounting reports, which may include:
Adjustments
Cash Disbursements
Cash Positive Pay File
Cash Receipts
Cash Receipts (Print)
Control Accounts Long
Control Accounts Short
General Ledger
Summary of Accounts
Trial Balance
Select the report you need
Generate report
Navigation Method 3: From Control Accounts
Click hamburger menu (☰) → Accounting Center
Click the Accounting card
Click Control Accounts in the left navigation menu
Select an account
Click View Activity or Generate Report button
Access account-specific GL reports
Generate GL Reports
General Ledger Detail Report

Purpose: Comprehensive listing of all transactions by account

When to Use:

Monthly closing review
Audit preparation
Detailed transaction analysis
Reconciliation support
Period-over-period comparison
To Generate:

Access Report Generator:

Navigate to Accounting Center → Reports card
Or navigate to Reports Center and filter by Accounting category
Select "General Ledger Report"

Enter Report Parameters:

 

The General Ledger Report modal will display available configuration options. Common parameters may include:

 

Date Range:

Beginning Date: Start of reporting period (Required)
Ending Date: End of reporting period (Required)
Common selections:
Current month: 01/01/2024 to 01/31/2024
Fiscal year-to-date: 07/01/2023 to 01/31/2024
Fiscal year: 07/01/2023 to 06/30/2024
Custom: Any date range

Account Selection (if available):

Show Zero Accounts?: Include accounts with no activity
Exclude Closing Entries?: Omit year-end closing transactions
Show Where From?: Display transaction source module
Account filters: Select specific accounts or ranges
Show Budget Numbers?: Include budget comparison data

Additional Options (if available):

Beginning and ending balances
Transaction IDs
Journal entry numbers
Comments and notes

Output Format:

Select format: PDF, Excel, CSV, or Web Viewer
Choose options as available in the modal

Generate Report:

Click Generate Report button
Report queues for processing
Monitor status in Recent Reports or Reports Archive
Report Content:

Report Header:

GENERAL LEDGER REPORT
[Retirement System Name]
Period: January 1, 2024 to January 31, 2024
Generated: February 5, 2024 10:30 AM
Generated By: John Smith


Account Section (for each account):

Account: 1010-00 - Cash - Operating Account
Beginning Balance: $1,250,000.00

Date       Trans ID  Description              Reference    Debit        Credit       Balance
---------- --------- ------------------------ ------------ ------------ ------------ ------------
01/05/2024 CR-12345  Member Contributions     JE-001       $125,000.00               $1,375,000.00
01/10/2024 CD-12346  Benefit Payments         CK-1001                   $85,000.00   $1,290,000.00
01/15/2024 CR-12347  Employer Contributions   JE-002       $95,000.00                $1,385,000.00
01/20/2024 CD-12348  Administrative Expenses  CK-1002                   $12,500.00   $1,372,500.00
01/31/2024 AJ-12349  Bank Service Charge      JE-003                    $50.00       $1,372,450.00

Ending Balance: $1,372,450.00

Total Debits:  $220,000.00
Total Credits: $97,550.00
Net Change:    $122,450.00


Report Summary:

Total assets
Total liabilities
Total equity
Total revenue
Total expenses
Net income/loss
Trial Balance Reports
What is a Trial Balance?

A trial balance lists all general ledger accounts and their balances at a specific point in time. It verifies that total debits equal total credits.

Standard Trial Balance

Purpose: Verify accounting equation balance

Report Shows:

All active accounts
Current balances by account
Debit and credit column totals
Verification that debits = credits
To Generate:

Navigate to Accounting Center → Reports card

Or navigate to Reports Center and filter by Accounting category

Select "Trial Balance Report"

Enter parameters:

Beginning Date (Required): Start date for the balance calculation
Ending Date (Required): End date for the balance calculation
Roll Sub Accts? (Optional): Roll up sub-account balances into parent accounts
Exclude Closing Entries? (Optional): Omit year-end closing transactions from the balance
Include Zero Balances (if available): Yes/No

Select output format (PDF, Excel, CSV, Web Viewer)

Click Generate Report

Report Format:

Note: The actual Trial Balance report is a movement schedule showing activity over the period.

TRIAL BALANCE
Period: January 1, 2024 to January 31, 2024

Account Number  Account Description              Beginning      Debits         Credits        Ending
                                                Balance                                       Balance
--------------  -------------------------------  -------------  -------------  -------------  -------------
ASSETS
1010-00         Cash - Operating Account         $1,250,000.00  $220,000.00    $97,550.00     $1,372,450.00
1020-00         Cash - Payroll Account           $100,000.00    $50,000.00     $25,000.00     $125,000.00
1100-00         Investments                      $44,500,000.00 $750,000.00    $250,000.00    $45,000,000.00
1200-00         Receivables                      $200,000.00    $75,000.00     $25,000.00     $250,000.00
                                                 -------------  -------------  -------------  -------------
Total Assets                                     $46,050,000.00 $1,095,000.00  $397,550.00    $46,747,450.00

LIABILITIES
2100-00         Accounts Payable                 $100,000.00    $50,000.00     $75,000.00     $125,000.00
2200-00         Benefits Payable                 $900,000.00    $150,000.00    $100,000.00    $850,000.00
                                                 -------------  -------------  -------------  -------------
Total Liabilities                                $1,000,000.00  $200,000.00    $175,000.00    $975,000.00

(... continues for all account types ...)


The report includes four data columns:

Beginning Balance: Balance at start of period
Debits: Total debit activity during period
Credits: Total credit activity during period
Ending Balance: Balance at end of period
Comparative Trial Balance

Purpose: Compare account balances across multiple periods

Report Shows:

Current period balances
Prior period balances
Dollar change
Percentage change
Variance analysis

Use Cases:

Month-to-month comparison
Year-over-year analysis
Budget vs. actual review
Trend identification
Account Activity Reports
Account Transaction Detail

Purpose: Detailed activity for specific account(s)

When to Use:

Reconciling specific accounts
Investigating discrepancies
Supporting audit requests
Analyzing account behavior
To Generate:
Select "Account Activity Report"
Parameters:
Account Number: Specific account
Date Range: Period to analyze
Include: All or specific transaction types
Sort: Date, amount, or description
Report Shows:
All transactions affecting the account
Transaction dates and descriptions
Reference numbers (checks, JEs, etc.)
Debits, credits, and running balance
Source module for each transaction
Account Summary Report

Purpose: High-level activity summary by account

Report Shows:

Acct Nbr: Account number
Description: Account name/description
Debits: Total debit activity
Credits: Total credit activity

Note: The Summary of Accounts Report does not include balance columns. It focuses on the debit and credit activity for the reporting period.

Use Cases:

Quick account overview
Identifying unusual activity
Period comparison
Management reporting
Reconciliation Reports
Bank Reconciliation Support

Purpose: Reports to support bank reconciliation

Reports Include:

Cash Account Activity: All cash transactions
Outstanding Checks: Checks not yet cleared
Deposits in Transit: Receipts not yet posted by bank
Reconciliation Worksheet: Template for reconciliation
Control Account Reconciliation

Purpose: Verify subsidiary ledgers match control accounts

Examples:

Member accounts receivable detail vs. A/R control
Benefits payable detail vs. liability control
Investment detail vs. investment control

Report Shows:

Control account balance
Sum of subsidiary detail
Difference (should be zero)
Discrepancy details
Analyze General Ledger Data
Review Checklist

✅ Balance Verification:

Verify trial balance is in balance
Check that account totals are reasonable
Compare to prior periods
Review significant variances

✅ Transaction Review:

Scan for unusual amounts
Verify proper coding
Check for duplicates
Confirm appropriate dates

✅ Account Balances:

Assets have debit balances
Liabilities have credit balances
Equity has credit balance
Revenue has credit balance
Expenses have debit balances
Common Analysis Techniques

1. Variance Analysis

Compare actual to budget
Review period-over-period changes
Investigate significant variances
Document explanations

2. Trend Analysis

Chart account balances over time
Identify patterns or anomalies
Project future activity
Support planning

3. Ratio Analysis

Calculate key financial ratios
Compare to benchmarks
Assess financial health
Monitor compliance

4. Exception Analysis

Filter for large transactions
Identify round numbers (potential errors)
Flag negative balances (where inappropriate)
Check for unusual dates
Best Practices
Regular GL Review

✅ Monthly Procedures:

Generate and review GL detail report
Run trial balance
Reconcile key accounts
Investigate unusual items
Document findings

✅ Quarterly Procedures:

Comparative analysis (this quarter vs. last quarter)
Year-to-date review
Budget variance analysis
Update projections

✅ Annual Procedures:

Comprehensive GL review
Complete all reconciliations
Prepare audit schedules
Archive reports
Data Quality

✅ Transaction Entry:

Use clear descriptions
Assign proper account codes
Include reference numbers
Add comments for complex items

✅ Account Maintenance:

Keep chart of accounts current
Inactivate unused accounts
Document account purposes
Review account structure annually

✅ Period Close:

Complete all entries before closing
Run closing checklist
Review post-close reports
Archive period documentation
Report Management

✅ Generation:

Use consistent parameters
Generate reports on schedule
Review immediately after generation
Regenerate if errors found

✅ Distribution:

Share with appropriate stakeholders
Maintain security/confidentiality
Track distribution
Follow retention policies

✅ Archiving:

Save all generated reports
Organize by period and type
Maintain according to retention schedule
Ensure accessibility for audits
Troubleshooting
Issue: Trial Balance Doesn't Balance

Symptoms: Total debits don't equal total credits

Solutions:

Verify Date Range

Ensure "As of" date is correct
Check if period is fully closed
Confirm all transactions posted

Check for Partial Entries

Review recent entries
Look for saved but not posted transactions
Check for deleted transactions

Run Integrity Check

Use system utilities to verify data
Check for orphaned transactions
Verify account balances recalculate correctly

Review Adjustments

Check recent journal entries
Verify adjustments balanced
Look for entry errors
Issue: Account Balance Seems Wrong

Symptoms: Balance doesn't match expectations

Solutions:

Review Transaction Detail

Generate account activity report
Look for large or unusual transactions
Check for duplicate entries
Verify proper account coding

Check Beginning Balance

Verify opening balance is correct
Compare to prior period closing
Check for adjustments to prior period

Verify Date Range

Ensure report includes all relevant dates
Check for transactions outside expected range
Verify fiscal period settings

Reconcile

Compare to subsidiary ledger
Reconcile to external sources (bank, etc.)
Document discrepancies
Issue: Transactions Missing from GL

Symptoms: Expected transactions don't appear in report

Solutions:

Check Date Range

Expand date range
Verify transaction date
Check if transaction was backdated

Verify Account Filter

Ensure correct account selected
Check if "All Accounts" needed
Review account number carefully

Check Transaction Status

Verify transaction was saved
Check if transaction was posted
Look in draft/pending area

Review Transaction Type

Check if report filters exclude type
Verify transaction source module
Ensure transaction wasn't voided
Issue: Report Won't Generate

Symptoms: Report generation fails or times out

Solutions:

Simplify Parameters

Reduce date range
Limit account selection
Try summary instead of detail

System Resources

Try during off-peak hours
Close other applications
Check system status

Data Volume

Break into smaller reports
Use filters to reduce data
Export to Excel for analysis
Related Topics
Process Cash Receipts and Disbursements
Process Adjustments
Process Accounting Year-End Close
Process Monthly Accounting
Additional Resources
Training Scribes
Understanding the General Ledger (15:20)
Generating GL Reports (10:45)
Trial Balance and Reconciliation (12:30)
Help Articles
Chart of Accounts Structure
Transaction Posting Rules
Period Close Procedures
Audit Trail Documentation
Templates
Monthly GL Review Checklist
Reconciliation Worksheet
Variance Analysis Template
Period Close Checklist

Document Version: 1.0 Last Updated: January 2025 Next Review: July 2025

ON THIS PAGE
Overview
Table of Contents
Prerequisites
Understanding the General Ledger
What is the General Ledger?
GL Structure
Transaction Sources
Access General Ledger Reports
Navigation Method 1: From Accounting Center
Navigation Method 2: From Reports Center
Navigation Method 3: From Control Accounts
Generate GL Reports
General Ledger Detail Report
Trial Balance Reports
What is a Trial Balance?
Standard Trial Balance
Comparative Trial Balance
Account Activity Reports
Account Transaction Detail
Account Summary Report
Reconciliation Reports
Bank Reconciliation Support
Control Account Reconciliation
Analyze General Ledger Data
Review Checklist
Common Analysis Techniques
Best Practices
Regular GL Review
Data Quality
Report Management
Troubleshooting
Issue: Trial Balance Doesn't Balance
Issue: Account Balance Seems Wrong
Issue: Transactions Missing from GL
Issue: Report Won't Generate
Related Topics
Additional Resources
Training Scribes
Help Articles
Templates