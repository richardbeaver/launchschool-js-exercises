// Letter Counter (Part 2)

// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of
// "it's" is 3, not 4.

// Examples:
console.log(
  wordSizes('Four score and seven.'),                       // { "3": 1, "4": 1, "5": 2 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 3 }
  wordSizes("What's up doc?"),                              // { "2": 1, "3": 1, "5": 1 }
  wordSizes(''),                                            // {}
);

//

/*
input: string of space-separated words
output: an object representing number of words of different sizes

- Words are any sequence of non-space characters, not including non-letters
  - Punctuation/non-letters are not part of the length count for a word
  - Ex. - "What's" has a length of 5


1. Create a variable `result` (value: empty object)
2. If input is an empty string, return `result`
3. Split input by spaces into words:
4. For each `word`:
  1. Create a variable `length` (value: 0)
  2. For each character in `word`:
    1. If the character is alphabetic, increment `length` by 1
  3. If value of the property `length` in `result` is `undefined`:
    1. Set property `length` to 1
  4. Else:
    1. Increment property `length` by 1
5. Return `result`

*/

function wordSizes(string) {
  let result = {};
  if (string.trim().length === 0) return result;

  string.split(' ').forEach((word) => {
    let onlyLettersString =
      word.split('').filter((char) => isAlphabetic(char)).join('');
    let length = onlyLettersString.length;

    if (result[length] === undefined) {
      result[length] = 1;
    } else {
      result[length] += 1;
    }
  });

  return result;
}

function isAlphabetic(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}
