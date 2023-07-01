// Halvsies

// Write a function that takes an array as an argument and returns an array
// that contains two elements, each of which is an array. Put the first half
// of the original array elements in the first element of the return value,
// and put the second half in the second element. If the original array
// contains an odd number of elements, place the middle element in the first
// half array.

// Examples:
console.log(
  halvsies([1, 2, 3, 4]),       // [[1, 2], [3, 4]]
  halvsies([1, 5, 2, 4, 3]),    // [[1, 5, 2], [4, 3]]
  halvsies([5]),                // [[5], []]
  halvsies([]),                 // [[], []]
);

//

/*
input: an array
output: nested array with half of elements from input array in first sub-array,
  and half in second (middle element in first sub-array if needed)

- Create a `result` variable (value: array containing two empty arrays)
- Create a `secondHalfIdx` variable (value: ceiling of (input array length / 2))
- For each element of input array at indexes [0, `secondHalfIdx`):
  - Append element to first `result` sub-array
- For each element of array at indexes [`secondHalfIdx`, length of input array):
  - Append element to second `result` sub-array
- Return `result`

*/

function halvsies(arr) {
  let secondHalfIdx = Math.ceil(arr.length / 2);

  let firstHalf = arr.slice(0, secondHalfIdx);
  let secondHalf = arr.slice(secondHalfIdx);

  return [firstHalf, secondHalf];
}
