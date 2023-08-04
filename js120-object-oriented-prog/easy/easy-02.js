// Rectangles and Squares

// Given the Rectangle class from the previous problem, write a class called
// Square that inherits from Rectangle so that the output from the example
// below is correct.

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

//

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}

//

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
