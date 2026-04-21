# Update Retirement System Logo

> **Source:** [https://dev.pensiontech.io/documentation/11-System-Administration/Update-Retirement-System-Logo](https://dev.pensiontech.io/documentation/11-System-Administration/Update-Retirement-System-Logo)

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
Update Retirement System Logo
Update Retirement System Logo

Learn how to upload and manage logos for retirement system tenants that appear throughout the application.

Overview

Each retirement system (tenant) can have a custom logo that appears in reports, letters, and throughout the system interface. Administrators can upload, update, or remove logos for each tenant they manage.

Administrative Permission Required: Tenant administration privileges

Access Tenant Management
Navigate to Administration from the main menu
Click on Tenant Profiles
The Tenant Profile List displays all retirement systems with:
Tenant ID
Tenant Name
Tenant Code
Active Status
City, State, ZIP
Action buttons
Update a Tenant Logo
Step 1: Open Tenant Profile
Locate the tenant in the list
Click the Edit icon (pencil) in the Actions column
The Tenant Profile modal opens
Step 2: Access Logo Section

The logo section appears at the top of the Tenant Profile:

Current Logo Display:

If a logo exists, it displays as a preview image
If no logo exists, a placeholder appears with "Click to add logo" text
Step 3: Upload New Logo

Click on the logo area or click the Change/Upload button

The Photo Upload modal opens

Select Image:

Click Choose File or drag and drop image
Supported formats: JPG, PNG, GIF, WebP
Recommended size: 200x200 pixels minimum
Maximum file size: 5MB

Preview Image:

Image preview appears after selection
Verify logo appearance and quality

Upload Image:

Click Upload to save to server
Success message appears
Preview updates in tenant profile

Apply Changes:

Click Save in the main Tenant Profile modal
Success message: "Tenant updated successfully"
Step 4: Verify Logo

After saving:

Logo appears throughout the system where tenant branding is used
Appears on:
Reports and statements
Letters and correspondence
System header (tenant selector)
Login screen (if configured)
Remove a Logo
Steps to Remove
Open the tenant profile (click Edit icon)
Click on the current logo
In the Photo Upload modal, click Remove button
Confirm removal
Logo is cleared and placeholder appears
Click Save in Tenant Profile modal
What Happens
Logo is removed from all system displays
Placeholder or text-only branding appears instead
Original logo file is retained in system (can be restored)
Change an Existing Logo

To replace a logo:

Follow the same steps as uploading a new logo
New logo overwrites the previous logo
Previous logo is archived in the system

Note: There is no need to remove the old logo first before uploading a new one.

Logo Best Practices
Recommended Specifications

✅ Image Format:

PNG (preferred - supports transparency)
JPG/JPEG (solid backgrounds)
SVG not currently supported

✅ Image Dimensions:

Minimum: 200x200 pixels
Recommended: 400x400 pixels or larger
Aspect ratio: Square (1:1) or wide (16:9)

✅ File Size:

Maximum: 5MB
Recommended: Under 500KB
Compress images before upload if needed
Design Guidelines

✅ Do:

Use high-resolution images
Use transparent backgrounds (PNG)
Test logo appearance on both light and dark backgrounds
Use official organizational branding
Maintain consistent branding across all tenants

❌ Don't:

Use low-resolution or pixelated images
Use overly complex designs that don't scale well
Include text that becomes unreadable when small
Use animated GIFs
Upload copyrighted images without permission
Professional Appearance

For best results:

Hire a graphic designer for professional logos
Use vector graphics converted to high-res PNG
Ensure logo is recognizable at small sizes
Test logo in printed reports before finalizing
Tenant Profile Information

While updating logos, you can also manage other tenant settings:

Basic Information
Tenant ID (read-only, auto-generated)
Tenant Name (required)
Tenant Code (required, unique identifier)
Active Status (toggle on/off)
Address Information
Address Line 1
Address Line 2
City
State
ZIP Code
System Configuration
Configuration Group Code - Links tenant to system settings
Encryption Key (required, secured)
Database Schema Name (required, technical setting)
Create a New Tenant (with Logo)
Step 1: Create Tenant
Click + Tenant button
Enter required information:
Tenant Name
Tenant Code
Encryption Key
Database Schema Name
Optional: Upload logo during creation
Click Create
Step 2: Configure Tenant

After creation:

Assign configuration groups
Upload logo if not done during creation
Configure address information
Set active status
Where Logos Appear
System-Wide Display

Header/Navigation:

Tenant selector dropdown
Dashboard header
System branding area

Reports:

Member statements
Benefit calculations
Payment registers
All standard reports

Letters:

Retirement letters
Benefit letters
Payment notices
Official correspondence

Login:

Login screen (if configured for tenant-specific login)
Welcome screens
Troubleshooting
Logo Not Displaying

Check:

✅ Logo was uploaded successfully
✅ Tenant profile was saved after upload
✅ Browser cache - refresh page (Ctrl+F5)
✅ File format is supported (PNG, JPG, GIF)
✅ File size is within limits (under 5MB)
Logo Quality Issues

If logo appears blurry or pixelated:

Upload a higher resolution version
Ensure original file is at least 400x400 pixels
Avoid upscaling small images
Use PNG format for best quality
Upload Fails

Common issues:

❌ File too large (exceed 5MB)
❌ Unsupported file format
❌ Network connectivity issues
❌ Insufficient permissions
❌ Server storage limits reached

Solutions:

Compress image file before upload
Convert to PNG or JPG format
Check internet connection
Contact system administrator
Logo Not in Reports

If logo displays in system but not in reports:

Verify logo is saved in tenant profile
Check report template configuration
Regenerate report cache
Contact system administrator for report customization
Multiple Tenant Logos

If managing multiple retirement systems:

Consistent Branding
Each tenant can have its own unique logo
Logos appear contextually based on selected tenant
Users see logo for currently active tenant
Bulk Updates
Logos must be updated individually per tenant
No bulk upload feature currently available
Plan logo updates during off-peak hours
Security and Permissions
Who Can Update Logos

✅ Can Update:

System administrators with tenant management privileges
Super administrators
Users with tenant-specific admin access

❌ Cannot Update:

Regular users without admin rights
Read-only administrators
Users without tenant assignment
Audit Trail

All logo updates are logged:

Date and time of update
User who made the change
Previous logo reference
New logo reference
Related Topics
Customize User Profile Settings - User management
Access Settings Screens - Admin navigation
Notes
Logo files are stored securely in the system's file storage
Original filenames are preserved in system metadata
Logo changes take effect immediately after saving
Previous logos are archived and can be restored if needed
Logo uploads respect system file storage quotas
Transparent PNG logos work best for flexible branding

Related Documentation:

Customize Dashboard and Display Settings
Customize User Profile Settings
Access Settings Screens
ON THIS PAGE
Overview
Access Tenant Management
Update a Tenant Logo
Step 1: Open Tenant Profile
Step 2: Access Logo Section
Step 3: Upload New Logo
Step 4: Verify Logo
Remove a Logo
Steps to Remove
What Happens
Change an Existing Logo
Logo Best Practices
Recommended Specifications
Design Guidelines
Professional Appearance
Tenant Profile Information
Basic Information
Address Information
System Configuration
Create a New Tenant (with Logo)
Step 1: Create Tenant
Step 2: Configure Tenant
Where Logos Appear
System-Wide Display
Troubleshooting
Logo Not Displaying
Logo Quality Issues
Upload Fails
Logo Not in Reports
Multiple Tenant Logos
Consistent Branding
Bulk Updates
Security and Permissions
Who Can Update Logos
Audit Trail
Related Topics
Notes