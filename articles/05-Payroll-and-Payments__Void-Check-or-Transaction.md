# How Do I Void a Check or Transaction?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Void-Check-or-Transaction](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Void-Check-or-Transaction)

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
Void Check or Transaction
How Do I Void a Check or Transaction?

Category: Payroll and Payments Time: 5-10 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

Know the check/transaction number
Have reason for voiding ready
Determine if reissue is needed

Related Topics:

Lock and Unlock Payment Records
Run Retiree Payroll
Generate Retiree Checks
What This Does

Allows you to cancel and mark payment transactions (checks or direct deposits) as voided in the system. When a transaction is voided, it's flagged in the register and can be audited separately. You can also reverse a void if needed to restore a transaction to its original status. This process is essential for managing payment errors, duplicate payments, and transaction corrections while maintaining a complete audit trail.

Common Reasons to Void:

Lost or stolen checks
Incorrect payment amounts
Wrong payee or member
Duplicate payments
Member requests stop payment
Check never cashed or stale-dated

What Happens When You Void:

Check/transaction marked as "Voided"
Amount reversed in accounting
Audit trail created with timestamp and user
Check number freed for potential reuse (optional)
Member's payment history updated
Transaction can be filtered separately as "Voided Only"

Key Features:

✅ Complete Audit Trail

Every void is recorded with timestamp
Original transaction information preserved
Staff member who voided transaction is logged
Reason for void can be documented

✅ Reversible Action

Voiding is not permanent
Can unvoid if done in error
Restores transaction to original status
No data loss

✅ Easy Filtering

View only voided transactions
Filter voided payments by date
Audit voided payments efficiently
Separate from active transactions
Quick Steps
Access register — Payment Center → Check / Direct Deposit Register (or Financial Info → Check / Direct Deposit Register from a member profile)
Locate transaction — Filter by posting number, payee, payment type, unit, transaction # range, etc.
Open detail — Open the row; modal title Check/Direct Deposit Register Detail
Void — Click Void Transaction at the bottom of the modal (confirm if prompted)
(Optional) Audit voids — Use the Voided Only checkbox on the register filter
(Optional) Unvoid — In the same detail modal, use Unvoid Transaction if the void was a mistake
Reissue — Follow your payroll procedures if a replacement payment is required
Step-by-Step Instructions
Step 1: Locate the Transaction

Method 1: Check / Direct Deposit Register (recommended)

Navigate to Payment Center → Check / Direct Deposit Register (member retiree payments). Use Vendor Register when voiding vendor payments.
Filter fields on the register include:
Posting Number
Payee Name
Payment Type
Unit
Transaction # (Begin / End)
Voided Only (checkbox)
Results update as you filter; open a row to continue.

Method 2: From member profile

Open the member from Global Search or directory
Go to Financial Info → Check / Direct Deposit Register
Locate the transaction and open it

Register columns (typical)

Posting Number, Payment Type, Transaction Number, Transaction Date, SSN, Payee Name, Payee Type, Payment ID, Annuity, Pension, Gross Amount, Net Amount, Type, Unit, Void, Actions (exact set can vary slightly by configuration).

Step 2: Open transaction detail and void
The modal title is Check/Direct Deposit Register Detail.
Two tabs: Payment Details and Financial Details (review both if your workflow requires).
Payment Details fields include (among others): Payee Name, Payee Type, Employee #, ID, Void? (Yes/No), Folio #, SSN, Payment Type, Payment ID, CM/Transaction #, Transaction #2, Transaction Date, Unit.
Additional actions often appear in the modal: Audit, Re-Print Report, Re-Number Check, Unvoid Transaction (when applicable).
To void: click Void Transaction at the bottom of the modal and complete any confirmation.
Step 3: Review and Confirm Void

In Void Confirmation Modal:

Review the transaction details displayed:
Member name
Check/DD number
Amount being voided
Payment date
The system will automatically record:
Void date (current date)
User who performed the void
Transaction details for audit trail
(Optional) Some systems allow you to enter a reason for void
Click Confirm Void, Void Transaction, or Yes button to complete void
System processes void
Success message appears
Transaction now shows "Voided" status

What Happens:

Transaction status changes to "Voided"
Void is recorded with timestamp and user ID
Amount is reversed in accounting
Transaction remains visible but marked as voided
Step 4: (Optional) Filter and review voided transactions
Return to Check / Direct Deposit Register (or vendor register).
Use the Voided Only checkbox in the filter area.
The grid lists voided rows for audit or reconciliation.

Why Filter Voided Transactions:

Audit trail review
Reconciliation purposes
Compliance reporting
Identifying patterns (e.g., frequent voids for specific member)
Monthly/annual review of voided payments
Step 5: (Optional) Unvoid a transaction

If the void was made in error:

Turn on Voided Only (or locate the voided row)
Open Check/Direct Deposit Register Detail again
Click Unvoid Transaction (UI label — do not use "Reverse Void")
Confirm if prompted; status returns to the prior non-void state when successful

If Unvoid Transaction is disabled or missing, verify permissions or period status with an administrator.

Step 6: Reissue Payment (If Needed)

If Member Needs Replacement:

Process manual payment or
Include in next regular payroll or
Issue emergency check

Track Reissue:

Note original voided check number
Link reissue to void in records
Update member payment history
When to Void vs. Adjust

Void When:

Check is lost or stolen
Payment not received by member
Incorrect payee
Member deceased before receiving payment
Stop payment requested
Physical check damaged before mailing

Don't Void - Use Adjustment When:

Amount slightly incorrect but check cashed
Tax withholding needs correction
Deduction error but payment received (These require accounting adjustments, not voids)
Common Scenarios
Scenario: Lost Check Reissue

Steps:

Member calls reporting lost check
Verify check not yet cashed (check with bank)
Issue stop payment with bank
Void check in PensionPro+
Reason: "Lost check - member reported"
Issue replacement check
Update member mailing address if needed
Scenario: Deceased Before Check Cashed

Steps:

Receive notification of death
Verify check issued but not cashed
Void check
Reason: "Member deceased before payment"
Process death benefit/refund separately
Return uncashed check if received
Scenario: Wrong Amount

Steps:

Discover error before member receives check
Issue stop payment with bank (if check mailed)
Void check in system
Reason: "Incorrect amount"
Correct payroll record
Reissue check with correct amount
Best Practices

✅ DO:

Document reason clearly
Issue stop payment with bank
Track reissue to original void
Verify check not cashed before voiding
Keep audit trail
Communicate with member

❌ DON'T:

Void after check is cashed (use adjustment)
Forget to issue stop payment
Reuse same check number without verification
Skip documentation
Void without proper authority
Common Questions

Q: Can I void a check that's already been cashed? A: No. Once cashed, you need an accounting adjustment, not a void. Contact your accountant.

Q: What happens to the check number after voiding? A: It's marked as voided and typically not reused, but this depends on your organization's policy.

Q: Do I need to notify the bank? A: Yes, issue a stop payment with your bank to prevent the voided check from being cashed.

Q: How long do I have to void a check? A: Depends on your policies, but typically before it's cashed. Checks usually expire after 90-180 days.

Q: Can I undo a void? A: Yes, when permitted: open the transaction in Check/Direct Deposit Register Detail and use Unvoid Transaction. If the action is unavailable, check permissions or whether the accounting period is closed.

Q: What if member already cashed the check? A: Can't void. If amount was wrong, process adjustment in next payroll or create manual correction.

Troubleshooting
Issue: Can't find void button

Solutions:

Check user permissions
Verify transaction is eligible for void (not already cashed)
Open Check/Direct Deposit Register Detail — Void Transaction is at the bottom of the modal
Contact system administrator
Issue: Void fails with error

Solutions:

Check if check already processed/cashed
Verify you have void permissions
Ensure accounting period is open
Check for locks on payment record
Contact system administrator
Issue: Need to void after fiscal year close

Solutions:

May require special approval
Contact accountant and system administrator
May need accounting adjustment instead
May require reopening period
Audit and Compliance

Void Records Include:

Original transaction details
Void date and time
User who voided
Void reason
Reissue information (if applicable)

Retention:

Keep voided check records per your retention policy
Usually 7-10 years for financial records
Maintain audit trail
Include in annual audits
Related Tasks
Run Retiree Payroll
Generate Retiree Checks
Lock and Unlock Payment Records

Last Updated: January 2026

← Back to Payroll and Payments

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Step 1: Locate the Transaction
Step 2: Open transaction detail and void
Step 3: Review and Confirm Void
Step 4: (Optional) Filter and review voided transactions
Step 5: (Optional) Unvoid a transaction
Step 6: Reissue Payment (If Needed)
When to Void vs. Adjust
Common Scenarios
Scenario: Lost Check Reissue
Scenario: Deceased Before Check Cashed
Scenario: Wrong Amount
Best Practices
Common Questions
Troubleshooting
Issue: Can't find void button
Issue: Void fails with error
Issue: Need to void after fiscal year close
Audit and Compliance
Related Tasks