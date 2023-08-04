// Even Numbers

// Log all even numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.

//

for (let i = 2; i <= 99; i += 2) {
  console.log(i);
}

//

for (let i = 1; i <= 99; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
