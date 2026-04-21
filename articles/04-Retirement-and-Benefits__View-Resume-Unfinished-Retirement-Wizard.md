# How Do I View or Resume an Unfinished Retirement Wizard?

> **Source:** [https://dev.pensiontech.io/documentation/04-Retirement-and-Benefits/View-Resume-Unfinished-Retirement-Wizard](https://dev.pensiontech.io/documentation/04-Retirement-and-Benefits/View-Resume-Unfinished-Retirement-Wizard)

---

DOCUMENTATION
00. READINESS JOURNEY
01. GETTING STARTED
02. MEMBERS AND RECORDS
03. CONTRIBUTIONS AND BUYBACKS
04. RETIREMENT AND BENEFITS
Overview
Run Pension Calculation
Run Quick Retirement Estimate
Run, Save, Share Benefit Calculation Results
Review Calculation Inputs and Outputs
05. PAYROLL AND PAYMENTS
06. REFUNDS AND DISTRIBUTIONS
07. ACCOUNTING AND COMPLIANCE
08. REPORTS AND ANALYTICS
09. COMMUNICATIONS AND MEMBER ENGAGEMENT
10. BATCH PROCESSING AND OPERATIONS
11. SYSTEM ADMINISTRATION
Documentation
chevron_right
Retirement And Benefits
chevron_right
View and Resume Unfinished Retirement Wizard
How Do I View or Resume an Unfinished Retirement Wizard?

Category: Retirement and Benefits
Time: 5–10 minutes
Difficulty: ⭐⭐ Intermediate

Before You Begin:

You must have a retirement wizard that was already started (by you or another user) and not yet completed
You need permission to view retirement processes and access the member profile
Valid login to PensionPro+

Related Topics:

Retire a Member
Run Pension Calculation
What This Does

The Retirement Wizard is a multi-step process that saves progress automatically at each step. If you close the wizard or leave before finishing, you can resume later without losing completed work. There are two ways to open and resume an unfinished retirement:

From the homepage – Use the Retirement Processes card to see all (or “Mine”) unfinished processes and click one to open that member’s wizard.
From the member’s profile – Open the member, then use Member Actions → Retire a Member to open the retirement wizard for that member (it resumes if one is in progress).

Both methods take you to the same Retirement Wizard at member/:id/calculations/wizard. If that member has an in-progress retirement, the wizard opens at the step where they left off.

Method 1: Resume from the Homepage (Retirement Processes Card)

Use this when you want to see all unfinished retirement processes (or only yours) and then open one.

Steps:

Go to the homepage (Dashboard).
Log in and land on the main dashboard, or navigate back to it.

Find the Retirement Processes card.
The dashboard may show several widgets/cards (e.g. Memos, News, Retirement Processes). Locate the card titled Retirement Processes.
If you don’t see it, your dashboard layout may have it hidden or reordered; check with your administrator or dashboard customization.

Filter the list (optional).
The card has two buttons:

Mine – Show only retirement processes you started.
All – Show all ongoing retirement processes (any user).
Click the one you want. The list updates accordingly.

Open the retirement you want to resume.
Each row shows:

Member name (and may show a member tooltip on hover)
Step indicators (e.g. 1–6) showing progress through the wizard
Click the row (the whole line for that member).
The application navigates to that member’s Retirement Wizard:
Member → Calculations → Wizard
(route: /member/:memberId/calculations/wizard).
If that member has an in-progress retirement, the wizard opens and resumes at the last incomplete step.

Continue in the wizard.
Complete the current step and proceed through the remaining steps until the retirement is finished.

Summary:
Homepage → Retirement Processes card → choose Mine or All → click a member row → that member’s Retirement Wizard opens and resumes if in progress.

Method 2: Resume from the Member Profile (Member Actions → Retire a Member)

Use this when you already know which member you want to work on and you’re on (or can open) their profile.

Steps:

Open the member’s profile.
Use Global Search or the Member Directory to find the member. Click the member’s name to open their profile.

Open Member Actions.
In the upper-right of the member profile (in the banner/header area), find the Member Actions button. It may show a label like “Member Actions” and a chevron (e.g. expand_more).
Click Member Actions to open the dropdown/grid menu.

Choose Retire a Member.
In the Member Actions menu, find the action Retire A Member (description: “Start retirement processing”).
Click Retire A Member.
The application navigates to that member’s Retirement Wizard:
Member → Calculations → Wizard
(same route as in Method 1: /member/:id/calculations/wizard).

Resume or start.

If this member has an in-progress retirement, the wizard opens and resumes at the step where they left off.
If not, the wizard opens at the beginning so you can start a new retirement for that member.

Continue in the wizard.
Complete the current step and proceed through the remaining steps until the retirement is finished.

Summary:
Member profile → Member Actions (upper-right) → Retire a Member → that member’s Retirement Wizard opens and resumes if in progress.

Important Details

Same wizard, same route
Both methods take you to the same Retirement Wizard for the chosen member. The route is always the member’s calculations wizard: /member/:id/calculations/wizard.
Retire a Member is not under Benefit Calculations; it is under Member Actions in the member profile, and it goes to this same wizard.

Auto-save
The system saves progress at each step. When you resume, you return at the beginning of the last incomplete step. Data from completed steps is preserved.

Step indicators on the dashboard
On the Retirement Processes card, the step dots (1–6) show how far each retirement has progressed. This helps you see which step each member is on before you click.

Mine vs All
“Mine” limits the list to processes you started; “All” shows every ongoing retirement. Use this to find a specific case or to cover for someone else.

Quick Reference
Goal	Where to go	Action
See all / my unfinished	Homepage → Retirement Processes	Use Mine or All, then click a member row
Resume when I know the member	Member profile	Member Actions (upper-right) → Retire a Member
Related Tasks

Before resuming:

Find a Member
,
Review Member Banner and Navigation Cards

In the wizard:

Run Pension Calculation
,
Review Calculation Inputs and Outputs

After completing:

Review Retiree Financial Information
,
Run Retiree Payroll

Last Updated: February 2026

← Back to Retirement and Benefits
|
Related: Retire a Member →

ON THIS PAGE
What This Does
Method 1: Resume from the Homepage (Retirement Processes Card)
Method 2: Resume from the Member Profile (Member Actions → Retire a Member)
Important Details
Quick Reference
Related Tasks