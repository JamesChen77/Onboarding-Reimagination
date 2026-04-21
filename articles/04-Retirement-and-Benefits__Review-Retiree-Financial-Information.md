# How Do I Review Retiree Financial Information?

> **Source:** [https://dev.pensiontech.io/documentation/04-Retirement-and-Benefits/Review-Retiree-Financial-Information](https://dev.pensiontech.io/documentation/04-Retirement-and-Benefits/Review-Retiree-Financial-Information)

---

DOCUMENTATION
00. READINESS JOURNEY
01. GETTING STARTED
02. MEMBERS AND RECORDS
03. CONTRIBUTIONS AND BUYBACKS
04. RETIREMENT AND BENEFITS
Overview
Run Pension Calculation
Run Quick Retirement Estimate
Run, Save, Share Benefit Calculation Results
Review Calculation Inputs and Outputs
05. PAYROLL AND PAYMENTS
06. REFUNDS AND DISTRIBUTIONS
07. ACCOUNTING AND COMPLIANCE
08. REPORTS AND ANALYTICS
09. COMMUNICATIONS AND MEMBER ENGAGEMENT
10. BATCH PROCESSING AND OPERATIONS
11. SYSTEM ADMINISTRATION
Documentation
chevron_right
Retirement And Benefits
chevron_right
Review Retiree Financial Information
How Do I Review Retiree Financial Information?

Category: Retirement and Benefits
Time: 10 minutes
Difficulty: ⭐⭐ Intermediate

Before You Begin:

Understand basic pension payment terminology
Have the member's profile accessible
Member should be in Retired status (or have retiree payroll data) for full data to display

Related Topics:

Retire a Member
Update Payment Information
Run Retiree Payroll
Process Retiree Affidavits
What This Does

The Financial Information area for a member gives you one place to review and manage everything related to that retiree’s benefits and payments. In the application, this area is under the Financial Info group in the member’s left sidebar. It is made up of four sections, all on the same Payroll page. You can open the page and then use the sidebar or in-page anchors to jump to any section.

Where to Find It
Open the member’s profile (e.g. search for the member and open their record).
In the left sidebar, expand Financial Info.
Click Financial Info, Payment Info, Check / Direct Deposit Register, or 1099 Info.
Each of these opens the same Payroll view and scrolls to the corresponding section.

The four sections are:

Section	What it shows
Financial Information	Annuity and benefit amounts, COLAs, original vs current retirement allowance
Payment Information	Payment setup records (type, payee, annuity, pension, net payment, unit)
Check / Direct Deposit Register	History of check and direct deposit transactions
1099 Information	Tax-year 1099 data (gross distribution, taxable amount, distribution codes, sent/lock flags)
The Four Sections in Detail
1. Financial Information

What it is:
A read-only (or editable, depending on permissions) summary of the member’s annuity and benefit amounts. Values come from the retiree payroll financial-info API and are shown in grouped cards.

What you see:

Annuity: Annuity Savings, Annuity Interest, Total Annuity Reserve, Total Annuity Paid, Calculated Annuity Balance
General: Pre 1988 / Non-taxable, Tax Offset, Monthly/Annual Workers Compensation, Workers Comp Lump Sum
Salary: Equivalent Salary, Average Salary, Option C Popup Factor
Original benefits: Original Pension, Original Veterans Allowance, Original Annuity, Original Dependent Allowance, Original Retirement Allowance
Current benefits: Current Monthly Retirement Allowance, Current Annual Retirement Allowance
COLA: Pre 1981 COLA, 1981–1997 COLA, Post 1997 COLA, Section 90 Amount, Total Life-to-Date COLA

How it’s used:
Use this section to confirm gross benefit amounts, compare original vs current allowance, and see how COLAs and other adjustments have been applied. If your role can edit, you can switch to Edit mode, change values, and save; the system calls the update financial-info API.

Actions:

Print – Runs the Financial Info Report for this member (report code: FinancialInfoReport).
2. Payment Information

What it is:
A table of payment setup records for this member. Each row is one payment configuration (e.g. type, payee, annuity amount, pension amount, net payment, unit). Data is loaded from the payment-info API by member ID and can be sorted by the column headers.

What you see (columns):

Payment Type (from application codes)
Payee
Annuity (amount)
Pension (amount)
Net Payment (amount)
Unit (from application codes)

How it’s used:
Review how many payment records exist, who the payee is, and the annuity/pension/net amounts. Click a row to open the Payment Information edit modal to view or change that record. Use Payment to add a new payment record.

Actions:

Audit – Opens the audit trail for MemberPaymentInfo for this member.
Print – Runs the Payment Info Report (report code: PaymentInfoReport).
Payment – Opens the add/edit modal to create or edit a payment record.
3. Check / Direct Deposit Register

What it is:
A paginated, sortable table of check and direct deposit transactions for this member. Data comes from the payroll service (check/direct-deposit register API), filtered by the member’s client ID.

What you see (columns):

Posting Number, Payment Type, Transaction Number, Transaction Date
Payee SSN, Payee Name, Payee Type, Payment ID
Annuity Amount, Pension Amount, Gross Payment Amount, Net Payment Amount
Calc Type, Current Unit, Void Flag
Row actions (e.g. open detail)

How it’s used:
Verify that payments were issued, see dates and amounts, and identify voided items. You can use filters (e.g. date range, posting number, payment type, unit, voided only) when the screen exposes them. Click a row (or the detail action) to open the Check/Direct Deposit Register detail modal for that transaction.

Actions:

Open a row’s detail modal to view or edit that transaction (and refresh the list after save if applicable).
4. 1099 Information

What it is:
A table of 1099 tax records for this member, by year. The same payroll 1099 component is used here with the member’s client ID and isPayrollContext: false, so it shows member-level 1099 data.

What you see (columns):

Year ID, Sequence Number
Gross Distribution, Taxable Amount
Distribution Code(s), Lock Flag, Sent to IRS Flag
Row actions (e.g. open detail)

How it’s used:
Review what gross distribution and taxable amounts were reported (or will be reported) for each tax year, whether the record is locked or sent to the IRS, and open the detail modal for a specific 1099 line if needed.

Actions:

Open the 1099 detail modal from the row action to view or manage that 1099 record (depending on permissions and payroll context).
How Values Are Calculated and Displayed
Financial Information: Values are stored and retrieved from the retiree-payroll financial-info API (/api/v1/retiree-payroll/financial-info/:id). Amounts reflect annuity reserves, original and current retirement allowances, and COLA breakdowns as maintained by the system (and, if allowed, updated via the same API).
Payment Information: Each row is a payment setup record from the payment info service (payments list by member ID). Amounts are those stored for that payment record (annuity, pension, net).
Check / Direct Deposit Register: Rows are transaction records from the payroll check/direct-deposit register API for this member. Amounts and dates are from posted or generated payroll runs.
1099 Information: Rows come from the retiree-payroll 1099 API for this member. Gross distribution, taxable amount, and distribution codes are calculated or populated by the 1099 process (e.g. populate, tax-offset rollup) and displayed as stored.
Quick Steps to Review a Retiree’s Financial Information
Open the member profile (search or directory).
In the left sidebar, under Financial Info, click Financial Info (or any of the four section links).
You land on the Payroll page with all four sections.
Financial Information – Confirm annuity, original/current allowance, and COLA amounts; use Print for the Financial Info Report if needed.
Payment Information – Check payment setup rows (payee, amounts, unit); add or edit via Payment and the row modal; use Print for the Payment Info Report.
Check / Direct Deposit Register – Scan transaction history and open the detail modal for any transaction to verify or correct.
1099 Info – Review 1099 rows by year and open the detail modal for a specific year/sequence if needed.
Related Tasks

Before reviewing:

Find a Member
,
Review Member Banner and Navigation Cards

Related to financial review:

Update Payment Information
,
Run Retiree Payroll

After retirement:

Process Retiree Affidavits

Last Updated: February 2026

← Back to Retirement and Benefits
|
Related: Retire a Member →

ON THIS PAGE
What This Does
Where to Find It
The Four Sections in Detail
1. Financial Information
2. Payment Information
3. Check / Direct Deposit Register
4. 1099 Information
How Values Are Calculated and Displayed
Quick Steps to Review a Retiree’s Financial Information
Related Tasks