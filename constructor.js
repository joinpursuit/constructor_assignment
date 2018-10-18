// # Constructor Exercises

// 1.
//   * Create a Human constructor function that takes in a name and age.
function Human(name, age){
  this.name = name;
  this.age = age;
};
//   * Add a prototype function ageOneYear that ages the humans age.
Human.prototype.ageOneYear = function(){
  return this.age++;
};
//   * Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".
Human.prototype.eating = function(){
  console.log( 'mmm, mmm, mmm, I"m love"n it.');
};

//   * Create an instance of the Human class.
let sarah = new Human("sarah", 27);
let jonas = new Human("jonas", 26);
let julia = new Human ("lucrecia", 54);
let peter = new Human("peter", 30);

//     * console log your humans age
let humans = [sarah, jonas, julia, peter];
humans.forEach((human) => {
  console.log(human.name + " have " + human.age + " year old.")
});
//     * call ageOneYear on your human
sarah.ageOneYear();

//     * console log their age again.

// console.log(sarah.age);
humans.forEach((human) => {
  console.log(human.name + " have " + human.age + " year old." )
});
//     * call eating on your human.
peter.eating();

// 2.
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
function Vector(x, y){
  this.x = x;  // x is represented like Demand
  this.y = y;  // y is represented the price
};
let priceCurve = new Vector(8, 3); // is have more demand that why the price drop down.
let priceDebut = new Vector(5, 8); // is a new product so the price is more hight than demand.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

Vector.prototype.plus = function(vect){
  return new Vector (this.x + vect.x , this.y + vect.y);
};
console.log(priceCurve.plus(priceDebut));

Vector.prototype.minus = function(vect){
  return new Vector (this.x - vect.x , this.y - vect.y);
};
console.log(priceCurve.minus(priceDebut));

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

Vector.prototype.getLength = function(){
  return Math.sqrt((this.x*2 + this.y*2));
};
console.log(priceCurve.getLength(priceDebut));
let hightProduct = priceCurve.minus(priceDebut).GetLength;
console.log(hightProduct);

// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```
