---
id: introduction-testing
title: Introduction to Testing
sidebar_position: 1
description: An introduction to software testing and debugging.
---

# The Origin of this Course

This course grew out of the observation that students were not skilled at testing and debugging and that this skill has become required by the industry. The goals of this course are:

1. To show students the differences between testing and debugging.
2. To show students how to do proper software testing.
3. To show students many debugging techniques and tools.
4. To introduce students to how testing is done in industry and the tools used to manage it.

The fourth goal came from discussions with a test lead in industry. She is a developer who became a passionate tester of her company's point of sale product. She pointed out that new graduates came into the industry with little knowledge of the software testing life cycle nor the tools used to manage it. She also pointed out that working in Quality Assurance (QA) is where many new graduates and those on co-op work terms start out. Her input shaped the second half of the course where students get to use tools to manage a small project and do the necessary testing and debugging.

By the end of this course, the student will know how to test and debug code as well as be ready to move into a team in industry that uses QA as part of the software development life cycle.

# Introduction to Testing

Software is one of the most complex things built by humans. The complexity of modern software is such that it stretches the mental capabilities of almost all of us. Getting it right is far more difficult than it looks. You have to consider:

- will the software produce the correct results?
- will the software work with edge cases like no data?
- will the software have the required efficiency?
- will the software fail under high loads?
- will the software do something sensible when it receives bad data?
- has the software been integrated with the rest of the system so that there are no interactions which cause errors?
- if there is an unanticipated error, can the software recover and return itself to a stable state?

Software testing is the process of testing your software to see if it works and meets all of its performance and functional requirements. In the early days of software development, this area was neglected or given minimal time and effort. Over the years, software got more complex, bigger and the users expected higher quality. Thus, the once neglected area of testing has risen to being a vital part of the software development life cycle.

## Debugging

Testing to determine if there are problems in the software is only part of the process. After you determine that the software is incorrect, you need to find and fix the problem. This can be a highly complex and involved process that can take a long of time.

The process of debugging can be broken down into smaller steps:

- locate the source of the bug,
- determine how to fix the bug,
- implement the solution.

The first step, locating the source of the bug, is often the most time-consuming. The job of the developer is similar to that of a detective. You gather evidence and look for clues as to what might have caused the bug. Often, you do not have the information you need and need to insert print statements in the code to produce additional information. Tools like debuggers can also be valuable aids in tracking down bugs as they allow you to pause the code at key points and examine the values of the variables.

## What Does Testing Prove?

Testing proves that the tests you ran work correctly. It does not prove that your software is correct. Your software could pass all tests with flying colours yet still have undiscovered bugs in it. The amount of bugs discovered is proportional to the amount of time spent debugging. However, this is not a linear relationship as you discover lots of bugs when you start testing and fewer and fewer as you continue testing. At some point, you reach the point of dimishing returns where it will take enormous time and effort to discover more bugs. This is when testing usually stops. You have to hope that if you cannot find any more bugs, you customers will not find any more either.

Many people think that, after testing, the software is correct. While this might be true, it is usually false. Getting software perfectly correct is almost impossible. Great effort has been expended in finding ways to prove software correct but this has failed for all but the smallest programs.

Another common fallacy is that "I use XXX every day and never see a problem so it must be debugged." Most people use applications the same way every day and do not push the applications to their limits or explore all the features. All you are observing is that the program works correctly for what you use it for. Most applications are shipped with many known bugs. The developers thought that they were not worth fixing because the customer would probably never encounter them or there would be work-around solutions. The fact is that almost all software has bugs in it.

## Testing Versus Debugging

Testing and debugging are not the same thing. Testing is the process of running the software and determining that the results are what you expect them to be and, therefore, correct. Debugging is the process of trying to locate and fix a problem in code that you know has a bug in it. While testing and debugging are often carried out one after the other, they are separate processes and should not be confused with one another.

In a large company, the tests will be run by the quality assurance team. Once a bug is discovered, the bug report will be sent in to the project manager or team lead who will then assign a developer to debug and fix the problem. In a smaller company, they might not have sufficient personnel to staff the different roles and the developer might be the one who both runs the tests and fixes the bugs. Regardless of who actually does the testing and debugging, the important point to remember is that they are separate tasks.
