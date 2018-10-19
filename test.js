//1
function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.ageOneYear = function (age) {
  this.age++;
  return `I've had the time of my life and I'm just ${this.age}!`;
};

Human.prototype.eating = function () {
  return `Mmmm... mmmmm... I'mmm.. loving it!`;
};

let derrick = new Human('Derrick', '20');

console.log(derrick.age);
derrick.ageOneYear();
console.log(derrick.age);
derrick.eating();
console.log(derrick.eating());

//2
function Vector(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function (par1, par2) {
  let newVector = new Vector((this.x + par1), (this.y + par2));
  return newVector;
};

Vector.prototype.minus = function (par1, par2) {
  let newVector = new Vector((this.x - par1), (this.y - par2));
  return newVector;
};

Vector.prototype.length = function (par1, par2) {
  let length = Math.pow(par1, 2) + Math.pow(par2, 2);
  let squaredLength = Math.sqrt(length);
  return squaredLength;
};

let vector = new Vector(2, 2);
let v1 = vector.plus(1, 1);
let v2 = vector.minus(1, 1);
let v3 = vector.length(3, 4);

console.log(v1);
console.log(v2);
console.log(v3);
