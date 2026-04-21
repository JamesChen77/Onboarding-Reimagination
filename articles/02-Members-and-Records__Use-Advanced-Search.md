# How Do I Use Advanced Search to Find Members Who Meet Specific Criteria?

> **Source:** [https://dev.pensiontech.io/documentation/02-Members-and-Records/Use-Advanced-Search](https://dev.pensiontech.io/documentation/02-Members-and-Records/Use-Advanced-Search)

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
How Do I Use Advanced Search to Find Members Who Meet Specific Criteria?

Category: Members and Records Time: 10-15 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

You have access to the Member Directory in PensionPro+
You understand basic filter concepts (date ranges, yes/no values)
You know what member population you're looking for

Related Topics:

Find a Member
Filter and Search Within Member Directory
Export Member Data to Excel
What This Does

The Advanced Search function in the Member Directory allows you to filter members using multiple data points such as birth date, veteran status, and most recent status event. You can combine these filters to refine results to exactly the population you need for administration or reporting.

Advanced Search allows you to find members who meet specific criteria using multiple filters and conditions. Use this when you need to locate groups of members based on demographics, status, service dates, employer, or other attributes.

Quick Steps
Navigate to Member Directory or Search
Click Advanced Search or the filter icon
Add your search criteria
Click Search to find matching members
Review results and take action
Step-by-Step Instructions
Step 1: Access Advanced Search

Where to Find It:

Option 1: From Member Directory

Go to Member Directory
Look for Advanced Search button or link
Click to open advanced search options

Option 2: From Global Search

Use the search bar in the header
Click Advanced or filter icon next to search
Advanced options panel opens

Option 3: Navigation Menu

Click hamburger menu (☰)
Look for Advanced Search or Member Search
Click to access
Step 2: Understanding Search Criteria

Advanced Search lets you combine multiple criteria to narrow your results.

Available Criteria Categories:

Category	Examples
Demographics	Name, SSN, DOB, Gender, Marital Status
Status	Active, Inactive, Retired, Deceased, Terminated
Employer	Current employer, Department, Division
Service	Hire date, Service years, Employment type
Membership	Member type, Plan, Tier
Location	City, State, Zip Code
Financial	Contribution status, Balance range
Dates	Retirement date, Termination date, Birth date range
Step 3: Adding Search Criteria

To Add a Criterion:

Select a Field from the dropdown (e.g., "Status")
Choose an Operator (e.g., "Equals", "Contains", "Greater Than")
Enter or select a Value (e.g., "Active")
Click Add to include in search

Common Operators:

Operator	Use For
Equals	Exact match
Contains	Partial match (text fields)
Starts With	Beginning of text
Greater Than	Numbers/dates after value
Less Than	Numbers/dates before value
Between	Range of values
Is Empty	Find blank fields
Is Not Empty	Find fields with values
Step 4: Combining Multiple Criteria

AND vs OR Logic:

AND (All conditions must match):

Members who are Active AND hired before 2020 AND work for City

OR (Any condition can match):

Members who are Active OR Retired

How to Set Logic:

Look for AND/OR toggle between criteria
Default is usually AND
Group related conditions with OR when needed

Example Combinations:

Goal	Criteria
Active members over 55	Status = Active AND Age > 55
Members in HR or Finance	Department = HR OR Department = Finance
Retirees in California	Status = Retired AND State = CA
Members hired 2020-2023	Hire Date >= 01/01/2020 AND Hire Date <= 12/31/2023
Step 5: Running the Search
Review your criteria
Click Search or Find Members
Wait for results to load
Results display in a list or table

Search Results Show:

Number of matching members
Member details (name, ID, status, etc.)
Options to sort and filter results
Export options
Common Search Scenarios
Scenario: Find All Members Eligible for Retirement

Criteria:

Status = Active
AND Age >= 55
AND Service Years >= 25

Steps:

Open Advanced Search
Add criterion: Status equals Active
Add criterion: Age greater than or equals 55
Add criterion: Service Years greater than or equals 25
Click Search
Review list of eligible members
Scenario: Find Members by Employer

Criteria:

Employer = [Selected Employer]
AND Status = Active

Steps:

Open Advanced Search
Add criterion: Employer equals [Select from list]
Add criterion: Status equals Active
Click Search
See all active employees for that employer
Scenario: Find Members with Upcoming Birthdays

Criteria:

Birth Month = [Current or Next Month]
AND Status = Active OR Status = Retired

Steps:

Open Advanced Search
Add criterion: Birth Month equals [Month]
Add criterion: Status equals Active
OR Status equals Retired
Click Search
Get birthday list
Scenario: Find Members Missing Contact Information

Criteria:

Email Is Empty
OR Phone Is Empty
AND Status = Active

Steps:

Open Advanced Search
Add criterion: Email Is Empty
OR Phone Is Empty
Add criterion: Status equals Active
Click Search
Follow up to update records
Working with Search Results
Viewing Results

Result Options:

Sort by any column (click header)
Filter further within results
Page through large result sets
Adjust columns shown
Taking Action on Results

What You Can Do:

Click a member to open their profile
Export to Excel for external analysis
Generate reports based on the group
Print the result list
Save the search for later use
Saving Searches

To Save a Search:

Set up your criteria
Run the search (optional, to verify)
Click Save Search or Save As
Name your search (e.g., "Retirement Eligible - Over 55")
Click Save

To Use a Saved Search:

Open Advanced Search
Click Saved Searches or Load Search
Select your saved search
Criteria automatically load
Click Search
Tips for Effective Searching
Start Broad, Then Narrow
Begin with one or two criteria
See how many results you get
Add more criteria to narrow down
Repeat until you have manageable results
Use Date Ranges

Instead of:

Hire Date = 01/15/2020

Use:

Hire Date >= 01/01/2020 AND Hire Date <= 01/31/2020

This catches members hired anytime in January 2020.

Check Your Logic
AND narrows results (fewer matches)
OR expands results (more matches)
Make sure you're using the right logic
Common Questions

Q: Can I search for partial names? A: Yes, use the "Contains" operator for partial text matches.

Q: Why am I getting no results? A: Your criteria may be too restrictive. Remove one criterion at a time to see which is limiting results.

Q: Can I search by custom fields? A: Yes, if your system has custom/extendable data fields, they should appear in the criteria list.

Q: How many criteria can I add? A: Usually unlimited, but more criteria can slow search performance.

Q: Can I share saved searches with colleagues? A: Depends on system configuration. Some allow shared searches, others are personal only.

Troubleshooting
Issue: Search is slow

Solutions:

Reduce number of criteria
Be more specific with criteria
Avoid "Contains" on large text fields
Try during off-peak hours
Issue: Too many results

Solutions:

Add more criteria to narrow search
Use more specific values
Add date ranges to limit scope
Filter by status (active only)
Issue: No results found

Solutions:

Remove some criteria
Check for typos in values
Verify data exists for those criteria
Try broader operators (Contains vs Equals)
Best Practices

✅ DO:

Save frequently used searches
Start broad and narrow down
Use date ranges instead of exact dates
Document complex searches
Export large results to Excel for analysis

❌ DON'T:

Add too many criteria at once
Forget to check AND/OR logic
Search without any criteria (returns all members)
Assume case sensitivity (check your system)
Related Tasks
🔍 Find a Member for quick single-member lookup
📊 Export Member Data to Excel to analyze results
🗂️ Filter and Search Within Member Directory

Last Updated: January 2026

← Back to Members & Records
|
Next: Export Member Data to Excel →

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Access Advanced Search
Step 2: Understanding Search Criteria
Step 3: Adding Search Criteria
Step 4: Combining Multiple Criteria
Step 5: Running the Search
Common Search Scenarios
Scenario: Find All Members Eligible for Retirement
Scenario: Find Members by Employer
Scenario: Find Members with Upcoming Birthdays
Scenario: Find Members Missing Contact Information
Working with Search Results
Viewing Results
Taking Action on Results
Saving Searches
Tips for Effective Searching
Start Broad, Then Narrow
Use Date Ranges
Check Your Logic
Common Questions
Troubleshooting
Issue: Search is slow
Issue: Too many results
Issue: No results found
Best Practices
Related Tasks