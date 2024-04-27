// Find Average

// In this provided, you're given an array of numbers nums, and a specific
// integer k. Your objective is to compute the average value of each contiguous
// subarray of length k within the given array.

// Requirements:

// The input will be an array of numbers and an integer k.
// You need to find the average of every contiguous subarray of size k in the array.
// The output should be an array containing these averages.

// Example test cases:

function sameValues(arr1: number[], arr2: number[]): boolean {
  if (arr1 === arr2) return true;
  return (
    arr1.length === arr2.length && arr1.every((val, idx) => val === arr2[idx])
  );
}

console.log(sameValues(findAverages([1, 2, 3, 4, 5, 6], 3), [2, 3, 4, 5])); // true
console.log(sameValues(findAverages([1, 2, 3, 4, 5], 2), [1.5, 2.5, 3.5, 4.5])); // true
console.log(sameValues(findAverages([10, 20, 30, 40, 50], 4), [25, 35])); // true
console.log(sameValues(findAverages([5, 5, 5, 5, 5], 1), [5, 5, 5, 5, 5])); // true
console.log(
  sameValues(
    findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5),
    [2.2, 2.8, 2.4, 3.6, 2.8]
  )
); // true

// =====================================================================

// k-window slide strategy

// 1. Just pointers - sum of whole window on each iteration

function findAverages(nums: number[], k: number): number[] {
  if (k > nums.length) {
    return [];
  }

  const averages = [];

  let start = 0;
  let end = start + k;

  while (end <= nums.length) {
    let sum = 0;

    for (let idx = start; idx < end; idx += 1) {
      sum += nums[idx]!;
    }

    averages.push(sum / k);

    start += 1;
    end += 1;
  }

  return averages;
}

// =====================================================================

// 2. Calculate sum from a subarray once, and modify on each iteration

function findAveragesModifySum(nums: number[], k: number): number[] {
  if (k > nums.length) {
    return [];
  }

  let sum = 0;
  for (let idx = 0; idx < k; idx += 1) {
    sum += nums[idx]!;
  }

  const averages = [sum / k];

  let prevStart = 0;
  while (prevStart + k < nums.length) {
    sum -= nums[prevStart]!;
    sum += nums[prevStart + k]!;

    averages.push(sum / k);

    prevStart += 1;
  }

  return averages;
}

// =====================================================================

// 3. Using array methods

function findAveragesArrayMethods(nums: number[], k: number): number[] {
  return Array.from(
    { length: nums.length - k + 1 },
    (_el, idx) => nums.slice(idx, idx + k).reduce((sum, num) => sum + num) / k
  );
}
