// Transpose MxN Matrix

// In the previous exercise, you wrote a function that transposed a 3x3 matrix
// represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices.
// Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works
// with any MxN matrix with at least one row and one column.

// Examples:
const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(
  transpose([[1, 2, 3, 4]]),            // [[1], [2], [3], [4]]
  transpose([[1], [2], [3], [4]]),      // [[1, 2, 3, 4]]
  transpose([[1]]),                     // [[1]]

  transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]),
  // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
);

//

/*
input: an MxN matrix as a 2D array with at least 1 row and 1 column
output: a new 2D array representing the transpose of the input matrix, without
  modifying the input

- Create an NxM matrix as a nested array
- For each row, `i`, in [0, M):
  - For each column, `j`, in [0, N):
    - Assign the value at (i, j) of the new nested array the value at (j, i)
      of the input nested array
- Return the new matrix

*/

function transpose(inputMatrix) {
  let inputRows = inputMatrix.length;
  let inputColumns = inputMatrix[0].length;

  // =====

  // Ways to initialize a new 2d array:

  // Filled with empty items (can't iterate through sub-arrays):

  // 1.
  // let resultMatrix = [...Array(inputColumns)].map((_) => Array(inputRows));

  // Filled with `undefined` values:

  // 2.
  // Second `fill` can be removed and sub-arrays would contain empty items
  // let resultMatrix =
  //   Array(inputColumns).fill().map((_) => Array(inputRows).fill());

  // 3.
  // let resultMatrix =
  //   Array.from(Array(inputColumns)).map((_) => Array.from(Array(inputRows)));

  // 4.
  // let resultMatrix =
  //   Array.from({length: inputColumns}, (_) => Array.from({length: inputRows}));

  // Not filled (nothing in sub-arrays to iterate through):
  // Don't need to specify sizing (index values are just object properties):

  // 5.
  // let resultMatrix = Array.from({length: inputColumns}, (_) => []);

  // 6.
  let resultMatrix = Array(inputColumns).fill().map((_) => []);

  // console.log({resultMatrix})
  // resultMatrix.forEach((arr, idx) => {
  //   arr.forEach((arr) => console.log(`Row ${idx}:`, arr))
  // });

  // =====

  for (let row = 0; row < inputColumns; row += 1) {
    for (let col = 0; col < inputRows; col += 1) {
      resultMatrix[row][col] = inputMatrix[col][row];
    }
  }

  return resultMatrix;
}
