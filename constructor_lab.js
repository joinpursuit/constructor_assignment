// ## Question 1
//
// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
function Person(firstName, lastName, middleName) {
  this.firstName = firstName
  this.lastName = lastName
  this.middleName = middleName
}

let sergio = new Person('Sergio', 'Cohen-Salama', 'Mauricio')
let carmen = new Person('Carmen', 'Cohen-Ellsworth', 'Lucile')

console.log(carmen.firstName)

//b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
Person.prototype.fullName = function() {
  console.log(this.firstName, this.middleName, this.lastName)
}

sergio.fullName()
carmen.fullName()

// ## Question 2
//
// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
function Book(title, author, rating) {
  this.title = title
  this.author = author
  this.rating = rating
}

let onTheRoad = new Book('On the Road', 'Jack Kerouac', 9)
let junky = new Book('Junky', 'William Burroughs', 8)
let howl = new Book('Howl', 'Allen Ginsberg', 10)

// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
Book.prototype.isGood = function() {
  if (this.rating >= 7) {
    return true
  } else {
    return false
  }
}

console.log(onTheRoad.isGood())

// ## Question 3
//
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
function Dog(name, breed, mood, hungry) {
  this.name = name
  this.breed = breed
  this.mood = mood
  this.hungry = hungry
}

// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
Dog.prototype.playFetch = function() {
  this.hungry = true
  this.mood = 'playful'
  console.log('Ruff!!')
}

// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
Dog.prototype.feed = function() {
  if (this.hungry === false) {
    console.log("The dog doesn't look hungry")
  } else {
    this.hungry = false
    console.log('Woof!')
  }
}

// d. Add a prototype function called `toString` that returns a description of the dog.
Dog.prototype.toString = function() {
  let hunger
  if (this.hungry === true) {
    hunger = 'is hungry right now'
  } else {
    hunger = 'is not hungry right now'
  }
  console.log(`${this.name} is a ${this.breed}. It's feeling ${this.mood} and ${hunger}.`)
}

let some = new Dog('Sam', 'cocker', 'happy', true)
some.toString()
some.feed()
some.toString()
some.feed()
some.playFetch()
some.toString()
// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273
}

// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
function Celsius(tempInCelsius) {
  this.celsius = tempInCelsius
}

Celsius.prototype.getFahrenheitTemp = function() {
  return 1.8 * (this.celsius) + 32
}

Celsius.prototype.getKelvinTemp = function() {
  return 273 + (this.celsius)
}

let temperature = new Celsius(-2)
console.log(temperature.celsius)
console.log(temperature.getFahrenheitTemp())
console.log(temperature.getKelvinTemp())

// c. Give `Celsius` a constructor function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
Celsius.prototype.isBelowFreezing = function () {
  if (temperature.celsius < 0) {
    return true
  } else {
    return false
  }
}
console.log(temperature.isBelowFreezing())

// ## Question 5
//
// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
function Movie(name, year, genre, cast, description) {
  this.name = name
  this.year = year
  this.genre = genre
  this.cast = cast
  this.description = description
}

let aSpaceOdyssey = new Movie ('2001: A Space Odyssey', 1968, 'sci-fi', 'Keir Dullea, Gary Lokwood and Douglas Rain', 'A mind-blowing journey through space and time with the outstanding direction of Stanley Kubrick based on a short story by Arthur C. Clarke.' )

// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
Movie.prototype.blurb = function() {
  console.log(`${this.name} is a ${this.genre} movie released in ${this.year}, featuring ${this.cast}. ${this.description}`)
}

aSpaceOdyssey.blurb()

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
function Vector(x,y) {
  this.x = x
  this.y = y
}

let vector1 = new Vector(3,4)
let vector2 = new Vector(1,2)

Vector.prototype.plus = function(vector) {
  let newVector = {}
  newVector.x = this.x + vector.x
  newVector.y = this.y + vector.y
  return newVector
}

Vector.prototype.minus = function(vector) {
  let newVector = {}
  newVector.x = this.x - vector.x
  newVector.y = this.y - vector.y
  return newVector
}

console.log(vector1.plus(vector2))
console.log(vector1.minus(vector2))

Vector.prototype.getLength = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

console.log(vector1.getLength())
