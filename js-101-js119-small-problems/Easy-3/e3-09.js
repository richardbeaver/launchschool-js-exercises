// Clean up the words

// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string
// with all of the non-alphabetic characters replaced by spaces. If one or
// more non-alphabetic characters occur in a row, you should only have one
// space in the result (i.e., the result string should never have consecutive
// spaces).

// Example:
console.log(
  cleanUp("---what's my +*& line?")   // " what s my line "
);

//

/*
- Problem

inputs: string of words and non-alphabetic characters
outputs: string of only alphabetic characters

Rules:
- Replace all non-alphabetic characters with spaces
- If there are consecutive non-alphabetic characters, they get replaced with
  one space
- Any alphabetic character is not affected

- Algorithm

1. Declare a variable `cleanedString` and initialize it to an empty string
2. For each character, `char`, at each index, `i`, of input string:
  1. If `char` is alphabetic:
    1. Append `char` to `cleanedString`
  2. Else if index (`i` + 1) is past the end of the input string or the
    character at index (`i` + 1) of input string is alphabetic:
    1. Append a space to `cleanedString`
3. Return `cleanedString`

*/

function cleanUp(string) {
  let cleanedString = '';

  string.split('').forEach((char, i) => {
    if (isAlphabetic(char)) {
      cleanedString += char;
    } else if (i + 1 >= string.length || isAlphabetic(string[i + 1])) {
      cleanedString += ' ';
    }
  });

  return cleanedString;
}

function isAlphabetic(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

// Using Regex

function cleanUpRegex(string) {
  return string.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}
