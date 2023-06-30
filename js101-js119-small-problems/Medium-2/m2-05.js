// Next Featured Number Higher than a Given Value

// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each.
// For example, 49 is a featured number, but 98 is not (it is not odd), 97 is
// not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there
// is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Examples:
console.log(
  featured(12),           // 21
  featured(20),           // 21
  featured(21),           // 35
  featured(997),          // 1029
  featured(1029),         // 1043
  featured(999999),       // 1023547
  featured(999999987),    // 1023456987
  featured(9876543186),   // 9876543201
  featured(9876543200),   // 9876543201
  featured(9876543201),   // "There is no possible number that fulfills those requirements."
);

//

/*
input: integer
output: next "featured" number greater than the input number, else issue an
  error message if there is no next featured number

- "featured" number
  - Odd
  - Multiple of 7
  - All digits occur exactly once each
- First featured numbers are `7`, `21`, `35`,...
- Largest possible featured number is `9876543201`


- Find the smallest multiple of 7 that's > the input number and is odd
- Start a loop:
  - Next potential featured number is result of multiplying `multiplier` by 7
  - If featured number is greater than the input number and the string
      conversion of this number does not have duplicate characters:
    - Return featured number
  - If this featured number is greater than `9876543201`:
    - Return an error message that there is no next featured number
  - Increment `multiplier` by 2

*/

function featured(number) {
  const LARGEST_FEATURED_NUM = 9876543201;

  let featuredNum = number + 1;
  while (featuredNum % 2 === 0 || featuredNum % 7 !== 0) {
    featuredNum += 1;
  }

  while (true) {
    if (!hasDuplicateChars(String(featuredNum))) {
      return featuredNum;
    }

    if (featuredNum > LARGEST_FEATURED_NUM) {
      return 'There is no possible number that fulfills those requirements.';
    }

    featuredNum += 14;
  }
}

function hasDuplicateChars(string) {
  let chars = string.split('');
  return chars.some((char, idx) => chars.indexOf(char) !== idx);
}

/* eslint max-len: "off" */
