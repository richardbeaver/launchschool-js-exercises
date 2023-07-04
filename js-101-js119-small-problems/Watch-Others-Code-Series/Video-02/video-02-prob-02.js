// Given an array of strings made only of lowercase letters, return an array of
// all characters that show up in all strings in the given array (including
// duplicates). For example, if a character occurs 3 times in all strings,
// but not 4 times, character must be included 3 times in final answer.


console.log(samePrimitives(commonChars(['a', 'b']), []));
console.log(samePrimitives(commonChars(['bella', 'label', 'roller']), ['e', 'l', 'l']));
console.log(samePrimitives(commonChars(['cool', 'lock', 'cook']), ['c', 'o']));
console.log(samePrimitives(commonChars(['hello', 'goodbye', 'booya', 'random']), ['o']));
console.log(
  samePrimitives(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrr', 'yyyzzz']), [])
);

function samePrimitives(array1, array2) {
  if (array1.length === 0) {
    return array2.length === 0;
  }
  return array1.every((elem1, idx) => elem1 === array2[idx]);
}

//

/*
input: array of strings of only lowercase letters
output: array of all characters that show up in all strings, including
  duplicates

- Create a result array to contain answer characters
- For each character at index, `idx`, in first string in array:
  - Build an array of character's index in every string in array, else `-1`
  - If resulting array does not contain -1 (character exists in every string):
    - Add that character to result array
    - Map strings array to a new array with an instance of that character
      removed from each string
    - Decrement `idx` by 1
- Return result


- Other options include:
  - Creating a copy array first with each string as an array of its characters
  - Deleting each character from every string as we iterate through the first
    - (and just adding character result if it exists in every string)
  - Creating a separate function to find common characters between just 2
    strings, calling it with the first two input strings, then passing the
    result into that same function with the next string in the input array
    until reaching the end - and being left with characters that are common
    through all of the input strings

*/

function commonChars(strings) {
  if (strings.length === 0) return [];

  let result = [];

  let firstWord = strings[0];
  for (let idx = 0; idx < firstWord.length; idx += 1) {
    let char = firstWord[idx];

    let idxsInEachString = strings.map((string) => string.indexOf(char));

    if (idxsInEachString.every((idx) => idx !== -1)) {
      result.push(char);
      strings = strings.map((string) => string.replace(char, ''));
      idx -= 1;
    }
  }

  return result;
}
