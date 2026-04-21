# Payroll Processing in PensionPro+

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Run-Active-Member-Payroll](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Run-Active-Member-Payroll)

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
Run Active Member Payroll
Payroll Processing in PensionPro+

Category: Payroll and Payments Time: 10 minutes (reading) Difficulty: ⭐ Beginner

Related Topics:

Run Retiree Payroll
Manage Vendor Payments
Upload Contributions
Important Note About Payroll in PensionPro+

PensionPro+ uses a unified payroll system specifically designed for retiree pension payments and vendor payments.

There Is No Separate "Active Member Payroll"

What PensionPro+ Handles: ✅ Retiree Payroll - Monthly pension payments to retired members ✅ Vendor Payments - Payments to service providers and vendors ✅ Combined Processing - Both retiree and vendor payments in one workflow

What PensionPro+ Does NOT Handle: ❌ Active Employee Payroll - Regular biweekly/monthly salary payroll for working employees

Understanding the Payroll System
Retiree Payroll vs. Active Employee Payroll

Retiree Payroll (IN PensionPro+):

Processes monthly pension payments for retired members
Handles deductions (tax withholding, insurance, garnishments)
Generates checks and direct deposits for retirees
Manages vendor payments (insurance companies, legal firms, etc.)
Located in: Payroll → Payroll & Vendor Payment Wizard

Active Employee Payroll (NOT in PensionPro+):

Biweekly or monthly salary payments for working employees
Time and attendance tracking
Standard payroll tax withholding for employees
Typically handled by separate payroll system (ADP, Paychex, etc.)
What This Means For You
If You Need to Process Retiree Pension Payments:

👉 You're in the right place!

See:
Run Retiree Payroll
for the complete workflow.

This guide covers:

Processing monthly pension payments to retirees
Vendor payment processing
Check and direct deposit generation
Payment register posting
If You Need to Process Active Employee Payroll:

👉 PensionPro+ does not handle active employee payroll.

What you should do instead:

Use your organization's dedicated payroll system (e.g., ADP, Paychex, or your HR system)
After processing payroll, upload contribution data to PensionPro+
See: Upload Contributions
How Contributions Relate to Payroll

Even though PensionPro+ doesn't process active employee payroll, it tracks employee contributions that come from your payroll system:

The Workflow:

Process payroll in your external payroll system (ADP, Paychex, etc.)
Extract contribution data from that system
Upload contributions to PensionPro+ (see Upload Contributions guide)
PensionPro+ tracks member accounts and calculates pension benefits
When members retire, process retiree payroll in PensionPro+
Common Scenarios
Scenario: You're Looking to Pay Active Employees

What You Need: A separate payroll system outside PensionPro+ for active employee salary processing.

PensionPro+ Role:

Receives contribution data after payroll is processed
Tracks employee pension accounts
Calculates pension benefits
Processes pension payments when employees retire

Steps:

Use your external payroll system for active employee pay
Upload contribution data to PensionPro+
See: Upload Contributions
Scenario: You Need to Pay Retired Members

What You Need: The Retiree Payroll Wizard in PensionPro+

Steps:

Navigate to Payroll → Payroll & Vendor Payment
Follow the 7-step wizard to process pension payments
See: Run Retiree Payroll for detailed instructions
Scenario: You Need to Process Vendor Payments

What You Need: The Payroll Wizard (same as retiree payroll) - it handles both

Steps:

Navigate to Payroll → Payroll & Vendor Payment
The wizard processes both retiree and vendor payments together
See: Run Retiree Payroll - includes vendor payment instructions
Or see: Manage Vendor Payments for vendor-specific details
System Architecture Summary
┌─────────────────────────────────────┐
│  Your External Payroll System       │
│  (ADP, Paychex, HR System, etc.)   │
│                                     │
│  • Active employee salaries         │
│  • Biweekly/monthly pay            │
│  • Time & attendance               │
│  • Payroll taxes                   │
└──────────────┬──────────────────────┘
               │
               │ Extract contribution
               │ data (employee + employer
               │ pension contributions)
               ↓
┌─────────────────────────────────────┐
│  PensionPro+                        │
│                                     │
│  • Upload contributions             │
│  • Track member pension accounts    │
│  • Calculate pension benefits       │
│  • Process retiree payroll         │
│  • Process vendor payments         │
│  • Generate checks & DD files      │
└─────────────────────────────────────┘

Quick Reference

For Active Employee Payroll:

❌ NOT in PensionPro+
✅ Use external payroll system
✅ Upload contributions to PensionPro+ afterward

For Retiree Pension Payments:

✅ IN PensionPro+
✅ Use Payroll & Vendor Payment Wizard
✅ See: Run Retiree Payroll

For Vendor Payments:

✅ IN PensionPro+
✅ Included in Payroll Wizard
✅ See: Manage Vendor Payments

For Contribution Tracking:

✅ IN PensionPro+
✅ Upload from external payroll system
✅ See: Upload Contributions
Common Questions

Q: Why doesn't PensionPro+ have active employee payroll? A: PensionPro+ is a pension administration system, not a full payroll system. It focuses on pension tracking, benefit calculations, and retiree payments. Most organizations already have a dedicated payroll system for active employees and need PensionPro+ specifically for pension administration.

Q: Can I import payroll data from my payroll system? A: Yes! You can upload contribution data from your external payroll system. See
Upload Contributions
for instructions.

Q: What if I'm a small system without a separate payroll system? A: You'll need to acquire a payroll system for active employee pay (like Paychex, ADP, Gusto, or QuickBooks Payroll). Then upload contribution data to PensionPro+ to track pension benefits.

Q: Can I track contributions without processing active employee payroll? A: Yes! PensionPro+ tracks and manages pension contributions regardless of what payroll system you use. Just upload the contribution data after processing payroll.

Q: Does PensionPro+ calculate pension benefits based on salary data? A: Yes! Once you upload contribution and salary data, PensionPro+ uses it to calculate pension benefits when members retire. But it doesn't process the active employee paychecks.

Q: I see "Retiree Payroll" - does that mean active payroll exists somewhere? A: The term "Retiree Payroll" distinguishes pension payments to retired members from other payment types. There is no "Active Payroll" module in PensionPro+ - that function is handled by external payroll systems.

Q: Can I process year-end tax forms for retirees? A: Yes! PensionPro+ generates 1099-R forms for retiree pension payments. See the 1099 Processing section in Payment Center.

Q: Where do I manage deductions for retirees? A: Retiree deductions (insurance, tax withholding, etc.) are managed in the member's payment information and processed during retiree payroll. See
Run Retiree Payroll
.

Related Tasks
Run Retiree Payroll - Process pension payments for retired members
Manage Vendor Payments - Process payments to vendors
Upload Contributions - Import contribution data from payroll
Update Federal Tax Withholdings - Manage tax withholding for retirees
Generate Direct Deposit Files - Create ACH files for payments

Last Updated: January 2026

← Back to Payroll and Payments
|
Next: Run Retiree Payroll →

ON THIS PAGE
Important Note About Payroll in PensionPro+
There Is No Separate "Active Member Payroll"
Understanding the Payroll System
Retiree Payroll vs. Active Employee Payroll
What This Means For You
If You Need to Process Retiree Pension Payments:
If You Need to Process Active Employee Payroll:
How Contributions Relate to Payroll
Common Scenarios
Scenario: You're Looking to Pay Active Employees
Scenario: You Need to Pay Retired Members
Scenario: You Need to Process Vendor Payments
System Architecture Summary
Quick Reference
Common Questions
Related Tasks