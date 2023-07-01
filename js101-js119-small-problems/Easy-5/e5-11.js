// After Midnight (Part 1)

// The time of day can be represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is after midnight.
// If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and
// returns the time of day in 24 hour format (hh:mm). Your function should
// work with any integer input.

// You may not use javascript's Date class methods.
// Disregard Daylight Savings and Standard Time and other irregularities.

// Examples:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

//

/*
input: number of minutes before or after midnight
output: time in 24 hour format (hh:mm)


- Create variable `minutesInDay` (value: 60 * 24)
- Create variable `workingMinutes` (value: remainder of (input divided
  by `minutesInDay`))
- If sign of input is negative:
  - Reassign `workingMinutes` to `minutesInDay` + `workingMinutes`
- Get number of hours by taking floor of (dividing `workingMinutes` by 60)
- Get number of minutes by taking remainder of (dividing `workingMinutes` by 60)
- Return concatenation of hours (as 2 digits), ":", minutes (as 2 digits)

*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function timeOfDay(deltaMinutes) {
  deltaMinutes %= MINUTES_PER_DAY;

  if (deltaMinutes < 0) {
    deltaMinutes += MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function leadingZero(number) {
  return String(number).padStart(2, '0');
}
