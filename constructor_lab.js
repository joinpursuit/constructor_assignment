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
let outsideTempt = new Celsius(.0)
console.log(outsideTempt.getKelvinTemp())
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.isBelowFreezing())