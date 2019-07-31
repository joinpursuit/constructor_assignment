// JOSEPH P. PASAOA
//



// global function declarations
const print = function(logThis, bool) {
  bool
    ? console.log(logThis,'\n')  // for outputs
    : console.log(logThis); // for inputs
}



// 1 //
// a
print("1a // Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name.");
print("Create 2 instances of a `Person`. Print one of their first names.");
function Person(firstName, middleName, lastName) {
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
}

let william = new Person('William', 'Lloyd', 'Garrison');
let franklin = new Person('Franklin', 'Delano', 'Roosevelt');
print(william);
print(franklin);
print(william.firstName);

// b
print("1b // Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name.");
print("Call this method on both the instances you created in part a.");

Person.prototype.fullName = function() {
  return (`${this.firstName} ${this.middleName} ${this.lastName}`);
}
print(william.fullName());
print(franklin.fullName(), 1);
//


// 2 //
// a
print("2a // Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.");
function Book(title, author, rating) {
   this.title = title;
   this.author = author;
   this.rating = rating;
}

let war = new Book('War & Peace', 'Leo Tolstoy', 7);
let earthsea = new Book('A Wizard of Earthsea', 'Ursula K. Le Guin', 6);
let boiled = new Book('Hard-Boiled Wonderland & the End of the World', 'Haruki Murakami', 8);
print(war);
print(earthsea);
print(boiled);

// b
print("2b // Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7");

Book.prototype.isGood = function() {
   return this.rating >= 7;
}
print(war.isGood());
print(earthsea.isGood());
print(boiled.isGood(), 1);
//


// 3 //
// a
print("3a // Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.");

function Dog(name, breed, mood, isHungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.isHungry = isHungry;
}
let snoopy = new Dog('Snoopy', 'Beagle', 'sleepy', false);
print(snoopy);

// b
print("3b // Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`,");
print("set its mood property to `playful`, and log 'Ruff!'");

Dog.prototype.playFetch = function() {
  this.isHungry = true;
  this.mood = 'playful';
  console.log("Ruff!");
}
snoopy.playFetch();
print(snoopy);

// c
print("3c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print 'Woof!'");
print("If the dog is not hungry, it should log 'The dog doesn't look hungry'");

Dog.prototype.feed = function() {
  if (this.isHungry) {
    this.isHungry = false;
    console.log("Woof!");
  } else {
    console.log("The dog doesn't look hungry");
  }
}
snoopy.feed();
print(snoopy);

// d
print('3d. Add a prototype function called `toString` that returns a description of the dog');

Dog.prototype.toString = function() {
  let outputStr = Object.values(this);
  this.isHungry
    ? outputStr[outputStr.length - 1] = "hungry"
    : outputStr[outputStr.length - 1] = "not hungry"
  return outputStr.join(', ');
}
print(snoopy.toString(), 1);
//


// 4 //
// a
print("4a // Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`.");
print("Give them all values equal to the freezing point of water.");
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.15
}
print(freezingPoint);

// b
print("4b // Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`");
function Celsius(celsius) {
  this.celsius = celsius;
  this.getFahrenheitTemp = function() {
    return celsius * 1.8 + 32;
  }
  this.getKelvinTemp = function() {
    return (celsius + 273.15);
  }
}
let outsideTempt = new Celsius(10.0);
print(outsideTempt.celsius);
print(outsideTempt.getKelvinTemp());
print(outsideTempt.getFahrenheitTemp());

// c
print("4c // Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).");
Celsius.prototype.isBelowFreezing = function() {
  return this.celsius < freezingPoint.celsius;
}
print(`Input: ${outsideTempt.celsius}`);
print(outsideTempt.isBelowFreezing(), 1);
//


// 5 //
// a
print("5a // Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`.");
print("Create an instance of your `Movie`");

function Movie(name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}
let swiss = new Movie(
  'Swiss Army Man',
  2016,
  'drama',
  ['Paul Dano', 'Daniel Radcliffe', 'Mary Elizabeth Winstead'],
  'A hopeless man stranded on a deserted island befriends a dead body and together they go on a surreal journey to get home.'
);
print(swiss);

// b
print("5b // Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.");
Movie.prototype.blurb = function() {
  let castStr = this.cast;
  if (castStr[1]) {
    castStr[castStr.length - 1] = "and " + castStr[castStr.length - 1];
  }
  castStr = castStr.join(', ');
  return (`${this.name} came out in ${this.year}. A film of ${this.genre} starring ${castStr}.\n${this.description}`);
}
print(swiss.blurb(), 1);
//


// 6 //
print("6a // Write a constructor Vector that represents a vector in two-dimensional space.");
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
print(v1);
print(v2);

print("6b // Give the Vector prototype two methods, `plus` and `minus`");
Vector.prototype.plus = function(anotherVector) {
  let outputVector = {};
  outputVector.x = this.x + anotherVector.x;
  outputVector.y = this.y + anotherVector.y;
  return (`Vector: {x: ${outputVector.x}, y: ${outputVector.y}}`);
}
Vector.prototype.minus = function(anotherVector) {
  let outputVector = {};
  outputVector.x = this.x - anotherVector.x;
  outputVector.y = this.y - anotherVector.y;
  return (`Vector: {x: ${outputVector.x}, y: ${outputVector.y}}`);
}
print(v1.plus(v2));
print(v1.minus(v2));

print("6c // Add a method `getLength` to the prototype that computes the length of the vector");
Vector.prototype.getLength = function() {
  return (this.x ** 2 + this.y ** 2) ** (0.5);
}

var v3 = new Vector(3, 4)
print(v3.getLength(), 1);
//
