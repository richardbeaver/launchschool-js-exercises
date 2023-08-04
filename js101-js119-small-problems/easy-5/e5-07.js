// Multiply Lists

// Write a function that takes two array arguments, each containing a list
// of numbers, and returns a new array that contains the product of each pair
// of numbers from the arguments that have the same index. You may assume that
// the arguments contain the same number of elements.

// Example:
console.log(
  multiplyList([3, 5, 7], [9, 10, 11]),    // [27, 50, 77]
);

//

/*
input: two arrays of numbers
output: new array containing products of each pair of numbers in input arrays

- Create a variable `result` (value: empty array)
- For each index in [0, length of input arrays):
  - Multiply elements in each input array at that index
  - Append resulting value to `result`
- Return `result`

*/

function multiplyList(numbers1, numbers2) {
  let result = [];

  for (let idx = 0; idx < numbers1.length; idx += 1) {
    let item1 = numbers1[idx];
    let item2 = numbers2[idx];

    result.push(item1 * item2);
  }

  return result;
}
