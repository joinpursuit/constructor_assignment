console.log('------------------## Question 1--------------------------------');

// a. Write a constructor function called `Person` that has 3 properties: a
// first name, a last name and a middle name.
// Create 2 instances of a `Person`. Print one of their first names.
console.log('----Q1a----');
function Person(firstName, lastName, middleName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.middleName = middleName;
}

let chrissy = new Person('Christina', 'Rene', 'Taylor');
let littleMan = new Person('Shawn', 'Flynn', 'Quran');

console.log(chrissy.firstName);

// b. Write a prototype function in `Person` called `fullName` that will return
//a formatted string of an instance's full name. Call this method on both the
// instances you created in part a.
console.log('----Q1b----');
Person.prototype.fullName = function () {
    console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
  };

chrissy.fullName();
littleMan.fullName();

console.log('------------------## Question 2---------------------------------');

// a. Create a constructor function called `Book` that has properties
// `title`, `author` and `rating`. Create some instances of `Book`.
console.log('----Q2a----');
function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
}

let book1 = new Book('Let the Circle Be Unbroken', 'Mildred D. Taylor', 8.5);
let book2 = new Book('Emotional Intelligence 2.0', 'Travis Bradberry', 6);
let book3 = new Book('Black Privilege', 'Charlamagne Tha God', 10);
let book4 = new Book('Shook One', 'Charlamagne Tha God', 9);
let book5 = new Book('Acts of Faith', 'Iyanla Vanzant', 10);

// b. Add a prototype function to `Book` called `isGood` that returns `true`
// if its rating is greater than or equal to 7
console.log('----Q2b----');
Book.prototype.isGood = function () {
  console.log(`${this.rating}` >= 7);
};

book2.isGood();

console.log('------------------## Question 3--------------------------------');

// a. Create a `Dog` constructor function with four properties:
// `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log('----Q3a----');
function Dog(name, breed, mood, hungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}

let cookieMonster = ('Cookie', 'Porkie', 'hyper', true);
let papa = ('Benji', 'Morkie', 'calm', false);
let fitzypoo = ('Fitz', 'Morkie', 'aggressive', true);
let papito = ('Atlas', 'Pit', 'playful', true);

console.log(cookieMonster);
console.log(papa);
console.log(fitzypoo);
console.log(papito);

// b. Add a prototype function called `playFetch`. It should set the dog's
// `hungry` property to `true`, set its mood property to `playful`, and
//log "Ruff!"
console.log('----Q3b----');
Dog.prototype.playFetch = function () {
  this.hungry = true;
  this.mood = 'playful';
  console.log(`${this.name} - Ruff!`);
};

console.log(papito);
papito.playFetch();

// c. Add a prototype function called `feed`. If the dog is hungry, it should
// set `hungry` to `false` and print "Woof!" If the dog is not hungry,
// it should log "The dog doesn't look hungry"
console.log('----Q3c----');
Dog.prototype.feed = function () {
  this.hungry =  false;
  console.log("The dog doesn't look hungry");
};

papa.feed();

// d. Add a prototype function called `toString` that returns a description
//of the dog:
console.log('----Q3d----');
Dog.prototype.toString = function () {
  console.log(`My name is ${this.name} and I am extremly ${this.mood}
  ${this.breed} dog.Am I always hungry? The answer is ${this.hungry}`);
};

cookieMonster.toString();

console.log('-----------------## Question 4----------------------------------');

// There are three common scales that are used to measure temperature:
//Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties:
//`celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the
//freezing point of water.
console.log('----Q4a----');
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.2,
};

console.log(freezingPoint);
console.log(freezingPoint.celsius);

// b. Make a constructor function called `Celsius` that has one property:
//`celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
// ```js
// let outsideTempt = new Celsius(10.0)
// tenDegreesCelsius.celsius //returns 10.0
// tenDegreesCelsius.getKelvinTemp() //returns 283.0
// tenDegreesCelsius.getFahrenheitTemp() //returns 50.0
// ```
console.log('----Q4b----');
function Celsius() {
  this.celsius = celsius;
  this.getFahrenheitTemp = function () {
    console.log();
  };

  this.getKelvinTemp = function () {

  };
}

let outsideTempt = new Celsius(10);



// c. Give `Celsius` a constructor function called `isBelowFreezing` that
// returns a `Bool` (true if the temperature is below freezing).
console.log('----Q4c----');
console.log('-----------------## Question 5---------------------------------')

// a. Create a constructor function called `Movie` that has properties
// for `name`, `year`, `genre`, `cast`, and `description`.
// Create an instance of your `Movie`
console.log('----Q5a----');
function Movie(name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}

let movie1 = new Movie('Love Jones', 1997, 'drama', 'Larenz Tate & Nia Long',
'Two professional that makes an instant love connection in a Chicago club.');
let movie2 = new Movie('Coming to America', 1988, 'comedy', 'Eddie Murphy',
'Prince Akeem breaks with tradition and travels to America to find his bride');

// b. Create an prototype function inside `Movie` called `blurb` that returns
//a formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen
//as a man named Borat who was visiting America from Kazakhstan."
console.log('----Q5b----');
Movie.prototype.blurb = function () {
  console.log(`${this.name} is a ${this.genre} movie that was released in
  ${this.year} starring ${this.cast}. ${this.description}`);
};

movie1.blurb();

console.log('------------------## Question 6--------------------------------')
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be
//saved to properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another
//vector as an argument and returns a new vector that has the sum or difference
//of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the
//vector ; that is, the distance of the point (x, y) from the origin
//(0, 0).(a^2 + b^2 = c^2)
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
 console.log('----Q6----');
