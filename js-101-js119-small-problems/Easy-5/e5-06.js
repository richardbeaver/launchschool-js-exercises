// Multiplicative Average

// Write a function that takes an array of integers as input, multiplies all
// of the integers together, divides the result by the number of entries in
// the array, and returns the result as a string with the value rounded to
// three decimal places.

// Examples:
console.log(
  multiplicativeAverage([3, 5]),                   // "7.500"
  multiplicativeAverage([2, 5, 7, 11, 13, 17]),    // "28361.667"
);

//

/*

input: array of integers
output: a string of the multiplicative average of all items in input array,
  rounded to 3 decimal places

- Multiply all elements together
- Divide by number of elements in input array
- Return, as a string, result rounded to 3 decimal places

*/

function multiplicativeAverage(numbers) {
  let product = numbers.reduce((acc, num) => acc * num, 1);
  let average = product / numbers.length;

  return average.toFixed(3);
}
