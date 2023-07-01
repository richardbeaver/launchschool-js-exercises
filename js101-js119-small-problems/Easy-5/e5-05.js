// Combine Two Lists

// Write a function that combines two arrays passed as arguments, and returns
// a new array that contains all elements from both array arguments, with each
// element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have
// the same number of elements.

// Example:
console.log(
  interleave([1, 2, 3], ['a', 'b', 'c']),    // [1, "a", 2, "b", 3, "c"]
);

//

/*
input: 2 arrays
output: a new array containing all items in input arrays alternating by which
  array they came from

- Create a variable `result` (value: empty array)
- For each index in [0, length of input arrays):
  - Append to `result` the element at that index in the first array and in the
    second array
- Return `result`

*/

function interleave(array1, array2) {
  let result = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    result.push(array1[idx], array2[idx]);
  }

  return result;
}
