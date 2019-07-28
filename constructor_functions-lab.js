// # Constructor Exercises
//
// ## Question 1
//
// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
//
function Person (firstName, lastName, middleName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.middleName = middleName;
}
let owen = new Person('Owen', 'Jones', 'Riley')
let connor = new Person('Connor', 'Brennan', 'Joseph')

console.log(owen.firstName)

//
// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
//
Person.prototype.fullName = function (str) {
  console.log(this.firstName, this.middleName, this.lastName)
}
owen.fullName();
connor.fullName();

//
// ## Question 2
//
// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
//
function Book (title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
}

let nineteenEightyFour = new Book('1984', 'George Orwell', 8)
let readyPlayerOne = new Book('Ready Player One', 'Ernest Kline', 6)
let atlasShrugged = new Book('Atlas Shrugged', 'Ayn Rand', 1)
let theSoundAndThefury = new Book('The Sound and The Fury', 'William Faulkner', 9)

//
// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
//
Book.prototype.isGood = function (bool) {
  if (this.rating >= 7){
    return true;
  } else {
    return false;
  };
};

console.log(nineteenEightyFour.isGood());
console.log(atlasShrugged.isGood());

// ## Question 3
//
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
//
function Dog (name, breed, mood, hungry){
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}
// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
//
Dog.prototype.playFetch = function () {
  this.hungry = true;
  this.mood = 'playful';
  console.log ('Ruff')
}

// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
//
Dog.prototype.feed = function() {
  if(this.hungry = true){
    this.hungry = false
    console.log('Woof!')
  } else if (this.hungry = false){
    console.log('The dog doesnt look hungry')
  }
}

// d. Add a prototype function called `toString` that returns a description of the dog:
//

Dog.prototype.toString = function (){
  if (this.hungry === true){
    return `${this.name} is a ${this.breed} that is ${this.mood} and when he is hungry he borks`
  } else if (this.hungry === false){
    return `${this.name} is a ${this.breed} that is ${this.mood} and when he is not hungry he sleeps`
  }
}

let fido = new Dog('Fido', 'corgi', 'happy', false)

console.log(fido.toString())
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
freezingPoint= {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273
}

//
// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// tenDegreesCelsius.celsius //returns 10.0
// tenDegreesCelsius.getKelvinTemp() //returns 283.0
// tenDegreesCelsius.getFahrenheitTemp() //returns 50.0
// ```
function Celsius (celsius) {
  this.celsius = celsius;
  this.getFahrenheit = function(){
    return celsius * 1.8 + 32;
  }
  this.Kelvin = function(){
    return celsius + 273.15;
  }
}
let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.getFahrenheit(0))
//
// c. Give `Celsius` a constructor function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
//

Celsius.prototype.isBelowFreezing = function(bool) {
  if (this.celsius < 0){
    return true
  } else {
    return false
  }
}

console.log(outsideTempt.isBelowFreezing())

// ## Question 5
//
// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
//
function Movie (name, year, genre, cast, description){
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}

let thereWillBeBlood = new Movie('There Will Be Blood', '2007','historical drama', 'Daniel Day-Lewis', 'a ruthless oil prospector that is willing to do whatever is necessary to make it in the new West' )

// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
//
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
Movie.prototype.blurb = function (mov) {
return `${this.name} came out in ${this.year}. It was a ${this.genre} film starring ${this.cast}. The movie is about ${this.description}`
}
console.log(thereWillBeBlood.blurb())

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
function Vector (x, y){
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector){
  return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector){
  return new Vector(this.x - vector.x, this.y - vector.y);
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)
console.log(v1.plus(v2));

console.log(v1.minus(v2));

Vector.prototype.getLength = function(){
  return Math.sqrt((this.x * this.x) + (this.y * this.y))
}


let v3 = new Vector(3, 4)
console.log(v3.getLength())
//
