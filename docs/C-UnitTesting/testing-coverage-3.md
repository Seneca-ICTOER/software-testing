---
id: testing-coverage-3
title: Testing Coverage
sidebar_position: 3
description: The importance and tools for code coverage.
---

# Testing Coverage

We design our tests based upon black box and white box testing principles. This means that the test data has been selected to prove that certain inputs provide the correct outputs for black box testing as well as to drive the code through certain branches based upon white box testing. Unfortunately, we can still miss code and leave code which has never been executed by any of the tests. Code which has never been executed is well known to have bugs in it that have never been found, for the obvious reason that it was never executed. The goal of testing coverage is to find the code which was executed as well as the code which has never been executed. Once we identify the code which has never been executed, we can then go on to design tests to exercise that particular piece of code.

Testing coverage is a facility offered by many compilers. While Visual Studio does have this capability, it is only available in the enterprise version of the tool. This means that it is not available to many programmers and therefore we will use the tool provided by GCC. While it would certainly be preferable to do our tests in the same environment that we do our coverage analysis. It is complicated by the fact that we are using the testing tool from Visual Studio and they do not make their coverage analysis tool available to us. As a result, we will largely be demonstrating how to use coverage analysis tool without actually applying it to our testing regime.

In order to do testing coverage, you normally have to compile with special flags or options that tell your compiler to build in additional code that actually counts the number of times every line is executed. Well theoretically, you could write your own coverage analysis tool by writing out a message every time align was executed. This would be fairly labor intensive to do and even if you automated it you would have to maintain two different versions of the code.
We are going to demonstrate how to do coverage using GCC with the following program which inserts one string into another.

```c
#include <stdio.h>
#include <string.h>

#define STR_SIZE 20

void insert(char dest[], int posn, char src[])
{
	int dlen = strlen(dest);
	int slen = 0, i;

	if(posn < dlen)
	{
		slen = strlen(src);
		for(i = dlen; i >= posn; i--)
		{
			dest[i + slen] = dest[i];
		}

		for(i = 0; i < slen; i++)
		{
			dest[posn +i] = src[i];
		}
	}
	else
	{
		strcat(dest, src);
	}
}

int main(void)
{
	char dest[STR_SIZE] = {"The fox"};

	insert(dest, 4, "red ");
	printf("%s\n", dest);

	return 0;
}
```

When we compile this code, we have to provide the additional flags to the compiler instructing it to build in the instructions to actually count how many times each line is executed. The command to compile the program shown above, insert.c, is:
` gcc -Wall -fprofile-arcs -ftest-coverage -o insert insert.c`
After we compile the code with these flags. We then have to execute the program once to generate data that is stored in various files. These files contain the information it will need to count how many times each line was executed. To actually prepare the files for viewing by humans, we use the gcov command:
` gcov insert.c`
This command produces a new file called insert.c.gcov which is shown next.

```
        -:    0:Source:insert.c
        -:    0:Graph:insert.gcno
        -:    0:Data:insert.gcda
        -:    0:Runs:1
        -:    1:#include <stdio.h>
        -:    2:#include <string.h>
        -:    3:
        -:    4:#define STR_SIZE 20
        -:    5:
        1:    6:void insert(char dest[], int posn, char src[])
        -:    7:{
        1:    8:	int dlen = strlen(dest);
        1:    9:	int slen = 0, i;
        -:   10:
        1:   11:	if(posn < dlen)
        -:   12:	{
        1:   13:		slen = strlen(src);
        5:   14:		for(i = dlen; i >= posn; i--)
        -:   15:		{
        4:   16:			dest[i + slen] = dest[i];
        -:   17:		}
        -:   18:
        5:   19:		for(i = 0; i < slen; i++)
        -:   20:		{
        4:   21:			dest[posn +i] = src[i];
        -:   22:		}
        -:   23:	}
        -:   24:	else
        -:   25:	{
    #####:   26:		strcat(dest, src);
        -:   27:	}
        1:   28:}
        -:   29:
        1:   30:int main(void)
        -:   31:{
        1:   32:	char dest[STR_SIZE] = {"The fox"};
        -:   33:
        1:   34:	insert(dest, 4, "red ");
        1:   35:	printf("%s\n", dest);
        -:   36:
        1:   37:	return 0;
        -:   38:}

```

This file contains the original source code and line numbers. The first column, before the line numbers is an indication of how many times that line was executed. The symbols "-:" indicate this is not an executable line and was never executed. Hash signs (#) indicate executable lines which were never executed. These are what you should be looking for in order to find code which was not tested. The numbers in the first column are the counts of how many times each executable line was executed.
