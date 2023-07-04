// Seeing Stars

// Write a function that displays an 8-pointed star in an NxN grid, where N
// is an odd integer that is supplied as an argument to the function. The
// smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

// Examples:
star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

//

/*
input: odd integer, `N`, that is >= 7, denoting size of NxN grid
output: no return value; prints an 8-point star in NxN grid to console

- Middle row has `N` stars, no spaces
- Every other row has 3 stars

- Index of middle row is floor of (`N` / 2)
- Spaces between the stars = rows away from middle - 1
- Pattern of spaces/stars in other rows:
  - Stars + spaces between = 3 + [2 * (rows from middle - 1)]
  - Beginning spaces = [N - (stars + between spaces)] / 2

*/

function star(n) {
  const STAR = "*";
  let middleRowIdx = Math.floor(n / 2);

  for (let row = 0; row < n; row += 1) {
    if (row === middleRowIdx) {
      console.log(STAR.repeat(n));
      continue;
    }

    let rowsFromMiddle = Math.abs(row - middleRowIdx);
    let spacesBetweenTwoStars = rowsFromMiddle - 1;

    let middleCharacters = 3 + (2 * spacesBetweenTwoStars);
    let beginningSpaces = (n - middleCharacters) / 2;

    let output =
      spaces(beginningSpaces)
      + STAR
      + spaces(spacesBetweenTwoStars)
      + STAR
      + spaces(spacesBetweenTwoStars)
      + STAR;

    console.log(output);
  }
}

function spaces(numberSpaces) {
  return " ".repeat(numberSpaces);
}

/* eslint id-length:"off", max-lines-per-function:"off" */
