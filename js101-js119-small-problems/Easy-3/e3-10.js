// What Century is That?

// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and
// ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

// Examples:
console.log(
  century(2000),        // "20th"
  century(2001),        // "21st"
  century(1965),        // "20th"
  century(256),         // "3rd"
  century(5),           // "1st"
  century(10103),       // "102nd"
  century(1052),        // "11th"
  century(1127),        // "12th"
  century(11201),       // "113th"
);

//

/*
- Problem

inputs: a year
outputs: string of the century the given year is in

Rules: 
- Century ends with 'st', 'nd', 'rd', or 'th'
- The only situation where these suffixes do not directly correlate to only the
  last digit is when dealing with numbers that end with numbers 11, 12, and 13
- Suffix for these is 'th'
  - (second to last digit is 1)
- In all other cases, 'st', 'nd', 'rd', and 'th' directly correlate with
  the last digit being '1', '2', '3', and any other digit, respectively


- Algorithm

1. Declare a variable `century` and initialize it to the string coercion
  of (ceiling of (year / 100))
2. Declare a variable `suffix`
3. If length of `century` is greater than 1 and the second to last digit is '1':
  1. Assign `suffix` to 'th'
4. Else if the last character in `century` is '1':
  1. Assign `suffix` to 'st'
5. Else if last character in `century` is '2':
  1. Assign `suffix` to 'nd'
6. Else if last character in `century` is '3':
  1. Assign `suffix` to 'rd'
7. Else
  1. Assign `suffix` to 'th'
8. Return `century` concatenated with `suffix`

*/

function century(year) {
  let century = String(Math.ceil(year / 100));

  let suffix;
  if (century.length > 1 && century.at(-2) === '1') {
    suffix = 'th';
  } else if (century.endsWith('1')) {
    suffix = 'st';
  } else if (century.endsWith('2')) {
    suffix = 'nd';
  } else if (century.endsWith('3')) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return century + suffix;
}

//

// Given answer

function centuryGivenAnswer(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch(lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}
