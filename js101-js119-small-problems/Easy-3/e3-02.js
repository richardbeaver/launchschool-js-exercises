// Bannerizer

// Write a function that will take a short line of text, and write it to the
// console log within a box.
// You may assume that the output will always fit in your browser window.

// Examples:

logInBox('To boldly go where no one has gone before.');

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

//

/*
- Problem

inputs: string to log
outputs: none; logs input string in box to console

Rules:
- Input will be a single line
- Width of box is length of input string + 4 (left side character and a space
  on each side)

- Algorithm

1. Declare a variable `stringLength` and initialize it to the length of the
  input string
2. Print: '+', '-' x ('stringLength' + 2) times, '+', newline
3. Print: '|', ' ' x ('stringLength' + 2) times, '|', newline
4. Print: '|', ' ', input string, ' ', '|', newline
5. Repeat step 3
6. Repeat step 2

*/

function logInBox(message) {
  let messageLength = message.length;

  let topBottomLines = `+${'-'.repeat(messageLength + 2)}+`;
  let emptyLine = `|${' '.repeat(messageLength + 2)}|`;

  console.log(topBottomLines);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(topBottomLines);
}
