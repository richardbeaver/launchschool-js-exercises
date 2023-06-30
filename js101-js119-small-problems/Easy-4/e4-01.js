// Searching 101

// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

//

const rlSync = require('readline-sync');

function suffix(number) {
  if (number === 1) return 'st';
  if (number === 2) return 'nd';
  if (number === 3) return 'rd';
  else return 'th';
}

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function numberValid(number) {
  return number.trimStart() !== '' && !Number.isNaN(Number(number));
}

function getNumberInput(promptMessage, errorMessage, validInputFunc) {
  let number;
  while (true) {
    displayPrompt(promptMessage);
    number = rlSync.question();
    if (validInputFunc(number)) break;
    displayPrompt(errorMessage);
  }

  return Number(number);
}

//

let numbers = [];

for (let idx = 0; idx < 6; idx += 1) {
  let inputPrompt = `Enter the ${idx + 1}${suffix(idx + 1)} number:`;
  let lastPrompt = 'Enter the last number:';
  let errorPrompt = 'Please enter a valid number';

  let number = getNumberInput(
    idx < 5 ? inputPrompt : lastPrompt, errorPrompt, numberValid
  );
  numbers.push(number);
}

let lastNumber = numbers.at(-1);
let result = numbers.slice(0, -1).includes(lastNumber);

let output =
  `The number ${lastNumber} ${
    result ? 'appears' : 'does not appear'
  } in ${numbers.slice(0, -1).join(', ')}.`;

displayPrompt(output);
