# How Do I Run Custom Reports (Ad-Hoc Queries)?

> **Source:** [https://dev.pensiontech.io/documentation/08-Reports-and-Analytics/Run-Ad-Hoc-Queries](https://dev.pensiontech.io/documentation/08-Reports-and-Analytics/Run-Ad-Hoc-Queries)

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
Run Ad Hoc Queries
How Do I Run Custom Reports (Ad-Hoc Queries)?

Category: Reports and Analytics Time: 10-20 minutes Difficulty: ⭐⭐⭐ Advanced

Related Topics:

Create Customized Report
Generate and View Reports Through Reports Center
What This Does

Custom Reports (also called Ad-Hoc Queries) allow you to build your own reports by selecting specific data tables, columns, filters, and sorting options. Unlike standard reports with fixed formats, custom reports give you complete control over what data to include and how to display it. You can save custom reports for reuse and execute them in various formats (Excel, CSV, PDF, Word).

Quick Steps
Go to Reports Center → Reports tab
Click View Custom Reports button
Click + Custom Report
Select base table and columns
Add filters and sorting (optional)
Save the custom report
Execute to generate output
Step-by-Step Instructions
Step 1: Access Custom Reports

Where to Go:

Click hamburger menu (☰) → Reports Center
The Reports tab opens by default
Look for the View Custom Reports button (top-right area)
Click View Custom Reports

The Custom Reports modal opens, showing your saved custom reports list.

Step 2: View Existing Custom Reports

What You'll See:

The Custom Reports modal displays:

Search box - Find custom reports by name
Import Custom Report button - Import reports from JSON files
+ Custom Report button - Create new custom report
List of saved custom reports - Your previously created reports

Each Report Shows:

Report Name - The name you gave the report
Tables Used - Which database tables the report queries
Execution Count - How many times the report has been run
Play Button - Execute the report
Edit Button - View or modify the report configuration

To Execute an Existing Custom Report:

Find the report in the list
Click the Play button dropdown
Select output format:
Execute as XLSX - Excel spreadsheet
Execute as CSV - Comma-separated values
Execute as PDF - Formatted PDF document (if template configured)
Execute as DOCX - Word document (if template configured)
Report generates and opens in the viewer
Step 3: Create a New Custom Report

Starting a New Report:

Click the blue + Custom Report button
The report builder form opens
You'll see sections for: Report Configuration, Data Configuration, as well as Join Tables (optional) after selecting a table under Data Configuration
Step 4: Configure Report Information

Report Information Section:

Report Name (Required)
Enter a descriptive name for your report
Example: "Active Members with Recent Contributions"
Maximum 100 characters

💡 Tip: Use clear, descriptive names so you can easily find the report later.

Step 5: Select Base Table

Data Configuration - Select Table:

Click the Table dropdown

Search or scroll to find your primary data source

Common tables include:

Member - Member demographic and status information
MemberHistory - Employment history records
Contribution - Contribution transactions
Payment - Payment and payroll records
Beneficiary - Beneficiary designations
Address - Member addresses
Phone - Member phone numbers

Select your table

The table name appears with a searchable dropdown

💡 Tip: Start with the table containing your primary data. You can join additional tables later.

Step 6: Select Columns to Display

Select Columns to Display Section:

After selecting a base table:

Click Add Columns button
A column selector dialog opens
Browse available columns for the selected table
Check boxes next to columns you want to include
Click Add Selected Columns

Managing Selected Columns:

Selected columns appear as chips with options to:

Left/Right arrows - Reorder columns
X icon - Remove column
Display name shows on each chip

Common Columns by Table:

Member Table:

MemberID, FirstName, LastName, SSN
DateOfBirth, HireDate, Status
City, State, ZipCode

Contribution Table:

ContributionDate, ContributionAmount
EmployerID, MemberID
ContributionType, PayPeriodEndDate

Payment Table:

PaymentDate, GrossAmount, NetAmount
PaymentType, CheckNumber
MemberID, PayPeriodStartDate

💡 Tip: You can add up to 50 columns per table. Start with essential columns and add more as needed.

Step 7: Add Filters (Optional)

Filter Columns By Section:

Filters limit which rows appear in your report.

To Add a Filter:

Click Add Filter button
A filter row appears with three fields:
Column - Select which column to filter
Operator - Select comparison type
Value - Enter the filter value

Available Operators:

= (Equals) - Exact match
!= (Not Equals) - Exclude exact match
> (Greater Than) - Numbers or dates after value
< (Less Than) - Numbers or dates before value
>= (Greater Than or Equal)
<= (Less Than or Equal)
LIKE - Partial text match (use % wildcards)
NOT LIKE - Exclude partial text match
IS NULL - Empty/null values
IS NOT NULL - Has a value

Filter Value Types:

Text Columns:

Type text directly
Use LIKE operator with % for wildcards
Example: "Sm%" finds all names starting with "Sm"

Number Columns:

Type numeric values
Example: Contribution amount > 1000

Date Columns:

Click calendar icon to select dates
Example: HireDate >= 01/01/2020

Boolean Columns:

Select True or False from dropdown
Example: IsActive = True

Filter Examples:

Active members only: Status LIKE '%Active%'
Recent hires: HireDate >= 01/01/2023
Large contributions: ContributionAmount > 5000
Members with emails: Email IS NOT NULL

To Remove a Filter:

Click the trash icon on the filter row

💡 Tip: Multiple filters work together (AND logic). All filters must be true for a row to appear.

Step 8: Add Sorting (Optional)

Sort Columns By Section:

Sorting controls the order rows appear in your report.

To Add Sorting:

Click Add Sort button
A sort row appears with two fields:
Column - Select which column to sort by
Direction - Select Ascending or Descending

Sort Directions:

Ascending - A to Z, 0 to 9, oldest to newest
Descending - Z to A, 9 to 0, newest to oldest

Sort Examples:

LastName - Ascending (alphabetical)
HireDate - Descending (most recent first)
ContributionAmount - Descending (largest first)

Multiple Sort Columns:

You can add multiple sort columns
First sort is primary, second is tiebreaker, etc.
Example: Sort by LastName ascending, then FirstName ascending

To Remove Sorting:

Click the trash icon on the sort row
Step 9: Join Additional Tables (Optional - Advanced)

Join Tables Section:

Joins allow you to include columns from related tables.

To Add a Join:

Click Add Join button in the Join Tables section
A join configuration card appears

Configuring the Join:

1. Select From Table:

Choose the table to join from (usually your base table or a previously joined table)

2. Select Join With Table:

Choose the related table to add

3. Select Join Columns:

From Table Column - The linking column in the from table
Join Table Column - The matching column in the join table
Usually these are ID fields (e.g., MemberID links to MemberID)

4. Select Columns from Joined Table:

Click Add Columns button
Select which columns from the joined table to include
Columns appear as chips similar to the base table

5. Add Filters/Sorting for Joined Table (Optional):

Add filters specific to the joined table data
Add sorting for joined table columns

Common Joins:

Member + Address:

From: Member.MemberID
To: Address.MemberID
Get: Street, City, State, ZipCode

Member + Contribution:

From: Member.MemberID
To: Contribution.MemberID
Get: ContributionDate, Amount

Member + MemberHistory:

From: Member.MemberID
To: MemberHistory.MemberID
Get: EmployerName, HireDate, TerminationDate

💡 Tip: Joins are powerful but complex. Start with simple single-table reports until you're comfortable with the basics.

Step 10: Save the Custom Report

Saving Your Work:

Review your report configuration
Ensure Report Name is filled in
Click the Save Custom Report button (bottom-right)
Success message appears
Your report is now saved and appears in the custom reports list

Save & Update:

If editing an existing report, the button says Save & Update
Only saves if changes have been made
Step 11: Execute the Custom Report

Running the Report:

After saving (or for existing reports):

Click the Execute Report button dropdown (bottom-right)
Select your desired format:
Execute as XLSX - Excel with full data
Execute as CSV - Raw data export
Execute as PDF - Formatted document
Execute as DOCX - Editable Word document

What Happens:

⏳ Report generates (progress indicator shows)
📊 Report opens in the Reports Viewer modal
💾 Report saves to Reports Archive for later access

If Unsaved Changes Exist:

Button says Save and Execute
Report saves first, then executes
Step 12: View and Download Results

Reports Viewer:

When the report completes, the Reports Viewer opens showing:

For Data Reports (XLSX/CSV):

Data Table with all selected columns
Pagination for large datasets
Download buttons for each available format

For Document Reports (PDF/DOCX):

PDF Viewer displays the document
Download buttons for different formats

Downloading:

Click the format button at the top
Download XLSX - Excel file
Download CSV - CSV file
Download PDF - PDF file (if available)
File downloads to your browser's download folder
Advanced Features
Importing Custom Reports

To Import a Report JSON File:

Click Import Custom Report button
Drag and drop a JSON file or click to browse
Report configuration loads into the form
Review the imported settings
Click Save Custom Report to add it to your list

💡 Tip: Use import/export to share reports with colleagues or backup your configurations.

Exporting Custom Reports

To Export a Report Configuration:

Open an existing custom report for editing
Click Export Report button (bottom-left)
JSON file downloads with the report configuration
Save the file for backup or sharing
Deleting Custom Reports

To Delete a Report:

Open the custom report for editing
Click the Delete button (bottom-left, red)
Confirm deletion
Report is permanently removed from your saved reports list

⚠️ Warning: Deletion cannot be undone. Export the report first if you might need it later.

Common Custom Report Scenarios
Scenario: Active Members List with Contact Info

Steps:

Create new custom report: "Active Members Contact List"
Select Member table
Add columns: MemberID, FirstName, LastName, Email, Phone
Add filter: Status = 'Active'
Add sort: LastName ascending
Save and execute as XLSX
Result: Spreadsheet of all active members with contact details
Scenario: Contributions in Last Month

Steps:

Create new custom report: "Recent Contributions"
Select Contribution table
Add columns: MemberID, MemberName, ContributionDate, Amount, Type
Add filter: ContributionDate >= (first day of last month)
Add filter: ContributionDate <= (last day of last month)
Add sort: ContributionDate descending
Save and execute as CSV
Result: All contributions from the previous month
Scenario: Members with Missing Email Addresses

Steps:

Create new custom report: "Members Without Email"
Select Member table
Add columns: MemberID, FirstName, LastName, Status
Add filter: Email IS NULL
Add filter: Status LIKE '%Active%'
Add sort: LastName ascending
Save and execute as XLSX
Result: Active members who need email addresses added
Best Practices

✅ DO:

Start simple with one table and a few columns
Use clear, descriptive report names
Test with filters to limit results while building
Save reports before executing them
Export important report configurations as backup
Document complex joins and filters in the report name

❌ DON'T:

Select all columns unnecessarily (slows performance)
Create overly complex joins without testing
Use extremely broad date ranges without filters
Delete reports without exporting them first
Run very large reports during peak business hours
Common Questions

Q: What's the difference between custom reports and standard reports? A: Standard reports have fixed formats and are pre-built. Custom reports let you choose exactly which data to include and how to format it.

Q: How many custom reports can I create? A: There is no strict limit, but we recommend keeping your list manageable by deleting unused reports.

Q: Can I share custom reports with other users? A: Yes, use the Export feature to save the report as JSON, then share the file. Others can import it into their custom reports list.

Q: Why does my report take a long time to run? A: Large reports with many joins, no filters, or broad date ranges take longer. Add filters to limit results and improve performance.

Q: Can I edit a custom report after saving it? A: Yes, click the Edit button on the report in the list, make changes, and click Save & Update.

Q: What does "Execute as" mean? A: It's the output format - XLSX for Excel, CSV for raw data, PDF for formatted documents, DOCX for Word.

Q: How do wildcards work in LIKE filters? A: Use % to represent any characters. Example: "Sm%" finds "Smith", "Smart", "Small". "%son" finds "Johnson", "Anderson".

Q: Can I join more than two tables? A: Yes, you can add multiple joins. Each join can connect to any previously added table.

Q: Where do executed custom reports go? A: They're saved in the Reports Archive, just like standard reports.

Troubleshooting
Issue: Report returns no results

Solutions:

Check filters - they may be too restrictive
Verify date ranges include data
Check for typos in filter values
Try removing filters one by one to isolate the issue
Verify the base table contains data matching your criteria
Issue: Column selector shows no columns

Solutions:

Ensure you've selected a base table first
Refresh the page and try again
Try selecting a different table
Contact administrator if tables appear empty
Issue: Join doesn't return expected data

Solutions:

Verify join columns are correct (matching ID fields)
Check that related data exists in both tables
Try adding the join step-by-step and test after each addition
Review which table is "From" and which is "Join With"
Consider the data relationship (one-to-many, many-to-one)
Issue: Report execution fails

Solutions:

Simplify the report - remove joins and filters
Check for invalid filter values (e.g., text in number fields)
Ensure date filters use valid date formats
Try executing with a smaller column selection
Contact administrator if errors persist
Issue: Can't save custom report

Solutions:

Ensure Report Name is filled in
Verify at least one table and one column are selected
Check that filter values match column data types
Remove empty filter or sort rows
Try a shorter report name (under 100 characters)
Related Tasks
Create Customized Report - Alternative report building
Generate and View Reports - Standard reports
View Generated Reports - Accessing report results

Last Updated: January 2026

← Back to Reports & Analytics
|
Next: Create Customized Report →

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Access Custom Reports
Step 2: View Existing Custom Reports
Step 3: Create a New Custom Report
Step 4: Configure Report Information
Step 5: Select Base Table
Step 6: Select Columns to Display
Step 7: Add Filters (Optional)
Step 8: Add Sorting (Optional)
Step 9: Join Additional Tables (Optional - Advanced)
Step 10: Save the Custom Report
Step 11: Execute the Custom Report
Step 12: View and Download Results
Advanced Features
Importing Custom Reports
Exporting Custom Reports
Deleting Custom Reports
Common Custom Report Scenarios
Scenario: Active Members List with Contact Info
Scenario: Contributions in Last Month
Scenario: Members with Missing Email Addresses
Best Practices
Common Questions
Troubleshooting
Issue: Report returns no results
Issue: Column selector shows no columns
Issue: Join doesn't return expected data
Issue: Report execution fails
Issue: Can't save custom report
Related Tasks