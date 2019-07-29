// ## Question 1
// a. Write a constructor function called `Person` that has 3
// properties: a first name, a last name and a middle name.
// Create 2 instances of a `Person`. Print one of their first names.
function Person(firstName, middleName, lastName) {
  this.firstName = firstName,
  this.middleName = middleName,
  this.lastName = lastName
}
let harry = new Person('Harry', 'James', 'Potter')
let ginny = new Person('Ginerva', 'Molly', 'Weasley')
console.log(harry.firstName)
// b. Write a prototype function in `Person` called `fullName` that
// will return a formatted string of an instance's full name.
// Call this method on both the instances you created in part a.
Person.prototype.fullName = function () {
  console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)
}
harry.fullName()
ginny.fullName()

// ## Question 2
// a. Create a constructor function called `Book` that has properties `title`,
// `author` and `rating`. Create some instances of `Book`.
function Book(title, author, rating) {
  this.title = title,
  this.author = author,
  this.rating = rating
}

let firstBook = new Book('The Philosophers Stone', 'J.K. Rowling', 8)
let secondBook = new Book('The Order of the Pheonix', 'J.K.Rowling', 4)
let thirdBook = new Book('The Half-Blood Prince', 'J.K. Rowling', 10)

console.log(firstBook.title)
// b. Add a prototype function to `Book` called `isGood` that returns `true`
// if its rating is greater than or equal to 7
Book.prototype.isGood = function () {
  console.log(this.rating >= 7)
  }
firstBook.isGood()
secondBook.isGood()
thirdBook.isGood()

console.log('Number 3')
// ## Question 3
// a. Create a `Dog` constructor function with four properties:
// `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log('Number 3a:')
function Dog (name, breed, mood, hungry) {
  this.name = name,
  this.breed = breed,
  this.mood = mood,
  this.hungry = hungry // function (){}
}
let oliver = new Dog('Oliver', 'Pomeranian', 'grumpy', true)
console.log(oliver)
// b. Add a prototype function called `playFetch`. It should set the dog's
// `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
console.log('Number 3b: ')
Dog.prototype.playFetch = function() {
  this.mood = 'playful'
  this.hungry = true
  console.log(`${this.name}: Ruff!`)
}
oliver.playFetch()
console.log(oliver)
// c. Add a prototype function called `feed`. If the dog is hungry, it should
// set `hungry` to `false` and print "Woof!" If the dog is not hungry,
// it should log "The dog doesn't look hungry"
console.log('Number 3c: ')
Dog.prototype.feed = function(){
  if(this.hungry === true) {
    this.hungry = false
    console.log(`${this.name}: Woof!`)
  } else {
    console.log(`${this.name} doesn't look hungry`)
  }
}
oliver.feed()
console.log(oliver)
//d. Add a prototype function called `toString` that returns a description of the dog:
Dog.prototype.toString = function() {
  console.log(`My dogs name is ${this.name}. He is a ${this.mood} ${this.breed}.`)
}
oliver.toString()
console.log('Number 4')
// There are three common scales that are used to measure temperature: Celsius,
// Fahrenheit, and Kelvin:
// C = (F - 32) / 1.8 F = 1.8 * C + 32 K = C + 273
// a. Make an object called freezingPoint that has three properties: celsius,
// fahrenheit, and kelvin. Give them all values equal to the freezing point of water.
console.log('Number4a:')
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.15
}
// b. Make a constructor function called Celsius that has one property: celsius,
// and two methods getFahrenheitTemp, and getKelvinTemp.
function Celsius (celsius) {
  this.celsius = celsius,
  this.getFahrenheitTemp = function() {
    console.log(`It is ${(celsius * 1.8) + 32} degrees in Fahrenheit`)
  }, this.getKelvinTemp = function() {
    console.log(`It is ${Math.floor(celsius + 273.15)} degrees in Kelvin`)
  }
}
let outsideTempt = new Celsius(-10.0)
console.log(`It is ${outsideTempt.celsius} degrees in Celsius`)
outsideTempt.getFahrenheitTemp()
outsideTempt.getKelvinTemp()
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// c. Give Celsius a prototype function called isBelowFreezing that returns a Bool
// (true if the temperature is below freezing).
Celsius.prototype.isBelowFreezing = function () {
  console.log(outsideTempt.celsius < freezingPoint.celsius)
}
outsideTempt.isBelowFreezing()

console.log('Number 5: ')
// ## Question 5
// a. Create a constructor function called `Movie` that has properties for `name`,
// `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
function Movie (name, year, genre, cast, description) {
  this.name = name,
  this.year = year,
  this.genre = genre,
  this.cast = cast,
  this.description = description
}
let moana = new Movie ('Moana', 2016, 'animation', ['Auli\'i Cravallo', ' Dwyane Johnson', ' Rachel House', ' Temuera Morrison', ' and Jemaine Clement'],'An adventurous teenager sails out on a daring mission to save her people. During her journey, Moana meets the once-mighty demigod Maui, who guides her in her quest to become a master way-finder. Together they sail across the open ocean on an action-packed voyage, encountering enormous monsters and impossible odds. Along the way, Moana fulfills the ancient quest of her ancestors and discovers the one thing she always sought: her own identity.' )
// b. Create an prototype function inside `Movie` called `blurb` that returns a
// formatted string describing the movie.
Movie.prototype.blurb = function () {
  return console.log(`The ${this.genre} movie ${this.name} released in ${this.year} starring: ${this.cast}. The plot is: ${this.description}`)
}
moana.blurb()

console.log('Number 6: ')
// ## Question 6
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
function Vector(x, y) {
  this.x = x,
  this.y = y
}
let v1 = new Vector(2, 5)
let v2 = new Vector(3, 2)
Vector.prototype.plus = function(vector){
  return console.log(`x: ${this.x + vector.x}, y: ${this.y + vector.y}`)
}
Vector.prototype.minus = function(vector){
  return console.log(`x: ${this.x - vector.x}, y: ${this.y - vector.y}`)
}

v1.plus(v2)
v1.minus(v2)
// Add a method getLength to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
Vector.prototype.length = function () {
  let c2 = Math.pow(this.x,2) + Math.pow(this.y,2)
  return console.log(Math.floor(Math.sqrt(c2)))
}
v1.length()
