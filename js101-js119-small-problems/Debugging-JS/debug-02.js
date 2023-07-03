// Reserved Keywords

/* eslint-disable */
// We have been asked to implement a function that determines whether or not
// a given word is a reserved keyword. We wrote the isReserved function below
// along with some test cases, but we aren't seeing the expected result. Why
// not? Fix the code so that it behaves as intended.

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

//

/*

Using a return statement inside a callback passed to `forEach` does not return
the value from the function that `forEach` is called within. This return only
stops execution of the callback on that iteration. As `forEach` does not use
the return values of its callback, the `true` value we're trying to return
never gets used and iteration continues until all elements in
`RESERVED_KEYWORDS` are iterated over. After this point, the function simply
returns `false`.

To fix this, we should use a `for` loop instead of the `forEach` method. This
way can return from the `isReserved` function when we encounter a matching
keyword.

We also could instead simply use the `Array.prototype.some` method to write the
function.

*/

function isReservedForLoop(name) {
  for (let idx = 0; idx < RESERVED_KEYWORDS.length; idx += 1) {
    let reserved = RESERVED_KEYWORDS[idx];

    if (name === reserved) {
      return true;
    }
  }

  return false;
}

function isReservedIncludes(name) {
  return RESERVED_KEYWORDS.includes(name);
}
