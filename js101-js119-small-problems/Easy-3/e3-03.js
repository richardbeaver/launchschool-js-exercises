// Stringy Strings

// Write a function that takes one argument, a positive integer, and returns
// a string of alternating '1's and '0's, always starting with a '1'. The
// length of the string should match the given integer.

// Examples:
console.log(
  stringy(0),    // ""
  stringy(1),    // "1"
  stringy(6),    // "101010"
  stringy(9),    // "101010101"
  stringy(4),    // "1010"
  stringy(7),    // "1010101"
);

//

/*
- Problem

inputs: a positive integer
outputs: a string of alternating '1' and '0' with length equal to input integer

Rules:
- Output string always stars with '1'

- Algorithm

1. Declare a variable `resultString` and initialize it to an empty string
2. For each value, `i`, in [0, input integer):
  1. If `i` is even:
    1. Append '1' to `resultString`
  2. Else
    1. Append '0' to `resultString`
3. Return `resultString`

*/

function stringy(numberOfChars) {
  let resultString = '';

  for (let i = 0; i < numberOfChars; i += 1) {
    let number = (i % 2 === 0) ? '1' : '0';
    resultString += number;
  }

  return resultString;
}
