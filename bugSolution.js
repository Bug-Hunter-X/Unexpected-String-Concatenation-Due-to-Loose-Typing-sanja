function foo(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);

  // Check for NaN
  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: arguments must be numbers';
  }

  return a + b;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo('a', 2)); //Output: Invalid input: arguments must be numbers