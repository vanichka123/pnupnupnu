function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

console.log(Triangular());
console.log(Triangular(4, 6, 8));
console.log(Triangular(6, 8, 10));

function PiMultiplier(num) {
  return function () {
    return Math.PI * num;
  };
}

const multiplyBy2 = PiMultiplier(2);
const multiplyBy3d2 = PiMultiplier(2 / 3);
const divideBy2 = PiMultiplier(1 / 2);
console.log(multiplyBy2());
console.log(multiplyBy3d2());
console.log(divideBy2());

function Painter(color) {
  return function (obj) {
    const type = obj.type || "No 'type' property occurred!";
    console.log(`Color: ${color}, Type: ${type}`);
  };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const obj1 = {
  maxSpeed: 280,
  type: "Sportcar",
  color: "magenta",
};
const obj2 = {
  type: "Truck",
  avgSpeed: 90,
  loadCapacity: 2400,
};
const obj3 = {
  maxSpeed: 180,
  color: "purple",
  isCar: true,
};

PaintBlue(obj1);
PaintRed(obj1);
PaintYellow(obj1);

PaintBlue(obj2);
PaintRed(obj2);
PaintYellow(obj2);

PaintBlue(obj3);
PaintRed(obj3);
PaintYellow(obj3);
