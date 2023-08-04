// How long are you?

// Write a function that takes a string as an argument and returns an array
// that contains every word from the string, with each word followed by a
// space and the word's length. If the argument is an empty string or if
// no argument is passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by
// a single space.

// Examples:
console.log(
  wordLengths('cow sheep chicken'),
  // ["cow 3", "sheep 5", "chicken 7"]

  wordLengths('baseball hot dogs and apple pie'),
  // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

  wordLengths("It ain't easy, is it?"),
  // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

  wordLengths('Supercalifragilisticexpialidocious'),
  // ["Supercalifragilisticexpialidocious 34"]

  wordLengths(''),      // []
  wordLengths(),        // []
);

//

/*
input: string
output: array of strings made up of each word in the input string, a space,
  and the word's length

- If input is an empty string, return an empty array


- Split input string by spaces into array of words
- Create a new array that contains for each word:
  - A string of the word, a space, and the word's length
- Return resulting array

*/

function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) return [];

  return words.split(' ').map((word) => `${word} ${word.length}`);
}
