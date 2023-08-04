// Counting Up

// Write a function that takes an integer argument and returns an array
// containing all integers between 1 and the argument (inclusive), in
// ascending order.

// You may assume that the argument will always be a positive integer.

// Examples:
console.log(
  sequence(5),    // [1, 2, 3, 4, 5]
  sequence(3),    // [1, 2, 3]
  sequence(1),    // [1]
);

//

/*
input: integer
output: array of all integers in [1, input argument] in ascending order


1.
- Create empty result array
- For each number in [1, input integer]:
  - Append number to result array
- Return result array

2.
- Use an array-like object/iterable, and a function that maps each element to
  its index + 1, to create the resulting array

*/

// 1.
function sequence(count) {
  let result = [];

  for (let number = 1; number <= count; number += 1) {
    result.push(number);
  }

  return result;
}

// 2.
function sequenceArrayFrom(count) {
  return Array.from({ length: count }, (_, idx) => idx + 1);
}

/* eslint no-unused-vars: */
