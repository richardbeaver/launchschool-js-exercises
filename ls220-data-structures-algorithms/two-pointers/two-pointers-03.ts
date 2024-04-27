// Reverse Words

// You are given a sentence represented by a string str. Your objective is to
// reverse all the characters in each word of the sentence while ensuring that
// the case of each character remains unchanged. The spaces between words
// should be preserved as they are, and the overall order of the words in the
// sentence must not be altered.

// You should solve the problem without using the Array#reverse method.

// Example test cases:

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
console.log(reverseWords("La") === "aL");

// =====================================================================

// 1. Only using pointers to find word boundaries

function reverseWords(string: string): string {
  if (string.length === 0 || string.length === 1) {
    return string;
  }

  const letters = [...string];

  let wordFirst = 0;
  let wordFinal = 1;

  while (wordFinal <= letters.length) {
    if (wordFinal == letters.length || letters[wordFinal] === " ") {
      wordFinal -= 1;
      reverseSublist(letters, wordFirst, wordFinal);
      wordFinal += 2;
      wordFirst = wordFinal;
    }

    wordFinal += 1;
  }

  return letters.join("");
}

function reverseSublist(list: string[], firstIdx: number, finalIdx: number) {
  let left = firstIdx;
  let right = finalIdx;

  while (left < right) {
    [list[left], list[right]] = [list[right]!, list[left]!];
    left += 1;
    right -= 1;
  }
}

// =====================================================================

// 2. Using `.split` method:

function reverseWordsUsingSplit(string: string): string {
  return string
    .split(" ")
    .map((word) => reverseWord(word))
    .join(" ");
}

function reverseWord(word: string): string {
  if (word.length === 0 || word.length === 1) {
    return word;
  }

  const letters = [...word];

  let left = 0;
  let right = letters.length - 1;

  while (left < right) {
    [letters[left], letters[right]] = [letters[right]!, letters[left]!];
    left += 1;
    right -= 1;
  }

  return letters.join("");
}
