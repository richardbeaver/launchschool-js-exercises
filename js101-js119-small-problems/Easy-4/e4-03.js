// Palindromic Strings (Part 2)

// Write another function that returns true if the string passed as an
// argument is a palindrome, or false otherwise. This time, however, your
// function should be case-insensitive, and should ignore all non-alphanumeric
// characters. If you wish, you may simplify things by calling the
// isPalindrome function you wrote in the previous exercise.

// Examples:
console.log(
  isRealPalindrome('madam'),               // true
  isRealPalindrome('Madam'),               // true (case does not matter)
  isRealPalindrome("Madam, I'm Adam"),     // true (only alphanumerics matter)
  isRealPalindrome('356653'),              // true
  isRealPalindrome('356a653'),             // true
  isRealPalindrome('123ab321'),            // false
);

//

/*
input: string
output: boolean - whether input is a palindrome while ignoring case and all
  non-alphanumeric characters

1. Lower-case the input
1. Remove non-alphanumeric characters
1. Return result of passing to `isPalindrome` from last exercise

*/

function isRealPalindrome(string) {
  let filteredString = string.split('')
    .filter((char) => isLetter(char) || isNumber(char))
    .join('');
  return isPalindrome(filteredString.toLowerCase());
}

//

function isLetter(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
