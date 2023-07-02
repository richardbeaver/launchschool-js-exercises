// Search Word (Part 1)

// Write a function that takes two arguments, a word and a string of text,
// and returns an integer representing the number of times the word appears
// in the text.

// You may assume that the word and text inputs will always be provided, and
// that all word breaks are spaces. Thus, some words will include punctuation
// such as periods and commas. Also assume that the search is case-insensitive.

// Example:
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(
  searchWord('sed', text)      // 3
);

//

/*
input: 2 strings: one word, a string of text
output: integer of number of times the word appears in the text

- Case-insensitive
- Punctuation is part of the words


1.
- Create a `count` variable (value: 0)
- For each word (characters separated by spaces) in the text:
  - If the lowercased word matches the lowercased input word:
    - Increment `count` by 1
- Return `count`


2. Using Regex:
- 

*/

function searchWord(inputWord, text) {
  let count = 0;

  text.split(' ').forEach((textWord) => {
    if (textWord.toLowerCase() === inputWord.toLowerCase()) {
      count += 1;
    }
  });

  return count;
}

// Regex solution:
