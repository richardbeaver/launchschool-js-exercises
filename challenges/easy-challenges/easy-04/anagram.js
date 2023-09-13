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

`isAnagram` (string)
- lowercase input string
- if `matchWord` is equal to input string
  - return false
- sort `matchWord` and input string
- return whether sorted words are equal to each other

*/

class Anagram {
  constructor(matchWord) {
    this.matchWord = matchWord.toLowerCase();
  }

  match(wordsList) {
    return wordsList.filter((word) => this.isAnagram(word));
  }

  isAnagram(inputWord) {
    inputWord = inputWord.toLowerCase();
    if (this.matchWord === inputWord) return false;

    let sortedMatchWord = this.matchWord.split('').sort().join('');
    let sortedInputWord = inputWord.split('').sort().join('');

    return sortedMatchWord === sortedInputWord;
  }
}

module.exports = Anagram;
