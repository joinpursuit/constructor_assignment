// //Question 1a

// function Person (firstName, lastName, middleName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.middleName = middleName
// }
  
// let cassidy = new Person("Cassidy", "Beni", "E")
// let john = new Person("John", "Doe", "Michael")
  
// console.log(cassidy["firstName"])

// //Question 1b

// Person.prototype.fullName = function() {
//     return `${this.firstName} ${this.middleName} ${this.lastName}`
// }

// console.log(cassidy.fullName())

// //Question 2a

// function Book (title, author, rating) {
//     this.title = title
//     this.author = author
//     this.rating = rating
// }

// let firstBook = new Book ("Of Mice and Men", "John Steinbeck", 10)
// let secondBook = new Book ("Insomnia", "Stephen King", 10)

// //Question 2b

// Book.prototype.isGood = function() {
//     if(this.rating >= 7) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(firstBook.isGood())

// //Question 3a - 3d

// function Dog (name, mood, breed, hungry) {
//     this.name = name
//     this.mood = mood
//     this.breed = breed
//     this.hungry = hungry
// }

// Dog.prototype.playFetch = function() {
//     this.hungry = true
//     this.mood = "playful"
//     console.log("Ruff!")

// }

// Dog.prototype.feed = function() {
//     if(this.hungry) {
//         this.hungry = false
//         console.log("Woof!")
//     } else {
//         console.log("The dog doesn't look hungry")
//     }

// }

// Dog.prototype.toString = function() {
//     return `${this.name} is a ${this.mood} ${this.breed} and it is ${this.hungry} that he is hungry.`
    
// }

// let ace = new Dog("Ace", "playful", "poodle", true)
// ace.playFetch()
// ace.feed()
// console.log(ace.toString())

// //Question 4a

// let freezingPoint = {
//     celsius: 0,
//     fahrenheit: 32,
//     kelvin: 273
// }

// //Question 4b

// function Celsius (celsius) {
//     this.celsius = celsius 
// }

// Celsius.prototype.getFahrenheitTemp = function () {
//     return (this.celsius * 1.8) + 32
// }

// Celsius.prototype.getKelvinTemp = function () {
//     return this.celsius + 273
// }

// //Question 4c

// Celsius.prototype.isBelowFreezing = function () {
//     if(this.celsius <= freezingPoint.celsius) {
//         return true
//     } else {
//         return false
//     }
// }

// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// console.log(outsideTempt.isBelowFreezing())

//Question 5a

function Movie (name, year, genre, cast, description) {
    this.name = name,
    this.year = year,
    this.genre = genre,
    this.cast = cast,
    this.description = description
}

let beetlejuice = new Movie("Beetlejuice", 1988, "Comedy/Horror", ["Winona Ryder", "Alec Baldwin", "Michael Keaton"], "After Barbara (Geena Davis) and Adam Maitland (Alec Baldwin) die in a car accident, they find themselves stuck haunting their country residence, unable to leave the house")
