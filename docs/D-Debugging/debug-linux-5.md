---
id: debug-linux-5
title: Debugging On Linux
sidebar_position: 5
description: Debugging on Linux.
---

# Debugging on Linux

On Linux the most common way to debug is to use the GNU debugger, **gdb**. This is part of the GNU compiler suite and works well with **gcc** and **g++**. This is a command line debugger which means that you control it via textual commands rather than using buttons as you do with the Visual Studio debugger. Other than the difference in how commands are issued, the use of the debugger is similar. Let's say we have the following C program which has an obvious bug in it.

```c
     1  #include <stdio.h>
     2
     3  #define MAX_SIZE 10
     4
     5  void function1(int *v, const int size)
     6  {
     7          int i;
     8
     9          for(i = 0; i < size; i++)
    10          {
    11                  v[i] = i;
    12          }
    13  }
    14
    15  int main(void)
    16  {
    17          int vals[MAX_SIZE] = { 0 };
    18          int i;
    19
    20          function1(vals, 15);
    21
    22          for(i = 0; i < MAX_SIZE; i++) printf("%d ", vals[i]);
    23          printf("\n");
    24  }
```

The following will show an example of using gdb. Please note that the output might be slightly different on your system due to different versions of Linux and the GNU tools. This was captured from Ubuntu running under Windows Subsystem Linux. We will start by running the program above.

```
rob@DESKTOP-AKDPEIV:~$ ./broken1
0 1 2 3 4 5 6 7 8 9
*** stack smashing detected ***: terminated
Aborted (core dumped)
```

Well, that did not work well. So, the question is, where did it go wrong? To find out, we need to use the debugger. Before we do that, we need to make sure that debugging symbols have been included in the binary executable. These is additional information that the compiler adds that allows the debugger to know what the variable names are as well as where lines begin and the text of the lines. Without this additional information, everything will be printed as hexadecimal addresses, which is just about impossible to read. To include the debugging information, you must compile with the `-g` flag as shown below.

```
gcc -Wall -g -o broken1 broken1.c
```

We start debugging with:

```
rob@DESKTOP-AKDPEIV:~$ gdb broken1
GNU gdb (Ubuntu 9.1-0ubuntu1) 9.1
Copyright (C) 2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
Type "show copying" and "show warranty" for details.
This GDB was configured as "x86_64-linux-gnu".
Type "show configuration" for configuration details.
For bug reporting instructions, please see:
<http://www.gnu.org/software/gdb/bugs/>.
Find the GDB manual and other documentation resources online at:
    <http://www.gnu.org/software/gdb/documentation/>.

For help, type "help".
Type "apropos word" to search for commands related to "word"...
Reading symbols from broken1...
(gdb)
```

This starts the debugging session and stops before the program starts to execute. It gives a `(gdb)` prompt which is where we can enter commands for the debugger. Let's say we just want to run the program and let it fail, to see where it is failing.

```
(gdb) run
Starting program: /home/rob/broken1
0 1 2 3 4 5 6 7 8 9
*** stack smashing detected ***: terminated

Program received signal SIGABRT, Aborted.
__GI_raise (sig=sig@entry=6) at ../sysdeps/unix/sysv/linux/raise.c:50
50      ../sysdeps/unix/sysv/linux/raise.c: No such file or directory.
(gdb) where
#0  __GI_raise (sig=sig@entry=6) at ../sysdeps/unix/sysv/linux/raise.c:50
#1  0x00007fffff5d5859 in __GI_abort () at abort.c:79
#2  0x00007fffff6403ee in __libc_message (action=action@entry=do_abort,
    fmt=fmt@entry=0x7fffff76a07c "*** %s ***: terminated\n") at ../sysdeps/posix/libc_fatal.c:155
#3  0x00007fffff6e29ba in __GI___fortify_fail (msg=msg@entry=0x7fffff76a064 "stack smashing detected")
    at fortify_fail.c:26
#4  0x00007fffff6e2986 in __stack_chk_fail () at stack_chk_fail.c:24
#5  0x0000000008001270 in main () at broken1.c:24
(gdb)
```

The output above shows that we typed `run` to begin executing the program. The program failed as expected and said it failed in a system call while raising a signal. This is not very helpful so we use the `where` command to ask it where the program is stopped. This produces the stack trace shown that tells us that it was on line 24 of main when it check to see if the stack was OK and found it had been corrupted.

This is not very useful information and we need to investigate further to find out where the program failed. To do this, we can set a breakpoint and run the program again.

```
(gdb) break broken1.c:9
Breakpoint 1 at 0x8001198: file broken1.c, line 9.
(gdb) run
The program being debugged has been started already.
Start it from the beginning? (y or n) y
Starting program: /home/rob/broken1

Breakpoint 1, function1 (v=0x7ffffffee490, size=15) at broken1.c:9
9               for(i = 0; i < size; i++)
(gdb) print i
$1 = 0
(gdb) step
11                      v[i] = i;
(gdb) step
9               for(i = 0; i < size; i++)
(gdb) print i
$2 = 0
(gdb) step
11                      v[i] = i;
(gdb) print i
$3 = 1
(gdb)
```

The output above shows how we can set a breakpoint by typing `break broken1.c:9` where we specify the file to break at and the line number. We then restart the program and it runs until it hits the breakpoint. At this point, we can use `print i` to print the value of the variable **i**. The `print` command allows use to display the values of the variables when the program is stopped at a breakpoint. We can get the debugger to execute the next line using the `step` command.

This process will eventually lead to an answer, but it is painfully slow. We take a guess that we might be running off the end of the array. To check this, we will insert a conditional breakpoint that will trigger only if the subscript goes out of range. This is shown below.

```
(gdb) break broken1.c:11 if i == 10
Breakpoint 2 at 0x11a1: file broken1.c, line 11.
(gdb) info breakpoints
Num     Type           Disp Enb Address            What
1       breakpoint     keep y   0x0000000000001198 in function1 at broken1.c:9
2       breakpoint     keep y   0x00000000000011a1 in function1 at broken1.c:11
        stop only if i == 10
(gdb) delete 1
(gdb) run
Starting program: /home/rob/broken1

Breakpoint 2, function1 (v=0x7ffffffee490, size=15) at broken1.c:11
11                      v[i] = i;
(gdb) print i
$1 = 10
(gdb)
```

We can create a conditional breakpoint by adding a condition onto the end of a breakpoint `break broken1.c:11 if i == 10` which will break only if the value of i becomes 10. Then, we need to delete the original breakpoint. To do this, we use `info breakpoints` to display all breakpoints and then `delete 1` to delete breakpoint 1. Then, we run the program and it breaks where we expected. To make sure the subscript is out of range, we print it and we now know that we have run off the end of the array.

This is a short example of how to use gdb. The `help` command in gdb will display a list of commands but the table below shows the most useful commands.

| Command           | Explanation                                                                                                                       |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| break _location_  | Sets a breakpoint at the location. The location could be a file:line or it could be the name of a function (eg. break function1). |
| continue          | Resume execution and stop at the next breakpoint or when the program ends.                                                        |
| delete _breaknum_ | Delete the indicated breakpoint. The numbers come from info breakpoint.                                                           |
| info breakpoints  | Displays a list of active breakpoints along with numbers which can be used to delete them.                                        |
| finish            | Continues execution until the end of the current function and then breaks.                                                        |
| print _var_       | Display the value of the provided variable or expression.                                                                         |
| step              | Execute the current line and stop before the next line is executed.                                                               |
| watch _var_       | The program whenever the value of the variable is changed and print out the old and new value of the variable.                    |
| where             | Display a stack trace showing you where you are in the program.                                                                   |
