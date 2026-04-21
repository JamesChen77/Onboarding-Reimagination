# How Do I Generate Positive Pay Files?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Positive-Pay-Files](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Positive-Pay-Files)

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
Generate Positive Pay Files
How Do I Generate Positive Pay Files?

Category: Payroll and Payments Time: 5-10 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

Have positive pay agreement with bank
Know bank's file format requirements
Complete check generation
Have bank submission method ready

Related Topics:

Generate Retiree Checks
Run Retiree Payroll
Void Check or Transaction
What This Does

Generates a Positive Pay file for your bank to help prevent check fraud. The file contains details of all checks issued (check numbers, amounts, payee names) so the bank can verify checks presented for payment match your records.

How Positive Pay Protects You:

Bank compares presented checks against your file
Mismatched checks are flagged for your review
You decide whether to pay or return the check
Reduces risk of altered or counterfeit checks
Quick Steps

Note: All following actions are performed within the Payroll & Vendor Payment wizard section in Payment Center.

Complete payroll and generate checks
Navigate to Step 3: Create Reports
Generate Positive Pay file using one of two methods:
Option A: Click "Generate All Reports via Wizard" → click "Generate Report" when prompted for Positive Pay File
Option B: Expand "Payroll Reports" → click the Positive Pay File card
In the modal, set parameters including the Include Voids? option
Generate file
Download from Generated Reports panel or Report Archives (via Report Details view)
Validate file contents and submit to bank
Step-by-Step Instructions
Step 1: Generate Checks First

Prerequisites:

Complete retiree payroll (Steps 1-2 of wizard)
Generate and print retiree checks
Verify check numbers are correct

💡 Timing: Generate positive pay file same day as check printing.

Step 2: Access Positive Pay Generation

Where to Go:

You have two options to generate Positive Pay files. Both are accessed from Step 3: Create Reports in the Payroll & Vendor Payment wizard:

Option A: Generate All Reports via Wizard (Guided Flow)

Click Step 3: Create Reports in the stepper
Click the Generate All Reports via Wizard button at the top of the Generate Reports panel
The wizard will walk you through each report type in sequence
When prompted for Positive Pay File, review parameters and click Generate Report

Option B: Payroll Reports Subsection (Direct Selection)

Click Step 3: Create Reports in the stepper
Expand the Payroll Reports subsection
Find and click the Positive Pay File card

💡 Recommended: Most users prefer Option B for direct access, or Option A to generate all required reports in sequence.

Step 3: Configure Parameters

In the Modal:

Posting Number — Pre-filled with your payroll posting number

Include Voids? — Dropdown (defaults to No)

Important: This setting controls whether voided checks are included in the positive pay file.

No (default): Only active/valid checks are included in the file. The bank will not be informed of any voided check numbers via this file run.
Yes: Voided checks are included in the file (typically with a zero amount or void indicator), which notifies the bank to reject those check numbers if presented.

The appropriate setting depends on your bank's positive pay requirements. If your bank expects void notifications in the positive pay file, set this to Yes on any run that includes voided checks.

Report Format — Select format required by your bank (TXT or as specified in your bank agreement)

Click Generate Report

Step 4: Download and Validate

Downloading: After generation, the file is available in two places:

The Generated Reports panel on the right side of Step 3 — click the download icon
The Report Archives section accessible via the report row — click the row to open Report Details, which shows a Download TXT button and a preview of the report data

Validate File Contains:

Check numbers (sequential)
Check amounts (match check register)
Payee names
Issue date
Account number

File Format Note: The Positive Pay file is output as a fixed-width TXT file (positional text format), not a CSV. The data appears as long strings of numbers and names without comma delimiters. This format is determined by your bank's specification.

Step 5: Submit to Bank

Submission Methods:

Bank's online portal (most common)
SFTP/secure file transfer
Fax (less common)

Submission Deadline:

Usually same business day as check mailing
Check your bank's specific requirements
Some banks require by 3 PM or earlier

After Submission:

Keep confirmation number
Save submitted file copy
Document submission date/time
File Format

Typical Positive Pay File Includes:

Account number
Check number
Check amount
Issue date
Payee name (optional, depends on bank)
Record count

Note on Format: The actual output is a fixed-width positional TXT file. The exact field layout depends on your bank's positive pay specification. Do not expect a CSV format — the file will appear as a series of fixed-length text records. Verify the format with your bank before first submission.

Common Scenarios
Scenario: Regular Monthly Positive Pay

Steps:

Print retiree checks
Immediately generate positive pay file
Set Include Voids? to No (unless voided checks need to be communicated)
Validate file (spot check few records)
Submit to bank same day
Save confirmation

Timeline: Complete within 1-2 hours of check printing.

Scenario: Emergency Check Positive Pay

For Single Emergency Check:

Issue emergency check
Generate positive pay file
Set parameters for the current run
Submit immediately
Don't wait for batch submission
Scenario: Void Check Update

If You Void a Check:

Void check in the system
Generate updated positive pay file
Set Include Voids? to Yes to include the voided check number in the file, notifying the bank not to honor it
Submit to bank per their void/stop payment procedures
Or notify bank directly if they require a separate stop payment process
Best Practices

✅ DO:

Submit same day as check mailing
Keep all submission confirmations
Validate file before submission
Have backup submission method
Review bank exception reports daily
Respond to bank inquiries promptly
Confirm with your bank whether Include Voids? should be set to Yes for runs with voided checks

❌ DON'T:

Delay submission beyond same day
Skip file validation
Submit wrong file format
Ignore bank exception notifications
Miss submission deadlines
Common Questions

Q: What happens if I don't submit positive pay? A: If you have a positive pay agreement, the bank may return checks without the file. This defeats the fraud prevention purpose.

Q: Can I submit positive pay file before printing checks? A: Yes, some organizations generate the file before printing. Just ensure check numbers match exactly.

Q: What if bank rejects my file? A: Common causes: wrong format, duplicate file, missing required fields. Contact bank for specific error, regenerate with corrections.

Q: Do I need separate files for retiree and vendor checks? A: Depends on your bank. Some banks want one file, others want separate files. Check with your bank.

Q: What if I forgot to submit positive pay? A: Submit as soon as you remember. Contact bank to explain delay. They may accept late submission or require stop payment on checks.

Q: How do I handle voided checks in positive pay? A: Generate the positive pay file with Include Voids? set to Yes. This includes the voided check(s) in the file so the bank is instructed to reject them if presented. Alternatively, follow your bank's direct stop payment procedure.

Q: When should I set "Include Voids?" to Yes? A: Set it to Yes when you have voided checks in the current posting that you want to communicate to the bank via the positive pay file. If your bank requires separate stop payment notifications rather than including voids in the positive pay file, leave it set to No and follow the bank's stop payment process instead.

Troubleshooting
Issue: Bank rejects file - "Invalid format"

Solutions:

Verify file format matches bank requirements (fixed-width TXT vs. other formats)
Check field order and field widths
Ensure no special characters in payee names
Contact bank for format specification
Work with system administrator
Issue: Check number mismatch

Solutions:

Verify check numbers in file match printed checks
Check for gaps in check numbering
Use Renumber Checks or Renumber Checks Single if needed
Regenerate positive pay file
Contact bank before checks are presented
Issue: Submission deadline missed

Solutions:

Submit immediately and contact bank
Bank may accept late file with explanation
May need to stop payment on issued checks
Set calendar reminders for future submissions
Security Considerations

File Security:

Store files in encrypted location
Use secure transmission only
Delete local copies after submission
Limit access to authorized personnel

Fraud Prevention:

Review bank exception reports daily
Investigate any mismatches immediately
Maintain audit trail of submissions
Report suspicious activity to bank
Related Tasks
Generate Retiree Checks
Run Retiree Payroll
Void Check or Transaction
Generate Direct Deposit Files

Last Updated: March 2026

← Back to Payroll and Payments

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Generate Checks First
Step 2: Access Positive Pay Generation
Step 3: Configure Parameters
Step 4: Download and Validate
Step 5: Submit to Bank
File Format
Common Scenarios
Scenario: Regular Monthly Positive Pay
Scenario: Emergency Check Positive Pay
Scenario: Void Check Update
Best Practices
Common Questions
Troubleshooting
Issue: Bank rejects file - "Invalid format"
Issue: Check number mismatch
Issue: Submission deadline missed
Security Considerations
Related Tasks