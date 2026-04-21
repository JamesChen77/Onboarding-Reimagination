# Process 3(8)(c) Billing

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-38c-Billing](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-38c-Billing)

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
Process 38c Billing
Process 3(8)(c) Billing
Overview

The 3(8)(c) Billing module allows retirement systems to manage billing for retirement boards and member services. Section 3(8)(c) refers to the Massachusetts General Law that permits retirement systems to bill participating employers for administrative expenses. This workflow helps you populate billing data, generate statements, and track payments.

Time Estimate: 30-45 minutes for annual setup; 15-20 minutes per billing cycle Frequency: Annual population; Quarterly/Annual billing User Role Required: Financial Administrator, Accountant

Table of Contents
Prerequisites
Understanding 3(8)(c) Billing
Access the 3(8)(c) Billing Module
Populate Yearly Billing
Review Billing Data
Generate Billing Reports
Track Billing Status
Best Practices
Troubleshooting
Prerequisites

Before processing 3(8)(c) billing, ensure:

✅ Billing percentages are configured for each retirement board/employer
✅ Fiscal year data is available for the billing period
✅ Member counts are accurate and up-to-date
✅ Financial data has been reconciled for the period
✅ Appropriate permissions are assigned to your user role
✅ Report templates are configured correctly
Understanding 3(8)(c) Billing
What is 3(8)(c)?

Massachusetts General Law Chapter 32, Section 3(8)(c) allows retirement systems to bill participating employers for their proportionate share of administrative expenses. This ensures that the costs of operating the retirement system are fairly distributed among all participating entities.

Billing Components

The billing amount typically includes:

Personnel costs: Salaries and benefits for retirement staff
Operating expenses: Office supplies, equipment, utilities
Professional services: Legal, actuarial, consulting fees
Technology costs: Software licenses, hardware, maintenance
Board expenses: Meeting costs, travel, training
Allocation Methods

Common allocation bases include:

Member count: Proportional to active members
Payroll: Proportional to total payroll
Liability: Proportional to pension liability
Fixed percentage: Pre-negotiated rates
Hybrid: Combination of multiple factors
Access the 3(8)(c) Billing Module
Navigation

Click 3(8)(c) Center from the main navigation menu

The 3(8)(c) container opens with two tabs:

Billing - For creating and managing billing amounts
Payable - For tracking amounts payable to boards

Ensure you're on the Billing tab

Billing Tab Overview

The Billing tab provides:

Quick actions for populating and generating reports
Recent reports section showing latest billing statements
Available reports list for generation
Populate Yearly Billing

Populating yearly billing calculates the billing amounts for each participating employer/board for a specific fiscal year.

Step 1: Open Populate Yearly Billing Dialog
From the Billing tab, click Populate Yearly Billing button
The Populate Yearly Billing modal opens
Step 2: Select Fiscal Year

Fiscal Year Selection:

Select the fiscal year for which you're calculating billing
Example: "FY 2024" for fiscal year ending June 30, 2024
Ensure all financial data is finalized before populating

Important Timing:

Typically performed after fiscal year-end close
Should be done before generating billing statements
Requires all accounting entries to be complete
Step 3: Configure Billing Parameters

The Populate Yearly Billing modal contains three configuration fields:

Year (required)

Enter the fiscal year for which you're calculating billing
Example: "2024" for fiscal year ending June 30, 2024
Ensure all financial data is finalized before populating

Delete Locked Records? (required)

Select "Yes" or "No"
When set to "Yes", the job will process locked records
When set to "No", locked records are skipped
Locked records have a flag preventing modification

Count Months By (required)

Select from dropdown:
Check/DD (C): Count months based on check or direct deposit dates
Pymnt Info/Death Dates (P): Count months based on payment information or death dates
This determines the method for calculating billing periods

Important Timing:

Typically performed after fiscal year-end close
Should be done before generating billing statements
Requires all accounting entries to be complete

No Additional Options: The modal does not include options for cost categories, allocation methods, billing periods, or other advanced settings as originally documented. These parameters are controlled by the system configuration, not by the populate job.

Step 4: Review and Execute

Before Executing:

Verify the year is correct
Confirm the "Delete Locked Records?" setting is appropriate
Select the correct "Count Months By" method

Execute Population:

Review all parameters
Click Proceed button
System processes the billing calculation

Processing Steps:

Retrieves financial data for the period
Calculates allocation percentages
Distributes costs based on allocation method
Creates billing records for each entity
Updates billing tables

After Population: The system initiates a batch job. Reports will appear in the "Recent Billing Reports" section with a status (e.g., "COMPLETED").

To View Results:

Check the "Recent Billing Reports" section
Open a report (e.g., "Yearly Billing (Print)") to see the populated data
There is no summary screen displayed directly in the module after population
Review Billing Data

After populating yearly billing, review the calculated amounts before generating statements.

View Billing Summary

To Access Reports:

Navigate to the "Recent Billing Reports" section in the 3(8)(c) Center
Look for reports with "COMPLETED" status
Open a report (e.g., "Yearly Billing (Print)") to view the populated data

Note: After population, reports appear in the "Recent Billing Reports" section. Users need to open a report to see the data, rather than viewing a summary screen directly in the module.

Review Checklist:

✅ Verify Total Costs

Match to approved administrative budget
Compare to prior year
Reconcile to general ledger accounts

✅ Check Each Entity's Amount

Review allocation percentages
Verify member counts or other allocation basis
Confirm special agreements are honored

✅ Validate Calculations

Test mathematical accuracy
Ensure rounding doesn't cause discrepancies
Verify sum of all billings equals total costs

✅ Confirm Data Completeness

All expected boards/employers are included
No unexpected entities
All amounts are non-zero (unless appropriate)
Make Adjustments (If Necessary)

If errors are found:

Option 1: Re-populate

Correct the source data (percentages, costs, etc.)
Re-run the Populate Yearly Billing process
System overwrites previous calculation

Option 2: Manual Adjustment

Create accounting adjustments for corrections
Document reason for adjustment
Maintain audit trail

Option 3: Contact Support

For system issues or complex corrections
If calculation logic needs review
Generate Billing Reports

Once billing data is populated and verified, generate billing statements and reports.

Available Billing Reports
1. Create Billing Report by Board

Purpose: Generate billing report sorted/grouped by board

To Generate:

Click Create Billing Report by Board button
Or use the Reports section and select report code: CreateBillingByBoardReport

Parameters:

Fiscal Year: Select year for billing
Board Selection: All boards or specific boards
Detail Level: Summary or detailed breakdown
Format: PDF, Excel, or both

Report Includes:

Board name and identification
Fiscal year
Total billing amount
Breakdown by cost category (if detailed)
Allocation percentage
Prior year comparison
Payment instructions

Use Cases:

Sending bills to each board
Board meeting presentations
Budget planning
Audit documentation
2. Create Billing Report by Name

Purpose: Generate billing report sorted alphabetically by entity name

To Generate:

Click Create Billing Report by Name button
Or select report code: CreateBillingReport

Parameters:

Fiscal Year
Sort Order: Ascending or descending
Filters: Include/exclude specific entities

Report Format:

Alphabetical listing
Entity name and ID
Billing amount
Allocation basis
Contact information
3. Create Individual Statement

Purpose: Generate detailed billing statement for a single entity

To Generate:

Click Create Individual Statement button
Select report code: IndividualStatementReport

Required Parameters:

Entity Selection: Choose specific board/employer
Fiscal Year
Statement Date

Statement Includes:

Entity name and mailing address
Statement date and period
Itemized cost breakdown by category
Total amount due
Payment due date
Payment instructions
Contact information for questions
Invoice number for tracking

Use Cases:

Mailing individual bills
Responding to inquiries
Payment tracking
Collection efforts
4. Create Group Statement

Purpose: Generate combined statement for multiple entities

To Generate:

Click Create Group Statement button
Select report code: CreateGroupStatementReport

Parameters:

Entity Selection: Choose multiple boards/employers
Grouping: By region, type, or custom groups
Fiscal Year

Report Shows:

Summary totals
Individual amounts for each entity in group
Grand total for the group
Comparative data
Track Billing Status
View Recent Reports

The Billing tab displays recently generated reports:

Report Display Shows:

Report Name: Type of billing report
Created Date: When report was generated
Status:
Completed: Ready to view
Processing: Report is being generated
Queued: Waiting to be processed
Errored: Generation failed

Status Indicators:

🟢 Green: Completed
🟡 Yellow: Processing/Queued
🔴 Red: Errored
View Generated Reports

To Open a Report:

Locate the report in the Recent Reports section
Click on the report row
Report opens in the Report Viewer modal

Report Viewer Features:

View report in browser
Download as PDF
Print directly
Email to recipients
Archive for records

Cannot View:

If status is "Processing" or "Queued": Wait for completion
If status is "Errored": Check error details and regenerate
Access All Reports

For complete billing history:

Click View All Reports or Reports Archive link
Navigate to Reports Center
Filter by:
Category: 3(8)(c)
Date range
Report type
Status
Best Practices
Annual Billing Cycle

✅ Timing

Populate billing after fiscal year-end close is complete
Allow time for board review before sending statements
Generate statements at least 30 days before payment due date

✅ Communication

Notify boards in advance of upcoming billing
Provide preliminary amounts if possible
Send final statements with clear due dates
Follow up on overdue payments

✅ Documentation

Maintain complete audit trail
Document allocation methodology
Save all generated reports
Keep board approval records
Data Quality

✅ Before Population

Verify all financial data is complete and reconciled
Update member counts if using as allocation basis
Review and update allocation percentages
Validate expense categories

✅ After Population

Compare to prior year for reasonableness
Review unusual variances
Test calculation accuracy
Verify all entities are included

✅ Before Sending Statements

Proof statements for accuracy
Check mailing addresses
Verify payment instructions
Review due dates
Record Keeping

✅ Maintain Records Of:

Annual billing calculations
Generated statements
Board approvals
Payment receipts
Correspondence with boards
Methodology documentation
Policy changes

✅ Archive Systematically:

Store by fiscal year
Keep electronic and paper copies
Maintain for required retention period
Ensure accessibility for audits
Compliance

✅ Legal Requirements

Follow MGL Chapter 32 Section 3(8)(c) requirements
Comply with state regulations
Meet board bylaws and policies
Document approval process

✅ Audit Trail

Maintain complete documentation
Show calculation methodology
Keep evidence of board approval
Track payment status
Troubleshooting
Issue: Populate Yearly Billing Fails

Symptoms: Error message when attempting to populate

Common Causes & Solutions:

Fiscal Year Not Closed

Ensure accounting period is closed
Complete all year-end entries
Run period close process

Missing Financial Data

Verify all expense accounts are populated
Check for missing transactions
Reconcile GL accounts

Invalid Allocation Percentages

Review percentages for all entities
Ensure they sum to 100%
Update configuration if needed

Incomplete Setup

Verify board/employer records exist
Check billing configuration
Ensure allocation basis data is available
Issue: Billing Amounts Don't Match Expected

Symptoms: Calculated amounts differ from expected totals

Solutions:

Verify Expense Accounts

Confirm which accounts are included in billing
Check for miscoded expenses
Review account mapping

Check Allocation Basis

Verify member counts are current
Confirm allocation percentages
Review allocation method

Compare to Prior Year

Identify significant variances
Document explanations for changes
Adjust expectations if appropriate

Review Calculation Logic

Test calculations manually
Verify rounding methods
Check for system issues
Issue: Report Generation Fails

Symptoms: Report shows "Errored" status

Solutions:

Check Report Parameters

Verify all required fields are filled
Ensure date ranges are valid
Confirm entity selections are correct

Data Availability

Ensure billing has been populated
Verify data exists for selected year
Check that entities have billing amounts

System Resources

Wait and retry if system is busy
Break large reports into smaller batches
Contact support if persistent

Report Template

Verify report template is configured
Check for template errors
Contact administrator if template needs update
Issue: Can't Find Generated Report

Symptoms: Report not visible in Recent Reports

Solutions:

Check Report Status

May still be processing
Refresh the page
Check Reports Archive

View All Reports

Click "View All Reports" link
Use filters to locate report
Check by date range

Verify Generation

Confirm generation request was submitted
Check for error messages
Regenerate if necessary
Issue: Billing Percentage Changes Not Reflected

Symptoms: Updated percentages don't appear in billing amounts

Solutions:

Re-populate Billing

Changes require re-running population
Update percentages first
Then re-populate yearly billing

Cache Issues

Clear browser cache
Log out and log back in
Refresh data

Timing

Ensure changes were saved
Verify effective date
Check configuration was updated
Related Topics
Generate 3(8)(c) Reports
Generate 3(8)(c) Payable Amounts Report
Process Accounting Year-End Close
Generate General Ledger
Additional Resources
Training Scribes
3(8)(c) Billing Overview (12:30)
Populating Annual Billing (8:45)
Generating Billing Statements (6:15)
Help Articles
Understanding MGL Chapter 32 Section 3(8)(c)
Configuring Billing Percentages
Allocation Methodology Guide
Collection Best Practices
Legal References
Massachusetts General Law Chapter 32, Section 3(8)(c)
PERAC Memorandums on Administrative Expenses
Sample Board Policies

Document Version: 1.0 Last Updated: January 2025 Next Review: July 2025

ON THIS PAGE
Overview
Table of Contents
Prerequisites
Understanding 3(8)(c) Billing
What is 3(8)(c)?
Billing Components
Allocation Methods
Access the 3(8)(c) Billing Module
Navigation
Billing Tab Overview
Populate Yearly Billing
Step 1: Open Populate Yearly Billing Dialog
Step 2: Select Fiscal Year
Step 3: Configure Billing Parameters
Step 4: Review and Execute
Review Billing Data
View Billing Summary
Make Adjustments (If Necessary)
Generate Billing Reports
Available Billing Reports
Track Billing Status
View Recent Reports
View Generated Reports
Access All Reports
Best Practices
Annual Billing Cycle
Data Quality
Record Keeping
Compliance
Troubleshooting
Issue: Populate Yearly Billing Fails
Issue: Billing Amounts Don't Match Expected
Issue: Report Generation Fails
Issue: Can't Find Generated Report
Issue: Billing Percentage Changes Not Reflected
Related Topics
Additional Resources
Training Scribes
Help Articles
Legal References