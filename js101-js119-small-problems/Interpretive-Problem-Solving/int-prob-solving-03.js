// Now I Know My ABCs

// A collection of spelling blocks has two letters per block, as shown in
// this list:
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words
// that do not use both letters from any given block. You can also only use
// each block once.

// Write a function that takes a word string as an argument and returns true
// if the word can be spelled using the set of blocks, false otherwise. You
// can consider the letters to be case-insensitive when you apply the rules.

// Examples:
console.log(
  isBlockWord('BATCH'),      // true
  isBlockWord('BUTCH'),      // false
  isBlockWord('jest'),       // true
  isBlockWord('floW'),       // true
  isBlockWord('APPLE'),      // false
  isBlockWord('apple'),      // false
  isBlockWord('apPLE'),      // false
  isBlockWord('Box'),        // false
);

//

/*
input: word as a string
output: boolean for whether the word is spelled using the rules of the blocks

1.
- Create an object with the spelling blocks as keys (including both upper and
  lower case letters), and `false` for each value
  - Values track which blocks have been used for the given word
- For each letter in the input word:
  - If the value of the block that the letter is in is `true`:
    - Return `false`
  - Change the value of the block that the letter is in to `true`
- Return `true`

2.
- Create an array of all spelling blocks as strings (upper and lower
  case letters)
- For each letter in the input word:
  - If no block contains the letter:
    - Return `false`
  - Else:
    - Remove the block that contains the letter from the array
- Return `true`

3. Using Regex:
- 

*/

// 1.
function isBlockWord(word) {
  let spellingBlocksUsed = {
    BObo: false,
    XKxk: false,
    DQdq: false,
    CPcp: false,
    NAna: false,
    GTgt: false,
    REre: false,
    FSfs: false,
    JWjw: false,
    HUhu: false,
    VIvi: false,
    LYly: false,
    ZMzm: false,
  };

  let spellingBlocksArray = Object.keys(spellingBlocksUsed);

  for (let idx = 0; idx < word.length; idx += 1) {
    let currentLetter = word[idx];

    for (let keyIdx = 0; keyIdx < spellingBlocksArray.length; keyIdx += 1) {
      let spellingBlock = spellingBlocksArray[keyIdx];

      if (spellingBlock.includes(currentLetter)) {
        if (spellingBlocksUsed[spellingBlock] === true) {
          return false;
        }
        spellingBlocksUsed[spellingBlock] = true;
        break;
      }
    }
  }

  return true;
}

// 2.
function isBlockWordArray(word) {
  let spellingBlocks  = [
    'BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 'REre',
    'FSfs', 'JWjw', 'HUhu', 'VIvi', 'LYly', 'ZMzm'
  ];

  for (let idx = 0; idx < word.length; idx += 1) {
    let currentLetter = word[idx];

    let matchingBlockIdx =
      spellingBlocks.findIndex((block) => block.includes(currentLetter));

    if (matchingBlockIdx === -1) {
      return false;
    }
    spellingBlocks.splice(matchingBlockIdx, 1);
  }

  return true;
}

// 3.
// Regex solution:

/* eslint max-lines-per-function:, no-unused-vars: */
