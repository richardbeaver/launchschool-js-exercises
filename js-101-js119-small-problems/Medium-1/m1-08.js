// Fibonacci Numbers (Procedural)

// In the previous exercise, we developed a recursive solution for computing
// the nth Fibonacci number. In a language that is not optimized for recursion,
// some (but not all) recursive functions can be extremely slow and may require
// massive quantities of memory and/or stack space. If you tested for bigger
// nth numbers, you might have noticed that getting the 50th fibonacci number
// already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive
// (or procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

// Note that JavaScript can accurately compute integers up to 16 digits long;
// this means that fibonacci(78) is the largest Fibonacci number that you can
// accurately compute with simple operations in JavaScript.

// Examples:
console.log(
  fibonacci(20),       // 6765
  fibonacci(50),       // 12586269025
  fibonacci(75),       // 2111485077978050
);

//

/*
input: integer, `n`, of the ordered fibonacci number to calculate
output: the `n`-th fibonacci number

- If `n` is 1 or 2:
  - Return 1
- Create a variable, `fibs`, (value: array containing `1` twice) to hold
  calculated fibonacci numbers
- For each number in [3, `n`]:
  - Calculate the fibonacci number by using the last two elements in `fibs`
  - Append the new number to `fibs`
- Return the last element in `fibs`

*/

function fibonacci(nth) {
  let fibs = [1, 1];

  for (let count = 3; count <= nth; count += 1) {
    let fibNumber = fibs.at(-1) + fibs.at(-2);
    fibs.push(fibNumber);
  }

  return fibs.at(-1);
}
