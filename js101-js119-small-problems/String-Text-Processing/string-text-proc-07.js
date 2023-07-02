// Staggered Caps (Part 2)

// Modify the function from the previous exercise so it ignores
// non-alphabetic characters when determining whether it should uppercase or
// lowercase each letter. The non-alphabetic characters should still be
// included in the return value; they just don't count when toggling the
// desired case.

// Example:
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

//

/*
input: string
output: input string in staggered capitalization scheme, with non-alphabetic
  characters not counting when switching the desired case

- Keep variable `needUppercase` set to true when next character should be
  uppercase, and false when next character should be lowercase

*/

function staggeredCase(string) {
  let needUppercase = true;

  let staggeredChars = string.split('').map((char) => {
    if (!isAlphabetic(char)) return char;

    if (needUppercase) {
      needUppercase = false;
      return char.toUpperCase();
    }

    needUppercase = true;
    return char.toLowerCase();
  });

  return staggeredChars.join('');
}

function isAlphabetic(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}
