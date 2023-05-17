// Right Triangles

// Write a function that takes a positive integer, n, as an argument and
// logs a right triangle whose sides each have n stars. The hypotenuse of
// the triangle (the diagonal side in the images below) should have one end
// at the lower-left of the triangle, and the other end at the upper-right.

// Examples:
triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

//

/*
- Problem

inputs: length of each side as a postive integer
outputs: none; logs triangle with given side length to console

Rules:
- Given sideLength will be height of printed output and width of bottom level
  of the triangle
- Each level of triangle is one character wider than the one above it

- Algorithm

Recursive
1. Define an accumulator function `triangleHelp` to track which level currently
  on; takes 2 inputs: `level`, `sideLength`:
  1. If `level` is equal to `sideLength`:
    1. Print '*' x (`sideLength`) times
    2. Return
    
  2. Print (`sideLength` - `level`) spaces, then '*' x (`level`) times
  3. Call `triangleHelp` function with (`level` + 1, `sideLength`)
2. Call `triangleHelp` with arguments (1, input side length)


Iterative
1. For each integer, `level`, in [1, input side length]:
  1. Print (input side length - `level`) spaces, then '*' x (`level`) times

*/

function triangleRecursive(sideLength) {
  function triangleHelp(level, sideLength) {
    if (level === sideLength) {
      console.log('*'.repeat(sideLength));
      return;
    }
  
    console.log(`${' '.repeat(sideLength - level)}${'*'.repeat(level)}`);
    triangleHelp(level + 1, sideLength);
  }

  triangleHelp(1, sideLength);
}

function triangle(sideLength) {
  for (let level = 1; level <= sideLength; level += 1) {
    console.log(`${' '.repeat(sideLength - level)}${'*'.repeat(level)}`);
  }
}
