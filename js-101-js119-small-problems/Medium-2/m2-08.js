// Longest Sentence

// Write a program that prints the longest sentence in a string based on the
// number of words. Sentences may end with periods (.), exclamation points (!),
// or question marks (?). You should treat any sequence of characters that are
// not spaces or sentence-ending characters as a word. Thus, -- should count
// as a word. Log the longest sentence and its word count to the console. Pay
// attention to the expected output, and be sure you preserve the punctuation
// from the end of the sentence. Note that this problem is about manipulating
// and processing strings. As such, every detail about the string matters
// (e.g., case, punctuation, tabs, spaces, etc.).

// Example:
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent
// a new nation, conceived in liberty, and dedicated to the proposition that
// all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining
// before us -- that from these honored dead we take increased devotion to
// that cause for which they gave the last full measure of devotion -- that
// we here highly resolve that these dead shall not have died in vain -- that
// this nation, under God, shall have a new birth of freedom -- and that
// government of the people, by the people, for the people, shall not perish
// from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

//

/*
input: String of sentences of words
output: no return value; log longest sentence and word count to console

1.
- Use `split` method, passing a regex to match any of the 3 sentence-separating
  characters to split into spaces
- Get the longest resulting sentence
- Use `indexOf` to get its starting index in the original string to then
  get the ending punctuation character

2.
- Split input string by spaces
- Iterate over all words
  - If a word contains a sentence-ending character, join the words of that
    sentence and add to an array of all sentences
- Then take longest string in resulting array (and we still have punctuation
  character)

*/

// 2.
function longestSentence3(inputString) {
  let sentenceEndingChars = ['.', '!', '?'];
  let words = inputString.split(' ');

  // Break into sentences
  let sentences = [];
  let sentenceStartIdx = 0;

  words.forEach((word, idx) => {
    if (
      word.includes(sentenceEndingChars[0]) ||
      word.includes(sentenceEndingChars[1]) ||
      word.includes(sentenceEndingChars[2])
    ) {
      let sentence = words.slice(sentenceStartIdx, idx + 1);
      sentences.push(sentence);
      sentenceStartIdx = idx + 1;
    }
  });

  // Find longest sentence
  let longestSentenceIndex = 0;
  let longestSentenceLength = 0;

  sentences.forEach((sentence, idx) => {
    if (sentence.length > longestSentenceLength) {
      longestSentenceLength = sentence.length;
      longestSentenceIndex = idx;
    }
  });

  let longestSentence = sentences[longestSentenceIndex].join(' ');
  console.log(longestSentence + '\n');
  console.log(`The longest sentence has ${longestSentenceLength} words.\n`);
}

// ========================================

// Given solution:
function longestSentence(text) {
  let sentences = text.match(/\w.*?[.!?]/g);

  let longest = sentences.reduce(
    function(longest, sentence) {
      let length = sentence.split(/\s/).length;
      if (length > longest.length) {
        return { text: sentence, length: length };
      } else {
        return longest;
      }
    },
    { text: "", length: 0 }
  );

  console.log(longest.text + "\n");
  console.log("The longest sentence has " + longest.length + " words.\n");
}

// The solution leverages the lazy quantifier (*?) to restrict the match to
// he shortest possible string: a single sentence. Given the pattern, a match:

// \w - starts with any word character
// .*? - may contain any number of characters in the middle (even zero
//       characters)
// [.!?] - ends when the first ., !, or ? after the starting word character
//       is reached

/* eslint no-unused-vars:"off", max-lines-per-function:"off" */
