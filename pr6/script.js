class Square {
  constructor(a) {
    this.a = a;
  }
  static help() {
    console.log("Квадрат - геометрична фігурка.");
  }
  length() {
    return 4 * this.a;
  }
  square() {
    return this.a * this.a;
  }
  info() {
    console.log("Довжина сторони a: ", this.a);
    console.log("Довжина: ", this.length());
    console.log("Площа: ", this.square());
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
  static help() {
    console.log("Прямокутник - геометрична фігурочка.");
  }
  length() {
    return 2 * (this.a + this.b);
  }
  square() {
    return this.a * this.b;
  }
  info() {
    console.log("Довжина прямокутника: ", this.a);
    console.log("Ширина прямокутника: ", this.b);
    console.log("Довжина: ", this.length());
    console.log("Площа: ", this.square());
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }
  static help() {
    console.log("Ромб - геометрична фігуронька.");
  }
  length() {
    return 4 * this.a;
  }
  square() {
    return this.a * this.a * Math.sin((this.alpha * Math.PI) / 180);
  }
  info() {
    console.log("Сторона ромба: ", this.a);
    console.log("Тупий кут ромба у градусах: ", this.alpha);
    console.log("Гострий кут ромба у градусах: ", this.beta);
    console.log("Довжина: ", this.length());
    console.log("Площа: ", this.square());
  }
}

class Parallelogram extends Rhombus {
  constructor(a, b, alpha, beta) {
    super(a, alpha, beta);
    this.b = b;
  }
  static help() {
    console.log("Паралелограм - геометричненька фігуронька.");
  }
  length() {
    return 2 * (this.a + this.b);
  }
  square() {
    return this.a * this.b * Math.sin((this.alpha * Math.PI) / 180);
  }
  info() {
    console.log("Довжина паралелограма: ", this.a);
    console.log("Ширина паралелограма: ", this.b);
    console.log("Тупий кут паралелограма у градусах: ", this.alpha);
    console.log("Гострий кут паралелограма у градусах: ", this.beta);
    console.log("Довжина: ", this.length());
    console.log("Площа: ", this.square());
  }
}

Square.help();
const square = new Square(10);
square.info();

Rectangle.help();
const rectangle = new Rectangle(2, 4);
rectangle.info();

Rhombus.help();
const rhombus = new Rhombus(3, 30, 60);
rhombus.info();

Parallelogram.help();
const parallelogram = new Parallelogram(3, 4, 40, 100);
parallelogram.info();
