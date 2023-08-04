// Fibonacci Numbers (Memoization)

// Our recursive fibonacci function from an earlier exercise isn't very
// efficient. It starts slowing down with an nth argument value as low as 35.
// One way to improve the performance of our recursive fibonacci function
// (and other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for
// future reuse, instead of computing it from scratch every time it is needed.
// In the case of our recursive fibonacci function, using memoization saves
// calls to fibonacci(nth - 2) because the necessary values have already been
// computed by the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci
// function to use memoization.

// Examples:
// console.log(
//   fibonacci(1),       // 1
//   fibonacci(2),       // 1
//   fibonacci(3),       // 2
//   fibonacci(4),       // 3
//   fibonacci(5),       // 5
//   fibonacci(12),      // 144
//   fibonacci(20),      // 6765
// );

//

/*
input: integer, `n`, of the ordered fibonacci number to calculate
output: the `n`-th fibonacci number

- Create a `memo` object to store completed computations
- If `n` is 1 or 2:
  - Return 1
- If an answer exists in the `memo` object for `n`:
  - Return the value
- Store the result of (`fibonacci` of n-1 + `fibonacci` of n-2) in the `memo`
  object for `n`
- Return the value in the `memo` object for `n`

*/

let memo = {};

function fibonacci(nth) {
  if (nth <= 2) return 1;

  if (memo[nth]) return memo[nth];

  memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return memo[nth];
}

/* eslint no-unused-vars:"off" */
