---
layout: page
title: Issue Quality Auditor - Admin Guide
---

# Issue Quality Auditor - Admin Guide

## Overview
Issue Quality Auditor helps you maintain high data quality standards in your Jira projects. As a Project Admin, you can define "Quality Rules" that specify which fields must be filled out for specific issue types when they are in certain statuses.

## Accessing Configuration
1. Navigate to your Jira Project.
2. Click on **Project Settings** in the left sidebar.
3. Select **Issue Quality** from the menu.

## Creating a Quality Rule
To enforce a new standard, follow these steps:

### 1. Select Issue Type
Choose the issue type you want to govern (e.g., Bug, Story, Task).
> **Note:** Rules are defined per issue type.

### 2. Configure Target Statuses
Select the workflow statuses where this rule should apply.
*   **Example:** If you select "In Progress", the app will check the issue whenever it is in the "In Progress" state.
*   **Best Practice:** Select statuses where the data becomes critical (e.g., checking for "Fix Version" when a bug is "Resolved").

### 3. Select Required Fields
The app automatically loads available fields for the selected issue type.
Search and select the fields that users must fill out.
*   **Example:** Require "Priority" and "Due Date" for all Tasks.

### 4. Save
Click **Save Configuration** to apply the rule immediately.

## Managing Rules
*   **Update:** Simply change the selections and click Save again.
*   **Delete:** To remove a rule entirely for an issue type, click the Delete Rule button.

## User Experience
When a rule is active:
*   Users see a **Quality Check** section in the issue sidebar.
*   **GREEN (Passed):** All required fields are present (or no rule is active for the current status).
*   **RED (Failed):** One or more required fields are missing. The specific missing fields are listed clearly for the user.
