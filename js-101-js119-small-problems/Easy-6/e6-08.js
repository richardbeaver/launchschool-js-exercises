// Reverse It (Part 2)

// Write a function that takes a string argument containing one or more words
// and returns a new string containing the words from the string argument.
// All five-or-more letter words should have their letters in reverse order.
// The string argument will consist of only letters and spaces. Words will
// be separated by a single space.

// Examples:
console.log(
  reverseWords('Professional'),             // "lanoisseforP"
  reverseWords('Walk around the block'),    // "Walk dnuora the kcolb"
  reverseWords('Launch School'),            // "hcnuaL loohcS"
);

//

/*
input: a string a of one or more words
output: new string with all words of 5 or more letters reversed

- Split input string by spaces into words
- Create an array where, for each word:
  - If the word is 5 letters or longer:
    - The word is reversed
  - Else:
    - The word is not altered
- Return result of joining resulting array with spaces

*/

function reverseWords(string) {
  const MIN_WORD_LENGTH = 5;
  let words = string.split(' ');

  let reversedWords = words.map((word) => {
    if (word.length >= MIN_WORD_LENGTH) {
      return reverseWord(word);
    }
    return word;
  });

  return reversedWords.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}
