// ddaaiillyy ddoouubbllee

// Write a function that takes a string argument and returns a new string
// that contains the value of the original string with all consecutive
// duplicate characters collapsed into a single character.

// Examples:
console.log(
  crunch('ddaaiillyy ddoouubbllee'),    // "daily double"
  crunch('4444abcabccba'),              // "4abcabcba"
  crunch('ggggggggggggggg'),            // "g"
  crunch('a'),                          // "a"
  crunch(''),                           // ""
);

//

/*
- Problem

inputs: a string
outputs: a string result after collapsing all consecutive duplicate characters
  in input string

Rules:
- The only change occurs when there is a duplicated character
- All consecutive duplicated become only one character in result
- Will never be consecutive duplicate characters in resulting string

- Algorithm

1. If input string is empty, return input string
2. Declare a variable `resultString` and initialize it to a string containing
  the first character of the input string
3. For each character, `char`, at index, `i`, in [1, length of input string)
  1. If `char` is not equal to the character at index `i - 1`
    1. Append `char` to `resultString`
4. Return `restultString`


1. Declare a variable `resultString` and initialize it to an empty string
2. For each character, `char`, at index, `i`, in [0, length of input string)
  1. If `char` is not equal to the character at index (`i` + 1) or `char` is
    last character in input string
    1. Append `char` to `resultString`
4. Return `restultString`

*/

// function crunch(string) {
//   if (string.length === 0) return string;

//   let resultString = string[0];

//   for (let i = 1; i < string.length; i += 1) {
//     let char = string[i];
//     if (char !== string[i - 1]) {
//       resultString += char;
//     }
//   }

//   return resultString;
// }

//

function crunch(string) {
  let resultString = '';

  string.split('').forEach((char, i) => {
    if (char !== string[i + 1]) {
      resultString += char;
    }
  });

  return resultString;
}
