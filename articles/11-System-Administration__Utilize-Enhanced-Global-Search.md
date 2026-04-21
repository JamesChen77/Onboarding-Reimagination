# Utilize Enhanced Global Search

> **Source:** [https://dev.pensiontech.io/documentation/11-System-Administration/Utilize-Enhanced-Global-Search](https://dev.pensiontech.io/documentation/11-System-Administration/Utilize-Enhanced-Global-Search)

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
Utilize Enhanced Global Search
Utilize Enhanced Global Search

Learn how to use the powerful global search feature to quickly find members, beneficiaries, and contacts across all retirement systems.

Overview

The Enhanced Global Search provides a unified search interface accessible from anywhere in the system. Search across all member records, beneficiaries, and contacts with intelligent auto-complete, filtering, and keyboard navigation. Access recently viewed members and starred favorites for quick navigation.

Access Level: All users (results filtered by user permissions)

Access Global Search
From Dashboard
The search bar appears prominently at the top of the dashboard
Click in the search field to activate
From System Header
Search icon appears in the main navigation header (top)
Click the search icon or field
Search expands for input
Available from any page in the system
From Member Directory
Dedicated search interface in Member Directory
Full-featured search with advanced filters
Integrated with member list display
Perform a Basic Search
Step 1: Enter Search Terms
Click in the search field
Type at least 2 characters to begin searching
Auto-complete suggestions appear as you type

Searchable Fields:

Member name (first name, last name, full name)
Employee number
Social Security Number (if permitted)
Beneficiary names
Contact names
Step 2: View Results

Search results display in real-time:

Result Display:

Member/Beneficiary/Contact icon
Full name
Employee number
Current status
Member type indicator

Result Grouping:

Members (primary account holders)
Beneficiaries (dependents and recipients)
Contacts (related individuals)

Auto-Complete Panel:

Shows up to 100 results
Sorted by relevance
Real-time filtering as you type
Keyboard navigable
Step 3: Select Result

Using Mouse:

Click on desired result
Member record opens
Search closes automatically
Open in New Tab

Right-click Method:

Right-click on result
Select "Open in new tab" from context menu
Member opens in new browser tab
View Recently Viewed Members
Access Recent History

When search field is empty:

Click in search field
Auto-complete panel shows Recently Viewed section
Displays last 7 members accessed
Sorted by most recent first

Recent Member Display:

Member name
Employee number
Member status
Star icon (for favorites)
Open in tab icon
Star Favorites

Mark as Favorite:

Hover over member in recent list
Click the Star icon (outline)
Star fills in (yellow/gold)
Member stays in favorites list

Unmark Favorite:

Click the filled Star icon
Star returns to outline
Member remains in recent but not prioritized

Favorites Benefits:

Appear at top of recently viewed
Persist across sessions
Quick access to frequently viewed members
Clear Recent History

Recent history is managed automatically:

Limited to last 7 unique members
Older entries drop off as new members viewed
Favorites remain until un-starred
History persists across login sessions
Advanced Search Features
Auto-Complete Behavior

Smart Matching:

Partial name matching (e.g., "john smi" matches "John Smith")
Ignores capitalization
Matches on any word in name
Searches across multiple fields simultaneously

Debounced Search:

300ms delay after typing stops
Reduces server load
Smoother search experience
Shows loading indicator during search

Result Highlighting:

First result auto-selected
Hovered result highlights
Selected result has distinct color
Search from Any Page

Context-Aware Search:

Available on all pages via header
Returns to current page after viewing member (breadcrumb)
Member opens with return context
Breadcrumb shows return path

Return Navigation:

"← Back to Dashboard" (or previous page)
Click to return to where search was initiated
Preserves page state when returning
Pagination and Large Result Sets
Result Limits

Initial Display:

Shows first 100 results
Sorted by relevance
Paginated if more than 100

Load More:

Scroll to bottom of results
Click Load More button (if available)
Or pagination controls appear
Sort Results

Sort Options:

By name (A-Z, Z-A)
By employee number
By status
By relevance (default)

Apply Sort:

Click sort dropdown (if available)
Select sort option
Results re-order immediately
Search Best Practices

✅ Do:

Use at least 2-3 characters for better results
Try different search terms if not found
Use employee number for exact matches
Star frequently accessed members
Search from anywhere in the system

❌ Don't:

Search with just 1 character (requires 2 minimum)
Include special characters unnecessarily
Search for SSN unless necessary (privacy)
Clear recent history manually (auto-managed)
Troubleshooting
No Results Found

If search returns no results:

Check spelling - Try alternate spellings
Remove filters - Clear any active filters
Try partial name - Use first or last name only
Use employee number - Try employee ID if known
Check permissions - Verify access to that tenant
Try different search term - Middle name, nickname, etc.
Search Too Slow

If search is sluggish:

Type more characters (more specific search is faster)
Check internet connection
Wait for debounce (300ms after typing stops)
Close other browser tabs
Contact administrator if persistent
Results Not Updating

If results seem stale:

Press F5 to refresh page
Clear browser cache
Log out and log back in
Check for system updates
Contact support if issue persists
Cannot Open Member

If clicking result doesn't work:

Verify you have permission to view that member
Check that member record exists (not deleted)
Try right-click and open in new tab
Refresh page and try again
Use Member Directory as alternative
Search Performance Tips
For Best Results

Specific Searches:

Use full or partial name with unique identifiers
Include employee number when known
Combine first and last name

Broad Searches:

Use common last names
Filter results by type
Sort by relevance
System Performance

Optimal Search Patterns:

Search for specific individuals rather than browsing
Use Member Directory for filtered browsing
Limit simultaneous searches from multiple tabs
Close search panel when not in use
Search Configuration
User Preferences

Search behavior can be customized:

Recently viewed limit (7 by default)
Auto-complete delay (300ms default)
Result page size (100 default)
Sort preferences

Access Settings:

Go to User Profile
Preferences section
Search settings
Save changes
Administrator Settings

Administrators can configure:

Searchable fields
Result limits
Performance tuning
Security settings (SSN search permissions)
Search vs Member Directory
When to Use Each

Use Global Search For:

Quick lookup of known member
Searching from anywhere in system
Recent member access
Favorites management
Fast keyboard-driven navigation

Use Member Directory For:

Browsing member lists
Advanced filtering by multiple criteria
Bulk operations
Exporting member data
Detailed sorting and grouping
Complementary Features

Both tools work together:

Search found member → opens in Member Directory context
Member Directory → search within current filters
Both maintain recently viewed history
Both respect user permissions
Mobile Search
On Mobile Devices

Touch Interface:

Tap search field to activate
On-screen keyboard appears
Results scroll vertically
Tap result to open

Mobile Optimizations:

Larger tap targets
Simplified result display
Swipe gestures supported
Mobile-optimized auto-complete
Search Security and Privacy
Permission-Based Results

Search respects:

Tenant assignments
Service access (Admin, ESS)
Role-based permissions
Member-specific access (ESS users)
Data security rules
Audit Trail

Search actions are logged:

Search terms (for audit)
Results accessed
Member records opened
Timestamp and user
SSN Search Restrictions
SSN search may require special permissions
Partial SSN search may be disabled
Full SSN display may be masked
Audit logging for SSN searches
Related Topics
Find a Member - Member search techniques
Navigate Member Directory - Browse members
Filter and Search Within Member Directory - Advanced filtering
Customize Dashboard and Display Settings - Dashboard configuration
Notes
Search indexes update in real-time as member data changes
Search performance improves with more specific search terms
Recently viewed history is stored locally (browser-specific)
Favorites sync across devices via user profile
Search supports international characters and accents
Maximum search term length: 100 characters
Search ignores leading/trailing spaces
Multiple spaces treated as single space
Search is case-insensitive
Results limited to user's assigned tenants
Backend search uses full-text indexing for performance
Auto-complete panel closes when clicking outside search area

Related Documentation:

Find a Member
Navigate Member Directory
Filter and Search Within Member Directory
Open Multiple Members in Browser Tabs
ON THIS PAGE
Overview
Access Global Search
From Dashboard
From System Header
From Member Directory
Perform a Basic Search
Step 1: Enter Search Terms
Step 2: View Results
Step 3: Select Result
Open in New Tab
View Recently Viewed Members
Access Recent History
Star Favorites
Clear Recent History
Advanced Search Features
Auto-Complete Behavior
Search from Any Page
Pagination and Large Result Sets
Result Limits
Sort Results
Search Best Practices
Troubleshooting
No Results Found
Search Too Slow
Results Not Updating
Cannot Open Member
Search Performance Tips
For Best Results
System Performance
Search Configuration
User Preferences
Administrator Settings
Search vs Member Directory
When to Use Each
Complementary Features
Mobile Search
On Mobile Devices
Search Security and Privacy
Permission-Based Results
Audit Trail
SSN Search Restrictions
Related Topics
Notes