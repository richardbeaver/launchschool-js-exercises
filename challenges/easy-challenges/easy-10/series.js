// Series

// Write a program that will take a string of digits and return all the possible
// consecutive number series of a specified length in that string.

// For example, the string "01234" has the following 3-digit series:

// 012
// 123
// 234

// Likewise, here are the 4-digit series:

// 0123
// 1234

// Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.

//

class Series {
  /**
   * @param {string} digits
   */
  constructor(digits) {
    this.digits = digits;
  }

  /**
   * @param {number} sliceLength
   * @returns {number[][]}
   */
  slices(sliceLength) {
    if (sliceLength > this.digits.length) {
      throw new Error("Slice length cannot be longer than length of digits");
    }

    const numbers = [...this.digits].map((digit) => parseInt(digit));
    const slices = [];

    for (let idx = 0; idx <= numbers.length - sliceLength; idx += 1) {
      const slice = numbers.slice(idx, idx + sliceLength);
      slices.push(slice);
    }

    return slices;
  }
}

export default Series;
