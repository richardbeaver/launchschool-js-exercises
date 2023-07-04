// Given a non-empty string, check if it can be constructed by taking a
// substring of it and appending multiple copies of the substring together.
// You may assume the given string consists of lowercase English letters only.


console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("aabaaba") === false);
console.log(repeatedSubstringPattern("abaababaab") === true);
console.log(repeatedSubstringPattern("abcabcabcabc") === true);

//

/*
input: non-empty string of lowercase letters
output: boolean for whether input string is made up of some repeating substring

1.
- For every `endingIdx` in [1, string length):
  - Take a slice of string in indexes [0, endingIdx)
  - If string length is not a multiple of this slice length:
    - `continue`
  - Create a string by repeating the slice until it is the same length as input
    string
  - If this built string and input string are equal:
    - Return `true`
- Return `false`

2.
- For every value, `sliceLength`, in [1, floor of (string length / 2)]:
  - Split input string into an array of substrings of length `sliceLength`
  - If all substrings are equal:
    - Return `true`
- Return `false`

*/

// 1.
function repeatedSubstringPattern(string) {
  let maxIdx = Math.floor(string.length / 2);

  for (let endingIdx = 1; endingIdx <= maxIdx; endingIdx += 1) {
    let curSlice = string.slice(0, endingIdx);
    let sliceLength = endingIdx;

    if (string.length % sliceLength !== 0) continue;
    let multiples = string.length / sliceLength;

    if (curSlice.repeat(multiples) === string) {
      return true;
    }
  }

  return false;
}

// 2.
function repeatedSubstringPattern2(string) {
  let halfInputLength = Math.floor(string.length / 2);

  for (let sliceLength = 1; sliceLength <= halfInputLength; sliceLength += 1) {
    let substrings = [];

    for (let idx = 0; idx < string.length; idx += sliceLength) {
      let nextSlice = string.slice(idx, idx + sliceLength);
      substrings.push(nextSlice);
    }

    if (substrings.every((slice) => slice === substrings[0])) {
      return true;
    }
  }

  return false;
}

/* eslint no-unused-vars: */
