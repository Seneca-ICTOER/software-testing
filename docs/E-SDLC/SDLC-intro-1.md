---
id: SDLC-intro-1
title: Software Development Life Cycle
sidebar_position: 1
description: An overview of the software life cycle.
---

# Software Development Life Cycle

When humans first started writing software, they really had little idea how to do it. The concept was relatively simple. Start writing software, continue writing software until complete. While this worked in the very early days for very simple software projects it started to breakdown quickly as people moved to larger more complex software projects. All of the problems came to a head in the 1960s during the system 360 operating system development project. This was an attempt to write an operating system for the IBM 360 mainframe computer. This was one of a largest, most complex software projects ever attempted. Problems started to appear during the development of the project and by the end of the project it had the same problems of so many projects of that era: over budget, behind schedule, and bug ridden. The problems were so severe that the project leader, Frederick Brooks, went on to write a book called _The Mythical Man Month_ in which he documented many of the problems that the project had. The result of all this was what we refer to as the _software crisis_, where people simply declared that they did not know how to write large software.

What followed was the development of the field known as _software engineering_ whose goal was to apply to software development the same kind of processes that engineers had developed for engineering projects. The work preceded in several directions. One direction involved the development of much better computer languages that detected a lot of problems at the compilation stage before they became problems during runtime. The other approach looked at the software development process itself. At that time the process was largely _ad hoc_ and their goal was to try and impose a formal process on development.

## The Software Development Life Cycle

What came out of all this work in studying how software was written and how it should be written was the software development lifecycle, depicted in the next diagram.

!["SDLC." ](/img/systems-development-life-cycle.png)

You start reading this diagram at the number one and then follow the numbers around the circle. Each of these numbers has a name associated with it that describes one particular phase of the software lifecycle. The idea is that you start with the planning phase and by the time you hit the maintenance phase the product has been delivered to the customer and is being maintained. The maintenance phase is the final phase of the life cycle. Each of the phases is described below.

### Planning

This is the phase where you plan the entire project. Whatever first things you should do is make a business case for the project. You are going to have to be able to justify the cost and time for the project and that justification creates the business case for carrying through with the project. You also have to look at the software environment necessary to build the project as well as the hardware necessary to build the project. In addition to hardware and software there is the human resources that also need to be acquired that have the appropriate skills to be able to carry out the project.

Finally, one of the big things you have to do in the planning stage is determine exactly what it is that you want to build. This is what we call the requirements gathering stage. While it might seem obvious what you want to build should be, experience has shown that it is far from obvious and that many people start developing software projects without actually having a clear definition of what the software should do in the end. One of the most common reasons for project failure in the early days was not that the software could not be built nor that it was producing the wrong answers but rather that they had built the wrong software because they did not really understand the requirements of the project. Today, we take requirements very seriously and requirements gathering has become a key part of the software development process.

### Analysis

The analysis phase is where the software designers and architects sit down with the requirements and try and figure out how they are going to map software onto that set of requirements. The first stage is to make sure that they really do understand the requirements. The requirements might have left details out or they might be misleading in some way. During this phase, the designers need to go back to the original client and get any outstanding questions answered to make sure that they really understand the requirements. The rest of your time is spent making sure that you understand all of the implications of the requirements and how different requirements interact with one another. Once you completely understand the requirements and have answered all the questions that arose, you are ready to go on and start the next phase of designing a solution to the problem.

### Design

The design phase is where the designers look at the requirements and try and map it onto a software solution. There is no single software solution to a problem but rather many different solutions each with their own benefits and costs. Different architectures and different technologies have to be considered in order to come up with a software solution. Once the technologies and implementation languages are chosen the design process itself can begin. This usually involves the development of high level architectures which are then refined to lower level designs. After the design is complete, then the implementation phase can begin.

### Implementation

The implementation phase is when the software is actually written. The design is given to the developers who then proceed to turn it into actual code. Once the code is produced, it can be compiled and then sent for testing.

### Testing and Integration

The testing phase is where the software is actually tested to determine if it works correctly and meets the specifications. Presumably, errors detected during testing can be corrected at this phase. Once the tests have been completed, the software can be integrated into its final environment. This could entail installing it onto customer's hardware and software platforms and ensuring that everything works as it should. This phase will typically culminate with the customer accepting the software as meeting its requirements.

### Maintenance

The life of a software artifact does not end after it has been delivered to the customer, but rather continues, as software always requires maintenance. The maintenance phase is typically the longest phase of the life cycle and can adapt this software to:

- changes in requirements,
- changes in legal rules,
- changes to hardware,
- changes to operating systems,
- and any other changes which have not been anticipated.

The maintenance phase is necessary to keep this software working over a longer period of time. Without maintenance, software often fails to work correctly due to its changes in its environment or fails to meet the evolving needs of the customer.

## Life Cycle Models

The first model of the software lifecycle was known as the waterfall model. Well this was widely adopted, problems began to appear and this was replaced by more modern models. While all of these models follow the basic steps outlined in the software development lifecycle, they each have their own unique take on how it should be done. We will examine a couple of the key lifecycle models in the following sections.

### The Waterfall Model

!["Waterfall Life Cycle Model." ](/img/waterfall-model.jpg)

The waterfall model was the first lifecycle model to be built. It is a literal interpretation of the software lifecycle diagram shown above. One starts with planning phase and one ends with the maintenance phase. One cannot proceed on to the next phase before the previous phase is complete. As you notice from a diagram the arrows only go in the forward direction. There is no reversing to go back and fix problems that you might have found. This inability to go back and fix problems turns out to be the Achilles heel all of the waterfall model. Once a phase is complete and you go on to the next phase you often find problems which were not apparent when the previous phase was conducted. At this point you would like to go back and fix the previous phase and then continue on from there. However, the waterfall model is very rigid and says you cannot go back and fix problems even though you recognized that they do exist. As a result, projects continue knowing that they've got problems that might eventually cause the failure of the project.

### Iterative Models

!["Iterative Life Cycle Model." ](/img/iterative-model.jpg)

The next step was the development of iterative life cycles which stated that you might not be able to get everything right on the first try. In an intricate lifecycle you go through the entire life cycle from planning to the end of testing but you do it on only part of the project. There are many ways to break the project down into subprojects. you might split a software into totally separate pieces or you might say that in the first iteration you are going to build the high level architecture and in subsequent iterations you are going to complete different pieces of the lower level architecture.

The iterative model means that you continue to go around the life cycle until you get it right. If you are developing a particular feature, you might find that testing reveals problems at which point you can go back analyze the problem design a new solution implement it and then test that. This process will continue until you have produced a product which meets all the testing requirements.

Once again the effective models by themselves were found to be overly restrictive. They required that you go through an entire life cycle before you fix your problems. If you recognize problems in the design once you start implementation you cannot go back to the design phase and fix them but have to go around the entire life cycle again before you can fix it. Once again they found that the life cycle was overly rigid to meet the needs of modern software development.

### Agile Models

With the development of the Internet, software moved from developing products for a customer's computers to developing software to run on the Internet. Suddenly, they had to compete directly with other people writing Internet software and they had to respond very quickly to innovations done by their competitors. They quickly found that even the iterative models could not respond fast enough. They would get partway through their design and have the requirements change due to new features which had to be worked into the design. As a result, they had to come up with a much more agile methodology that could deal with rapidly changing requirements. Previous methodologies had considered a change in requirements to be a major stumbling block that might well be the death of the project. Agile methodologies welcomed requirement changes and were able to deal with them easily.

Agile methods also ended the idea that you must complete one phase before continuing on to the next phase. They decided that once some of the requirements were known, you could go on to design part of the solution to meet those requirements. Further, once the design of part of the software was ready, you could go on to implement and even test that software. The result was that the entire team was kept continually busy. Previously, the implementation people were waiting for the designers to complete their job before they could start coding. Now, the coders can start working as soon as some of the design is completed. Letting the entire team work in parallel like this, allows for much higher productivity and reduced delivery times.

The typical agile process says that you start to gather requirements and as soon as you are sure that some of the requirements are complete you can get go onto design a solution meeting those requirements and then start to code and test that solution. Any changes in the requirements, can be accommodated easily because they typically only change one part of the software. Even if that software has already been implemented, it is still relatively small compared to the size of the entire project and is not that costly to re-implement if necessary. As a result, agile processes are no longer fearful of requirements changes but actually embrace requirements changes.
