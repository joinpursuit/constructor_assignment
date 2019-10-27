// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

function Person(firstName, lastName, middleName){
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
}
let jay = new Person ("Jay", "Fowler", "C")
let cassidy = new Person ("Cassidy", "Beni", "Ena")
console.log(jay["firstName"])

// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.middleName} ${this.lastName}`
}
console.log(jay.fullName())

// ## Question 2

// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

function Book(title, author, rating) {
    this.title = title
    this.author = author
    this.rating = rating
}
let precious = new Book("Push", "Sapphire", 8)
let daisy = new Book("TheGreatGatsby", "F. Scott Fitzgerald", 6)
let lenny = new Book("Of Mice and Men", "John Steinbeck", 10)

// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

Book.prototype.isGood = function(){
    if(this.rating >= 7){
        return true
    } else {
        return "It's not a good book"
    }
}
console.log(precious.isGood())

// ## Question 3

// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

function Dog(name, breed, mood, hungry = false){
    this.name = name
    this.breed = breed
    this.mood = mood
    this.hungry = hungry
}



// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

Dog.prototype.playFetch = function(){
    this.hungry = true
    this.mood = "playful"
    console.log("ruff!")
    
}

// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

Dog.prototype.feed = function(){
    if(this.hungry){
        this.hungry = false
        console.log("woof!") 
    } else {
        console.log("The dog doesn't look hungry")
    }
}

// d. Add a prototype function called `toString` that returns a description of the dog:

Dog.prototype.toString = function(){
    return `${this.name} is a ${this.breed}. They are feeling ${this.mood} and it is ${this.hungry} that they are hungry.`
}
let lucky = new Dog("lucky", "dalmation", "happy", true )
lucky.playFetch()
lucky.feed()
console.log(lucky.toString())

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

const freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.2
}

// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```

function Celsius(celsius){
    this.celsius = celsius
}
Celsius.prototype.getKelvinTemp = function(){
    return this.celsius + 273
}
Celsius.prototype.getFahrenheitTemp = function(){
    return (this.celsius * 1.8) + 32
}

// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

Celsius.prototype.isBelowFreezing = function(){
    if(this.celsius <= 0){
        return true
    } else {
        return "The temp is not below freezing"
    }
}
let outsideTempt = new Celsius(0.0)
console.log(outsideTempt.getKelvinTemp())
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.isBelowFreezing())

// ## Question 5

// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

function Movie(name,year,genre,cast,description){
    this.name = name
    this.year = year
    this.genre = genre
    this.cast = cast
    this.description = description
}

let moana = new Movie("Moana","2017","Kids",["Dwayne Johnson","Jermaine Clement","Nicole Scherzinger"],"Moana is a disney movie about a young girl who saves the ocean spirit.")

// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.

Movie.prototype.blurb = function(){
    return this.description
}

// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."

console.log(moana.blurb())

// ## Question 6

// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

function Vector (x,y) {
    this.x = x
    this.y = y
}

Vector.prototype.plus = function(vector){
    return new Vector(this.x + vector["x"], this.y + vector["y"])
}

Vector.prototype.minus = function(vector){
    return new Vector(this.x + -vector["x"], this.y + -vector["y"])
}

Vector.prototype.getLength = function(){
    return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
}
let vector1 = new Vector(10,11)
let vector2 = new Vector(5,6)

console.log(vector1.plus(vector2))
console.log(vector1.minus(vector2))
console.log(vector1.getLength())