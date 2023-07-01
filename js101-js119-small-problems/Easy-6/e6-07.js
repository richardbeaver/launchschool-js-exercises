// Reverse It (Part 1)

// Write a function that takes a string argument and returns a new string
// containing the words from the string argument in reverse order.

// Examples:
console.log(
  reverseSentence(''),                       // ""
  reverseSentence('Hello World'),            // "World Hello"
  reverseSentence('Reverse these words'),    // "words these Reverse"
);

//

/*
input: a string
output: new string containing all words from input string in reverse order

- Split input string at each space
- Reverse order of resulting words
- Return result of joining the reversed words by spaces

*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}
