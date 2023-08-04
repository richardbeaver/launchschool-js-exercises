/* eslint-disable */

// Buggy Code 1

// The code below is expected to output the following when run:

// > let helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = Good Morning Victor

// However, it instead results in an error. What is the problem with the code?
// Why isn't it producing the expected results?

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

//

/*

The `greet` method is not using the `this` keyword to access properties of
the object used to call the method. We should be using `this.morning`,
`this.afternoon`, `this.evening`, and `this.name` to access those properties
of the object.

*/
