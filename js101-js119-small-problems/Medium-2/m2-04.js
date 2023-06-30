// Unlucky Days

// Some people believe that Fridays that fall on the 13th day of the month
// are unlucky days. Write a function that takes a year as an argument and
// returns the number of Friday the 13ths in that year. You may assume that
// the year is greater than 1752, which is when the United Kingdom adopted
// the modern Gregorian Calendar. You may also assume that the same calendar
// will remain in use for the foreseeable future.

// Examples:
console.log(
  fridayThe13ths(1986),      // 1
  fridayThe13ths(2015),      // 3
  fridayThe13ths(2017),      // 2
);

//

/*
input: year as a number greater than 1752
output: number of Friday the 13ths in that year

- Create a `count` variable initialized to 0
- Create new date of January 13th of input year
- If that date falls on a Friday: (with JS' Date class, Friday is 5th day)
  - Increment `count` by 1
- Repeat for each month of the year
- Return `count`

*/

function fridayThe13ths(year) {
  const FRIDAY = 5;
  let count = 0;

  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    let dayOfWeek = date.getDay();

    if (dayOfWeek === FRIDAY) {
      count += 1;
    }
  }

  return count;
}
