// (12 % 2) + 1 = 1

function TriangleArea(b = 5, height = 4) {
  let square = (b * height) / 2;
  console.log(`Square: ${b}`);
  return square;
}

TriangleArea(3, 6);
TriangleArea();

function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
  this.color = color;
  this.avgSpeed = avgSpeed;
  this.maxAltitude = maxAltitude;
  this.brand = brand;
  this.pointOfDestination = pointOfDestination;
}

Jet.prototype.AssignPilot = function (name, yearsOfExperience, hasChildren) {
  this.pilot = {
    name: name,
    yearsOfExperience: yearsOfExperience,
    hasChildren: hasChildren,
  };
};

let jetik = new Jet("blue", 400.5, 232, "Boeing", "Kyiv");
jetik.AssignPilot("Ivan Pyshch", "10", true);
console.log(jetik);

class EquilateralTriangle {
  constructor(equalSide) {
    this.equalSide = equalSide;
  }
  get equalSide() {
    return this._equalSide;
  }
  set equalSide(val) {
    this._equalSide = val;
  }
}

class IsoscelesTriangle extends EquilateralTriangle {
    constructor(equalSide, base) {
        super(equalSide);
        this.base = base;
    }
    square() {
        return (this.base/4) * Math.sqrt(4*Math.pow(this.equalSide, 2) - Math.pow(this.base, 2))
    }
}

let eqTriangle = new EquilateralTriangle(4)
console.log(`EquilateralTriangle equal side: ${eqTriangle.equalSide}`)
eqTriangle.equalSide = 5

let isTriangle = new IsoscelesTriangle(4, 5)
console.log(`IsoscelesTriangle square: ${isTriangle.square()}`)

function AddGenerator(num) {
    return function(numToAdd) {
        return num + numToAdd
    }
}

let addTo10 = AddGenerator(10)
console.log(`5 + 10 = ${addTo10(5)}`)

let addTo5 = AddGenerator(5)
console.log(`5 + 5 = ${addTo5(5)}`)