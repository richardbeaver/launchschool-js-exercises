// Lettercase Percentage Ratio

// Write a function that takes a string and returns an object containing the
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// Examples:
console.log(
  letterPercentages('abCdef 123'),
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

  letterPercentages('AbCd +Ef'),
  // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

  letterPercentages('123'),
  // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
);

//

/*
input: string
output: object with three properties: percentages of characters in input string
  that are lowercase, uppercase, or neither

- Create output object with three properties set to 0 (will start with counts
  of characters that fall into each category)
- For each character in input string:
  - Increment relevant property of object by 1
- For each property in object:
  - Divide by total number of characters in input string, and multiply by 100
  - Convert to string fixed to 2 decimal places
- Return resulting object

*/

function letterPercentages(string) {
  let resultObj = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach((char) => {
    if (charCase(char) === 'upper') {
      resultObj.uppercase += 1;
    } else if (charCase(char) === 'lower') {
      resultObj.lowercase += 1;
    } else {
      resultObj.neither += 1;
    }
  });

  Object.keys(resultObj).forEach((key) => {
    let charCount = resultObj[key];
    let percentage = (charCount / string.length) * 100;
    resultObj[key] = percentage.toFixed(2);
  });

  return resultObj;
}

function charCase(char) {
  if (char !== char.toUpperCase()) return 'lower';
  if (char !== char.toLowerCase()) return 'upper';
  return null;
}

// ==================================

// Given solutions:

function letterPercentages1(string) {
  let count = string.length;
  return {
    lowercase:
      (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase:
      (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither:
      (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2)
  };
}

function letterPercentages2(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}

/* eslint no-unused-vars:"off" */
