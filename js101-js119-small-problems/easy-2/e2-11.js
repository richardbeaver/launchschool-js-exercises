// Get Middle Character

// Write a function that takes a non-empty string argument and returns
// the middle character(s) of the string. If the string has an odd length,
// you should return exactly one character. If the string has an even length,
// you should return exactly two characters.

// Examples:
console.log(
  centerOf('I Love JavaScript') === "a",
  centerOf('Launch School')     === " ",
  centerOf('Launch')            === "un",
  centerOf('Launchschool')      === "hs",
  centerOf('x')                 === "x",
);

//

/*
- Problem

inputs: non-empty string
outputs: a string containing the 1 or 2 middle characters of the input string

Rules:
- If given odd-length string, return middle character
- If given even-length string, return middle 2 characters

Algorithm

- Get the "middle index" of the input string:
  - The ceiling of (half the input string's length - 1)
- If the length of input string is even:
  - Return the substring from indexes [`middleIdx`, (`middleIdx` + 1)] of
    input string
- Else:
  - Return the character at index `middleIdx` of input string

*/

function centerOf(string) {
  let middleIdx = Math.ceil((string.length / 2) - 1);

  if (string.length % 2 !== 0) {
    return string.at(middleIdx);
  }

  return string.slice(middleIdx, middleIdx + 2);
}
