// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

//

/*
input: string
output: the character that appears least often, or first of ones that tie
  for least

- Case insensitive
- Return result in lowercase


1. Instead of an object for counts as usual - use two arrays where each index
  holds the character and count

- Create variable `characters` (value: empty array)
- Create variable `counts` (value: empty array)
- Split input string into characters
- For each character, `char`:
  - If in `characters`:
    - Increment value in `counts` by 1
  - Else:
    - Append `char` to `characters`
    - Set value to 1 in `counts`
- Find minimum count
- Return first character with that count


2.
- Create an object of pairs as (count: first character seen with that count)
- Create an object of seen characters
- For each character in input string:
  - If we've seen this character:
    - Continue to next iteration
  - Count number of occurrences in input string
  - If the `counts` object does not have a property of this character's count:
    - Set this character's count property value to this character
  - Add this character to the `seen` object
- Get the minimum of all keys in the `counts` object
- Return the character value at that minimum count


*/

// 1.
function leastCommonChar(string) {
  string = string.toLowerCase();
  let characters = [];
  let counts = [];

  string.split('').forEach((char) => {
    let charIdx = characters.indexOf(char);

    if (charIdx === -1) {
      characters.push(char);
      counts.push(1);
    } else {
      counts[charIdx] += 1;
    }
  });

  let minCount = Math.min(...counts);
  let minIdx = counts.indexOf(minCount);
  return characters[minIdx];
}

// 2.
function leastCommonChar2(string) {
  string = string.toLowerCase();
  let counts = {};
  let seen = {};

  string.split('').forEach((char) => {
    if (seen.hasOwnProperty(char)) return;

    let count = 0;
    string.split('').forEach((countingChar) => {
      if (countingChar === char) {
        count += 1;
      }
    });

    if (!counts[count]) {
      counts[count] = char;
    }
    seen[char] = true;
  });

  let minCount = Math.min(...Object.keys(counts).map((count) => Number(count)));
  return counts[minCount];
}

/* eslint max-lines-per-function:, no-unused-vars: */
