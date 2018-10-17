# Constructor Exercises

// # Constructor Exercises
//
// 1. * Create a Human constructor function that takes in a name and age.

function Humano(name, age) {
  this.name = name;
  this.age = age;
}
//
//   * Add a prototype function ageOneYear that ages the humans age.

      Humano.prototype.ageOneYear = function () {
      this.age++;
   }
   // * Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".

      Humano.prototype.eating = function (){
      return "mmm, mmm, mmm, I'm love'n it";
      }


//   * Create an instance of the Human class.

      let montgomery = new Humano("Montgomery", 22)

//     * console log your humans age
      console.log(montgomery.age);
//     * call ageOneYear on your human
      montgomery.ageOneYear()
//     * console log their age again.
      console.log(montgomery.age)
//     * call eating on your human.
      console.log(montgomery.eating());


//
// 2.
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

function Vector(x, y) {
  this.x = x;
  this.y = y;
};




// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

Vector.prototype.plus = function(thatVec) {
  return new Vector(this.x + thatVec.x, this.y + thatVec.y)
};

Vector.prototype.minus = function(diffVec) {
  return new Vector(this.x - diffVec.x, this.y - diffVec.y)
};
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
Vector.prototype.getLength = function()
{ return Math.sqrt(this.x*this.x + this.y*this.y);
};
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
let v = new Vector(1, 2);
let v1 = new Vector(3, 4);
let v2 = new Vector(5, 6);
console.log(v.plus(v2));
console.log(v1.minus(v2));
console.log(v1.getLength());
