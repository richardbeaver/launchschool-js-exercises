// Triangles

// Write a program to determine whether a triangle is equilateral, isosceles,
// or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has exactly two sides of the same length.

// A scalene triangle has all sides of different lengths.

// Note: For a shape to be a triangle at all, all sides must be of length > 0,
// and the sum of the lengths of any two sides must be greater than the length
// of the third side.

//

/*

- valid triangle:
  - all side lengths greater than 0
  - sum of two shortest sides greater than length of longest side

- if all 3 sides equal:
  - equilateral
- if 2 sides are equal:
  - isosceles
- else:
  - scalene

- test cases show that we need a `Triangle` class
- 2 methods:
  - constructor - 3 arguments (length of each side)
    - If triangle to create is invalid:
      - throw error
  - kind
    - Returns string representing the type of Triangle

Data structure

input:
- numbers
output:
- string
rules:
- may be easier to store with side lengths as an array (as we'll always be
  working with all 3 side lengths together)

Algorithm

`constructor`
- assign `sides` property to an array of side lengths
- if input sides create an invalid triangle:
  - throw new exception

`validTriangle`
- if any side length value is <= 0
  - return false
- get length of longest side
- get length of shortest two
  - [(sum of all lengths) - longest length]
- return shortest two > longest side

`kind`
- if all sides are equal
  - return 'equilateral'
- if two sides are equal
  - return 'isosceles'
- return 'scalene'

*/

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];

    if (!this.isValid()) {
      throw new Error("Invalid triangle lengths");
    }
  }

  isValid() {
    if (this.sides.some((side) => side <= 0)) {
      return false;
    }
    let longest = Math.max(...this.sides);
    let shortestTwo = this.sides.reduce((sum, num) => sum + num, 0) - longest;
    return shortestTwo > longest;
  }

  kind() {
    let [ side1, side2, side3] = this.sides;

    if (side1 === side2 && side2 === side3) {
      return 'equilateral';
    }
    if (side1 === side2 || side1 === side3 || side2 === side3) {
      return 'isosceles';
    }
    return 'scalene';
  }
}

module.exports = Triangle;
