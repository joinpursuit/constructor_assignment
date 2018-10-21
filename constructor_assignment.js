// 1.
//   * Create a Human constructor function that takes in a name and age.
//   * Add a prototype function ageOneYear that ages the humans age.
//   * Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".
//   * Create an instance of the Human class.
//     * console log your humans age
//     * call ageOneYear on your human
//     * console log their age again.
//     * call eating on your human.

// function Human (name, age) {
//     this.name = name;
//     this.age = age;
//   };
//
//   Human.prototype.ageOneYear = function() {
//     this.age++;
//   };
//
//   Human.prototype.eating = function() {
//     console.log( `mmm, mmm, mmm, I'm loving it`)
//   };
//
//   let trey = new Human ("Trey", 31)
//
//   console.log(trey);
//   trey.ageOneYear();
//   console.log(trey.age);
//   trey.eating();
//

//   Write a constructor Vector that represents a vector in two-dimensional space. It takes two number arguments: x and y parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, plus and minus, that take another vector as an argument and returns a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//
// Add a method getLength to the prototype that computes the length of the vector ; that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)


class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function(vector) {
      return new Vector(this.x + vector.x, this.y + vector.y);
    };
    this.minus = function(vector) {
      return new Vector(this.x - vector.x, this.y + vector.y);
    };
    this.getLength = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
  }
}
 var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)

 var v3 = new Vector(3, 4)
console.log(v3.getLength());
