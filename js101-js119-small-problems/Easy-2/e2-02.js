// Greeting a user

// Write a program that will ask for user's name. The program will then greet
//the user. If the user writes "name!" then the computer yells back to the user.

// Examples

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

//

const rlSync = require('readline-sync');

const namePrompt = 'What is your name?';
const nameInvalidPrompt = 'Please enter a valid name.';

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function getNameInput(prompt) {
  displayPrompt(prompt);
  let result = rlSync.prompt();

  while (result.trimStart().length === 0) {
    displayPrompt(nameInvalidPrompt);
    result = rlSync.prompt();
  }

  return result;
}

function response(name) {
  if (name.endsWith('!')) {
    return `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`
  }
  return `Hello ${name}.`;
}

// =======================================================

let name = getNameInput(namePrompt);
displayPrompt(response(name));
