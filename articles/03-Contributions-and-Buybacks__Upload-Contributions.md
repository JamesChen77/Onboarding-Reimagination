# How Do I Upload Contributions?

> **Source:** [https://dev.pensiontech.io/documentation/03-Contributions-and-Buybacks/Upload-Contributions](https://dev.pensiontech.io/documentation/03-Contributions-and-Buybacks/Upload-Contributions)

---

DOCUMENTATION
00. READINESS JOURNEY
01. GETTING STARTED
02. MEMBERS AND RECORDS
03. CONTRIBUTIONS AND BUYBACKS
Overview
Upload Contributions
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
Contributions And Buybacks
chevron_right
Upload Contributions
How Do I Upload Contributions?

Category: Contributions and Buybacks Time: 10-15 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

Have contribution file prepared in correct format
You have a properly formatted contribution file ready to upload (maximum 25MB)
You know the correct file format for your data
Verify file contains accurate data
Know which posting period this covers
You have the appropriate posting number for the contribution period
You have verified the total amount of money received for reconciliation
Have upload permissions

Related Topics:

Create Manual Contribution Register
Review Contribution History
What This Does

Allows you to import contribution data from a file into PensionPro+, creating a register that can be reviewed, verified, and officially posted to member accounts. The upload process ensures contributions are accurately recorded and tracked through the batch processing system.

Allows you to upload contribution data files from employers containing employee and employer contributions, earnings, and service credit information. The system validates the data and processes it for posting to member accounts.

Use when: You receive contribution files from employers (typically bi-weekly or monthly).

Quick Steps
Click hamburger menu (☰) → Contributions Center
Click Upload Register if you are in Active Member Payroll or Upload Contribution if you are in Deduction Processing
Select file from your computer
System validates file
Review validation results and errors
Fix any errors and re-upload if needed
Once validation passes, post contributions
Verify contributions posted correctly
Step-by-Step Instructions
Step 1: Prepare Your Contribution File

Before uploading:

File Format Requirements:

Format: CSV (Comma Separated Values) or Excel (.xlsx)
Encoding: UTF-8 (for CSV files)
File Extension: .csv or .xlsx
File Size: Typically under 25 MB

Required Columns:

Member ID or SSN
Pay Period Start Date
Pay Period End Date
Earnings Amount
Employee Contribution Amount
Employer Contribution Amount (if applicable)
Contribution Type/Code
Employer Code/Unit

Optional Columns:

Service Credit
Hours Worked
Additional Earnings Codes
Department/Division
Job Code

💡 Tip: Download the template file from the system if available to ensure correct format.

Step 2: Navigate to Contributions Center

Where to Go:

Click hamburger menu (☰) in top-left → Contributions Center
Contributions Center page opens
You'll see two tabs (if both features enabled):
Active Member Payroll (AMP)
Deduction Processing (DP)
Select the appropriate tab for your upload
Step 3: Start Upload Process

On Contributions Center page:

Look for Upload Contribution/Upload Register button (top area) depending on which tab you are in
Button shows upload icon 📤
Click the button
Upload dialog/modal opens
Step 4: Select Your File

In the upload dialog:

Click Choose File or Browse button
File browser opens
Navigate to your contribution file
Select the file
Click Open
Filename appears in dialog

Verify:

Correct file selected
File name matches expected file
File is most recent version
Step 5: Enter Upload Details

Complete these fields (fields vary by tab):

If in Active Member Payroll tab:

Posting Number (Required)

Enter a unique identifier for this posting
Example: "PD-PP01-2024" or "FD-DEC2024"
Used to track and reference this batch
Maximum 50 characters

Payroll Date (Required)

The date when this payroll was processed
Example: 01/15/2024
Format: MM/DD/YYYY
Usually the end of the pay period or payment date

Period Start Date (Required)

First day of the pay period covered
Example: 01/01/2024
Format: MM/DD/YYYY
Must be before or equal to Period End Date

Period End Date (Required)

Last day of the pay period covered
Example: 01/15/2024
Format: MM/DD/YYYY
Defines the pay period range for these contributions
Must be on or after Period Start Date

Unit (Required)

Select the organizational unit/employer from dropdown
Example: "Police Department", "Fire Department"
May be pre-selected based on your role
Identifies which department these contributions belong to

Template (Required)

Select the file template/format being used
Example: "Standard Payroll Template", "Police Department Format"
Tells system how to interpret the file columns
Use the template that matches your file structure
If unsure, contact your system administrator

If in Deduction Processing tab:

File Format (Required)

Select the format/interface type for your file
Options are configured in your system
Example: "Standard CSV Format", "Custom Deduction Format"
Tells system how to parse the uploaded file

Posting Number (Required)

Enter a unique identifier for this posting
Example: "DP-2024-001" or "MANUAL-JAN24"
Used to track and reference this batch
Maximum 10 characters

Unit to Replace Blank Values (Optional)

Select unit from dropdown if your file has blank unit values
System will assign this unit to any records with blank unit field
Leave blank if all records in file have unit values
Helpful for files from single-unit employers
Step 6: Submit for Validation
Review all entered information
Click Upload button
System begins processing
Progress indicator shows
Validation runs (may take 1-5 minutes)

During validation, system checks:

File format is correct
Required columns present
Member IDs exist in system
Dates are valid
Amounts are numeric and reasonable
No duplicate entries
Contribution types are valid
Step 7: Review Validation Results

After validation completes, you'll see:

Successful Validation ✅

If file passes all checks:

Green success message appears
Summary shows:
Total records found
Total contribution amount
Affected members count
Pay period covered
Ready to post

Next step: Proceed to Step 8 (Post Contributions)

Validation Errors/Warnings ⚠️

If file has issues:

Red error message appears
Error list displays showing:
Row/Line number with error
Error description
Field causing issue
Suggested correction

Common Validation Errors:

Member Not Found

Member ID or SSN doesn't exist in system
Fix: Verify ID, add member first, or correct ID in file

Invalid Date Format

Date not in expected format (MM/DD/YYYY)
Fix: Correct date format in file

Duplicate Entry

Same member/period already exists
Fix: Check if already uploaded, or contact administrator for correction

Missing Required Field

Required column empty or missing
Fix: Fill in missing data

Invalid Amount

Amount is not numeric or negative (when shouldn't be)
Fix: Correct amount in file

Invalid Contribution Code

Contribution type not recognized
Fix: Use valid code from system list

Pay Period Conflict

Overlapping pay periods
Fix: Verify dates are correct
Step 8: Fix Errors and Re-Upload

If validation failed:

Download error report (button usually provided)
Open your original file
Correct each error based on error report
Save corrected file
Return to Step 3 and upload again
Validate again until all errors resolved

💡 Tip: Keep original file and save corrections as new version (e.g., contributions_v2.csv)

Step 9: Post Contributions

Once validation passes:

Review summary one more time
Verify amounts look correct
Click Post Contributions button
Confirmation dialog appears
Click Confirm to proceed

⚠️ Important: Once posted, contributions affect member accounts. Contact administrator if corrections are needed.

Posting process:

System processes each record
Contributions added to member accounts
Service credit updated
Accumulated deductions updated
May take several minutes for large files
Step 10: Verify Posted Contributions

After posting completes:

Check Posting Results:

Success message appears
Posting number assigned (record this!)
Summary report displays:
Total posted
Members affected
Total contribution amount
Any warnings

Spot Check Members:

Select random members from file
Open their profiles
Navigate to Contribution History
Verify contributions appear
Check amounts match file

Run Reports:

Generate posting report
Compare totals to source file
Verify all members included
Step 11: Document the Upload

Recommended:

Save posting number for records
Print or save posting summary
File original contribution file
Note any issues encountered
Document in your tracking system
File Format Requirements
CSV File Format

Structure:

MemberID,PayPeriodStart,PayPeriodEnd,Earnings,EmpContribution,EmpRContribution
12345,01/01/2024,01/15/2024,5000.00,250.00,250.00
12346,01/01/2024,01/15/2024,4500.00,225.00,225.00


Requirements:

First row = Column headers
Each row = One member's contribution
No blank rows
No extra spaces
UTF-8 encoding
Consistent date format (MM/DD/YYYY)
Excel File Format

Requirements:

Single worksheet (or first sheet used)
Headers in Row 1
Data starts Row 2
No formulas (values only)
No formatting needed (will be ignored)
Standard Excel (.xlsx) format
Common Column Names

System may accept variations. Check your template or administrator.

Data	Common Column Names
Member Identifier	MemberID, SSN, EmployeeNumber, EmployeeID
Pay Period Start	PayPeriodStart, PeriodStartDate, StartDate
Pay Period End	PayPeriodEnd, PeriodEndDate, EndDate
Earnings	Earnings, Salary, Wages, GrossPay
Employee Contribution	EmpContribution, EmpDeduction, EmployeeContribution
Employer Contribution	ErContribution, EmployerContribution, ErDeduction
Common Scenarios
Scenario 1: Successful Upload (No Errors)

Situation: Clean file from well-integrated employer

Steps:

Upload file
System validates → 100% success
Review summary (250 members, $125,000 total)
Post contributions
Posting completes successfully
Record posting number: DP-2024-001
Spot check 5 members → All correct

Result: Contributions posted cleanly

⏱️ Time: 10 minutes

Scenario 2: Upload with Validation Errors

Situation: File has 5 errors out of 200 records

Steps:

Upload file
Validation shows errors:
3 members not found (wrong IDs)
2 invalid dates
Download error report
Open original file
Correct 5 errors
Save as contributions_v2.csv
Re-upload corrected file
Validation passes
Post contributions

Result: All 200 contributions posted after corrections

⏱️ Time: 25 minutes

Scenario 3: Duplicate Upload Detection

Situation: Accidentally upload same file twice

Steps:

Upload file (second time)
Validation shows: "Duplicate entries found"
System shows: "These members/periods already posted"
Review: Already posted yesterday!
Cancel upload
No duplicate posting occurred

Result: System prevented duplicate posting

⏱️ Time: 5 minutes (problem avoided!)

Scenario 4: Large File Upload

Situation: 5,000 member contributions (large employer)

Steps:

Upload file (5 MB)
Validation takes 5 minutes
Minor warnings (3 small discrepancies)
Review acceptable
Post contributions
Posting takes 10 minutes
System sends email when complete
Review posting summary
Run validation reports

Result: Large batch posted successfully with monitoring

⏱️ Time: 30 minutes + monitoring

Best Practices

✅ DO:

Validate file format before uploading
Test upload with small sample first (if new format)
Review validation results carefully
Fix all errors before posting
Verify posting completed successfully
Keep original files and posting records
Document posting numbers
Spot check member accounts after posting
Upload during off-peak hours for large files
Coordinate with employers on file format

❌ DON'T:

Upload without reviewing file first
Ignore validation warnings
Post if unsure about errors
Upload duplicate files
Delete original files immediately
Close browser during posting
Upload files from unknown sources
Skip verification steps
Post large batches without testing
Forget to record posting number

💡 PRO TIPS:

Set up automated file receipt from employers (if available)
Create file format documentation for each employer
Use naming convention: EmployerCode_YYYYMMDD.csv
Keep upload log: Date, Employer, Posting Number, Member Count, Total Amount
Schedule regular upload times with employers
Have employer contact info handy during upload
Create backup of file before corrections
Use Excel to review/clean data before creating CSV
Understanding Validation vs. Posting
Validation Phase
Purpose: Check file for errors BEFORE affecting data
Safe: No changes to member accounts
Reversible: Can cancel and fix
Fast: Usually 1-5 minutes
Posting Phase
Purpose: Actually update member accounts
Permanent: Affects real data
Corrections Required: Contact administrator if corrections needed
Slower: May take 10+ minutes for large batches

💡 Key Point: ALWAYS review validation results before posting!

Common Questions

Q: How often should we upload contributions? A: Typically matches employer pay frequency (bi-weekly, semi-monthly, monthly). More frequent is better for data currency.

Q: Can I upload partial batches? A: Yes. You can upload subsets of members. However, try to upload complete pay periods.

Q: What if a member is missing from the file? A: That's okay. Upload processes only members included. Missing members can be added in next upload or manually.

Q: Can I edit contributions after posting? A: Not directly. Contact your system administrator to correct posted contributions.

Q: What happens if upload fails mid-way? A: System rolls back - no partial posting. Fix issue and re-upload entire file.

Q: How do I know what posting number to use? A: System auto-generates posting numbers. You just provide description for identification.

Q: Can multiple people upload at the same time? A: Yes, but coordinate to avoid conflicts (same employer/period).

Q: What if file has member not in system yet? A: Validation will flag error. Add member first, then re-upload file.

Q: Are there file size limits? A: Usually 10,000-50,000 records or 25 MB. Check with administrator for your system limits.

Q: Can I preview before posting? A: Validation results show summary. Some systems offer detailed preview. Review carefully before posting.

Troubleshooting
Issue: File upload fails immediately

Solutions:

Check file format (.csv or .xlsx)
Verify file isn't corrupted (open in Excel)
Check file size (may be too large)
Try different browser
Check internet connection
Save as new file and try again
Issue: Many "member not found" errors

Solutions:

Verify using correct member identifier (ID vs. SSN)
Check if members need to be added first
Verify IDs match exactly (no extra spaces)
Check if file from correct employer
Contact administrator about member setup
Issue: Validation takes very long time

Solutions:

Be patient - large files take time
Don't close browser window
Check if system is busy (try off-peak hours)
For very large files, consider splitting
Contact administrator if consistently slow
Issue: Posting fails after successful validation

Solutions:

Check error message details
Verify no one else posted same batch
Check system status/availability
Try posting again
Contact administrator if repeated failures
File may need to be re-validated
Issue: Can't find posted contributions

Solutions:

Note posting number from upload
Look in "View Contributions" section
Search by posting number or description
Check posting date
Verify posting actually completed (check status)
Allow time for system to process
Issue: Amounts don't match source file

Solutions:

Verify correct file was uploaded
Check for rounding differences
Review posting summary report
Spot check individual members
Generate detailed posting report
Contact administrator if significant discrepancy
Related Tasks
Create Manual Contribution Register
Review Contribution History
Calculate Make-Ups

Last Updated: January 2026

← Back to Contributions
|
Next: Manual Register →

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Prepare Your Contribution File
Step 2: Navigate to Contributions Center
Step 3: Start Upload Process
Step 4: Select Your File
Step 5: Enter Upload Details
Step 6: Submit for Validation
Step 7: Review Validation Results
Step 8: Fix Errors and Re-Upload
Step 9: Post Contributions
Step 10: Verify Posted Contributions
Step 11: Document the Upload
File Format Requirements
CSV File Format
Excel File Format
Common Column Names
Common Scenarios
Scenario 1: Successful Upload (No Errors)
Scenario 2: Upload with Validation Errors
Scenario 3: Duplicate Upload Detection
Scenario 4: Large File Upload
Best Practices
Understanding Validation vs. Posting
Validation Phase
Posting Phase
Common Questions
Troubleshooting
Issue: File upload fails immediately
Issue: Many "member not found" errors
Issue: Validation takes very long time
Issue: Posting fails after successful validation
Issue: Can't find posted contributions
Issue: Amounts don't match source file
Related Tasks