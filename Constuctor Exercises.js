function Person(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName
}
Person.prototype.fullName = function() {return this.fullName = this.firstName + " " + this.lastName + " " + this.middleName};


let corey = new Person("Corey", "Loadovsky", "Catman");
let danielle = new Person('Danielle', "Cherry", "Renee");
// console.log(corey["firstName"]);

console.log(corey.fullName())

// ## Question 2
// a. Create a constructor function called `Book` that has properties 
// `title`, `author` and `rating`. Create some instances of `Book`.
// b. Add a prototype function to `Book` called `isGood` that returns 
// `true` if its rating is greater than or equal to 7

function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    
}
let harris = new Book("True blood", "C. Harris", 4);
let haverbeke = new Book("Eloquent JavaScript", "Marijn Haverbeke", 8);

Book.prototype.isGood = function() {
    if(this.rating >= 7) {
        return true
    } else {
        return false
    }
}
console.log(haverbeke.isGood());

// ## Question 3
// a. Create a `Dog` constructor function with four properties: 
// `name (string), breed (string), mood (string), and hungry (boolean)`.
// b. Add a prototype function called `playFetch`. It should set the dog's 
// `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
// c. Add a prototype function called `feed`. If the dog is hungry, 
// it should set `hungry` to `false` and print "Woof!" If the dog is not 
// hungry, it should log "The dog doesn't look hungry"
// d. Add a prototype function called `toString` that returns a description
//  of the dog:

function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}

Dog.prototype.playFetch = function() {
    this.hungry = true;
    this.mood = "playful";
    console.log("Ruff!");
}

Dog.prototype.feed = function() {
    if(this.hungry === true) {
        console.log(false)
    } else {
        console.log("The dog doesn't look hungry")
    }

}

Dog.prototype.toString = function() {
    return this.name + " is a " + this.breed + " " + this.mood + " " + this.hungry
}

let pokey = new Dog("Pokey", "huskey", "playful", false)
let roxy = new Dog("Roxy", "mutt", "playful", false)

console.log(roxy.playFetch())


// ## Question 4

// There are three common scales that are used to measure 
// temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three 
// properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values 
// equal to the freezing point of water.

// b. Make a constructor function called `Celsius` that has one 
// property: `celsius`, and two methods `getFahrenheitTemp`, 
// and `getKelvinTemp`.

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```

// c. Give `Celsius` a prototype function called `isBelowFreezing` 
// that returns a `Bool` (true if the temperature is below freezing).

let freezingPoint = {celsius: 0 , fahrenheit: 32, kelvin: -273}

function Celsius(celsius) {
    this.celsius = celsius;
}
Celsius.prototype.getFahrenheitTemp = function(){
    return this.getFharenheitTemp = 1.8 * this.celsius + 32
}
Celsius.prototype.getKelvinTemp = function() {
    return this.getKelvinTemp = this.celsius + 273;
}

Celsius.prototype.isBelowFreezing = function() {
    if(this.celsius <= 0) {
        return true
    } else {
        return false
    }
}

let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius) //returns 10.0
console.log(outsideTempt.getKelvinTemp()) //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()) //returns 50.0


