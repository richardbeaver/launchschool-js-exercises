// Madlibs

// Madlibs is a simple game where you create a story template with "blanks"
// for words. You, or another player, then construct a list of words and place
// them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb,
// and an adjective, and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

/* console output: */
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

//

const rlSync = require('readline-sync');

const nounPrompt = 'Enter a noun:';
const verbPrompt = 'Enter a verb:';
const adjectivePrompt = 'Enter an adjective:';
const adverbPrompt = 'Enter an adverb:';
const wordInvalidMessage = 'Please enter a valid word';

function displayPrompt(prompt) {
  console.log(`=> ${prompt}`);
}

function wordInvalid(input) {
  return input.trimStart() === '';
}

function getInput(prompt) {
  displayPrompt(prompt);
  let result = rlSync.prompt();

  while (wordInvalid(result)) {
    displayPrompt(wordInvalidMessage);
    result = rlSync.prompt();
  }

  return result;
}

function displayResult(noun, verb, adjective, adverb) {
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}

// ======================================================

let noun = getInput(nounPrompt);
let verb = getInput(verbPrompt);
let adjective = getInput(adjectivePrompt);
let adverb = getInput(adverbPrompt);

displayResult(noun, verb, adjective, adverb);
