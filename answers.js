// //1

function Human(name, age) {
this.name = name;
this.age = age;
};

Human.prototype.ageOneYear = function() {
  this.age += 1;
};

Human.prototype.eating = function() {
  console.log("mmm mmm mmm, I'm love'n it");
}

let Maria = new Human("Maria", 27)

console.log(Maria.age);

Maria.ageOneYear();

console.log(Maria.age);

Maria.eating();




// //2

function Vector(x, y) {
  this.x = x;
  this.y = y;
};
Vector.prototype.plus = function(someVec) {
return new Vector(this.x + someVec.x, this.y + someVec.y)
};
Vector.prototype.minus = function(anotherVec) {
return new Vector(this.x - anotherVec.x, this.y - anotherVec.y)
};
Vector.prototype.getLength = function() {
  return Math.sqrt(this.x*this.x + this.y*this.y)
};
let v1 = new Vector(1, 2);
let v2 = new Vector(5, 6);
let v3 = new Vector(3, 4);
console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v3.getLength());
