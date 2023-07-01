// Array Average

// Write a function that takes one argument, an array of integers, and returns
// the average of all the integers in the array, rounded down to the integer
// component of the average. The array will never be empty, and the numbers
// will always be positive integers.

// Examples:
console.log(
  average([1, 5, 87, 45, 8, 8]),       // 25
  average([9, 47, 23, 95, 16, 52]),    // 40
);

//

/*
input: array of positive integers
output: average of all integers in input array, rounded down to nearest integer

- Sum all elements of input array
- Divide sum by number of elements in input array
- Return floor of division result

*/

function average(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  let average = sum / numbers.length;

  return Math.floor(average);
}
