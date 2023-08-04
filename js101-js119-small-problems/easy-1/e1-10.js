// Multiples of 3 and 5

// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. For instance, if
// the supplied number is 20, the result should be 98
// (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:
console.log(
  multisum(3),       // 3
  multisum(5),       // 8
  multisum(10),      // 33
  multisum(1000),    // 234168
);

//

/*
- Problem

inputs: an integer greater than 1
outputs: sum of all numbers [1, input] that are multiples of 3 or 5

Rules:
- Any number that is a multiple of 3 or a multiple of 5 is included
- A number is still only counted once even if a multiple of both 3 and 5

- Algorithm

1.
- Declare a variable `sum` and initialize it to 0
- For each number, `number`, from 1 to input, inclusive:
  - If `number` is a multiple of 3 or is a multiple of 5:
    - Add `number` to `sum`
- Return `sum`

2.
- Create an array of all numbers in [1, input number]
- Could reduce array by adding only the multiples to the accumulator
- Or can filter the array to only the multiples and sum

*/

// 1.
function multisum(inputNumber) {
  let sum = 0;

  for (let curNum = 1; curNum <= inputNumber; curNum += 1) {
    if (curNum % 3 === 0 || curNum % 5 === 0) {
      sum += curNum;
    }
  }

  return sum;
}

// 2.
function multisum(inputNumber) {
  let numbers = Array.from({ length: inputNumber }, (_, idx) => idx + 1)

  // Reducing array
  return numbers.reduce((sum, num) => {
    return (num % 3 === 0 || num % 5 === 0) ? sum + num : sum;
  }, 0);
}

// 3.
function multisum(inputNumber) {
  let numbers = Array.from({ length: inputNumber }, (_, idx) => idx + 1)

  // Filtering to only multiples and reducing
  return numbers.filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((sum, num) => sum + num, 0);
}
