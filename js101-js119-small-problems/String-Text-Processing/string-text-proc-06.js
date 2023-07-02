// Staggered Caps (Part 1)

// Write a function that takes a string as an argument and returns that string
// with a staggered capitalization scheme. Every other character, starting
// from the first, should be capitalized and should be followed by a lowercase
// or non-alphabetic character. Non-alphabetic characters should not be
// changed, but should be counted as characters for determining when to switch
// between upper and lower case.

// Examples:
console.log(
  staggeredCase('I Love Launch School!'),        // "I LoVe lAuNcH ScHoOl!"
  staggeredCase('ALL_CAPS'),                     // "AlL_CaPs"
  staggeredCase('ignore 77 the 4444 numbers'),   // "IgNoRe 77 ThE 4444 nUmBeRs"
);

//

/*
input: a string
output: input string in staggered capitalization scheme

- First character capitalized
- Every capitalized character follower by a lowercase letter or non-alphabetic
  character
- Non-alphabetic characters not changed, but are counted as characters for when
  to switch cases

- All characters at even indexes to uppercase
- All characters at odd indexes to lowercase

*/

function staggeredCase(string) {
  let staggeredChars = string.split('').map((char, idx) => {
    if (idx % 2 === 0) return char.toUpperCase();
    return char.toLowerCase();
  });

  return staggeredChars.join('');
}
