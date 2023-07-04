// Leading Substrings

// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the first
// letter of the word, and the list should be ordered from shortest to longest.

// Examples:
console.log(
  leadingSubstrings('abc'),      // ["a", "ab", "abc"]
  leadingSubstrings('a'),        // ["a"]
  leadingSubstrings('xyzzy'),    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
);

//

/*
input: a string
output: array of substrings of input string beginning with the first character
  of the string

- Create variable `substrings` (value: empty array)
- For each index in [1, length of string]:
  - Append to `substrings` a slice of input string at indexes [0, index)
- Return `substrings`

*/

function leadingSubstrings(string) {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx += 1) {
    substrings.push(string.slice(0, idx));
  }

  return substrings;
}
