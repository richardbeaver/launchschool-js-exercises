// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

//

/*
input: array of numbers
output: new array, with each input number mapped to how many unique elements
  are smaller than it

- Result contains number of unique values smaller than it
- Equal values with end up with equal resulting values in the result array


- Create a copy of input array
  - Sort the copy
  - Remove all duplicate elements
- For each element in the input array:
  - Find which index it would be placed in order in the sorted copy array
- Map the input value to that resulting index

*/

function smallerNumbersThanCurrent(array) {
  let sortedCopy = array.slice().sort((a, b) => a - b);
  let uniqueSortedElements = removeDuplicates(sortedCopy);

  return array.map((number) => findPlacement(number, uniqueSortedElements));
}

function removeDuplicates(elements) {
  return elements.filter((element, idx) => elements.indexOf(element) === idx);
}

function findPlacement(element, sortedArray) {
  let idx = 0;

  while (element > sortedArray[idx]) {
    idx += 1;
  }

  return idx;
}
