// Convert a String to a Number

// The parseInt() method converts a string of numeric characters (including
// an optional plus or minus sign) to an integer. The method takes 2 arguments
// where the first argument is the string we want to convert and the second
// argument should always be 10 for our purposes. parseInt() and the Number()
// method behave similarly. In this exercise, you will create a function that
// does the same thing.

// Write a function that takes a string of digits and returns the appropriate
// number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry
// about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in
// JavaScript, such as String() and Number(). Your function should do this
// the old-fashioned way and calculate the result by analyzing the characters
// in the string.

// Examples
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

//

/*
input: numeric string
output: number


1.
- Create a variable `result` (value: 0) for building the numeric answer
- For each character in the numeric string:
  - Multiply number version of the character by 10^(length of string minus
    the index of the character minus 1)
      - (Index 0 of a 4-digit string should be multiplied by 10^3)
      - (Index 1 multiplied by 10^2)
      - Multiplication performs implicit conversion of strings to numbers
  - Add this result to `result`
- Return `result`

2.
- Create an object whose property key-value pairs are each number in [0, 9]
  paired with itself
  - This creates 10 string keys that map to their number equivalent
- Split input into characters and `map` to their number equivalent using the
  object of digit pairs
- Create a final value variable
- Iterate over array of digits, modifying the value variable for each one
  - Reassign value to [(value * 10) + current digit number]
- Return resulting final value

*/

// 1.
function stringToInteger1(inputString) {
  let result = 0;

  for (let idx = 0; idx < inputString.length; idx += 1) {
    let currentChar = inputString[idx];

    let numberValue = currentChar * (10 ** (inputString.length - idx - 1));
    result += numberValue;
  }

  return result;
}

// 2.
function stringToInteger2(inputString) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let inputDigits = inputString.split('').map((char) => DIGITS[char]);

  let value = 0;
  inputDigits.forEach((digit) => {
    value = (value * 10) + digit;
  });

  return value;
}

// =================================

// Further Exploration:

// Write a hexadecimalToInteger() function that converts a string representing
// a hexadecimal number to its integer value. Note that hexadecimal numbers
// use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the
// lowercase equivalents) correspond to decimal values of 10-15.

// Example:
console.log(hexadecimalToInteger('A') === 10);
console.log(hexadecimalToInteger('a9') === 169);
console.log(hexadecimalToInteger('4D9f') === 19871);

//

function hexadecimalToInteger(inputString) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  let inputDigits = inputString.split('').map((char) => {
    return DIGITS[char.toUpperCase()];
  });

  let value = inputDigits.reduce((total, num) => (total * 16) + num, 0);
  return value;
}

/* eslint no-unused-vars:"off", no-undef:"off", max-lines-per-function:"off" */
