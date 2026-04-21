# How Do I Access Settings Screens?

> **Source:** [https://dev.pensiontech.io/documentation/01-Getting-Started/Access-Settings-Screens](https://dev.pensiontech.io/documentation/01-Getting-Started/Access-Settings-Screens)

---

DOCUMENTATION
00. READINESS JOURNEY
01. GETTING STARTED
Overview
Login to PensionPro
Understanding Layout and Navigation
Navigate Member Directory
Find and Use Help
Access Settings Screens
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
Documentation
chevron_right
Getting Started
chevron_right
Access Settings Screens
How Do I Access Settings Screens?

Category: Getting Started Time: 5 minutes Difficulty: ⭐ Beginner

⚠️ IMPORTANT: Settings access requires administrator permissions. If you don't see Settings in your user menu, you don't have admin access. Contact your administrator if you need access.

Related Topics:

Understanding the Layout
Customize Dashboard
What This Does

Shows you where system settings are located and how to access different configuration screens. Settings control how PensionPro+ works for your organization and are only accessible to users with administrator permissions.

Note: This guide covers system settings (admin only). For personal preferences like your profile and display name, see the "Personal Settings" section below.

Quick Steps

For Administrators:

Click your user profile icon (profile picture or name) in the top-right corner
Select Settings from the dropdown menu (only visible to admins)
Settings home screen opens showing all setting categories
All setting options are visible immediately - no need to click category names
Click directly on the specific setting you need
Make changes and save

For All Users (Personal Preferences):

Click your user profile icon (profile picture or name) in the top-right corner
Select My Profile from the dropdown menu
Update your personal information and preferences
Understanding Settings
Two Types of Settings

1. System Settings (Administrator Access Required)

Affect everyone in your organization
Control system-wide behavior
Examples: Interest rates, tax settings, system parameters
Requires: Administrator permissions
Access: User menu → Settings (only visible to admins)

2. Personal Profile Settings (All Users)

Affect only you
Control your personal information and preferences
Examples: Display name, email, profile picture, theme preference
Available to: All users
Access: User menu → My Profile

⚠️ Important: The Settings menu item is only visible to users with administrator permissions. If you don't see it, you don't have admin access. Personal preferences are available to all users via My Profile.

Step-by-Step Instructions
Step 1: Open Settings (Administrators Only)

Where to Go:

Look at the top-right corner of the screen
Click your user profile icon (profile picture or name)
Look for Settings in the dropdown
⚠️ If you don't see Settings: You don't have administrator permissions
Contact your system administrator if you need access
Click Settings
Settings home screen opens

What You'll See:

Settings home page with search functionality
Collapsible sections organizing settings into categories
All setting options are visible immediately - no additional clicks needed to see the full list
Step 2: Browse Setting Categories

Settings are organized into five main sections:

Payroll & Contributions

Retiree Payroll (annuity factors, tax tables, direct deposit)
Active Member Payroll (templates, field definitions)
Dues Processing (charge types, rates, configurations)
Deduction Engine (rules, columns, transformations)

Data Management

Look Up Tables (units, banks, departments, positions, payment deductions, etc.)
Extended Data Tables (custom data collection)
Dynamic Data Tables (tenant-scoped dynamic tables)

System Configuration

System Parameters (interest rates, wartime dates, scan settings, bank reconciliation)
Feature Flags (enable/disable application features)

Content & Communication

Letter Configuration (affidavit text, refund text, warrant text, etc.)
Report Management (report configurations, categories, signatures)
Content Management (recent news, announcements)

Administration

User, Tenant and Configuration Groups (user accounts, tenant profiles)
Utility Tools (maintenance tasks, payroll fixes, data corrections)

💡 Note: All setting options are visible immediately when you open Settings. You can expand/collapse sections by clicking the section headers.

Step 3: Access a Specific Setting

To open a setting screen:

All settings are visible on the Settings home screen
Click the section header to expand/collapse a category if needed
Click directly on the specific setting you want
Setting screen opens with breadcrumb navigation

Example:

Settings → Look Up Tables → Units
Settings → Retiree Payroll → AnnFact OptA
Settings → System Parameters → Deduction Interest Rates


💡 Tip: Use the search button in the page header to quickly find specific settings by name or keyword.

Step 4: Understanding Setting Screens

Common Elements on Setting Screens:

Tables:

Display current settings
Often sortable and searchable
Actions: Add, Edit, Delete

Forms:

Edit existing settings
Add new settings
Save/Cancel buttons

Tabs:

Multiple sections within one setting
Click tabs to switch sections
Personal Profile Settings (All Users)
Access Your Profile

To customize your personal information and preferences:

Click your name in the top-right corner
Select My Profile from dropdown
Profile dialog/window opens

What You Can Change:

First Name / Last Name
Email address
Phone number
Profile picture
Password (use "Change Password" option in user menu)

Theme Preference:

Theme selection is available directly in the user dropdown menu:

Light - Bright interface
Dark - Dimmed interface
Auto - Follows your system theme preference

💡 Tip: Personal profile settings don't require administrator permission! All users can update their own profile.

Dashboard Customization

Dashboard features:

View key metrics and statistics
Access recent members and activities
See system status and batch processing information

💡 Note: Dashboard content is determined by your role and permissions. Custom widget arrangement may not be available in the current version.

See:
Customize Dashboard and Display Settings

Common Settings Screens
System Parameters

What It Controls: Core system behavior Access: Settings → System Parameters → System Parameters Maintenance Common Settings:

Deduction interest rates
Wartime dates
Scan categories and keywords
Bank reconciliation parameters
Look Up Tables

What It Controls: Dropdown values and reference data throughout the system Access: Settings → Look Up Tables → (specific table) Examples:

Units
Banks
Departments
Positions
Payment deductions
Posting codes
Service percentages
Retiree Payroll

What It Controls: Retirement calculations and federal tax settings Access: Settings → Retiree Payroll → (specific setting) Used For:

Annuity factors (Options A, B, C)
Federal tax tables by year
Direct deposit file parameters
Letter Configuration

What It Controls: Text templates for system communications Access: Settings → Letter Configuration → (specific letter type) Examples:

Affidavit text
Death refund text
Warrant text
Transfer letter text
Signature management
User Management

What It Controls: User accounts, tenant profiles, and configuration groups Access: Settings → User, Tenant and Configuration Groups Requires: Administrator role Used For:

Creating and managing user accounts
Managing tenant profiles
Configuring user groups and permissions
Tips for Using Settings

✅ BEST PRACTICES:

Don't change settings unless you understand what they do
Test changes in a test environment if available
Document changes you make
Note the date and reason for changes
Inform team members of system-wide changes

⚠️ IMPORTANT:

System settings affect everyone
Some changes can't be undone
Always have administrator approval for system changes
Changes may require restart or re-login
Common Setting Tasks
Adding a New Code/Value

Example: Adding a new employer type

Navigate to the setting screen
Click Add or Create New
Fill in required fields:
Code (short identifier)
Description (full name)
Other required fields
Click Save
New value now available in dropdowns
Editing an Existing Setting
Navigate to the setting screen
Find the item in the table
Click the Edit icon (pencil ✏️)
Modify the values
Click Save
Changes take effect immediately
Inactivating (Not Deleting) Settings

Why Inactivate Instead of Delete?

Preserves historical data
Prevents breaking existing records
Can reactivate later if needed

How to Inactivate:

Edit the setting
Look for "Active" or "Inactive" toggle
Set to Inactive
Save
Item no longer appears in dropdowns but exists in history
Understanding Permissions
What You Can See

Your access to settings depends on your role:

All Users:

✅ Personal profile via My Profile
✅ Theme selection (Light/Dark/Auto)
✅ Personal information updates
❌ No access to system Settings

System Administrators:

✅ All personal profile options
✅ All system settings via Settings menu
✅ User management
✅ System configuration screens
✅ All configuration parameters

💡 Tip: If you need access to Settings that you don't currently have, contact your system administrator to request administrator permissions.

Common Questions

Q: I don't see Settings in my user menu. Why? A: The Settings menu item is only visible to users with administrator permissions. You can still access My Profile for personal preferences. Contact your administrator if you need access to system settings.

Q: What's the difference between Settings and My Profile? A: Settings (admin only) controls system-wide configuration that affects everyone. My Profile (all users) controls your personal information and preferences that only affect you.

Q: Can I undo a setting change? A: Some settings keep history. Otherwise, you'll need to manually change it back. Make notes before changing settings!

Q: Will changing a setting affect existing data? A: Usually no - changes typically affect new data only. But ask your administrator to be sure.

Q: How do I know what a setting does? A: Look for help icons (?) on setting screens, use the search feature, or refer to this documentation. When in doubt, ask your administrator.

Q: Can I export settings? A: Some setting screens have export options. Look for Export or Download buttons.

Q: Who can see my personal profile settings? A: Only you can see and edit your personal profile settings via My Profile. Administrators can manage user accounts but cannot see your personal preferences like theme selection.

Setting Categories Reference
Quick Reference Table
Category	What It Controls	Who Can Access
System Settings	System-wide configuration	Administrators only
General Settings	System-wide parameters	Administrators only
Lookup Tables	Dropdown values	Administrators only
Interest Rates	Calculation rates	Administrators only
Member Settings	Member types, statuses	Administrators only
Employer Settings	Employer codes	Administrators only
Payroll Settings	Deduction codes, tax settings	Administrators only
Report Settings	Templates, signatures	Administrators only
My Profile	Personal information	All users
Theme Selection	Display appearance	All users
Troubleshooting
Issue: Can't find a setting

Solutions:

Use the search function if available
Check different categories - it might be organized differently than expected
Ask your administrator where that setting is located
Check if you have permission to access that area
Issue: Changes aren't saving

Solutions:

Check for validation errors (red text)
Ensure all required fields (*) are filled
Check if you have permission to modify that setting
Try refreshing and trying again
Contact administrator if persists
Issue: Setting is grayed out

Reasons:

You don't have permission to edit it
It's a system-controlled value
It's locked because it's currently in use
It requires special administrator access
What's Next?

Now that you know how to access settings:

👤 Start Working with Members
💰 Learn About Contributions
⚙️ Customize Your Dashboard
Remember

Settings Are Powerful!

System settings affect everyone
Always understand before changing
Test if possible
Document your changes
Ask for help if unsure

When in doubt, ask your administrator before making system-wide changes! 🛡️

Last Updated: January 2026

← Back to Getting Started
|
Next: Members and Records →

ON THIS PAGE
What This Does
Quick Steps
Understanding Settings
Two Types of Settings
Step-by-Step Instructions
Step 1: Open Settings (Administrators Only)
Step 2: Browse Setting Categories
Step 3: Access a Specific Setting
Step 4: Understanding Setting Screens
Personal Profile Settings (All Users)
Access Your Profile
Dashboard Customization
Common Settings Screens
System Parameters
Look Up Tables
Retiree Payroll
Letter Configuration
User Management
Tips for Using Settings
Common Setting Tasks
Adding a New Code/Value
Editing an Existing Setting
Inactivating (Not Deleting) Settings
Understanding Permissions
What You Can See
Common Questions
Setting Categories Reference
Quick Reference Table
Troubleshooting
Issue: Can't find a setting
Issue: Changes aren't saving
Issue: Setting is grayed out
What's Next?
Remember