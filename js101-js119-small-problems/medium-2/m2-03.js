// Tri-Angles

// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments
// are in degrees.

// Examples:
console.log(
  triangle(60, 70, 50),       // "acute"
  triangle(30, 90, 60),       // "right"
  triangle(120, 50, 10),      // "obtuse"
  triangle(0, 90, 90),        // "invalid"
  triangle(50, 50, 50),       // "invalid"
);

//

/*
input: 3 integers representing degrees of angles of a triangle
output: a string for classification of triangle or that it is invalid

- Determine if triangle is valid:
  - All angles must be > 0
  - Sum of all angles must equal 180
- If triangle is not valid:
  - Return 'invalid'
- If any angle is equal to 90:
  - Return 'right'
- If all 3 angles are less than 90:
  - Return 'acute'
- Else:
  - Return 'obtuse'

*/

// Using explicit `deg1`, `deg2`, `deg3` parameters:

function triangle(deg1, deg2, deg3) {
  if (!triangleValid(deg1, deg2, deg3)) return 'invalid';

  if (deg1 === 90 || deg2 === 90 || deg3 === 90) return 'right';

  if (deg1 < 90 && deg2 < 90 && deg3 < 90) return 'acute';

  return 'obtuse';
}

function triangleValid(deg1, deg2, deg3) {
  if (deg1 <= 0 || deg2 <= 0 || deg3 <= 0) return false;
  return deg1 + deg2 + deg3 === 180;
}

// ==================

// Using rest parameters and array methods:

function triangleRest(...angles) {
  if (!triangleValidRest(...angles)) return 'invalid';

  if (angles.some(testRightTriangle)) return 'right';

  if (angles.every(testAcuteTriangle)) return 'acute';

  return 'obtuse';
}

function triangleValidRest(...angles) {
  let sumAngles = angles.reduce((sum, angle) => sum + angle, 0);

  return sumAngles === 180 && angles.every((angle) => angle > 0);
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

/* eslint no-unused-vars:"off" */
