console.log(' ');
console.log('Question 1');
console.log('A');
console.log(' ');

//a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

function Person(firstName, lastName, middleName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.middleName = middleName;
};

let pirate = new Person('Luffy', 'Monkey', 'D');
let navyViceAdmiral = new Person('Garp', 'Monkey', 'D');

console.log(pirate.firstName);
console.log(' ');
console.log('B');
console.log(' ');

//b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

Person.prototype.fullName = function () {
  console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
};

pirate.fullName();
navyViceAdmiral.fullName();

console.log(' ');
console.log('Question 2');
console.log('A');
console.log(' ');


//a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
}

let birdBook = new Book('Of Birds and Birds', 'Chicken Dude', 6);
let batBook = new Book('Its Bat Time', 'Bat Mouse', 9);

console.log(' ');
console.log('Question 2');
console.log('B');
console.log(' ');

Book.prototype.isGood = function () {
  if (this.rating >= 7) {
    return true;
  } else {
    return false;
  }
};

console.log(batBook.isGood());

console.log(' ');
console.log('Question 3');
console.log('A');
console.log(' ');

//a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

function Dog(name, breed, mood, hungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry = false;
}

let arcanine = new Dog('Arcanine', 'Pokemon', 'Meh', false);

console.log(' ');
console.log('Question 3');
console.log('B');
console.log(' ');

//b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

Dog.prototype.playFetch = function () {
  this.hungry = true;
  this.mood = 'Playful';
  console.log('Ruff!');
};

console.log(arcanine.name);
console.log(arcanine.hungry);
console.log(arcanine.mood);
arcanine.playFetch();
console.log(arcanine.name);
console.log(arcanine.hungry);
console.log(arcanine.mood);

console.log(' ');
console.log('Question 3');
console.log('C');
console.log(' ');

//c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

Dog.prototype.feed = function () {
  if (this.hungry === true) {
    this.hungry = false;
    console.log('Woof!');
  } else {
    console.log('Dog doesnt look hungry');
  }
};

console.log(arcanine.hungry);
arcanine.feed();
console.log(arcanine.hungry);

console.log(' ');
console.log('Question 3');
console.log('D');
console.log(' ');

//d. Add a prototype function called `toString` that returns a description of the dog:

Dog.prototype.toString = function () {
  return `${this.name} is a ${this.breed}. She is currently feeling ${this.mood} and her hunger ${this.hungry}.`;
};

console.log(arcanine.toString());

console.log(' ');
console.log('Question 4');
console.log('A');
console.log(' ');

//a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273,
};

//b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

function Celsius(celsius) {
  this.celsius = celsius;
}

Celsius.prototype.getFahrenheitTemp = function () {
  return 1.8 * this.celsius + 32;
};

Celsius.prototype.getKelvinTemp = function () {
  return this.celsius + 273;
};

let outsideTempt = new Celsius(-10.0);
console.log(outsideTempt.celsius); //returns 10.0
console.log(outsideTempt.getKelvinTemp()); //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()); //returns 50.0

console.log(' ');
console.log('Question 4');
console.log('C');
console.log(' ');

//c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

Celsius.prototype.isBelowFreezing = function (currTemp) {
  if (freezingPoint.celsius > this.celsius) {
    return true;
  } else {
    return false;
  }
};

console.log(outsideTempt.isBelowFreezing(-10));

console.log(' ');
console.log('Question 5');
console.log('A');
console.log(' ');

//a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

function Movie(name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}

let myMovie = new Movie('Bear Bonds', '2016', 'Horror', ['Fo', 'Bo', 'Yo'], 'Bears take over Wall Street!');
console.log(myMovie);

console.log(' ');
console.log('Question 5');
console.log('B');
console.log(' ');

//b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.

Movie.prototype.blurb = function () {
  return `${this.name} came out in ${this.year}. Its a ${this.genre} movie staring ${this.cast}. ${this.description}`;
};

console.log(myMovie.blurb());

console.log(' ');
console.log('Question 6');
console.log(' ');

function Vector(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function (vector) {

  function ComboVectors(newX, newY) {
    this.newX = newX;
    this.newY = newY;
  };

  let sumOfVector = new ComboVectors(this.x + vector.x, this.y + vector.y);

  return sumOfVector;
};

Vector.prototype.minus = function (vector) {
  function ComboVectors(newX, newY) {
    this.newX = newX;
    this.newY = newY;
  };

  let sumOfVector = new ComboVectors(this.x - vector.x, this.y - vector.y);

  return sumOfVector;
}

Vector.prototype.getLength = function () {
    let xSquare = Math.pow(this.x, 2);
    let ySquare = Math.pow(this.y, 2);
    let squareRoot = (xSquare + ySquare) ** (0.5);
    return squareRoot;
  };

var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}

console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4);
console.log(v3.getLength());
// => 5
