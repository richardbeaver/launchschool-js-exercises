// Delete Vowels

// Write a function that takes an array of strings and returns an array of the
// same string values, but with all vowels (a, e, i, o, u) removed.

// Examples:
console.log(
  removeVowels(['abcdefghijklmnopqrstuvwxyz']),         // ["bcdfghjklmnpqrstvwxyz"]
  removeVowels(['green', 'YELLOW', 'black', 'white']),  // ["grn", "YLLW", "blck", "wht"]
  removeVowels(['ABC', 'AEIOU', 'XYZ']),                // ["BC", "", "XYZ"]
);

//

/*
input: array of strings
output: new array of same strings with all vowels removed

1.
- Create new result array
- For each string in input array:
  - Replace with same string without vowels in result array
- Return this resulting array


2. Using Regex
- Replace all vowels with an empty string

*/

function removeVowels(stringArray) {
  return stringArray.map((string) => {
    return string.split('').filter((char) => !isVowel(char)).join('');
  });
}

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// Regex solution:

