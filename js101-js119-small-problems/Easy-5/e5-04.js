// Find the Duplicate

// Given an unordered array and the information that exactly one value in the
// array occurs twice (every other value occurs exactly once), determine which
// value occurs twice. Write a function that will find and return the duplicate
// value that is in the array.

/* eslint indent:"off"*/
// Examples:
console.log(
  findDup([1, 5, 3, 1]),                                // 1
  findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
            7, 34, 57, 74, 45, 11, 88, 67,  5, 58]),    // 73
);

//

/*
input: unorded array
output: value in the input array that occurs twice

1.
- Create a variable `values` (value: empty object)
- For each element in the array:
  - If a property exists in `values` of that element:
    - Return that element
  - Else:
    - Add property of that element to `values` with value of 1

2.
- For each item in the input array:
  - If the first index that holds the item is different then the index of the
    current iteration:
    - Return the item

*/

// 1.
function findDup1(inputArray) {
  let seen = {};

  for (let idx = 0; idx < inputArray.length; idx += 1) {
    let item = inputArray[idx];
    if (seen[item]) {
      return item;
    }
    seen[item] = true;
  }

  return null;
}

// 2.
function findDup2(inputArray) {
  for (let idx = 0; idx < inputArray.length; idx += 1) {
    let item = inputArray[idx];

    if (inputArray.indexOf(item) !== idx) {
      return item;
    }
  }

  return null;
}

/* eslint no-unused-vars:"off", no-undef:"off" */
