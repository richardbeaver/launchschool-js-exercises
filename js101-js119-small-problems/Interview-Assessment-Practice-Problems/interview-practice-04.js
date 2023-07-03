// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

//

/*

input: an array of integers
output: a 2-element array containing the numbers that are closest together


1. If order of resulting numbers did not matter:
- Create a copy of the input array and sort it
- Create variable `minDifference` (value: `undefined`)
- Create varible `minDiffIdx` (value: 0)
- For every index, `idx`, in [0, length of the array - 1):
  - Get the difference between elements at indexes `idx` and `idx` + 1
  - If `minDifference` is undefined OR difference < `minDifference`:
    - Reassign `minDifference` to this result
    - Reassign `minDiffIdx` to `idx`
- Return array of element at `minDiffIdx` and `minDiffIdx` + 1

- (If order mattered, we could find the numbers' original indexes in input
  array using the `indexOf` method, and place the one with the lower index
  first in the resulting array)


2. Without sorting:
- Create variable `minDiffIdxs` (value: [0, 1])
- Create variable `minDiff` (value: `undefined`)
- For every index, `idx1`, in [0, input length - 1):
  - For every index, `idx2`, in [idx1 + 1, input length):
    - If `minDiff` is `undefined` OR difference between numbers at indexes is
      smaller than `minDiff`:
      - Reassign `minDiff` and array of indexes
- Return elements at `minDiffIdxs`

*/

// 1.
function closestNumbers(numbers) {
  let sortedNumbers = numbers.slice().sort((a, b) => a - b);

  let minDiff = undefined;
  let minDiffIdx = 0;

  for (let idx = 0; idx < sortedNumbers.length - 1; idx += 1) {
    let curDiff = Math.abs(sortedNumbers[idx] - sortedNumbers[idx + 1]);

    if (minDiff === undefined || curDiff < minDiff) {
      minDiff = curDiff;
      minDiffIdx = idx;
    }
  }

  return [sortedNumbers[minDiffIdx], sortedNumbers[minDiffIdx + 1]];
}

// 2.
function closestNumbers2(numbers) {
  let minDiffIdxs = [0, 1];
  let minDiff = undefined;

  for (let idx1 = 0; idx1 < numbers.length - 1; idx1 += 1) {
    for (let idx2 = idx1 + 1; idx2 < numbers.length; idx2 += 1) {

      let curDiff = Math.abs(numbers[idx1] - numbers[idx2]);

      if (minDiff === undefined || curDiff < minDiff) {
        minDiff = curDiff;
        minDiffIdxs = [idx1, idx2];
      }
    }
  }

  return minDiffIdxs.map((idx) => numbers[idx]);
}

/* eslint no-unused-vars: */
