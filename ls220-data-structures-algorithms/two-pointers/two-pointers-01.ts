// Reverse Consonants

// Given a string str, reverse only all the consonants in the string and return
// it. Consonants are all alphabetic characters except for the vowels 'a', 'e',
// 'i', 'o', and 'u', which can appear in both lower and upper cases. The
// consonants can appear more than once in the string.

// Example test cases:

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("hello") === "lelho");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true

// =====================================================================

// start-end pointer strategy

function reverseConsonants(input: string) {
  const letters = [...input];
  let left = 0;
  let right = letters.length - 1;

  while (left < right) {
    const leftChar = letters[left]!;
    const rightChar = letters[right]!;

    if (isConsonant(leftChar) && isConsonant(rightChar)) {
      [letters[left], letters[right]] = [rightChar, leftChar];
      left += 1;
      right -= 1;
      continue;
    }

    if (!isConsonant(leftChar)) {
      left += 1;
    }
    if (!isConsonant(rightChar)) {
      right -= 1;
    }
  }

  return letters.join("");
}

function isConsonant(char: string): boolean {
  const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
  return CONSONANTS.includes(char.toLowerCase());
}
