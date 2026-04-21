# How Do I Process 1099 Reports?

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-1099-Reports](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Process-1099-Reports)

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
Process 1099 Reports
How Do I Process 1099 Reports?

Category: Accounting and Compliance Time: 2-4 hours (depending on member count and corrections needed) Difficulty: ⭐⭐⭐ Advanced

Related Topics:

Process Accounting Year-End Close
Process Monthly Accounting

Documentation note (March 2026): Sections below are being aligned to the live 1099 – Wizard under Payment Center, the top BATCH queue, and current modal labels. Where your screen differs, follow the UI.

What This Does

The 1099-R reporting process generates IRS Form 1099-R (Distributions From Pensions, Annuities, Retirement or Profit-Sharing Plans, IRAs, Insurance Contracts, etc.) for all retirees and beneficiaries who received distributions during the calendar year. This critical compliance workflow ensures accurate reporting to the IRS and provides recipients with their required tax documentation.

Why This is Important:

IRS Compliance: Required by federal law for all pension distributions
Tax Reporting: Recipients need 1099-R for their tax returns
Accuracy: Errors can result in penalties for both the system and recipients
Deadlines: Must be filed by January 31st
Documentation: Creates permanent record of distributions

What the System Calculates:

Box 1: Gross distribution amounts
Box 2a: Taxable amount
Box 2b: Taxable amount not determined
Box 3: Capital gain (if applicable)
Box 4: Federal income tax withheld
Box 5: Employee/designated Roth contributions
Box 7: Distribution code(s)
Box 9b: Total employee contributions
Other boxes as applicable
Before You Begin

Prerequisites Checklist:

✅ Calendar Year Complete:

All payrolls for the year processed
All December payments posted
All adjustments and corrections entered
Year-end close completed

✅ Data Validation:

Retiree addresses are current
Social Security numbers verified
Tax withholding information current
Member contributions data accurate

✅ System Configuration:

1099-R settings reviewed
Distribution codes configured
Simplified method tables updated (if applicable)
Payer information verified

✅ Documentation Ready:

Prior year 1099 forms for reference
IRS instructions for current year
Correction procedures documented
Filing deadlines confirmed

✅ Permissions:

Access to Payment Center (1099 workflow)
Permission to populate 1099 data
Ability to generate reports
Authority to mark forms as sent
Quick Steps
Populate 1099 Data - Run batch job to calculate all 1099 amounts
Review and Validate - Check data for accuracy and completeness (use the Age 59 and one-half report in the wizard when validating members who turned 59½ during the year)
Handle Errors/Warnings - Correct any issues identified
Review Individual Records - Spot-check sample members
Generate Test Reports - Print sample forms for review
Make Corrections - Fix any errors found
Generate Final Forms - Print or create electronic file
File with IRS - Submit electronically or by mail
Distribute to Recipients - Mail copies to members by January 31
Mark as Sent - Update system to track distribution
Step-by-Step Instructions
Step 1: Populate 1099 Data

Purpose: Run the batch process that calculates 1099-R amounts for all eligible recipients.

Navigation:

Navigate to Payment Center
In the 1099 Processing section, open 1099 – Wizard
Click Populate 1099 (or equivalent) to open the populate dialog

Configure Population Parameters:

Year/ID (Required):

Enter the calendar year: 2024
Can add suffix for multiple runs: 2024-A, 2024-B
System keeps separate 1099 information for each Year/ID
Recommended: Use just the year for primary run

Use Simplified Method? (Required):

Yes: System uses IRS Simplified Method to calculate taxable amounts
No: Manual taxable amount calculation
Recommendation: Select "Yes" unless you have specific requirements
The Simplified Method uses standard IRS tables based on member contributions

Delete Locked Records? (Required):

Yes: Overwrites all records, including those marked as locked
No: Preserves records with Lock Flag set to Yes
Recommendation: Select "No" for initial run
Use "Yes" only if you need to completely regenerate all data

Include Acc Dis Pension Amts? (Required):

Yes: Include pension portion of accidental disability payments
No: Exclude pension portion (only include indemnity portion)
Check: Your system's policy and IRS requirements
Common: Most systems select "Yes"

Force Print Flag To Yes? (Required):

Yes: All records marked for printing regardless of taxable amount
No: Records with $0 taxable amount not marked for printing
Recommendation: Select "No" to avoid printing unnecessary forms
Can manually override individual records if needed

Seasonal Date (Optional):

Effective date for seasonal addresses
Only month/day are used (year is ignored)
System compares to "Begin Month/Day" and "End Month/Day" in address records
Use: If retirees have winter/summer addresses
Leave Blank: If not using seasonal addresses

Execute Population:

Review all parameters carefully
Click Proceed button
Confirmation dialog appears:
Are you sure you want to populate 1099 data for "2024"?
This will populate all 1099 records for the specified year.

Click Proceed to confirm
System displays message:
Populate 1099 batch job has been submitted.
You can monitor progress in the global Batch Queue.

Dialog closes automatically

Monitor Batch Job:

Click the BATCH button in the top navigation bar (uppercase label in the standard shell)
Look for the populate job for your Year/ID (e.g. Populate 1099 / similar job name)
Monitor status:
Queued: Waiting to start
Processing: Currently running
Completed: Finished successfully
Completed with Warnings: Review warnings
Errored: Review errors and rerun

Processing Time:

Depends on number of retirees
Typically: 5-30 minutes
Large systems (>5,000 retirees): May take 1+ hour
Step 2: Review Errors and Warnings

Purpose: Identify and resolve any issues found during population.

Access Errors/Warnings:

Stay in Payment Center → 1099 – Wizard
Open Wizard Step 2 labeled Review / Errors (not a separate freestanding "1099 Errors/Warnings" menu in all builds)
Error/Warning list displays

Error/Warning table columns (typical):

Year, Sequence, Employee #, Name, Flag, Error/Warning, Actions

Common Errors:

❌ Missing Address

Error: "Member 123456: No address on file"
Resolution: Add current address in member record
Priority: HIGH - form cannot be generated

❌ Invalid SSN

Error: "Member 234567: Invalid Social Security Number format"
Resolution: Correct SSN in member demographic information
Priority: HIGH - required for IRS filing

❌ Missing Taxable Amount

Error: "Unable to calculate taxable amount"
Resolution: Verify member contribution data exists
Priority: HIGH - affects tax reporting

❌ Negative Distribution

Error: "Gross distribution is negative"
Resolution: Review payroll history for errors
Priority: HIGH - indicates data problem

Common Warnings:

⚠️ Large Taxable Amount

Warning: "Taxable amount exceeds typical range"
Review: Verify calculation is correct
Action: Document if legitimate

⚠️ No Taxable Amount

Warning: "Taxable amount is zero"
Review: Verify if appropriate (after-tax contributions)
Action: Confirm accuracy

⚠️ Address Issue

Warning: "Address may be incomplete"
Review: Check for missing city, state, or ZIP
Action: Update address

Resolution Process:

Click on Error/Warning Row to open detail modal
Review Issue Details:
Member information
Error description
Suggested resolution
Navigate to Member Record:
Click member link or
Open member in new tab
Make Corrections:
Update required information
Save changes
Return to Errors/Warnings List
Refresh to see if error is resolved
Repeat for all errors

After Corrections:

If data changes affect 1099 calculations:

May need to re-populate 1099 data
Or use individual recalculation (if available)
Always verify corrections affected 1099 amounts

Validation in the same review phase: From 1099 – Wizard, also run the Age 59½ Report (next section) so you can confirm split 1099-R codes 2 and 7 for anyone who turned 59½ during the tax year.

Age 59 and one-half report (within the 1099 wizard)

Purpose: The Age 59½ Report is a wizard step in 1099 – Wizard (exact label may vary slightly by build). It lists anyone included in the 1099 run who turned age 59½ during the 1099 calendar year.

Why it matters: For those members, reporting for that year is split between the period before 59½ and on or after 59½. They receive two Form 1099-R forms for that tax year:

One 1099-R uses distribution code 2 for the portion of the year they were under 59½ (early distribution; exception applies)
A second 1099-R uses distribution code 7 for the portion of the year they were 59½ or older (normal distribution)

When to run it: Run this report while you are reviewing and validating the populated 1099 year—after the Populate 1099 batch has completed and you are working through the wizard’s review steps, before you finalize printing and filing. Use it to confirm who requires split 1099-R treatment for the year.

What to do with the results: Confirm that listed members are expected to have two 1099-Rs with codes 2 and 7; resolve data or calculation questions before final output. If someone appears on this report unexpectedly, investigate before signing off on the run.

Step 3: Review 1099 Information

Purpose: Examine individual 1099 records and verify accuracy.

Access 1099 Information:

Navigate to Payment Center → 1099 – Wizard
Continue to the wizard step for 1099 Information (screen title 1099 Information, not the shortened "1099 Info" label)
The grid displays

Filter Options:

Year/ID Filter:

Select year to review: 2024
Can view multiple years
Shows only selected year data

Retirement Status Filter:

All
Retirees only
Beneficiaries only
Other statuses

Member Search:

Search by member name
Partial name matches
Real-time filtering

Table Columns:

Column	Description
Year/ID	Calendar year of distribution
Member Name	Retiree or beneficiary name
Seq #	Sequence number (multiple 1099s per person)
Gross Distribution	Box 1: Total distribution amount
Taxable Amount	Box 2a: Taxable portion
Distribution Code	Box 7: IRS code for distribution type
Lock Record	Yes/No (dropdown) - prevents repopulation
Actions	Row actions (as shown)
Sent to IRS	Yes/No - tracking for filing

Review Process:

✅ Spot Check Sample Members:

Select 10-20 members randomly
Include variety: high amounts, low amounts, new retirees
Verify gross distribution matches annual payments
Check taxable amount calculations
Confirm distribution codes are correct

✅ High-Value Review:

Sort by Gross Distribution (largest first)
Review highest amounts
Verify calculations are reasonable
Document any unusual cases

✅ Special Cases:

New retirees (first year)
Deceased members
Disability retirees
QDRO recipients
Refunds

Edit Individual Records:

Click on Row to open 1099 detail modal
Review All Fields:
SSN/EIN
Name and address
Distribution amounts
Tax withholding
Distribution codes
Employee contributions
Make Changes if needed
Lock Record to prevent repopulation:
Set Lock Record dropdown to Yes / No as appropriate
Saves manual corrections
Won't be overwritten by rerun
Click Update (save control label in the detail modal)

Manual Corrections:

Common reasons for manual edits:

Correcting address issues
Adjusting taxable amounts for special cases
Adding notes or comments
Fixing distribution codes
Updating employee contribution amounts
Step 4: Generate Test Reports

Purpose: Print sample 1099 forms to review before final generation.

Generate Report:

From 1099 – Wizard, use the step that runs 1099 Report (wizard step before Print 1099s)

Complete the 1099 Report modal using the fields on screen. A typical modal includes:

Create Report for Member
Year/ID*
Member/Retiree*
Sort By*
SSN / EIN Display*
Short or Long?*
Print 1099 = Yes or No?*
File Format (often PDF only for this step)

For bulk printing, continue to the Print 1099s wizard step; that modal commonly includes Report Year Id*, Mask SSN*, Beginning SSN, Ending SSN, Member/Retiree, Which 1099 Form* (default often 4-up Standard), and File Format options such as PDF, Web Viewer, XLSX, CSV, DOCX.

Configure parameters as needed

Click Generate Report (or the button label shown)

Output opens in Report Details and/or appears under Reports Archive in Reports Center as configured

Review Test Output:

✅ Check Formatting:

All boxes aligned properly
No data cutoff
Readable fonts
Proper spacing

✅ Verify Data:

Payer information correct
Recipient information complete
Amounts match expectations
Distribution codes accurate

✅ Look for Issues:

Missing addresses
Incorrect SSNs
Calculation errors
Unusual amounts

Common Report Types:

Preview Report:

Lists all 1099 data
Shows what will print
Good for management review
Can export to Excel

Draft Forms:

Prints on plain paper
Use for proofing
Cheaper than official forms
Test printer alignment
Step 5: Make Final Corrections

Purpose: Fix any remaining issues before generating official forms.

Review Findings:

Document all issues from test reports
Prioritize corrections
Identify patterns (systematic errors)

Make Corrections:

Individual Corrections:

Open 1099 Information
Find specific member
Click to open detail
Make corrections
Lock record if manual adjustment
Save

Bulk Corrections:

If systematic error found
May need to re-populate
Or make batch adjustments
Document reason for changes

Validate After Corrections:

Regenerate test report
Verify corrections applied
Check no new errors introduced
Document all changes
Step 6: Generate Final Forms

Purpose: Create official 1099-R forms for filing and distribution.

Paper Forms:

Load Pre-Printed Forms:

Order IRS-approved 1099-R forms
Red ink required for Copy A (IRS copy)
Load correctly in printer
Test alignment with one form

Generate Report:

Select "Official Forms" option
Choose copies needed:
Copy A: IRS (red ink)
Copy B: Recipient
Copy C: Payer file
Copy 1: State (if required)
Set print parameters
Start print job

Quality Control:

Review first few forms
Check alignment
Verify print quality
Confirm all copies printing

Electronic Filing (1099-R FIRE):

In 1099 – Wizard, use the step labeled Create IRS File (feedback: previously documented as a generic "Generate Electronic File" step).

The IRS 1099 File Report modal commonly includes: Report Year Id*, Member/Retiree*, Corrected*, Prior Year*, Test File*, and File Format (TXT only). This is 1099-R FIRE submission data—not 1094/1095 health coverage forms.

Save the generated file to a secure location for upload per IRS FIRE procedures.

File Contains:

All 1099-R records
Payer information
Recipient information
All required data elements
Formatted per IRS specs

Validation:

Run IRS validation tool (if available)
Check file integrity
Verify record counts
Test file format
Step 7: File with IRS

Purpose: Submit 1099-R information to the IRS by deadline.

Filing Methods:

Electronic Filing (Recommended):

✅ Advantages:

Faster processing
Immediate confirmation
Lower error rate
No postage costs
Required if 250+ forms

Steps:

Register with IRS FIRE system (if not already)
Obtain TCC (Transmitter Control Code)
Upload 1099 file through IRS portal
Receive confirmation number
Print and retain confirmation

Paper Filing:

Used if <250 forms or electronic not available:

Prepare Copy A:

Printed on red-ink forms
Include Form 1096 (transmittal)
Complete 1096 with totals

Mail to IRS:

Address on IRS instructions
Send via certified mail
Retain receipt
Must be postmarked by January 31

Filing Deadline:

January 31: Deadline to file with IRS
January 31: Deadline to provide copies to recipients
Extension: Available if needed (Form 8809)
Late Penalty: $50-$290 per form (increases over time)
Step 8: Distribute to Recipients

Purpose: Provide 1099-R copies to all recipients by January 31.

Prepare Mailings:

Print Recipient Copies:

Copy B: "For Recipient" (required)
Copy C: Optional but recommended
Print on plain paper (color not required)

Prepare Envelopes:

Window envelopes (address shows through)
Or print address labels
Include return address
Use first-class mail

Include Cover Letter:

Dear [Member Name],

Enclosed is your 2024 Form 1099-R for your pension
distributions. Please retain this form for your
tax records and provide it to your tax preparer.

The information reported on this form has also been
filed with the IRS.

If you have questions, please contact us at [phone].

Thank you,
[Retirement System Name]


Mailing Process:

Fold forms with care:

Ensure numbers visible
Don't obscure important information
Use window envelope positioning

Mail by January 31:

Allow time for processing
Mail in batches if large volume
Use business reply envelopes if budget allows

Handle Returns:

Undeliverable mail
Update addresses
Attempt to locate member
Document efforts

Electronic Delivery (If Authorized):

Must have written consent
Secure portal access
Email notification
Proof of delivery
Meets IRS electronic delivery requirements
Step 9: Mark Forms as Sent

Purpose: Track distribution status in the system.

Process:

Navigate to Payment Center
Open the Mark 1099 Sent card/step (label: Mark 1099 Sent, not "Mark 1099 as Sent")
Enter Year/ID To Update* (required)
Click Proceed (not Update)
There is typically no separate Date Sent field in this modal—confirm on screen

The system updates sent/tracking flags per your configuration.

Why This Matters:

Tracks compliance
Prevents duplicate distribution
Audit trail
Reporting purposes
Step 10: File and Archive

Purpose: Maintain records for required retention period.

Required Documentation:

✅ File Copies:

Copy C of all 1099 forms
IRS filing confirmation
Electronic file backup
Form 1096 (if paper filed)

✅ Supporting Documentation:

Populate 1099 job logs
Error/warning reports
Correction documentation
Test reports

✅ Distribution Records:

Mailing list
Returned mail log
Electronic delivery confirmations
Date sent documentation

Retention:

IRS Requirement: Minimum 4 years
Best Practice: 7 years
Some Systems: Permanent
Check your organization's retention policy

Organization:

1099 Records/
  └─ 2024/
     ├─ Forms-Copy-C/
     ├─ Electronic-File/
     ├─ IRS-Confirmation/
     ├─ Error-Reports/
     ├─ Mailing-List/
     └─ Documentation/

Common Scenarios
Scenario 1: First Year Processing 1099s

Situation: You're responsible for 1099 processing for the first time.

Approach:

Review prior year's documentation
Read IRS Publication 15-A (Employer's Supplemental Tax Guide)
Meet with predecessor or colleague
Start process early (mid-December)
Run test population in December
Allow extra time for learning
Have supervisor review your work
Don't wait until January!
Scenario 2: Deceased Member

Situation: Member passed away during the year, 1099 should go to beneficiary or estate.

Process:

Review the 1099 Information record
Check recipient name:
Should be estate or beneficiary who received payments
Or "Estate of [Member Name]"
Verify address:
Estate attorney
Or beneficiary address
Update distribution code if needed:
Code 4: Death distribution
Or appropriate code
Lock record to prevent repopulation
May need separate 1099s if payments split
Scenario 3: Member Moved - Bad Address

Situation: 1099 returned as undeliverable.

Steps:

Search for updated address:
Check member record for alternate address
Review recent correspondence
Contact emergency contact
Use address verification service
If found:
Update member address
Resend 1099
Document efforts
If not found:
Document attempts to locate
File copy per retention policy
Flag for future follow-up
IRS still requires filing even if can't deliver
Scenario 4: Member Disputes Amount

Situation: Retiree calls saying 1099 amount is wrong.

Response:

Verify identity and pull up record
Review 1099 data:
Gross distribution
Payments history for year
Any adjustments or corrections
Explain calculation:
Show payment details
Add up total
Explain taxable amount calculation
If error found:
Document the error
Determine cause
Issue corrected 1099-R
File correction with IRS
If calculation correct:
Provide detailed breakdown
Explain any unusual items
Offer written confirmation
Suggest tax professional consultation
Scenario 5: Need to Issue Corrected 1099

Situation: Error discovered after forms already mailed.

Correction Process:

Determine Nature of Error:

Dollar amount wrong
SSN incorrect
Name misspelled
Address wrong (no correction needed for address only)

Issue Form 1099-R (Corrected):

Check "CORRECTED" box
Enter all information (not just corrections)
Include prior distribution code if changed
Must include SSN/EIN

File with IRS:

Submit corrected form
Include explanation if significant
Track separately

Notify Recipient:

Send corrected form with explanation
Advise to amend tax return if already filed
Provide contact for questions

Document:

Reason for correction
Date issued
Confirmation of filing
Best Practices
Planning and Preparation

✅ Start Early:

Begin preparation in November
Run test population in December
Identify issues before year-end
Allow buffer time

✅ Validate Data Year-Round:

Keep addresses current
Verify SSNs when updated
Review contribution data regularly
Fix issues as they arise

✅ Review Prior Year:

What went well
What issues occurred
Timing considerations
Process improvements
Data Quality

✅ Address Validation:

Update addresses throughout year
Verify before population
Use USPS address validation
Collect seasonal addresses

✅ Contribution Data:

Maintain accurate member contribution records
Required for Simplified Method calculation
Affects taxable amount
Verify during onboarding

✅ Review Calculations:

Spot check samples
Compare to prior year
Verify unusual amounts
Document explanations
Process Management

✅ Use Checklist:

Document all steps
Track completion
Note dependencies
Share with team

✅ Test Thoroughly:

Run population in test mode
Generate sample reports
Review for accuracy
Fix issues before final

✅ Communication:

Notify members in advance
Provide information on website
Prepare for questions
Train staff on FAQs
Compliance

✅ Meet Deadlines:

File with IRS by January 31
Mail to recipients by January 31
Request extension if needed (Form 8809)
Document filing dates

✅ Maintain Records:

Retain all documentation
File systematically
Follow retention schedule
Ensure accessibility for audits

✅ Stay Current:

Review IRS updates annually
Check for form changes
Update procedures
Train staff on changes
Common Questions

Q: When is the deadline for 1099-R? A: January 31 for both filing with IRS and providing to recipients. Paper filings must be postmarked by January 31. Electronic filings must be submitted by January 31. Extensions available via Form 8809 but recipient copies still due January 31.

Q: Do I need to issue a 1099-R if someone only received $5? A: Yes. Any amount is reportable. There is no minimum threshold for pension distributions. Even $1 requires a 1099-R.

Q: What if a member had $0 taxable income (all after-tax contributions)? A: Still need to file 1099-R showing $0 in Box 2a (Taxable amount). Box 1 shows gross distribution. Check "Taxable amount not determined" box if using that option.

Q: Can I email 1099 forms to members? A: Only with prior written consent. Must meet IRS electronic delivery requirements including secure access, ability to print, and confirmation of receipt. Most systems mail paper copies.

Q: What if I discover an error after filing? A: Issue a corrected 1099-R marked "CORRECTED" with all correct information. File with IRS and send to recipient. Recipient may need to amend tax return if already filed.

Q: Do beneficiaries get 1099-Rs? A: Yes. Anyone who received a distribution gets a 1099-R regardless of whether they're the retiree or a beneficiary. Form shows beneficiary's name and SSN/EIN.

Q: What distribution code should I use? A: Common codes: 7 (normal distribution, member over 59½), 1 (early distribution), 2 (early distribution, exception applies), 4 (death distribution), G (direct rollover). Use IRS instructions for specific situations.

Q: What is the Age 59½ Report in the 1099 wizard for? A: It identifies members in the run who turned 59½ during the 1099 year. Those members typically get two 1099-Rs for that year—code 2 for the part of the year before 59½ and code 7 for the part of the year at or after 59½. Run it during wizard review to validate split reporting. See
Age 59 and one-half report
.

Q: How do I calculate the taxable amount? A: Use Simplified Method if member made after-tax contributions. System calculates based on member's age and total contributions. If all pre-tax, entire amount is taxable. Consult IRS Publication 575 and 939.

Q: What if member moved and I don't have current address? A: Make reasonable effort to locate (check records, contact emergency contact). Document efforts. File 1099 with last known address. IRS still requires filing even if you can't deliver to recipient.

Q: Do I need special forms for printing? A: Copy A (IRS copy) must be on IRS-approved forms with red ink if filing by paper. Recipient copies can be on plain paper. Order forms from IRS-approved vendors. Electronic filing doesn't require special forms.

Troubleshooting
Issue: Populate Job Fails to Complete

Symptoms: Batch job errors or never finishes

Solutions:

Check Job Queue:
View error message
Review job log
Note which members failed
Common Causes:
Missing required data
Invalid dates
System resource issues
Data corruption
Resolution:
Fix identified data issues
Rerun population
Contact support if persists
Issue: Taxable Amount Seems Wrong

Symptoms: Box 2a doesn't match expectations

Solutions:

Verify Simplified Method:
Was it used?
Are contribution amounts correct?
Check member age calculation
Review start date
Check Contribution Data:
Member contributions on file?
Amounts accurate?
Dates correct?
Manual Calculation:
Use IRS worksheets
Compare to system
Document if manual override needed
Issue: Member Shows Multiple 1099s

Symptoms: More than one 1099 for same member/year

Explanation: This is normal in some cases:

Age 59½ during the tax year — member may have two 1099-Rs with codes 2 and 7 (see Age 59 and one-half report)
Multiple payment sources
Lump sum plus monthly payments
Partial rollovers
Different distribution codes
Separate tracking requirements

Verify:

Total matches annual payments
No duplicates
Appropriate distribution codes
Separate reporting is correct
Issue: Cannot Generate Forms - Missing Data

Symptoms: Report fails or forms incomplete

Solutions:

Check Payer Information:
EIN configured
System name and address
Contact information
All required fields
Verify Member Data:
SSN present
Name present
Address present
Required fields complete
Review 1099 Records:
All calculations complete
No null values in required fields
Lock flags appropriate
Issue: Printer Alignment Off

Symptoms: Data doesn't line up with boxes on forms

Solutions:

Test Print:
Use plain paper first
Hold up to actual form
Measure offsets
Adjust Settings:
Printer margins
Page setup in report
Form feed settings
Try Different Printer:
Some printers better for forms
Laser usually better than inkjet
Test beforehand
Issue: High Volume of Undeliverable Mail

Symptoms: Many 1099s returned by post office

Root Cause Analysis:

When were addresses last updated?
Are members required to update?
Do annual reminders go out?

Long-Term Solutions:

Implement annual address verification
Update addresses at each contact
Use address validation service
Encourage electronic delivery
Include address update form with statements
Related Tasks
Process Accounting Year-End Close
Process Monthly Accounting
Generate General Ledger
Additional Resources
IRS Publications
Publication 15-A: Employer's Supplemental Tax Guide
Publication 1179: General Rules and Specifications for 1099 Forms
Publication 575: Pension and Annuity Income
Publication 939: General Rule for Pensions and Annuities
Form 1099-R Instructions: Current year instructions
Forms
Form 1099-R: Distributions From Pensions, Annuities, etc.
Form 1096: Annual Summary and Transmittal
Form 8809: Application for Extension of Time to File
Form W-9: Request for Taxpayer Identification Number
Links
IRS FIRE System: www.irs.gov/e-file-providers/fire-system-information
Form Vendors: IRS-approved 1099-R form suppliers
USPS Address Validation: https://tools.usps.com/zip-code-lookup

Last Updated: January 2026

← Back to Accounting and Compliance

ON THIS PAGE
What This Does
Before You Begin
Quick Steps
Step-by-Step Instructions
Step 1: Populate 1099 Data
Step 2: Review Errors and Warnings
Age 59 and one-half report (within the 1099 wizard)
Step 3: Review 1099 Information
Step 4: Generate Test Reports
Step 5: Make Final Corrections
Step 6: Generate Final Forms
Step 7: File with IRS
Step 8: Distribute to Recipients
Step 9: Mark Forms as Sent
Step 10: File and Archive
Common Scenarios
Scenario 1: First Year Processing 1099s
Scenario 2: Deceased Member
Scenario 3: Member Moved - Bad Address
Scenario 4: Member Disputes Amount
Scenario 5: Need to Issue Corrected 1099
Best Practices
Planning and Preparation
Data Quality
Process Management
Compliance
Common Questions
Troubleshooting
Issue: Populate Job Fails to Complete
Issue: Taxable Amount Seems Wrong
Issue: Member Shows Multiple 1099s
Issue: Cannot Generate Forms - Missing Data
Issue: Printer Alignment Off
Issue: High Volume of Undeliverable Mail
Related Tasks
Additional Resources
IRS Publications
Forms
Links