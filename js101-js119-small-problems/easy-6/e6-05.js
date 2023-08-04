// Name Swapping

// Write a function that takes a string argument consisting of a first name,
// a space, and a last name, and returns a new string consisting of the last
// name, a comma, a space, and the first name.

// Examples:
console.log(
  swapName('Joe Roberts'),    // "Roberts, Joe"
);

//

/*
input: string of a first name, space, and last name
output: new string of last name, comma, space, first name

1.
- Get index of space between first and last names
- Take slice of input string that contains last name
- Concatenate last name with a comma, space, and slice of input string
  containing first name
- Return resulting string

2.
- Split full name by space, reverse array, and join with a comma and space
- Return resulting string

*/

// 1.
function swapName_Base(fullName) {
  let idxOfSpace = fullName.indexOf(' ');

  let firstName = fullName.slice(0, idxOfSpace);
  let lastName = fullName.slice(idxOfSpace + 1);

  return `${lastName}, ${firstName}`;
}

// 2.
function swapName_Split(fullName) {
  return fullName.split(' ').reverse().join(', ');
}

// ===================================================

// Further Exploration

// What if the person has one or more middle names? Refactor the current
// solution so that it can accommodate this; the middle names should be listed
// after the first name:

console.log(
  swapName('Karl Oskar Henriksson Ragvals')    // "Ragvals, Karl Oskar Henriksson"
);

/*
input: string of a full name containing zero or more middle names

- Get index of last space in input string
- Split into (first and middle names) and (last name)
- Return concatenation of last name, space, and first and middle names

*/

function swapName(fullname) {
  let lastSpaceIdx = fullname.lastIndexOf(' ');

  let firstMiddleNames = fullname.slice(0, lastSpaceIdx);
  let lastName = fullname.slice(lastSpaceIdx + 1);

  return `${lastName}, ${firstMiddleNames}`;
}

/* eslint no-unused-vars:, camelcase: */
