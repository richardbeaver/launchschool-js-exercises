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

const AGE_PROMPT = 'What is your age?';
const RETIRING_AGE_PROMPT = 'At what age would you like to retire?';
const AGE_INVALID_PROMPT = 'Please enter a valid age.';

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function ageValid(number) {
  return number.trimStart() !== ''
    && !Number.isNaN(Number(number))
    && Number(number) >= 0;
}

function getAgeInput(prompt) {
  let age;
  while (true) {
    displayPrompt(prompt);
    age = rlSync.question();
    if (ageValid(age)) break;
    displayPrompt(AGE_INVALID_PROMPT);
  }

  return Number(age);
}

// ========================================================

let age = getAgeInput(AGE_PROMPT);
let retiringAge = getAgeInput(RETIRING_AGE_PROMPT);

let yearsLeftToWork = retiringAge - age;
let currentYear = new Date().getFullYear();
let retiringYear = currentYear + yearsLeftToWork;

displayPrompt(`It's ${currentYear}. You will retire in ${retiringYear}.`);
displayPrompt(`You only have ${yearsLeftToWork} years of work to go!`);
