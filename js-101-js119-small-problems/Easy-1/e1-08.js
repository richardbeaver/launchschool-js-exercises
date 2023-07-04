// Leap Years (Part 1)

// In the modern era under the Gregorian Calendar, leap years occur in every
// year that is evenly divisible by 4, unless the year is also divisible by
// 100. If the year is evenly divisible by 100, then it is not a leap year,
// unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a
// function that takes any year greater than 0 as input and returns true if
// the year is a leap year, or false if it is not a leap year.

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
  isLeapYear(1700),      // false
  isLeapYear(1),         // false
  isLeapYear(100),       // false
  isLeapYear(400),       // true
);
//

/*
- Problem

inputs: any year greater than 0
outputs: a boolean for whether the given year is a leap year

Rules:
- input year must be greater than 0
- if not divisible by 4 - not a leap year
- if divisible by 4:
  - not divisible by 100: leap year
  - divisible by 100:
    - divisible by 400: leap year
    - not divisbile by 400: not a leap year

- Algorithm

1. If year is not greater than 0, return undefined
2. If year is not divisible by 4, return false
3. If year is not divisible by 100, return true
4. Return whether year is divisible by 400


1. If year is not greater than 0, return undefined
2. If year is divisble by 400, return true;
3. Return whether year is divisible by 4 and also not divisible by 100

*/

// function isLeapYear(year) {
//   if (year <= 0) return undefined;
//   if (year % 4 !== 0) return false;
//   if (year % 100 !== 0) return true;
//   return year % 400 === 0;
// }

// function isLeapYear(year) {
//   if (year <= 0) return undefined;

//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

function isLeapYear(year) {
  if (year <= 0) return undefined;

  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
