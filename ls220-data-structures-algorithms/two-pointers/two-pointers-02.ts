// Reduce To Unique

// Given an array of integers nums, sorted in ascending order (where elements
// are equal to or increase as you move through the array), your task is to
// implement a function reduceToUnique. This function should modify the array
// in-place ensuring that it starts with a sequence of unique elements each
// following their original order in the array. After these modifications,
// return the count of these unique elements.

// The elements in the latter part of the array, after the unique ones, are
// not important. The key requirement is that the array should remain the same
// object as the input and should be modified to reflect the changes.

// Example Test Cases:

// You should name the function `reduceToUnique` for the tests to work correctly.

function testReduceToUnique(array: number[], expectedLength: number): boolean {
  const originalReference = array;
  const resultLength = reduceToUnique(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array
    .slice(0, expectedLength)
    .every((val, idx, arr) => idx === 0 || val > arr[idx - 1]!);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testReduceToUnique([], 0));
console.log(testReduceToUnique([3, 3, 5, 7, 7, 8], 4));
console.log(testReduceToUnique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testReduceToUnique([0], 1));
console.log(testReduceToUnique([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testReduceToUnique([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.

// =====================================================================

// anchor-runner pointer strategy

/*

current = 0, runner = 1
while runner < arr.length:
  lastNum = arr[current]
  if arr[runner] === lastNum:
    runner += 1
    continue
  current += 1
  arr[current] = arr[runner]
  runner += 1
return current + 1

*/

function reduceToUnique(sortedNums: number[]): number {
  if (sortedNums.length === 0 || sortedNums.length === 1) {
    return sortedNums.length;
  }

  let current = 0;
  let runner = 1;

  while (runner < sortedNums.length) {
    if (sortedNums[current] !== sortedNums[runner]) {
      current += 1;
      sortedNums[current] = sortedNums[runner]!;
    }
    runner += 1;
  }

  return current + 1;
}
