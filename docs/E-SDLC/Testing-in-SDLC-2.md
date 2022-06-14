---
id: Testing-in-SDLC-2
title: Testing in the Life Cycle
sidebar_position: 2
description: How testing fits into the software life cycle.
---

# Testing in the Software Development Life Cycle

As we saw when we looked at the software development lifecycle, testing is one of the phases of the life cycle. What might not be obvious, is how we can fit testing into a modern agile iterative model. It turns out the testing has its own lifecycle which we can fit into the overall software development like cycle.

## Times to Test

Work on testing begins as soon as the project starts and continues until the product is no longer being maintained. The following sections describe how testing can be done in the phases of the life cycle.

### During Requirements

The planning phase when requirements are being gathered, we can actually start to work on our test plans. Once the requirements are partially known, we can start to:

- plan the scope of the quality assurance effort,
- design black box tests that will determine if the resulting software meets requirements.

This will allow the quality assurance team to be active and productive even while requirements are still being gathered. Problems identified by the preparation for testing at this point can be fed back to the requirements team and corrected at low cost.

### During Design

As the design is finalized and ready to be implemented, the testing team can start to actually write some of their tests and they can now have a much better idea of harvest software is going to work. It might be possible at that point to actually start to design some integration tests based upon how the architecture is being revealed.

### During Implementation

Testing should naturally be part of the implementation process. Unit tests should be available as the software is being written so with the developers can quickly check their functions to determine if they work correctly. Finding and fixing bugs in small pieces of software is relatively easy. Letting these bugs be propagated into much larger pieces of software makes them much more difficult to find and fix. Therefore it is actually vital that unit testing be done by the programmers as soon as they finish the functions to make sure that they behave as they should. The quality assurance team can be writing unit tests as the developers finish each function or module.

### During Testing

You would expect that most of the testing would take place in the testing phase, however, much of the low-level unit testing was probably done during the implementation phase. What is left is:

- final integration testing to ensure the software components are completed and assembled correctly,
- manual testing to determine if the user interface works as required.

### During Delivery

This is the phase in which acceptance testing can be conducted. The final tests can be carried out on the customer’s premises with the system deployed. On passing, the customer can sign off on accepting the software.

### During Maintenance

During the maintenance phase the software needs to be kept up to date and even modified to implement new requirements. This requires:

- regression testing to ensure that changes have not introduced any bugs into the existing software,
- test plans for new features which have been added and the execution of these tests,
- manual tests for changes in the user interface.

## Approaches to Software Development

There are numerous approaches to software development. In this section, we will look at a couple of the most successful techniques and see how testing is used in them.

### Incremental Development

Incremental development is a technique that builds software in pieces. The first piece is the architectural skeleton of the system. this would be the backbone of the system that really has little functionality on its own but allows all of the prime components to communicate with one another and it allows them to be built separately and plugged in as they are completed. This is a very successful technique because it breaks the software down into much smaller pieces that need to be implemented. Further, as each component is fitted into the architectural backbone it can then be tested.

During incremental development the test team will be working to design new tasks for the software as it is completed. These could be unit tests for the low level components as well as integration tests to determine whether the new software components have been integrated with the rest of the system correctly. As user interface components are added in, then there could be manual testing to ensure that the user interface does perform as required. Incremental development also implies incremental test development and testing. This type of development allows the development team to work hand in hand with the quality assurance team.

### Continuous Integration

Continuous integration is a process for developing software where all the software is stored in a central repository. A repository is usually a network-based storage area that not only stores the software as it is checked in, but versions software by storing all the previous versions. This makes it easy to back out a change in case a mistake is made by simply going back to a previous version of a software.

Since software is developed by a large team, it is important to ensure that the software in the repository that everyone checks out to add their own modifications to should be as clean as possible. If bugs get into the code in the repository, than other developers will check out that code and add onto it. This can cause days or even weeks of work to have to be discarded. To prevent the introduction of bugs into the repository, a rigorous test suite is run on all modifications done by every developer before it is checked into the repository. Software can be checked into the repository only after it has passed all of the tests.

This testing process can take a considerable amount of time and developers often finish a new feature at the end of the day and then run the test suite as they leave work for the day and let it run during the evening. This allows the developer to not waste time waiting for the test suite to finish running. In large software projects, it is not unusual for the test suite to take two to three hours to run.

Continuous integration works best if the software that is checked in is relatively small. This means that you might want to do a check in after implementing a relatively small new feature that might involve just a few new classes or a few new functions. If there is no test already in the system for the software you are adding then you will typically add new tests for it. If you are changing the software to fix a bug, that it is common to include a test the checks to make sure that the old bug never occurs again. A test like this would check specifically for the old bug because it could always come back and you want to make sure that you can detect it in case that ever happens.

A typical scenario using continuous integration would look like this:

- you get a request to fix a bug,
- you check out a copy of the software from the repository to your local computer,
- you implement the bug fix,
- optionally, you add a test case to check that the bug you fixed is really fixed,
- you build the software locally and run the test suite,
- if the software passes all the tests, you check the modified code into the code repository.

Adding new code features would follow a similar series of steps but might involve the addition of new tests to the test suite to test the new features added. These tests might be added by the developer or by working with a member of the quality assurance team.

Continuous integration can be done either manually or automated. When automated, the developer checks in the software and the software is built and the tests are run automatically. Reports are then sent to the interested parties to tell them of the success or failure of the operations. Many systems will not integrate the software into the main code base unless it has built correctly and passed all tests. One possible way of automatiing continuous integration is shown below.

!["Automated Continuous Integration" ](/img/continuous-integration-1.png)

### Test Driven Development

Test driven development writes the tests first and then the code to be tested after the tests are written. The test team usually gets together with the developers and agrees on functions or classes and what they should do. The test team then crafts the tests to ensure the software performs correctly. Once the tests are complete, the developers write the software, ensuring that it does exactly what is required to pass the tests.

The advantage of test driven development is that there are no surprises for the developers. They are not faced with writing code and then finding it fails a test they did not expect and need to rewrite the code to pass the test. Now, all tests are known in advance and the code can be crafted to do exacltly what is required.

Test driven development can be used as part of continuous integration. The quality assurance team just needs to collaborate closely with the developers and get the tests in place before the coding is done. Once the coding is done, it is tested immediately and, if the tests are passed, it can be checked in. This has the advantage that the tests for all new code are produced automatically as part of the development process.
