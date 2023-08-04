// Create a function that takes a positive integer and returns the next biggest
// number formed by the same digits. If no bigger number can be formed by
// those digits, return -1.


console.log(nextBiggerNumber(9) === -1);
console.log(nextBiggerNumber(12) === 21);
console.log(nextBiggerNumber(513) === 531);
console.log(nextBiggerNumber(2017) === 2071);
console.log(nextBiggerNumber(111) === -1);
console.log(nextBiggerNumber(531) === -1);
console.log(nextBiggerNumber(123456789) === 123456798);

//

console.log(nextBiggerNumber(1577) === 1757);
console.log(nextBiggerNumber(1432) === 2134);
console.log(nextBiggerNumber(231) === 312);
console.log(nextBiggerNumber(2341) === 2413);
console.log(nextBiggerNumber(7154) === 7415);

/*
input: positive integer
output: the next bigger number using same digits

1577 => 1757
1432 => 2134

- Flipping digits starting at the end to get higher number
  - Start by trying to flip last and second-to-last digits
- If every digit is equal to or greater than the digit following it, then there
  is no way to flip digits to get a higher number


1.
- Get string conversion of input number
- For every `digit` at index, `idx`, in [string length - 1, 1]:
  - For every digit at index, `searchIdx`, in [idx - 1, 0]:
    - If the number value of `digit` is greater than the digit at `searchIdx`:
      - Swap digits
      - Sort all digits occurring after `searchIdx`
      - Return resulting string as a number
- Return -1

2.
- Find the maximum number that can be created from input number digits
- If input number is equal to this maximum:
  - Return -1
- Create a `curNumber` variable (value: input number + 1)
- While `curNumber` and input number do not have the same digits:
  - Increment `curNumber` by 1
- Return `curNumber`

*/

// 1.
function nextBiggerNumber(number) {
  let numberString = String(number);

  for (let idx = numberString.length - 1; idx > 0; idx -= 1) {

    for (let searchIdx = idx - 1; searchIdx >= 0; searchIdx -= 1) {

      if (numberString[idx] > numberString[searchIdx]) {
        let digits = numberString.split('');
        [ digits[idx], digits[searchIdx] ] = [ digits[searchIdx], digits[idx] ];

        let sortedEnd = digits.slice(searchIdx + 1).sort();

        let resultString = [...digits.slice(0, searchIdx + 1), ...sortedEnd];
        return Number(resultString.join(''));
      }
    }
  }

  return -1;
}

// 2.
function nextBiggerNumber2(number) {
  let maxNumberDigits = String(number).split('').sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
  let maxNumber = Number(maxNumberDigits.join(''));

  if (number >= maxNumber) return -1;

  let curNumber = number + 1;
  while (!hasSameDigits(curNumber, number)) {
    curNumber += 1;
  }
  return curNumber;
}

function hasSameDigits(num1, num2) {
  let sorted1 = String(num1).split('').sort().join('');
  let sorted2 = String(num2).split('').sort().join('');

  return sorted1 === sorted2;
}

/* eslint no-unused-vars: */
