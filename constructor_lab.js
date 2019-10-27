// # Constructor Exercises
//
// ## Question 1
//
// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
//
function Person(firstName, lastName, middleName) { // creagting a function that builds a function with three arg.
  this.firstName = firstName; // argument one
  this.lastName = lastName; // argument two
  this.middleName = middleName; // argument three
}
const student = new Person('Stephanie', 'Ramirez', 'Estela');
const relative = new Person('Emily', 'Ramirez', 'Paige') // creating a new argument name Student with value Stephanie
console.log(student instanceof Person); // checking what information is in this new argument
console.log(student instanceof Object);
// checking what if new arguyment is an object or not
//instance of would only apply to objects made throu constructor function

//
// // b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
Person.prototype.fullName = function () {
  console.log(`The full name is ${this.firstName} ${this.middleName} ${this.lastName}`);
};
student.fullName();
relative.fullName();
//
// // ## Question 2
// //
//
// // a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
//
function Book(title, author, rating) { // double rating
  this.title = title
  this.author = author
  this.rating = rating
};
const religion = new Book('Bible', 'Life.Church', 10)
const adventures = new Book('The Bad Begining: A series of unfortunate Events Series', 'Lemony Snicket', 8)
const romance = new Book('Like water for chocolate', 'Laura Esquivel', 9)

// //
// // // b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
Book.prototype.isGood = function () {
  if (this.rating >= 7) {
    return true
  }
}
console.log(religion.isGood())

Sorry did not get the chance to finish it on time.
// };
// student.fullName();
// relative.fullName();

// ## Question 3
//
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
//
// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
//
// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
//
// d. Add a prototype function called `toString` that returns a description of the dog:
//
// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
//
//
// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// tenDegreesCelsius.celsius //returns 10.0
// tenDegreesCelsius.getKelvinTemp() //returns 283.0
// tenDegreesCelsius.getFahrenheitTemp() //returns 50.0
// ```
//
// c. Give `Celsius` a constructor function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
//
// ## Question 5
//
// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
//
// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
//
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
//
// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```