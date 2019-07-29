// # Constructor Exercises
//
// ## Question 1
//
// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name.
// Create 2 instances of a `Person`. Print one of their first names.
console.log("Number 1a");

function Person(firstName, lastName, middleName){
  this.firstName = firstName,
  this.middleName = middleName,
  this.lastName = lastName
}

let briany = new Person("Briany", "Rosalia", "Taveras")
let kadijah = new Person("Kadijah", "Christina", "Wilson")

console.log(briany.firstName);

// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name.
// Call this method on both the instances you created in part a.
console.log("Number 1b");

Person.prototype.fullName = function() {
  console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)
};

briany.fullName();
kadijah.fullName();


// ## Question 2
// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`.
//  Create some instances of `Book`.
console.log("Number 2a");

function Book(title, author, rating){
  this.title = title,
  this.author = author,
  this.rating = rating
}

let fouragreements = new Book("The Four Agreements", "Don Miguel Ruiz", 8)
let alchemist = new Book("The Alchemist", "Paulo Coelho", 6)

// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7.
console.log("Number 2b");


Book.prototype.isGood = function () {
  console.log(this.rating >= 7)
}

alchemist.isGood();
fouragreements.isGood();


// ## Question 3
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log("Number 3a");

function Dog(name, breed, mood, hungry){
  this.name = name,
  this.breed = breed,
  this.mood = mood,
  this.hungry = hungry
}

let sam = new Dog("Sam", "Golden Retriever", "sleepy", false)
console.log(sam);

// b. Add a prototype function called `playFetch`.
// It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
console.log("Number 3b");

Dog.prototype.playFetch = function () {
  this.hungry = true
  this.mood = "Playful"
console.log("Ruff!")
}

sam.playFetch();
console.log(sam);

// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!"
// If the dog is not hungry, it should log "The dog doesn't look hungry"
console.log("Number 3c");

Dog.prototype.feed = function () {
  if (this.hungry === true) {
    this.hungry = false
    console.log("Woof!")
  } else {
    console.log("The dog doesn't look hungry.")
  }
}

sam.feed();
console.log(sam);

// d. Add a prototype function called `toString` that returns a description of the dog:
console.log("Number 3d");

Dog.prototype.toString = function () {
  console.log(`My dog's name is ${this.name}, he is a ${this.breed} and he is ${this.mood}.`)
}

sam.toString();

// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`.
// Give them all values equal to the freezing point of water.
console.log("Number 4a");

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.15
}
console.log(freezingPoint);

// b. Make a constructor function called `Celsius` that has one property: `celsius`,
// and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
console.log("Number 4b");


function Celcius(celcius){
  this.celcius = celcius,
  this.getKelvinTemp = function() {
    console.log(this.celcius + 273.15);
  },
  this.getFahrenheitTemp = function() {
    console.log((this.celcius * 9/5) + 32);
  }
}

let outsideTempt = new Celcius(10)
console.log(outsideTempt);

outsideTempt.getKelvinTemp();
outsideTempt.getFahrenheitTemp();

//c. Give Celsius a prototype function called isBelowFreezing that returns a Bool (true if the temperature is below freezing).
console.log("Number 4c");


Celcius.prototype.isBelowFreezing = function () {
  if (this.celcius < 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}

let temp = new Celcius(-1)
temp.isBelowFreezing();


// ## Question 5
// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`.
// Create an instance of your `Movie`
console.log("Number 5a");
function Movie(name, year, genre, cast, description){
  this.name = name,
  this.year = year,
  this.genre = genre,
  this.cast = cast,
  this.description = description
}


let titanic = new Movie("Titanic", "1997", "Drama/Disaster", ["Leonardo Dicaprio", "Kate Winslet"])
console.log(titanic);


// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
console.log("Number 5b");

Movie.prototype.blurb = function () {
  console.log(`The movie ${this.name} is a ${this.genre} film, that came out in ${this.year}, featuring ${this.cast}.`);
}

titanic.blurb();

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
console.log("Number 6");

function Vector(x, y){
  this.x = x,
  this.y = y
}


Vector.prototype.plus = function () {

}

Vector.prototype.minus = function () {

}
