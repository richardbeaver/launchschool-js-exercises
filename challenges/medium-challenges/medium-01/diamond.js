// Diamond

// The diamond exercise takes as its input a letter, and outputs it in a
// diamond shape. Given a letter, it prints a diamond starting with 'A', with
// the supplied letter at the widest point.

// The first row contains one 'A'.
// The last row contains one 'A'.
// All rows, except the first and last, have exactly two identical letters.
// The diamond is horizontally symmetric.
// The diamond is vertically symmetric.
// The diamond has a square shape (width equals height).
// The letters form a diamond shape.
// The top half has the letters in ascending order.
// The bottom half has the letters in descending order.
// The four corners (containing the spaces) are triangles.

// Examples

// Diamond for letter 'A':
// A

// Diamond for letter 'C':
//   A
//  B B
// C   C
//  B B
//   A

// Diamond for letter 'E':
//     A
//    B B
//   C   C
//  D     D
// E       E
//  D     D
//   C   C
//    B B
//     A

//

/*

Given a letter, draw a diamond with that letter as the center
- always starts with A, B, ...

- create an array of all letters
- get index of input letter in that array
- spaces between instances of that letter is index - 1
  - except for A, where we just print one A

- test cases show we need a `Diamond` class with a static `makeDiamond` method
- inputs are all capital letters
- also need to include spaces after second letter on each line


- padding spaces
[index of input letter, index - 1, ..., 1, 0 (at letter index)]
- middle spaces
[0, 1, 3, 5, ..., 2 * index - 1]
  - (? - easier to make this sequence if we leave off the 0's (for 'A'))

  : can iterate through these with same index as letter


Data structure
- input: capital letter as a string
- output: string of resulting diamond
- string for all letters
- could use arrays to hold number sequences of spaces to print before/after
  diamond and between letters

Algorithm

- create static string of all capital letters

===============

static `makeDiamond`
input: letter

1. Using counters for padding spaces and adjusting in each iteration of while
   loops
- create result string, starting with an empty string
- Use an index pointer to iterate up to input letter and back to 'A'
- Use two while loops to increment idx up to index of the input letter, and
  then back down to 0
  - On each iteration, reset padding and middle spaces
  - Add one row to result string
- Return result

2. Using arrays for padding sequences
- create padding spaces array
- create middle spaces array
- create result string, starting with an empty string
- Use an index pointer to iterate up to input letter and back to 'A'
- Use two while loops to increment idx up to index of the input letter, and
  then back down to 0
  - On each iteration, add one row to result string
- Return result

================

`getOneRow`
input: letter, padding, middleSpaces

- if letter is 'A'
  - return padding spaces, 'A', padding spaces, newline
- Create result as empty string
- Append padding spaces, letter, middle spaces, letter, padding spaces, newline
- Return resulting row string

*/

class Diamond {
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // ================

  // 1. Using counters for padding spaces and adjusting in each iteration
  //    of while loops
  static makeDiamond(inputLetter) {
    let result = '';
    let letterIdx = Diamond.LETTERS.indexOf(inputLetter);

    let padding;
    let middleSpaces;
    let idx = 0;
    let increasing = true;

    while (idx >= 0) {
      padding = letterIdx - idx;
      middleSpaces = idx === 0 ? 0 : (2 * idx) - 1;
      result += this.getOneRow(Diamond.LETTERS[idx], padding, middleSpaces);

      if (idx >= letterIdx) increasing = false;

      if (increasing) idx += 1;
      else            idx -= 1;
    }

    // while (idx < letterIdx) {
    //   padding = letterIdx - idx;
    //   middleSpaces = idx === 0 ? 0 : (2 * idx) - 1;
    //   result += this.getOneRow(Diamond.LETTERS[idx], padding, middleSpaces);
    //   idx += 1;
    // }

    // while (idx >= 0) {
    //   padding = letterIdx - idx;
    //   middleSpaces = idx === 0 ? 0 : (2 * idx) - 1;
    //   result += this.getOneRow(Diamond.LETTERS[idx], padding, middleSpaces);
    //   idx -= 1;
    // }

    return result;
  }

  // 2. Using arrays for padding sequences
  static makeDiamond2(inputLetter) {
    let result = '';
    let letterIdx = Diamond.LETTERS.indexOf(inputLetter);

    let paddingSpaces = Array.from(
      {length: letterIdx + 1}, (_, idx) => letterIdx - idx
    );
    let middleSpaces = Array.from(
      {length: letterIdx + 1}, (_, idx) => (idx === 0 ? 0 : (2 * idx) - 1)
    );

    let idx = 0;
    while (idx < letterIdx) {
      let letter = Diamond.LETTERS[idx];
      result += this.getOneRow(letter, paddingSpaces[idx], middleSpaces[idx]);
      idx += 1;
    }

    while (idx >= 0) {
      let letter = Diamond.LETTERS[idx];
      result += this.getOneRow(letter, paddingSpaces[idx], middleSpaces[idx]);
      idx -= 1;
    }

    return result;
  }

  // ================

  static getOneRow(letter, padding, middleSpaces) {
    if (letter === 'A') {
      return ' '.repeat(padding) + 'A' + ' '.repeat(padding) + '\n';
    }

    let row = '';

    row += ' '.repeat(padding);
    row += letter;
    row += ' '.repeat(middleSpaces);
    row += letter;
    row += ' '.repeat(padding);
    row += '\n';

    return row;
  }
}

module.exports = Diamond;

/* eslint max-lines-per-function:, max-statements: */
