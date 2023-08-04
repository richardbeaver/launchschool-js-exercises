// Tip Calculator

// Create a simple tip calculator. The program should prompt for a bill
// amount and a tip rate. The program must compute the tip, and then log
// both the tip and the total amount of the bill to the console.

// You can ignore input validation and assume that the user will enter numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

//

// Using input validation:

const rlSync = require('readline-sync');

const BILL_PROMPT = 'What is the bill?';
const TIP_PRECENTAGE_PROMPT = 'What is the tip percentage?';
const NUMBER_INVALID_PROMPT = 'Please enter a valid number.';

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function numberValid(number) {
  return number.trimStart() !== ''
    && !Number.isNaN(Number(number))
    && Number(number) >= 0;
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

let bill = getNumberInput(BILL_PROMPT);
let tipPercentage = getNumberInput(TIP_PRECENTAGE_PROMPT);

let tip = bill * (tipPercentage / 100);
let total = bill + tip;

displayPrompt(`The tip is $${tip.toFixed(2)}`);
displayPrompt(`The total is $${total.toFixed(2)}`);
