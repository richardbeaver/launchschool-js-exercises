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

const rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

const lengthPrompt = 'Enter the length of the room in meters:';
const widthPrompt = 'Enter the width of the room in meters:';
const numberInvalidPrompt = 'Please enter a valid number.';

const areaResult = (areaSquareMeters) => {
  let areaSquareFeet = areaSquareMeters * SQMETERS_TO_SQFEET;
  return `The area of the room is ${areaSquareMeters.toFixed(2)} square meters ` 
        + `(${areaSquareFeet.toFixed(2)} square feet).`
};

function displayPrompt(message) {
  console.log(`=> ${message}`);
}

function numberInvalid(number) {
  return number.trimStart() === ''
    || Number.isNaN(Number(number))
    || Number(number) <= 0;
}

function getNumberInput(prompt) {
  displayPrompt(prompt);
  let result = rlSync.prompt();

  while (numberInvalid(result)) {
    displayPrompt(numberInvalidPrompt);
    result = rlSync.prompt();
  }

  return result;
}

// =========================================================

// Get user inputs
let length = parseInt(getNumberInput(lengthPrompt), 10);
let width = parseInt(getNumberInput(widthPrompt), 10);

// Compute area
let areaSquareMeters = length * width;

// Display result
displayPrompt(areaResult(areaSquareMeters));
