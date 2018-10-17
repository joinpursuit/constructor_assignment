//1
//es5
function Human(name, age) {
  this.name = name;
  this.age = age;
  this.ageOneYear = function () {
    this.age++; //NOTE:ask instructor why no return
  };

  this.eating = function () {
    console.log("mmm, mmm, mmm, I'm love'n it");
  };
}

let myHuman = new Human('Shea', 28);
console.log('1a', myHuman.age);
myHuman.ageOneYear();
console.log('1b', myHuman.age);
myHuman.eating();

//2
//es5
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};

Vector.prototype.minus = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};

Vector.prototype.getLength = function () {
  //distance of the point (x, y) from the origin (0, 0)
  //(a^2 + b^2 = c^2)
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4);
console.log(v3.getLength());
// => 5
