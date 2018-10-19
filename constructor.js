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

function Human(name , age) {
  this.name = name;
  this.age = age;

  Human.prototype.ageOneYear = function () {
    return this.age + 1;
  }
}
  Human.prototype.eating = function () {
    console.log("says mmm, mmm, mmm, I'm love'n it");
};

  let Muna = new Human('Muna', 25);

  console.log(Muna.age);
  Muna.ageOneYear();
  console.log(Muna.ageOneYear())
  Muna.eating();
  console.log(Muna.eating());


// 2.

// Write a constructor Vector that represents a vector in two-dimensional space.

// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

  function Vector(x, y) {
    this.x = 'x';
    this.y = 'y';
  }


// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

  Vector.prototype.plus = function(vec) {
    let newVecX = this.x + vec.x;
    let newVecY = this.y + vec.y;
    return new Vector(newVecX, newVecY);
 };

 Vector.prototype.difference = function(vec) {
   let newVecX = this.x - vec.x;
   let newVecY = this.y - vec.y;
   return new Vector(newVecX, newVecY);
 };

// Add a method `getLength` to the prototype that computes the length of the vector; that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

  Vector.prototype.getLength = function (){
    let origin = (0, 0).(a^2 + b^2 = c^2);
  //  return this.x  this.y - origin
  }
// ```js

// let v1 = new Vector(1, 2)
// let  v2 = new Vector(2, 3)
//
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.difference(v2));

// => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```
