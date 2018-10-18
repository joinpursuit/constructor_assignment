# Constructor Exercises

<!-- 1.
  * Create a Human constructor function that takes in a name and age.
  * Add a prototype function ageOneYear that ages the humans age.
  * Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".
  * Create an instance of the Human class.
    * console log your humans age
    * call ageOneYear on your human
    * console log their age again.
    * call eating on your human.

2.
Write a constructor Vector that represents a vector in two-dimensional space.
It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

Add a method `getLength` to the prototype that computes the length of the vector ;
that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

```js
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5
``` -->



1.
function Human(name, age) {
  this.name = name;
  this.age = age;
};

let name = new Human("Michell", 25);
// console.log(name)

Human.prototype.ageOneYear = function () {
  this.age++
  return `Its been 1 year, you are now ${this.age} years old`
  };

Human.prototype.eating = function () {
    console.log("mmm, mmm, mmm, I'm lov'n it")
  };


console.log(name.age)
console.log(name.ageOneYear())
name.eating()

2.
function Vector (x, y) {
  this.x = x;
  this.y = y;
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)
let v3 = new Vector(3, 4)

Vector.prototype.plus = function (num) {
  let sum = this.x + num.x;
  let sum2 = this.y + num.y;
  return `x: ${sum} , y: ${sum2}`
};

Vector.prototype.minus = function (num1) {
  let difference = this.x - num1.x;
  let difference2 = this.y - num1.y;
  return `x: ${difference} , y: ${difference2}`
}

Vector.prototype.getLength = function (nums) {
  let length = Math.sqrt((this.x * this.x) + (this.y * this.y))
  return length
}

console.log(v1.plus(v2))
console.log(v1.minus(v2))
console.log(v3.getLength())
