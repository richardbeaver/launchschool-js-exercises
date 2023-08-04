// Capitalize Words

// Write a function that takes a string as an argument and returns that string
// with the first character of every word capitalized and all subsequent
// characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

// Examples:
console.log(
  wordCap('four score and seven'),       // "Four Score And Seven"
  wordCap('the javaScript language'),    // "The Javascript Language"
  wordCap('this is a "quoted" word'),    // 'This Is A "quoted" Word'
);

//

/*
input: a string
output: input string with first character of each word capitalized, and all
  other characters in lowercase

- Create array from splitting input string by spaces
- Create new array where, for each word:
  - The first character is capitalized and all other letters are lowercased
- Join resulting array by spaces
- Return resulting string

*/

function wordCap(words) {
  return words.split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
