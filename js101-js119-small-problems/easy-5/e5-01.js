// Cute Angles

// Write a function that takes a floating point number representing an
// angle between 0 and 360 degrees and returns a string representing that
// angle in degrees, minutes, and seconds. You should use a degree symbol (˚)
// to represent degrees, a single quote (') to represent minutes, and a double
// quote (") to represent seconds. There are 60 minutes in a degree, and 60
// seconds in a minute.

// Note: your results may differ slightly depending on how you round values,
// but should generally be within a second or two of the results shown.

// Examples:
console.log(
  dms(30),           // 30°00'00"
  dms(76.73),        // 76°43'48"
  dms(254.6),        // 254°35'59"
  dms(93.034773),    // 93°02'05"
  dms(0),            // 0°00'00"
  dms(360),          // 360°00'00" or 0°00'00"
);

//

/*
input: angle in degrees
output: angle in degrees, minutes, and seconds

- Get whole number value of input
- Subtract whole number value from input to get decimal value of input
- Multiply decimal by 60 to get number of minutes
- Repeat process for number of minutes to get seconds
  - Can round seconds to 2 digits
- Return string concatenation of measure and symbol for degrees, minutes, and
  seconds

*/

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(degreesFloat) {
  degreesFloat %= 360;

  let degreesInt = Math.floor(degreesFloat);

  let minutes = (degreesFloat - degreesInt) * MINUTES_PER_DEGREE;
  let minutesInt = Math.floor(minutes);
  let minutesDecimalValue = minutes - minutesInt;

  let seconds = minutesDecimalValue * SECONDS_PER_MINUTE;
  let secondsInt = Math.floor(seconds);

  let minutesString = String(minutesInt).padStart(2, '0');
  let secondsString = String(secondsInt).padStart(2, '0');

  return `${degreesInt}${DEGREE}${minutesString}'${secondsString}"`;
}
