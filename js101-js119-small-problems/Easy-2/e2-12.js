// Always Return Negative

// Write a function that takes a number as an argument. If the argument is
// a positive number, return the negative of that number. If the argument
// is a negative number, return it as-is.

// Examples:
console.log(
  negative(5),     // -5
  negative(-3),    // -3
  negative(0),     // -0
);

//

/*
- Problem

inputs: number
outputs: the negative of a non-negative input or the negative input

Rules:
- All non-negative inputs get negated (includes 0)
- All negative inputs get returned as-is

- Algorithm

1. If input number is greater than or equal to 0
  1. Return input number multiplied by -1
2. Return input number

1. Return (the absolute value of the input number) multiplied by -1
*/

// function negative(number) {
//   return number >= 0 ? number * -1 : number;
// }

function negative(number) {
  return Math.abs(number) * -1;
}
