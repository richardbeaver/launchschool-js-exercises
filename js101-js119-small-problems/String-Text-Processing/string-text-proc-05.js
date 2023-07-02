// Swap Case

// Write a function that takes a string as an argument and returns that
// string with every lowercase letter changed to uppercase and every uppercase
// letter changed to lowercase. Leave all other characters unchanged.

// Examples:
console.log(
  swapCase('CamelCase'),              // "cAMELcASE"
  swapCase('Tonight on XYZ-TV'),      // "tONIGHT ON xyz-tv"
);

//

/*
input: a string
output: input string with all lowercase letters uppercased and all uppercase
  letters lowercased

- Create new string where, for each character in input string:
  - Uppercase letters replaced with lowercase
  - Lowercase letters replaced with uppercase
  - Rest of characters left unchanged
- Return resulting string

*/

function swapCase(string) {
  let swappedCases = string.split('').map((char) => {
    if (char >= 'A' && char <= 'Z') return char.toLowerCase();
    if (char >= 'a' && char <= 'z') return char.toUpperCase();
    return char;
  });

  return swappedCases.join('');
}
