// Sum Of Digits

// Write a function that takes one argument, a positive integer, and returns
// the sum of its digits. Do this without using for, while, or do...while
// loops - instead, use a series of method calls to perform the sum.

// Examples:
console.log(
  sum(23),           // 5
  sum(496),          // 19
  sum(123456789),    // 45
);

//

/*
input: a positive integer
output: sum of digits in input

- Could use remainder operator to get each last digit
  - Would be best in a while loop, which we're not using in this problem
- Or, convert input to string and add number conversion of each character
  into a total sum

1.
- Could use an explicit variable and `forEach`
2.
- Or do summation entirely with `reduce` method

*/

// 1.
function sum(number) {
  let sum = 0;

  String(number).split('').forEach((digit) => {
    sum += Number(digit);
  });

  return sum;
}

// 2.
function sumReduce(number) {
  return String(number).split('').reduce((sum, digit) => sum + Number(digit), 0);
}

/* eslint no-unused-vars: */
