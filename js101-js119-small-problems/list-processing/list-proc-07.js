// Sum of Sums

// Write a function that takes an array of numbers and returns the sum of
// the sums of each leading subsequence in that array. Examine the examples
// to see what we mean. You may assume that the array always contains at
// least one number.

// Examples:
console.log(
  sumOfSums([3, 5, 2]),        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  sumOfSums([1, 5, 7, 3]),     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  sumOfSums([4]),              // 4
  sumOfSums([1, 2, 3, 4, 5]),  // 35
);

//

/*
input: array of numbers
output: sum of the sums of each leading subsequence in the array

- Assume array always contains at least one number


- Create variable `total` (value: 0)
- For each index, `endIdx`, in [1, length of input array]:
  - Sum all values at indexes [0, `endIdx`)
  - Add this sum to `total`
- Return `total`

*/

// 1.
function sumOfSums(numbers) {
  let total = 0;

  for (let endIdx = 1; endIdx <= numbers.length; endIdx += 1) {
    let sum = 0;
    for (let idx = 0; idx < endIdx; idx += 1) {
      sum += numbers[idx];
    }
    total += sum;
  }

  return total;
}

// 2.
function sumOfSumsReduce(numbers) {
  let total = 0;

  for (let idx = 1; idx <= numbers.length; idx += 1) {
    total += numbers.slice(0, idx).reduce((sum, num) => sum + num, 0);
  }

  return total;
}


// 3.

function sumOfSumsMapReduce(numbers) {
  return numbers
    .map((_, idx) => numbers.slice(0, idx + 1).reduce((sum, num) => sum + num))
    .reduce((total, sum) => total + sum);
}

/* eslint no-unused-vars: */
