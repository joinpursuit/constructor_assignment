// # Constructor Exercises
//
// ## Question 1
//
// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`.
// Print one of their first names.
console.log('======#1a==========')

function Person(first, last, middle) {
      this.firstname = first;
      this.lastname = last;
      this.middlename = middle;

}

let tom = new Person ('Tom', 'Cat', 'Jerry')
let minnie = new Person ('Minnie', 'Mouse', 'Dora')

 console.log(tom.firstname)
// console.log(this.firstname)

//
// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name.
// Call this method on both the instances you created in part a.
 console.log('======#1b========')
//
Person.prototype.fullName = function ()  {
  return `${this.firstname} ${this.lastname} ${this.middlename}`;

};

console.log(minnie.fullName());

// ## Question 2
//
// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

console.log('======#2a=======')

function Book (title, author, rating) {
      this.title = title;
      this.author = author;
      this.rating = rating;
}

let book1 = new Book ('The Odyssey', 'Homer', 9.5)
let book2 = new Book ('The Scarlet Letter', ' Hawthorne', 9)
let book3 = new Book ('Things Fall Apart', 'Achebe', 10)


//
//
// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

console.log('=====#2b=====')

Book.prototype.isGood = function () {
  return this.rating >= 7

  }

//
// ## Question 3
//
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

//
// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`,
// set its mood property to `playful`, and log "Ruff!"
//
// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry,
// it should log "The dog doesn't look hungry"
//
// d. Add a prototype function called `toString` that returns a description of the dog:

console.log('=======#3=======')

function Dog(name, breed, mood, hungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}

Dog.prototype.playFetch = function () {
  this.hungry = true
  this.mood = 'playful'
  console.log(`Ruff`)
}

Dog.prototype.feed = function () {
  if (this.hungry === false) {
console.log('Woof!')
 } else {
  console.log("The dog doesn't look  hungry")
}
}

Dog.prototype.toString = function () {
  return `${this.name} is a ${this.breed}, she is ${this.mood} also ${this.hungry} `
}
let dog1 = new Dog ('Lea', 'German Sheperd', 'playful', true)

console.log(dog1.mood)

//
//
// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal
//  to the freezing point of water.
//
//
// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
//
// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a
//  `Bool` (true if the temperature is below freezing).
// //
console.log('=======#4=========')

let freezingPoint = {
  celsuis: 0,
  fahrenheit: 32,
  kelvin: 273.2
}
//let outsideTempt = new Celsius (10.0)
function Celsius(celsius) {
this.celsius = celsius;
this.getFahrenheitTemp = function () {
    return (1.8 * this.celsius) + 32
  },
this.getKelvinTemp = function () {

  return this.celsius + 273
}
}
let outsideTempt = new Celsius (10.0)
// outsideTempt.getFahrenheitTemp(10)
// outsideTempt.getKelvinTemp(10)
// console.log(outsideTempt.celsius)
// console.log(outsideTempt.getFahrenheitTemp())
// console.log(outsideTempt.getKelvinTemp())

Celsius.prototype.isBelowFreezing = function () {
  if (this.celsius < freezingPoint.celsius) {
  return true
} else {
return false
}
}
console.log(outsideTempt.celsius)
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.getKelvinTemp())

// ## Question 5
//
// a. Create a constructor function called `Movie` that has properties for `name`,
// `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
//
// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted
//  string describing the movie.
//
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a
//  man named Borat who was visiting America from Kazakhstan."
 console.log('======#5=========')

 function Movie (name, year, genre, cast, description) {
   this.name = name;
   this.year = year;
   this.genre = genre;
   this.cast = cast;
   this.description = description;
 }
 Movie.prototype.blurb = function () {
   return `${this.name} came out in ${this.year}. It was an ${this.genre}movie starring ${this.cast} to ${this.description}. `
 }
 let movie1 = new Movie ('Avenger Endgame', 2019, 'action', 'avengers', 'save the world')


//
// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this`
// and the parameter) x and y values.
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
console.log('=======#6=======')

function Vector (x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (vector) {
  return new Vector (this.x + vector.x, this.y + vector.y )
}
Vector.prototype.minus = function (vector) {
  return new Vector (this.x - vector.x, this.y - vector.y)
}
Vector.prototype.getLength = function () {
  return new Vector (Math.sqrt((this.x * this.x) + (this.y * this.y)))
}

let v1 = new Vector(1, 2)
let  v2 = new Vector(2, 3)
 let v3 = new Vector(3, 4)
console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
 console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
console.log(v3.getLength());
// // => 5
