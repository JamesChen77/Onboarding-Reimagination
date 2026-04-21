# How Do I Create a Customized Report?

> **Source:** [https://dev.pensiontech.io/documentation/08-Reports-and-Analytics/Create-Customized-Report](https://dev.pensiontech.io/documentation/08-Reports-and-Analytics/Create-Customized-Report)

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
08. REPORTS AND ANALYTICS
Overview
Generate and View Reports Through Reports Center
Understand Where Reports Live
View Generated Reports
Create Customized Report
Run Ad Hoc Queries
Generate Accounting Reports
Print Member Information Reports
09. COMMUNICATIONS AND MEMBER ENGAGEMENT
10. BATCH PROCESSING AND OPERATIONS
11. SYSTEM ADMINISTRATION
Documentation
chevron_right
Reports And Analytics
chevron_right
Create Customized Report
How Do I Create a Customized Report?

Category: Reports and Analytics Time: 10-30 minutes Difficulty: ⭐⭐⭐ Advanced

Before You Begin:

Access to PensionPro+ homepage
Permission to create custom reports
Understanding of your data structure and available tables
Clear definition of report requirements (columns, filters, sorting)

Related Topics:

Run Ad-Hoc Queries
Generate and View Reports Through Reports Center
What This Does

Enables you to create customized reports tailored to your specific operational needs that extend beyond the default report library. The custom report builder allows you to select data sources, configure columns, apply filters, sort data, and join related tables to generate reports precisely suited to your analysis requirements.

Creating customized reports allows you to build your own reports with exactly the data you need. You select which database tables to query, which columns to display, and how to filter and sort the results. Customized reports can be saved for reuse and executed in multiple formats (Excel, CSV, PDF, Word).

Note: In PensionPro+, customized reports are accessed through the Custom Reports feature in the Reports Center.

Why Custom Reports Matter:

Custom reports give you flexibility beyond pre-built report templates. You can create reports that combine specific data fields, apply unique filters, and sort information exactly how your team needs it for analysis and decision-making.

Quick Steps
Go to Reports Center → Reports tab
Click View Custom Reports
Click + Custom Report
Select tables and columns
Configure filters and sorting
Save with a descriptive name
Execute to generate the report
Complete Instructions

For detailed step-by-step instructions on creating customized reports, see:

📖
Run Ad-Hoc Queries (Custom Reports)

This guide includes:

Selecting data tables and columns
Adding filters to limit results
Joining multiple tables for complex reports
Sorting and organizing output
Saving and executing custom reports
Exporting results in various formats
Key Concepts
What is a Custom Report?

A custom report (also called an ad-hoc query) is a user-defined report where you:

Choose the data source - Select which database table(s) to query
Pick columns - Decide exactly which fields to display
Apply filters - Limit results to specific criteria
Set sorting - Control the order of results
Save for reuse - Save the configuration to run again later
When to Use Custom Reports

Use Custom Reports When You Need To:

Extract specific data not available in standard reports
Create lists with custom column combinations
Filter data by specific criteria
Export data for external analysis
Create reports for unique business processes

Examples:

List of members hired in a specific year with their salary information
Active members in a particular city with missing beneficiary designations
Contributions over a certain amount within a date range
Members with specific retirement dates approaching
Custom Reports vs. Standard Reports

Standard Reports:

✅ Pre-built and ready to use
✅ Formatted for printing and official use
✅ Include standard headers and footers
✅ Faster to generate (no configuration needed)
❌ Fixed column selection
❌ Limited filtering options

Custom Reports:

✅ Completely flexible column selection
✅ Advanced filtering capabilities
✅ Can join multiple data tables
✅ Export raw data for analysis
❌ Require configuration time
❌ May not have formatted layouts

💡 Best Practice: Use standard reports for routine needs, custom reports for special data requests.

Building Your First Custom Report
Example: Active Members Contact List

Goal: Create a list of all active members with their contact information.

Steps:

Navigate to Reports Center → Reports tab
Click View Custom Reports button
Click + Custom Report button
Configure as follows:

Report Configuration:

Report Name: "Active Members Contact List"

Data Configuration:

Table: Member
Columns:
MemberID
FirstName
LastName
Email
Phone
City
State

Filters:

Column: Status
Operator: LIKE
Value: %Active%

Sorting:

Column: LastName
Direction: Ascending
Click Save Custom Report
Click Execute Report → Execute as XLSX
Excel file opens with your custom member list
Common Custom Report Templates
Member Lists

All Members in a Specific Status:

Table: Member
Columns: MemberID, Name fields, Status, HireDate
Filter: Status = [Desired Status]
Sort: LastName

Members Hired in Date Range:

Table: Member
Columns: MemberID, Name fields, HireDate, Department
Filter: HireDate between [Start] and [End]
Sort: HireDate descending
Financial Reports

Contributions Above Threshold:

Table: Contribution
Columns: MemberID, ContributionDate, Amount, Type
Filter: Amount > [Threshold]
Sort: Amount descending

Year-to-Date Contributions by Member:

Table: Contribution
Columns: MemberID, MemberName, Sum of Amount
Filter: ContributionDate >= [Year Start]
Group By: MemberID
Sort: Total descending
Compliance and Audit

Members Missing Required Data:

Table: Member
Columns: MemberID, Name fields, [Required Field]
Filter: [Required Field] IS NULL
Filter: Status = 'Active'
Sort: LastName

Recent Data Changes:

Table: MemberAudit
Columns: MemberID, ChangeDate, ChangedBy, FieldChanged
Filter: ChangeDate >= [Recent Date]
Sort: ChangeDate descending
Advanced Techniques
Using Joins

Combining Member and Address Data:

Base Table: Member
Add Join:
From: Member.MemberID
To: Address.MemberID
Select columns from both tables
Result: Member info with their current address

For complete join instructions, see:
Run Ad-Hoc Queries

Using Wildcards in Filters

LIKE operator with % wildcard:

Sm% - Starts with "Sm" (Smith, Smart, Small)
%son - Ends with "son" (Johnson, Anderson)
%retire% - Contains "retire" (Retired, Pre-Retirement)

Examples:

LastName LIKE 'A%' - All last names starting with A
City LIKE '%field' - Cities ending in "field" (Springfield, Mansfield)
Status LIKE '%Active%' - Any status containing "Active"
Complex Filters

Multiple Conditions: All filters work together (AND logic):

Filter 1: Status = 'Active'
Filter 2: HireDate > 01/01/2020
Filter 3: Email IS NOT NULL
Result: Active members hired after 2020 who have email addresses

Date Range Filters:

StartDate >= [Begin Date]
EndDate <= [End Date]
Result: Records within the date range
Saving and Managing Custom Reports
Report Naming Best Practices

Good Names:

"Active Members - Contact Info" ✅
"Contributions Over $5000 - Last Quarter" ✅
"Members Missing Beneficiary Designation" ✅

Poor Names:

"Report1" ❌
"Test" ❌
"Query" ❌

💡 Tip: Include what data, what filters, and what timeframe in the name.

Organizing Your Reports

Keep Your List Manageable:

Delete test reports after finalizing
Export important reports as backup
Use consistent naming conventions
Document complex reports in external notes

Sharing Reports:

Edit the report
Click Export Report
Share the JSON file with colleagues
They can import it using Import Custom Report
Executing Saved Reports

From the Custom Reports List:

Find your saved report
Click the Play button dropdown
Choose format:
XLSX - For data analysis in Excel
CSV - For importing to other systems
PDF - For formatted viewing/printing (if configured)
DOCX - For editing in Word (if configured)

Quick Re-run:

Recently executed reports show execution count
Click play to run with same settings
No need to reconfigure each time
Best Practices

✅ DO:

Start with simple single-table reports
Test filters with small date ranges first
Save reports before executing them
Use descriptive names that explain the purpose
Export important configurations as backup
Add filters to improve performance

❌ DON'T:

Select all available columns (slows performance)
Use extremely broad date ranges without filters
Create duplicate reports (edit existing ones instead)
Delete reports without exporting first
Run huge reports during peak hours
Common Questions

Q: How is this different from standard reports? A: Standard reports are pre-built with fixed formats. Custom reports let you choose exactly which data to include and how to display it.

Q: Do I need SQL knowledge? A: No! The visual query builder handles the SQL for you. Just select tables, columns, and filters using dropdowns and forms.

Q: Can I create charts or graphs? A: Custom reports export data only. For visualizations, export to Excel and create charts there.

Q: How many custom reports can I create? A: There's no strict limit, but keep your list manageable by deleting unused reports.

Q: Can I schedule custom reports to run automatically? A: Currently, custom reports must be executed manually. Contact your administrator about scheduled reporting needs.

Q: What if I need data from multiple tables? A: Use the Join Tables feature to combine related tables. See the detailed instructions in
Run Ad-Hoc Queries
.

Q: Can I modify a standard report? A: No, standard reports cannot be modified. Create a custom report to achieve similar results with your modifications.

Q: Where do executed custom reports go? A: They're saved in the Reports Archive along with all other generated reports.

Troubleshooting
Issue: Report returns no data

Solutions:

Check filters - may be too restrictive
Verify date ranges include data
Remove filters one by one to identify the issue
Check spelling in filter values
Verify the table contains matching records
Issue: Report is very slow to execute

Solutions:

Add filters to limit the result set
Reduce the number of joined tables
Shorten the date range
Remove unnecessary columns
Run during off-peak hours
Issue: Columns don't match expected data

Solutions:

Verify you selected the correct table
Check column names carefully (similar names exist)
Review filter operators (= vs LIKE)
Test with a small sample first
Consult the table documentation
Related Tasks
📖 Run Ad-Hoc Queries (Complete Guide) - Detailed instructions
Generate and View Reports - Standard reports
View Generated Reports - Access your results

Last Updated: January 2026

← Back to Reports & Analytics

ON THIS PAGE
What This Does
Quick Steps
Complete Instructions
Key Concepts
What is a Custom Report?
When to Use Custom Reports
Custom Reports vs. Standard Reports
Building Your First Custom Report
Example: Active Members Contact List
Common Custom Report Templates
Member Lists
Financial Reports
Compliance and Audit
Advanced Techniques
Using Joins
Using Wildcards in Filters
Complex Filters
Saving and Managing Custom Reports
Report Naming Best Practices
Organizing Your Reports
Executing Saved Reports
Best Practices
Common Questions
Troubleshooting
Issue: Report returns no data
Issue: Report is very slow to execute
Issue: Columns don't match expected data
Related Tasks