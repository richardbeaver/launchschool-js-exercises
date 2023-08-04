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

const INTEGER_INPUT_PROMPT = 'Please enter an integer greater than 0:';
const INTEGER_INVALID_PROMPT = 'Please enter a valid integer greater than 0.';

const OPERATION_PROMPT = 'Enter "s" to compute the sum, or "p" to compute the product.';
const OPERATION_INVALID_PROMPT = 'Please enter "s" or "p"';

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function isPositiveInteger(number) {
  return number.trimStart() !== ''
    && Number.isInteger(Number(number))
    && Number(number) > 0;
}

function getInput(prompt, errorMessage, validInputFunc) {
  let answer;
  while (true) {
    displayPrompt(prompt);
    answer = rlSync.question();
    if (validInputFunc(answer)) break;
    displayPrompt(errorMessage);
  }

  return answer;
}

// ===================================

let inputInteger = parseInt(getInput(
  INTEGER_INPUT_PROMPT, INTEGER_INVALID_PROMPT, isPositiveInteger
), 10);

let operation = getInput(
  OPERATION_PROMPT, OPERATION_INVALID_PROMPT, (input) => ['s', 'p'].includes(input)
);

let numbers = Array.from({ length: inputInteger }, (_, idx) => idx + 1);

let resultType = (operation === 's') ? 'sum' : 'product';

let result = (operation === 's') ?
  numbers.reduce((sum, num) => sum + num, 0) :
  numbers.reduce((product, num) => product * num, 1);

displayPrompt(
  `The ${resultType} of the integers between 1 and ${inputInteger} is ${result}.`
);

// =========================================================
// =========================================================

// Could also have computed the sum and product without creating an array by
// passing the ending number to functions that add / multiply from 1 to the
// number and return the result:

function computeSum(integer) {
  let result = 0;
  for (let num = 1; num <= integer; num += 1) {
    result += num;
  }
  return result;
}

function computeProduct(integer) {
  let result = 1;
  for (let num = 1; num <= integer; num += 1) {
    result *= num;
  }
  return result;
}
