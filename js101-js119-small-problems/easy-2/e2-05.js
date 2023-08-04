// Arithmetic Integer

// Write a program that prompts the user for two positive integers, and
// then prints the results of the following operations on those two
// numbers: addition, subtraction, product, quotient, remainder, and power.
// Do not worry about validating the input.

// Example

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

//

// Using input validation:

const rlSync = require('readline-sync');

const FIRST_NUMBER_PROMPT = 'Enter the first number:';
const SECOND_NUMBER_PROMPT = 'Enter the second number:';
const NUMBER_INVALID_PROMPT = 'Please enter a postive integer.';

const OPERATIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.floor(a / b),  // Example shows integer division
  '%': (a, b) => a % b,
  '**': (a, b) => a ** b,
};

function displayPrompt(prompt) {
  console.log(`==> ${prompt}`);
}

function numberValid(number) {
  return number.trimStart() !== ''
    && Number.isInteger(Number(number))
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

function getNumbers() {
  let number1 = getNumberInput(FIRST_NUMBER_PROMPT);
  let number2 = getNumberInput(SECOND_NUMBER_PROMPT);
  return [number1, number2];
}

function displayResult(number1, number2, operationString) {
  let result = OPERATIONS[operationString](number1, number2);
  displayPrompt(`${number1} ${operationString} ${number2} = ${result}`);
}

// ============================================

let [ number1, number2 ] = getNumbers();

Object.keys(OPERATIONS).forEach((operationString) => {
  displayResult(number1, number2, operationString);
});
