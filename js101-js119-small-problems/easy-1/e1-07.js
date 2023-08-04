// Short Long Short

// Write a function that takes two strings as arguments, determines the
// length of the two strings, and then returns the result of concatenating
// the shorter string, the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.

// Examples:
console.log(
  shortLongShort('abc', 'defgh') === "abcdefghabc",
  shortLongShort('abcde', 'fgh') === "fghabcdefgh",
  shortLongShort('', 'xyz') === "xyz",
);

//

/*
- Problem

inputs: two strings (`string1` and `string2`)
outputs: the concatenation of shorter-longer-shorter strings

Rules:
- Result is a concatenation of given strings
- Can assume the two given strings are different lengths

- Algorithm

1.
- If the length of `string1` is less than the length of string2
  - Return the concatenation of `string1` with `string2` and `string1`
- Else
  - Return the concatenation of `string2` with `string1` and `string2`

2.
- Create an array containing both strings and sort by string length
  - Shorter string will be first in array
- Then concatenate as needed

*/

// 1.
function shortLongShort(string1, string2) {
  if (string1.length <= string2.length) {
    return string1 + string2 + string1;
  }

  return string2 + string1 + string2;
}

// 2.
function shortLongShort(string1, string2) {
  let strings = [string1, string2].sort((a, b) => a.length - b.length);
  return strings[0] + strings[1] + strings[0];
}
