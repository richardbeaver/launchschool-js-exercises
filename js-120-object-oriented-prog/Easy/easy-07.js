// What Will This Do?

// What will the following code log?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());

//

/*

ByeBye
HelloHello

We first log the result of `Something.dupData`. This refers to the static
`dupData` method, which returns "ByeBye". We then log the result of calling
the `dupData` instance method on `thing`, whose `data` property is "Hello".

*/
