// Word to Digit

// Write a function that takes a sentence string as an argument and returns
// that string with every occurrence of a "number word" — 'zero', 'one',
// 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted
// to its corresponding digit character.

// Example:
console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.'),
  // "Please call me at 5 5 5 1 2 3 4. Thanks."
  wordToDigit('The weight is done.'),
  // "The weight is done.", not: "The w8 is d1."
);

//

/*
input: string of a sentence
output: input string with every occurrence of a "number word" from 0 to 9
  replaced with its number value


1.
- Create variable to hold array of number words from 'zero' to 'nine'
- Split input string by spaces
- Create a new array where, for each word:
  - If word, disregarding punctuation, exists in the list of number words:
    - Replace that word with the index that it matched, plus connected
      punctuation
- Join resulting array with spaces
- Return resulting string

2.
- Create an object mapping numbers words to their number value
- Iterate over the number word keys of this object:
  - For each one, replace all instances of that word in the input sentence

*/

function wordToDigit(sentence) {
  let numberWords = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];

  let words = sentence.split(' ');

  let replacedWords =  words.map((word) => {
    let numberWordIdx;

    if (!isAlphabetic(word.at(-1))) {
      numberWordIdx = numberWords.indexOf(word.slice(0, -1).toLowerCase());
      if (numberWordIdx !== -1) {
        return String(numberWordIdx) + word.at(-1);
      }
    }

    numberWordIdx = numberWords.indexOf(word.toLowerCase());
    if (numberWordIdx !== -1) {
      return String(numberWordIdx);
    }

    return word;
  });

  return replacedWords.join(' ');
}

// 2.
// function wordToDigit(sentence) {
//   const NUMBER_WORDS = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   ...

// }

//

function isAlphabetic(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}

// =========================

// Given solution (using regex):

const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigitSolution(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    // Handle the case of a "number word" being part of another word by
    // wrapping the regex pattern with the word boundary anchor, `\b`
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

/* eslint max-lines-per-function:"off", no-unused-vars:"off" */

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.'),
  // "Please call me at 5 5 5 1 2 3 4. Thanks."
  wordToDigitSolution('The weight is done.'),      // "The w8 is d1."
);
