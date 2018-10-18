// # Constructor Exercises
// 1.
//   * Create a Human constructor function that takes in a name and age.
//   * Add a prototype function ageOneYear that ages the humans age.
//   * Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".
//   * Create an instance of the Human class.
//     * console log your humans age
//     * call ageOneYear on your human
//     * console log their age again.
//     * call eating on your human.
function Human(name, age, nationality) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
}

let jrJ = new Human("Jung Rae Jang", 28, "Korean")
let nM = new Human("Nataly Martinez", 26, "American")
let humans = [jrJ, nM]

Human.prototype.ageOneYear = function() {
  jrJ.age = this.age + 1
};

Human.prototype.eating = function() {
   console.log("mmm, mmm, mmm, I\'m love\'n it!")
}
console.log(jrJ.age)
jrJ.ageOneYear()
console.log(jrJ.age)
jrJ.eating()

// 2.
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)


function Vector(x, y) {
  this.x = x;
  this.y = y;
}
let v1 = new Vector(-9, -7)
let v2 = new Vector(5, 6)

Vector.prototype.plus = function(Vector) {
(this.x += Vector.x, this.y += Vector.y)
return this
}

Vector.prototype.minus = function(Vector) {
(this.x -= Vector.x, this.y -= Vector.y)
return this
}

Vector.prototype.getLength = function(Vector) {
let length = Math.pow(this.x, 2) + Math.pow(this.y, 2)
return Math.pow(length, (1 / 2))
}

// console.log(v1.plus(v2))
// console.log(v2.minus(v1))
console.log(v1.getLength())
