// Grade Book

// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

// Tested values are all between 0 and 100. There is no need to check for
// negative values or values greater than 100.

// Examples:
console.log(
  getGrade(95, 90, 93),    // "A"
  getGrade(50, 50, 95),    // "D"
);

//

/*
- Problem

inputs: 3 number grades
outputs: a string letter grade of the average of the 3 inputs

Rules:
- Need to take average and return associated letter grade

- Algorithm

1. Declare a variable `mean` and initialize it to (sum of 3 inputs / 3);
2. If `mean` is less than 60:
  1. Return "F"
3. Else if `mean` is less than 70:
  1. Return "D"
4. Else if `mean` is less than 80:
  1. Return "C"
3. Else if `mean` is less than 90:
  1. Return "B"
4. Else
  1. Return "A"

*/

function getGrade(grade1, grade2, grade3) {
  let mean = (grade1 + grade2 + grade3) / 3;

  if (mean < 60) return "F";
  if (mean < 70) return "D";
  if (mean < 80) return "C";
  if (mean < 90) return "B";
  return "A";
}
