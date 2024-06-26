// Robot Name

// Write a program that manages robot factory settings.

// When robots come off the factory floor, they have no name. The first time
// you boot them up, a random name is generated, such as RX837 or BC811.

// Every once in a while, we need to reset a robot to its factory settings,
// which means that their name gets wiped. The next time you ask, it will
// respond with a new random name.

// The names must be random; they should not follow a predictable sequence.
// Random names means there is a risk of collisions. Your solution should not
// allow the use of the same name twice.

//

/*

Need totally random names
- also need to track all produced names and redo if we get a duplicate
  - use a static array/object to hold all names in use

- test cases show we need a `Robot` class and `name` and  reset` instance
  methods
- name must be 2 capital letters followed by 3 digits
- Using `Math.seedrandom` to seed use of `Math.random` in `Robot` class

Data structure
- input: none
- output: robot name as a string following test suite NAME_REGEXP

Algorithm

- create static empty object to hold all names in use

constructor
- set a new name

`name`
- return property of this `Robot` of its name

`reset`
- remove robot's current name from object of names in use
- set a new name

`setNewName`
- Produce 2 random capital letters using a random index into a string of all
  capital letters
- Produce 3 random digits using a random number in [0, 9]
- Combine as one string
- If contained in the object of names in use, repeat
- Add to object of names in use
- Save as property of new `Robot` instance

*/

import { assertDefined } from "../../../utils";

class Robot {
  /**
   * @type {Set<string>}
   */
  static usedNames = new Set();

  constructor() {
    this.robotName = "";
    this.setNewName();
  }

  /**
   * @returns {string}
   */
  name() {
    return this.robotName;
  }

  /**
   *
   */
  reset() {
    Robot.usedNames.delete(this.name());
    this.setNewName();
  }

  /**
   * @returns {void}
   */
  setNewName() {
    const name = this.generateName();
    Robot.usedNames.add(name);
    this.robotName = name;
  }

  generateName() {
    let name;
    do {
      const letters = this.twoCapitalLetters();
      const digits = this.threeDigits();
      name = letters + digits;
    } while (Robot.usedNames.has(name));
    return name;
  }

  /**
   * @returns {string}
   */
  twoCapitalLetters() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const idx1 = this.randomNumInclusive(0, letters.length - 1);
    const idx2 = this.randomNumInclusive(0, letters.length - 1);
    return assertDefined(letters[idx1]) + assertDefined(letters[idx2]);
  }

  /**
   * @returns {string}
   */
  threeDigits() {
    let result = "";
    for (let count = 1; count <= 3; count += 1) {
      result += this.randomNumInclusive(0, 9).toString();
    }
    return result;
  }

  /**
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  randomNumInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Robot;
