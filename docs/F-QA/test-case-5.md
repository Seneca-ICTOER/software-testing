---
id: test-case-5
title: Test Cases
sidebar_position: 4
description: How to write a software test case.
---

# Software Test Cases

The test plan describes at a high level testing for the entire project. This is a very general purpose document that is designed to be read by many people on both the QA team, the development team, and management. It describes many different things including the schedule, the personnel involved, the scope of testing, and potential risks to the project. What it does not contain is the low level details of how each of the tests is to be conducted. This information is included in the test case.

A test case contains all the information necessary to carry out a particular test including:

- Optionally, the environment in which the test needs to be conducted,
- a description of the test data and how it can be obtained,
- The expected results of the test,
- The status of a test indicating whether it has been completed or not.

The test case tells the testers exactly how to conduct the test and ensures that no steps in the testing process are skipped. Having the individual tests laid out as test cases allows the QA manager to divide the workload among the testers.

The test cases will be as varied as the different features of a software which need to be tested. This could include

- Functionality test cases,
- Unit test cases,
- Performance test cases,
- Database test cases,
- User interface test cases,
- Integration test cases,
- Security test cases,
- and usability test cases.

The test case should include the following:

- a unique test case identifier,
- A brief description of a test and what it is for,
- Any assumptions and preconditions that are necessary before a test can be executed,
- Test data which needs to be provided in order to execute the test,
- A list of steps which need to be executed to conduct the test,
- The expected result of the test,
- The actual result of the test that was obtained and any post conditions which occurred as a result of executing the test,
- Whether the test passed or failed.

The exact format of the test case might vary between companies, projects, and even between tests within the same project. You should write your test cases to be as simple as possible. They should be easily read and easily interpreted. The instructions should be easy to follow and unambiguous.

A test suite is a collection of test plans which have been organized together because they share something in common. It could be that they are testing the same part of the software or it could be that they are testing the same business requirements. The test suite is a way for you to organize your individual low level tests into collections of related tests.

The following could be a functionality test:

| ID    | Description | Steps                                                                                       | Test Data                     | Expected Results | Actual Results | Pass/Fail |
| :---- | :---------- | :------------------------------------------------------------------------------------------ | ----------------------------- | ---------------- | -------------- | --------- |
| TF001 | Login Test  | 1. go to login page <br/> 2. Enter user name <br/> 3. Enter password <br/> 4. Click "Login" | user=John <br/> passwd=secret | Successful login |                |           |

We could also have a suite of unit tests to test a particular function, as shown below.

| ID    | Description  | Steps                                       | Test Data              | Expected Results | Actual Results | Pass/Fail |
| :---- | :----------- | :------------------------------------------ | ---------------------- | ---------------- | -------------- | --------- |
| TU001 | string strip | 1. pass data to function and capture result | ""                     | ""               |                |           |
| TU002 | string strip | 1. pass data to function and capture result | "x"                    | "x"              |                |           |
| TU003 | string strip | 1. pass data to function and capture result | "\_x"                  | "x"              |                |           |
| TU004 | string strip | 1. pass data to function and capture result | "x\_"                  | "x"              |                |           |
| TU005 | string strip | 1. pass data to function and capture result | "\_\_\_x"              | "x"              |                |           |
| TU006 | string strip | 1. pass data to function and capture result | "x\_\_\_"              | "x"              |                |           |
| TU007 | string strip | 1. pass data to function and capture result | "xyz"                  | "xyz"            |                |           |
| TU008 | string strip | 1. pass data to function and capture result | "\_\_\_xyz"            | "xyz"            |                |           |
| TU009 | string strip | 1. pass data to function and capture result | "xyz\_\_\_"            | "xyz"            |                |           |
| TU010 | string strip | 1. pass data to function and capture result | "\_**abc\_**def\_\_\_" | "abc\_\_\_def"   |                |           |
