# How Do I Update COLA and Dependent Allowance?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Update-COLA-and-Dependent-Allowance](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Update-COLA-and-Dependent-Allowance)

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
Update COLA and Dependent Allowance
How Do I Update COLA and Dependent Allowance?

Category: Payroll and Payments Time: 15-30 minutes Difficulty: ⭐⭐⭐ Advanced

Before You Begin:

Have board-approved COLA percentage/amount
Know effective date for the increase
Have list of eligible retirees
Payment Center access permissions verified
Current COLA percentage confirmed
Eligible member list verified
Tax year parameters set
Dependent allowance eligibility confirmed
All required calculations prepared
Back up your data before posting

Related Topics:

Run Retiree Payroll
What This Does

Updates Cost of Living Adjustments (COLA) and Dependent Allowances in the Payment Center by calculating COLA increases, validating totals via eligible/ineligible reports, optionally adjusting member-level increases, and posting to the register. Then you calculate, validate, and post Dependent Allowance with a required confirmation step.

COLA increases are typically annual adjustments to pension amounts to account for inflation. Dependent allowances provide additional payment for retirees with eligible dependents.

COLA Processing Steps:

Calculate COLA based on percentage and cap
Generate reports to validate eligible and ineligible members
Optional: Adjust individual member-level increases
Post COLA to register to apply updates

Dependent Allowance Processing Steps:

Calculate Dependent Allowance with parameters
Validate before/after totals
Post with required confirmation
Quick Steps - COLA
Navigate to Payment Center → COLA Processing → COLA
Click Calculate COLA button
In the "Calculate Pending COLA" modal, enter:
COLA Year (e.g., 2026)
COLA Percentage (e.g., 3.5% entered as 3.5)
Cap Amount (maximum monthly increase, e.g., $500)
Click Calculate to process
Review pending COLA increases in the table
(Optional) Generate eligible/ineligible reports for validation
(Optional) Adjust individual member increases if needed
Click Post COLA to apply updates to register
Quick Steps - Dependent Allowance
Navigate to Payment Center → COLA Processing → Dependent Allowance
Click Calculate Dependent Allowance button
In the "Calculate Dependent Allowance" modal, enter:
Start Date
End Date
COLA Percentage
Amount Per AC Old
Amount Per AC
Click Calculate to process
Review pending allowances in the table
Click Post to apply updates
COLA Processing (Detailed)
Step 1: Navigate to COLA

Where to Go:

Payment Center → COLA Processing → COLA
Step 2: Calculate COLA

What to Do:

Click the Calculate COLA button in the Pending COLA Operations section
The "Calculate Pending COLA" modal window opens

In the Modal, Enter:

COLA Year:

Enter the cutoff year for COLA calculation (e.g., 2025)
This determines which retired persons are included in the batch processing
Must be a 4-digit year

COLA Percentage:

Enter the COLA percentage
Three percent would be entered as 3.0000 (not .0300)
Example: For 3% COLA, enter 3

Cap:

Enter the COLA Base/cap amount
Dollar amount field
Example: 50000.00
Click Calculate button in the modal
System submits the calculation to batch processing
Success message appears
Calculation processes in background (may take a few minutes)
Page will auto-refresh when calculation completes
Pending COLA table will populate with results
Step 3: Review Pending COLA

Search and Filter:

Use the Search by Name field at the top of the table to filter by member or payee name

Pending COLA Table Columns:

Column	Description
Employee Number	Member's employee number
Payee Name	Name of the payee
Payee	Payee type
Member Name	Member's name (with link to member profile)
SSN/4	Last 4 digits of SSN
Retirement Date	Member's retirement date
Eligible	Shows "Eligible" or "Ineligible" for COLA
Monthly Annual COLA	Monthly and annual COLA increase amounts
Monthly/Annual Before COLA Retirement Allow	Monthly and annual retirement allowance before COLA
Monthly/Annual After COLA Retirement Allow	Monthly and annual retirement allowance after COLA
Post 97 COLA Before After	Post-1997 COLA amounts before and after
Actions	Edit button to adjust individual member increases

Totals Summary (displayed below table with BEFORE / AFTER / CHANGE columns):

Total	Description
Monthly COLA	Total monthly COLA across all members
Gross Payment	Total gross payment before and after COLA
Net Payment	Total net payment before and after COLA
Direct Deposit Payment	Total direct deposit payment before and after
Post 97 COLA	Total Post-1997 COLA before and after
Monthly Retirement Allow	Total monthly retirement allowance
Annual Retirement Allow	Total annual retirement allowance
Total Life to Date COLA	Total cumulative COLA across all members

Verify:

Eligible vs. ineligible members are correctly classified
COLA increase amounts are accurate
Before/after retirement allowance amounts appear reasonable
Totals match expected plan-wide impact
Step 4: Post COLA

When Ready:

Click Post COLA button
Confirm posting
COLA amounts applied to member records
Effective on next payroll after effective date

⚠️ Important: Once posted, COLA updates are permanent. Verify carefully before posting.

Dependent Allowance Processing
Navigate and Process

Where to Go:

Payment Center → COLA Processing → Dependent Allowance

Steps:

Click the Calculate Dependent Allowance button
The "Calculate Dependent Allowance" modal window opens

In the Modal, Enter:

Start Date:

Select the start date for dependent allowance calculation
Use date picker to choose date

End Date:

Select the end date for dependent allowance calculation
Use date picker to choose date

COLA Percentage:

Enter the COLA percentage
Example: For 3% COLA, enter 3
System adds % suffix automatically

Amount Per AC Old:

Enter the previous amount per AC (Allowable Compensation)
Dollar amount field with currency formatting
Example: 100.00

Amount Per AC:

Enter the new amount per AC (Allowable Compensation)
Dollar amount field with currency formatting
Example: 103.00
Click Calculate button in the modal
System processes the dependent allowance calculation
Review pending allowances in the table
Click Post button when ready to apply the updates

💡 Note: All field entry happens within the modal popup window, not on the main page.

Common Scenarios
Scenario: Annual 3% COLA Increase

Steps:

Board approves 3% COLA effective January 1
Navigate to Payment Center → COLA Processing → COLA
Click Calculate COLA button
In the "Calculate Pending COLA" modal:
COLA Year: Enter 2025 (or appropriate year)
COLA Percentage: Enter 3
Cap: Enter cap amount (e.g., 50000.00)
Click Calculate
Wait for batch job to complete (page auto-refreshes)
Review pending increases in the table
Click Create COLA Reports → select report type for board review
After board final approval, click Post COLA
Confirm posting when prompted
Scenario: Adding Dependent Allowance

Situation: Retiree's spouse becomes eligible for dependent allowance

Steps:

Update member record to add dependent
Navigate to Payment Center → COLA Processing → Dependent Allowance
Click Calculate Dependent Allowance button
In the "Calculate Dependent Allowance" modal:
Start Date: Select start date
End Date: Select end date
COLA Percentage: Enter percentage (e.g., 3)
Amount Per AC Old: Enter previous amount
Amount Per AC: Enter new amount
Click Calculate
Review pending allowances in the table
Click Post to apply
Verify in next payroll
Best Practices

✅ DO:

Back up data before processing
Get board approval before posting
Run test calculations first
Generate comparison report
Communicate changes to retirees
Document board approval
Review payroll after COLA to confirm

❌ DON'T:

Post without board approval
Skip verification step
Forget to set correct effective date
Apply COLA to ineligible members
Process during active payroll run
Common Questions

Q: When should COLA be processed? A: Typically annually, often effective January 1. Process 2-3 weeks before effective date, after board approval.

Q: Can COLA be negative (decrease)? A: Depends on your plan rules. System allows it if permitted by your pension plan.

Q: What if I made a mistake after posting? A: Contact system administrator. May require manual adjustments or reversal process.

Q: How do I see COLA history? A: Navigate to COLA Increase History from Payment Center → COLA Processing.

Q: Are all retirees eligible for COLA? A: Depends on your plan rules. Some plans have waiting periods or other eligibility requirements.

Related Tasks
Run Retiree Payroll
Generate Payroll Comparison Report

Last Updated: January 2026

← Back to Payroll and Payments

ON THIS PAGE
What This Does
Quick Steps - COLA
Quick Steps - Dependent Allowance
COLA Processing (Detailed)
Step 1: Navigate to COLA
Step 2: Calculate COLA
Step 3: Review Pending COLA
Step 4: Post COLA
Dependent Allowance Processing
Navigate and Process
Common Scenarios
Scenario: Annual 3% COLA Increase
Scenario: Adding Dependent Allowance
Best Practices
Common Questions
Related Tasks