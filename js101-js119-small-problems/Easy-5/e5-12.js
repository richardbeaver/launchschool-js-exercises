// After Midnight (Part 2)

// As seen in the previous exercise, the time of day can be represented as
// the number of minutes before or after midnight. If the number of minutes
// is positive, the time is after midnight. If the number of minutes is
// negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and
// return the number of minutes before and after midnight, respectively.
// Both functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.
// Disregard Daylight Savings and Standard Time and other irregularities.

// Examples:
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

//

/*
`afterMidnight`

input: time in 24hr format (hh:mm)
output: number of minutes after midnight

- Get hour and minute values from input string, each converted to numbers
- Get total number of minutes by (hour * 60) + minute values
- Return the remainder of (total number of minutes divided by minutes
  in a day (24 * 60))


`beforeMidnight`

input: time in 24hr format (hh:mm)
output: number of minutes before midnight

- Get value of minutes after midnight by calling `afterMidnight` function,
  passing input value
- Get number of minutes before midnight by (number of minutes in a day - number
  of minutes after midnight)
- Return the remainder of (minutes before midnight divided by minutes in a
  day (24 * 60)))

*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(timeString) {
  let [ hours, minutes ] = timeString.split(":").map((num) => Number(num));
  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;

  return totalMinutes % MINUTES_PER_DAY;
}

function beforeMidnight(timeString) {
  let minutesBeforeMidnight = MINUTES_PER_DAY - afterMidnight(timeString);
  if (minutesBeforeMidnight === MINUTES_PER_DAY) {
    minutesBeforeMidnight = 0;
  }
  return minutesBeforeMidnight;
}
