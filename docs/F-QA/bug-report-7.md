---
id: Jira-bug-report-7
title: Bug Reporting
sidebar_position: 7
description: Procedure for reporting bugs.
---

# Bug Reporting

During the testing of the software, it is probable that bugs will be found and need to be reported. The information that needs to be reported about a bug includes the identifier of the test which failed, the environment in which the test was found, instructions on how to reproduce the bug, the actual result of the test which failed and the severity of the bug. This information is shown in the bug reporting form below.

!["Jira Bug Creation" ](/img/jira-bug-report1.jpg)
!["Jira Bug Creation" ](/img/jira-bug-report2.jpg)

I have modified the bug reporting form on Jira to add the new required fields, as shown in the diagram above. You can modify your own bug form on Jira by going into project settings under issue types and editing the bug issue. Once you select the bug issue, there will be form fields on the right that you can drag into your form. Most of the fields I added were simple text fields Or multiline text fields with the exception of these severity which was actually a drop down. I set the list of available severity types as critical, high, medium, low, and cosmetic. You should modify your form to be similar to the one shown above.

The information in the various fields is described below.

## Summary

This is a short one line summary of the bug that describes what it is. You might include the test number to make it easier to relate it to a failed test.

## Description

This is where you can put in a freeform description of the bug. This is where you would put information which you cannot fit into any of the other fields.

## Test ID

This is where you can put in the identifier for the test which failed. In the situation where you found a bug without it being related to a test, you can either leave this blank or put in a short description of how you found the buck.

## Platform

This is the hardware platform on which you found the bug. You might have found it on a Windows PC, a Macintosh, or maybe an AWS cloud server.

## Operating System

This is the operating system that was running when you found the bug.

## Browser

This is where you can describe the web browser you used, if you used web browser. You should list the type of web browser as well as the version.

## Expected Result

Here you list the expected result of the test as described in the original test.

## Actual Result

This is the actual result you obtained from running the test.

## To Reproduce

These are the series of steps necessary to reproduce the bug. In some cases we producing a bug is not easy and you have to follow an exact series of steps pierced you should list that exact series of steps here so that the people trying to fix the bug can reproduce it.

## Labels

This is where you can assign a label to categorize your bug report. You might use a label like **test-failure**, **UI-bug**, or **performance-bug** as a way to categorize your bugs and make them easier to find. Note that there is a combo box above the Kanban board which allows you to filter the issues displayed based on the labels attached to them. There is also a combo box for the type of issue. These can be used to filter just the issues you want to see in the Kanban board.

## Attachments

You might have a lot of information about the bug which can help the developer solve the bug. This might include screen shots, erroneous output, log files, test data used, _etc._. All of this information can be attached to the issue here to make it easier for the developer to solve the bug.

## Linked Issue

You should link the bug report to the original test issue. You can use the "related to" type of link and then search for the original test by typing UT))1 into the search box which appears. As long as UT001 is in the name for thee unit test issue, it will be easily found. This is a good reason to include test identifiers and other identifiers in the short descriptions of issues.

## Severity

Here's where you can categorize the bug based upon its severity. Critical bugs are normally show stoppers that will render the system unusable. High priority bugs our bugs which impact functionality in some way but do not necessarily stop the system. Nonetheless high priority bugs should be fixed soon. Medium priority bugs are not as important as high priority but still need to be fixed. Low priority bugs probably need to be fixed at some point but only when the team is not fixing bugs of higher priority. Cosmetic bugs are often bugs that affect the way something looks without really affecting the functionality. They might be fixed or they might not be fixed.

## Bug Reporting

Once you create an issue in jira and set it to be of type bug and fill in all the required information, it is entered into the system and the team leader or project manager we'll look at the bug and typically assign someone to solve it. They will use the severity of a bug to determine how soon they assigned someone to work on the bug or even whether the bug is solved at all.
You should note that almost every major software product is shipped with many known bugs. Many of these are very low priority bugs that the average user will never encounter. Although these bugs might be of low priority, they can actually be quite expensive to fix. Therefore products are shipped with these bugs in place knowing that the average user will never find them and delaying fixing them until there is enough time and money to tackle the problem.
