// Given two strings, find out if there is a substring longer than one
// character that appears in both strings. Return `true` if so, otherwise
// return `false`.

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(
  substringTest(
    'supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou'
  ) === true
);

//

/*
input: two strings
output: boolean for whether some substring longer than one character that
  appears in both strings

- Case insensitive
  - Convert strings to lowercase
- Only need to check for any 2-character substrings
  - Anything longer would still match 2 characters


- Lowercase both strings
- For each substring of 2 characters in `string1`:
  - If it matches any 2 character substring in `string2`:
    - Return `true`
- Return `false`

*/

function substringTest(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  for (let idx1 = 0; idx1 < string1.length - 1; idx1 += 1) {
    let substr1 = string1.slice(idx1, idx1 + 2);

    for (let idx2 = 0; idx2 < string2.length - 1; idx2 += 1) {
      let substr2 = string2.slice(idx2, idx2 + 2);

      if (substr1 === substr2) return true;
    }
  }

  return false;
}
