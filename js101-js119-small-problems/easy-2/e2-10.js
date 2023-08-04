// When Will I Retire?

// Build a program that logs when the user will retire and how many more
// years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

//

const rlSync = require('readline-sync');

const agePrompt = 'What is your age?';
const retiringAgePrompt = 'At what age would you like to retire?';
const ageInvalidPrompt = 'Please enter a valid age.';

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function ageInvalid(number) {
  return number.trimStart() === ''
    || Number.isNaN(Number(number))
    || Number(number) < 0;
}

function getAgeInput(prompt) {
  displayPrompt(prompt);
  let result = rlSync.prompt();

  while (ageInvalid(result)) {
    displayPrompt(ageInvalidPrompt);
    result = rlSync.prompt();
  }

  return result;
}

function retiringYearMessage(yearsLeft) {
  let todaysDate = new Date();
  return `It's ${todaysDate.getFullYear()}. You will retire in ${todaysDate.getFullYear() + yearsLeft}.`;
}

function yearsOfWorkLeftMessage(yearsLeft) {
  return `You only have ${yearsLeft} years of work to go!`;
}

// ========================================================

let age = Number(getAgeInput(agePrompt));
let retiringAge = Number(getAgeInput(retiringAgePrompt));

let yearsLeftToWork = retiringAge - age;

displayPrompt(retiringYearMessage(yearsLeftToWork));
displayPrompt(yearsOfWorkLeftMessage(yearsLeftToWork));
