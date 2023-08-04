// Uppercase Check

// Write a function that takes a string argument and returns true if all of
// the alphabetic characters inside the string are uppercase, false otherwise.
// Ignore characters that are not alphabetic.

// Examples:
console.log(
  isUppercase('t'),               // false
  isUppercase('T'),               // true
  isUppercase('Four Score'),      // false
  isUppercase('FOUR SCORE'),      // true
  isUppercase('4SCORE!'),         // true
  isUppercase(''),                // true
);

//

/*
input: a string
output: boolean for whether all alphabetic characters in the string are
  uppercase (ignore non-alphabtic characters)

- Non-alphabetic characters are not changed when converting to upper case
- Return whether the input string is equal to upper case version of input string

*/

function isUppercase(string) {
  return string === string.toUpperCase();
}
