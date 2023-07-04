// Palindromic Numbers

// Write a function that returns true if its integer argument is palindromic,
// or false otherwise. A palindromic number reads the same forwards and
// backwards.

// Examples:
console.log(
  isPalindromicNumber(34543),        // true
  isPalindromicNumber(123210),       // false
  isPalindromicNumber(22),           // true
  isPalindromicNumber(5),            // true
);

//

/*
input: number
output: boolean - whether input is a palindromic number

1. Convert to string and call `isPalindrome` function from exercise 02

*/

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

//

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
