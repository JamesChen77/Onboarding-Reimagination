# How Do I Lock and Unlock Payment Records?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Lock-and-Unlock-Payment-Records](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Lock-and-Unlock-Payment-Records)

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
Lock and Unlock Payment Records
How Do I Lock and Unlock Payment Records?

Category: Payroll and Payments Time: 5-10 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

Understand why the payment record is locked
Have permissions to lock/unlock payment records
Document the reason for locking or unlocking

Related Topics:

Generate Locked Payment Accounts Report
Void Check or Transaction
Run Retiree Payroll
What This Does

Locks a retiree's payment record to prevent payroll from processing until you've reviewed and approved temporary adjustments. Use the Lock Date field to make one-time modifications to a member's monthly allowance and flag the record for review before the next payroll cycle.

Why Lock Payment Records:

Make a temporary adjustment to a member's monthly allowance
Process a one-time payment modification
Flag a record for review before the next payroll cycle
Prevent automatic payroll processing until changes are verified
Investigate payment discrepancies before next payroll
Prevent payment while resolving data issues
Suspend payments pending verification or documentation
Hold payment during benefit review or recalculation
Comply with legal holds or court orders

Payment locks can be:

System-generated - Automatic locks when system detects errors
Manual - Staff locks while investigating or resolving issues or making temporary adjustments
Quick Steps
To Lock a Payment Record:
Open the member's profile
Expand Financial Info → select Payment Info
Click the payment record to open for editing
In the Retirement Information tab, select a Lock Date in the Locked Date field
(Optional) Click Amounts and Deductions tab to modify payment amounts for temporary adjustment
Click Save or Save and Close
To Unlock a Payment Record:
Open the member's profile
Expand Financial Info → select Payment Info
Click the locked payment record
In the Retirement Information tab, clear the Locked Date field
(Optional) Restore regular payment amounts in Amounts and Deductions tab
Click Save or Save and Close
Step-by-Step Instructions
How to Lock a Payment Record
Step 1: Navigate to Member Payment Information

Where to Go:

Find and open the member's profile
Click Financial Info navigation card
Look for Payment Information section
Locate the Locked Date field
Step 2: Enter Lock Date

What to Do:

Click on the Locked Date field
Select the date you want the lock to take effect (typically today's date)
The date picker will appear - choose the appropriate date
Click Save or the save button to apply changes

What You'll See:

The Locked Date field now displays the selected date
Member's payment record is now locked
Lock indicator may appear on member's payment information
Step 3: Verify the Lock

What Happens:

Payment record status changes to "Locked"
Member won't be included in payroll runs
Lock appears on Locked Payment Accounts Report
Audit entry created with lock date and user

To Verify:

Check that the Locked Date field shows the date you entered
Member will be excluded from next payroll
Generate Locked Payment Accounts Report to confirm
How to Unlock a Payment Record
Step 1: Navigate to Member Payment Information

Where to Go:

Find and open the member's profile
Click Financial Info navigation card
Look for Payment Information section
You'll see the Locked Date field populated with a date
Step 2: Clear the Lock Date

What to Do:

Click on the Locked Date field
Clear/delete the date (remove the existing date)
Leave the field empty
Click Save or the save button to apply changes

What You'll See:

The Locked Date field is now empty
Lock indicator disappears from payment information
Step 3: Verify the Unlock

What Happens:

Payment record status changes to "Unlocked" or "Active"
Member will be included in next payroll run
Removed from Locked Payment Accounts Report
Audit entry created with unlock date and user

To Verify:

Check that the Locked Date field is empty
Member will be included in next payroll
Generate Locked Payment Accounts Report to confirm removal
Understanding Payment Locks
System-Generated Locks (Automatic)

Common Automatic Lock Reasons:

Missing Required Data:

No bank account information (for direct deposit)
Invalid routing number
Missing payment method selection

Data Validation Errors:

Payment amount calculation error
Benefit calculation incomplete or failed
Required fields missing

Status Changes:

Member status changed to "Deceased"
Member moved to "Suspended" status
Member no longer eligible for payment

System Protections:

Duplicate payment detected
Overpayment threshold exceeded
Data integrity violation

When System Locks Occur:

During payroll processing
After data validation runs
When member status changes
After failed payment attempts
Manual Locks (Staff-Initiated)

Common Manual Lock Reasons:

Investigation:

Payment amount questioned by member
Audit finding requires review
Suspected data entry error
Benefit calculation review needed

Pending Actions:

Awaiting updated documentation
Pending verification (address, bank, beneficiary)
Legal hold or court order
Administrative review in progress

Temporary Holds:

Member requested payment suspension
Benefit election change pending
Tax withholding update being processed
Garnishment order under review
Common Scenarios
Scenario: Unlocking After Correcting an Error

Situation: Member was locked due to missing bank account. Bank information now entered.

Steps:

Open member profile
Click Financial Info navigation card → Payment Information section
Verify bank account information is complete and valid
Clear the Locked Date field (remove the date)
Click Save
Member will be included in next payroll
Optional: Add memo to member history documenting fix
Scenario: Manually Locking a Payment

Situation: Member called reporting incorrect payment amount. Need to investigate before next payroll.

Steps:

Open member profile
Click Financial Info navigation card → Payment Information section
Enter today's date in the Locked Date field
Click Save
Add memo or note: "Member reported incorrect payment amount on [date] - investigating calculation. Contact: [your name]"
Investigate the issue:
Review payment history
Check benefit calculation
Verify deduction amounts
Compare to previous months
After resolving: Clear the Locked Date field and save
Contact member with explanation
Scenario: Pre-Payroll Lock Review

Situation: Running monthly payroll, need to review all locked accounts first.

Steps:

Generate Locked Payment Accounts Report
Review each locked account:
Check the Locked Date
Determine if issue resolved
Check if still valid reason to keep locked
For resolved issues:
Navigate to member profile
Clear the Locked Date field
Save changes
For unresolved issues:
Add notes if investigation continuing
Member remains locked for this payroll
Re-run Locked Accounts Report to verify
Proceed with payroll run
Scenario: System Lock After Status Change

Situation: Member status changed to deceased, system automatically locked payment.

Steps:

Verify death notification is accurate
Check documentation on file
If confirmed deceased:
Leave Locked Date in place
Process death benefits separately
Don't unlock - lock is correct
If death notification was error:
Correct member status back to "Retired"
Clear the Locked Date field
Save changes
Document in member history: "Death notification was error - member confirmed alive [date]"
Lock vs. Void

Important Distinction:

Lock (Preventive):

Stops future payments from processing
Member not included in upcoming payroll
Temporary - can be unlocked
No payments have been issued yet
Used before payment

Void (Corrective):

Cancels a payment already issued
Payment was included in payroll and posted
Reverses a completed transaction
Check or direct deposit already generated
Used after payment

Use Lock When:

Haven't run payroll yet
Want to prevent payment next period
Investigating issue before payment

Use Void When:

Payment already issued
Need to reverse posted transaction
Check already printed or DD already sent

See:
Void Check or Transaction

Impact on Payroll

When Payment is Locked:

During Payroll Processing:

Member is excluded from payroll run
Does not appear on payroll warrant
No check or direct deposit generated
No transaction posted to register

On Reports:

Appears on Locked Payment Accounts Report
Excluded from Payroll Warrant
Excluded from Check/DD Register
May appear on Exception Reports

Member Impact:

Will not receive pension payment
No payment stub or notice generated
May need to be notified of delay

💡 Important: Members don't automatically know they're locked. Communicate with them about payment delays.

Best Practices

✅ DO:

Document lock reason in member notes or memos
Verify issue is resolved before clearing lock date
Add memo to member history when locking/unlocking
Run Locked Accounts Report before each payroll
Communicate with members about payment delays
Set reminders to follow up on locked accounts
Keep locks in place only as long as necessary
Track who locked/unlocked and when (in audit log)

❌ DON'T:

Lock without documenting reason in notes
Clear lock date without resolving the underlying issue
Forget to unlock after issue is resolved
Skip documenting resolution details in member notes
Leave accounts locked indefinitely
Ignore locked accounts report
Lock accounts unnecessarily "just in case"
Fail to communicate delays to members
Common Questions

Q: Why did this record lock automatically? A: System locks trigger when data validation fails or required information is missing. Check the Locked Date field and review the member's payment information screen. Common causes: missing bank account, invalid data, status changes. You may also see lock reason in member notes or audit history.

Q: Can I run payroll with locked records? A: Yes, but locked members won't be paid. They're excluded from the payroll run. Review the Locked Payment Accounts Report before processing payroll to ensure all locks are intentional.

Q: If I unlock now, will they be in this month's payroll? A: Only if you clear the lock date before running the payroll. If payroll is already processed (Step 1 complete), they'll be included in next month's payroll. For immediate payment, you may need to process manually.

Q: How do I know who locked a payment? A: Check the audit history on the member's profile. It shows who set the lock date, when, and the locked date value.

Q: Can I lock multiple members at once? A: Not through the standard interface. Each member must be locked individually by entering a date in their Locked Date field through their payment information screen.

Q: What happens if I forget to unlock someone? A: They won't receive payment in that payroll cycle. Clear their Locked Date field for the next payroll, or process a manual payment if the delay creates hardship.

Q: Can members see that their payment is locked? A: Not through self-service (if available). You need to communicate payment delays to members directly.

Q: How long can I keep a payment locked? A: As long as necessary to resolve the issue, but locks should be temporary. If a long-term suspension is needed, consider changing the member's status instead.

Q: Will unlocking automatically include them in the current payroll run? A: Only if the payroll hasn't been run yet (Step 1 not complete). If payroll is already processed, they'll be included in the next payroll cycle.

Q: Can I lock someone after they've been paid? A: Yes, enter a lock date to prevent future payments. If you need to reverse a payment already issued, use the Void function instead.

Troubleshooting
Issue: Can't edit Locked Date field - field is disabled

Possible Causes:

Insufficient permissions
System lock requires resolution of underlying issue
Member status prevents unlock

Solutions:

Check your user permissions - need "Edit Payment Information" permission
For system locks: Resolve the underlying issue first (add bank account, fix status, etc.)
Contact system administrator if you need permission
Check member status - some statuses prevent payment
Issue: Cleared lock date but member still not in payroll

Possible Causes:

Unlocked after payroll already ran
Other data issue preventing payment
Member status excludes them from payroll

Solutions:

Check when payroll was processed vs when unlock happened
Verify member status is eligible for payment ("Retired" status)
Check for other errors or missing data
Review Batch Result for errors during payroll run
Member will be included in next payroll cycle
Issue: Don't know why payment was locked

Possible Causes:

No clear documentation
Generic system lock
Previous staff member didn't document reason

Solutions:

Review member's payment information for missing data
Check member's audit history for recent changes
Look at last successful payment - what changed since then?
Review member notes for documentation
Contact previous administrator if staff-locked
When unlocking, add detailed notes in member record for future reference
Issue: Payment locked during payroll processing

Possible Causes:

System detected error during payroll run
Data validation failed
Calculation error occurred

Solutions:

Review Batch Result for error details
Check member's payment information for issues
Fix the underlying problem (add data, correct error)
Clear the Locked Date field
Click Rerun in payroll wizard to reprocess
Member should be included in rerun if issue fixed
Related Tasks
Generate Locked Payment Accounts Report - View all locked accounts
Run Retiree Payroll - Process pension payments
Void Check or Transaction - Reverse issued payments
Update Payment Information - Fix payment data issues

Last Updated: January 2026

← Back to Payroll and Payments
|
Next: Generate Locked Accounts Report →

ON THIS PAGE
What This Does
Quick Steps
To Lock a Payment Record:
To Unlock a Payment Record:
Step-by-Step Instructions
How to Lock a Payment Record
How to Unlock a Payment Record
Understanding Payment Locks
System-Generated Locks (Automatic)
Manual Locks (Staff-Initiated)
Common Scenarios
Scenario: Unlocking After Correcting an Error
Scenario: Manually Locking a Payment
Scenario: Pre-Payroll Lock Review
Scenario: System Lock After Status Change
Lock vs. Void
Impact on Payroll
Best Practices
Common Questions
Troubleshooting
Issue: Can't edit Locked Date field - field is disabled
Issue: Cleared lock date but member still not in payroll
Issue: Don't know why payment was locked
Issue: Payment locked during payroll processing
Related Tasks