// # Constructor Exercises
//
// ## Question 1
//
// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
//
//
// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

console.log("1.a.________________________");

function Person(firstName, middleName, lastName) {
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
}

let peter = new Person("Peter", "Michael", "Fiorentino");
let hp = new Person("Harry", "James", "Potter");

console.log(hp.firstName)

console.log("1.b.________________________");

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.middleName} ${this.lastName}`;
}

console.log(peter.fullName());
console.log(hp.fullName());

// ## Question 2
//
// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
//
//
// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

console.log("2.a.________________________");

function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
}

let toKill = new Book("To Kill A Mocking Bird", "Harper Lee", 10);
let invMon = new Book("Invisible Monsters", "Chuck Palahniuk", 10);
let salt = new Book("Salt Houses", "Hala Alyan", 3);
let devours = new Book("It Devours!", "Joseph Fink & Jeffrey Cranor", 7);

console.log(toKill);

console.log("2.b.________________________");

Book.prototype.isGood = function() {
  if (this.rating >= 7) {
    return true;
  } else {
    return false;
  }
}

console.log(toKill.isGood());
console.log(invMon.isGood());
console.log(salt.isGood());
console.log(devours.isGood());


// ## Question 3
//
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
//
// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
//
// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
//
// d. Add a prototype function called `toString` that returns a description of the dog:

console.log("3.a.________________________");

function Dog(name, breed, mood, hungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}

console.log("3.b.________________________");

Dog.prototype.playFetch = function() {
  this.hungry = true;
  this.mood = "playful"
  console.log("Ruff!")
}

console.log("3.c.________________________");

Dog.prototype.feed = function() {
  if (this.hungry === true) {
    this.hungry = false;
    console.log("Woof!")
  } else {
    console.log("This dog doesn't look hungry");
  }
}

console.log("3.d.________________________");

Dog.prototype.toString = function() {
  return `${this.name} is a ${this.breed}. ${this.name} is feeling ${this.mood}. It's ${this.hungry} that ${this.name} is hungry.`
}

let cuzzie = new Dog("Cuzzie", "Collie", "Happy", false);
let charlie = new Dog("Charlie", "English Sheep Dog", "tired", true);
let peanut = new Dog("Peanut", "Chihuahua", "hyper", false);


charlie.feed()
peanut.playFetch()
cuzzie.feed()
console.log(cuzzie.toString());
console.log(charlie.toString());
console.log(peanut.toString());


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
// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

console.log("4.a.________________________");

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 237.2
}


console.log("4.b.________________________");

function Celsius(celsius) {
  this.celsius = celsius;
  this.getFahrenheitTemp = function() {
    return 1.8 * this.celsius + 32;
  }
  this.getKelvinTemp = function() {
    return this.celsius + 273;
  }
}

let outsideTempt = new Celsius(10);
let outsideTempt2 = new Celsius(0);

console.log(outsideTempt.getKelvinTemp());
console.log(outsideTempt.getFahrenheitTemp());

console.log("4.c.________________________");

Celsius.prototype.isBelowFreezing = function() {
   if (this.celsius <= freezingPoint.celsius) {
    return true;
  } else {
    return false;
  }
}

console.log(outsideTempt.isBelowFreezing());
console.log(outsideTempt2.isBelowFreezing());

// ## Question 5
//
// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
//
// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
//
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."

console.log("5.a.________________________");

function Movie(name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}

let fightClub = new Movie("Fight Club", 1999, "Drama", ["Brad Pitt", "Edward Norton", "and Helena Bonham Carter"], "based on Chuck Palahniuk's novel.");

// console.log(fightClub);

console.log("5.b.________________________");

Movie.prototype.blurb = function() {
  console.log(`${this.name} came out in ${this.year}. It was a cult classic starring ${this.cast} ${this.description}`)
}

fightClub.blurb()

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

console.log("6.________________________");

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

let fourFive = new Vector(5, 4);
// console.log(fourFive);

Vector.prototype.plus = function(anotherVec) {
  let newVector = new Vector((this.x + this.y), (anotherVec.x + anotherVec.y));
  return newVector;
}

Vector.prototype.minus = function(anotherVec) {
  let newVector = new Vector((this.x - anotherVec.x), (this.y - anotherVec.y));
  return newVector;
}

let twoHundredHundred = new Vector(200, 100);

console.log(twoHundredHundred.plus(fourFive));
console.log(twoHundredHundred.minus(fourFive));

Vector.prototype.getLength = function() {
  let cSquared = Math.pow(this.x, 2) + Math.pow(this.y, 2);
  let length = Math.sqrt(cSquared)
  return length;
}

let threeFour = new Vector(3, 4);

console.log(threeFour.getLength());
