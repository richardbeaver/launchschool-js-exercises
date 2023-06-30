// Triangle Sides

// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides
// must be greater than the length of the longest side, and every side must
// have a length greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle
// as arguments and returns one of the following four strings representing
// the triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

// Examples:
console.log(
  triangle(3, 3, 3),        // "equilateral"
  triangle(3, 3, 1.5),      // "isosceles"
  triangle(3, 4, 5),        // "scalene"
  triangle(0, 3, 3),        // "invalid"
  triangle(3, 1, 1),        // "invalid"
);

//

/*
input: 3 numbers representing lengths of sides of a triangle
output: a string for type of triangle or that it is invalid

- Determine if triangle is valid:
  - All sides must be > 0
  - Sum of 2 shortest sides must be > longest side
- If triangle is not valid:
  - Return 'invalid'
- If all 3 sides are equal:
  - Return 'equilateral'
- If 2 sides are equal:
  - Return 'isosceles'
- Else:
  - Return 'scalene'

*/


// Using explicit `side1`, `side2`, `side3` parameters:

function triangle(side1, side2, side3) {
  if (!triangleValid(side1, side2, side3)) return 'invalid';

  if (side1 === side2 && side1 === side3) return 'equilateral';

  if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    return 'isosceles';
  }

  return 'scalene';
}

function triangleValid(side1, side2, side3) {
  let shortest = Math.min(side1, side2, side3);
  let longest = Math.max(side1, side2, side3);
  let middle = (side1 + side2 + side3) - shortest - longest;

  return shortest > 0 && shortest + middle > longest;
}

// ==================

// Using rest parameters and array methods:

function triangleRest(...sides) {
  if (!triangleValidRest(...sides)) return 'invalid';

  if (sides.every((side) => side === sides[0])) return 'equilateral';

  if (hasDuplicates(...sides)) return 'isosceles';

  return 'scalene';
}

function triangleValidRest(...sides) {
  let shortest = Math.min(...sides);
  let longest = Math.max(...sides);

  let perimeter = sides.reduce((sum, side) => sum + side, 0);
  let middle = perimeter - shortest - longest;

  return shortest > 0 && shortest + middle > longest;
}

function hasDuplicates(...nums) {
  return nums.some((num, idx) => nums.indexOf(num) !== idx);
}

/* eslint no-unused-vars:"off" */
