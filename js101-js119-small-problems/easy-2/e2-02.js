// Greeting a user

// Write a program that will ask for user's name. The program will then greet
// the user. If the user writes "name!" then the computer yells back to the
// user.

// Examples

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

//

const rlSync = require('readline-sync');

const NAME_PROMPT = 'What is your name?';
const NAME_INVALID_PROMPT = 'Please enter a valid name.';

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function getNameInput() {
  let name;
  while (true) {
    displayPrompt(NAME_PROMPT);
    name = rlSync.question();
    if (name.trimStart() !== '') break;
    displayPrompt(NAME_INVALID_PROMPT);
  }

  return name;
}

function displayGreeting(name) {
  let greeting = name.endsWith('!') ?
    `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?` :
    `Hello ${name}.`;

  displayPrompt(greeting);
}

// ====================================

let name = getNameInput();
displayGreeting(name);
