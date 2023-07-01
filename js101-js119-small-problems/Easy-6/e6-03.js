// Reverse Number

// Write a function that takes a positive integer as an argument and returns
// that number with its digits reversed.

// Examples:
console.log(
  reverseNumber(12345),    // 54321
  reverseNumber(12213),    // 31221
  reverseNumber(456),      // 654
  reverseNumber(12000),    // 21 -- Note that leading zeros in the result get dropped!
  reverseNumber(1),        // 1
);

//

/*
input: positive integer
output: input number with digits reversed

1.
- Create a variable `reverseDigits` (value: empty string) to hold digits from
  input number
- Create a variable `currentNum` (value: input number)
- While `currentNum` is not equal to `0`:
  - Append to `reverseDigits` the remainder of `currentNum` divided by 10
  - Assign `currentNum` to the floor of `currentNum` divided by 10
- Return the number conversion of `reverseDigits`

2.
- Get the string conversion of the input number
- Reverse string and return number conversion

*/

// 1.
function reverseNumber(number) {
  let reversedDigits = '';

  while (number !== 0) {
    let lastDigit = number % 10;
    reversedDigits += lastDigit;

    number = Math.floor(number / 10);
  }

  return Number(reversedDigits);
}

// 2.
function reverseNumber2(number) {
  let reversed = String(number).split('').reverse().join('');
  return Number(reversed);
}

/* eslint no-unused-vars: */
