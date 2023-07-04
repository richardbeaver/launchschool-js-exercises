// Rotation (Part 2)

// Write a function that rotates the last count digits of a number. To perform
// the rotation, move the first of the digits that you want to rotate to the
// end and shift the remaining digits to the left.

// Examples:
console.log(
  rotateRightmostDigits(735291, 1),      // 735291
  rotateRightmostDigits(735291, 2),      // 735219
  rotateRightmostDigits(735291, 3),      // 735912
  rotateRightmostDigits(735291, 4),      // 732915
  rotateRightmostDigits(735291, 5),      // 752913
  rotateRightmostDigits(735291, 6),      // 352917
);

//

/*
input: a number, and a count of digits at the end of the number to rotate
  (moving the count-th digit from the end of the number, to the end of it)
output: resulting number after shifting appropriate digit

- Convert number to string
- Move digit at index (string length - count) to end of string
- Return number conversion of resulting string

*/

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let rotatingIdx = numberString.length - count;

  let rotatedString = numberString.slice(0, rotatingIdx)
    + numberString.slice(rotatingIdx + 1)
    + numberString.at(rotatingIdx);

  return Number(rotatedString);
}
