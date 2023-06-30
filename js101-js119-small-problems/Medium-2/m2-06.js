// Sum Square - Square Sum

// Write a function that computes the difference between the square of the sum
// of the first count positive integers and the sum of the squares of the first
// count positive integers.

// Examples:
console.log(
  sumSquareDifference(3),      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  sumSquareDifference(10),     // 2640
  sumSquareDifference(1),      // 0
  sumSquareDifference(100),    // 25164150
);

//

/*
input: a count as a number
output: difference between (square of sum) and (sum of squares) of first count
  positive integers


1.
- Create array of numbers in [1, count]
- Sum all numbers in array
  - Square result
- Create new array with squares of all numbers in original array
  - Sum all numbers in resulting array
- Subtract this sum from square of sum

2.
- Create sum and sumOfSquares variables
- In a loop from 1 to `count`:
  - Increment `sum` by `count`
  - Increment `sumOfSquares` by the square of `count`
- Return (square of `sum` - sumOfSquares)

*/

// 1.
function sumSquareDifferenceArray(count) {
  let oneToCount = Array.from({ length: count }, (_, idx) => idx + 1);

  let squareOfSum = calculateSum(oneToCount) ** 2;

  let squares = oneToCount.map((num) => num ** 2);
  let sumOfSquares = calculateSum(squares);

  return squareOfSum - sumOfSquares;
}

function calculateSum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// 2.
function sumSquareDifferenceLoop(count) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let number = 1; number <= count; number += 1) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}

/* eslint no-unused-vars:"off", no-undef:"off" */
