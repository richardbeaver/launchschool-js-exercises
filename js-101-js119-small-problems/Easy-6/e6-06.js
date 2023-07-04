// Sequence Count

// Create a function that takes two integers as arguments. The first argument
// is a count, and the second is the starting number of a sequence that your
// function will create. The function should return an array containing the
// same number of elements as the count argument. The value of each element
// should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater
// than or equal to 0. The starting number can be any integer. If the count
// is 0, the function should return an empty array.

// Examples:
console.log(
  sequence(5, 1),          // [1, 2, 3, 4, 5]
  sequence(4, -7),         // [-7, -14, -21, -28]
  sequence(3, 0),          // [0, 0, 0]
  sequence(0, 1000000),    // []
);

//

/*
input: 2 integers, a count and starting number of a sequence
output: array containg sequence created by input integers

- Count will always be >= 0
- Resulting array with have as many elements as count input
- For values in [1, count], each element is the result of multiplying the
  starting number by its associated number in the range up to count


- Create a variable `result` (value: empty array)
- For each number in [1, count]:
  - Append the result of multiplying the number by the starting number to the
    result array
- Return resulting array

*/

function sequence(count, startingNumber) {
  let result = [];

  for (let number = 1; number <= count; number += 1) {
    result.push(number * startingNumber);
  }

  return result;
}
