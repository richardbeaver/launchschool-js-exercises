// Rotation (Part 3)

// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place
// and rotate the final two digits to get 321579. The resulting number is
// called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the
// maximum rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

// Examples:
console.log(
  maxRotation(735291),          // 321579
  maxRotation(3),               // 3
  maxRotation(35),              // 53
  maxRotation(105),             // 15 -- the leading zero gets dropped
  maxRotation(8703529146),      // 7321609845
);

//

/*
input: an integer
output: maximum rotated number from input

- Get string conversion of input number
- Create variable to reassign to each successive rotated number
- For each number, `count`, in [string length, 1]:
  - Rotate the rightmost `count` digits of the rotated number
- Return resulting rotated number

*/

function maxRotation(number) {
  let numberDigits = String(number).length;

  for (let count = numberDigits; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }

  return number;
}

//

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let rotatingIdx = numberString.length - count;

  let rotatedString = numberString.slice(0, rotatingIdx)
    + numberString.slice(rotatingIdx + 1)
    + numberString.at(rotatingIdx);

  return Number(rotatedString);
}
