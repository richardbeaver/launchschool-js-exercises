// Madlibs Revisited

// Let's build another program using madlibs. We made a similar program in the
// Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text "template" as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that text,
// and then returns it. You can build your lists of nouns, verbs, adjectives,
// and adverbs directly into your program. Your program should read this text
// and, for each line, place random words of the appropriate types into the
// text and return the result.

// The challenge of this program isn't just about writing your solution—it's
// about choosing the structure of the text templates. Choose the right way to
// structure your templates and this problem becomes much easier. Consequently,
// this exercise is a bit more open-ended since the input is also something
// that you'll define for yourself.

// Examples:

// Note: The quotes in the example strings returned by the madlibs function are
// only shown for emphasis. These quotes are not present in the actual output
// strings. The words in quotes come from the list of texts and it is the
// madlibs function that puts them there without quotes.

// function madlibs(template) {
//   ...
// }

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

//
let template1 = "The *adjective brown *noun *adverb *verb the *adjective yellow *noun, who *adverb *verb his *noun and looks around.";
let template2 = "The *noun *verb the *noun's *noun.";
//

console.log(
  madlibs(template1),
  // The "sleepy" brown "cat" "noisily" "licks" the "sleepy" yellow
  // "dog", who "lazily" "licks" his "tail" and looks around.

  madlibs(template1),
  // The "hungry" brown "cat" "lazily" "licks" the "noisy" yellow
  // "dog", who "lazily" "licks" his "leg" and looks around.

  madlibs(template2),      // The "fox" "bites" the "dog"'s "tail".

  madlibs(template2),      // The "cat" "pats" the "cat"'s "head".
);

//

/*
input: template string, with each word that requires a replacement starting
  with an "*"
output: The resulting string from replacing each placeholder with a word of
  the associated word type (adjectives, nouns, verbs, adverbs)

- Create an object with values as arrays containing the possible words
  of each type
- Create an array of the types of words to replace to ensure that, in each
  input word, 'adverb' is checked for before 'verb'
- For each word in the input template:
  - If the word does not start with "*":
    - Continue to next word
  - Reassign word to slice of word from first index to end, removing
    starting '*'
  - For each keyword in the list of replacement word types (noun, adjective,
    verb, adverb):
    - If the word contains that word type:
      - Get random word from associated type property in object of replacement
        words, removing it from the list so that it is not chosen again in the
        same template input
      - Replace current word in the template with the concatenation of the
        slice up to the index of the placeholder, the replacing word, and the
        rest of the original word after the placeholder
- Rejoin and return resulting words

*/

function madlibs(template) {
  let fillInWords = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  let keywords = ['adjective', 'noun', 'adverb', 'verb'];

  let wordsReplaced = template.split(' ').map((templateWord) => {
    if (!templateWord.startsWith('*')) return templateWord;
    templateWord = templateWord.slice(1);

    for (let idx = 0; idx < keywords.length; idx += 1) {
      let keyword = keywords[idx];

      let keywordIdx = templateWord.indexOf(keyword);

      if (keywordIdx !== -1) {
        let replacementWord = removeRandomWord(fillInWords[keyword]);
        return templateWord.slice(0, keywordIdx)
          + replacementWord
          + templateWord.slice(keywordIdx + keyword.length);
      }
    }

    return null;
  });

  return wordsReplaced.join(' ');
}

function removeRandomWord(wordsArray) {
  let randomIdx = Math.floor(Math.random() * wordsArray.length);
  let randomWord = wordsArray[randomIdx];
  wordsArray.splice(randomIdx, 1);
  return randomWord;
}

/* eslint max-lines-per-function:"off" */
