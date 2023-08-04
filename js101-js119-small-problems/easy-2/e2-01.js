// Welcome Stranger

// Create a function that takes 2 arguments, an array and an object. The array
// will contain 2 or more elements that, when combined with adjoining spaces,
// will produce a person's name. The object will contain two keys, "title" and
// "occupation", and the appropriate values. Your function should return a
// greeting that uses the person's full name, and mentions the person's title.

// Example:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

//

/*
- Problem

inputs: an array of 2 or more elements representing a name, an object with keys
  "title" and "occupation" with appropriate values
outputs: a string greeting

Rules:
- Greeting should use person's full name along with their title and occupation
  in one resulting string

- Algorithm

- Join the name items array by spaces to a full name
- Return a string greeting matching the example using full name and object
  properties

*/

function greetings(nameItems, status) {
  let fullName = nameItems.join(' ');
  return `Hello, ${fullName}! Nice to have a ${status.title} ${status.occupation} around.`;
}
