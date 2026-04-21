# Generate 3(8)(c) Payable Amounts Report

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Generate-38c-Payable-Amounts-Report](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Generate-38c-Payable-Amounts-Report)

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
Generate 38c Payable Amounts Report
Generate 3(8)(c) Payable Amounts Report
Overview

The 3(8)(c) Payable Amounts Report displays amounts your retirement system owes to participating retirement boards for services provided. This is the reverse of billing - it tracks money payable FROM your system TO other boards rather than money owed TO your system. This workflow helps you populate payable data, track payment obligations, and generate reports for accounting and payment processing.

Time Estimate: 20-30 minutes for annual setup; 10 minutes per report generation Frequency: Annual population; As-needed reporting User Role Required: Financial Administrator, Accountant

Table of Contents
Prerequisites
Understanding 3(8)(c) Payables
Access the Payable Module
Populate Yearly Payable Amounts
Generate Payable Reports
Review and Track Payables
Best Practices
Troubleshooting
Prerequisites

Before processing 3(8)(c) payables, ensure:

✅ Service agreements with other retirement boards are documented
✅ Payable percentages or fixed amounts are configured
✅ Fiscal year data is available and finalized
✅ Service utilization data is accurate
✅ Appropriate permissions are assigned to your user role
✅ Payment processing workflows are established
Understanding 3(8)(c) Payables
What are 3(8)(c) Payables?

In Massachusetts retirement systems, some smaller retirement boards contract with larger systems to provide administrative services. The smaller board pays the larger board for these services under MGL Chapter 32, Section 3(8)(c). If your system PROVIDES services to other boards, these are amounts PAYABLE to you (billing). If your system RECEIVES services from another board, these are amounts you OWE (payables).

Common Payable Scenarios

Your system may owe other boards for:

Administrative services provided by a larger system
Shared executive director services
Payroll processing services
Investment management services
Legal or actuarial services arranged through another board
Technology services and software access
Training and professional development
Payable vs. Billing
Billing (Receivables)	Payables
Money owed TO your system	Money you OWE to others
You provide services	You receive services
You generate invoices	You receive invoices
Track collections	Track payments
Asset on balance sheet	Liability on balance sheet
Access the Payable Module
Navigation

Click 3(8)(c) Center from the main navigation menu

The 3(8)(c) container opens with two tabs:

Billing - For tracking money owed to you
Payable - For tracking money you owe

Click the Payable tab

Payable Tab Overview

The Payable tab provides:

Populate Yearly Payable Amounts - Calculate annual payable amounts
Available Reports section - Generate payable reports
Recent Reports widget - View previously generated reports
Populate Yearly Payable Amounts

This process calculates the amounts your retirement system owes to other boards for services received during a fiscal year.

Step 1: Open Populate Dialog
From the Payable tab, click Populate Yearly Payable Amounts button
The Populate Yearly Payable Amounts modal opens
Step 2: Enter Population Parameters

Required Fields:

Fiscal Year
Select the fiscal year for calculation
Example: "FY 2024" for year ending June 30, 2024
Must be a closed fiscal year with finalized data

Optional Parameters (if available):

Service Type

Administrative services
Executive director services
Investment management
Payroll processing
Technology services
All services

Board Selection

All boards (calculate for all service providers)
Specific boards (select individual providers)

💡 Note: The calculation method is pre-configured in the system based on your service agreements and does not require manual selection during population.

Step 3: Execute Population
Verify all parameters are correct
Click Populate button
System processes the calculation based on your pre-configured service agreements

Processing Steps:

Retrieves service agreement terms
Calculates amounts based on methodology
Applies percentage allocations or fixed fees
Creates payable records
Updates payable amounts table

On Success:

"Yearly payable amounts populated successfully" message appears
Data is available for reporting
Timestamp shows when population completed

On Error:

Review error details
Common issues:
Missing agreement data
Invalid percentages
Incomplete fiscal year
Configuration problems
Correct issues and retry
Generate Payable Reports

After populating payable amounts, generate reports for review, approval, and payment processing.

Available Payable Reports
1. Create Payable Report

Purpose: Generate comprehensive report of all payable amounts

Report Code: CreatePayableReport

To Generate:

Click Create Payable Report from the Payable Operations section
Or access from Reports section

Parameters:

Select Year to Report On: Choose the fiscal year for the report
Sort by: Choose sorting method
Retirement Board (group by board)
Name (alphabetical order)
File Format: Select output format
PDF - Print-ready document
Web Viewer - View in browser
XLSX - Excel spreadsheet
CSV - Comma-separated values

Report Includes:

Provider board name and ID
Service description
Fiscal year
Calculation basis (percentage, fixed fee, etc.)
Total amount payable
Payment terms
Due date
Payment status

Use Cases:

Budget planning
Board approval documentation
Payment authorization
Reconciliation
Audit support

Example Report Content:

3(8)(c) Payable Amounts Report
Fiscal Year 2024

Provider: Regional Retirement Board
Service: Administrative Services
Basis: 15% of administrative costs
Administrative Costs: $500,000
Our Share (15%): $75,000
Status: Unpaid
Due Date: 09/30/2024

Provider: County Retirement System
Service: Investment Management
Basis: Fixed Annual Fee
Amount: $25,000
Status: Paid - Check #12345 on 08/15/2024

2. Print Payable Setup

Purpose: Document the configuration and terms of payable arrangements

Report Code: TecPayableSetupReport

To Generate:

Click Print Payable Setup from Reports section
Select report parameters

Parameters:

Sort by: Choose sorting method
ID - Sort by record ID
Retirement Board - Group by board
Billing Percentage - Sort by percentage amount
Orig Pen + Ven Allow + Pre-81 COLA - Sort by combined amount
Billing Adjustment - Sort by adjustment amount
Adjusted Amount - Sort by final adjusted amount
File Format: PDF only

Report Shows:

Service provider information
Agreement terms and conditions
Calculation methodology
Percentage allocations or fixed amounts
Effective dates
Payment frequency
Contact information
Special provisions

Use Cases:

Document service agreements
Board meeting presentations
New staff training
Audit documentation
Contract renewals
3. Print Yearly Payable Amounts

Purpose: Generate detailed listing of calculated payable amounts

Report Code: TecPayableAmts

To Generate:

Click Print Yearly Payable Amounts
Configure report parameters

Parameters:

Year: Select fiscal year to report
Retirement Board: Select specific board or all boards
Sort By Order: Choose sorting method for results

Report Content:

Summary Format:

Provider name
Total amount owed
Payment status
Due date

Detailed Format:

Service breakdown by category
Calculation details
Supporting data (member counts, percentages, etc.)
Payment history
Current balance

Sorting Options:

By provider name (alphabetical)
By amount (largest to smallest)
By due date
By payment status
Review and Track Payables
Verify Calculated Amounts

After population, review payables before processing payments:

Review Checklist:

✅ Compare to Agreements

Verify amounts match contract terms
Check percentages are applied correctly
Confirm fixed fees are accurate

✅ Validate Calculations

Test mathematical accuracy
Verify basis data (member counts, costs, etc.)
Compare to prior year for reasonableness

✅ Check Completeness

All provider boards included
All service types captured
No missing data

✅ Review Payment Terms

Due dates are accurate
Payment methods are correct
Special terms are noted
Track Payment Status

Monitor payables through:

Recent Reports Section

Shows latest generated reports
Click to view or download
Status indicators for report generation

Reports Archive

Access all historical reports
Filter by date, type, or status
Compare year-over-year

Accounting Integration

Payables should flow to general ledger
Create accounts payable entries
Track in financial statements
Payment Processing

To process payments:

Generate and review payable reports
Obtain necessary approvals
Create payment vouchers
Process through disbursements module
Update payment status
Maintain payment documentation
Best Practices
Annual Workflow

✅ 1. Planning Phase (Beginning of Fiscal Year)

Review service agreements
Confirm terms haven't changed
Update percentage allocations if needed
Document any agreement amendments

✅ 2. During Fiscal Year

Track service utilization
Monitor costs if basis is percentage
Note any mid-year changes
Maintain communication with provider boards

✅ 3. Year-End (After Fiscal Year Close)

Complete all fiscal year accounting entries
Reconcile costs if percentage-based
Populate yearly payable amounts
Review calculations for accuracy

✅ 4. Reporting and Payment

Generate payable reports
Obtain board approval
Process payments timely
Document payment proof
Data Quality

✅ Maintain Accurate Records:

Keep service agreements current
Update configuration when terms change
Document calculation methodologies
Maintain audit trail

✅ Regular Reconciliation:

Compare to provider board invoices
Verify both parties calculate same amount
Resolve discrepancies promptly
Document variances

✅ Document Everything:

Service agreement terms
Board approval minutes
Calculation workpapers
Payment documentation
Correspondence with providers
Communication

✅ With Provider Boards:

Notify in advance of payment timing
Request invoices as needed
Communicate discrepancies
Confirm receipt of payments

✅ With Your Board:

Present payable amounts for approval
Explain calculation methodology
Provide supporting documentation
Report payment status
Compliance

✅ Legal Requirements:

Ensure agreements comply with MGL Ch. 32
Maintain proper authorization
Follow procurement rules if applicable
Document board approval

✅ Financial Controls:

Segregate calculation and payment duties
Require approval for payments
Maintain supporting documentation
Follow internal control policies
Troubleshooting
Issue: Populate Yearly Payable Amounts Fails

Symptoms: Error when attempting to populate

Common Causes & Solutions:

Missing Service Agreement Configuration

Verify agreements are set up in system
Check percentage allocations or fixed amounts
Ensure effective dates are correct
Contact administrator to configure

Incomplete Fiscal Year Data

Complete fiscal year-end close
Finalize all accounting entries
Ensure costs are properly categorized

Invalid Parameters

Check fiscal year selection
Verify board selections are valid
Review calculation method settings
Issue: Payable Amount Doesn't Match Invoice

Symptoms: Your calculation differs from provider's invoice

Solutions:

Review Calculation Basis

Verify agreement terms are correctly configured
Check if costs include all agreed-upon categories
Confirm percentage or allocation method

Compare Data Sources

Your administrative costs vs. their calculation
Member counts if used as basis
Service utilization data
Effective dates of any changes

Communicate with Provider

Request their calculation workpapers
Compare methodologies
Identify source of difference
Agree on correct amount

Document Resolution

Record agreed-upon amount
Adjust if necessary
Create manual entry if needed
Update configuration for future
Issue: Report Shows Zero Amounts

Symptoms: Payable report shows $0 for all or some providers

Solutions:

Verify Population

Ensure Populate Yearly Payable Amounts was run
Check fiscal year selection matches report year
Verify population completed successfully

Check Configuration

Confirm service agreements are active
Verify percentages or amounts are entered
Check effective date ranges

Review Filters

Ensure report filters aren't excluding data
Check board selection includes providers
Verify status filter shows unpaid amounts
Issue: Can't Generate Report

Symptoms: Report generation fails or shows error

Solutions:

Check Data Availability

Ensure payable amounts have been populated
Verify data exists for selected fiscal year
Confirm board selections are valid

Review Parameters

All required fields must be filled
Date ranges must be valid
Format selections must be compatible

System Issues

Refresh browser and retry
Wait if system is processing other reports
Contact support if persistent

Report Template

Verify report template exists
Check for template configuration errors
Administrator may need to update template
Issue: Duplicate Payable Records

Symptoms: Same provider/service appears multiple times

Solutions:

Check Population History

Determine if populate was run multiple times
Review effective dates
Identify which record is correct

Clean Up Data

Delete duplicate records (with proper authority)
Or void incorrect records
Maintain audit trail

Prevent Future Duplicates

Document proper population procedures
Check before re-running population
Archive old data before re-populating
Related Topics
Process 3(8)(c) Billing
Generate 3(8)(c) Reports
Process Cash Receipts and Disbursements
Generate General Ledger
Additional Resources
Training Scribes
Understanding 3(8)(c) Payables (10:15)
Populating Payable Amounts (7:30)
Generating Payable Reports (5:45)
Help Articles
Service Agreement Configuration
Calculating Payable Amounts
Payment Processing Workflow
Reconciling with Provider Invoices
Legal References
Massachusetts General Law Chapter 32, Section 3(8)(c)
PERAC Guidelines on Inter-Board Service Agreements
Sample Service Agreement Templates

Document Version: 1.0 Last Updated: January 2025 Next Review: July 2025

ON THIS PAGE
Overview
Table of Contents
Prerequisites
Understanding 3(8)(c) Payables
What are 3(8)(c) Payables?
Common Payable Scenarios
Payable vs. Billing
Access the Payable Module
Navigation
Payable Tab Overview
Populate Yearly Payable Amounts
Step 1: Open Populate Dialog
Step 2: Enter Population Parameters
Step 3: Execute Population
Generate Payable Reports
Available Payable Reports
Review and Track Payables
Verify Calculated Amounts
Track Payment Status
Payment Processing
Best Practices
Annual Workflow
Data Quality
Communication
Compliance
Troubleshooting
Issue: Populate Yearly Payable Amounts Fails
Issue: Payable Amount Doesn't Match Invoice
Issue: Report Shows Zero Amounts
Issue: Can't Generate Report
Issue: Duplicate Payable Records
Related Topics
Additional Resources
Training Scribes
Help Articles
Legal References