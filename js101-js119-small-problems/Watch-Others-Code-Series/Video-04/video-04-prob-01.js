// Write a function to find the longest prefix string amongst an array of
// strings. If there is no common prefix, return an empty string. All given
// inputs are in lowercase letters a-z.

console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(commonPrefix(['dog', 'racecar', 'car']) === '');
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters');
console.log(commonPrefix(['throne', 'dungeon']) === '');
console.log(commonPrefix(['throne', 'throne']) === 'throne');

//

/*
input: array of strings of lowercase letters
output: longest prefix string among all input strings


** Note on solutions:
- Implementing the solution 2 algorithm originally caused an ESLint
  "no-loop-func" error when trying to refer to 'shortestString' in a callback
  function inside the loop
  - `shortestString` exists in a scope outside the loop
- Documentation page for this errors states that the code may run without
  error, but can have unexpected behavior
- Solution 1 also had this error when using a while loop
  - Error is avoided after switching to a `for` loop and so that `idx` is
    scoped to the loop
- Resolved error in implementation of solution 2 by:
  - Instead of removing the shortest string from the array sorted by lengths,
    reference the first string in the array as the shortest
  - As we iterate, modify the first element in the sorted array to update the
    changes to `shortestString` that were planned in the original solution


1.
- Create an index variable, `idx` (value: 0)
- Find the length of the shortest string in input array
- Create a `result` variable (value: empty string)
- While `idx` is less than the shortest string length AND the character at
  `idx` in every string is the same:
  - Append character in first string at `idx` to `result`
  - Increment `idx` by 1
- Return `result`

2.
- Sort input strings by length
- Remove the shortest string
- While shortest string length is longer than 0:
  - If all other strings start with shortest string:
    - Break loop
  - Reassign shortest string to itself without the last character
- Return shortest string


*/

// 1.
function commonPrefix(strings) {
  if (strings.length === 0) return '';

  let result = '';

  let shortestLength = Math.min(...strings.map((string) => string.length));

  for (let idx = 0; idx < shortestLength; idx += 1) {
    let currentChars = strings.map((string) => string[idx]);

    if (!allEqual(...currentChars)) break;

    result += currentChars[0];
  }

  return result;
}

function allEqual(...items) {
  if (items.length < 2) {
    return undefined;
  }
  return items.every((item) => item === items[0]);
}

// =============================================================

// 2.

// Causing an ESLint error:
function commonPrefix_2_ESLintError(strings) {
  if (strings.length === 0) return '';

  let sortedStrings = strings.slice().sort((str1, str2) => {
    return str1.length - str2.length;
  });

  let shortestString = sortedStrings.shift();

  while (shortestString.length > 0) {
    // Error caused in this callback when trying to refer to `shortestString`,
    // which exists in a scope outside the loop:
    if (strings.every((string) => string.startsWith(shortestString))) {
      break;
    }
    shortestString = shortestString.slice(0, -1);
  }

  return shortestString;
}

// ESLint error resolved:
function commonPrefix_2_Resolved(strings) {
  if (strings.length === 0) return '';

  let sortedStrings = strings.slice().sort((str1, str2) => {
    return str1.length - str2.length;
  });

  while (true) {
    // Reference first string in sorted list inside loop
    let shortestString = sortedStrings[0];

    if (shortestString.length === 0) break;

    if (strings.every((string) => string.startsWith(shortestString))) break;

    // Modify first element in sorted array; will be referenced as shortest
    // string in next loop iteration
    sortedStrings[0] = sortedStrings[0].slice(0, -1);
  }

  return sortedStrings[0];
}

/* eslint no-unused-vars:, camelcase: */
