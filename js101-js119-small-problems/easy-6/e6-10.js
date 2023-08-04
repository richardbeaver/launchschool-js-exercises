// Matching Parentheses?

// Write a function that takes a string as an argument and returns true if
// all parentheses in the string are properly balanced, false otherwise. To
// be properly balanced, parentheses must occur in matching '(' and ')' pairs.

// Note that balanced pairs must each start with a (, not a ).

// Examples:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

//

/*
input: a string
output: boolean for whether all parntheses in input string are properly balanced

- Create variable `leftParens` (value: `0`) to count number of unbalanced left
  parentheses seen so far
- For each character in input string:
  - If character is a '(':
    - Increment `leftParens` by 1
  - If character is a ')':
    - Decrement `leftParens` by 1
    - If `leftParens` is less than `0`:
      - Return `false`
- Return whether `leftParens` is equal to `0`

*/

function isBalanced(string) {
  let leftParens = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];

    if (char === '(') {
      leftParens += 1;
    }

    if (char === ')') {
      leftParens -= 1;
      if (leftParens < 0) return false;
    }
  }

  return leftParens === 0;
}
