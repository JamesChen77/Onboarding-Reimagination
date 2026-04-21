# Reset User Password

> **Source:** [https://dev.pensiontech.io/documentation/11-System-Administration/Reset-User-Password](https://dev.pensiontech.io/documentation/11-System-Administration/Reset-User-Password)

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
Reset User Password
Reset User Password

Learn how to reset passwords for system users through the administration interface.

Overview

The password reset functionality allows administrators to send password reset emails to users who have forgotten their passwords or need to update their credentials. This feature uses secure email-based password reset links that allow users to set new passwords.

Administrative Permission Required: User management privileges

Access the Feature
Navigate to Administration from the main menu
Click on User Profiles
The User Profile management screen displays all system users with filtering and search capabilities
Search for the User
Use the filter panel at the top to search by:
First Name
Last Name
Email
Click Apply Filters to narrow results
Or scroll through the paginated list to find the user (default: 100 users per page)
Reset a User's Password
Step 1: Open User Profile
Locate the user in the list
Click the Edit icon (pencil) in the Actions column
The User Profile modal opens
Step 2: Send Reset Email
In the User Profile section, locate the Reset Password section
Note: This option only appears for admin users editing other users (not your own profile)
Click the Send Reset Password Email button
A confirmation toast notification appears: "Reset password email sent successfully"
What the User Receives

The user will receive an email at their registered email address containing:

A secure password reset link
Instructions for resetting their password
Link expiration information
Important Security Notes
Email Requirements
The user must have a valid email address in their profile
The email must be accessible to the user
Reset links expire after a set time period for security
Who Can Reset Passwords

✅ Can Reset:

Administrators with user management privileges
Administrators can reset passwords for all other users

❌ Cannot Reset:

Regular users cannot reset other users' passwords
Users cannot send reset emails to themselves (use "My Profile" instead)
Password Requirements

When users click the reset link and set a new password, they must meet:

Minimum password length requirements
Complexity requirements (uppercase, lowercase, numbers, special characters)
Cannot reuse recent passwords
Alternative: User Self-Service

Users can also reset their own passwords without administrator help:

On the login screen, click Forgot Password
Enter their email address
Follow the instructions in the reset email
Profile vs Password Reset
Feature	My Profile	Admin Reset
Access	Users edit their own profile	Admins edit other users
Password	Change current password	Send reset email link
Email	Cannot change	Cannot change (read-only)
Services	Cannot modify	Can modify (admin only)
Roles	Cannot modify	Can modify (admin only)
Troubleshooting
User Didn't Receive Email
Verify email address in the user profile is correct
Check spam/junk folder for the reset email
Wait a few minutes - email delivery may be delayed
Resend the reset email if necessary
Reset Link Expired
Send a new reset password email
Links expire after a set time period for security
User must use the most recent reset link
User Still Cannot Log In

After password reset:

Verify the user account is Active (toggle in user profile)
Check that user has appropriate Services & Access configured
Verify Roles & Permissions are assigned
Ensure user is assigned to at least one tenant
Related Topics
Customize User Profile Settings - Complete user management
Navigate Member Directory - General navigation
Best Practices

✅ Do:

Verify the email address before sending reset link
Inform the user to check their email (including spam folder)
Document password reset requests for audit purposes
Reset passwords immediately when accounts are compromised

❌ Don't:

Share reset links with others
Use reset links to bypass security protocols
Set passwords on behalf of users (use reset email instead)
Leave inactive accounts with valid credentials
Notes
All password reset actions are logged in the system audit trail
Users maintain their existing roles, permissions, and service access after password reset
Password reset does not affect user profile information
If a user has multiple failed password reset attempts, contact system support

Related Documentation:

Customize User Profile Settings
Login to PensionPro
ON THIS PAGE
Overview
Access the Feature
Search for the User
Reset a User's Password
Step 1: Open User Profile
Step 2: Send Reset Email
What the User Receives
Important Security Notes
Email Requirements
Who Can Reset Passwords
Password Requirements
Alternative: User Self-Service
Profile vs Password Reset
Troubleshooting
User Didn't Receive Email
Reset Link Expired
User Still Cannot Log In
Related Topics
Best Practices
Notes