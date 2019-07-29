// # Constructor Exercises
//
// ## Question 1
console.log("---------- #1 ----------")
console.log("A)")
function Person(firstName, lastName, middleName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.middleName = middleName;
}

let doug = new Person("Douglas", "MacKrell", "John")

let lucy = new Person("Lucy", "Goldstein", "Luanne")

console.log(doug.firstName)

// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
//
console.log(" ")
// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

console.log("B)")
Person.prototype.fullName = function() {
  console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)
}

doug.fullName()
lucy.fullName()

console.log(" ")
// ## Question 2
console.log("---------- #2 ----------")
console.log("A)")

function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
}

let unfortunate = new Book("Series Of Unfortunate Events", "Lemony Snicket", 10)

let pink = new Book("A Separate Peace", "John Knowles", 1)

let dick = new Book("Moby Dick", "Herman Melville", 4)

let alien = new Book("My Teacher Is An Alien", "Bruce Coville", 7)

console.log(unfortunate)
console.log(pink)
console.log(dick)
console.log(alien)

console.log(" ")
// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
//
console.log("B)")

Book.prototype.isGood = function() {
  console.log(`Is ${this.title} good?`)
  if (this.rating >= 7) {
    console.log(true)
  } else {
    console.log(false)
  }
}

pink.isGood()
unfortunate.isGood()
dick.isGood()
alien.isGood()


console.log(" ")
// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
//
// ## Question 3
console.log("---------- #3 ----------")
console.log("A)")

function Dog(name, breed, mood, hungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}

let porkchop = new Dog("Porkchop", "Cartoon", "Whimsical", true)
let brain = new Dog("Brain", "Cartoon", "Skeptical", false)
let poochie = new Dog("Poochie D", "Cartoon", "Totally In Your Face", true)

console.log(porkchop)

console.log(" ")
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log("B)")

Dog.prototype.playFetch = function () {
  this.mood = "playful"
  this.hungry = true
  console.log("Ruff!")
}

brain.playFetch()
console.log(brain)

console.log(" ")
// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
console.log("C)")

Dog.prototype.feed = function () {
  if (this.hungry === true) {
    this.hungry = false
    console.log("Woof!")
  } else {
    console.log("This dog doesn't look hungry.")
  }
}

porkchop.feed()
brain.feed()
porkchop.feed()
brain.feed()

console.log(" ")
// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
console.log("D)")

Dog.prototype.toString = function () {
  console.log(`My dog ${this.name} is a ${this.breed}. They're feeling ${this.mood},`)
  if (this.hungry === true) {
    console.log("and they're VERY hungry!")
  } else {
    console.log("and they're currently not hungry. Please, do not feed them any hamburgers.")
  }
}

porkchop.toString()
console.log(" ")
brain.playFetch()
console.log(" ")
brain.toString()
console.log(" ")
poochie.toString()

console.log(" ")
// d. Add a prototype function called `toString` that returns a description of the dog:
//
// ## Question 4
console.log("---------- #4 ----------")
console.log("A)")

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273
}

console.log(freezingPoint)

console.log(" ")
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
//
console.log("B)")

function Celsius(celsius) {
  this.celsius = celsius
  this.getFahrenheitTemp = function () {
    return (celsius + 32) * 1.8
  }
  this.getKelvinTemp = function () {
    return (celsius + 273)
  }
}

let outsideTempt = new Celsius(45)
console.log(outsideTempt.celsius)
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.getKelvinTemp())

console.log(" ")
// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
console.log("C)")

Celsius.prototype.isBelowFreezing = function () {
  if (this.celsius <= 0) {
    return true
  } else {
    return false
  }
}

let belowZero = new Celsius(-5)

console.log(belowZero.isBelowFreezing())
console.log(outsideTempt.isBelowFreezing())

console.log(" ")
// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
//
// ## Question 5
console.log("---------- #5 ----------")
console.log("A)")

function Movie(name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}

let fist = new Movie("Lady Robo-Fist", 2020, "Superhero", ["Aubry Plaza", "Nick Offerman", "Bruce Campbell", "Dave Foley", "Jack Black"], "the story of a woman whose hand is stolen by a ghost, and her epic ghost-punching journey for revenge")

console.log(fist)

console.log(" ")
// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
console.log("B)")

Movie.prototype.blurb = function () {
  console.log(`Coming soon in ${this.year}, is the hotly anticipated ${this.genre} film, ${this.name}! Starring ${this.cast} in ${this.description}!!!`)
}

fist.blurb()

console.log(" ")
// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
//
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
//
// ## Question 6
console.log("---------- #6 ----------")
console.log("A)")

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)

Vector.prototype.plus = function (v) {
  return this.x + this.x && this.y + this.y
}

console.log(v1.plus(v2))

console.log(" ")
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
