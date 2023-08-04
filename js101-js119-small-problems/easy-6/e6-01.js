// Double Char (Part 1)

// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

// Examples:
console.log(
  repeater('Hello'),        // "HHeelllloo"
  repeater('Good job!'),    // "GGoooodd  jjoobb!!"
  repeater(''),             // ""
);

//

/*
input: a string
output: string with each character from input doubled

1.
- Create an empty string, `result`, to build the result string
- For each character in input string
  - Append that character to `result` twice
- Return `result`

2.
- Create an array to hold characters
- For each character in input string:
  - Add the character twice to the array
- Join array
- Return resulting string

*/

// 1.
function repeater(string) {
  let result = '';

  string.split('').forEach((char) => {
    result += char.repeat(2);
  });

  return result;
}

// 2.
function repeaterMap(string) {
  return string.split('').map((char) => char + char).join('');
}

/* eslint no-unused-vars: */
