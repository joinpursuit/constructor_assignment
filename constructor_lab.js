// # Constructor Exercises
//
// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties:
//a first name, a last name and a middle name. Create 2 instances of a `Person`.
//Print one of their first names.
console.log('----- Question 1a -----');
function Person(first, last, middle) {
  this.first = first;
  this.last = last;
  this.middle = middle;
}

let beyonce = new Person('Beyoncé', 'Knowles-Carter', 'Giselle');
let solange = new Person('Solange', 'Knowles', 'Piaget');
console.log(beyonce.first);
console.log('');

// b. Write a prototype function in `Person` called `fullName` that will
//return a formatted string of an instance's full name. Call this method on both
//the instances you created in part a.
console.log('----- Question 1b -----');
Person.prototype.fullname = function () {
  console.log(`${this.first} ${this.middle} ${this.last}`);
};

beyonce.fullname();
solange.fullname()
console.log('');

// ## Question 2
// a. Create a constructor function called `Book` that has
//properties `title`, `author` and `rating`. Create some instances of `Book`.
console.log('----- Question 2a -----');
function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
};
let book1 = new Book('26a', 'Diana Evans', 8.4);
let book2 = new Book('The Coldest Winter Ever', 'Sister Souljah', 9);
let book3 = new Book('Genesis Begins Again', 'Alicia D. Williams', 10);
console.log('');
// b. Add a prototype function to `Book` called `isGood`
//that returns `true` if its rating is greater than or equal to 7
console.log('----- Question 2b -----');
Book.prototype.isGood = function (rating) {
  if (this.rating >= 7) {
    return true;
  } return false;
}

console.log(book1.isGood());
console.log('');

// ## Question 3
// a. Create a `Dog` constructor function with four
//properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log('----- Question 3a -----');
let dog1 = new Dog('Lucky', 'Beagle', 'happy', true);

function Dog(name, breed, mood, hungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}
console.log('');
// b. Add a prototype function called `playFetch`.
//It should set the dog's `hungry` property to `true`, set its mood
//property to `playful`, and log "Ruff!"
console.log('----- Question 3b -----');
Dog.prototype.playFetch = function () {
  this.hungry = true;
  this.mood = 'playful';
  console.log('Ruff');
}
console.log(dog1.playFetch)
console.log('');
// c. Add a prototype function called `feed`.
//If the dog is hungry, it should set `hungry` to `false` and print "Woof!"
//If the dog is not hungry, it should log "The dog doesn't look hungry"
console.log('----- Question 3c -----');
Dog.prototype.feed = function () {
  if (hungry) {
    hungry = false;
     return console.log('Woof');
  } else {
     console.log('The dog doesn\'t look hungry');
  }
};

console.log(dog1.feed)
console.log('');
// d. Add a prototype function called `toString` that returns a description of the dog:
console.log('----- Question 3d -----');
//
// ## Question 4
// There are three common scales that are used to measure
//temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three
//properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values
//equal to the freezing point of water.
console.log('----- Question 4a -----');
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 373.15,
}
console.log('');
// b. Make a constructor function called `Celsius` that has one
// property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
console.log('----- Question 4b -----');
function Celsius () {

}
console.log('');
// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
console.log('----- Question 4c -----');
console.log('');

// ## Question 5
//
// a. Create a constructor function called `Movie` that has properties
//for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
console.log('----- Question 5a -----');
function Movie (name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
  Movie.prototype.blurb = function () {
  console.log(`${this.name} came out in ${this.year}. It was a ${this.genre} film starring ${cast}, as ${description}.`)
  }
}
let movie1 = new Movie ('The Cheetah Girl', '2003', 'Musical',
['Raven-Symoné', 'Adrienne Bailon', 'Kiely Williams', 'Sabrina Bryan'], 'four teens aim to take the world by storm with their music.')
console.log(movie1.blurb);
console.log('');

// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
console.log('----- Question 5b -----');

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
console.log('----- Question 6 -----');
