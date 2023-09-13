// Merge Sorted Lists

// Write a function that takes two sorted arrays as arguments and returns a
// new array that contains all the elements from both input arrays in sorted
// order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

// Examples:
console.log(
  merge([1, 5, 9], [2, 6, 8]),      // [1, 2, 5, 6, 8, 9]
  merge([1, 1, 3], [2, 2]),         // [1, 1, 2, 2, 3]
  merge([], [1, 4, 5]),             // [1, 4, 5]
  merge([1, 4, 5], []),             // [1, 4, 5]
);

//

/*
input: 2 sorted arrays
output: a new array that contains all elements from both arrays in sorted order

- Do not mutate input arrays


- Create a new empty array to hold the result
- Create two idx pointers, one for each input array
- While both pointers have not reached the end of their arrays:
  - If the next item in second array < next item in first array:
    - Append first array item to result array
    - Increment its pointer
  - Else:
    - Add item from first array
    - Increment its pointer
- If there are elements in first array:
  - Add those to result
- If there are elements in second array:
  - Add those to result
- Return resulting array

*/

function merge(array1, array2) {
  let result = [];

  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < array1.length && idx2 < array2.length) {
    if (array2[idx2] < array1[idx1]) {
      result.push(array2[idx2]);
      idx2 += 1;
    } else {
      result.push(array1[idx1]);
      idx1 += 1;
    }
  }

  while (idx1 < array1.length) {
    result.push(array1[idx1]);
    idx1 += 1;
  }

  while (idx2 < array2.length) {
    result.push(array2[idx2]);
    idx2 += 1;
  }

  return result;
}

/* eslint max-lines-per-function:"off" */
