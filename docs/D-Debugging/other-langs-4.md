---
id: other-langs-4
title: Debugging Other Languages
sidebar_position: 4
description: How to debug other languages.
---

# Debugging Other Languages

There are several languages that you can compile in Visual Studio and you can use Visual Studio two debug them all. In general, high level languages like C, C, Java, and C# are all debug in a fairly similar manner. You have to use different techniques when you are using a language which is much different than the compiled languages.

All languages we've been working with so far have been compiled into a binary executable. The compiler either inserts additional debug information into the executable or into an associated file that goes with it. This additional information allows the debugger to know where the individual lines start in the program and where the functions are. This allows the debugger to be able to know the variable names and to know exactly where a line of code starts and stops.

The languages we've dealt with so far have been _strongly typed_ languages. A strongly typed language does a lot of type checking during the compilation process. As a result, it detects a great number of errors at compile time and you get to fix them before your program ever executes.

There is also a class of languages which are weakly typed. This means that when you pass a parameter to a function they don't actually check to see that the type of the parameter is the right type to be passed to that function. Further, some of these languages might be able to have variables where you don't even declare the type of the variable. The type of the variable is determined by the value which is assigned to it and, if you assign a different value to the same variable, you can change the type of the variable. Many programmers think that this is a very handy thing to be able to do but it removes the compiler's ability to check to see that you are using the right types during the compilation process. Some of the languages in this category include scripting languages like Bash as well as popular languages like Python and JavaScript. All of these languages are much more weakly typed than C and C++.

The major problem with weakly typed languages is that all of the bugs, other than pure syntactic bugs, are runtime bugs. What this means, is that you do not discover the bugs until you actually run the program. It also means that if a line never gets executed it could well have a bug in it and you will never find it. Even more problematic, because you can actually change the type of the variables as the program runs, the program might work perfectly with one set of data yet fail on another set of data.

What this means for software testing is that you must:

- Be very careful in your testing coverage to make sure that every line in the program has been executed,
- Carefully select the data for each test to make sure that all possible data type changes are executed with different data types to ensure that they work correctly.

When you were debugging weakly typed languages, it is far more difficult to ensure that the program is bug free. In fact, all you can say is that the program has run correctly on the tests you have tried. The only way you get confidence in these programs, is by running them for a long time with a very large amount of data in the real world. This certainly does not prove that the program is correct, but it does demonstrate that it handles most real-world situations.

The development of strongly typed languages was one of the steps forward that allowed us to write software of the size and quality that we have today. It took years of experience to develop these languages. The downside of the strongly typed languages is that you need to declare the types of all variables and function parameters as well as spend time creating structures and classes. This is a time consuming process that many programmers prefer to skip. The trouble is that skipping these steps removes the benefits of strong typing and complicates the testing process.
