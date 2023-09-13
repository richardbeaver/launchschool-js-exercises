// Rotating Matrix

// As we saw in the previous exercises, a matrix can be represented by an
// array of arrays. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6

// is represented by the following array of arrays:
let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

// A 90-degree rotation of a matrix produces a new matrix in which each side
// of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree
// rotation of the matrix shown above is:

// 3  4  1
// 9  7  5
// 6  2  8

// A 90-degree rotation of a non-square matrix is similar. For example, given
// the following matrix:

// 3  4  1
// 9  7  5

// its 90-degree rotation is:

// 9  3
// 7  4
// 5  1

// Write a function that takes an arbitrary MxN matrix, rotates it clockwise
// by 90-degrees as described above, and returns the result as a new matrix.
// The function should not mutate the original matrix.

// Examples:
let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

//

/*
input: an MxN matrix as a 2D array
output: a new 2D array representing the input matrix rotated 90 degrees,
  without modifying the input

- Create an NxM matrix as a nested array
- Create index counter `resultRow`, initialized to `0`
- For each column, `inputColumn`, in [0, N):
  - Create index `resultColumn`, initialized to `0`
  - For each row, `inputRow`, in [M - 1, 0]:
    - Set the value in the result matrix at (`resultRow`, `resultColumn`) to
      the value in the input matrix at (`inputRow`, `inputColumn`)
    - Increment `resultColumn` by 1
  - Increment `resultRow` by 1
- Return the new matrix

*/

function rotate90(inputMatrix) {
  let inputRows = inputMatrix.length;
  let inputColumns = inputMatrix[0].length;

  let resultMatrix = Array(inputColumns).fill().map((_) => []);

  let resultRow = 0;

  for (let inputColumn = 0; inputColumn < inputColumns; inputColumn += 1) {
    let resultColumn = 0;

    for (let inputRow = inputRows - 1; inputRow >= 0; inputRow -= 1) {
      resultMatrix[resultRow][resultColumn] = inputMatrix[inputRow][inputColumn];
      resultColumn += 1;
    }

    resultRow += 1;
  }

  return resultMatrix;
}
