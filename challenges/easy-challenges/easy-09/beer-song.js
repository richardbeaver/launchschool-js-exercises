// Beer Song

// Write a program that can generate the lyrics of the 99 Bottles of Beer song.
// See the test suite for the entire song.

//

const ZERO_VERSE =
  "No more bottles of beer on the wall, no more bottles of beer.\n" +
  "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

const ONE_VERSE =
  "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles of beer on the wall.\n";

const TWO_VERSE =
  "2 bottles of beer on the wall, 2 bottles of beer.\n" +
  "Take one down and pass it around, 1 bottle of beer on the wall.\n";

/**
 * @param {number} verseNumber
 * @returns {string}
 */
export function verse(verseNumber) {
  switch (verseNumber) {
    case 0:
      return ZERO_VERSE;
    case 1:
      return ONE_VERSE;
    case 2:
      return TWO_VERSE;
    default:
      return (
        `${verseNumber.toString()} bottles of beer on the wall, ${verseNumber.toString()} bottles of beer.\n` +
        `Take one down and pass it around, ${(verseNumber - 1).toString()} bottles of beer on the wall.\n`
      );
  }
}

/**
 * @param {number} firstVerse
 * @param {number} finalVerse
 * @returns {string}
 */
export function verses(firstVerse, finalVerse) {
  // 1. Using `Array.from`, mapping to each verse, and joining
  // /**
  //  * @type {number[]}
  //  */
  // const verseNumbers = Array.from(
  //   { length: firstVerse - finalVerse + 1 },
  //   (_e, idx) => firstVerse - idx
  // );
  // return verseNumbers.map((verseNumber) => verse(verseNumber)).join("\n");

  //

  // 2. Manual for loop and string concatenation

  let result = "";

  for (let verseNum = firstVerse; verseNum >= finalVerse; verseNum -= 1) {
    result += verse(verseNum);
    if (verseNum != finalVerse) {
      result += "\n";
    }
  }

  return result;
}

/**
 * @returns {string}
 */
export function lyrics() {
  return verses(99, 0);
}
