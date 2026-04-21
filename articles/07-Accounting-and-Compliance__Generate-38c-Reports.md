# Generate 3(8)(c) Reports

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Generate-38c-Reports](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Generate-38c-Reports)

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
Generate 38c Reports
Generate 3(8)(c) Reports
Overview

The 3(8)(c) Reports module provides comprehensive reporting capabilities for managing administrative cost billing and payable tracking. This central reporting hub allows you to generate billing statements, payable reports, and management reports related to Massachusetts General Law Chapter 32, Section 3(8)(c) administrative cost allocations.

Time Estimate: 5-10 minutes per report Frequency: As needed / Monthly / Annually User Role Required: Financial Administrator, Accountant, Management

Table of Contents
Prerequisites
Access 3(8)(c) Reports
Report Categories
Billing Reports
Payable Reports
View and Manage Reports
Export and Distribution
Best Practices
Troubleshooting
Prerequisites

Before generating 3(8)(c) reports, ensure:

✅ Billing or payable data has been populated for the period
✅ Fiscal year data is complete and accurate
✅ Report templates are properly configured
✅ Appropriate permissions are assigned to your user role
✅ System data is current and reconciled
Access 3(8)(c) Reports
Navigation Method 1: From 3(8)(c) Center
Click 3(8)(c) Center from the main navigation menu
Select either the Billing or Payable tab
Choose from available reports in the following sections:
Quick Action Buttons - One-click report generation
Available Reports - Browse all report types
Recent Billing Reports or Recent Payable Reports - Access previously generated reports

UI Labels:

The billing/payable sections are labeled "Billing Operations" or "Payable Operations"
The recent reports sections are labeled "Recent Billing Reports" or "Recent Payable Reports"
Navigation Method 2: From Reports Center
Click Reports Center from the main navigation
Select 3(8)(c) from the sidebar menu
Reports are grouped into folders:
3(8)(c) Billables - Billing-related reports
3(8)(c) Payables - Payable-related reports
Select report to generate
Navigation Method 3: From Reports Archive
Navigate to Reports > Reports Archive tab
Filter by:
Report Name - Search by name
Report Category - Filter by category
Created On Between - Date range filter
View or regenerate historical reports

Note: The available filters in the UI header are "Report Name", "Report Category", and "Created On Between". There are no "Report Type" or "Status" filters visible in the current UI implementation.

Report Categories

3(8)(c) reports are organized into two main categories:

Billing Reports

Reports for tracking money owed TO your retirement system:

Billing by Board
Billing by Name
Individual Statements
Group Statements
Billing Setup Documentation
Payable Reports

Reports for tracking money your system OWES to others:

Payable Amounts Report
Payable Setup Documentation
Yearly Payable Amounts
Payment Status Reports
Billing Reports

These reports help you bill other retirement boards and employers for administrative services your system provides.

1. Create Billing Report by Board

Purpose: Generate billing report organized and sorted by board/employer

When to Use:

Preparing bills for each participating entity
Board meeting presentations
Budget planning and forecasting
Year-end reconciliation

Report Code: CreateBillingByBoardReport

To Generate:

Access Report:

From Billing tab, click Create Billing Report by Board
Or select from Reports section

Enter Parameters:

 

Required:

Fiscal Year: Select the year for billing

Optional:

Board Selection:
All Boards (default)
Specific boards only
Detail Level:
Summary (totals only)
Detailed (with cost breakdown)
Sort Order:
Board ID
Board Name
Billing Amount
Include:
Active boards only
All boards
Boards with balances

Generate Report:

Review parameters
Click Generate
Report queues for processing
Report Content:

Header Information:

Report title and fiscal year
Generation date and time
Parameters used
Total summary

For Each Board:

Board name and ID number
Contact information
Billing period
Allocation percentage or basis
Total amount billed
Prior year comparison (if available)
Payment status
Balance due

Detailed Version Includes:

Cost category breakdown
Personnel costs
Operating expenses
Professional services
Technology costs
Board expenses
Calculation methodology
Supporting data (member counts, etc.)

Footer:

Grand total all boards
Number of boards billed
Report page numbers
2. Create Billing Report by Name

Purpose: Generate billing report sorted alphabetically by entity name

When to Use:

Quick reference lookup
Alphabetical mailing list
Index for filing
Cross-reference documentation

Report Code: CreateBillingReport

To Generate:

Access Report:

From Billing tab, click Create Billing Report by Name
Or use Reports section

Enter Parameters:

Fiscal Year (Required)
Sort Order:
Ascending (A-Z) [default]
Descending (Z-A)
Name Filter: Optionally filter by name pattern
Include: Active, All, or Specific status

Generate Report

Report Content:
Alphabetical listing of all billed entities
Entity name and identification
Billing amount
Allocation percentage
Contact information
Payment terms
3. Create Individual Statement

Purpose: Generate detailed billing statement for a single entity

When to Use:

Sending formal bills
Responding to inquiries about specific charges
Payment collection efforts
Dispute resolution
Audit documentation

Report Code: IndividualStatementReport

To Generate:

Access Report:

From Billing tab, click Create Individual Statement

Enter Parameters:

 

Required:

Entity Selection: Choose specific board/employer
Fiscal Year: Billing period
Statement Date: Date appearing on statement

Optional:

Include Payment History: Show prior payments
Include Comments: Add custom message
Statement Number: Auto-generate or manual

Generate Statement

Statement Content:

Billing Entity Information:

Your retirement system name and address
Logo (if configured)
Contact information
Statement date

Recipient Information:

Bill to: Board/employer name
Mailing address
Account number
Contact person

Statement Details:

Statement number/invoice number
Billing period (fiscal year)
Date issued
Due date
Payment terms

Itemized Charges:

Description	Amount
Administrative Services - FY 2024	
Personnel Costs (40% of $250,000)	$100,000.00
Operating Expenses (40% of $75,000)	$30,000.00
Professional Services (40% of $50,000)	$20,000.00
Technology Costs (40% of $25,000)	$10,000.00
Total Amount Due	$160,000.00

Additional Information:

Allocation methodology explanation
Supporting data (member count, percentage, etc.)
Payment instructions
Make checks payable to: [System Name]
Mail to: [Address]
Reference: Statement #[number]
Contact for questions
Terms and conditions

Footer:

Thank you message
Remittance instructions
Statement validity period
4. Create Group Statement

Purpose: Generate combined billing statement for multiple entities

When to Use:

Regional groupings
Multiple entities under one administration
Consolidated billing
Department-level summaries

Report Code: CreateGroupStatementReport

To Generate:

Access Report:

From Billing tab, click Create Group Statement

Enter Parameters:

Group Selection: Choose entities to include
Grouping Method:
By region
By type
Custom selection
Fiscal Year
Statement Date
Group Name: Descriptive title

Generate Statement

Report Content:

Group Summary:

Group name and description
Number of entities in group
Billing period
Total amount for group

Individual Entity Details:

Entity Name	Entity ID	Allocation %	Amount	Status
City Retirement Board	001	40.0%	$160,000	Billed
Town Retirement System	002	25.0%	$100,000	Billed
County Retirement Board	003	35.0%	$140,000	Billed
Group Total		100.0%	$400,000	

Payment Summary:

Total amount billed to group
Payment due date
Group remittance instructions
Payable Reports

These reports track money your retirement system owes to other boards for services received.

1. Create Payable Report

Purpose: Comprehensive report of all amounts your system owes

When to Use:

Budget planning
Payment authorization
Board approval documentation
Financial statement preparation
Reconciliation

Report Code: CreatePayableReport

To Generate:

Access Report:

From Payable tab, click Create Payable Report

Enter Parameters:

Fiscal Year (Required)
Provider Filter: All or specific boards
Status Filter:
All
Unpaid
Paid
Pending
Detail Level: Summary or Detailed
Sort Order:
By provider name
By amount
By due date

Generate Report

Report Content:

For Each Provider:

Provider board name and ID
Service type and description
Agreement terms
Calculation basis
Percentage of costs
Fixed annual fee
Per-member charge
Fiscal year
Amount owed
Due date
Payment status
Check number (if paid)
Payment date (if paid)

Summary Section:

Total payables (unpaid)
Total paid
Grand total for period
Number of provider relationships

Detailed Version Includes:

Service breakdown by category
Calculation workpapers
Supporting data
Payment history
Contact information
2. Print Payable Setup

Purpose: Document configuration and terms of payable arrangements

When to Use:

Documenting service agreements
New staff training
Audit support
Contract renewals
Board presentations

Report Code: TecPayableSetupReport

Report Names:

In the 3(8)(c) Center: Print Payable Setup
In the Reports Center: 3(8)(c) Payable Setup (Print)

Note: Report names may vary slightly between the 3(8)(c) Center and Reports Center. Both refer to the same report.

To Generate:

Access Report:

From Payable tab, click Print Payable Setup

Enter Parameters:

Provider Selection: All or specific boards
Include: Active, Inactive, or All
Effective Date: Show setup as of date
Detail Level: Summary or Full details

Generate Report

Report Content:

For Each Service Agreement:

Provider Information:

Provider board name
Board ID and contact
Agreement effective date
Renewal/termination date

Service Details:

Service type
Description of services provided
Scope of services

Financial Terms:

Calculation methodology
Percentage allocation (if applicable)
Fixed fee amount (if applicable)
Billing frequency
Payment terms
Due date rules

Additional Information:

Special provisions
Change notice requirements
Dispute resolution process
Authorized contacts
3. Print Yearly Payable Amounts

Purpose: Detailed listing of calculated payable amounts for a year

When to Use:

Reviewing calculated amounts
Budget vs. actual analysis
Payment planning
Year-over-year comparison
Variance analysis

Report Code: TecPayableAmts

Report Names:

In the 3(8)(c) Center: Print Yearly Payable Amounts
In the Reports Center: Yearly Payable Amounts

Note: Report names may vary slightly between the 3(8)(c) Center and Reports Center. Both refer to the same report.

To Generate:

Access Report:

From Payable tab, click Print Yearly Payable Amounts

Enter Parameters:

Fiscal Year (Required)
Status: All, Paid, Unpaid, Pending
Format: Summary or Detailed
Comparison: Include prior year comparison

Generate Report

Report Content:

Summary Format:

Provider	Service	Calculation	Amount	Status	Due Date
Regional Board	Admin Services	15% of $500K	$75,000	Unpaid	09/30/24
County System	Investment Mgmt	Fixed Fee	$25,000	Paid	08/15/24
Total			$100,000		

Detailed Format Includes:

Service category breakdown
Calculation details and formulas
Basis data (member counts, costs, etc.)
Payment history by year
Current balance
Accrual information
Notes and comments

Comparative Analysis:

Current year amounts
Prior year amounts
Dollar change
Percentage change
Explanation of significant variances
View and Manage Reports
Report Status

After generating a report, it goes through processing stages:

Status Indicators:

🟡 Queued

Report is waiting to be processed
System will begin generation soon
No action needed

🟡 Processing

Report is actively being generated
May take several minutes for large reports
Do not refresh or close browser

🟢 Completed

Report successfully generated
Ready to view or download
Click to open

🔴 Errored

Report generation failed
Check error message
Correct issue and regenerate
View Completed Reports

To Open a Report:

Locate report in Recent Reports section
Verify status is "Completed" (green)
Click on the report row
Report opens in Report Viewer modal

Report Viewer Features:

View: Display report in browser
Download: Save as PDF to your computer
Print: Send to printer
Email: Send report via email (if configured)
Close: Exit viewer

Navigation Within Report:

Use scroll or Page Up/Down
Jump to specific page
Zoom in/out
Rotate pages (if needed)
Recent Reports Widget

The Recent Reports section shows:

Most recently generated reports (last 25)
Report name and type
Generation date and time
Status with color coding
Creator (user who generated)

Actions Available:

Click to view completed reports
Monitor progress of processing reports
Check errors for failed reports
Reports Archive

Access complete history:

Click View All Reports link

Or navigate to Reports Center > Archive

Filter results:

Category: 3(8)(c)
Date Range: From/To dates
Report Type: Specific reports
Status: Completed, Errored, etc.
Generated By: Specific user

Sort by:

Date (newest/oldest)
Report name
Status
Export and Distribution
Download Reports

To Download:

Open report in viewer
Click Download button
Select location on your computer
File saves as PDF

Naming Convention:

[ReportType]_[FiscalYear]_[Date].pdf

Examples:
BillingReport_FY2024_20240115.pdf
PayableAmounts_FY2024_20240115.pdf
IndividualStatement_001_FY2024.pdf

Email Reports

If email functionality is configured:

Open report in viewer
Click Email button
Enter recipient email addresses
Add subject line and message
Click Send

Email Includes:

PDF attachment
Custom message
System-generated reference
Reply-to address
Print Reports

To Print:

Open report in viewer
Click Print button
Select printer
Choose print options:
Pages: All or range
Copies: Number to print
Color/B&W
Click Print
Batch Distribution

For multiple recipients:

Generate group report or multiple individual reports
Download all reports
Use your email system to distribute
Or use mail merge functionality
Track distribution for records
Best Practices
Report Generation

✅ Before Generating:

Verify data is current and complete
Confirm fiscal year is closed (for final reports)
Review parameters carefully
Check entity selections

✅ Timing:

Generate draft reports before finalization
Allow time for review before distribution
Generate final reports after board approval
Create reports during off-peak hours (large reports)

✅ Quality Control:

Review sample output before mass generation
Check totals and calculations
Verify formatting is correct
Test PDF generation
Report Distribution

✅ Security:

Distribute sensitive reports securely
Use encrypted email if available
Track distribution list
Follow privacy policies

✅ Documentation:

Maintain distribution records
Document receipt confirmations
Keep copies of all reports sent
Archive systematically

✅ Follow-up:

Confirm receipt of bills
Respond to inquiries promptly
Track due dates
Send reminders for unpaid items
Report Retention

✅ Archive Reports:

Save all generated reports
Organize by fiscal year and type
Maintain electronic and paper copies (as required)
Follow retention schedule

✅ Retention Periods:

Current year: Active access
Prior 7 years: Archive with easy retrieval
Older: Deep archive per policy
Permanent: Certain summary reports
Troubleshooting
Issue: Report Shows "Errored" Status

Symptoms: Report generation fails

Solutions:

Check Data Availability

Verify billing/payable amounts populated
Confirm fiscal year data exists
Ensure entities selected have data

Review Parameters

All required fields filled
Date ranges are valid
Entity selections are correct

System Resources

Wait and retry if system busy
Try during off-peak hours
Break large reports into smaller batches

Contact Support

Provide report parameters used
Note error message received
Indicate timestamp of failure
Issue: Report is Blank or Shows $0

Symptoms: Report generates but has no data or zero amounts

Solutions:

Verify Population

Confirm Populate process was run
Check correct fiscal year was populated
Verify population completed successfully

Check Filters

Remove filters and regenerate
Verify entity selection includes data
Check status filter isn't excluding records

Review Data

Check if billing amounts actually exist
Verify configuration is complete
Confirm allocation percentages are set
Issue: Can't Open Report in Viewer

Symptoms: Report doesn't display when clicked

Solutions:

Browser Issues

Allow pop-ups for the site
Clear browser cache
Try different browser
Update browser to latest version

PDF Reader

Ensure PDF plugin is enabled
Update PDF reader
Try downloading instead of viewing

Report Status

Verify status is "Completed"
Wait if still "Processing"
Regenerate if "Errored"
Issue: Report Format Issues

Symptoms: Report doesn't print correctly or formatting is wrong

Solutions:

Template Issues

Report template may need updating
Contact administrator
May require system configuration

PDF Settings

Check PDF viewer settings
Adjust print scaling
Try different print options

Data Issues

Very long descriptions may wrap oddly
Large amounts of data may span many pages
Consider filtering for smaller reports
Related Topics
Process 3(8)(c) Billing
Generate 3(8)(c) Payable Amounts Report
Generate General Ledger
Process Accounting Year-End Close
Additional Resources
Training Scribes
Generating 3(8)(c) Reports Overview (8:30)
Creating Billing Statements (6:45)
Managing Report Archive (4:20)
Help Articles
Report Parameters Guide
Customizing Report Output
Report Distribution Best Practices
Archive and Retention Guidelines

Document Version: 1.0 Last Updated: January 2025 Next Review: July 2025

ON THIS PAGE
Overview
Table of Contents
Prerequisites
Access 3(8)(c) Reports
Navigation Method 1: From 3(8)(c) Center
Navigation Method 2: From Reports Center
Navigation Method 3: From Reports Archive
Report Categories
Billing Reports
Payable Reports
Billing Reports
1. Create Billing Report by Board
2. Create Billing Report by Name
3. Create Individual Statement
4. Create Group Statement
Payable Reports
1. Create Payable Report
2. Print Payable Setup
3. Print Yearly Payable Amounts
View and Manage Reports
Report Status
View Completed Reports
Recent Reports Widget
Reports Archive
Export and Distribution
Download Reports
Email Reports
Print Reports
Batch Distribution
Best Practices
Report Generation
Report Distribution
Report Retention
Troubleshooting
Issue: Report Shows "Errored" Status
Issue: Report is Blank or Shows $0
Issue: Can't Open Report in Viewer
Issue: Report Format Issues
Related Topics
Additional Resources
Training Scribes
Help Articles