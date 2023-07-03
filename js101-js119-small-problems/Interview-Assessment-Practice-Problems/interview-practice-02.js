// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

//

/*
input: array of integers
output: the minimum sum of 5 consecutive elements in input array; `null`, if
  input contains less than 5 elements


- Create a `minSum` variable (value: `null`)
- For every index, `idx`, in [0, array length - 4):
  - Sum all integers in [idx, idx + 5)
  - If sum is `null` OR sum < `minSum`:
    - Reassign `minSum` to this sum value
- Return `minSum`

*/

function minimumSum(numbers) {
  let minSum = null;

  for (let idx = 0; idx < numbers.length - 4; idx += 1) {
    let sum = numbers.slice(idx, idx + 5).reduce((sum, num) => sum + num, 0);
    if (minSum === null || sum < minSum) {
      minSum = sum;
    }
  }

  return minSum;
}
