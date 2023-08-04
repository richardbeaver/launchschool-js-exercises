// Create a function that that takes two strings, and returns true if a portion
// of string1 characters can be rearranged to match string2, otherwise returns
// false. Input strings will only contain lowercase letters.

console.log(
  scramble('rkqodlw',           'world'      ) === true,
  scramble('cedewaraaossoqqyt', 'codewars'   ) === true,
  scramble('katas',             'steak'      ) === false,
  scramble('scriptjavx',        'javascript' ) === false,
  scramble('scriptingjava',     'javascript' ) === true,
  scramble('scriptsjava',       'javascripts') === true,
  scramble('javscripts',        'javascript' ) === false,
  scramble('jscripts',          'javascript' ) === false,
  scramble('aabbcamaomsccdd',   'commas'     ) === true,
  scramble('commas',            'commas'     ) === true,
  scramble('sammoc',            'commas'     ) === true,
);

//

// Did this problem on Codewars before seeing it here. Found 2 solutions, but
// both timed out on the very large string tests used in that problem (string1
// as the alphabet repeated 10,000 times, and string2 a 6-letter string
// repeated 9000 times);
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

/*
input: two strings of only lowercase letters
output: boolean for whether a portion of string1 characters can be arranged
  to match string2


1. (Timing out on very long strings)
- If length of string1 is less than length of string2:
  - Return false
- For each character in string2:
  - If character is not found in string1:
    - Return `false`
  - Remove instance of that character from string1
- Return `true`


2. (Timing out on very long strings)
- If length of string1 is less than length of string2:
  - Return false
- Sort both strings
- Create index pointers for both strings, starting at `0`, pointing
  to elements `char1` and `char2`

- While idx2 < length of string2:
  - While char1 < char2:
    - Increment idx1 by 1
  - If char1 > char2:
    - Return false;
  - Increment idx1 by 1
  - Increment idx2 by 1

- Return true


0 1 2 3 4
      |
a b c d e
b d
  |


*/

// 1.
function scramble(str1, str2) {
  if (str1.length < str2.length) return false;

  for (let idx = 0; idx < str2.length; idx += 1) {
    let char2 = str2[idx];

    if (!str1.includes(char2)) {
      return false;
    }
    str1 = str1.replace(char2, '');
  }

  return true;
}

// 2.
function scramble2(str1, str2) {
  if (str1.length < str2.length) return false;

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  let idx1 = 0;
  let idx2 = 0;

  while (idx2 < str2.length) {
    while (str1[idx1] < str2[idx2]) {
      idx1 += 1;
    }

    if (str1[idx1] > str2[idx2]) return false;

    idx1 += 1;
    idx2 += 1;
  }

  return true;
}

/* eslint no-unused-vars: */
