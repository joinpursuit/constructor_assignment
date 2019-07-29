// # Constructor Exercises

// ## Question 1

console.log(`Question 1a.Write  a constructor function called 'Person' that has 3 properties: a first name, a last name and a middle name. 
Create 2 instances of a 'Person'. Print one of their first names.
`);
 function Person (firstName,middleName,lastName){
     this.firstName =firstName;
     this.middleName =middleName;
     this.lastName = lastName;
        }

 let barack = new Person ('Barack', 'Hussein', 'Obama');
 let james = new Person ('James','Theodore','Holden');
 
console.log(barack.firstName);

console.log(`\n1b.rite a prototype function in 'Person' called 'fullName' that will return a 
formatted string of an instance's full name. Call this method on both the instances you created in part a.`);

Person.prototype.fullName = function () {
    console.log(`\n This person is: ${this.firstName} ${this.middleName} ${this.lastName}`); 
}
barack.fullName();

// ## Question 2

// a. Create a constructor function called 'Book' that has properties 'title', 'author' and 'rating'. Create some instances of 'Book'.
 function Book (title,author,rating){
     this.title = title;
     this.author =author;
     this.rating= rating;
 }
let wayOfKings = new Book ('The way of King', 'Brandon Sanderson', 9);
let nameOfWind = new Book ('The Name of the Wind', 'Patrick Rothfuss', 7);
let tiamatsWrath = new Book("Timat's Wrath", 'James A. Corey', 8 );


console.log(`\n2b. Add a prototype function to 'Book' called 'isGood' that returns 'true' if its rating is greater than or equal to 7`);

Book.prototype.isGood = function () {
    if (this.rating > 7){
        return true
    } else {
        return false
    }
}
 console.log(wayOfKings.isGood());
// ## Question 3

// a. Create a 'Dog' constructor function with four properties: 'name (string), breed (string), mood (string), and hungry (boolean)'.
function Dog (name,breed,mood,hungry){
    this.name =name;
    this.breed =mood;
    this.hungry = hungry;
}
// b. Add a prototype function called 'playFetch'. It should set the dog's 'hungry' property to 'true', set its mood property to 'playful', and log "Ruff!"
Dog.prototype.playFetch = function (){
    this.hungry = true;
    this.mood = 'playful'
    console.log('Ruff');
}

// c. Add a prototype function called 'feed'. If the dog is hungry, it should set 'hungry' to 'false' and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
Dog.prototype.feed = function() {
    if (this.hungry !== true){
        this.hungry = false
        console.log('woof'); 
    }
    console.log("This dog doesn't look hungry"); 
}

// d. Add a prototype function called 'toString' that returns a description of the dog:
Dog.prototype.toString = function (){
    console.log(`the name of the dog is: ${this.name} and it is ${this.mood}`);
}

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called 'freezingPoint' that has three properties: 'celsius', 'fahrenheit', and 'kelvin'. Give them all values equal to the freezing point of water.
let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.2,
}

// b. Make a constructor function called 'Celsius' that has one property: 'celsius', and two methods 'getFahrenheitTemp', and 'getKelvinTemp'.

// ```js
// let outsideTempt = new Celsius(10.0)
// tenDegreesCelsius.celsius //returns 10.0
// tenDegreesCelsius.getKelvinTemp() //returns 283.0
// tenDegreesCelsius.getFahrenheitTemp() //returns 50.0
// ```
function Celsius (celsius){
    this.celsius = celsius;
}
//creating the getFahrenheitTemp methos
Celsius.prototype.getFahrenheitTemp = function () {
    console.log(1.8 * this.celsius + 32)
}
//creating the getKelvinTemp method
Celsius.prototype.getKelvinTemp = function (){
    console.log(this.celsius+ 273); 
}

let outsideTempt = new Celsius(10.0)
// outsideTempt.getFahrenheitTemp()
// outsideTempt.getKelvinTemp()

// c. Give `Celsius` a constructor function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
 Celsius.prototype.isBelowFreezing = function () {
   return  this.celsius < 0
 }
// ## Question 5

// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
function Movie (name,year,genre,cast,description){
    this.name =name;
    this.year =year;
    this.genre = genre;
    this.cast =cast;
    this.description =description;    
}

let jumper = new Movie('Jumper',2008,'action','Hayden Christensen, Samuel L. Jackson', 'battle between good and evil');

console.log(`\n5b.Create an prototype function inside 'Movie' called 'blurb' that returns a formatted string describing the movie.`);

Movie.prototype.blurb = function (){
    console.log(`${this.name} released in ${this.year} it was an ${this.genre} starring ${this.cast} about ${this.description} `);
    
}
jumper.blurb();
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."


console.log(`\n## Question 6`);

 
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
function Vector (x,y) {
    this.x = x;
    this.y =y;
}

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)

// let newVec = new Vector(3,4)
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
Vector.prototype.plus = function (vector){
 return (this.x + vector.x)+(this.y + vector.y)
}

Vector.prototype.minus = function (vector){
    return (this.x -vector.x)-(this.x-vector.y)
}
console.log(v1.plus(v2));
console.log(v1.minus(v2));
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

Vector.prototype.getLength = function (vector){
let origin = Math.pow(this.x,2) + Math.pow(this.y,2)
// returnMath.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
return Math.sqrt(origin);
}
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// // => 5
// ```
