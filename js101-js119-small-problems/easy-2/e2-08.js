// Odd Lists

// Write a function that returns an Array that contains every other element
// of an Array that is passed in as an argument. The values in the returned
// list should be those values that are in the 1st, 3rd, 5th, and so on
// elements of the argument Array.

// Examples:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//

/*
- Problem

inputs: an array of elements
outputs: a new array of every other item in the input array starting with
  the first

Rules:
- All items which have an odd-numbered place in the input array
- This will end up being all elements at even indexes
- Empty arrays will return an empty array

Algorithm

- Declare a variable `oddItems` and initialize to an empty array
- For each index, `i`, in [0, length of input array - 1], incrementing by 2:
  - Add the element at index `i` of the input array to `oddItems`
- Return `oddItems`

*/

function oddities(array) {
  let oddItems = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    oddItems.push(array[idx]);
  }
  return oddItems;
}
