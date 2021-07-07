// ## Question 1
// a. Write a constructor function called `Person` that has 3 properties:
//  a first name, a last name and a middle name. Create 2 instances of a
//   `Person`. Print one of their first names.
console.log("Question 1")
function Person(firstname,lastname, middlename){
  this.firstname = firstname;
  this.lastname = lastname;
  this.middlename = middlename

}
let first = new Person("Briany","Taveras", "Rosalia")
let second = new Person("Kadijah", "Wilson", "Christina ")
console.log(first)
console.log(second)

// b. Write a prototype function in `Person` called `fullName` that will
//  return a formatted string of an instance's full name. Call this method
//  on both the instances you created in part a.
Person.prototype.fullName = function(){
  console.log(`${this.firstname} ${this.middlename} ${this.lastname}`)
}
first.fullName()
second.fullName()

// ## Question 2
// a. Create a constructor function called `Book` that has properties
// `title`, `author` and `rating`. Create some instances of `Book`.
console.log("Question 2")
function Book(title, author, rating){
  this.title = title,
  this.author = author,
  this.rating = rating
}
let jp = new Book('100 Stories You Will Never Forget', "J. P. Vaswani", 4.5)
let rhonda = new Book("The Secret", "Rhonda Byrne", 4.6)
let victor = new Book("The Alien Artifact", "Victor Bertolaccinni", 1.7)
let fake = new Book("Making this up", "John Doe", 5.2)

console.log(`${jp.title}${jp.author}${jp.rating}`)
console.log(`${rhonda.title}${rhonda.author}${rhonda.rating}`)
console.log(`${victor.title}${victor.author}${victor.rating}`)
console.log(`${fake.title}${fake.author}${fake.rating}`)
// b. Add a prototype function to `Book` called `isGood` that returns
// `true` if its rating is greater than or equal to 5
Book.prototype.isGood = function() {
console.log(this.rating >= 5)
}

jp.isGood()
rhonda.isGood()
victor.isGood()
fake.isGood()

// ## Question 3
// a. Create a `Dog` constructor function with four properties:
// `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log("Question 3")

function Dog(name,breed, mood, hungry){
  this.name =name,
  this.breed = breed,
  this.mood = mood,
  this.hungry = hungry
}
let dog = new Dog("Snoop", "Yorkie", "Grumpy", false)
console.log(dog)
// b. Add a prototype function called `playFetch`. It should set the
//  dog's `hungry` property to `true`, set its mood property to `playful`,
//and log "Ruff!"
Dog.prototype.playFetch = function(){
  dog.hungry = true,
  dog.mood = "playful"
  console.log(`${dog.name}: Ruff!`)
}
dog.playFetch()
console.log(dog)

// c. Add a prototype function called `feed`.
//  If the dog is hungry, it should set `hungry` to `false`
//  and print "Woof!" If the dog is not hungry, it should log
//   "The dog doesn't look hungry"
Dog.prototype.feed = function(){
  if(dog.hungry === false){
    console.log("Woof !")
  }else{
    console.log("The dog doesn't look hungry")
  }
}
dog.feed()
// d. Add a prototype function called `toString` that returns a
//  description of the dog:
Dog.prototype.toString = function(){
console.log(`${this.name} ${this.breed} ${this.mood}`)
}
dog.toString()

// ##Question 4
// There are three common scales that are used to measure temperature:
// Celsius, Fahrenheit, and Kelvin:
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273.15
console.log("Question 4")
// a. Make an object called freezingPoint that has three properties:
// celsius, fahrenheit, and kelvin. Give them all values equal to the
// freezing point of water.
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin:273.15
}
console.log(freezingPoint)
// b. Make a constructor function called Celsius that has one property:
//  celsius, and two methods getFahrenheitTemp, and getKelvinTemp.
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
function Celsius (celsius){
this.celsius = celsius,
this.getFahrenheitTemp = function(){
  return 1.8 * celsius + 32;
}
 this.getKelvinTemp = function (){
  return celsius + 273.15;
}
}

let outsideTempt = new Celsius(10)

//outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
console.log(outsideTempt)
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.getKelvinTemp())
// c. Give Celsius a prototype function called isBelowFreezing that
//  returns a Bool (true if the temperature is below freezing).
Celsius.prototype.isBelowFreezing = function(){
  console.log(this.celsius < 0)
   }
   // outsideTempt = new Celsius(-1)
outsideTempt.isBelowFreezing();

// ## Question 5
// a. Create a constructor function called `Movie` that has properties
//  for `name`, `year`, `genre`, `cast`, and `description`. Create an
//  instance of your `Movie`
console.log("Question 5")
function movie(name,year,genre,cast,description){
  this.name=name
  this.year =year,
  this.genre = genre,
  this.cast = cast,
  this.description = description
}
let taxi  = new movie("taxi", 2004, "Thiller/Action", ["Jimmy Fallon", "Queen Latifah"], "After a slew of traffic accidents, police Detective Andy Washburn (Jimmy Fallon) has his driver's license revoked by his lieutenant (Jennifer Esposito), who also demotes him. One day on duty, Andy hears of a bank robbery and hails a taxi driven by Belle (Queen Latifah), a new cabbie. During a chase, they lose the robbers, a group of models led by Vanessa (Gisele Bündchen), and Belle's taxi is impounded. Andy promises to get the car back for Belle if she helps him catch the thieves.")

console.log(taxi instanceof movie)

// b. Create an prototype function inside `Movie` called `blurb` that
// returns a formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron
// Cohen as a man named Borat who was visiting America from Kazakhstan."
movie.prototype.blurb = function() {
  console.log(`${this.name} came out in ${this.year}. it is an ${this.genre} starring ${this.cast}`)
}
taxi.blurb()

// ## Question 6
//  Write a constructor Vector that represents a vector in two-dimensional
//  space.It takes two number arguments: `x` and `y` parameters, which it
// should be saved to properties of the same name.
// Give the Vector prototype two methods, `plus` and `minus`, that
// take another vector as an argument and returns a new vector that has
// the sum or difference of the two vectors’ (the one in `this` and the
//    parameter) x and y values.
// Add a method `getLength` to the prototype that computes the length
// of the vector ; that is, the distance of the point (x, y) from the
// origin (0, 0).(a^2 + b^2 = c^2)

// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5

function Vector(x, y) {
  this.x = x,
  this.y = y
}

let v1 = new Vector(1,2)
let v2 = new Vector(2,3)
let v3 = new Vector(3,4)

Vector.prototype.plus = function(v) {
  return `x: ${this.x + v.x} , y: ${this.y + v.y}`
}
Vector.prototype.minus = function(v) {
  return `x: ${this.x - v.x} , y: ${this.y - v.y}`
}
Vector.prototype.getLength = function() {
  return `${Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))}`
}
console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v3.getLength());
