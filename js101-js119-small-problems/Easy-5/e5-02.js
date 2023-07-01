// Combining Arrays

// Write a function that takes two arrays as arguments and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates
// in the original arrays. You may assume that both arguments will always be
// arrays.

// Example:
console.log(
  union([1, 3, 5], [3, 6, 9])    // [1, 3, 5, 6, 9]
);

//

/*
input: 2 arrays
output: union of 2 input arrays as 1 array

- Create a variable `result` and initialize to an empty array
- For each value in the first input array:
  - If the value does not exist in `result`:
    - Add value to `result` array
- For each value in the second input array:
  - If the value does not exist in `result`:
    - Add value to `result` array
- Return `result` array

*/

function union(arr1, arr2) {
  let result = [];
  addOnlyUniqueValues(result, arr1);
  addOnlyUniqueValues(result, arr2);
  return result;
}

function addOnlyUniqueValues(resultArr, array) {
  array.forEach((item) => {
    if (!resultArr.includes(item)) {
      resultArr.push(item);
    }
  });
}
