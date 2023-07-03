// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

//

/*
input: string
output: input string with: in every other word, capitalize every 4th character

- Split input into word strings
- At each odd index:
  - Capitalize each character at indexes (3 + 4x), where x is a multiple until
    reaching end of the word
- Return resulting string

*/

function toWeirdCase(string) {
  let words = string.split(' ');

  let weirdCaseWords = words.map((word, idx) => {
    if (idx % 2 === 0) return word;

    let charsArray = word.split('');
    for (let idx = 3; idx < charsArray.length; idx += 4) {
      charsArray[idx] = charsArray[idx].toUpperCase();
    }
    return charsArray.join('');
  });

  return weirdCaseWords.join(' ');
}
