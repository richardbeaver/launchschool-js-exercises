// Clock

// Create a clock that is independent of date.

// You should be able to add minutes to and subtract minutes from the time
// represented by a given Clock object. Note that you should not mutate
// Clock objects when adding and subtracting minutes -- create a new Clock
// object.

// Two clock objects that represent the same time should be equal to each other.

// You may not use any built-in date or time functionality; just use arithmetic
// operations.

//

/*

create a 24-hour clock that minutes can be added and subtracted from
- every time change produces a new clock object

- test cases show we need a `Clock` class
  - static `at` method that returns a new clock instance
  - instance `add` and `subtract` methods that return new `Clock` instances
  - overriding `toString` instance method
  - `isEqual` method to compare two clocks objects

- clocks with same time are "object equal"
  - same properties

- use `hour` and `minute` instance properties

- could potentially use helper methods to convert between hour and minute
  properties and the number of minutes after midnight that they represent
  - Then use these to add and subtract minutes from

Data structure
- input: number of hour, minute is optional
- output: Clock object, or a string of the time for the `toString` method
- Use `hour` and `minute` properties with number values
  - will need to add/subtract minutes

Algorithm

constructor
- set given `hour` and `minte` properties

static `at`
input: hour, minute (default 0)
- return a new clock instance with given hour and minute properties

`toString`
- convert hour and minute to strings and pad with a `'0'` if needed
- return string to match format in test cases

`isEqual`
input: other clock object
- return whether this clock's minute and hour are equal to other clock's

=========

1. Working with hour and minute values themselves

`add`
input: minutes to add
- reassign input minutes to remainder of input minutes / minutes in a day
- Get floor of input minutes divided by 60
- Get remainder of input minutes divided by 60
- Add remainder to number of minutes
- if minutes is over 60:
  - subtract 60 minutes
  - increment hour
- add floor of division to hour
- set hour to remainder of hour / 24
- return new clock instance with resulting minute and hour

`subtract`
input: minutes to subtract
- reassign input minutes to remainder of (input minutes) / (minutes in a day)
- Get (minutes per day) - (input minutes)
- return new clock by adding resulting minutes to current clock time

=========

2. Using helper methods to convert between hour and minute properties and
   the minutes after midnight that they represent

`add`
input: minutes
- get minutes since midnight of clock's current time
- add input minutes
- while resulting minutes is greater than minutes in a day:
  - subtract number of minutes in a day
- return a new clock from getting the time of the resulting minutes

`subtract`
input: minutes
- get minutes since midnight of clock's current time
- subtract input minutes
- while resulting minutes is less than 0:
  - add number of minutes in a day
- return a new clock from getting the time of the resulting minutes

`_getMinutesSinceMidnight`
input: accesses hour and minute properties
- get (hour * 60) + minute
- return remainder of result divided by minutes per day

`_getTime`
input: minutesSinceMidnight
- reassign input minutes to remainder of (input minutes) / (minutes in a day)
- hour = floor of (minutesSinceMidnight / 60)
- minute = remainder of (minutesSinceMidnight / 60)
- return new clock with resulting minute and hour

=========

*/

class Clock {
  static MINUTES_PER_HOUR = 60;
  static HOURS_PER_DAY = 24;
  static MINUTES_PER_DAY = Clock.MINUTES_PER_HOUR * Clock.HOURS_PER_DAY;

  /**
   * @param {number} hour
   * @param {number} minute
   */
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  /**
   * @param {number} hour
   * @param {number} minute
   * @returns {Clock}
   */
  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  /**
   * @returns {string}
   */
  toString() {
    const hour = String(this.hour).padStart(2, "0");
    const minute = String(this.minute).padStart(2, "0");
    return `${hour}:${minute}`;
  }

  /**
   * @param {Clock} otherClock
   * @returns {boolean}
   */
  isEqual(otherClock) {
    return this.hour === otherClock.hour && this.minute === otherClock.minute;
  }

  // 1. Working with hour and minute values themselves

  /**
   * @param {number} minutes
   * @returns {Clock}
   */
  add(minutes) {
    minutes %= Clock.MINUTES_PER_DAY;

    let currentMinutes = this.minute;
    let currentHours = this.hour;

    const minutesToAdd = minutes % Clock.MINUTES_PER_HOUR;
    currentMinutes += minutesToAdd;

    if (currentMinutes > Clock.MINUTES_PER_HOUR) {
      currentMinutes -= Clock.MINUTES_PER_HOUR;
      currentHours += 1;
    }

    const hoursToAdd = Math.floor(minutes / Clock.MINUTES_PER_HOUR);
    currentHours += hoursToAdd;

    currentHours %= Clock.HOURS_PER_DAY;

    return new Clock(currentHours, currentMinutes);
  }

  /**
   * @param {number} minutes
   * @returns {Clock}
   */
  subtract(minutes) {
    minutes %= Clock.MINUTES_PER_DAY;
    const minutesToAdd = Clock.MINUTES_PER_DAY - minutes;

    return this.add(minutesToAdd);
  }

  // 2. Using helper methods to convert between hour and minute properties and
  //    the minutes after midnight that they represent

  /**
   * @param {number} minutes
   * @returns {Clock}
   */
  add2(minutes) {
    let newMinutes = this._getMinutesSinceMidnight() + minutes;
    while (newMinutes > Clock.MINUTES_PER_DAY) {
      newMinutes -= Clock.MINUTES_PER_DAY;
    }
    return this._getTime(newMinutes);
  }

  /**
   * @param {number} minutes
   * @returns {Clock}
   */
  subtract2(minutes) {
    let newMinutes = this._getMinutesSinceMidnight() - minutes;
    while (newMinutes < 0) {
      newMinutes += Clock.MINUTES_PER_DAY;
    }
    return this._getTime(newMinutes);
  }

  /**
   * @returns {number}
   */
  _getMinutesSinceMidnight() {
    const totalMinutes = this.hour * Clock.MINUTES_PER_HOUR + this.minute;
    return totalMinutes % Clock.MINUTES_PER_DAY;
  }

  /**
   * @param {number} minutesSinceMidnight
   * @returns {Clock}
   */
  _getTime(minutesSinceMidnight) {
    minutesSinceMidnight %= Clock.MINUTES_PER_DAY;
    const hour = Math.floor(minutesSinceMidnight / Clock.MINUTES_PER_HOUR);
    const minute = minutesSinceMidnight % Clock.MINUTES_PER_HOUR;
    return new Clock(hour, minute);
  }
}

export default Clock;
