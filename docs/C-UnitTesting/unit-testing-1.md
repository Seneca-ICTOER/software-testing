---
id: unit-testing-1
title: Unit Testing
sidebar_position: 1
description: A general introduction to unit testing.
---

# Unit Testing

As we explained in the introduction, unit testing is the process of testing the code in small units. Usually these units correspond to functions, but that is not necessarily always the case. Each unit test feeds the function under test specific values and then compares the return value to the expected output. If the value produced by the function under test is identical to that that is expected, then the test has passed. If the value is different, then the test fails.

While it is entirely possible to write tests manually by simply writing code which invokes functions and checks to see that the values output by the functions are correct, it is more common to use a unit test framework. A unit test framework requires that you write your unit tests in a specific format and then it automatically runs the tests for you and records whether they have passed or failed. Most testing frameworks give you some kind of an interface that allows you to display the results of the tests and readily determine which tests have passed or failed.

The previous chapter described how we could select test data for unit tests. You should follow the procedures outlined in that chapter to carefully select your test data before you build your unit tests. Once the test data has been selected, you can lay it out as a series of unit tests.

Most unit tests frameworks group unit tests into a test suite. The test suite could test one particular function and it would use different tests to pass each piece of data to the function.

Most unit tests use some type of an assertion to determine if the result of running a function is correct or not. An assertion is a type of statement which compares the expected value with the value produced and, if they satisfy the comparison, indicates that the test has passed. Many assertions allow an error message to be associated with it so you can see a message describing exactly where the test failed.

There are many different unit test frameworks, but they all follow this basic model. In the next section we will start to look in detail at the unit test framework provided by Microsoft Visual Studio.
