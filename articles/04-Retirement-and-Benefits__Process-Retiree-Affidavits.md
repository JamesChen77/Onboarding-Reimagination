# How Do I Process Retiree Affidavits?

> **Source:** [https://dev.pensiontech.io/documentation/04-Retirement-and-Benefits/Process-Retiree-Affidavits](https://dev.pensiontech.io/documentation/04-Retirement-and-Benefits/Process-Retiree-Affidavits)

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
Process Retiree Affidavits
How Do I Process Retiree Affidavits?

Category: Retirement and Benefits
Time: 10–15 minutes
Difficulty: ⭐⭐ Intermediate

Before You Begin:

Understand your organization’s affidavit requirements and schedule
Have access to the Affidavits area and (for recording returns) the member profile
Retiree/member data and current address should be in the system

Related Topics:

Run Retiree Payroll
Review Retiree Financial Information
What This Does

The system helps you view, filter, and report on retiree affidavit history and record or update when affidavits have been returned and verified. Affidavit records store verification year, payee information, return status (Pending or Verified), date returned, and who logged it. You can work from the Affidavits center (all retirees) or from a member’s profile (that retiree only).

Where to Process Affidavits

There are two places in the application:

Affidavits center (global)

Open the main menu (☰) and click Affidavits.
You see Affidavit History: one list for all retirees, with filters and a print report.

Member profile (per retiree)

Open a member’s profile, then go to Member History → Affidavit History.
You see that member’s affidavit history and can open the Add/Edit modal to record or update an affidavit (e.g. mark returned, date returned, address).
Affidavits Center: Affidavit History

How to get there: Main menu (☰) → Affidavits. The only section is Affidavit History.

What you see:

Filters (at the top):
Year – Limit to a specific verification year (current year back 30 years), or “All”.
Affidavit Status – Pending (not yet returned) or Verified (returned and logged).
Reset – Clears filters back to current year and Pending.
Print – Opens the report dialog. The report run depends on the current Affidavit Status filter:
Pending → AffidavitPendingPrintReport
Verified → AffidavitVerifiedPrintReport

Table columns:

Column	Description
Verification Year	Year the affidavit applies to
Full Name	Full name of the payee
Payee	Payee name
Payee SSN	Payee SSN (masked)
Returned	Yes/No (Pending vs Verified)
Date Returned	When the affidavit was returned (if verified)
Logged By	User who recorded the return

The list is paginated (e.g. 25, 50, 100 per page) and sortable by column. Data comes from the API getPendingVerifiedAffidavits with the current filters (year, status).

Typical use:
Filter by year and Pending or Verified, review the list, and use Print to generate the pending or verified affidavit report for mailing, tracking, or compliance.

Member Profile: Affidavit History

How to get there: Open the member’s profile → in the left sidebar under Member History click Affidavit History.

What you see:

A table of that member’s affidavit history with the same columns as above (Verification Year, Full Name, Payee, Payee SSN, Returned, Date Returned, Logged By), plus an Actions column.
Print in the header to run the same affidavit reports (pending/verified) in the context of your report configuration.

Recording or updating an affidavit:

Click a row or the View Details (eye) action in that row.
The Affidavit History modal opens (Add or Edit, depending on whether you opened it for a new or existing record).

In the modal you can enter or edit:

Basic information: Verification Year, Payee, Payee SSN
Name: Full Name, Affidavit First/Last Name, Payee Birth Date
Return status: Returned (Yes/No), Date Returned, Affidavit Comments, Logged By
Address: Address 1–3, City, State, Zip, Foreign Address

Required fields typically include Verification Year, Payee, Payee SSN, Full Name, and Payee Birth Date. Saving calls the affidavit history update API (/api/v1/affidavits/history-update). After a successful save, the list refreshes.

Typical use:
When a retiree returns a signed affidavit, open their profile → Affidavit History → open the matching row (or add a new record if your process creates the row first). Set Returned to Yes, set Date Returned, add comments if needed, and save. This marks the affidavit as verified and updates the data used for Pending/Verified filters and reports.

How the System Behaves

Pending vs Verified
The Affidavit Status filter and report selection are driven by the Returned value on each record: “Pending” = not returned (e.g. N), “Verified” = returned (e.g. Y). Recording a return in the modal (Returned = Yes, Date Returned) moves that record into the Verified view and report.

Data source
The Affidavits center list is from getPendingVerifiedAffidavits (API: /api/v1/affidavits/pending-verified) with page, page size, sort, and filter (year, returned/status). The member-profile Affidavit History shows the same structure filtered to that member. Updates go to history-update (PUT).

Reports
Print uses the report component with report code AffidavitPendingPrintReport or AffidavitVerifiedPrintReport depending on the current Affidavit Status filter. Use these for mailing labels, lists for follow-up, or compliance.

Quick Steps Summary

To view and report on affidavits (all retirees):

Main menu → Affidavits → Affidavit History.
Set Year and Affidavit Status (Pending or Verified).
Review the table; use Print to generate the corresponding report.
Use Reset to set filters back to default.

To record or update a returned affidavit (one retiree):

Open the member’s profile.
Go to Member History → Affidavit History.
Click the row for the affidavit (or add a record if your process requires it).
In the modal, set Returned to Yes, Date Returned, and any comments or address updates.
Save; the list refreshes and the record appears as Verified in the Affidavits center when filtered by Verified.
Related Tasks
Review Retiree Financial Information
Run Retiree Payroll
Update Contact Information (if address changes when processing affidavits)

Last Updated: February 2026

← Back to Retirement and Benefits
|
Related: Review Retiree Financial Information →

ON THIS PAGE
What This Does
Where to Process Affidavits
Affidavits Center: Affidavit History
Member Profile: Affidavit History
How the System Behaves
Quick Steps Summary
Related Tasks