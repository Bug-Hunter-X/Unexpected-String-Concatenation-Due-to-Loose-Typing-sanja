# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion.  The `foo` function intends to add two numbers, but due to JavaScript's loose typing, it performs string concatenation when one of the arguments is a string.

## Bug Description

The `bug.js` file contains a function that adds two arguments.  If one argument is a number and the other is a string, the function unexpectedly concatenates the string and the number instead of producing their numerical sum.

## Solution

The `bugSolution.js` file shows how to fix the bug using strict type checking or explicit type conversion.