---
id: need-for-testing-2
title: The Importance of Testing
sidebar_position: 2
description: Illustrates the importance of testing by looking at a few famous software failures.
---

# The Need for Testing

We can see the need for software testing by looking at some of the famous failures in the software field. As we look at a few of these failures, ask yourself what is the root cause and what could be done to prevent these failures in the future. You should also remember that each of these failures was produced by teams who would be considered experts in their fields. This is a lesson to all of us on how easy it is to introduce bugs into software and how we should not assume we have expertise in areas where we do not.

## Famous Software Bugs

The history of software is littered with some of its greatest failures. In this section, we will look at some of the most famous failures in software. These are certainly not all of the failures but a small number that turned out to be significant. Each of these failures happened for a different reason and yet all of them had a significant effect. As you read through these failures, you should look at the reasons behind them including the failure of the human thinking that led to these epic bugs.

## The First Bug

The first bug was discovered some 70 years ago by Grace Hopper, who was the developer of the COBOL language. She was using the Harvard mark II computer and discovered that a calculation was not being performed correctly. The problem was tracked down to a moth which was stuck between relays inside the computer. As a result, all problems associated with software have been described as bugs.

### Therac-25

The Therac-25 was a medical instrument that delivered radiation to cancer patients. The initial version had hardware controls that determined exactly how the machine should operate. At some point in the 1980s these hardware controls were replaced with software controls. The machine could operate in two modes: a low power mode as well as a high-power mode. The machine switched from one mode to the other by spreading some magnets which caused the beam to spread either wide for a shallow dose or narrow for a deeper dose of radiation.

On the fateful day of the incident, the operator made a mistake on the entry keypad which triggered a bug and gave the patient a lethal dose of radiation. Initially, they felt that it was an electrical problem inside the machine, although they could not find any electrical problems. At this point, they did not believe that software could be at fault and therefore did not look at the software to see if there was a bug in it.

Subsequent analysis of the software showed the problem to be a race condition. They had developed the software so that it would run as two separate threads that shared variables. Unfortunately, they had not synchronized access to these variables and it became random which thread would change the variable first.

Further analysis of the incident showed that the programmer who had worked on it had no experience working with concurrent software. Secondly, there had been no formal testing and evaluation of the software by a third party. Thirdly, the system did detect an error which it displayed as "malfunction 54" and the operator had no idea what that meant. Finally, the company itself, Atomic Energy of Canada Limited, said that the programmer no longer worked for the company, had moved and not left a forwarding address.

### The Ariane 5 Disaster

In June of 1996 the first Ariane 5 rocket was launched from French Guiana carrying a payload of scientific instruments into space. Thirty seven seconds after launch, the rocket rotated 90 degrees in the wrong direction, and less than two seconds later started to break up due to aerodynamic forces. This triggered the rocket's self-destruction mechanism causing it to explode in midair.

This disaster cost approximately $370 million and led to a public inquiry asking what happened. It resulted in a delay of scientific research for many years until new equipment could be launched into space. So, the question is, how did the rocket manage to go off course in mid-flight causing its own destruction?

The cause of the disaster was tracked down to a bug in the inertial reference system. A 64 bit floating point value was used to track a value called the horizontal bias. This variable was large enough to hold the required precision but at some point in the calculation the value was assigned to a 16 bit integer. This worked for the first few seconds of the flight, but the value soon exceeded the capacity of a 16 bit integer. The software detected the problem and then populated this variable with a diagnostic value.

Further analysis of the problem yielded a lot of very concerning facts. First, the diagnostic value put into the variable by the processor was intended for debugging purposes only, yet it had been interpreted as a valid flight value. All the Ariane 5 software was inherited from the software for the Arian 4 rocket. The Arian 4 did not actually use the value in its calculations therefore it had never detected any problem with the value. Finally, the Ariane 5 was launched with a much steeper trajectory than the Ariane 4 and this caused the problem to manifest itself.

This disaster shows several common mistakes in software development testing. One is to inherit software from a previous software base without making the necessary changes. The second, is an obvious lack of testing to make sure things worked before using them in an actual production system. The third is related to changes in project requirements late in the project when you decide that you're going to launch the rocket on a steeper path than any rocket has been launched before. Suddenly your software is exposed to a new environment in which it has never been tested. We also see that because the same software had worked on the Ariane 4, they had unreasonable confidence it would work on the Ariane 5. Finally, we see that part of the testing code itself was responsible for the failure. As we look at this situation, we see that the same failures are applicable to many software systems.

### The Mars Climate Orbiter

The Mars climate orbiter was a $235 million weather satellite designed for Mars. It would orbit the planet over a Martian year and report on the planet's temperature and photograph dust storms. All this information would be sent back to earth for analysis. On September 23rd, 1999 the orbiter was approaching Mars and stowed its solar arrays to protect them during its descent into the upper layers of the Martian atmosphere. It then used its reaction control systems to position itself in the upper Martian atmosphere. At one point it passed behind Mars, losing radio communication with Earth, and was supposed to reappear and start transmitting data. In reality, the craft was not on the correct trajectory and it had actually entered and burned up in the Martian atmosphere.

The story of how this could happen is similar to the story of many airline disasters. It is not the result of a single problem but the result of several different problems occurring at the same time. One of the problems was cosmic radiation. During the flight, the satellite had to reposition itself several times. The calculations for this were done assuming that it was operating in a vacuum. Unfortunately, it had large solar arrays which were catching the sun's rays causing a solar sail effect. This happens because the light from the sun exerts a very small force which actually moves the spacecraft. Although the force is minuscule, over a trip of 196 million kilometers, the effect added up to place the satellite 170 kilometres from where it expected to be.

Investigators also found a bug in the ground control software. Software from a third party used values in an Imperial unit of LB-SEC. NASA's own internal software operated in metric using the unit Newton-seconds. The software which was supposed to convert one value to the other had a small bug in it which led to slight discrepancies in the position of the spacecraft. These were combined over millions of kilometers to yield a significant deviation from the intended course. Worryingly, the quality assurance team had not even discovered that part of the software was using one set of units and another part of the software was using a different set of units.

There was a lack of communication between various parts of the teams. An opportunity to do a course correction was missed because the team was busy controlling three satellites at once. Calculations on the ground were performed manually rather than using the software which the satellite had used and this meant that they were doing one set of calculations while the satellite was doing another set of calculations and no one realized that they were coming up with different answers.

## Summary

This is just a small selection of famous software bugs. You are probably aware of many more bugs that have far less devastating consequences. WHile we are getting better at producing high quality software, we are far away from perfection.

What we should learn from this is that it is easy to get bugs in software and it is very hard to discover and fix them. We also see that many bugs occur not for a single reason but due to many things happening at the same time. These situations make it even more difficult to detect a bug in advance unless you have the ability to anticipate everything that is going to happen in the real world. Software is usually written by developers sitting in rooms filled with computers. They are asked to anticipate everything that can happen in the real world and to program for it. However, they cannot anticipate everything which can happen in the real world.
