// Letter Counter (Part 1)

// Write a function that takes a string consisting of zero or more space
// separated words and returns an object that shows the number of words
// of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:
console.log(
  wordSizes('Four score and seven.'),                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?"),                              // { "2": 1, "4": 1, "6": 1 }
  wordSizes(''),                                            // {}
);

//

/*
input: string of space-separated words
output: an object representing number of words of different sizes

- Words are any sequence of non-space characters
  - Punctuation is part of the length count for a word
  - Ex. - "What's" has a length of 6


1. Create a variable `result` (value: empty object)
2. If input is an empty string, return `result`
3. Split input by spaces into words:
4, For each `word`:
  1. Create a variable `length` (value: length of `word)
  2. If value of the property `length` in `result` is `undefined`:
    1. Set property `length` to 1
  3. Else:
    1. Increment property `length` by 1
5. Return `result`


Other notes:
- If input string could have multiple spaces in a row, would have to check
  for that condition so that a space is not included in word length count

*/

function wordSizes(string) {
  let result = {};
  if (string.trim().length === 0) return result;

  string.split(' ').forEach((word) => {
    let length = word.length;

    if (result[length] === undefined) {
      result[length] = 1;
    } else {
      result[length] += 1;
    }
  });

  return result;
}
