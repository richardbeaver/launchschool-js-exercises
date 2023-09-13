// Merge Sort

// Merge sort is a recursive sorting algorithm that works by breaking down an
// array's elements into nested subarrays, then combining those nested
// subarrays back together in sorted order. It is best explained with an
// example.

// Given the array [9, 5, 7, 1], let's walk through the process of sorting it
// with merge sort. We'll start off by breaking the array down into nested
// subarrays:
// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]

// We then work our way back to a flat array by merging each pair of nested
// subarrays back together in the proper order:
// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]

// Write a function that takes an array argument and returns a new array that
// contains the values from the input array in sorted order. The function
// should sort the array using the merge sort algorithm as described above.
// You may assume that every element of the array will be of the same data
// type—either all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

// Examples:
console.log(
  mergeSort([9, 5, 7, 1]),           // [1, 5, 7, 9]
  mergeSort([5, 3]),                 // [3, 5]
  mergeSort([6, 2, 7, 1, 4]),        // [1, 2, 4, 6, 7]

  mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']),
  // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]),
  // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
);

//

/*
input: an array
output: a new array with all elements of input array in sorted order using
  merge sort

1.
- If the input array contains zero or one element:
  - Return the input array
- Call merge sort on a slice containing the first half of the input array
  elements
- Call merge sort on a slice containing the first half of the input array
  elements
- Merge the resulting sorted sub-arrays
- Return the resulting merged array

2.
- Instead of creating slices to pass to `mergeSort` and then `merge`, which
  returns another new array, we could take in an array and optionally indexes
  to be sorted between
  - Use default parameters if no indexes provided
  - Don't need to create extra array copies

*/

// 1.
function mergeSort(inputArray) {
  if (inputArray.length <= 1) {
    return inputArray;
  }

  let secondHalfIdx = Math.floor(inputArray.length / 2);

  let leftHalfSorted = mergeSort(inputArray.slice(0, secondHalfIdx));
  let rightHalfSorted = mergeSort(inputArray.slice(secondHalfIdx));

  return merge(leftHalfSorted, rightHalfSorted);
}

//

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

/* eslint max-lines-per-function:"off", max-statements:"off" */
