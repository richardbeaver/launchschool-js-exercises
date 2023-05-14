// Tip Calculator

// Create a simple tip calculator. The program should prompt for a bill
// amount and a tip rate. The program must compute the tip, and then log
// both the tip and the total amount of the bill to the console. You can
// ignore input validation and assume that the user will enter numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

//

const rlSync = require('readline-sync');

const billPrompt = 'What is the bill?';
const tipPercentagePrompt = 'What is the tip percentage?';
const numberInvalidPrompt = 'Please enter a valid number.';

const tipResult = (tipDollars) => `The tip is $${tipDollars.toFixed(2)}`;
const totalResult = (totalDollars) => `The total is $${totalDollars.toFixed(2)}`;

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function numberInvalid(number) {
  return number.trimStart() === ''
    || Number.isNaN(Number(number))
    || Number(number) < 0;
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

// Get bill and tip percentage
let billAmount = parseFloat(getNumberInput(billPrompt));
let tipPercentage = parseFloat(getNumberInput(tipPercentagePrompt));

// Calculate tip and total
let tip = billAmount * (tipPercentage / 100);
let total = billAmount + tip;

// Display results
displayPrompt(tipResult(tip));
displayPrompt(totalResult(total));
