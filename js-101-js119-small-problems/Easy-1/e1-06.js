// Sum or Product of Consecutive Integers

// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of
// all numbers between 1 and the entered integer, inclusive.

// Example:
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Example:
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

//

const rlSync = require('readline-sync');

const integerInputPrompt = 'Please enter an integer greater than 0:';
const integerInvalidPrompt = 'Please enter a valid integer greater than 0.';

const operationPrompt = 'Enter "s" to compute the sum, or "p" to compute the product.';
const operationInvalidPrompt = 'Please enter "s" or "p"';

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function integerInvalid(number) {
  return number.trimStart() === ''
    || !Number.isInteger(Number(number))
    || Number(number) <= 0;
}

function getInput(promptMessage, errorMessage, inputInvalidFunc) {
  displayPrompt(promptMessage);
  let result = rlSync.prompt();

  while (inputInvalidFunc(result)) {
    displayPrompt(errorMessage);
    result = rlSync.prompt();
  }

  return result;
}

function computeSum(integer) {
  let result = 0;
  for (let i = 1; i <= integer; i += 1) {
    result += i;
  }
  return result;
}

function computeProduct(integer) {
  let result = 1;
  for (let i = 1; i <= integer; i += 1) {
    result *= i;
  }
  return result;
}

function operationResult(integer, operationChar) {
  let operationName;
  let result;
  if (operationChar === 's') {
    operationName = 'sum';
    result = computeSum(integer);
  } else {
    operationName = 'product';
    result = computeProduct(integer);
  }
  
  return `The ${operationName} of the integers between 1 and ${integer} is ${result}.`;
};

// =========================================================

// Get integer from user and whether to get sum or product
let int = getInput(integerInputPrompt, integerInvalidPrompt, integerInvalid);
let operationChar = getInput(
  operationPrompt, operationInvalidPrompt, (input) => input !== 's' && input !== 'p'
);

// Display result
displayPrompt(operationResult(int, operationChar));
