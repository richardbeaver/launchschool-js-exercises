// Convert a Number to a String

// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next, you're
// going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1,
// 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. Your function should do this the old-fashioned way
// and construct the string by analyzing and manipulating the number.

// Examples:
console.log(
  integerToString(4321),        // "4321"
  integerToString(0),           // "0"
  integerToString(5000),        // "5000"
  integerToString(1234567890),  // "1234567890"
);

//

/*
input: unsigned integer
output: string version of input integer

- Create a variable `result` (value: empty string)
- Create variable `curNumber` (value: input integer)
- While `curNumber` is not 0:
  - Take the remainder of `curNumber` divided by 10
  - Add this number to the front of the `result` string
  - Assign `curNumber` to `curNumber` divided by 10
- Return `result`


- Could also use an array as a "lookup table" (similar to exercise 9) for
  explicit conversion to string of `lastDigit` when we reassign `result` in
  the `while` loop, as opposed to implicit conversion using the `+` operator
  - Array would contain string equivalent of each number index in [0, 9]
  - ['0', '1', '2', ... , '9']

*/

function integerToString(number) {
  if (number === 0) return '0';

  let result = '';

  while (number > 0) {
    let lastDigit = number % 10;
    result = lastDigit + result;

    number = Math.floor(number / 10);
  }

  return result;
}
