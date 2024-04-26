// Perfect Number

// The Greek mathematician Nicomachus devised a classification scheme for
// natural numbers (1, 2, 3, ...), identifying each as belonging uniquely to
// the categories of abundant, perfect, or deficient based on a comparison
// between the number and the sum of its positive divisors (the numbers that
// can be evenly divided into the target number with no remainder, excluding
// the number itself). For instance, the positive divisors of 15 are 1, 3,
// and 5. This sum is known as the Aliquot sum.

// - Perfect numbers have an Aliquot sum that is equal to the original number.
// - Abundant numbers have an Aliquot sum that is greater than the original
//   number.
// - Deficient numbers have an Aliquot sum that is less than the original
//   number.

// Examples:

// 6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
// 28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and
// 1 + 2 + 4 + 7 + 14 = 28.
// 15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9
// which is less than 15.
// 24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and
// 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
// Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.

// Write a program that can tell whether a number is perfect, abundant, or
// deficient.

//

/*

abundant, perfect, deficient

comparison between number and sum of its positive divisors
  - divisors - can divide number with no remainder
  - excluding number itself

divisors of 15 = 1, 3, 5

sum is equal to number => perfect
sum > than number => abundanct
sum < than number => deficient

- will need to collect all divisors
  - could iterate from 1 up to half the number, collecting the ones that divide
    the number evenly
- then sum collection, and compare to original number

- test cases show that we need a `PerfectNumber` class and a static
  `classify` method
- throw new exception if input is not a natural number

Data structure
- input: number
- output: string
- maybe use an array for collecing and summing all divisors
- or another number to build sum as we iterate

Algorithm

static `classify`
- input: number

- if number is <= 0:
  - throw new exception
- get sum of all divisors
- if sum > number:
  - return 'abundant'
- if sum < number:
  - return 'deficient'
- return 'perfect'

static sumOfDivisors
- input: number

- create a sum with value of `0`
- for each value in [1, floor of (number / 2)]:
  - if number is divisible by value:
    - add value to sum
- return sum

*/

class PerfectNumber {
  /**
   * @param {number} number
   * @returns {"abundant" | "deficient" | "perfect"}
   */
  static classify(number) {
    if (number < 1) {
      throw new Error("Number must be greater than or equal to 1.");
    }

    const sum = PerfectNumber.sumOfFactors(number);

    if (sum > number) return "abundant";
    if (sum < number) return "deficient";
    return "perfect";
  }

  /**
   * @param {number} number
   * @returns {number}
   */
  static sumOfFactors(number) {
    let sum = 0;

    const halfNumber = Math.floor(number / 2);
    for (let value = 1; value <= halfNumber; value += 1) {
      if (number % value === 0) {
        sum += value;
      }
    }

    return sum;
  }
}

export default PerfectNumber;
