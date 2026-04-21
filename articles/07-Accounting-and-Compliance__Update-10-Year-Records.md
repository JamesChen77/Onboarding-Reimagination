# Update 10-Year Records

> **Source:** [https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Update-10-Year-Records](https://dev.pensiontech.io/documentation/07-Accounting-and-Compliance/Update-10-Year-Records)

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
Update 10-Year Records
Update 10-Year Records
Overview

The 10-Year Records update is an annual maintenance process that archives historical member data and ensures long-term compliance with record-keeping requirements. This process creates permanent snapshots of member account information, service history, and financial data that may be needed for future benefit calculations, audits, and regulatory reporting.

Time Estimate: 30 minutes - 2 hours depending on member count Frequency: Annual (after year-end calculation population) User Role Required: System Administrator, Database Administrator

⚠️ Important: This process should only be run AFTER the annual calculation population is complete and verified.

Table of Contents
Prerequisites
Understanding 10-Year Records
When to Update 10-Year Records
Pre-Update Checklist
Run 10-Year Records Update
Verify Update Results
Best Practices
Troubleshooting
Prerequisites

Before updating 10-year records, ensure:

✅ Year-end calculation population is complete and verified
✅ All corrections from population have been processed
✅ Annual statements have been generated (optional but recommended)
✅ System backup is complete and verified
✅ Database has sufficient space for archival records
✅ Appropriate permissions are assigned to your user role
✅ Off-peak timing is scheduled to minimize impact
✅ IT support is available if needed
Understanding 10-Year Records
What are 10-Year Records?

The 10-Year Records system maintains a historical archive of member data for extended periods. It preserves:

Member Account Information:

Account balances by year
Contribution history
Interest credited
Account types and values

Service History:

Service credits earned
Service purchase records
Military service credit
Total creditable service

Compensation Data:

Annual compensation
Highest compensation years
Compensation for benefit calculations
Rate history

Demographic Information:

Member status changes
Employment history
Beneficiary designations
Important life events
Why Maintain 10-Year Records?

1. Regulatory Compliance:

PERAC requires specific record retention
IRS documentation requirements
State and federal audit requirements
Legal discovery obligations

2. Benefit Calculations:

Retirement benefit calculations may look back many years
Final average salary calculations
Service credit verification
Historical balance inquiries

3. Audit Support:

Historical data for auditors
Compliance verification
Benefit calculation audit trails
System of record validation

4. Member Services:

Historical balance statements
Service verification
Benefit estimate support
Research and inquiries
How 10-Year Records Work

Annual Snapshot:

Each year, the system creates a permanent snapshot:

Year: 2024
Member: 123456 - Smith, John
  Account Balances:
    - Regular Account: $52,500.00
    - Additional Account: $8,250.00
  Service Credits: 15.75 years
  Compensation: $85,000.00
  Status: Active

This snapshot is stored permanently and cannot be
modified (only recreated if errors found).


Data Structure:

10-Year Records Table
Member ID | Year | Account Type | Balance | Service | Status | ...
123456    | 2024 | Regular      | $52,500 | 15.75   | Active | ...
123456    | 2023 | Regular      | $50,000 | 14.75   | Active | ...
123456    | 2022 | Regular      | $47,500 | 13.75   | Active | ...
...and so on for 10+ years

When to Update 10-Year Records
Timing in Year-End Process

The 10-Year Records update fits into the year-end workflow:

Year-End Processing Timeline:

1. ✓ Fiscal Year Close
   └─ Complete all accounting entries

2. ✓ Year-End Calculation Population
   └─ Calculate interest and service

3. ✓ Verify Population Results
   └─ Review and correct any errors

4. ✓ Generate Annual Statements (optional)
   └─ Member statements for the year

5. → Update 10-Year Records ← YOU ARE HERE
   └─ Archive the year's data

6. ✓ Regulatory Reporting
   └─ PERAC, IRS, etc.

7. ✓ Begin New Fiscal Year
   └─ System ready for new year

Best Time to Run

✅ Optimal Timing:

After calculation population is verified
Before starting new fiscal year transactions
During system maintenance window
When IT support is available

✅ Recommended Schedule:

Time: Evening or weekend
Duration: Allow 2-3 hours
Day: When fewer users online
Coordination: Notify all stakeholders
Pre-Update Checklist
1. Verify Prerequisites Complete

✅ Calculation Population:

Navigation: Job Queue > Recent Jobs
Look for: "Year-End Calculation Population"
Status: Must show "Completed"
Result: All errors resolved


✅ Data Verification:

Run sample balance reports
Verify interest posted correctly
Check service credits updated
Review error resolution log

✅ System Status:

No active batch jobs
Database health check passed
Sufficient disk space
System performance normal
2. Create System Backup

🔴 CRITICAL: Full backup before proceeding

1. Navigate to System > Database > Backup
2. Select "Full Backup"
3. Enter description: "Pre-10YearUpdate-FY2024"
4. Click "Start Backup"
5. Wait for completion
6. Verify backup file created
7. Test restore capability (recommended)
8. Store backup off-site


Backup Checklist:

Full database backup complete
Backup verified
Backup stored securely
Restore procedure documented
Backup size confirmed adequate
3. Review Historical Records

✅ Check Prior Years:

Reports > System Reports > 10-Year Records Summary

Verify:
- All prior years present (FY2023, 2022, 2021, etc.)
- Record counts match member counts
- No gaps in years
- Data appears complete


✅ Sample Data Review:

Select 5-10 random members
Verify historical data is present
Check for any anomalies
Document any concerns
4. Notify Stakeholders

✅ Communication Plan:

To IT Team:

Subject: 10-Year Records Update - [Date/Time]
We will run the 10-Year Records update on [date]
at [time]. Process will take approximately [duration].
Please monitor system performance and be available
for support if needed.


To Users:

Subject: System Maintenance - Year-End Processing
The system will be running year-end archival processes
on [date] from [start time] to [end time]. System
access may be limited. Please complete critical work
before this time.


To Management:

Subject: Year-End Processing Status Update
Year-end calculation population is complete. We are
proceeding with the final step: 10-Year Records update.
Scheduled for [date/time]. Expected completion: [time].

Run 10-Year Records Update
Step 1: Access 10-Year Records Module

Navigation Options:

Option A: From Year-End Processing Center

Click Year-End Processing Center
Click Update Ten Year Record button

Option B: Direct Navigation

Click hamburger menu (☰) → Year-End Processing Center
Click Update Ten Year Record button
Step 2: Configure Update Parameters

The "Update Ten Year Record" modal contains a single required field:

Year (Required):

Enter the fiscal year just completed
Example: 2024 (for FY 2024)
Verification: Double-check this is correct
Warning: Cannot easily undo after execution
Minimum value: 1900
Maximum value: 2100

No Additional Parameters: The modal only provides the year configuration field. There are no options for member scope, data inclusion, processing options, or archive settings.

Step 3: Execute Update

Start the Process:

Enter the year in the modal
Click Update Record button
The process initiates a batch job directly

No Preview Screen: Unlike some other year-end processes, there is no intermediate preview or summary screen. Clicking "Update Record" immediately starts the batch job.

Batch Job Initiation:

Job begins processing in the background
You can monitor progress in the Batch Center
The modal closes after submission
Check the Batch Center for job status
Monitor Update Progress
View Job Status

Access Job Queue:

Navigate to Job Queue or Batch Processing
Locate job: "10-Year Records Update - FY 2024"

Status Display:

Job Details
──────────────────────────────────────────
Job ID: 10YR-2024-001
Type: 10-Year Records Update
Fiscal Year: 2024
Status: Processing

Progress
──────────────────────────────────────────
Records Created: 2,245 / 4,000 (56%)
Current Batch: 45 / 80
Processing Rate: 62 records/minute
Est. Completion: 21:38:00 (18 min remaining)

Statistics
──────────────────────────────────────────
Successful: 2,242
Warnings: 3
Errors: 0
Skipped: 0

[View Log] [View Warnings] [Refresh]

Monitor System Performance

What to Watch:

✅ Processing Rate:

Should be steady
Typical: 50-100 records/minute
Depends on data complexity

✅ Error Count:

Low errors acceptable (< 1%)
High errors suggest problem
Review errors as they occur

✅ System Resources:

CPU usage moderate
Disk I/O steady
Memory stable
Database responsive
Receive Notifications

Automated Alerts:

Email on completion
SMS for errors (if configured)
Dashboard notifications
Job queue updates
Verify Update Results
Step 1: Review Completion Summary

When job completes:

10-Year Records Update Complete
═══════════════════════════════════════════════════

Job ID: 10YR-2024-001
Completion Time: 08/15/2024 21:42:15
Duration: 42 minutes 15 seconds

Final Results
─────────────────────────────────────────────────
Total Records Processed: 4,000
Successfully Created: 3,997 (99.9%)
Warnings: 3 (0.1%)
Errors: 0 (0.0%)

Data Archived
─────────────────────────────────────────────────
Account Balance Records: 4,000
Service Credit Records: 4,000
Compensation Records: 3,850
Status Records: 4,000
Total Archive Size: 247 MB

Warnings Summary
─────────────────────────────────────────────────
- 3 members had incomplete compensation data
  (archived with available data)

[View Detailed Log] [View Archive Report] [Close]

Step 2: Run Verification Reports

Available Reports in Reports Center:

The following reports are available when searching for "10 year" in the Reports Center:

✅ 10 Year Eligibility Report:

Reports > Search "10 year eligibility"

Report Purpose:
- Shows members eligible for 10-year benefits
- Tracks eligibility status
- Helps identify members approaching 10-year milestones


✅ Ten Year Calc Error/Warns Report (Print):

Reports > Search "ten year calc"

Report Purpose:
- Displays calculation errors and warnings
- Helps identify data issues
- Supports troubleshooting

Report Shows:
- Members with calculation errors
- Warning messages from the update process
- Data validation issues


Note on Report Availability: The feedback indicates that reports such as "10-Year Records Summary", "Historical Data Validation", and "10-Year Trends" mentioned in the original documentation may not exist or may have different names. Always verify report availability in your Reports Center.

Step 3: Verify Sample Members

Manual Verification:

Select 10-15 sample members (mix of active, retired, inactive)
For each member, verify:
Member: 123456 - Smith, John
─────────────────────────────────────────
FY 2024 Archived Record:
  Balance: $52,500.00
  Service: 15.75 years
  Status: Active

Current Member Record:
  Balance: $52,500.00
  Service: 15.75 years
  Status: Active

✓ Match confirmed

Historical Records Present:
  FY 2024 ✓
  FY 2023 ✓
  FY 2022 ✓
  FY 2021 ✓
  ... (continuing back)

✓ All records present and accessible

Document verification results
Investigate any discrepancies
Step 4: Test Historical Data Access

Verify Data Accessibility:

✅ Historical Service Inquiry:

1. Navigate to Member > History > Service History
2. Select member and year
3. Verify service credits display
4. Check service detail available


✅ Other History Sections Available: The Member History sidebar includes the following sections:

Service History
Job History
Unit History
Deduction / Earnings History
Affidavit History

Note: There is no "Account Balance" option in the Member History sidebar as originally documented. Historical balance data may be accessed through other screens or reports.

✅ Report Generation:

1. Generate Historical Balance Statement (if available)
2. Select FY 2024
3. Select sample members
4. Verify report pulls archived data
5. Check report accuracy

Best Practices
Before Update

✅ Thorough Preparation:

Complete all verification checklists
Resolve known issues
Create backups
Schedule adequate time
Notify stakeholders

✅ Documentation:

Document current state
Note any concerns
List sample members for testing
Prepare contact lists

✅ Coordination:

Schedule with IT
Notify all departments
Plan communication
Arrange support coverage
During Update

✅ Monitoring:

Check progress regularly
Watch for errors
Monitor system performance
Be available for issues

✅ Communication:

Provide status updates
Report any problems immediately
Keep stakeholders informed
Document any incidents

✅ Support:

Have IT available
Keep vendor contact ready
Access to backup systems
Emergency procedures ready
After Update

✅ Verification:

Run all verification reports
Test sample members
Verify data accessibility
Document results

✅ Documentation:

Record completion time
Document any issues
Note statistics
Save all reports

✅ Communication:

Notify completion
Report any concerns
Update status boards
Inform next steps
Ongoing Maintenance

✅ Regular Reviews:

Quarterly archive size review
Annual retention policy review
Data accessibility testing
Performance monitoring

✅ Compliance:

Maintain retention schedule
Follow privacy policies
Support audit requirements
Document procedures
Troubleshooting
Issue: Update Fails to Start

Symptoms: Process won't initiate

Solutions:

Verify Prerequisites:

Check calculation population completed
Verify fiscal year is closed
Ensure parameters are valid
Check permissions

System Status:

Look for locks on tables
Check for running jobs
Verify database connectivity
Review system logs

Configuration:

Verify 10-year module enabled
Check archive settings
Review fiscal year configuration
Confirm data paths exist
Issue: High Error Rate During Processing

Symptoms: Many records failing to archive

Solutions:

Review Error Log:

Identify error patterns
Check specific error messages
Look for common members or data types
Analyze timing of errors

Data Quality:

Check for missing required data
Verify calculation population success
Review data integrity
Check for corrupted records

System Resources:

Verify adequate disk space
Check memory availability
Monitor database performance
Look for competing processes
Issue: Archived Data Doesn't Match Current

Symptoms: Verification shows discrepancies

Solutions:

Timing Issue:

Verify archive ran after population
Check if changes made post-population
Review transaction timestamps
Confirm effective dates

Data Source:

Verify pulling from correct tables
Check if population fully committed
Review staging vs. production data
Confirm no parallel processes

Correction Needed:

Document discrepancies
Determine correct values
May need to rerun archive
Update if within correction window
Issue: Cannot Access Historical Records

Symptoms: Historical queries fail or return no data

Solutions:

Archive Status:

Verify update completed successfully
Check archive tables exist
Review index status
Confirm data committed

Permissions:

Check user permissions for archive tables
Verify role access
Review security settings
Test with admin account

Query Issues:

Verify correct syntax
Check fiscal year format
Review filter parameters
Test with simpler query
Related Topics
Process Calculation Population for Year-End
Process Accounting Year-End Close
Generate General Ledger
Process 1099 Reports
Additional Resources
Training Scribes
Understanding 10-Year Records (8:45)
Running the Update Process (11:20)
Verifying Archive Results (6:30)
Help Articles
Record Retention Requirements
Historical Data Queries
Archive Maintenance
Troubleshooting Guide
Templates
Pre-Update Checklist
Verification Worksheet
Year-End Processing Timeline
Documentation Template

Document Version: 1.0 Last Updated: January 2025 Next Review: July 2025

ON THIS PAGE
Overview
Table of Contents
Prerequisites
Understanding 10-Year Records
What are 10-Year Records?
Why Maintain 10-Year Records?
How 10-Year Records Work
When to Update 10-Year Records
Timing in Year-End Process
Best Time to Run
Pre-Update Checklist
1. Verify Prerequisites Complete
2. Create System Backup
3. Review Historical Records
4. Notify Stakeholders
Run 10-Year Records Update
Step 1: Access 10-Year Records Module
Step 2: Configure Update Parameters
Step 3: Execute Update
Monitor Update Progress
View Job Status
Monitor System Performance
Receive Notifications
Verify Update Results
Step 1: Review Completion Summary
Step 2: Run Verification Reports
Step 3: Verify Sample Members
Step 4: Test Historical Data Access
Best Practices
Before Update
During Update
After Update
Ongoing Maintenance
Troubleshooting
Issue: Update Fails to Start
Issue: High Error Rate During Processing
Issue: Archived Data Doesn't Match Current
Issue: Cannot Access Historical Records
Related Topics
Additional Resources
Training Scribes
Help Articles
Templates