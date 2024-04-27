// Count Pairs

// In this problem, you are provided with an ascending order array of integers,
// `nums`. Your task is to count the number of pairs in this array whose sum is
// greater than a given target value, `target`.

// Constraints:

// - The array `nums` is sorted in ascending order.
// - No duplicate pairs should be counted. For instance, if nums contains [1, 2]
//   and target is 2, then (1, 2) is a valid pair since 1 + 2 > 2. You shouldn't
//   include (2, 1)

// Example test cases:

console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs

console.log(countPairs([5], 1) == 0);
// No pairs

console.log(countPairs([], 1) == 0);
// No pairs

// =====================================================================

// 1:
// Use array methods to collect all pairs into 2-element arrays - count number
// that sum to > target
// - Time: O(n^2), Space: O(n^2)

function countPairsArrayMethods(sortedNums: number[], target: number): number {
  const allPairs = sortedNums.flatMap((firstNum, idx) =>
    sortedNums.slice(idx + 1).map((secondNum) => [firstNum, secondNum])
  );
  return allPairs.reduce(
    (count, [firstNum, secondNUm]) =>
      firstNum! + secondNUm! > target ? count + 1 : count,
    0
  );
}

// =====================================================================

// 2:
// Nested for loops to check every combination
// - Time: O(n^2), Space: O(1)

function countPairsLoops(sortedNums: number[], target: number): number {
  let numPairs = 0;

  for (let i = 0; i < sortedNums.length; i += 1) {
    for (let j = i + 1; j < sortedNums.length; j += 1) {
      if (sortedNums[i]! + sortedNums[j]! > target) {
        numPairs += 1;
      }
    }
  }

  return numPairs;
}

// =====================================================================

// 3:
// for each value:
//   do a binary search to find idx of first other value to make a sum > target
//   if found valid index:
//     count += (length of array) - idx
// return count

// - This is essentially the same idea as in solution #2 above, but the linear
//   search of the inner for loop is replaced with a binary search
// - The solution above also checks every number after finding a pair whose
//   sum is greater than target
//   - Once the inner loop gets a sum greater than target, it could stop
//     iterating and just add to count for every remaining number in the
//     input list)
//     - ie. find the leftmost passing number, which is what this solution does

// - Time: O(n log n), Space: O(1)

function countPairs(sortedNums: number[], target: number): number {
  let count = 0;

  sortedNums.forEach((firstNum, firstIdx) => {
    const secondIdx = binarySearchLeftmost(
      sortedNums,
      firstIdx + 1,
      sortedNums.length - 1,
      // Any pair greater than target passes, otherwise need to go right:
      (secondNum) => (firstNum + secondNum > target ? 0 : 1)
    );
    if (secondIdx !== -1) {
      count += sortedNums.length - secondIdx;
    }
  });

  return count;
}

// Return the leftmost index inside a slice of a given sorted array such that
// the `comparator` returns 0 for the value at that index, else return -1
// - `comparator` returns a negative number if a desired value would be less
//   than the tested value (ie. go left from the tested value), and a positive
//   number if the desired value would be greater
// - Could assume that there are no failing numbers to the right of any passing
//   number, but created a general implementation instead (that would give
//   correct answer for "find the leftmost 7" for example)
function binarySearchLeftmost(
  arr: number[],
  low: number,
  high: number,
  comparator: (testVal: number) => number
): number {
  if (low < 0 || high >= arr.length) {
    return -1;
  }

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const midVal = arr[mid]!;

    if (comparator(midVal) === 0) {
      if (mid > 0 && mid - 1 >= low && comparator(arr[mid - 1]!) === 0) {
        high = mid - 1;
      } else {
        return mid;
      }
    } else if (comparator(midVal) < 0) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// Testing leftmost binary search function:
function testLeftMostSearch(arr: number[], target: number) {
  return binarySearchLeftmost(arr, 0, arr.length - 1, (test) => target - test);
}
console.log(testLeftMostSearch([1, 2, 3, 4, 5], 4) == 3);
console.log(testLeftMostSearch([1, 2, 3, 3, 5], 3) == 2);
console.log(testLeftMostSearch([3, 3, 3, 3, 5], 3) == 0);
console.log(testLeftMostSearch([1, 3, 3, 3, 5], 3) == 1);
console.log(testLeftMostSearch([1, 2, 3, 4, 7], 6) == -1);
