// Squaring an Argument

// Using the multiply() function from the "Multiplying Two Numbers" problem,
// write a function that computes the square of its argument (the square is
// the result of multiplying a number by itself).

// Example:
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

//

function multiply(num1, num2) {
  return num1 * num2;
}

/*
- Problem

inputs: number to square
outptus: result of squaring number

Rules:
- Use defined `multiply` function in `square` function

Algorithm

- Return the result of calling `multiply` passing in the given input for
  each argument

*/

function square(number) {
  return multiply(number, number);
}

// Further Exploration:

// What if we wanted generalize this function to a "power to the n" type
// function: cubed, to the 4th power, to the 5th, etc. How would we go about
// doing so while still using the multiply() function?

console.log(
  exponentiate(0, 0), // 1
  exponentiate(0, 1), // 0
  exponentiate(1, 0), // 1
  exponentiate(1, 2), // 1
  exponentiate(2, 0), // 1
  exponentiate(2, 2), // 4
  exponentiate(5, 3), // 125
  exponentiate(3, 5), // 243
);

/*
- Problem

inputs: number to exponentiate, exponent
outptus: result of exponentiation

Rules:
- Use defined `multiply` function in `exponent` function

Algorithm

- Declare a variable `result` and initialize it to 1
- Execute `exponent` times:
  - Reassign `result` to the result of multiplying `result` and the number input
- Return result

*/

function exponentiate(number, exponent) {
  let result = 1;

  for (let count = 1; count <= exponent; count += 1) {
    result = multiply(result, number);
  }

  return result;
}
