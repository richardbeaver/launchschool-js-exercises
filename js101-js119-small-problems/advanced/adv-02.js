// Transpose 3x3 Matrix

// A 3x3 matrix can be represented by an array of arrays: an outer array
// containing three subarrays that each contain three elements. For example,
// the 3x3 matrix shown below:
// 1  5  8
// 4  7  2
// 3  9  6

// is represented by the following array of arrays:
// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// The transpose of a 3x3 matrix is the matrix that results from exchanging the
// rows and columns of the original matrix. For example, the transposition of
// the matrix shown above is:
// 1  4  3
// 5  7  9
// 8  2  6

// Write a function that takes an array of arrays that represents a 3x3 matrix
// and returns the transpose of the matrix. You should implement the function
// on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged.

// Examples:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

//

/*
input: 2D array representing a 3x3 matrix
output: a new 2D array representing the transpose of the input matrix, without
  modifying the input

- Create a 3x3 matrix as a nested array, filled with 0's as placeholders
- For each row, `i`, in [0, 3):
  - For each column, `j`, in [0, 3):
    - Assign the value at (i, j) of the new nested array the value at (j, i)
      of the input nested array
- Return the new array

*/

function transpose(inputMatrix) {
  let resultMatrix =
    Array(3).fill(undefined).map((_) => Array(3).fill(undefined));

  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      resultMatrix[row][col] = inputMatrix[col][row];
    }
  }

  return resultMatrix;
}

/* eslint id-length:"off" */
