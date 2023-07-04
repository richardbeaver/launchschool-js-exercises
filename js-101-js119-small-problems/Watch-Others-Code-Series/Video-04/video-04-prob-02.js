// Given an array of integers, find an index N where the sum of the integers
// to the left of N is equal to the sum of integers to the right of N. If there
// is no index that will make this happen, return -1.

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3);

//

/*
input: array of integers
output: index where numbers on left and right sides have equal sums

- Number at a given index is not included in either sum


- For each index, `idx`, in [0, array length):
  - If sum of numbers in [0, `idx`) and in (`idx`, array length) are equal:
    - Return `idx`
- Return -1

*/

function findEvenIndex(numbers) {
  for (let idx = 0; idx < numbers.length; idx += 1) {
    let leftSum = getSum(numbers, 0, idx);
    let rightSum = getSum(numbers, idx + 1);

    if (leftSum === rightSum) return idx;
  }

  return -1;
}

// =======

// Using `slice` and `reduce` methods
function getSum(array, startingIdx, endingIdx = array.length) {
  return array.slice(startingIdx, endingIdx).reduce((sum, num) => sum + num, 0);
}

// Iterating over indexes (avoids array copying)
function getSum_ForLoop(array, startingIdx, endingIdx = array.length) {
  let sum = 0;
  for (let idx = startingIdx; idx < endingIdx; idx += 1) {
    sum += array[idx];
  }
  return sum;
}

// console.log(getSum([1, 2, 3, 4, 5], 0)    === 15);
// console.log(getSum([1, 2, 3, 4, 5], 0, 1) === 1);
// console.log(getSum([1, 2, 3, 4, 5], 3)    === 9);
// console.log(getSum([1, 2, 3, 4, 5], 3, 3) === 0);
// console.log(getSum([1, 2, 3, 4, 5], 3, 4) === 4);

/* eslint no-unused-vars:, camelcase: */
