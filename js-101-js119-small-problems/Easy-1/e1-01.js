// Isn't it Odd?

// Write a function that takes one integer argument, which may be positive,
// negative, or zero. This method returns true if the number's absolute value
// is odd. You may assume that the argument is a valid integer value.

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//

/*
- Problem

inputs: an integer
output: boolean for whether the input's absolute value is odd

Rules:
- input can be any parity
- input will always be a valid integer


- Algorithm

1. Declare a variable `absValue` and initialize it to the absolute value of
  the input
2. Return whether the remainder of `absValue` divided by 2 is equal to 1

*/

function isOdd(num) {
  let absValue = Math.abs(num);
  return absValue % 2 === 1;
}
