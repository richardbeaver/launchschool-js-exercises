// Search Word (Part 2)

// The function from the previous exercise returns the number of occurrences
// of a word in some text. Although this is useful, there are also situations
// in which we just want to find the word in the context of the text.

// For this exercise, write a function that takes a word and some text as
// arguments, and returns the text with every instance of the word highlighted.
// To highlight a word, enclose the word with two asterisks ('**') on each
// side and change every letter of the word to uppercase
// (e.g., '**HIGHLIGHTEDWORD**').

// Example:
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(
  searchWord('sed', text)
);
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem
// accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
// ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
// explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
// odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione
// voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
// quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam
// eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
// voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
// corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
// **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit
// esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis
// nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
// ex ea commodi consequatur blasedbla?"

//

/*
input: two strings: a word, text
output: the input text with the matching input word "highlighted"


1.
- Create an array where, for each word (characters separated by spaces) in
  the text:
  - If the lowercased word matches the lowercased input word:
    - Replace word with "highlighted" version (capitalized and "**" at front
      and back)
- Join resulting array with spaces
- Return resulting string

2. Using Regex
- 

*/

function searchWord(inputWord, text) {
  let highlightedWords = text.split(' ').map((textWord) => {
    if (textWord.toLowerCase() === inputWord.toLowerCase()) {
      return `**${inputWord.toUpperCase()}**`;
    }
    return textWord;
  });

  return highlightedWords.join(' ');
}

// Regex solution:
