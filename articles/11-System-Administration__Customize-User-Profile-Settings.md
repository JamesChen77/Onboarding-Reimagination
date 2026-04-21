# Customize User Profile Settings

> **Source:** [https://dev.pensiontech.io/documentation/11-System-Administration/Customize-User-Profile-Settings](https://dev.pensiontech.io/documentation/11-System-Administration/Customize-User-Profile-Settings)

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
Customize User Profile Settings
Customize User Profile Settings

Learn how to create, edit, and manage user profiles including roles, permissions, services, and tenant access.

Overview

User profiles control access to the PensionPro system. Administrators can create new users, assign roles and permissions, configure service access, and manage tenant assignments. Each user profile includes personal information, authentication settings, and granular access controls.

Administrative Permission Required: User management privileges (Admin or Super Admin role)

Access User Management
Navigate to Administration from the main menu
Click on User Profiles
The User Profile List displays with:
User ID
Username (email)
First Name / Last Name
Group Name (roles)
Active status
Action buttons
Create a New User
Step 1: Initiate User Creation
Click + User button (top right)
The User Profile modal opens in "Create New User" mode
Step 2: Enter User Information

Profile Section:

Profile Picture (optional)

Click the placeholder to upload a photo
Supported formats: JPG, PNG, GIF
Click Upload to select file
Or click Remove to delete existing photo

First Name (required)

Enter user's first name

Last Name (required)

Enter user's last name

Email (required)

Enter valid email address
This becomes the username
Must be unique in the system
Cannot be changed after creation

Phone Number (optional)

Format: (XXX) XXX-XXXX
Auto-formatted as you type

Active User (toggle)

Enable: User can log in
Disable: User cannot log in (account suspended)
Step 3: Configure Services & Access

Navigate to the Services & Access tab:

Available Services:

Admin - Administrative access
ESS (Employee Self Service) - Member portal access
Reporting - Report generation access
Additional services based on system configuration

For Each Service:

Enable Service

Toggle the service checkbox to enable

Tenant Access

Option A: Access to All Tenants

Check "Access to All Tenants"
User can work with all retirement systems

Option B: Specific Tenant Access

Uncheck "Access to All Tenants"
Click + Tenant button
Select specific tenants from the list
Assigned tenants appear as cards with:
Tenant name
Active/Inactive status
Remove button

ESS Member Access (ESS service only)

 

For each assigned tenant:

All Member Access

Check this box for full member access
User can view/edit all members in the tenant

Specific Member Access

Leave "All Member Access" unchecked
Click + Member button
Search for and select specific members
Assigned members display with:
Member name
Remove button

Removing Access:

Click Remove button on tenant card to remove tenant access
Click × on member to remove specific member access
Step 4: Assign Roles & Permissions

Navigate to the Roles & Permissions tab:

Available Roles:

Admin - Full administrative access
SuperAdmin - Complete system access
User - Standard user access
ReadOnly - View-only access
Additional custom roles

For Each Role:

Check the role checkbox to assign
View associated privileges displayed below role name
Multiple roles can be assigned to one user

Common Privilege Examples:

Member.Read - View member records
Member.Write - Edit member records
Payment.Process - Process payments
Reports.Generate - Run reports
Step 5: Save the User
Review all entered information
Click Create button (bottom right)
Success message appears: "User created successfully"
User receives welcome email with login instructions
Edit an Existing User
Step 1: Locate the User
Use filters to search by:
First Name
Last Name
Email
Click Apply Filters
Or browse the paginated list
Step 2: Open User Profile
Click the Edit icon (pencil) in the Actions column
The User Profile modal opens in "Edit User Profile" mode
Step 3: Modify Information

You can update:

✅ First Name
✅ Last Name
✅ Phone Number
✅ Profile Picture
✅ Active Status
✅ Services & Access
✅ Roles & Permissions
❌ Email (read-only after creation)

Note: Email addresses cannot be changed after user creation for security and audit purposes.

Step 4: Save Changes
Click Save button (bottom right)
Success message appears: "User updated successfully"
Changes take effect immediately
Manage Your Own Profile

Users can edit their own profile with limited options:

Access My Profile
Click your profile picture or name (top right)
Select My Profile from dropdown
Or navigate to Administration > User Profiles and edit your own record
Available Options

In "My Profile" mode, you can:

✅ Update First Name
✅ Update Last Name
✅ Update Phone Number
✅ Change Profile Picture
❌ Cannot change Active Status
❌ Cannot modify Services & Access
❌ Cannot modify Roles & Permissions
❌ Cannot send password reset to self

To Change Password:

Use the main menu profile dropdown
Select Change Password
Follow the password change workflow
Delete a User
Security Warning

⚠️ Deleting a user is permanent and cannot be undone.

Steps to Delete
Open the user's profile (click Edit icon)
Click the Delete button (bottom left, red)
Confirm deletion in popup dialog
Success message appears: "User deleted successfully"
What Happens
User account is permanently removed
User can no longer log in
Audit trail preserves historical actions by this user
User's work history in member records is preserved
Alternative: Deactivate Instead

Consider deactivating instead of deleting:

Edit the user profile
Toggle Active User to OFF
User cannot log in but account is preserved
Can be reactivated later if needed
Filter and Search Users
Available Filters
First Name - Partial match search
Last Name - Partial match search
Email - Partial match search
Using Filters
Enter criteria in filter fields (top of list)
Click Apply Filters
Results update based on criteria
Click Reset to clear all filters
Sorting

Click column headers to sort by:

User ID
Username
First Name
Last Name
Group Name
Active Status
User Account Status Indicators
Active Users
✅ Green checkmark in Active column
Can log in to system
All assigned services available
Inactive Users
❌ Red X or empty checkbox in Active column
Cannot log in to system
Account preserved for reactivation
Service and Tenant Architecture
Understanding Services

Service = A major system module/application:

Admin - Administrative functions
ESS - Member self-service portal
Reporting - Report generation
Understanding Tenants

Tenant = A retirement system organization:

Multiple retirement systems can exist in one installation
Each tenant has its own data and members
Users can access one or more tenants
Access Control Hierarchy
User
  └── Service (Admin, ESS, Reporting)
        └── Tenant (Retirement System A, B, C)
              └── Members (All or Specific) [ESS only]

Examples

Example 1: Internal Administrator

Services: Admin (All Tenants)
Access: Can administer all retirement systems

Example 2: Retirement System Staff

Services: Admin (Specific Tenant: "City Employees")
Access: Can only administer City Employees retirement system

Example 3: ESS User (Member Portal)

Services: ESS (Specific Tenant: "Police & Fire")
Members: Specific member access (can only view their own record)
Best Practices

✅ Do:

Assign minimum necessary permissions (principle of least privilege)
Use role-based access control (roles, not individual permissions)
Regularly review user access rights
Deactivate users immediately when they leave the organization
Use meaningful, professional profile pictures
Keep email addresses current for password resets
Document why users have specific access levels

❌ Don't:

Create shared accounts (each person should have their own)
Give all users SuperAdmin access
Leave inactive users as "Active"
Assign services/tenants users don't need
Delete users when deactivation is sufficient
Use personal email addresses for system accounts
Troubleshooting
User Cannot Log In

Check in this order:

✅ Account is Active
✅ Email address is correct (this is the username)
✅ Password is correct (consider reset if needed)
✅ At least one Service is enabled
✅ User has at least one Tenant assigned
✅ User has appropriate Roles assigned
User Cannot See Expected Features

Check:

✅ Service is enabled for that feature area
✅ User has access to the relevant tenant
✅ User's roles include necessary privileges
✅ Feature flags are enabled (system settings)
Cannot Save User Profile

Common issues:

❌ Required fields missing (First Name, Last Name, Email)
❌ Email already exists in system
❌ Invalid email format
❌ No roles assigned (at least one required)
❌ No services assigned (at least one required)
Related Topics
Reset User Password - Password reset process
Login to PensionPro - User login
Notes
All user profile changes are logged in the system audit trail
Loading states appear when fetching services, tenants, and member details
User profiles support drag-and-drop for reordering display elements
Email addresses are used as unique usernames across the system
Profile pictures are stored securely and optimized for display

Related Documentation:

Reset User Password
Access Settings Screens
Login to PensionPro
ON THIS PAGE
Overview
Access User Management
Create a New User
Step 1: Initiate User Creation
Step 2: Enter User Information
Step 3: Configure Services & Access
Step 4: Assign Roles & Permissions
Step 5: Save the User
Edit an Existing User
Step 1: Locate the User
Step 2: Open User Profile
Step 3: Modify Information
Step 4: Save Changes
Manage Your Own Profile
Access My Profile
Available Options
Delete a User
Security Warning
Steps to Delete
What Happens
Alternative: Deactivate Instead
Filter and Search Users
Available Filters
Using Filters
Sorting
User Account Status Indicators
Active Users
Inactive Users
Service and Tenant Architecture
Understanding Services
Understanding Tenants
Access Control Hierarchy
Examples
Best Practices
Troubleshooting
User Cannot Log In
User Cannot See Expected Features
Cannot Save User Profile
Related Topics
Notes