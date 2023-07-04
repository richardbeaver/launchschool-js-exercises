// Convert a String to a Signed Number

// In the previous exercise, you developed a function that converts simple
// numeric strings to integers. In this exercise, you're going to extend
// that function to work with signed numbers.

// Write a function that takes a string of digits and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the
// first character is a +, your function should return a positive number;
// if it is a -, your function should return a negative number. If there is
// no sign, return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in
// JavaScript, such as parseInt() and Number(). You may, however, use the
// stringToInteger() function from the previous lesson.

// Examples
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

//

/*
input: numeric string
output: number

- If first digit is '-':
  - Determine the integer conversion of the string from the second character
    to end
  - Return negated value of this number
- If first digit is '+':
  - Return integer conversion of the string from the second character to end
- Else:
  - Return integer conversion of entire string

*/

function stringToSignedInteger(string) {
  if (string.at(0) === '-') return stringToInteger(string.slice(1)) * -1;
  if (string.at(0) === '+') return stringToInteger(string.slice(1));
  return stringToInteger(string);
}

//

function stringToInteger(string) {
  let result = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string[idx];
    let numberValue = currentChar * (10 ** (string.length - idx - 1));
    result += numberValue;
  }

  return result;
}
