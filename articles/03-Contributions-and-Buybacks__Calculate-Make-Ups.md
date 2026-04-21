# How Do I Calculate Make-Ups?

> **Source:** [https://dev.pensiontech.io/documentation/03-Contributions-and-Buybacks/Calculate-Make-Ups](https://dev.pensiontech.io/documentation/03-Contributions-and-Buybacks/Calculate-Make-Ups)

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
Calculate Make-Ups
How Do I Calculate Make-Ups?

Category: Contributions and Buybacks Time: 15-20 minutes Difficulty: ⭐⭐⭐ Advanced

Before You Begin:

Identify which periods member missed
Have member's earnings history
Understand interest calculation method
Know member's contribution rate
Member must have service history that includes a gap or period requiring makeup service
Service dates must be verified and accurate
Member account must be active in the system
Current year interest months information available
Service years and months to be purchased clearly documented
Appropriate service board selected

Related Topics:

Process a Buyback
Review Contribution History
Create Manual Contribution Register
What This Does

Guides you through the process of calculating and recording make-up purchases in PensionPro+. A make-up is a payment a member makes to purchase creditable service for a period during which contributions were not deducted from their compensation — typically due to a leave of absence, a period of non-contributory employment, or a missed deduction. The legal foundation is G.L. c. 32, which defines make-ups and the conditions under which they are permitted.

This process handles service date selection, makeup type determination, investment return rates, and final calculation of the make-up payment amount, including total deductions, incremental (2%) deductions, interest, and the final makeup amount the member must pay.

Understanding Make-Ups
What Are Make-Ups?

A make-up is a payment a member makes to purchase creditable service for a period during which contributions were not deducted from their compensation. This typically occurs due to:

A leave of absence (e.g., unpaid leave, family leave)
A period of non-contributory employment
A missed payroll deduction (payroll error or administrative oversight)

The member was already a member of the retirement system during this period — they simply did not have contributions deducted. A make-up represents catching up on contributions they should have made. The legal basis for make-ups is G.L. c. 32.

Goal: Purchase creditable service for the period in question, which counts toward retirement eligibility and benefit calculation.

Make-Ups vs. Buybacks
Aspect	Make-Ups	Buybacks
Member Status	Member was already in the system during the period	Member was not yet in the system during the period
Why No Credit	Contributions were not deducted from compensation (leave, missed deduction)	Member had not yet joined the system (prior refund, military, contract, different system)
What It Covers	Catching up on contributions the member should have made	Purchasing service credit the member never contributed toward
Legal Basis	G.L. c. 32	G.L. c. 32
Calculation	Total Deductions + Total 2% + Total Interest = Makeup Amount	Refund repayment + interest (Regular, Actuarial, or Correction Interest method)
Complexity	Moderate	High
Typical Cost	Lower (contributions + interest)	Higher (refund repayment + accumulated interest)
Quick Steps
Open member profile
Click Buybacks/Makeups navigation card → Makeup section
Click "+ Makeup"
Enter service period dates, purchase date, makeup type, and service board
Configure interest settings (investment return, full/partial interest, interest months)
Enter year, interest months, earnings, and contribution rate for each year
Click "Calculate" to run calculation
Review calculated amounts (total deductions, total 2%, total interest, makeup amount)
Provide quote to member
Process payment when received
Step-by-Step Instructions
Step 1: Navigate to Member's Makeup Section
Find and open member profile
Look at navigation cards on the left
Click Buybacks/Makeups navigation card
Click the Makeup subsection
Makeup page displays

What you'll see:

List of existing makeups (if any)
"+ Makeup" button
Makeup history table
Step 2: Start New Makeup Calculation
Click + Makeup button
Makeup History Add dialog opens
Step 3: Enter Service Period and Basic Information

The Makeup History Add window contains the following fields:

Basic Information Section:

Service Begin Date (Required)

First date of missed period
Format: MM/DD/YYYY
Example: 01/01/2020

Service End Date (Required)

Last date of missed period
Format: MM/DD/YYYY
Example: 12/31/2020
Must be greater than Service Begin Date

💡 Tip: Can be as short as one pay period or as long as several years

Purchase Date (Required)

Date the makeup purchase takes place
Format: MM/DD/YYYY
Typically today's date or a future date

Makeup Type (Required)

Select reason from dropdown
Common types:
Regular Interest Rates
Buyback Interest Rates
Corrections Interest
Other types as configured

Investment Return (Conditional)

Required when Makeup Type is "Buyback Interest Rates"
Select investment return assumption percentage
Example: 7.625%

Full or Partial (Conditional)

Required for certain makeup types (e.g., Buyback Interest Rates)
Indicates whether to use full or partial interest rate
Options: Full or Partial

Pending/Posted (Auto-set)

Automatically set to "Pending" for new calculations
Disabled in add mode

Service Board (Required)

Select the board that the service was accrued at
Searchable dropdown

Current Year Interest Months (Conditional)

Required for Corrections Interest type
Enter number of interest months for current year
Range: 0-12

Service Years (Optional)

Number of years of service for the period
System will auto-calculate from dates if left blank

Service Months (Optional)

Number of months of service for the period
System will auto-calculate from dates if left blank
Step 4: Enter Earnings Information

Year Details Section:

For each year in the makeup period, you must enter:

Year (Required for first row)

Calendar year (e.g., 2020)
Format: YYYY
Range: 1900-2999

Interest Months (Conditional)

Number of months to apply interest
Required for first row when Makeup Type is "Regular Interest Rates"
Range: 0-12

Earnings (Required for first row)

Total earnings for that year
Enter dollar amount
Example: $45,000.00

Contribution Rate (Required for first row)

Select or enter contribution rate code
Searchable dropdown with autocomplete
Example: "5", "7", etc.

Adding Multiple Years:

Click + Year Row button to add additional rows
Up to 20 years can be entered
Click trash icon to remove a row (minimum 1 row required)

💡 Note: Only the first year row is required. Additional rows are needed only if the makeup period spans multiple years or requires year-by-year breakdown.

Step 5: Run Makeup Calculation
Review all entered information for accuracy
Click Calculate button
System processes the calculation
If successful, calculation results display

What the system calculates:

Total Deductions — The total deduction amount due from the member, based on the earnings and contribution rates entered.

Total 2% — The total incremental (annuity savings) deduction amount due from the member.

Total Interest — The total interest amount due, calculated based on the selected Makeup Type and how much time has passed since the missed contributions.

Makeup Amount — The final amount the member must pay to purchase the service:

Total Deductions + Total 2% + Total Interest = Makeup Amount


💡 Note: Interest rates used in the calculation are determined by the Makeup Type selected (Regular Interest Rates, Buyback Interest Rates, or Corrections Interest).

Step 6: Review Total Cost

Makeup Cost Breakdown:

Total Deductions:        $1,500.00
Total 2%:                  $300.00
Total Interest:            $300.00

Makeup Amount:           $2,100.00


Verify:

Dates are correct
Earnings amount is reasonable
Interest calculation looks right
Total makes sense
All required fields completed
Step 7: Service Credit Calculation

Service credit earned:

Service Credit = (End Date - Start Date) ÷ 365

Example:
Jan 1, 2020 to Dec 31, 2020 = 365 days
365 ÷ 365 = 1.000 years of service credit


What member receives:

Service credit for the period
Contributions added to account
Time counts toward retirement eligibility
May affect benefit calculation
Step 8: Save Calculation

After reviewing the calculation:

If calculation looks correct, close the dialog
Calculation is automatically saved as "Pending"
Record appears in Makeup history table
Can reopen to view or edit

💡 Note: The "Calculate" button in add mode both calculates AND saves the makeup record. You don't need a separate save step.

Status after calculation:

Pending: Calculated but not posted
Member can review quote
Can be edited or deleted if needed
Step 9: Provide Quote to Member

Generate makeup quote:

Open the saved makeup record from history table
Look for Makeup Worksheet button
Quote/worksheet shows:
Service period
Cost breakdown
Service credit to be earned
Print or generate report for member

Member reviews and decides:

Accept and arrange payment
Decline (no obligation)
Request more time
Ask questions
Step 10: Post Makeup (When Member Accepts)

When member agrees to purchase:

Open the makeup record (click on it in history table)
Makeup History Edit dialog opens
Review the calculation
Click Post button
Confirm the posting action
System updates status to "Posted"
Service credit automatically awarded
Contributions added to member account
Status History and Service History records created

What posting does:

Changes Pending/Posted flag to "Posted"
Updates Annuity Savings screen
Writes Buyback status record to Status History
Creates new Service History record
Finalizes the makeup transaction

After posting:

Record payment in payment tracking system
Process actual payment (check, transfer, etc.)
Update member's account balance
Provide confirmation to member

See
Create Manual Contribution Register
for recording the actual payment/contribution.

Calculation Components

The system calculates four components after you click Calculate. These are displayed in the Calculation Results section of the Makeup History dialog.

Total Deductions

What it is: The total deduction amount due from the member.

This represents the sum of the contributions that should have been deducted from the member's compensation during the make-up period. It is calculated based on the earnings and contribution rates entered for each year in the Year Details section.

Total 2%

What it is: The total incremental deduction amount due from the member.

This represents the incremental (annuity savings) portion of the contributions owed for the make-up period — sometimes referred to as the 2% deduction. It is computed separately from the standard deduction and reflects the annuity reserve component.

Total Interest

What it is: The total interest amount due from the member.

Interest is charged because the contributions were not made when they were due. The interest rate and method used depend on the Makeup Type selected (Regular Interest Rates, Buyback Interest Rates, or Corrections Interest). A longer period between the missed contributions and the purchase date results in higher interest.

Makeup Amount

What it is: The total amount the member must pay to purchase the creditable service.

The Makeup Amount is calculated by the system and is not entered by the user. It is the sum of Total Deductions, Total 2%, and Total Interest:

Total Deductions + Total 2% + Total Interest = Makeup Amount


This is the figure quoted to the member and collected as payment before the record is posted.

Common Scenarios
Scenario 1: Short Period Makeup (3 Months)

Situation: Member wasn't enrolled for first 3 months of employment

Details:

Period: Jan 1 - Mar 31, 2024
Earnings: $15,000
Contribution Rate: 5%
Interest: Minimal (recent)

Calculation:

Open member makeup section (Buybacks/Makeups → Makeup)
Click + Makeup
Service Begin Date: 01/01/2024
Service End Date: 03/31/2024
Purchase Date: Today's date
Makeup Type: Select appropriate type
Service Board: Select member's board
Year 1:
Year: 2024
Interest Months: 3
Earnings: $15,000
Contribution Rate: Select "5" or appropriate rate
Click Calculate
System calculates:
Total Deductions: $750
Total Interest: ~$15 (3 months)
Makeup Amount: ~$765
Service credit: 0.25 years
Close dialog (auto-saves)
Generate quote using Makeup Worksheet

Result: Member pays $765, receives 0.25 years credit

⏱️ Time: 10 minutes

Scenario 2: Multi-Year Makeup

Situation: Member on unpaid leave 2019-2021, wants to purchase time

Details:

Period: Jan 1, 2019 - Dec 31, 2021 (3 years)
Estimated earnings: $150,000 total
Contribution Rate: 6%
Interest: Substantial (3+ years)

Calculation:

Open makeup section (Buybacks/Makeups → Makeup)
Click + Makeup
Service Begin Date: 01/01/2019
Service End Date: 12/31/2021
Purchase Date: Today's date
Makeup Type: Select appropriate type
Service Board: Select board
Enter earnings by year:
Year 1 (2019): Year=2019, Earnings=$50,000, Contribution Rate
Click + Year Row
Year 2 (2020): Year=2020, Earnings=$50,000, Contribution Rate
Click + Year Row
Year 3 (2021): Year=2021, Earnings=$50,000, Contribution Rate
Enter interest months for each year as appropriate
Click Calculate
System calculates:
Total Deductions: ~$9,000
Total Interest: ~$1,400 (3 years)
Makeup Amount: ~$10,400
Service credit: 3.00 years
Discuss payment options with member
Close dialog to save

Result: Member can purchase 3 years for ~$10,400

⏱️ Time: 20 minutes

Scenario 3: Payroll Error Correction

Situation: Payroll underdeducted $50/month for 2 years

Details:

Period: Jan 2022 - Dec 2023
Total shortage: $50 × 24 = $1,200
Member has proof of error

Calculation:

Open makeup section (Buybacks/Makeups → Makeup)
Click + Makeup
Service Begin Date: 01/01/2022
Service End Date: 12/31/2023
Purchase Date: Today's date
Makeup Type: Select appropriate type (e.g., Corrections Interest)
Service Board: Select board
Enter data for 2 years:
Year 1 (2022): Total shortage for year
Year 2 (2023): Total shortage for year
Click Calculate
System calculates interest on shortage
Total: ~$1,260 with interest
Service credit: Member already has credit, just correcting contribution shortage
Close dialog to save and coordinate payment

Result: Member pays shortage + interest, account corrected

⏱️ Time: 15 minutes

Scenario 4: Pre-Purchase Estimate

Situation: Member considering purchasing, wants cost estimate first

Steps:

Run makeup calculation as normal
Enter prospective dates and information
Use estimated earnings if needed
Click Calculate to see cost
Generate Makeup Worksheet for quote
Close dialog (saves as Pending)
Member takes time to decide
If accepts: Reopen record and click Post
If declines: Can delete the pending record

Result: Member has informed decision about cost

⏱️ Time: 10 minutes

Best Practices

✅ DO:

Verify service period dates carefully
Use actual earnings when available
Document estimation methods
Explain calculation to member clearly
Provide written quote
Give member time to decide
Check eligibility requirements
Verify interest calculation method
Keep detailed records
Coordinate with payroll for earnings data

❌ DON'T:

Rush calculations (accuracy critical)
Use incorrect date ranges
Forget to include interest
Post before payment received
Assume member will purchase
Use wrong contribution rates
Skip documentation
Forget about employer portion (if applicable)
Post makeup without authorization
Promise specific service credit without calculation

💡 PRO TIPS:

Create makeup quote template for consistency
Keep interest rate table handy
Use calculator to verify system calculations
Review similar makeups for comparison
Coordinate timing of purchase for member benefit
Consider tax implications (advise member to consult tax professional)
Document why makeup is being offered
Get supervisor approval for large makeups
Keep copy of quote with payment documentation
Common Questions

Q: How far back can a member purchase makeups? A: Varies by plan rules. Some limit to 5-10 years, others allow full employment history. Check your plan documents.

Q: Can a member decline to purchase makeups? A: Usually yes. Makeups are typically optional, not mandatory. Member decides if cost is worth it.

Q: Does the member pay employer portion too? A: Depends on plan rules. Some require full cost (employee + employer), others only employee portion.

Q: How is interest rate determined? A: Set by plan rules/board. Usually tied to investment return assumptions or regulatory requirements.

Q: Can makeup cost change after quote provided? A: Interest continues accruing daily. Quote may have expiration date. Recalculate if significant time passes.

Q: What if member can't afford lump sum? A: Check if plan allows installment payments. Spread cost over time. Interest may continue accruing on balance.

Q: Do makeups affect retirement benefit? A: Yes! Purchased service credit counts toward eligibility and may increase benefit amount.

Q: Can member use refunded contributions to pay makeup? A: Sometimes! If member took refund and was rehired, buyback of refunded service is similar process.

Q: What if earnings records don't exist? A: Use best available estimate: current salary adjusted for time, inflation, position. Document method clearly.

Q: Is makeup cost tax-deductible? A: Tax question - advise member to consult tax professional. May depend on pre-tax vs. post-tax treatment.

Troubleshooting
Issue: Interest amount seems too high

Solutions:

Verify interest rate being used (check plan documents)
Check number of years since period
Verify compounding method (annual vs. other)
Compare to similar makeups
Have supervisor review calculation
Consider if actuarial vs. regular interest
Issue: Service credit doesn't calculate correctly

Solutions:

Verify date range entered correctly
Check for gaps or overlaps with existing credit
Ensure dates are in right order (start before end)
Review any partial period rules
Check if system auto-calculates or needs manual entry
Issue: Can't find earnings information

Solutions:

Check payroll historical records
Contact payroll department
Review member's W-2 forms for years
Use union contract salary schedules
Estimate based on position/grade
Document estimation method clearly
Issue: Member disputes calculation

Solutions:

Review calculation step-by-step with member
Explain principal vs. interest clearly
Show how interest compounds over time
Provide comparison to current salary
Offer recalculation if errors found
Escalate to supervisor if needed
Issue: Makeup quote expired, need new quote

Solutions:

Open original makeup calculation
Update purchase date to today
System recalculates interest
Generate new quote
Explain increased cost due to time passage
Related Tasks
Process a Buyback
Review Contribution History
Create Manual Contribution Register
Upload Contributions

Last Updated: January 2026

← Back to Contributions
|
Next: Process Buyback →

ON THIS PAGE
What This Does
Understanding Make-Ups
What Are Make-Ups?
Make-Ups vs. Buybacks
Quick Steps
Step-by-Step Instructions
Step 1: Navigate to Member's Makeup Section
Step 2: Start New Makeup Calculation
Step 3: Enter Service Period and Basic Information
Step 4: Enter Earnings Information
Step 5: Run Makeup Calculation
Step 6: Review Total Cost
Step 7: Service Credit Calculation
Step 8: Save Calculation
Step 9: Provide Quote to Member
Step 10: Post Makeup (When Member Accepts)
Calculation Components
Total Deductions
Total 2%
Total Interest
Makeup Amount
Common Scenarios
Scenario 1: Short Period Makeup (3 Months)
Scenario 2: Multi-Year Makeup
Scenario 3: Payroll Error Correction
Scenario 4: Pre-Purchase Estimate
Best Practices
Common Questions
Troubleshooting
Issue: Interest amount seems too high
Issue: Service credit doesn't calculate correctly
Issue: Can't find earnings information
Issue: Member disputes calculation
Issue: Makeup quote expired, need new quote
Related Tasks