class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  // ...
  static calculate(item){
    if (item instanceof Square) {
      return item.side * item.side;
    } else if (item instanceof Rectangle) {
      return item.width * item.height;
    } else if (item instanceof Circle) {
      return (item.radius * item.radius) / Math.PI;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

// console.log(square instanceof Square);
// console.log(rectangle instanceof Rectangle);
// console.log(circle instanceof Circle);