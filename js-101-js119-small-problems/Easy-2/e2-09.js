// How Old is Teddy?

// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:

// Teddy is 69 years old!

//

/*
- Problem

inputs: `min` and `max` numbers
outputs: a random number in [`min`, `max`]

- Algorithm

1. Get a random number in [0, 1)
2. Multiply by (max - min + 1)
3. Take the floor
4. Add `min`
5. Return result

*/

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomNumber(20, 120);
console.log(`Teddy is ${age} years old.`);
