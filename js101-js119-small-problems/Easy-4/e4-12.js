// Convert a Signed Number to a String

// In the previous exercise, you developed a function that converts
// non-negative numbers to strings. In this exercise, you're going to extend
// that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer and converts it to a string
// representation.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String() and Number.prototype.toString(). You may,
// however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// Examples
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

//

/*
input: potentially signed integer
output: string version of input integer

- If sign of input number is negative:
  - Return concatenation of '-' with string of positive input value
- If sign of input number is positive:
  - Return concatenation of '+' with string of input value
- Else:
  - Return '0'

*/

function signedIntegerToString(int) {
  if (Math.sign(int) === -1) return '-' + integerToString(int * -1);
  if (Math.sign(int) === 1) return '+' + integerToString(int);
  return '0';
}

//

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

// =======================================

// Further Exploration

// If we try to run the following code using the initial implementation, it
// logs `false`. How would you fix this problem?
console.log(signedIntegerToString(-0) === "-0");

//

// We could add a third `if` statement that checks if the input number is `-0`
// using the `Object.is` class method, and returns "`-0`" if so:
// `if (Object.is(int, -0)) return "-0";`
