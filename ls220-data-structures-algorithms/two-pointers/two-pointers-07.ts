// Check Triple Match

// You have an ordered array nums consisting of integers. Your task is to
// determine whether there are any two distinct elements in the array where one
// element is exactly three times the value of the other element. The time
// complexity of the solution should be O(N).

// Restrictions:

// - You should not use built-in methods like filter, map, reduce, or find.
// - Do not use the includes method for checking existence in the array.
// - Avoid using indexOf or lastIndexOf.

// Example test cases:

/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);
console.log(checkTripleMatch([1]) === false);
console.log(checkTripleMatch([]) === false);

// All test cases should log true.

// =====================================================================

// current and runner pointers at indexes 0 and 1
// while runner < length of input:
//   target = 3 * val at current
//   if runner val === target:
//     return true
//   else if runner val < target:
//     incrment runner
//   else
//     increment current
//     if current === runner:
//       increment runner

function checkTripleMatch(sortedNums: number[]): boolean {
  if (sortedNums.length === 0 || sortedNums.length === 1) {
    return false;
  }

  let currentIdx = 0;
  let runnerIdx = 1;

  while (runnerIdx < sortedNums.length) {
    const target = sortedNums[currentIdx]! * 3;

    if (sortedNums[runnerIdx] === target) {
      return true;
    }

    if (sortedNums[runnerIdx]! < target) {
      runnerIdx += 1;
    } else {
      currentIdx += 1;

      // Or could increment `currentIdx` in a while loop here. Otherwise, the
      // main while loop will continue hitting this else block on each
      // iteration until next target is greater than or equal to value at
      // `runnerIdx` anyway
      // while (sortedNums[currentIdx]! * 3 < sortedNums[runnerIdx]!) {
      //   currentIdx += 1;
      // }
    }
  }

  return false;
}
