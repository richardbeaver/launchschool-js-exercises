// Leap Years (Part 2)

// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a
// leap year. Prior to 1752, they used the Julian Calendar. Under the Julian
// Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise
// to determine leap years both before and after 1752.

// Examples:
console.log(
  isLeapYear(2016),      // true
  isLeapYear(2015),      // false
  isLeapYear(2100),      // false
  isLeapYear(2400),      // true
  isLeapYear(240000),    // true
  isLeapYear(240001),    // false
  isLeapYear(2000),      // true
  isLeapYear(1900),      // false
  isLeapYear(1752),      // true
  isLeapYear(1700),      // true
  isLeapYear(1),         // false
  isLeapYear(100),       // true
  isLeapYear(400),       // true
);

//

/*
- Problem

inputs: 
outputs:

Rules:
- Logic follows depending on whether year is before 1752 or not
- If it is, any year divisible by 4 is a leap year
- If not, then follow logic from last exercise

- Algorithm

1. If year is not greater than 0, return undefined
2. If year is less than 1752
  1. Return whether year is divisible by 4
3. Else
  1. If year is divisble by 400, return true;
  2. Return whether year is divisible by 4 and also not divisible by 100

*/

function isLeapYear(year) {
  if (year <= 0) return undefined;

  if (year < 1752) return year % 4 === 0;

  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
