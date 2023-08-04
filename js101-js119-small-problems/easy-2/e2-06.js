// The End Is Near But Not Here

// Write a function that returns the next to last word in the String passed
// to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// Examples:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

//

/*
- Problem

inputs: string of words
outputs: the second to last word of the input string

Rules:
- a word is any sequence of non-blank characters separated by spaces
- input string will contain at least 2 words

Algorithm

- Split input string by spaces into words
- Return second to last element in resulting array

*/

function penultimate(string) {
  return string.split(' ').at(-2);
}
