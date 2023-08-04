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

const rlSync = require('readline-sync');

const firstNumberPrompt = 'Enter the first number:';
const secondNumberPrompt = 'Enter the second number:';
const posIntInvalidPrompt = 'Please enter a postive integer.';

function displayPrompt(prompt) {
  console.log(`==> ${prompt}`);
}

function posIntInvalid(number) {
  return number.trimStart() === ''
    || !Number.isInteger(Number(number))
    || Number(number) <= 0;
}

function getPosIntInput(prompt) {
  displayPrompt(prompt);
  let result = rlSync.prompt();

  while (posIntInvalid(result)) {
    displayPrompt(posIntInvalidPrompt);
    result = rlSync.prompt();
  }

  return result;
}

// =======================================================

// Get two numbers
let number1 = parseInt(getPosIntInput(firstNumberPrompt), 10);
let number2 = parseInt(getPosIntInput(secondNumberPrompt), 10);

// Perform calculations and display results
displayPrompt(`${number1} + ${number2} = ${number1 + number2}`);
displayPrompt(`${number1} - ${number2} = ${number1 - number2}`);
displayPrompt(`${number1} * ${number2} = ${number1 * number2}`);
displayPrompt(`${number1} / ${number2} = ${number1 / number2}`);
displayPrompt(`${number1} % ${number2} = ${number1 % number2}`);
displayPrompt(`${number1} ** ${number2} = ${number1 ** number2}`);
