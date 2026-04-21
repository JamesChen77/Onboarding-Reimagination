# Monitor Background Processes in Batch Queue

> **Source:** [https://dev.pensiontech.io/documentation/11-System-Administration/Monitor-Background-Processes-in-Batch-Queue](https://dev.pensiontech.io/documentation/11-System-Administration/Monitor-Background-Processes-in-Batch-Queue)

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
08. REPORTS AND ANALYTICS
09. COMMUNICATIONS AND MEMBER ENGAGEMENT
10. BATCH PROCESSING AND OPERATIONS
11. SYSTEM ADMINISTRATION
Overview
Customize User Profile Settings
Reset User Password
Customize Dashboard and Display Settings
Configure Extendable Data Fields
Manage Banks and Vendors
Add Missing Code Prefixes to Payment Deduction Descriptions
Update Retirement System Logo
Update News and Announcements
Monitor Background Processes in Batch Queue
Utilize Enhanced Global Search
Documentation
chevron_right
System Administration
chevron_right
Monitor Background Processes in Batch Queue
Monitor Background Processes in Batch Queue

Learn how to monitor, track, and manage background jobs and batch processes through the system's batch queue interface.

Overview

The Batch Queue displays all background processes running in PensionPro, including report generation, payroll processing, contribution imports, and other long-running operations. Monitor job status, view details, cancel jobs, and troubleshoot issues through the batch queue interface.

Access Level: Available to all users (displays jobs relevant to user's permissions)

Understanding the Batch Queue
What is the Batch Queue?

The batch queue is a system for managing asynchronous operations that:

Run in the background without blocking the user interface
Process large datasets or complex calculations
Generate reports and exports
Execute scheduled tasks
Handle time-consuming operations
Job Status Types
Status	Icon	Description	Action Available
Queued	⏳ Hourglass	Waiting to start	Can cancel
Processing	⚙️ Spinner	Currently running	Can cancel
Completed	✓ Check	Finished successfully	View results
Error	⚠️ Warning	Failed with errors	View error details
Canceled	✖ Ban	User canceled	View details
Job Module Types

Jobs are categorized by system module:

Module	Code	Description
Reports	1	Report generation
Payroll	2	Retiree payroll processing
Contributions	3	Contribution imports and posting
3(8)(c)	4	Special calculations
Accounting	5	Accounting processes
YEP	6	Year-end processing
COLA	7	Cost of living adjustments
Utility	8	System utilities
Access Batch Queue
From Dashboard Widget
View the Batch Queue widget on the dashboard
Shows recent jobs (limited list)
Click on job row to view details
Click View All to navigate to full Batch Center
From Batch Center
Navigate to Batch from the main menu
Or click Batch Center in navigation
Full batch queue displays with:
All jobs for user
Filtering options
Sorting capabilities
Pagination controls
From System Header
Click Background Jobs icon (top right, if available)
Dropdown shows recent jobs
Click job to view details
Click "View All Jobs" to open Batch Center
View Job Details
Job List Information

Each job in the queue displays:

Job Identification:

Job ID (unique identifier)
Module name (Reports, Payroll, Contributions, etc.)
Method name (specific operation)
Posting number (for contributions)

Status Information:

Current status (icon and text)
Progress indicator (if available)
Start time
End time (if completed)
Duration

Actions:

View details button
Cancel button (if applicable)
Navigate to results button (if applicable)
Open Job Details Modal
Click on any job row in the list
Or click the View Details icon
The Batch Job Detail modal opens

Detail Information:

Job Summary:

Process name (job type/method name)
Process ran by (user who initiated)
Completed On (timestamp for completed jobs)
Current status with icon

Progress:

Status badge with icon
Status text (Queued, Processing, Completed, Error, Canceled)
For running jobs: "Job is currently running" message
For completed jobs: Success or error indicators

Batch Results (Information, Warnings & Errors):

Table showing messages from the batch job
Message column: Detailed text of each message
Severity column: Information, Warning, or Error badges
Filter by severity dropdown
Pagination controls (10, 25, 50, 100 per page)

Actions Available:

Cancel Job button (if job is queued or processing)
Close modal button

Note: The Batch Job Detail modal does not display Job ID, Start Time, or Duration fields as originally documented. It focuses on the process name, status, who ran it, completion time (for completed jobs), and the batch results messages.

Monitor Jobs in Real-Time
Auto-Refresh

The batch queue automatically refreshes:

Every 10-15 seconds (typical)
Shows real-time status updates
Updates progress indicators
Displays new jobs as they're queued

Processing Job Indicators:

Animated spinner icon
"In Progress" status text
Progress bar (if supported)
Estimated time remaining (if available)
Manual Refresh

To manually refresh:

Click Refresh button (if available)
Or reload the page (F5)
Dashboard widget refreshes with page
Navigate to Job Results
Completed Jobs

When a job completes successfully:

For Reports:

Click the completed job row
Job details display in the Batch Job Detail modal
Navigate to Reports Center to view/download the report
Reports are accessible through the Reports Center, not directly from the batch detail modal

Note: There is no "Download Report" button in the Batch Job Detail modal. Reports are accessed through the Reports Center.

For Payroll:

Click the completed job row
View the Batch Job Detail modal for results
Navigate to payroll module to see processed data
The modal does not automatically redirect to payroll screens

For Contributions:

Click the completed job row
View the Batch Job Detail modal
Navigate to contributions module to review results
The modal does not automatically redirect

General Navigation: The Batch Job Detail modal displays process information and batch results (messages, warnings, errors), but does not automatically navigate to module-specific screens. Users must manually navigate to the relevant module to view the detailed results of the job.

Cancel Running Jobs
When to Cancel

Cancel jobs when:

Job was started by mistake
Incorrect parameters were used
Process is taking too long
Need to make changes before completion
System resources are needed for other tasks
How to Cancel

Cancel from Batch Queue:

Find the job in the queue
Status must be "Queued" or "Processing"
Click the Cancel button (× icon or text)
Confirm cancellation in popup dialog
Job status changes to "Canceled"
Success message: "Job cancelled successfully"

Cannot Cancel:

Completed jobs (already done)
Errored jobs (already failed)
Previously canceled jobs
Jobs in final processing stage (some implementations)

Note: Canceling a job may leave partial results. Some processes support rollback, others may require manual cleanup.

After Cancellation
Job status shows as "Canceled"
Partial results may exist
Job can be restarted if needed
Error log shows cancellation reason
Troubleshoot Failed Jobs
Identify Failed Jobs

Failed jobs display:

⚠️ Error icon (yellow or red)
"Error" or "Errored" status text
Red highlighting (some implementations)
View Error Details
Click the failed job row
Review error information:
Error Message: User-friendly description
Technical Details: Stack trace (admins only)
Affected Records: Which records failed
Failure Point: Where in process it failed
Common Error Causes

Report Generation Errors:

Report template not found
Missing parameters
Data access permissions
Server resource limits
Database timeout

Payroll Processing Errors:

Invalid payroll configuration
Missing payment information
Calculation errors
Bank account validation failures
Check number conflicts

Contribution Import Errors:

Invalid file format
Data validation failures
Duplicate records
Missing required fields
File parsing errors

General Errors:

Network connectivity issues
Database connection failures
Insufficient permissions
System resource exhaustion
Timeout errors
Resolve and Retry

To Fix and Retry:

Review error message
Correct the underlying issue:
Fix data problems
Adjust parameters
Update configuration
Check permissions
Re-run the job:
Return to source module
Initiate process again with corrections
Monitor new job in batch queue

For Persistent Errors:

Contact system administrator
Check system logs
Review user permissions
Verify data integrity
Check system resources
Filter and Search Jobs
Filter Options

By Module:

Select specific module (Reports, Payroll, etc.)
View only jobs from that module

By Status:

Queued only
Processing only
Completed only
Errors only
Canceled only

By Date Range:

Today
Last 7 days
Last 30 days
Custom date range

By User: (administrators only)

Jobs created by specific user
All users (system-wide view)

Note: Verify which filters are available in the actual Batch Center UI. The documentation should reflect the implemented filters, not all possible filter options.

Search Jobs

Search by Job Name: Jobs can be searched by job name in the Batch Center.

Search Steps:

Enter search term in search box
Press Enter or click Search
Results filter to matches
Clear search to show all jobs

Note: The current implementation supports searching by Job Name. Other search capabilities (Job ID, Method name, Posting number, Keywords) may not be available.

Sort Jobs

Click column headers to sort by:

Start time (newest/oldest)
Status (alphabetical)
Module (alphabetical)
Duration (longest/shortest)
Batch Queue Best Practices

✅ Do:

Check batch queue before leaving for the day
Monitor long-running jobs periodically
Cancel jobs if you notice errors immediately
Review failed jobs and resolve issues
Keep track of important job completion times
Download reports promptly after generation
Clean up old job results regularly

❌ Don't:

Ignore errored jobs
Leave cancelled jobs without retry
Cancel jobs without understanding impact
Overwhelm system with too many simultaneous jobs
Refresh page constantly (auto-refresh is sufficient)
Delete job records (system manages cleanup)
Understanding Job Lifecycle
Typical Job Flow
1. Queued → Job created, waiting for resources
2. Processing → Job actively running
3. Completed → Job finished successfully
   OR
3. Error → Job failed with errors
   OR
3. Canceled → User cancelled job

Job Queue Management

Job Priorities:

Some jobs have higher priority
User-initiated jobs typically process first
System jobs may run during off-hours
Queue processes jobs in order when possible

Resource Management:

System limits concurrent jobs
Jobs queue when system is busy
Large jobs may take longer to start
Peak times may have longer queues
Dashboard Widget Configuration
Enable Batch Queue Widget
Click user dropdown (top-right) → Settings (admin only)
Find Batch Queue widget
Toggle ON to enable
Click Save
Widget appears on dashboard
Widget Display

The dashboard widget shows:

Last 5-10 jobs (configurable)
Real-time status updates
Quick job actions
Error notifications
Widget Customization
Show only errors (alert mode)
Show all jobs (monitoring mode)
Limit to specific modules
Configure refresh interval
Related Topics
Customize Dashboard and Display Settings - Dashboard widget configuration
Generate Custom Reports - Report generation jobs
Process Retiree Payroll - Payroll batch jobs
Upload Contributions - Contribution import jobs
Notes
Batch queue stores job history for configurable retention period (typically 30-90 days)
Completed job results may expire after retention period
Failed jobs remain visible for troubleshooting
System administrators see all jobs; users see only their own jobs
Some jobs support partial completion and resume
Job cancellation is logged in audit trail
Very long-running jobs (hours) may have progress checkpoints
System performance affects job processing speed
Multiple users can run jobs simultaneously
Job queue survives system restarts (jobs resume after restart)

Related Documentation:

Customize Dashboard and Display Settings
Generate Custom Reports
Upload Contributions
Process Retiree Payroll
ON THIS PAGE
Overview
Understanding the Batch Queue
What is the Batch Queue?
Job Status Types
Job Module Types
Access Batch Queue
From Dashboard Widget
From Batch Center
From System Header
View Job Details
Job List Information
Open Job Details Modal
Monitor Jobs in Real-Time
Auto-Refresh
Manual Refresh
Navigate to Job Results
Completed Jobs
Cancel Running Jobs
When to Cancel
How to Cancel
After Cancellation
Troubleshoot Failed Jobs
Identify Failed Jobs
View Error Details
Common Error Causes
Resolve and Retry
Filter and Search Jobs
Filter Options
Search Jobs
Sort Jobs
Batch Queue Best Practices
Understanding Job Lifecycle
Typical Job Flow
Job Queue Management
Dashboard Widget Configuration
Enable Batch Queue Widget
Widget Display
Widget Customization
Related Topics
Notes