// Diamonds

// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// Examples:
diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

//

/*
input: an odd integer
output: no return value; prints a four-pointed diamond in an nxn grid to
  the console

- Middle row (0-indexed) is floor of (input number / 2)
- This row contains `n` stars
- Top and bottom rows will always have 1 star


Create number sequence for number of stars in each row:
- Create an array to store the number of stars to draw in each row
- Get the index of the middle row by taking the floor of (input number / 2)
- For each index, `i`, in [0, `n`):
  - Append the number of stars for this row to the array
    - Number of stars = `n` - [2 * (absolute value of (middle row index - `i`))]

Print out each line of stars:
- For each value, `stars`, in the array of stars:
  - Print [(`n` - `stars`) / 2] spaces
  - Print `stars` asterisks

*/

function diamond(n) {
  let numbersOfStars = numberSequence(n);

  numbersOfStars.forEach((stars) => {
    let displayString = " ".repeat((n - stars) / 2) + "*".repeat(stars);
    console.log(displayString);
  });
}

function numberSequence(n) {
  let numbersOfStars = [];
  let middleRow = Math.floor(n / 2);

  for (let idx = 0; idx < n; idx += 1) {
    let rowsFromMiddle = Math.abs(middleRow - idx);
    numbersOfStars[idx] = n - (2 * rowsFromMiddle);
  }

  return numbersOfStars;
}

// ========

/*

Using given solution algorithm for getting the number sequence:

- Initialize increment to 2
- Start with the first number, 1, incrementing the number by increment with
  each step
- When the number is equal to n, flip the increment to -2
- Stop when we get to a negative number

*/

function numberSequenceSolution(n) {
  let numbersOfStars = [];
  let stars = 1;

  let increment = 2;
  while (stars > 0) {
    numbersOfStars.push(stars);
    if (stars >= n) {
      increment = -2;
    }
    stars += increment;
  }

  return numbersOfStars;
}

/* eslint id-length:, no-unused-vars: */
