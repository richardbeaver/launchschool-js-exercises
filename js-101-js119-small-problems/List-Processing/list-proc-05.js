// All Substrings

// Write a function that returns a list of all substrings of a string. Order
// the returned list by where in the string the substring begins. This means
// that all substrings that start at index position 0 should come first, then
// all substrings that start at index position 1, and so on. Since multiple
// substrings will occur at each position, return the substrings at a given
// index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the
// previous exercise:

// Example:
console.log(substrings('abcde'));
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

//

/*
input: a string
output: list of all substrings of input string (not including an empty string)

- If input string is empty:
  - Return an empty array
- Create variable `substrings` (value: empty array) to hold all substrings
- For each index in [0, length of input string):
  - Create an array of all substrings starting with current index
  - Add each element from resulting array to `substrings`
- Return `substrings`

*/

function substrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentSubstrings = leadingSubstrings(string.slice(idx));
    substrings.push(...currentSubstrings);
  }

  return substrings;
}

//

function leadingSubstrings(string) {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx += 1) {
    substrings.push(string.slice(0, idx));
  }

  return substrings;
}
