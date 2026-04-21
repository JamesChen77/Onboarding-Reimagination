# How Do I Generate Direct Deposit Files?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Direct-Deposit-Files](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Generate-Direct-Deposit-Files)

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
Generate Direct Deposit Files
How Do I Generate Direct Deposit Files?

Category: Payroll and Payments Time: 10-15 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

Complete retiree payroll processing (Steps 1-2 of Payroll Wizard)
Verify bank routing and account information is current
Have ACH file submission method ready (bank portal, SFTP, etc.)
Know your bank's submission deadline

Related Topics:

Run Retiree Payroll
Generate Retiree Checks
Generate Notice of Deposits (NODs)
What This Does

Generates an ACH (Automated Clearing House) file containing direct deposit transactions for retirees who receive pension payments electronically. This NACHA-formatted TXT file is submitted to your bank to process electronic transfers to retirees' bank accounts.

The system automatically:

Selects retirees with payment method = "Direct Deposit"
Creates a NACHA-formatted ACH file (TXT format)
Includes routing numbers, account numbers, net payment amounts
Validates file format before generation
Creates a downloadable file for bank submission

Important distinction: This how-do-I covers the Direct Deposit File — the ACH/NACHA file submitted to your bank for processing electronic payments. This is different from the Direct Deposit Report, which is a human-readable PDF/XLSX/CSV summary of the same transactions available in the Reports Center. If you need a printable summary for your records, see the Direct Deposit Report in Reports Center.

Quick Steps

Note: All following actions are performed within the Payroll & Vendor Payment wizard section in Payment Center.

Complete payroll processing through Step 2 (Warrant): Run Payroll, then review the Warrant
Navigate to Step 3: Create Reports
Generate the Direct Deposit File using one of two methods:
Option A (Generate All via Wizard): Click "Generate All Reports via Wizard" → When prompted for the Direct Deposit File step, review the displayed amounts and click "Generate Report"
Option B (Payroll Reports subsection): Expand "Payroll Reports" → click the Direct Deposit File card
In the modal, confirm the Posting Number and file format (TXT)
Click Generate Report
Download the TXT file from the Generated Reports panel
Validate file contents
Submit to bank via secure method
Step-by-Step Instructions
Step 1: Complete Payroll Processing

Before the Wizard Steps: The Payroll & Vendor Payment wizard has these steps:

Step 1: Run Payroll — Execute the payroll run
Step 2: Warrant — Review the Payroll and Vendor warrant (two tabs within one step)
Step 3: Create Reports — Generate reports and files including the Direct Deposit File
Step 4: Post to Register — Post the payroll to the register
Step 5: View Registers — Review final register data

Before Generating Files:

Complete Step 1: Run Payroll
Complete Step 2: Warrant — review both the Payroll and Vendor warrant tabs to verify direct deposit amounts are correct
Note your posting number
Step 2: Generate the Direct Deposit File

Where to Go:

You have two options to generate the Direct Deposit File. Both are accessed from Step 3: Create Reports in the Payroll & Vendor Payment wizard:

Option A: Generate All Reports via Wizard (Guided Flow)

Click Step 3: Create Reports in the stepper
Click the Generate All Reports via Wizard button at the top of the Generate Reports panel
The wizard will walk you through each report type in sequence
When the Direct Deposit File step appears, review the displayed summary amounts (see below) and click Generate Report (or Skip to bypass)

What you'll see in the wizard for the Direct Deposit File step:

Total DD Gross Payment Amt — Total pension benefits before deductions across all direct deposit recipients (e.g., $11,479,384.18). Gross Payment Amt reflects total pension benefits before deductions such as taxes, health insurance premiums, and other withholdings.
Total DD Net Payment Amt — The actual total that will be deposited to retirees' bank accounts (e.g., $9,516,481.85). This is the sum of all individual transactions in the ACH file. Verify this matches your payroll warrant totals before generating.
Total Vendor Net Payment Amt — Net vendor payment amount (if applicable)
A reports remaining indicator showing how many reports are left in the wizard
Skip and Generate Report buttons

Option B: Payroll Reports Subsection (Direct Selection)

Click Step 3: Create Reports in the stepper
Expand the Payroll Reports subsection
Find and click the Direct Deposit File card (subtitle: "Create the direct deposit transaction file")

💡 Recommended: Most users prefer Option B for direct access, or Option A to generate all required reports in sequence.

In the Modal:

Posting Number — Pre-filled with your payroll posting number
File Format — Select TXT for ACH files (TXT is the standard NACHA format)
Click Generate Report

What Happens:

System creates NACHA-formatted ACH TXT file
File sent to batch queue for processing
Takes 30-60 seconds to generate
File available in Generated Reports panel
Step 3: Download the ACH File

Where to Find:

The Generated Reports panel on the right side of Step 3 updates automatically
Look for "Direct Deposit File" with your timestamp
Click the Download TXT button or the download icon
File downloads to your computer

File Details:

File format: TXT (NACHA format, plain text)
File name: Usually includes date/posting number
File size: Varies by number of transactions
Contains: All direct deposit transactions for this payroll run
The file starts with a "101" File Header record and "5200" Batch Header record, consistent with standard NACHA formatting
Step 4: Validate the File

What to Check:

Before Submitting:

Open file in text editor (Notepad, TextEdit)
Verify file header shows correct company information
Check transaction count matches expected direct deposits
Review total debit amount matches your payroll net total
Spot-check a few routing/account numbers

ACH File Structure:

Header records (company info, bank info)
Batch headers
Transaction details (one per direct deposit, using net payment amount)
Batch control totals
File control totals

💡 Tip: Don't modify the file in any way. If corrections are needed, fix the source data and regenerate from the system.

Step 5: Submit to Bank

Submission Methods:

Bank Portal Upload:

Log into your bank's ACH portal
Navigate to file upload section
Select the ACH TXT file
Upload file
Review submission confirmation
Save confirmation number

SFTP/Secure FTP:

Connect to bank's SFTP server
Navigate to appropriate folder
Upload ACH file
Verify upload successful
Document submission time

Secure Email (if approved by bank):

Use bank-approved encrypted email
Attach ACH file
Follow bank's encryption requirements
Save sent email confirmation

⚠️ Critical: Follow your bank's deadlines. Most require submission 1-2 business days before payment date.

Step 6: Confirm Processing

Follow-up Steps:

Check bank portal for file acceptance status
Review any rejection/error messages
Verify settlement date with bank
Keep confirmation/batch numbers
Document submission in your records

What Banks Check:

File format compliance (NACHA standards)
Company ID/routing numbers
Balanced batch totals
Duplicate file detection
Sufficient funds in origination account
Understanding ACH Files
NACHA Format Basics

What is NACHA?

National Automated Clearing House Association
Standard format for ACH transactions
Used by all U.S. banks for electronic transfers
Strict formatting requirements

Record Types:

File Header - Company/originator information
Batch Header - Batch control information
Entry Detail - Individual transactions (direct deposits, net amounts)
Addenda - Additional transaction info (optional)
Batch Control - Batch totals and counts
File Control - File totals and counts
File Validation Checks

System Validates:

Routing number format (9 digits)
Account number format
Amount totals balance
Record counts match
Required fields populated
NACHA formatting rules

Bank Validates:

Company ID matches
Effective date is valid
Batch totals balanced
No duplicate files
Routing numbers are valid
Common Scenarios
Scenario: Monthly Direct Deposit Processing

Steps:

Complete payroll (Steps 1-2 of wizard)
Generate Direct Deposit File in Step 3
Download ACH TXT file
Quick validation (check total net amount, transaction count)
Submit to bank via portal
Save confirmation number
Print confirmation page for records

Timeline:

File generation: 1-2 minutes
Download/validation: 3-5 minutes
Bank submission: 2-5 minutes
Total time: 10-15 minutes
Scenario: Resubmitting Rejected ACH File

Situation: Bank rejected your ACH file due to formatting error.

Steps:

Review bank's rejection message
Common issues:
Wrong effective date
Invalid routing number
Unbalanced totals
Duplicate file name
If data error: Correct in the system, rerun payroll
If format error: Contact system administrator
Regenerate Direct Deposit File
Resubmit to bank
Scenario: Split Direct Deposit File

Situation: Need to create separate ACH files for different banks.

Note: In most pension payroll systems, a single NACHA file per payroll run is submitted to the originating bank, which then routes funds through the ACH network to individual receiving banks automatically. Splitting files is uncommon unless your fund uses multiple originating banks. Before attempting to split, confirm with your bank whether splitting is actually required, as it typically is not.

If splitting is confirmed as necessary, contact your system administrator to determine whether the system supports file splitting for your use case.

Best Practices

✅ DO:

Submit files 1-2 business days before payment date
Validate file before submission every time
Keep copies of all submitted ACH files
Document submission date, time, and confirmation number
Use secure transmission methods only
Verify bank account information regularly
Test with bank before first submission
Have backup submission method (if portal down)
Review bank's processing schedule (holidays, etc.)
Verify Total DD Net Payment Amt against your payroll warrant before generating

❌ DON'T:

Email ACH files unencrypted
Modify ACH files manually after generation
Miss bank's submission deadline
Submit duplicate files
Use unsecured file transfer methods
Skip file validation
Forget to save confirmation numbers
Submit without verifying amounts
Confuse the Direct Deposit File (ACH/bank submission) with the Direct Deposit Report (readable summary in Reports Center)
Common Questions

Q: When should I submit the ACH file? A: Most banks require 1-2 business days before payment date. If payment date is Friday, submit by Wednesday. Check your bank's specific deadlines and processing schedule.

Q: What if I miss the bank's deadline? A: Contact your bank immediately. They may accommodate late submissions for an additional fee, or you may need to issue emergency checks for affected retirees.

Q: How do I know if the file was accepted? A: Check your bank's ACH portal for file status. Most banks send confirmation emails. Status typically updates within a few hours of submission.

Q: Can I cancel a submitted ACH file? A: Maybe - contact your bank immediately. Cancellation may be possible if file hasn't been processed. After processing starts, reversals may be needed.

Q: What if a retiree's bank account is closed? A: Bank will return the transaction (rejected ACH). You'll need to issue a check and update the member's payment information. Banks typically charge fees for returns.

Q: How do I handle returned direct deposits? A: Bank will notify you of returns (usually next business day). Contact retiree for correct account information, reissue as check, and update records.

Q: Is the ACH file encrypted? A: The file itself is not encrypted, but you must use secure transmission (encrypted portal, SFTP, encrypted email). Never send via regular email.

Q: Can I preview the ACH file before generating? A: The payroll warrant (Step 2) shows which members will be included. You can review direct deposit amounts there before generating the file.

Q: What's the difference between the Direct Deposit File and the Direct Deposit Report? A: The Direct Deposit File is the NACHA-formatted TXT file submitted to your bank for processing electronic payments — it contains raw transaction data. The Direct Deposit Report (available in Reports Center) is a human-readable summary table (columns: Trn ID, Payroll Date, Member #, Name, Routing Number, Account Number, Net Payment, etc.) used for internal recordkeeping, reconciliation, or board review. Many pension funds are required by governance policies to retain such reports. Only the Direct Deposit File should be submitted to the bank.

Q: What's the difference between the Direct Deposit File and NODs? A: The Direct Deposit File is the ACH file sent to the bank to initiate payments. NODs (Notice of Deposits) are paper/PDF notices sent to retirees informing them that payment was deposited to their account.

Q: Do I need separate files for retirees vs. vendors? A: Typically no — one ACH file can include all direct deposit transactions. However, some organizations separate them for accounting purposes.

Troubleshooting
Issue: Bank rejects ACH file - "Invalid routing number"

Solutions:

Verify routing number in member's record matches bank's routing number
Check for typos (O vs 0, I vs 1)
Verify routing number is 9 digits
Use ABA routing number (not wire transfer routing number)
Update member record and regenerate file
Issue: File totals don't balance

Solutions:

Regenerate file from the system (don't manually edit)
If problem persists, contact system administrator
Check for data corruption during download
Re-download file from Generated Reports panel
Verify payroll totals in warrant match ACH file totals
Issue: Missing direct deposit transactions

Solutions:

Review payroll warrant (Step 2) — were members included?
Check member payment method (must be "Direct Deposit")
Verify bank account information is complete
Check for locked payment records
Look for payment exceptions/holds
Regenerate file if members should be included
Issue: Duplicate file submission error

Solutions:

Bank may have already received this file
Check submission history in bank portal
Verify you're not submitting same payroll twice
If intentional resubmission, contact bank
Use different file name if reprocessing same payroll
Issue: Can't submit file - bank portal down

Solutions:

Use backup submission method (SFTP, fax, phone)
Contact bank's ACH support line
Check for scheduled maintenance
Submit early to avoid deadline issues
Have emergency check stock ready if needed
Security Guidelines

File Handling:

Store ACH files in secure, encrypted location
Delete local copies after successful submission
Don't email ACH files (even internally)
Limit access to authorized personnel only
Use secure passwords for bank portals

Transmission Security:

Use bank-provided secure portal
Use SFTP with encryption
Use encrypted email if approved by bank
Never use regular FTP or HTTP
Verify secure connection (HTTPS, SSL) before upload

Record Keeping:

Keep submission confirmations
Save bank portal screenshots
Document submission date/time
Track confirmation/batch numbers
Maintain audit trail
Related Tasks
Run Retiree Payroll - Complete before generating files
Generate Notice of Deposits (NODs) - Notices for direct deposit recipients
Generate Retiree Checks - Alternative to direct deposit
Update Payment Information - Update bank accounts
Generate Positive Pay Files - Additional bank security

Last Updated: March 2026

← Back to Payroll and Payments
|
Next: Generate Notice of Deposits →

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Complete Payroll Processing
Step 2: Generate the Direct Deposit File
Step 3: Download the ACH File
Step 4: Validate the File
Step 5: Submit to Bank
Step 6: Confirm Processing
Understanding ACH Files
NACHA Format Basics
File Validation Checks
Common Scenarios
Scenario: Monthly Direct Deposit Processing
Scenario: Resubmitting Rejected ACH File
Scenario: Split Direct Deposit File
Best Practices
Common Questions
Troubleshooting
Issue: Bank rejects ACH file - "Invalid routing number"
Issue: File totals don't balance
Issue: Missing direct deposit transactions
Issue: Duplicate file submission error
Issue: Can't submit file - bank portal down
Security Guidelines
Related Tasks