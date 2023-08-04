// Palindromic Substrings

// Write a function that returns a list of all palindromic substrings of a
// string. That is, each substring must consist of a sequence of characters
// that reads the same forward and backward. The substrings in the returned
// list should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous
// exercise.

// For the purpose of this exercise, you should consider all characters and
// pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and
// 'Abc-bA' are not. In addition, assume that single characters are not
// palindromes.

// Examples:
console.log(
  palindromes('abcd'),       // []
  palindromes('madam'),      // [ "madam", "ada" ]

  palindromes('hello-madam-did-madam-goodbye'),
  // returns
  // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  //   "-madam-", "madam", "ada", "oo" ]

  palindromes('knitting cassettes'),
  // returns
  // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
);

//

/*
input: a string
output: an array of all substrings of input string that are palindromes

- Case-sensitive, and consider all characters
- Single-character strings are not palindromes


- Create an array that contains all sub-strings of input string
- Filter `substrings` to elements that are palindromes
- Return filtered array

`isPalindrome`
- Return whether input string length is greater than 1 AND input string is
  equal to reverse of input string
  (case-sensitive, accounts for all characters, and returns false for
  1-character strings

*/

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

//

function substrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentSubstrings = leadingSubstrings(string.slice(idx));
    substrings.push(...currentSubstrings);
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx += 1) {
    substrings.push(string.slice(0, idx));
  }

  return substrings;
}
