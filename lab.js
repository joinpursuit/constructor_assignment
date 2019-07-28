// # Constructor Exercises

// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
console.log("Question 1:")
function Person(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
}
let khan = new Person("Sharrar", "Khan", "Zaman");
let abdula = new Person("Abdula", "Rodriguez", "Z");
console.log(khan.firstName);
// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
Person.prototype.fullName = function (firstName, lastName, middleName) {
    return console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
}
khan.fullName("Sharrar", "Zaman", "Khan");
abdula.fullName("Abdula", "Z", "Rodriguez");
console.log("---------------------------------------------------");
// ## Question 2

// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
console.log("Question 2:");
function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
}
let book1 = new Book("title1", "author1", 5);
let book2 = new Book("title2", "author2", 7);
// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
Book.prototype.isGood = function () {
    return console.log(this.rating >= 7) //this refers to the constructors rating
}
book1.isGood() //the function has a console log
console.log("---------------------------------------------------");
// ## Question 3
console.log("Question 3:")
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}
let germanShepard = new Dog("german shepard", "American", "Happy", true)
let chowChow = new Dog("chow chow", "chinese", "Happy", false);
// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
Dog.prototype.playFetch = function(hungry, mood) {
    this.hungry = true;
    this.mood = "playful";
    console.log("Ruff!");
}
// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
Dog.prototype.feed = function(hungry) {
    if(hungry === true) {
        this.hungry = false;
        console.log("Woof!")
    } else if(hungry === false) {
        console.log("The dog doesn't look hungry");
    }
}
// d. Add a prototype function called `toString` that returns a description of the dog:
Dog.prototype.toString = function () {
    return console.log(`The type of dog is: ${this.name}, and the breed is ${this.breed}`)
}
chowChow.toString();
console.log("---------------------------------------------------");
// ## Question 4
console.log("Question 4:")
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273
}
// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
// ```js
// let outsideTempt = new Celsius(10.0)
// tenDegreesCelsius.celsius //returns 10.0
// tenDegreesCelsius.getKelvinTemp() //returns 283.0
// tenDegreesCelsius.getFahrenheitTemp() //returns 50.0
// ```
function Celsius(celsius) {
    this.celsius = celsius;
    this.getFahrenheitTemp = function() {
        let temperature = 1.8 * this.celsius + 32;
        console.log(celsius);
        return temperature;
    };
    this.getKelvinTemp = function() {
        let temperature = this.celsius + 273;
        console.log(celsius);
        return temperature;
    };
}
let outsideTempt = new Celsius(10.0)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
Celsius.prototype.isBelowFreezing = function(temp) {
    if(temp === freezingPoint.celsius || temp === freezingPoint.fahrenheit || temp === freezingPoint.kelvin) {
        console.log("True");
        return true;
    }
}
console.log("---------------------------------------------------");
// ## Question 5
console.log("Question 5:")
// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
function Movie(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
}
let movie1 = new Movie("movieName", 1900, "comedy", "cast", "really funny");
// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
Movie.prototype.blurb = function() {
    return console.log(`The movie name is: ${this.name}, they year it came out was: ${this.year}, the genre is: ${this.genre}, the cast is: ${this.cast}, the description is: ${this.description}`)
}
movie1.blurb();
console.log("---------------------------------------------------");
// ## Question 6
 console.log("Question 6:")
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
Vector.prototype.plus = function() {
    console.log(this.x + this.y);
    return (this.x + this.y)
}
Vector.prototype.minus = function() {
    console.log(this.x - this.y);
    return (this.x - this.y)
}
let v1 = new Vector(5, 7);
let v2 = new Vector(2, 5);
v1.plus();
v2.minus();
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```

let v3 = new Vector(2, 5);
Vector.prototype.getLength = function() {
    let result = this.x * this.y;
    return console.log(result)
}
v3.getLength();