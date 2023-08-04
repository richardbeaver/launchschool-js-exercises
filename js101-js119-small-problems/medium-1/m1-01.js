// Rotation (Part 1)

// Write a function that rotates an array by moving the first element to the
// end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.
console.log(
  rotateArray([7, 3, 5, 2, 9, 1]),       // [3, 5, 2, 9, 1, 7]
  rotateArray(['a', 'b', 'c']),          // ["b", "c", "a"]
  rotateArray(['a']),                    // ["a"]
  rotateArray([1, 'a', 3, 'c']),         // ["a", 3, "c", 1]
  rotateArray([{ a: 2 }, [1, 2], 3]),    // [[1, 2], 3, { a: 2 }]
  rotateArray([]),                       // []

  // return `undefined` if the argument is not an array
  rotateArray(),                         // undefined
  rotateArray(1),                        // undefined
);

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(
  rotateArray(array),                    // [2, 3, 4, 1]
  array,                                 // [1, 2, 3, 4]
);

//

/*
input: an array
output: a new array with the first element moved to the end of the array

- If input is `undefined` or not an array
  - Return `undefined`
- If input is an empty array:
  - Return an empty array
- Return a slice of input array from index `1` to end, with element at index
  `0` appended at end

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  return [...array.slice(1), array[0]];
}
