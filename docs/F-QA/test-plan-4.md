---
id: test-plan-2
title: The Software Test Plan
sidebar_position: 3
description: How to write a software test plan.
---

# The Software Test Plan

This software test plan is one of the most fundamental documents for software testing. However, with the rise of agile processes, it is frequently ignored. This is unfortunate because the test plan provides an overview of how all the software testing should be conducted.

The test plan is really a project plan for the system testing. It is really the instruction manual for the testing process. The test plan should include:

- A description of how the testing will be performed at a particular level, this could be a description of how testing for the entire system is performed or how user acceptance testing is to be performed.

- The objectives of the testing which should describe what is being tested and what this will prove,

- the scope of the testing which will determine what parts of the software are being tested as well as what parts are not being tested,

- A schedule of when the tests will be conducted and the order of the tests,

- A list of risks in the project and how they can be mitigated,

- a list of the hardware and software resources necessary to conduct the testing,

- A list of the roles and skills of the people required to do the testing.

## The Test Strategy

The test strategy is a short, separate document which is often written before the test plan. The purpose of the test strategy, is to define the major test objectives and to make sure that the test aligns with the organizational needs and goals. The test strategy is to make sure that the big picture of what the test is all about and why the test is being conducted is not lost. The test strategy document will typically include:

- It is a description of what makes this project unique such as the way it is used or for technology involved,

- A description of the SuccessFactors that are being tested, for example, reliability correctness usability, etc,

- Risks involved to the business the project the product, etc,

- The roles and responsibilities of the people who will conduct the test,

- A rough schedule of the test,

- The level of the test for example component testing integration testing or system acceptance testing,

- The type of testing to be performed whether it be functional testing, security testing, usability testing or some other type.

---

**Testing Strategy Worksheet**

| **Project Name** <br/>User details entry                                                                                                                                                                                                                                                                                                                                          | **Author** <br/>QA lead                                                                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **Computing Environment** <br/>Web browser with app on server                                                                                                                                                                                                                                                                                                                     | **Software Type** <br/>Web app                                                                                               |
| **User Demographics** <br/>Adult end users                                                                                                                                                                                                                                                                                                                                        | **Assumptions** <br/>Users have web experience                                                                               |
| **Purpose of Test** <br/>Verify usability and data storage                                                                                                                                                                                                                                                                                                                        | **Phases of Testing** <br/>End-to-end                                                                                        |
| **Scope of Testing** <br/>Usability of interface, completeness of data Data storage <br/>Click or tap here to enter text.                                                                                                                                                                                                                                                         | **Critical Success Factors** <br/>UI is usable and efficient<br/>Data stored on server correctly<br/>No missing input fields |
| **Testing Types** <br/>Manual tests<br/>Click or tap here to enter text.                                                                                                                                                                                                                                                                                                          | **Tester Profiles** <br/>QA teams members<br/>Click or tap here to enter text.                                               |
| **Development/ Test Tools** <br/>App installed on web server, web browser and database query tool<br/>Click or tap here to enter text.                                                                                                                                                                                                                                            |
| **Business / Operational Concerns** <br/>Data loss can cause lawsuits <br/> Click or tap here to enter text. <br/> Click or tap here to enter text.                                                                                                                                                                                                                               |
| **Risks** <br/> **Business** <br/>Data loss or usability concerns cause customer complaints<br/>Click or tap here to enter text.<br/> ** Technical ** <br/>Data loss might indicate bigger problems in the project <br/> Click or tap here to enter text.<br/> **Project** <br/>This needs to be tested before the next phase of development<br/>Click or tap here to enter text. |
| **Other** <br/>Any other notes<br/>Click or tap here to enter text.<br/>Click or tap here to enter text.                                                                                                                                                                                                                                                                          |

---

This is a sample of a test strategy. The phases of the tests could be:

- unit testing,
- integration testing,
- end-to-end testing,
- regression testing,
- acceptance testing,
- _etc._

## Test Plan Layout

- **Introduction**
  - a list of test objectives which will give an overview of what is to be tested and what the tests seek to verify,
  - the scope of the testing which might include major business functions or major software components,
  - a system overview where the system is described at a high-level for people who are new to it,
  - lists of acronymns, definitions, references if needed.
- **Approach**
  - a list of assumptions and constraints on the testing,
  - how the test coverage will be determined,
  - software components to be validated,
  - business processes to be validated.
  - Test Tools
    - a list of the testing tools that will be required
  - Test Type
    - list of the various types of testing to be done (functional, compliance, security, regression, etc.) and a high-level description of how the tests will be performed.
    - Eg. Functional testing using black box and white box test data
  - Test Data
    - description of how the test data is to be created. It could be sample data from an existing database with dummy names used instead of real data. It could involve the creation of specific data for usit testing, _etc._
- **Test Plan**
  - the people on the test team and their responsibilities,
  - schedule listing the major parts of the testing, when they will start, end and the expected deliverables.
- **Environment**
  - a list and description of the hardware and software components needed for the testing,
  - any special training needed for the testing team.
- **Features to be Tested**
  - a list of the features to be tested. If incremental development is used, this would list the features to be tested at the end of every implementation effort. If the implementation is organized in another way, the tests will be organized to fit the implementation plan.
- **Features Not Tested**
  - a list of functionality that will not be tested by this test plan.
- **Testing Procedure**
  - a general overview of the testing process and how the tests will be conducted,
  - the order in which the tests will be conducted,
  - a general description of pass/fail criteria,
- **Defect Management**
  - This section lays out how defects will be reported and managed,
  - it will lay out definitions for ranking defects importance as Critical, High, Medium, Low, or cosmetic or informational.
- **Risks**
  - this will list the risks to the project due to defects discovered during testing. It should have a workaround for most of the risks so that the system can continue to be used or development can continue.

## Writing Style

The test plan should be:

- written consisely, without unnecessary verbage,
- organized into logical sections, making things easy to find,
- written to be readable by using lists and tables to make it easier to read the information,
- be adaptable since changes will be necessary through the life of the project.
