// Palindromic Strings (Part 1)

// Write a function that returns true if the string passed as an argument is
// a palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.

// Examples:
console.log(
  isPalindrome('madam'),               // true
  isPalindrome('Madam'),               // false (case matters)
  isPalindrome("madam i'm adam"),      // false (all characters matter)
  isPalindrome('356653'),              // true
);

//

/*

input: string
output: boolean - whether input is a palindrome

1. Return whether the input is equal to the reverse of the input
  1. Do not alter any characters (like lower casing to ignore case)
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
