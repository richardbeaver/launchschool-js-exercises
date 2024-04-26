// Roman Numerals

// Write some code that converts modern decimal numbers into their Roman
// number equivalents.

// The Romans were a clever bunch. They conquered most of Europe and ruled it
// for hundreds of years. They invented concrete and straight roads and even
// bikinis. One thing they never discovered though was the number zero. This
// made writing and dating extensive histories of their exploits slightly
// more challenging, but the system of numbers they came up with is still in
// use today. For example the BBC uses Roman numerals to date their programmes.

// The Romans wrote numbers using letters - I, V, X, L, C, D, M. Notice that
// these letters have lots of straight lines and are hence easy to hack into
// stone tablets.

//  1  => I
// 10  => X
//  7  => VII

// There is no need to be able to convert numbers larger than about 3000.
// (The Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing each
// digit separately starting with the left most digit and skipping any digit
// with a value of zero.

// To see this in practice, consider the example of 1990. In Roman numerals,
// 1990 is MCMXC:

// 1000=M
// 900=CM
// 90=XC

// 2008 is written as MMVIII:

// 2000=MM
// 8=VIII

//

/*

- all values:
  - M: 1000
  - D: 500
  - C: 100
  - L: 50
  - X: 10
  - V: 5
  - I: 1

- total is sum of all character values in roman numeral string
- if a character of a lower value comes before one with a higher value, they
  represent one value that is the result of subtracting the smaller from the
  larger

- a digits power of 10:
  - (length of string conversion of number) - (index of digit) - 1
- 2000
  - 2 : 2 x 10^3

-   8 => VIII
-   9 => IX
-  90 => XC
- 900 => CM

0 => skip
1 => 1 character of associated power of 10
2 => two 1's
3 => three 1's
4 => associated 1 and next 5 character
5 => 5 character (next highest from one used for 1-3)
6 => 5 + 1
7 => 5 + two 1's
8 => 5 + three 1's
9 => character used for digit '1' and one used for 10 of current "1"'s

===========

- test cases show that we need a `RomanNumeral` class with a constructor
  and a `toRoman` method


Algorithm


constructor (number)
- save number as a property

1. Using digits and their power of ten:

`toRoman`
- Create a total roman numeral as an empty string
- For each character in the string conversion of input number:
  - The power of ten of the digit we're on is (length of string - index - 1)
  - Get roman numeral of the number represented by the digit and its power of 10
  - Append to the total roman numeral result
  - Increment the power of 10 by 1
- Return the total roman numeral

`getRomanNumeral`
- input: digit, powerOfTen
- Get grouping of the three roman numeral characters needed based on
  the power of ten
- Create roman numeral depending on the digit


2. Adding largest roman numeral whose value is smaller than the number value
   left to convert:

- Create a static property of a nested array holding roman numerals for each
  number that changes form, in reverse order
  - (using an array to guarantee ordering, rather than an object)

`toRoman`
- Create a total roman numeral as an empty string
- Iterate through the roman numerals and their values:
  - Add largest value numeral that is not greater than the number we're
    converting
  - After adding each numeral, decrease the number by the value of the numeral
    we just added to the resulting string
  - Repeat until current numeral is larger than number value left to convert
- Return the total roman numeral

*/

// ==================================================================
// ==================================================================

/* eslint-disable-next-line */
const utils = require("../../../utils.js");

// 1. Using digits and their power of ten:

class RomanNumeral {
  /**
   * @param {number} number
   */
  constructor(number) {
    this.number = number;
  }

  /**
   * @returns {string}
   */
  toRoman() {
    let totalRomanNumeral = "";
    const numberString = String(this.number);

    for (let idx = 0; idx < numberString.length; idx += 1) {
      const powerOfTen = numberString.length - idx - 1;

      const digit = Number(numberString[idx]);
      if (digit === 0) continue;

      const currentNumeral = this.getRomanNumeral(digit, powerOfTen);
      totalRomanNumeral += currentNumeral;
    }

    return totalRomanNumeral;
  }

  //

  // Using objects that contain the Roman Numeral characters we'd need:

  /**
   * @param {number} digit
   * @param {number} powerOfTen
   * @returns {string}
   */
  getRomanNumeral(digit, powerOfTen) {
    if (powerOfTen < 0) {
      throw new Error("Power of ten must be non-negative");
    }
    if (powerOfTen > 3) {
      throw new Error("Does not suppport numbers greater than 4 digits");
    }

    /**
     * @typedef {{one: string, five: string, ten: string}} PlaceValues
     */

    const onesPlace = { one: "I", five: "V", ten: "X" };
    const tensPlace = { one: "X", five: "L", ten: "C" };
    const hundredsPlace = { one: "C", five: "D", ten: "M" };
    const thousandsPlace = {
      one: "M",
      five: "M".repeat(5),
      ten: "M".repeat(10),
    };

    /**
     * @type {[PlaceValues, PlaceValues, PlaceValues, PlaceValues]}
     */
    const places = [onesPlace, tensPlace, hundredsPlace, thousandsPlace];

    const numerals = utils.assertDefined(
      places[powerOfTen],
      "`powerOfTen` can only be in [0, 3]; checked at start of function"
    );

    const { one, five, ten } = numerals;

    if (digit >= 1 && digit <= 3) return one.repeat(digit);
    if (digit === 4) return one + five;
    if (digit >= 5 && digit <= 8) return five + one.repeat(digit - 5);
    if (digit === 9) return one + ten;
    return "";
  }

  //

  // Or, using an array of all Roman Numeral characters and indexes to reference
  // the characters we need:

  /**
   * @param {number} digit
   * @param {number} powerOfTen
   * @returns {string}
   */
  getRomanNumeral_2(digit, powerOfTen) {
    if (powerOfTen < 0) {
      throw new Error("Power of ten must be non-negative");
    }
    if (powerOfTen > 3) {
      throw new Error("Does not suppport numbers greater than 4 digits");
    }

    /**
     * @type {[string, string, string, string, string, string, string]}
     */
    const romanChars = ["I", "V", "X", "L", "C", "D", "M"];

    const onesIdx = powerOfTen * 2;
    const one = utils.assertDefined(
      romanChars[onesIdx],
      "`onesIdx` can only be in [0, 6]; `powerOfTen` checked at start of function"
    );
    const five = romanChars[onesIdx + 1] ?? "M".repeat(5);
    const ten = romanChars[onesIdx + 2] ?? "M".repeat(10);

    if (digit >= 1 && digit <= 3) return one.repeat(digit);
    if (digit === 4) return one + five;
    if (digit >= 5 && digit <= 8) return five + one.repeat(digit - 5);
    if (digit === 9) return one + ten;
    return "";
  }
}

// ==================================================================
// ==================================================================

// 2. Adding largest roman numeral whose value is smaller than the number
//    value left to convert:

class RomanNumeralArray {
  /**
   * @type {readonly [number, string][]}
   */
  static ROMAN_NUMERALS = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  /**
   * @param {number} number
   */
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let totalRomanNumeral = "";
    let numberLeft = this.number;

    for (const [value, numeral] of RomanNumeralArray.ROMAN_NUMERALS) {
      while (value <= numberLeft) {
        totalRomanNumeral += numeral;
        numberLeft -= value;
      }
    }

    return totalRomanNumeral;
  }
}

module.exports = RomanNumeral;
