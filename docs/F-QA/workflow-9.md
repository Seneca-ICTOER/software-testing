---
id: workflow-9
title: Quality Assurance Workflow
sidebar_position: 8
description: A workflow for a development project with QA.
---

# Quality Assurance Workflow

There are a great many ways to develop a software project. No one way can be said to be right and another one said to be wrong. Usually the difference is come down to the nature of the project and the workflow which works best for that particular type of project. In this section, we are going to look at a workflow that we will use to try and carry out the complete lifecycle of a small sized software project. By doing this, we will see exactly how we can use all of our tools to try and build a successful software project that has quality assurance built into the workflow.

## Scrum

Scrum is an agile strategy where the team works in sprints. A sprint is a few days to a week and team members select the work they can complete during the sprint period. Rather than having a manager assign work to the team members, the team members themselves select the work they want to do. This has the benefit that work is selected by the team member most interested in a particular issue and most capable of working on it.

## Project Workflow

In a project like this, we will use the tools we have discussed to help us manage the workflow. We will use Jira to manage the issues, the status of the issues, and use it to assign issues to personnel. Git will be used to store all of the documents produced by the project. An outline of the workflow that we will use is shown in the diagram below.

!["QA Project Workflow" ](/img/workflow1.jpg)

### Step 1

The workflow begins in the top left of the diagram where the entire team will get together to read and analyze the problem. In this step people will gain a good understanding of the problem so that they no enough about the problem to be able to come up with a solution. This will be a group activity, and it is expected that everybody will participate to facilitate the understanding of the problem. The detailed steps are:

1. Everyone meets to analyze problem
2. Identify data structures

### Step 2 (Team Leader 1)

In the second step, the group will identify the data structures needed to store all the information about the problem. In modern software design, it is common to identify the data structures before you try and build the functionality of the system. During this step, the group will identify with that a structures and roughly define their purpose and what they have to contain. A team leader will be selected who will be in change of running Jira to create issues, assign people to work on issues, and update the status of issues. A new team leader will be selected for every step so that all of the team members have a chance to be the team leader. If everyone has been a team leader once, then the team leader duties will cycle through the team members. The details of the step are:

1. Create Jira issue for each data structure
2. Assign each issue to a team member who creates data struct in header files
3. Everyone reviews data structures
4. Create bugs for problems found
5. Team members pick a bug to fix
6. Repeat steps 3-5 until data structures approved

While every project is different and might require a different structure to the Git repository, the following structure is sugested as a good starting point to layout your repository.

!["Git Repository Structure" ](/img/git-repo-structure.jpg)

### Step 3 (Team Leader 2)

The third step will develop the function specifications in parallel with developing the test plan. The team will divide itself into developers and quality assurance members. The developers will work on the functional specifications while the quality assurance members will work on writing the test plan. All of the documents produced by these two sub-teams will be stored in the Git repository.

The format of a test plan has been described previously and you can refer back to the appropriate section of the notes if you need to review it. The specification of each function should include all of the information that the developer will need to be able to write the function as well as all of the information that the tester will need in order to write black box tests for the function. This means that you will need to write detailed descriptions of exactly what it is the function does as well as detailed descriptions of the input values for the function, the outputs produced by the function as well as any unusual conditions. The unusual conditions would typically include the fact that certain values might not be allowed for input or that under some conditions unusual output values will be produced. Unusual conditions might also describe odd situations in which the function will do something other than what you would expect it to do. The following format can be used to capture the specification for each function.

!["Function Specification" ](/img/function-spec.jpg)

The detailed steps are:

1. Create an issue for each function specification
2. Create an issue for the test plan
3. Team members an issue to wrok on
4. Write documents and store them in the Git repository
5. Review documents and create bugs
6. Repeat steps 3-5 until complete.

### Step 4 (Team Leader 3)

In the fourth step, the function specifications and test plan will be passed onward to the team members working on this step. The developers we'll use the function specifications to write the code for the functions and store it into re evolving source code for the solution. While the developers are implementing the functions, the quality assurance group we'll be writing the black box tests as well as implementing the actual code for the tests. Both of these groups will submit everything they produce to the Git repository. The details of this step are:

1. Issues are created for the implementation of each function and the tests for each function
2. Team members select the issues they want to work on. Tests are added to Git as documents and the associated code is added to the source code. Function implementations are added to the source code.
3. The work is reviewed and bugs created in Jira
4. Steps 2-3 are repeated until complete.

### Step 5 (Team Leader 4)

The fifth step is all about running the unit tests that were developed in the fourth step, identifying any bugs, reporting the bugs, and having developers fix the bugs. The detailed steps are:

1. Add issues to execute each of the tests
2. Team members will take tests and perform them
3. Failed tests will be reported as bugs to Jira
4. Team members will take bugs and fix them
5. Repeat steps 2-4 until complete.

### Step 6 (Team Leader 5)

Now that the code has passed the unit tests, the structure of the code is close to finalized. The QA members will examine the code to develop white box tests and add the test documents and test code to the Git repository. Once tests start being completed, members of the team can start exeucting them, reporting bugs, and fixing them. The details are:

1. Add issues to develop white box tests for each function,
2. Team members pick issues, write the tests, develop the code for them and check it into Git
3. Once a white box test for a function is complete, an issue is added to have it executed
4. Any failed test is added as a bug to be fixed.
5. Repeat steps 2-4 until all tests developed and executed
6. Team members pick a bug and fix it
7. A test / debug cycle is performed until the bug is fixed.
8. Steps 6-7 are repeated until no bugs remain.

### Step 7 (Team Leader 6)

The team will now go on to assemble the data structures and functions into a working solution. The QA team will develop integrations tests and execute the tests. Any bugs found will be reported and team members will fix the bugs. The details are:

1. Add issues to complete the implementation of the application.
2. QA members will develop integration tests.
3. Integration tests will be run and any bugs reported.
4. Team members will pick bugs to work on and go through an edit / test cycle until fixed.
5. Repeat steps 3-4 until no bugs remain.

### Step 8 (Team Leader 7)

The QA team will develop the final acceptance tests and execute the tests. Any bugs found will be reported and team members will fix the bugs. The details are:

1. QA members will develop acceptance tests.
2. Acceptance tests will be run and any bugs reported.
3. Team members will pick bugs to work on and go through an edit / test cycle until fixed.
4. Repeat steps 2-3 until no bugs remain.
