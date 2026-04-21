# How Do I Filter and Search Within the Member Directory?

> **Source:** [https://dev.pensiontech.io/documentation/02-Members-and-Records/Filter-and-Search-Within-Member-Directory](https://dev.pensiontech.io/documentation/02-Members-and-Records/Filter-and-Search-Within-Member-Directory)

---

DOCUMENTATION
00. READINESS JOURNEY
01. GETTING STARTED
02. MEMBERS AND RECORDS
Overview
Add a Member
Find a Member
Update Member Demographic Information
Update Contact Information
Update Payment Information
Update Beneficiary Designations
Add Member History
Add Multiple Memos
Review Member Banner and Navigation Cards
Change Checking Bank Account Details
Export Member Data to Excel
Filter and Search Within Member Directory
Open Multiple Members in Browser Tabs
03. CONTRIBUTIONS AND BUYBACKS
04. RETIREMENT AND BENEFITS
05. PAYROLL AND PAYMENTS
06. REFUNDS AND DISTRIBUTIONS
07. ACCOUNTING AND COMPLIANCE
08. REPORTS AND ANALYTICS
09. COMMUNICATIONS AND MEMBER ENGAGEMENT
10. BATCH PROCESSING AND OPERATIONS
11. SYSTEM ADMINISTRATION
Documentation
chevron_right
Members And Records
chevron_right
Filter and Search Within Member Directory
How Do I Filter and Search Within the Member Directory?

Category: Members and Records Time: 10 minutes Difficulty: ⭐⭐ Intermediate

Related Topics:

Navigate Member Directory
Find a Member
Export to Excel
What This Does

Shows you how to use the Advanced Search feature to filter the Member Directory using multiple criteria simultaneously. This is more powerful than the basic search box and helps you find specific groups of members quickly.

Quick Steps
Click hamburger menu → Member Directory
Click Advanced Search button (top right of directory)
Advanced search sidebar opens from the right
Enter your filter criteria
Results display in main table
Active filters shown as chips above table
Two Ways to Search
Method 1: Basic Search (Quick)

Use the search box at top of directory for simple searches:

Type name, Member ID, or SSN
Results filter instantly as you type
Good for finding one specific member

See
Find a Member
for basic search details.

Method 2: Advanced Search (Powerful)

Use Advanced Search for complex filtering:

Combine multiple filter criteria
Filter by date ranges
Search by demographics, service, status
Save time when looking for groups of members
Step-by-Step: Using Advanced Search
Step 1: Open Advanced Search

Where to Go:

Click hamburger menu → Member Directory
Member Directory opens
Look to the top-right of the directory table
Click the Advanced Search button

What You'll See:

Sidebar slides in from the right
Form with many filter fields
Reset and Close buttons at top
Search button at bottom
Step 2: Understanding Available Filters

The Advanced Search sidebar has filters organized by type.

Date Range Filters

All date filters use "From" and "To" ranges:

Birth Date

Filter by member age
Example: Find all members born 1960-1970

Hire Date

Filter by when member joined
Example: Find all hired in last year

Termination Date

Filter terminated members by end date
Example: Find terminations in Q4 2024

Death Date

Filter deceased members by date of death

Board Member Dates

Current Board Member Date
Original Board Member Date

Most Recent Status Event Date

Filter by when status last changed
Text and Number Filters

Regular/2% Contribution Rate

Filter by contribution rate

Section 28N Flag

Special designation filter

Current Service

Filter by years of service

Employee Number

Search by member employee number

SSN (Last 4)

Filter by last 4 digits of SSN
Dropdown Filters

Status

Select: Active, Retired, Terminated, Death, etc.
Multiple selections allowed

Gender

Male, Female, Other, Unknown

Marital Status

Single, Married, Divorced, Widowed

Board

Filter by retirement board

Unit/Department

Filter by organizational unit

Job Title/Position

Filter by job classification

Member Type

Regular, Safety, Other classifications
Step 3: Enter Filter Criteria

For Date Ranges:

Click "From" date field
Use calendar picker or type MM/DD/YYYY
Click "To" date field
Select end date
Validation ensures From ≤ To

For Text Fields:

Click in text field
Type your search term
Partial matches work
Not case-sensitive

For Dropdown Fields:

Click dropdown
Select option(s)
Multiple selections allowed for most fields
Step 4: Search for Specific Fields

Can't find a filter you need?

Use the Filter Search:

Look at top of Advanced Search sidebar
Find "Search for Filter" text box
Type the filter name
Only matching filters display
Clear to see all filters again

💡 Tip: This is helpful when you have many filter options and want to quickly locate a specific one.

Step 5: Review Your Results

What You'll See:

Active Filter Chips

Chips appear above the table
Show each active filter: "Birth Date: 01/01/1960 - 12/31/1970"
Badge on Advanced Search button shows number of active filters

Updated Table

Shows only matching members
Pagination updates with result count
Can still sort by clicking column headers

Result Count

Bottom of table shows: "Showing 1-25 of 150"
Indicates how many members match your filters
Step 6: Refine Your Search

To Add More Filters:

Advanced Search sidebar still open
Add additional criteria
Results automatically update

To Remove a Filter:

Method 1 - Remove Individual Filter:

Click the X on a filter chip above table
That filter is removed
Results automatically update

Method 2 - Clear All Filters:

Click Clear All Filters button above table
All filters removed at once
Table shows all members again

Method 3 - Reset in Sidebar:

Click Reset icon (↺) at top of Advanced Search sidebar
Clears all filter fields
Results automatically update to show all members
Step 7: Close Advanced Search

When finished:

Click Close button (X) at top-right of sidebar
Sidebar slides closed
Active filters remain active
Table continues showing filtered results
Filter chips still visible for reference

💡 Tip: Filters stay active even after closing the sidebar! Clear them if you want to see all members again.

Combining Multiple Filters
Example 1: Find Recent Retirees from Specific Unit

Filters to Use:

Status = Retired
Most Recent Status Event Date From = 01/01/2024
Most Recent Status Event Date To = 12/31/2024
Unit = Fire Department

Result: All members who retired in 2024 from Fire Department

Example 2: Find Active Members Approaching Retirement Age

Filters to Use:

Status = Active
Birth Date From = 01/01/1959
Birth Date To = 12/31/1964

Result: Active members aged 60-65 (approximate)

Example 3: Find Terminated Members from Last Quarter

Filters to Use:

Status = Terminated
Termination Date From = 10/01/2024
Termination Date To = 12/31/2024

Result: All terminations in Q4 2024

Example 4: Find All Female Members in Police Department

Filters to Use:

Gender = Female
Unit = Police Department
Status = Active

Result: Active female officers in police department

Exporting Filtered Results

Want to export your search results to Excel?

Run your Advanced Search
Review results in table
Click Export button (top-right of directory)
Select format (Excel, CSV, PDF)
File downloads with ONLY filtered results

💡 Pro Tip: This is perfect for creating mailing lists, generating reports, or analyzing subsets of members!

See
Export Member Data to Excel
for detailed export instructions.

Common Search Scenarios
Scenario: Generate Retirement Eligibility List

Goal: Find members eligible to retire this year

Filters:

Status = Active
Birth Date From = 01/01/1964 (or older for age 60+)
Current Service = 20 or more years

Use Case: Retirement planning, outreach mailings

Scenario: Identify Members Needing Annual Affidavits

Goal: Find retirees who need to submit forms

Filters:

Status = Retired
Most Recent Status Event Date To = 12/31/2023 (retired before this year)

Use Case: Annual compliance, form distribution

Scenario: Research Terminations by Unit

Goal: Track turnover in specific department

Filters:

Status = Terminated
Unit = [Specific Department]
Termination Date From/To = [Date Range]

Use Case: HR analysis, staffing reports

Scenario: Find Members with Specific Service Credit

Goal: Locate members with military service credit

Filters:

(Would use specialized filter if available)
Can export and manually review

Use Case: Verify military credit purchases

Best Practices

✅ DO:

Start with broader criteria, then narrow down
Use date ranges to limit results
Combine Status with other filters for targeted results
Clear filters when starting a new search
Export results for offline analysis
Note the number of active filters (badge count)
Save frequently used searches (if feature available)

❌ DON'T:

Enter too many filters at once (start simple)
Forget to clear old filters before new search
Ignore validation errors on date ranges
Leave Advanced Search open if not using it
Forget that filters persist after closing sidebar

💡 PRO TIPS:

Filter chips show your active search - reference them!
Clicking Export with filters active exports ONLY filtered results
Sort filtered results by clicking column headers
Combine Advanced Search with basic search box
Use "Search for Filter" feature to quickly find specific filters
Common Questions

Q: How many filters can I use at once? A: No limit! Use as many as needed. However, too many filters may return no results if criteria are too restrictive.

Q: Do filters stay active after I log out? A: No, filters clear when you log out or close your browser. Use Export if you need to save results.

Q: Can I save my search criteria for reuse? A: This depends on your system configuration. Check with your administrator about saved searches feature.

Q: Why does my search return no results? A: Possible reasons:

Filters are too restrictive (try removing one)
Date range is too narrow
Spelling error in text field
No members match all criteria

Q: Can I filter by multiple statuses at once? A: Yes! Many dropdown fields allow multiple selections.

Q: What's the difference between basic search and Advanced Search? A:

Basic Search = Quick lookup by name/ID/SSN, single field
Advanced Search = Multiple criteria, date ranges, complex filtering

Q: How do I clear just one filter? A: Click the X on that filter's chip above the table. Or remove it from the Advanced Search sidebar and the results will update automatically.

Q: Can I search by partial text? A: Yes! Text fields support partial matching. Example: "Smi" finds "Smith"

Q: Why does the Advanced Search button show a number badge? A: The number indicates how many filters are currently active.

Troubleshooting
Issue: Advanced Search sidebar won't open

Solutions:

Refresh the page
Check browser console for errors
Verify you have permission to use Advanced Search
Try clicking directly on "Advanced Search" text
Try a different browser
Issue: Search returns unexpected results

Solutions:

Review all active filter chips above table
Check for filters you forgot to clear
Verify date ranges are correct (From ≤ To)
Clear all filters and start fresh
Try searching with just one criterion to test
Issue: Filter field is disabled/grayed out

Solutions:

Check if it requires another filter first
Verify your permission level
Confirm the field is applicable to your system
Contact administrator if issue persists
Issue: Can't find a specific filter

Solutions:

Use "Search for Filter" box at top of sidebar
Type the filter name
Scroll down - many filters available
Check if feature is enabled in your system
Ask administrator about custom filters
Issue: Search is very slow

Solutions:

Your filters may be searching large dataset
Add more specific criteria to narrow results
Use date ranges to limit scope
Consider exporting for offline analysis
Contact administrator if consistently slow
Related Tasks
Navigate Member Directory
Find a Member
Export Member Data to Excel
Open Multiple Members in Tabs

Last Updated: January 2026

← Back to Members & Records
|
Next: Export to Excel →

ON THIS PAGE
What This Does
Quick Steps
Two Ways to Search
Method 1: Basic Search (Quick)
Method 2: Advanced Search (Powerful)
Step-by-Step: Using Advanced Search
Step 1: Open Advanced Search
Step 2: Understanding Available Filters
Step 3: Enter Filter Criteria
Step 4: Search for Specific Fields
Step 5: Review Your Results
Step 6: Refine Your Search
Step 7: Close Advanced Search
Combining Multiple Filters
Example 1: Find Recent Retirees from Specific Unit
Example 2: Find Active Members Approaching Retirement Age
Example 3: Find Terminated Members from Last Quarter
Example 4: Find All Female Members in Police Department
Exporting Filtered Results
Common Search Scenarios
Scenario: Generate Retirement Eligibility List
Scenario: Identify Members Needing Annual Affidavits
Scenario: Research Terminations by Unit
Scenario: Find Members with Specific Service Credit
Best Practices
Common Questions
Troubleshooting
Issue: Advanced Search sidebar won't open
Issue: Search returns unexpected results
Issue: Filter field is disabled/grayed out
Issue: Can't find a specific filter
Issue: Search is very slow
Related Tasks