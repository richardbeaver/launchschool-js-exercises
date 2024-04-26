// Anagrams

// Write a program that takes a word and a list of possible anagrams and
// selects the correct sublist that contains the anagrams of the word.

// For example, given the word "listen" and a list of candidates like
// "enlists", "google", "inlets", and "banana", the program should return a
// list containing "inlets". Please read the test suite for the exact rules
// of anagrams.

//

/*

- anagrams - words whose letters can be rearranged to spell the other word
  - cannot be identical words
  - letters cannot be reused to determine an anagram

- test cases show we need an `Anagram` class with a `match` method
- constructor takes a word
- `match` method takes an array of strings
  - returns array filtered to strings that are anagrams of the word

- anagrams are not case-sensitive
  - lowercase before all character checks
- identical words are not anagrams

Algorithm

constructor
- lowercase input string and save as property `matchWord`

`match`
- filter each string in input array by whether it is anagram of `matchWord`

1.
`isAnagram` (string)
- lowercase input string
- if `matchWord` is equal to input string
  - return false
- sort `matchWord` and input string
- return whether sorted words are equal to each other

2.
`isAnagram` (string)
- Get counts of the letters in each word and compare
    - O(n) instead of O(n log n) by sorting
        - Where `n` is the length of the longer of the two words being compared
- The only difference from the first solution in the implementation is using
  the self-defined `getLetterCounts` function (O(n)) instead of calling `sort`
  on an array of letters (O(n log n))

*/

class Anagram {
  /**
   * @param {string} matchWord
   */
  constructor(matchWord) {
    this.matchWord = matchWord.toLowerCase();
  }

  /**
   * @param {string[]} wordsList
   * @returns {string[]}
   */
  match(wordsList) {
    return wordsList.filter((word) => this.isAnagram(word));
  }

  //

  // 1. Sorting letters of each word and comparing

  /**
   * @param {string} inputWord
   * @returns {boolean}
   */
  isAnagramSorting(inputWord) {
    inputWord = inputWord.toLowerCase();
    if (this.matchWord === inputWord) return false;

    const sortedMatchWord = [...this.matchWord].sort().join("");
    const sortedInputWord = [...inputWord].sort().join("");

    return sortedMatchWord === sortedInputWord;
  }

  // 2. Counting occurences of each letter and comparing counts

  /**
   * @param {string} inputWord
   * @returns {boolean}
   */
  isAnagram(inputWord) {
    inputWord = inputWord.toLowerCase();
    if (this.matchWord === inputWord) return false;

    const matchWordCounts = this.getLetterCounts(this.matchWord);
    const inputWordCounts = this.getLetterCounts(inputWord);

    return matchWordCounts.join("") == inputWordCounts.join("");
  }

  /**
   * @param {string} word
   * @returns {number[]}
   */
  getLetterCounts(word) {
    /**
     * @type {number[]}
     */
    const wordCounts = Array(26).fill(0);

    for (const letter of word) {
      const codepoint = /** @type {number} */ (letter.codePointAt(0));
      const lowerACodepoint = /** @type {number} */ ("a".codePointAt(0));

      wordCounts[codepoint - lowerACodepoint] += 1;
    }

    return wordCounts;
  }
}

module.exports = Anagram;
