// Alphabetical Numbers

// Write a function that takes an array of integers between 0 and 19 and
// returns an array of those integers sorted based on the English word for
// each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
// twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Example:
console.log(
  alphabeticNumberSort(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  )
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

//

/*
input: array of integers in [0, 19]
output: new array of input integers sorted by English word for each number

- Create variable `numberWords` (value: array of words of each number
  in range [0, 19])
- Create a copy of input array, and sort by comparing the words in `numberWords`
  at the indexes of the numbers being compared
- Return the resulting sorted array

*/

function alphabeticNumberSort(array) {
  const NUMBER_WORDS = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  let sortedArr = [...array].sort((num1, num2) => {
    let word1 = NUMBER_WORDS[num1];
    let word2 = NUMBER_WORDS[num2];

    if (word1 < word2) return -1;
    if (word1 > word2) return 1;
    return 0;
  });

  return sortedArr;
}
