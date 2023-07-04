// Lettercase Counter

// Write a function that takes a string and returns an object containing
// three properties: one representing the number of characters in the string
// that are lowercase letters, one representing the number of characters
// that are uppercase letters, and one representing the number of characters
// that are neither.

// Examples:
console.log(
  letterCaseCount('abCdef 123'),  // { lowercase: 5, uppercase: 1, neither: 4 }
  letterCaseCount('AbCd +Ef'),    // { lowercase: 3, uppercase: 3, neither: 2 }
  letterCaseCount('123'),         // { lowercase: 0, uppercase: 0, neither: 3 }
  letterCaseCount(''),            // { lowercase: 0, uppercase: 0, neither: 0 }
);

//

/*
input: a string
output: an object with 3 properties: count of lowercase characters in the
  string, count of uppercase characters, count of characters that are neither

1.
- Create object with the three properties set to values of 0
- For each character in input string:
  - If character is uppercase/lowercase/neither
    - Increment corresponding count in object by 1
- Return resulting object


2. Using Regex
- 

*/

// 1.
function letterCaseCount(string) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach((char) => {
    if (char >= 'A' && char <= 'Z') {
      counts.uppercase += 1;
    } else if (char >= 'a' && char <= 'z') {
      counts.lowercase += 1;
    } else {
      counts.neither += 1;
    }
  });

  return counts;
}

// Regex solution:

