---
id: testing-types-3
title: Types of Testing
sidebar_position: 3
description: Describes the different types of testing.
---

# Types of Testing

There is not one single type of software testing, but rather, different types that test the software in different ways. The following sections will investigate each of these different types of testing and showing how it is important in getting complete testing of your code. This is not an exhaustive list and you might find other types of tests listed elsewhere. This does, however, capture most of the important testing types.

## Unit Testing

Unit testing is one of the most basic types of testing. It breaks the code down into small units, usually functions, and test them to determine if they produce the correct results. The idea is to test small units of code and make sure that they work perfectly before they are combined with other pieces of code into much larger programs. The concept is that it is easier to find a bug in a small piece of code than it is to find it in larger program. Further, we like to build on code which is known to be solid and bug free. If we know that the individual units that we use in a program are free from bugs, we do not have to look at the low level code to check for bugs but rather look at the way it has been integrated.
Unit tests normally cast individual functions bypassing them unknown piece of data and checking to see that the result is what is expected. In most cases, this is done by automated tools that run a series of tests on the functions and then report the results. Later in the course, we will be looking at such tools to aid in the production and running off unit tests.

## Black Box Testing

Black box testing is a way of designing unit tests. It treats every functional unit as a black box. This means that we have no idea what is inside the black box but we know that if we put a certain value into the box then a certain value should come out of the box. Because it is a black box, we have no idea what is happening inside the box and therefore cannot structure our tests to take advantage of this. Black box testing relies entirely on knowing that a certain input should produce a certain output. Black box testing is normally the first approach to designing unit tests.

## White Box Testing

White box testing is almost the opposite of black box testing. Whereas with black box testing we know nothing about the internal structure of the code, with white box testing we take advantage of the internal structure of a code to design tests that make sure dad every path through the code has been followed by at least one of the tests. If we simply rely on black box testing there is no guarantee that we would have tested every single path through the code. There could be rarely used pieces of code which have never actually been tested by black box testing and therefore we have no proof that they work correctly. White box testing produces additional tests which makes sure that every path through the code has been executed at least once by a test. This results in much higher confidence that the code actually works correctly.

## Integration Testing

Well unit testing tests the low level functionality, we also need to test to make sure that the individual units were combined correctly and that they work as a whole. This is the job of integration testing which does not look at the individual functions but looks at groups of functions to make sure that they work together correctly. A unit testing framework can be used to carry out integration testing or it can be carried out in other ways.

## Functional Testing

Functional testing is similar to integration testing but focuses on the business requirements of the application. Functional testing verifies that the output is correct without checking the internal state of the system to see if it was correct as well. Any gration test my check that you accessed the database, updated some information, and committed your change. The functional test for the same thing might simply check to see that the correct value had been stored in the database without checking to see exactly how it was done.

## End to End Testing

End to end tests replicate the user behavior and make sure that all the tasks the user would perform work as expected. In some cases, these can be difficult to automate. They can also be difficult to maintain add scenarios of how the user employs a software change over time.

## Load Testing

Load testing test the software under high loads. For a web application it might test to see if it can handle 100 simultaneous connections. A large data application might want to ensure that the database can handle 1000 simultaneous queries and give the required response time. Load testing is often combined with stress testing which tries to take it beyond the normal operating requirements to see when it will actually break. If stress testing reveals that your software will not break until well beyond your expected usage of it then you are assured that your software is in good shape.

## Security Testing

Security testing price to determine that the software meets the security requirements. It might involve checking that every web page can only be reached after signing on to the website. It might involve checking the level of user access to make sure that users can only access the information that they are allowed to access. It could also involve attempts to break the security and break into the system and either steal or alter information stored within it.

## Acceptance Testing

Acceptance testing verifies that the application meets all of the business requirements. The entire finished application is tested usually by running examples of how the user would actually use this system. If all of the acceptance tests are met, then it would indicate that all of the customer requirements had been met.

## Regression Testing

Regression testing is really a term that means that we perform our existing tests after every change to the code. The goal of regression testing is to make sure that any changes we made to the code do not break any of the existing code. Regression testing is used in many software development methodologies where after a change is made to the code, the regression tests are run to ensure that it is bug free before it is checked into the repository. The goal of regression testing in this case is to make sure of it the code that is checked into the shared repository for the project is free of bugs. if a bug got into the repository, then other developers would be able to check it out and then build upon buggy code. The result would to have that bug propagated through a lot of work which would have to be thrown away at some point.
