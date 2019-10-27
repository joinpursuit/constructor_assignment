/* ## Question 1

a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. 
Create 2 instances of a `Person`. Print one of their first names. */

/* b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. 
Call this method on both the instances you created in part a. */

// function Person(firstName, middleName, lastName) {
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.lastName = lastName;
// }

// Person.prototype.fullName = function() {
//     return this.firstName + " " + this.middleName + " " + this.lastName
// }

// let phil = new Person("Phil", "O", "Awich")
// let john = new Person("John", "A", "Jones")
// console.log(phil)
// console.log(john)
// console.log(phil.fullName())

// ## Question 2

// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

// function Book(title, author, rating) {
//     this.title = title;
//     this.author = author;
//     this.rating = rating;
// }
//     let harryPotter = new Book("Harry potter", "J K Rowling", 5);
//     let gameOfThrone = new Book("Game of Thrones", "George R R Martin", 9)

// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

// Book.prototype.isGood = function() {
//     if(this.rating >= 7){
//         return true;
//     } else {
//         return false
//     }
// }

// console.log(harryPotter.isGood())

// ## Question 3

// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}
Dog.prototype.playFetch = function() {
        this.hungry = true 
        this.mood = "playful"
        console.log("ruff")
}
Dog.prototype.feed = function() {
    if (this.hungry === true) { 
        this.hungry = false
        console.log("woof")
    } else {
        console.log("the dog doesn't look hungry")
    }
}
Dog.prototype.toString = function() {
    console.log(`${this.name} is a ${this.breed} and is ${this.mood} and hunger is ${this.hungry}.`)
}

let airBud = new Dog("Air Bud", "Golden Retriever", "Angry", false)
let catDog = new Dog("Cat Dog", "Weiner Dog", "Crazy", true)

// airBud.playFetch()
// console.log(airBud)
// airBud.playFetch()
// airBud.feed()
// airBud.toString()

// catDog.playFetch()
// catDog.feed()
// catDog.toString()

// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// d. Add a prototype function called `toString` that returns a description of the dog: