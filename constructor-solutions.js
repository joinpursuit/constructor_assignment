//  1)

// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// };
//
// Human.prototype.ageOneYear = function () {
//   this.age++;
// };
//
// Human.prototype.eating = function () {
//   console.log("mmm, mmm, mmm, I'm love'n it");
// };
//
// let deyvi = new Human('deyvi', 32);
// console.log(deyvi.age);
//
// deyvi.ageOneYear();
// console.log(deyvi.age);
//
// deyvi.eating();
// console.log(deyvi.eating);

// 2)

function Vector(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function (vector) {
  return new Vector(vector.x + this.x, vector.y + this.y);
};

Vector.prototype.minus = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};

var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);
console.log(v1, v2);
console.log(v1.plus(v2));
console.log(v1.minus(v2));

Vector.prototype.getLength = function () {
  let result = Math.pow(this.x, 2) + Math.pow(this.y, 2);
  return Math.sqrt(result);
};

var v3 = new Vector(3, 4);
console.log(v3.getLength());
