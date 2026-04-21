# Process Cash Receipts and Disbursements

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-Cash-Receipts-and-Disbursements](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-Cash-Receipts-and-Disbursements)

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
Process Cash Receipts and Disbursements
Process Cash Receipts and Disbursements
Overview

The Cash Receipts and Disbursements module in PensionPro allows you to record and manage all financial transactions entering and leaving your retirement system. This comprehensive workflow ensures accurate tracking of payments, proper accounting, and complete audit trails.

Time Estimate: 10-15 minutes per transaction Frequency: Daily/As needed User Role Required: Accountant, Financial Administrator

March 2026 UI review: Cash Receipts filtering uses a single Start Date – End Date control where applicable. The Create Cash Receipt modal follows a stepper (1) Basic Information, (2) Debit Details, (3) Credit Details with Amount #1* / Account Number #1* through #9 (optional). Batch Entry (10 at a time) appears at the bottom when enabled. Cash Disbursement uses Check #/Notice# and Payee Name (with search). Cash Receipts (Print) Report is opened via a Print button; parameters include Enter Journal Title, Sort Order, File Format (PDF checkbox), plus a Previously Generated Cash Receipts (Print) section. Audit trail column labels are Field, Username, Change Date, Process Name, Old Value, New Value (no Action type).

Table of Contents
Prerequisites
Cash Receipts Process
Create Single Cash Receipt
Batch Cash Receipts Entry
Edit Cash Receipt
Cash Disbursements Process
Create Cash Disbursement
Edit Cash Disbursement
Validation and Error Handling
Reports
Best Practices
Troubleshooting
Prerequisites

Before processing cash receipts or disbursements, ensure:

✅ Control accounts are set up and active
✅ Account numbers are properly configured
✅ Vendors are created (for disbursements)
✅ Default values are configured in system settings
✅ You have appropriate user permissions for accounting functions
✅ Journal entry numbers are available (optional but recommended)
Cash Receipts Process

Cash receipts record all money coming into the retirement system, including member contributions, employer payments, investment income, and other revenue sources.

Navigation
Click hamburger menu (☰) → Accounting Center
Click the Accounting card
Click Cash Receipts in the left navigation menu
Create Single Cash Receipt
Step 1: Open Cash Receipt Dialog
Click the + Cash Receipt button
The Cash Receipt modal opens with default values pre-populated
Step 2: Enter Transaction Details

Basic Information:

Transaction Date (Required): Select the date of the receipt
Transaction Description: Enter a description (e.g., "Member Contributions - January 2024")
Journal Entry Number: Optionally assign a journal entry number
Payor: Enter the name of the entity making the payment
Comments: Add any additional notes

Financial Details:

The form uses a debit/credit accounting structure. You can enter up to 9 debit accounts and 9 credit accounts per transaction.

Step 3: Enter Debit Information (Required)

Debit Amount: Enter the amount (formatted as currency with $ symbol)

The system will automatically format numbers with comma separators
Example: Enter "1234.56" → displays as "$1,234.56"

Debit Account Number:

Type to search or select from the dropdown
The system will autocomplete based on your input
Account description displays automatically when selected

Additional Debit Lines (Optional):

Use Debit 1-8 fields for split transactions
Each line requires both amount and account number
Step 4: Enter Credit Information (Required)
Credit Amount: Enter the amount (must equal total debits)
Credit Account Number: Select the credit account
Additional Credit Lines (Optional): Use Credit 1-8 for split transactions

Important: The system calculates and displays the DrCr Total automatically. Debits must equal credits for the transaction to save.

Step 5: Save the Cash Receipt
Click Save to create the cash receipt
The system validates:
Required fields are filled
Debits equal credits
Account numbers are valid
No duplicate transactions
Success message appears: "Cash Receipt created successfully"
The new receipt appears in the cash receipts list
Batch Cash Receipts Entry

For high-volume entry, use the batch mode feature:

Step 1: Enable Batch Mode
Open the Cash Receipt modal
Toggle Batch Entry Mode switch at the bottom of the form
The interface switches to a text area for bulk entry
Step 2: Prepare Batch Data

Format your data using pipe (|) or tab separators:

Date|Description|Journal#|DebitAmt|DebitAcct|CreditAmt|CreditAcct|Payor
01/15/2024|Member Contributions|JE001|25000.00|1010|25000.00|4010|ABC Company
01/15/2024|Employer Match|JE002|15000.00|1010|15000.00|4020|ABC Company
01/16/2024|Investment Income|JE003|5000.00|1010|5000.00|4030|Investment Broker


Field Requirements:

Date (required)
Debit Amount (required)
Debit Account (required)
Credit Amount (required)
Credit Account (required)
Description (optional)
Journal Entry Number (optional)
Payor (optional)
Step 3: Paste and Save Batch
Copy your formatted data
Paste into the batch entry text area
Click Save Batch
The system:
Validates all entries
Shows any errors or warnings
Creates all valid receipts in a single transaction
Success message shows count: "Successfully saved 45 cash receipt(s)"

Batch Processing Tips:

Comment lines starting with # are ignored
Blank lines are automatically skipped
The system shows line numbers for any errors
All records are processed together (all or nothing)
Edit Cash Receipt
Step 1: Locate the Receipt

Filter Options Available:

The filter fields are always visible at the top of the page. You can filter by:

Begin Date: Starting date range
End Date: Ending date range
Journal Number: Specific journal entry number

Note: After entering filter criteria, click the Reset button to clear filters and return to viewing all records.

Cash Receipts Table Columns:

The table displays the following columns (all sortable):

ID: Transaction ID
Date: Transaction date
Journal #: Journal entry number
Description: Transaction description
Debit/Credit Total: Total amount
Payor: Name of the entity making the payment
Debit Account #: Debit account number
Credit Account #: Credit account number

To Locate and Open:

Apply filters if needed to narrow results
Click on the cash receipt row in the table
Step 2: Modify Details
The Cash Receipt modal opens with existing data
Make necessary changes to any fields
The Transaction ID field is read-only
Step 3: Save Changes
Click Update
System validates the changes
If warnings appear, review and choose:
Confirm to proceed with warnings
Cancel to review the data
Success message: "Cash Receipt detail updated successfully"
Delete Cash Receipt

⚠️ Warning: Deletion is permanent and removes audit trail records.

Open the cash receipt for editing
Click Delete button
Confirm deletion in the popup: "Are you sure you want to delete this record?"
Click Yes to permanently remove the record
Cash Disbursements Process

Cash disbursements track all money leaving the retirement system, including benefit payments, refunds, vendor payments, and administrative expenses.

Navigation
Click hamburger menu (☰) → Accounting Center
Click the Accounting card
Click Cash Disbursements in the left navigation menu
Create Cash Disbursement
Step 1: Open Cash Disbursement Dialog
Click the + Cash Disbursement button
The Cash Disbursement modal opens
Step 2: Enter Transaction Details

Basic Information:

Transaction Date (Required): Select the date of the disbursement
Transaction Description: Describe the payment purpose
Journal Entry Number: Optionally assign a journal entry number
Warrant Number: Enter warrant number if applicable
Comments: Additional notes

Payment Information:

Payment Type (Required): Select from dropdown:

Check
EFT (Electronic Funds Transfer)
Wire
ACH
Other payment methods

Check Number: Enter if payment type is check

Check Date: Date the check was issued or will be issued

Check Print Flag (Required): Select status:

N - No (check not printed yet)
Y - Yes (ready to print)
P - Printed (check has been printed)
W - No Ck/On War (no check, on warrant)
Step 3: Enter Payee Information

Option A: Select Vendor

Click the Vendor dropdown
Search and select existing vendor
Vendor ID displays automatically

Option B: Select Member

Click the Member Search icon (magnifying glass)
Search for member by SSN or name
Select member from results
Payee SSN and Payee Name populate automatically

Validation Rule: Either Vendor OR Payee SSN is required (not both)

Step 4: Enter Financial Details

Debit Information (Required):

Debit Amount: Enter the amount
Debit Account Number: Select account
Additional debits: Use Debit 1-8 for split transactions

Credit Information (Required):

Credit Amount: Enter the amount (must equal debits)
Credit Account Number: Select account
Additional credits: Use Credit 1-8 for split transactions

The DrCr Total field shows the calculated total automatically.

Step 5: Save the Disbursement
Click Save
System validates:
Required fields
Debit/credit balance
Valid vendor or member selection
Account numbers exist
Success message: "Cash Disbursement created successfully"
Edit Cash Disbursement
Filter and locate the disbursement in the table
Click on the row to open the edit dialog
Modify the necessary fields
Click Update to save changes
Confirm any warnings that appear
Delete Cash Disbursement
Open the disbursement for editing
Click Delete
Confirm the deletion in the popup dialog
The record and associated audit trail are permanently removed
Validation and Error Handling
Common Validation Errors

"Debits must equal credits"

Cause: The sum of debit amounts doesn't match the sum of credit amounts
Solution: Review all debit and credit fields and ensure they balance

"Account number not found"

Cause: Invalid account number entered
Solution: Use the dropdown to select a valid control account

"Either Vendor or Payee SSN is required"

Cause: No payee selected for disbursement
Solution: Select either a vendor or search for a member

"Transaction date is required"

Cause: Missing transaction date
Solution: Select a valid date for the transaction

"Check Print Flag is required"

Cause: No print flag selected for disbursement
Solution: Choose appropriate flag (N, Y, P, or W)
Warnings

The system may display warnings that don't prevent saving but should be reviewed:

Duplicate transaction warnings
Unusual account combinations
Large amounts requiring review
Out-of-period transactions

To proceed with warnings:

Review the warning message carefully
Click Confirm if the data is correct
The system saves with ignoreWarnings=true flag
Reports
Cash Receipts Report

Purpose: Generate detailed report of all cash receipts for a specified period

To Generate:

Click Print Report button on Cash Receipts page
The report dialog opens with report code: CashReceiptsReport
Enter Required Parameters:
Beginning Date (Required): Start date for the report period
Ending Date (Required): End date for the report period
Additional optional filters may be available
Click Generate Report
View or download the PDF report

Report Includes:

Transaction ID and date
Journal entry numbers
Descriptions
Debit and credit accounts
Amounts
Payor information
Running totals
Cash Disbursements Report

Purpose: Generate detailed report of all cash disbursements

To Generate:

Click Print Report button on Cash Disbursements page
Report code: AccCashDisbursementsReport
Enter Required Parameters:
Beginning Date (Required): Start date for the report period
Ending Date (Required): End date for the report period
Additional optional filters may be available
Click Generate Report
View or download the report

Report Includes:

Transaction details
Payment information
Check numbers and dates
Payee information
Debit/credit details
Warrant numbers
Audit Trail

Purpose: View complete history of changes to cash receipts/disbursements

To Access:

Click Audit Trail button
Select entity: "CashReceipts" or "CashDisbursements"
The audit modal shows:
User who made changes
Date/time of changes
Old and new values
Action type (Create, Update, Delete)
Best Practices
Daily Processing

✅ Process receipts daily to maintain accurate cash position ✅ Match receipts to bank deposits for reconciliation ✅ Use consistent descriptions for easier reporting ✅ Assign journal entry numbers sequentially for tracking ✅ Review unposted transactions at end of each day

Data Entry

✅ Use batch entry for high-volume days (>20 transactions) ✅ Double-check account numbers before saving ✅ Verify debit/credit balance before submission ✅ Include payor/payee information for audit trail ✅ Add meaningful comments for complex transactions

Quality Control

✅ Reconcile daily to bank statements ✅ Run reports weekly to verify accuracy ✅ Review aging reports for outstanding items ✅ Monitor control account balances regularly ✅ Investigate warnings before overriding

Security

✅ Limit access to accounting functions by role ✅ Review audit trails monthly for unusual activity ✅ Require dual authorization for large disbursements ✅ Segregate duties between entry and approval ✅ Backup data before batch operations

Troubleshooting
Issue: Can't Find Control Account

Symptoms: Account number doesn't appear in dropdown

Solutions:

Verify account exists in Control Accounts screen
Check that account is not inactive
Ensure account type matches (Asset, Liability, etc.)
Contact administrator if account needs to be created
Issue: Batch Import Fails

Symptoms: "Not enough fields" or "Missing required fields" error

Solutions:

Check that each line has all required fields
Verify separator is consistent (pipe or tab)
Remove any blank lines or invalid characters
Ensure dates are in MM/DD/YYYY format
Check that amounts don't have currency symbols
Issue: Transaction Won't Save

Symptoms: Save button disabled or validation error

Solutions:

Verify all required fields have values
Ensure debits equal credits exactly
Check that account numbers are valid
Confirm date is in valid format
For disbursements, verify vendor or member is selected
Issue: Can't Delete Transaction

Symptoms: Delete option not available or fails

Solutions:

Check if transaction is already posted to GL
Verify you have deletion permissions
Ensure transaction isn't referenced by other records
Contact administrator for assistance
Issue: Duplicate Transaction Warning

Symptoms: Warning about potential duplicate

Solutions:

Review the existing transaction carefully
Check date, amount, and accounts
If genuinely different, click Confirm to proceed
If duplicate, click Cancel and void the duplicate
Related Topics
Generate General Ledger
Process Adjustments
Process Accounting Year-End Close
Generate 38c Reports
Additional Resources
Training Scribes
Cash Receipts Processing (8:45)
Cash Disbursements Workflow (12:20)
Batch Entry Tutorial (6:30)
Help Articles
Understanding Double-Entry Accounting
Control Account Setup Guide
Bank Reconciliation Process

Document Version: 1.0 Last Updated: January 2025 Next Review: July 2025

ON THIS PAGE
Overview
Table of Contents
Prerequisites
Cash Receipts Process
Navigation
Create Single Cash Receipt
Batch Cash Receipts Entry
Edit Cash Receipt
Delete Cash Receipt
Cash Disbursements Process
Navigation
Create Cash Disbursement
Edit Cash Disbursement
Delete Cash Disbursement
Validation and Error Handling
Common Validation Errors
Warnings
Reports
Cash Receipts Report
Cash Disbursements Report
Audit Trail
Best Practices
Daily Processing
Data Entry
Quality Control
Security
Troubleshooting
Issue: Can't Find Control Account
Issue: Batch Import Fails
Issue: Transaction Won't Save
Issue: Can't Delete Transaction
Issue: Duplicate Transaction Warning
Related Topics
Additional Resources
Training Scribes
Help Articles