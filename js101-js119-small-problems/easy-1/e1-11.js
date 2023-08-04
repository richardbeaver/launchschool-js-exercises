// UTF-16 String Value

// Write a function that determines and returns the UTF-16 string value of
// a string passed in as an argument. The UTF-16 string value is the sum of
// the UTF-16 values of every character in the string. (You may use
// String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

// Examples:
console.log(
  utf16Value('Four score'),         // 984
  utf16Value('Launch School'),      // 1251
  utf16Value('a'),                  // 97
  utf16Value(''),                   // 0
);

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(
  utf16Value(OMEGA),                  // 937
  utf16Value(OMEGA + OMEGA + OMEGA),  // 2811
);

//

/*
- Problem

inputs: a string
outputs: UTF-16 value of the input string

Rules:
- UTF-16 value of a string is the sum of UTF-16 values of each character
- Can use String.prototype.charCodeAt() to get UTF-16 value of each character

- Algorithm

1.
- Declare a variable `stringUTF16Value` and initialize it to 0
- For each index, `i`, from 0 to (length of input string - 1)
  - Declare a variable `charValue` and initialize it to the UTF-16 value of
    the character at index `i` of input string
  - Add `charValue` to `stringUTF16Value`
- Return `stringUTF16Value`

2.
- Split input string into an array of characters
- Map each character to its UTF-16 value
- Return sum of each character UTF-16 value in the array

*/

// 1.
function utf16Value(string) {
  let stringUTF16Value = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let charValue = string.charCodeAt(idx);
    stringUTF16Value += charValue;
  }

  return stringUTF16Value;
}

// 2.
function utf16Value(string) {
  let utf16Values = string.split('').map((char) => char.charCodeAt(0));
  return utf16Values.reduce((sum, charValue) => sum + charValue, 0);
}
