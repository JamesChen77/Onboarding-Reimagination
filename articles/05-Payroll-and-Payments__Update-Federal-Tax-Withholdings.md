# How Do I Update Federal Tax Withholdings?

> **Source:** [https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Update-Federal-Tax-Withholdings](https://dev.pensiontech.io/documentation/05-Payroll-and-Payments/Update-Federal-Tax-Withholdings)

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
Update Federal Tax Withholdings
How Do I Update Federal Tax Withholdings?

Category: Payroll and Payments Time: 5-10 minutes Difficulty: ⭐⭐ Intermediate

Before You Begin:

Have member's W-4 form or withholding request
Know whether they want flat amount or percentage withholding

Related Topics:

Update Payment Information
Run Retiree Payroll
Add Financial Information
What This Does

Allows you to update the federal income tax withholding for a retiree's pension payments. This involves two parts:

System-Wide Tax Tables - Maintaining the annual Federal Tax Table by year in Settings (system-wide configuration)
Member-Level Settings - Applying member-level federal withholding preferences from each member's Payment Info record

Members can choose to have federal tax withheld as a flat dollar amount or a percentage of their gross payment based on current W-4P forms (2022+) or legacy calculations. Changes take effect on the next payroll processed after saving.

Federal tax withholding is optional for retirees, but many choose to have taxes withheld to avoid owing when filing their annual return.

Quick Steps

Part 1: Update System-Wide Federal Tax Table (Annual Task)

Click user icon → select Settings
Click Retiree Payroll card
In left menu, select Federal Tax Table by Year
Select the Pre-2021 or Post-2021 tab as appropriate
Click a year's record to edit, or click + Tax Table for a new year
Make changes and click Update (or Save for new)

Part 2: Update Member's Federal Tax Withholding

Find and open the member's profile
Click Financial Info navigation card
In the Payment Information section, click an existing payment record or click + Payment to create new
In the Payment Information Edit window, click the Taxes tab
Update federal withholding settings in Federal - Original or Federal - Revised sections
Set Calc Fed Tax option to control calculation method
Click Save or Save and Close
Verify changes will appear in next payroll
Step-by-Step Instructions
Part 1: Update the Federal Tax Table (System-Wide, Annual)

This is typically done once per year when new IRS tax tables are released.

Step 1: Navigate to Settings

Where to Go:

Click the user icon in the top-right corner
Select Settings from the dropdown menu
Settings page opens
Step 2: Open Retiree Payroll Settings

What to Do:

Look for the Retiree Payroll card in Settings
Click the Retiree Payroll card
Retiree Payroll configuration page opens
Step 3: Access Federal Tax Table by Year

What to Do:

In the left navigation menu, select Federal Tax Table by Year
The Fed Tax Table page opens with a Pre-2021 / Post-2021 toggle at the top
Select the appropriate tab (see below) before editing or creating records
The table lists each year as a separate record
Understanding the Pre-2021 and Post-2021 Tabs

The Fed Tax Table page has two tabs: Pre-2021 and Post-2021. These correspond to the two IRS withholding calculation methods:

Pre-2021 — Uses the legacy exemption/allowance-based withholding method. Each year's record includes a Fed Exemption dollar value (e.g., $4,300 for 2021). This value is multiplied by the number of exemptions a retiree claims to reduce taxable income before applying the bracket table. Used for retirees who have not submitted a new W-4P form dated 2022 or later.

The Pre-2021 table columns displayed are: Year, Fed Exemption, and Actions.

Post-2021 — Uses the current W-4P form-based method (2022+). Tax brackets are applied using filing status and the W-4P Step 2–4 fields instead of exemptions. Each year's record shows separate exemption amounts by filing status: Married Fed Exemption, Single Fed Exemption, and Head of Household Fed Exemption. Used for retirees who have submitted a W-4P form dated 2022 or later.

Both tabs must be maintained annually when new IRS tax tables are released. Select the appropriate tab before editing or creating a year's record.

Step 4: Edit Existing Year or Create New Year

To Edit an Existing Year:

Click the year's record you want to edit
Tax table form opens with current values
Make necessary changes to brackets, rates, etc.
Click Update to save changes

To Add a New Tax Year:

Click the + Tax Table button (top-right corner of the page)
New tax table form opens

Pre-2021 form fields:

Year — The tax year (required; read-only after creation)
Fed Exemption — Dollar value per exemption claimed by the retiree

The form then contains two filing-status tabs, each with a bracket table:

Single tab — tax brackets for single filers
Married tab — tax brackets for married filers

Each bracket table has columns:

Over — Lower bound of the income bracket
But Not Over — Upper bound of the income bracket
Plus — Fixed dollar amount of tax owed at the bracket floor
Percentage — Marginal tax rate applied to income above the bracket floor

Post-2021 form fields:

Year — The tax year (required; read-only after creation)

The form contains filing-status tabs (Married Filing Jointly, Single, Head of Household), each with:

Fed Exemption — Dollar value per exemption for that filing status
A bracket table with the same Over / But Not Over / Plus / Percentage columns
Complete all required fields
Click Save to create the new record

Important: Only users with Settings permissions can update tax tables. Contact your system administrator if you don't have access.

Part 2: Update a Member's Federal Tax Withholding
Step 1: Navigate to Payment Information

Where to Go:

Find and open the member's profile (use Global Search or Member Directory)
Click Financial Info navigation card
Scroll to the Payment Information section
You have two options:
Edit existing record: Click on an existing payment record in the list
Create new record: Click + Payment button to add a new payment record

What You'll See:

Payment Information Edit modal opens
Four tabs: Retirement Information, Payment Information, Amounts and Deductions, Taxes
The Taxes tab contains all federal and state withholding settings

💡 Note: There is no separate "Tax Withholding" section within Financial Info. Federal tax withholding must be accessed through the Payment Information section → Taxes tab.

Step 2: Open the Taxes Tab

What to Do:

In the Payment Information Edit modal, click the Taxes tab
Tax withholding form displays with two sections:
Federal - Original: Legacy federal tax calculation settings
Federal - Revised: Current W-4P form-based settings (2022 and later)
State tax settings may also appear (if applicable to your system)
Step 3: Update Federal Withholding

The Taxes tab provides two sections for federal tax withholding. Most organizations use Federal - Revised for current W-4P forms (2022+), but Federal - Original remains available for legacy calculations.

Federal - Original Section (Legacy)

When to Use:

For members with older tax withholding setup
When system is configured to use legacy tax tables
Typically being phased out in favor of Federal - Revised

Available Fields:

Calc Fed Tax:

Dropdown to control how federal tax is calculated
Options typically include:
No - System uses the flat Federal Tax amount (entered in Amounts and Deductions tab)
Yes - System calculates using member's marital status from Member Basic
Married - Calculate using Married tax tables regardless of member status
Single - Calculate using Single tax tables regardless of member status

Fed Exemptions:

Number of federal exemptions/allowances (if system calculates)
Used with legacy tax table calculations
Example: 2 for 2 exemptions

Add Fed W/H (Additional Federal Withholding):

Dollar amount of additional withholding beyond calculated amount
Flat amount added to system-calculated withholding
Example: 50.00 to withhold an extra $50
Federal - Revised Section (Current W-4P)

When to Use:

For all new W-4P forms (2022 and later)
Preferred method for current federal tax withholding
Based on IRS Form W-4P fields

Available Fields:

Withholding:

Dropdown to select withholding calculation method
Options based on W-4P form selections
Typically includes marital status options from the W-4P

Marital Status:

Member's tax filing status for federal withholding
Options:
Single
Married Filing Jointly
Married Filing Separately
Head of Household

2biii: Income from Job/Pensions/Annuities:

Annual amount from Step 2(b)(iii) of W-4P form
Other income member receives that affects withholding
Enter as annual amount

3: Claim Dependents:

Annual amount from Step 3 of W-4P form
Dependent credits claimed by member
Enter as annual amount

4a: Additional Income:

Annual amount from Step 4(a) of W-4P form
Other income not from jobs/pensions
Enter as annual amount

4b: Additional Deductions:

Annual amount from Step 4(b) of W-4P form
Deductions member expects to claim
Enter as annual amount

4c: Additional Withholding:

Amount from Step 4(c) of W-4P form
Extra withholding member requests per pay period
Enter as per-period amount (not annual)
Example: 100.00 withholds extra $100 each month
Using the Amounts and Deductions Tab for Flat Amount Withholding

Alternative Method: Fixed Dollar Withholding

If you need to withhold a specific flat amount (not calculated by system), you can use the Amounts and Deductions tab instead:

Click the Amounts and Deductions tab (in Payment Information Edit modal)
Find the Tax Deductions section
Enter amount in Federal Tax field
Example: 200.00 to withhold $200 per month
On the Taxes tab, set Calc Fed Tax to No (in Federal - Original section)
System will use your flat amount instead of calculating

When to Use This Method:

Member wants exact dollar amount withheld each period
Simple, predictable withholding
Not using W-4P calculation method
Step 4: Review and Save

What to Do:

Review all entries:
Withholding type (flat or percentage)
Amount or percentage value
Filing status (if applicable)
Click Save button
Confirmation message appears
New withholding will be reflected in the next payroll run
Step 5: Verify in Next Payroll

What to Do:

After saving, the changes take effect on the next payroll run processed
When running next payroll:
Member's federal withholding reflects new amount
Review payroll warrant to confirm correct withholding
Check member's payment stub shows updated withholding
Understanding Federal Tax Withholding
Why Withhold Federal Tax?

For the Member:

Avoids large tax bill when filing return
Spreads tax payments throughout year
Simplifies tax planning
Prevents underpayment penalties

Required by Law?

No - federal tax withholding is optional for pensions
Members can elect zero withholding
Members are responsible for paying taxes owed
Withholding Calculation

Flat Amount Method:

Simple: Same dollar amount every payroll
Example: $250 withheld regardless of gross amount
Easy to budget and predict

Percentage Method:

Varies with gross payment
Example: 15% of $2,000 = $300 withheld
Automatically adjusts if pension amount changes (COLA, deduction changes)

Considerations:

State withholding separate (if applicable)
Withholding reduces net payment but not gross
Total withholding shown on annual 1099-R form
Common Scenarios
Scenario: Member Requests Increased Withholding

Situation: Retiree received tax bill and wants to increase withholding to avoid owing next year.

Steps:

Request completed W-4 form from member
Open member profile → Financial Info → Payment Information section
Click existing payment record
Click the Taxes tab
Current: 10% ($200/month)
Member requests: 15% withholding
Change federal withholding percentage to 15
Click Save
Inform member: "Your federal withholding will increase to 15% starting with your next payment"
Add memo to member history documenting change
Scenario: Updating for New W-4 Form

Situation: Member submitted new W-4 changing filing status and withholding amount.

Steps:

Review member's new W-4 form
Open member profile → Financial Info → Payment Information section
Click existing payment record → Taxes tab
Update filing status: Change from "Single" to "Married Filing Jointly"
Update withholding amount per W-4:
If member checked box for no withholding: Set to 0 or "None"
If member entered specific amount: Enter as flat amount
If calculated amount: Enter as percentage
Click Save
Scan and attach W-4 to member's documents
Add memo: "W-4 updated [date] - changed filing status and withholding amount per member request"
Scenario: Member Wants to Stop Withholding

Situation: Member called asking to stop all federal tax withholding.

Steps:

Confirm member understands they're responsible for taxes
Consider documenting their request (email or signed form)
Open member profile → Financial Info → Payment Information section
Click existing payment record → Taxes tab
Change withholding type to "None" or set amount to 0.00
Click Save
Inform member: "Your federal tax withholding will stop with your next payment. Remember you're responsible for estimated tax payments or paying when you file your return."
Add memo documenting member's request
Scenario: IRS Levy/Withholding Order

Situation: Received IRS levy requiring specific amount or percentage to be withheld.

Steps:

Review IRS levy documentation carefully
Note required withholding amount and duration
Open member profile → Financial Info → Payment Information section
Click existing payment record → Taxes tab
Enter withholding amount as specified in levy:
May be flat amount or percentage
Could be more than member's existing withholding
Click Save
Add separate garnishment/deduction for levy tracking (if system requires)
Scan and attach IRS levy to member documents
Add memo: "IRS levy received [date] - federal withholding adjusted per Order #[number]"
Monitor until levy is satisfied or released
Best Practices

✅ DO:

Request completed W-4 form before making changes
Document member's withholding requests
Inform member when change will take effect
Keep W-4 forms on file (physical or scanned)
Add memo to member history for all tax changes
Provide member with updated payment stub after change
Review withholding annually with member (if policy)
Verify change appears correctly in next payroll warrant

❌ DON'T:

Update without proper authorization from member
Promise immediate change if payroll already processed
Confuse federal and state withholding
Skip documenting the W-4 or request
Change withholding without member's knowledge
Set withholding higher than gross payment (would error)
Common Questions

Q: Can I withhold a specific dollar amount? A: Yes! Enter the dollar amount directly in the Federal Tax field on the Amounts and Deductions tab, then set Calc Fed Tax to No on the Taxes tab. This amount is withheld each month regardless of the member's gross payment amount.

Q: When will the change take effect? A: Changes take effect on the next payroll run processed after you save. If payroll for February 1 has not yet been run, saving today means the change will appear in that payroll.

Q: How do I stop federal withholding completely? A: Edit the member's tax withholding on the Taxes tab and clear the Federal - Revised fields, or set Calc Fed Tax to No and enter 0.00 in the Federal Tax field on the Amounts and Deductions tab. The member should complete a new W-4 indicating no withholding desired.

Q: What percentage should I withhold? A: This depends on the member's tax situation. Common ranges: 10-20% for most retirees. Member should consult their tax advisor or use IRS withholding calculator. The system doesn't calculate this automatically - member must specify amount.

Q: Can withholding be higher than the pension payment? A: No, the system will prevent withholding more than the gross payment. If flat amount exceeds gross, system will either withhold maximum possible or error - check your system's behavior.

Q: Do I need to update withholding every year? A: Not required unless member's tax situation changes or they request an update. Some organizations review annually as best practice, especially after tax law changes.

Q: What's the difference between federal withholding and garnishment? A: Federal withholding is voluntary - member elects to have taxes withheld. Garnishment is involuntary - court or IRS orders specific amount withheld. Both reduce net payment but serve different purposes.

Q: Will withholding automatically adjust if pension increases (COLA)? A: Only if using percentage withholding. Percentage-based withholding adjusts automatically with pension changes. Flat amount withholding stays the same regardless of pension amount changes.

Q: Can member change withholding mid-year? A: Yes, members can change federal withholding any time by submitting a new W-4. Changes take effect the next payroll after you process them.

Q: How is withholding reported? A: Annual 1099-R form (issued January/February) shows total federal tax withheld for the year. Member uses this when filing tax return.

Q: What if member doesn't have enough pension to cover withholding? A: If flat amount withholding exceeds gross payment, system may error or withhold zero. Consider using percentage instead, or set lower flat amount.

Q: Do I need to update the Federal Tax Table every year? A: Yes. Both the Pre-2021 and Post-2021 tabs should be updated annually when the IRS releases new withholding tables. Select the appropriate tab before adding or editing a year's record.

Troubleshooting
Issue: Changes not reflected in payroll

Possible Causes:

Payroll already processed before change saved
Change not saved properly

Solutions:

Check that changes were saved - reopen the member's Taxes tab to confirm
If payroll already run: Change will appear next month
For immediate change: Must rerun payroll (if before posting)
Review payroll warrant to confirm withholding amount
Issue: Cannot save withholding change

Possible Causes:

Insufficient permissions
Validation error (invalid amount or percentage)
System timeout or error

Solutions:

Check you have edit permission on the Payment Information record
Verify amount/percentage format is correct (no special characters)
Ensure percentage is reasonable (0-100)
Try refreshing page and re-entering
Contact system administrator if error persists
Issue: Withholding amount seems incorrect in payroll

Possible Causes:

Using percentage but expected flat amount (or vice versa)
Multiple withholdings or deductions combined
Calculation error

Solutions:

Check withholding type (flat vs percentage)
If percentage: Calculate expected amount (gross × percentage)
Review member's payment details for other deductions
Check for additional withholdings or garnishments
Review payroll warrant detail for breakdown
If incorrect: Update and rerun payroll (if before posting)
Related Tasks
Update Payment Information - Manage payment details
Run Retiree Payroll - Process pension payments with withholding
Add Financial Information - Set up member financial details
Manage Vendor Payments - Track tax payments to IRS

Last Updated: March 2026

← Back to Payroll and Payments
|
Next: Run Retiree Payroll →

ON THIS PAGE
What This Does
Quick Steps
Step-by-Step Instructions
Part 1: Update the Federal Tax Table (System-Wide, Annual)
Part 2: Update a Member's Federal Tax Withholding
Step 2: Open the Taxes Tab
Step 3: Update Federal Withholding
Step 4: Review and Save
Step 5: Verify in Next Payroll
Understanding Federal Tax Withholding
Why Withhold Federal Tax?
Withholding Calculation
Common Scenarios
Scenario: Member Requests Increased Withholding
Scenario: Updating for New W-4 Form
Scenario: Member Wants to Stop Withholding
Scenario: IRS Levy/Withholding Order
Best Practices
Common Questions
Troubleshooting
Issue: Changes not reflected in payroll
Issue: Cannot save withholding change
Issue: Withholding amount seems incorrect in payroll
Related Tasks