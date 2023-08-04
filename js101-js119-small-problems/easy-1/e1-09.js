// Leap Years (Part 2)

// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a
// leap year. Prior to 1752, they used the Julian Calendar. Under the Julian
// Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise
// to determine leap years both before and after 1752.

// Examples:
console.log(
  isLeapYear(2016)   === true,
  isLeapYear(2016)   === true,
  isLeapYear(2015)   === false,
  isLeapYear(2100)   === false,
  isLeapYear(2400)   === true,
  isLeapYear(240000) === true,
  isLeapYear(240001) === false,
  isLeapYear(2000)   === true,
  isLeapYear(1900)   === false,
  isLeapYear(1752)   === true,
  isLeapYear(1700)   === true,
  isLeapYear(1)      === false,
  isLeapYear(100)    === true,
  isLeapYear(400)    === true,
);

//

/*
- Problem

input: year as a number greater than 0
output: boolean for whether input year is a leap year

Rules:
- Logic follows depending on whether year is before 1752 or not
- If it is, any year divisible by 4 is a leap year
- If not, then follow logic from last exercise

- Algorithm

- If year is less than 1752
  - Return whether year is divisible by 4
- Else
  - If year is divisble by 400, return true,;
  - Return whether year is divisible by 4 and also not divisible by 100

*/

function isLeapYear(year) {
  if (year < 1752) return year % 4 === 0;
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

//

function isLeapYear(year) {
  if (year < 1752) return year % 4 === 0;

  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
