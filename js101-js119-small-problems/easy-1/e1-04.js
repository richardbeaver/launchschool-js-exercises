// How big is the room?

// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.

// Example:

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

//

// Using input validation:

const rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

const LENGTH_PROMPT = 'Enter the length of the room in meters:';
const WIDTH_PROMPT = 'Enter the width of the room in meters:';
const NUMBER_INVALID_PROMPT = 'Please enter a valid number.';

function displayPrompt(message) {
  console.log(`=> ${message}`);
}

function numberValid(number) {
  return number.trimStart() !== ''
    && !Number.isNaN(Number(number))
    && Number(number) > 0;
}

function getNumberInput(prompt) {
  let number;
  while (true) {
    displayPrompt(prompt);
    number = rlSync.question();
    if (numberValid(number)) break;
    displayPrompt(NUMBER_INVALID_PROMPT);
  }

  return Number(number);
}

// =========================================================

let length = getNumberInput(LENGTH_PROMPT);
let width = getNumberInput(WIDTH_PROMPT);

let squareMeters = length * width;
let squareFeet = squareMeters * SQMETERS_TO_SQFEET;

displayPrompt(
  `The area of the room is ${squareMeters.toFixed(2)} square meters ` +
  `(${squareFeet.toFixed(2)} square feet).`
);
