// How Many?

// Write a function that counts the number of occurrences of each element in
// a given array. Once counted, log each element alongside the number of
// occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

/* eslint indent:"off"*/
// Example:
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

//

/*
input: an array of strings
output: no return value; logs each element with its number of occurrences
  (case-sensitive)

- Create a variable `occurrences` (value: empty object)
- For each element in input array:
  - If property exists in `occurrences` of that element:
    - Increment value of property of that element by 1
  - Else:
    - Add property of that element to `occurrences` with value of 1
- For each property in `occurrences`:
  - Log key, "=>", and value on a new line

*/

function countOccurrences(elements) {
  let occurrences = {};

  elements.forEach((element) => {
    if (occurrences[element] !== undefined) {
      occurrences[element] += 1;
    } else {
      occurrences[element] = 1;
    }
  });

  Object.entries(occurrences).forEach((keyValue) => {
    let [ element, count ] = keyValue;
    console.log(`${element} => ${count}`);
  });
}


// Given solution (very similar; different choices of modifying the
// `occurrences` object and iterating through it to log results):

function countOccurrencesSolution(elements) {
  let occurrences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
    occurrences[elements[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

/* eslint no-unused-vars: */
