// Double Char (Part 2)

// Write a function that takes a string, doubles every consonant character
// in the string, and returns the result as a new string. The function should
// not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// Examples:
console.log(
  doubleConsonants('String'),          // "SSttrrinngg"
  doubleConsonants('Hello-World!'),    // "HHellllo-WWorrlldd!"
  doubleConsonants('July 4th'),        // "JJullyy 4tthh"
  doubleConsonants(''),                // ""
);

//

/*
input: a string
output: new string with only consonants doubled

- Create variable `vowels` (value: array with string elements: 'a', 'e', 'i',
  'o', 'u')
- Create an empty string, `result`, to build the result string
- For each character in input string:
  - If character is alphabetic and not a vowel:
    - Append character to `result` twice
- Return result

*/

function doubleConsonants(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  string.split('').forEach((char) => {
    result += char;

    if (isLetter(char) && !vowels.includes(char.toLowerCase())) {
      result += char;
    }
  });

  return result;
}

function isLetter(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}
