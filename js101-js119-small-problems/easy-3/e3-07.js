// Double Doubles

// A double number is an even-length number whose left-side digits are exactly
// the same as its right-side digits. For example, 44, 3333, 103103, and 7676
// are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument
// multiplied by two, unless the argument is a double number; otherwise,
// return the double number as-is.

// Examples:
console.log(
  twice(37),          // 74
  twice(44),          // 44
  twice(334433),      // 668866
  twice(444),         // 888
  twice(107),         // 214
  twice(103103),      // 103103
  twice(3333),        // 3333
  twice(7676),        // 7676
);

//

/*
- Problem

inputs: a number
outputs: twice the input number unless it is a double number, then returns
  the number as-is

Rules:
- A double number is one whose first half digits are repeated in order as
  second half digits
- Number must have an even number of digits to be a double number

- Algorithm

1. Declare a variable `numberStr` and initialize it to the string coercion
  of the given number
2. Declare a variable `startOfSecondHalf` and intialize it to the floor of the
  result of (length of `numberStr` / 2)
3. If substring of input string in indexes [0, startOfSecondHalf) is equal to
  substring of input string in indexes [startOfSecondHalf, length):
  1. Return given number
4. Else
  1. Return given number * 2

*/

function twice(number) {
  let numberStr = String(number);
  let startOfSecondHalf = Math.floor(numberStr.length / 2);

  if (numberStr.slice(0, startOfSecondHalf) === numberStr.slice(startOfSecondHalf)) {
    return number;
  } else {
    return number * 2;
  }
}
