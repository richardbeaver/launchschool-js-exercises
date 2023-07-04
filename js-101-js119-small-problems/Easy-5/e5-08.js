// List of Digits

// Write a function that takes one argument, a positive integer, and returns
// a list of the digits in the number.

// Examples:
console.log(
  digitList(12345),       // [1, 2, 3, 4, 5]
  digitList(7),           // [7]
  digitList(375290),      // [3, 7, 5, 2, 9, 0]
  digitList(444),         // [4, 4, 4]
);

//

/*
input: positive integer
output: array containing digits of input number (as numbers)


1.
- Create a variable `result` (value: empty array)
- Create a variable `currentNum` (value: input number)
- While `currentNum` is not equal to `0`:
  - Append remainder of `currentNum` divided by 10 to `result`
  - Assign `currentNum` to the floor of (the result of dividing `currentNum`
    by 10)
- Return reverse of `result` array

(Could also prepend each new value to `result` instead of appending and
reversing `result` at the end. However, this would create a less efficient
algorithm as each prepend requires shifting all elements in the array.)


2.
- Convert input number to a string
- Split string into an array of characters
- Convert each digit string to its number value
- Return resulting array

*/

// 1.
function digitList(number) {
  let result = [];

  while (number !== 0) {
    let lastDigit = number % 10;
    result.push(lastDigit);
    number = Math.floor(number / 10);
  }

  return result.reverse();
}

// 2.
function digitList2(number) {
  return String(number).split('').map((digitString) => Number(digitString));
}

/* eslint no-unused-vars:"off" */
