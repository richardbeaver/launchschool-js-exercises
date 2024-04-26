// Scrabble Score

// Write a program that, given a word, computes the Scrabble score for
// that word.

// Letter Values

// You'll need the following tile scores:

// Letter Value
// A, E, I, O, U, L, N, R, S, T   1
// D, G                           2
// B, C, M, P                     3
// F, H, V, W, Y                  4
// K                              5
// J, X                           8
// Q, Z                           10

// How to Score

// Sum the values of all the tiles used in each word. For instance, lets
// consider the word CABBAGE which has the following letters and point values:

// 3 points for C
// 1 point for each A (there are two)
// 3 points for B (there are two)
// 2 points for G
// 1 point for E

// Thus, to compute the final total (14 points), we count:

// 3 + 2*1 + 2*3 + 2 + 1
// => 3 + 2 + 6 + 3
// => 5 + 9
// => 14

//

/*

- given a string, get scrabble score by summing point value of all characters
- only letters have a point value
- scores are case-insensitive
  - lowercase strings before comparisons

- test cases show we need a `Scrabble` class with a constructor and `score`
  method
- also need a static `score` method that takes an input word

Data Structure

input: a string
output: an integer of the score

- we also need to represent scores for each letter
- possible options:
  - use arrays as keys or values of an object
  - create an object as lookup table, with every character as its own key
    associated with its value
  - use a separate method to determine a character's score with conditionals

- will use a separate method that uses a static object containing
  strings of letters as keys for each point value

Algorithm

- create static object to determine point value for an uppercase character

constructor
- save input string as a property
- ignore invalid input
  - (could potentially also uppercase input string here and remove non-letters)
  - (.toUpperCase().replace(/[^A-Z]/g, ''))

`score`
- sum score for each character in word

`charScore`
- uppercase input character
- If input character appears in any list of characters in point value object:
  - return the associated value
- return `0`
  - (non-letters score zero)

*/

class Scrabble {
  static POINTS = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };

  /**
   * @param {string | null} word
   */
  constructor(word) {
    this.word = word ?? "";
  }

  /**
   * @param {string} word
   * @returns {number}
   */
  static score(word) {
    return new Scrabble(word).score();
  }

  /**
   * @returns {number}
   */
  score() {
    return [...this.word].reduce(
      (totalScore, char) => totalScore + this.charScore(char),
      0
    );
  }

  /**
   * @param {string} char
   * @returns {number}
   */
  charScore(char) {
    char = char.toUpperCase();

    for (const [letters, pointValue] of Object.entries(Scrabble.POINTS)) {
      if (letters.includes(char)) {
        return pointValue;
      }
    }

    return 0;
  }
}

export default Scrabble;
