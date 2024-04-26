// Sum of Multiples

// Write a program that, given a natural number and a set of one or more other
// numbers, can find the sum of all the multiples of the numbers in the set that
// are less than the first number. If the set of numbers is not given, use a
// default set of 3 and 5.

// For instance, if we list all the natural numbers up to, but not including,
// 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18.
// The sum of these multiples is 78.

//

class SumOfMultiples {
  /**
   * @param  {...number} multiples
   */
  constructor(...multiples) {
    if (multiples.length == 0) {
      multiples = [3, 5];
    }
    this.multiples = multiples;
  }

  /**
   * @param {number} upTo
   * @returns {number}
   */
  static to(upTo) {
    return new SumOfMultiples().to(upTo);
  }

  //

  // 1. Check every potential multiple for every value
  //    - Have to calculate modulo every time

  /**
   * @param {number} upTo
   * @returns {number}
   */
  to_CheckEvery(upTo) {
    let sum = 0;

    for (let i = 1; i < upTo; i += 1) {
      if (this.multiples.some((multiple) => i % multiple == 0)) {
        sum += i;
      }
    }

    return sum;
  }

  // 2. Collect set of all numbers that are a multiple of some number in our
  //    set of multiples. Can do this by, for each potential multiple, starting
  //    a loop at the potential multiple and incrementing by its value.
  //    Double counts are avoided by using a set.

  /**
   * @param {number} upTo
   * @returns {number}
   */
  to(upTo) {
    /**
     * @type {Set<number>}
     */
    const values = new Set();

    for (const multiple of this.multiples) {
      for (let i = multiple; i < upTo; i += multiple) {
        values.add(i);
      }
    }

    let sum = 0;
    for (const value of values.values()) {
      sum += value;
    }
    return sum;
  }
}

export default SumOfMultiples;
