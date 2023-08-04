// Letter Swap

// Given a string of words separated by spaces, write a function that swaps
// the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the
// string will always contain at least one word. You may also assume that
// each string contains nothing but words and spaces, and that there are no
// leading, trailing, or repeated spaces.

// Examples:
console.log(
  swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
  swap('Abcde'),                          // "ebcdA"
  swap('a'),                              // "a"
);

//

/*
input: string of words
output: the same string with the first and last letters of every word swapped

- Don't need to account for empty strings, empty words, duplicate spaces, or
  non-letter characters

Algorithm

- Split input by spaces
- Create a new array where for each `word` in the input, `word` is replaced by:
  - If length of `word` is 1 character
    - The same `word`
  - Else
    - The concatenation of:
      - last letter of `word` + letters between first and last + first letter
        of `word`
- Combine resulting array (using a space as separator) into one string
- Return resulting string

*/

function swap(words) {
  return words.split(' ').map(swapFirstLastCharacters).join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word.at(-1) + word.slice(1, -1) + word.at(0);
}
