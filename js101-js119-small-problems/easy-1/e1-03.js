// Even Numbers

// Log all even numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.

//

for (let num = 2; num <= 99; num += 2) {
  console.log(num);
}

//

for (let num = 1; num <= 99; num += 1) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

//

Array.from({ length: 99 }, (_, idx) => idx + 1).forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});
