# Process Adjustments

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-Adjustments](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-Adjustments)

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
Process Adjustments
Process Adjustments
Overview

Accounting Adjustments allow you to correct errors, reclassify transactions, record accruals, and make other accounting entries that don't involve cash receipts or disbursements. This feature provides full audit trail tracking and ensures your financial records remain accurate and compliant.

Time Estimate: 5-10 minutes per adjustment Frequency: As needed / Month-end User Role Required: Accountant, Financial Administrator

March 2026 UI review: Prefer UI labels Date, Description, Journal #, Debit Details / Credit Details, Amount #1 / Account Number #1 (through #9), not legacy names like "Transaction Date" or "Debit 1–8." DrCr Total and Account Description (read-only) and + Add row controls may not appear—confirm per build. Report flow may show Report Details with Adjustments (Print) PDF; printed columns include ID, Comments, Date, Jrnl #, Desc, DR/CR Total, DR Acct #, CR Acct #.

Table of Contents
Prerequisites
When to Use Adjustments
Create Adjustment
Edit Adjustment
Delete Adjustment
Validation Rules
Reports
Best Practices
Common Adjustment Scenarios
Troubleshooting
Prerequisites

Before processing adjustments, ensure:

✅ Control accounts are properly configured
✅ Account numbers exist for all accounts you'll use
✅ You understand double-entry accounting principles
✅ Appropriate permissions are assigned to your user role
✅ Default values are configured (optional)
✅ Month/period is open for posting
When to Use Adjustments

Use the Adjustments module for:

Corrections
Fix data entry errors in previous transactions
Correct account coding mistakes
Reverse incorrect postings
Reclassifications
Move amounts between accounts
Correct account classifications
Reorganize financial data
Accruals
Record month-end accruals
Adjust for prepaid expenses
Record deferred revenue
Period-End Entries
Depreciation entries
Amortization adjustments
Allocation of shared costs
Other Adjusting Entries
Recognition of liabilities
Asset write-offs or write-downs
Inter-fund transfers

Do NOT use for:

Cash receipts (use Cash Receipts module)
Cash disbursements (use Cash Disbursements module)
Member transactions (use Member modules)
Create Adjustment
Navigation
Click hamburger menu (☰) → Accounting Center
Click the Accounting card
Click Adjustments in the left navigation menu
Click + Adjustment button
Step 1: Enter Basic Information

Transaction Details:

Transaction Date (Required)

Select the effective date for the adjustment
Typically the last day of the month for month-end adjustments
Must be within an open accounting period

Transaction Description

Enter a clear, descriptive explanation
Include reference to source documentation
Example: "Depreciation expense - January 2024"

Journal Entry Number

Optional but recommended for tracking
System may auto-assign based on settings
Use sequential numbering for organization

Comments

Add detailed notes about the adjustment
Document authorization or approval
Reference work papers or supporting schedules
Step 2: Enter Debit Information

The adjustment form supports up to 9 debit entries per transaction.

Primary Debit (Required):

Debit Amount

Enter the amount in currency format
System automatically formats with dollar sign and commas
Example: 1500.75 displays as $1,500.75

Debit Account Number

Type to search or select from dropdown
System displays matches as you type
Account description appears automatically when selected

Account Description (Read-only)

Auto-populated based on selected account
Helps verify you selected the correct account

Additional Debit Lines (Optional):

Use Debit 1 through Debit 8 fields for compound entries:

Each requires both amount and account number
Useful for split transactions
Common for expense allocations

Example - Allocating Rent Expense:

Debit:  Rent Expense - Dept A    $2,500.00  (Account 6010-01)
Debit1: Rent Expense - Dept B    $1,500.00  (Account 6010-02)
Debit2: Rent Expense - Dept C    $1,000.00  (Account 6010-03)
Credit: Prepaid Rent             $5,000.00  (Account 1300)

Step 3: Enter Credit Information

The adjustment form supports up to 9 credit entries per transaction.

Primary Credit (Required):

Credit Amount

Enter the amount (must balance with total debits)
Currency formatting applied automatically

Credit Account Number

Select the account to be credited
Account description displays on selection

Additional Credit Lines (Optional):

Use Credit 1 through Credit 8 for multiple credit accounts

Dynamic Row Display:

Additional rows can be shown/hidden as needed
Click + Add Debit Row or + Add Credit Row to expand
Click - Remove Row to hide unused rows
Step 4: Verify Balance

DrCr Total Field:

Displays automatically as you enter amounts
Shows the sum of all debit entries
Must match the sum of all credit entries
Read-only field calculated by the system

Example Balance:

Total Debits:  $5,000.00
Total Credits: $5,000.00
DrCr Total:    $5,000.00 ✓ Balanced

Step 5: Save the Adjustment
Review all entered information
Verify debits equal credits
Click Save button

System Validation:

Checks all required fields
Verifies debit/credit balance
Validates account numbers
Checks for potential duplicates

On Success:

"Adjustments created successfully" message displays
Dialog closes automatically
New adjustment appears in the list
Transaction ID is auto-assigned
Edit Adjustment
Locate the Adjustment

Filter Options Available:

The filter fields are always visible at the top of the page. You can filter by:

Begin Date: Starting date range
End Date: Ending date range
Journal Number: Specific journal entry number

Note: The Reset button clears all filters and returns to viewing all records.

Adjustments Table:

The adjustments display in a sortable table with the following columns (all sortable):

ID: Transaction ID
Date: Transaction date
Journal #: Journal entry number
Description: Transaction description
Debit/Credit Total: Total amount
Debit Account #: Debit account number
Credit Account #: Credit account number

To Locate and Open:

Apply filters if needed to narrow results
Sort by clicking column headers (default: Transaction ID descending, newest first)
Click on the adjustment row in the table
Modify the Adjustment
Click on the adjustment row in the table
The Adjustment modal opens with current data
Make necessary changes to any editable fields
Note: Transaction ID is read-only and cannot be changed

Editable Fields:

Transaction Date
Description
Journal Entry Number
Comments
All debit/credit amounts and accounts
Save Changes
Click Update button
System validates the modified data
If warnings appear:
Review the warning message
Choose Confirm to proceed
Or choose Cancel to revise data

On Success:

"Adjustments data updated successfully" message
Changes are saved
Audit trail records the modification
Delete Adjustment

⚠️ Critical Warning: Deletion is permanent and irreversible!

When to Delete

Consider deleting when:

Adjustment was entered in wrong accounting period
Complete adjustment needs to be removed
Duplicate entry needs to be eliminated

Alternative: Instead of deleting, consider creating a reversing entry to maintain complete audit trail.

Deletion Process
Open the adjustment for editing
Click Delete button (red, bottom-left)
Confirmation dialog appears:
Are you sure you want to delete this record?
This record and all associated audit trail records
will be permanently removed from the database!

Review the warning carefully
Click Yes to confirm deletion
Click No to cancel

On Deletion:

Record is permanently removed
Audit trail entries are deleted
Cannot be recovered
"Adjustments record has been deleted successfully!" message appears
Validation Rules
Required Fields

The system enforces these required fields:

Field	Validation	Error Message
Transaction Date	Must be valid date	"Transaction Date is required"
Debit Amount	Must be numeric > 0	"Debit is required"
Debit Account Number	Must exist in Control Accounts	"Debit Account Number is required"
Credit Amount	Must be numeric > 0	"Credit is required"
Credit Account Number	Must exist in Control Accounts	"Credit Account Number is required"
Balance Validation

Rule: Sum of all debits must equal sum of all credits

Validation:

Total Debits = Debit + Debit1 + Debit2 + ... + Debit8
Total Credits = Credit + Credit1 + Credit2 + ... + Credit8

Total Debits MUST EQUAL Total Credits


Error if unbalanced:

"Debits must equal credits"
System calculates and displays the difference
Transaction cannot be saved until balanced
Account Number Validation

Rules:

Account must exist in Control Accounts
Account must be active (not disabled)
Account must be valid for transaction date

Validation Process:

As you type, system searches for matches
On blur (leaving field), system auto-selects if only one match
If account not found, description field remains empty
Error displays on save if invalid account
Duplicate Detection

System warns if potential duplicate found:

Same date
Same amounts
Same accounts
Recent entry time

Warning allows you to:

Review potential duplicate
Confirm if different transaction
Cancel to avoid duplicate
Reports
Print Adjustments Report

Purpose: Generate detailed report of all adjustments for a specified period

To Generate:

Click Print Report button on Adjustments page

The "Adjustments (Print)" modal opens

Configure report parameters:

Beginning Date (Required): Start date for the report period
Ending Date (Required): End date for the report period
Journal Nbr (Optional): Filter by specific journal number
Sort By (Required): Select sort order for the report

Click Generate Report

Report processes (may queue for large datasets)

View in Report Viewer modal or download PDF

Report Includes:

Transaction ID and date
Journal entry number
Transaction description
All debit accounts and amounts
All credit accounts and amounts
Running totals by account
Comments field
User who created/modified
Timestamp information

Common Uses:

Month-end reconciliation
Audit documentation
Financial statement preparation
General ledger verification
Export to Excel

Note: The Export functionality is not currently available on the Adjustments page toolbar or grid header. To export adjustment data:

Use the report generation feature (Print Report)
Select Excel or CSV format if available in the report modal
Or generate a PDF report for documentation purposes
Best Practices
Creating Adjustments

✅ Use descriptive explanations - Future users should understand the purpose ✅ Document source information - Reference work papers or authorization ✅ Assign journal entry numbers - Maintain sequential numbering system ✅ Include supporting details in comments field ✅ Review before saving - Double-check accounts and amounts

Timing

✅ Record adjustments promptly - Don't wait until year-end ✅ Process month-end adjustments within 5 business days ✅ Use effective dates correctly - Post to proper accounting period ✅ Coordinate with reporting deadlines - Complete before financial statements ✅ Create reversing entries at beginning of next period when appropriate

Quality Control

✅ Reconcile to supporting schedules before entering ✅ Have second person review complex adjustments ✅ Verify account balances after posting ✅ Run trial balance after significant adjustments ✅ Document approval for material adjustments

Organization

✅ Use consistent naming for recurring adjustments ✅ Maintain adjustment schedule showing all monthly entries ✅ Group related adjustments using journal entry number sequences ✅ Keep audit trail of all significant adjustments ✅ Archive supporting documentation by period

Security and Controls

✅ Limit adjustment access to authorized accounting staff ✅ Require approval for adjustments over threshold amount ✅ Review audit trail monthly for unusual activity ✅ Segregate duties - different person reviews vs. enters ✅ Document authorization in comments field

Common Adjustment Scenarios
Scenario 1: Depreciation Expense

Purpose: Record monthly depreciation on fixed assets

Entry:

Date: 01/31/2024
Description: Depreciation expense - January 2024
Journal Entry: JE-024-001

Debit:  Depreciation Expense           $15,000.00  (6500)
Credit: Accumulated Depreciation       $15,000.00  (1510)

Scenario 2: Prepaid Insurance Adjustment

Purpose: Recognize one month of prepaid insurance expense

Entry:

Date: 01/31/2024
Description: Insurance expense recognition - January
Journal Entry: JE-024-002

Debit:  Insurance Expense              $2,500.00   (6300)
Credit: Prepaid Insurance              $2,500.00   (1250)

Scenario 3: Accrued Payroll

Purpose: Record earned but unpaid wages at month-end

Entry:

Date: 01/31/2024
Description: Accrued wages - January 2024
Journal Entry: JE-024-003

Debit:  Salaries Expense               $12,000.00  (6100)
Credit: Accrued Payroll Liability      $12,000.00  (2110)

Scenario 4: Error Correction - Account Reclassification

Purpose: Correct expense posted to wrong account

Entry:

Date: 01/15/2024
Description: Reclassify office supplies to equipment
Journal Entry: JE-024-004

Debit:  Equipment                      $3,200.00   (1600)
Credit: Office Supplies Expense        $3,200.00   (6250)

Scenario 5: Multi-Account Allocation

Purpose: Allocate shared IT costs to multiple departments

Entry:

Date: 01/31/2024
Description: IT cost allocation - January 2024
Journal Entry: JE-024-005

Debit:  IT Expense - Operations        $5,000.00   (6800-01)
Debit1: IT Expense - Member Services   $3,000.00   (6800-02)
Debit2: IT Expense - Finance           $2,000.00   (6800-03)
Credit: IT Services Payable            $10,000.00  (2150)

Scenario 6: Reversing Entry

Purpose: Reverse prior month's accrual at start of new period

Entry:

Date: 02/01/2024
Description: Reverse January payroll accrual
Journal Entry: JE-024-020 (reversing JE-024-003)

Debit:  Accrued Payroll Liability      $12,000.00  (2110)
Credit: Salaries Expense               $12,000.00  (6100)

Troubleshooting
Issue: Can't Balance Debits and Credits

Symptoms: Error message "Debits must equal credits"

Solutions:

Review all debit amounts and sum them manually
Review all credit amounts and sum them manually
Compare totals - identify the difference
Check for:
Transposed numbers (1,500 vs 1,050)
Decimal errors (150.00 vs 1,500.00)
Missing amounts in additional lines
Incorrect account amounts
Use calculator to verify sums
Re-enter amounts carefully
Issue: Account Number Not Found

Symptoms: Account description doesn't populate after entering number

Solutions:

Verify account exists in Control Accounts module
Check account number for typos
Ensure account is active (not disabled)
Verify you have access to view that account
Try using dropdown instead of typing
Contact administrator if account should exist but doesn't
Issue: Transaction Won't Save

Symptoms: Save button doesn't work or validation error appears

Solutions:

Check all required fields have values:
Transaction Date
Debit Amount and Account
Credit Amount and Account
Verify debits equal credits exactly
Ensure all account numbers are valid
Check for warnings that need to be confirmed
Try closing and reopening the dialog
Check browser console for JavaScript errors
Issue: Can't Find Previously Entered Adjustment

Symptoms: Adjustment doesn't appear in list after saving

Q: Can't find adjustments I just entered?

Solutions:

Click Reset button to clear all filters
Sort by Transaction ID descending
Verify transaction actually saved (check for success message)
Refresh the page
Check audit trail for the transaction
Issue: Duplicate Transaction Warning

Symptoms: Warning appears about potential duplicate

Solutions:

Review the warning details carefully
Check if adjustment was already entered
Verify date, amount, and accounts
If genuinely different:
Add distinguishing information to description
Click Confirm to proceed
If duplicate:
Click Cancel
Search for and edit the existing adjustment instead
Issue: Date Not in Valid Period

Symptoms: Error about closed period or invalid date

Solutions:

Check if accounting period is open
Verify fiscal year settings
Contact administrator to:
Reopen period if needed
Verify period close dates
Use current period date if appropriate
Document reason for posting to closed period
Related Topics
Process Cash Receipts and Disbursements
Generate General Ledger
Process Accounting Year-End Close
Process Monthly Accounting
Additional Resources
Training Scribes
Recording Adjusting Entries (7:15)
Month-End Close Process (15:30)
Common Adjustment Scenarios (10:45)
Help Articles
Understanding Adjusting Entries
Double-Entry Accounting Basics
Account Coding Guidelines
Audit Trail and Compliance

Document Version: 1.0 Last Updated: January 2025 Next Review: July 2025

ON THIS PAGE
Overview
Table of Contents
Prerequisites
When to Use Adjustments
Corrections
Reclassifications
Accruals
Period-End Entries
Other Adjusting Entries
Create Adjustment
Navigation
Step 1: Enter Basic Information
Step 2: Enter Debit Information
Step 3: Enter Credit Information
Step 4: Verify Balance
Step 5: Save the Adjustment
Edit Adjustment
Locate the Adjustment
Modify the Adjustment
Save Changes
Delete Adjustment
When to Delete
Deletion Process
Validation Rules
Required Fields
Balance Validation
Account Number Validation
Duplicate Detection
Reports
Print Adjustments Report
Export to Excel
Best Practices
Creating Adjustments
Timing
Quality Control
Organization
Security and Controls
Common Adjustment Scenarios
Scenario 1: Depreciation Expense
Scenario 2: Prepaid Insurance Adjustment
Scenario 3: Accrued Payroll
Scenario 4: Error Correction - Account Reclassification
Scenario 5: Multi-Account Allocation
Scenario 6: Reversing Entry
Troubleshooting
Issue: Can't Balance Debits and Credits
Issue: Account Number Not Found
Issue: Transaction Won't Save
Issue: Can't Find Previously Entered Adjustment
Issue: Duplicate Transaction Warning
Issue: Date Not in Valid Period
Related Topics
Additional Resources
Training Scribes
Help Articles