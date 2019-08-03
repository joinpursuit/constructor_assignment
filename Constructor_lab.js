// console.log('QUESTION 1A and 1B')
// //Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
// //Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
// function Person(firstName, midName, lastName) {
//   this.firstName = firstName;
//   this.midName = midName;
//   this.lastName = lastName;
//   this.sayHi = function() {
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName} `)
//   }
//   this.smile = function() {
//     console.log(`${this.firstName} smiles`)
//   }
// }
//
//
// Person.prototype.fullName = function() {
//   console.log(`${this.firstName} ${this.midName} ${this.lastName}`)
// }
//
// let aba = new Person('Angel', 'Beatriz', 'Anguila')
// let bcb = new Person('Bron', 'Cristof', 'Barington')
//
//
// console.log(aba.firstName)
// aba.fullName()
// bcb.fullName()





// console.log('QUESTION 2A and 2B')
// //Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
// //Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
// function Book(title, author, rating) {
//   this.title = title;
//   this.author = author;
//   this.rating = rating;
//   this.flip = function(num) {
//     console.log(`turn page ${num}`)
//   }
//   this.popUp = function(word) {
//     console.log(`glow ${word}`)
//   }
// }
//
// Book.prototype.isGood = function() {
//   return this.rating > 7
// }
//
// let book1 = new Book('Harry Potter and the Deathly Hallows', 'J.K. Rowling', 10)
// let book2 = new Book('The Hate U Give', 'Angie Thomas', 7)
// let book3 = new Book('Sapiens: A Brief History of Humankind', 'Yuval Harari', 4)
//
//
// console.log(book3.rating)
// console.log(book2.flip(2))
// console.log(book1.popUp('Hogwarts'))
//
// book1.isGood()
// book2.isGood()
// book3.isGood()


// console.log(' QUESTION 3A 3B 3C 3D')
// //Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
// function Dog(name, breed, mood, hungry) {
//   this.name = name;
//   this.breed = breed
//   this.mood = mood
//   this.hungry = hungry
// }
//
// let whiz = new Dog('Whiz', 'Pug', 'Chill', true)
// let dobby = new Dog('Dobby', 'Bulldog', 'Lazy', false)
// let cujo = new Dog('Cujo', 'Chihuahua', 'Feisty', true)
//
// Dog.prototype.playFetch = function() {
//   this.mood = 'playful'
//   this.hungry = true
//   console.log('Ruff!')
// }
//
// Dog.prototype.feed = function() {
//   this.hungry = false
//   console.log('Woof!')
// }
//
// Dog.prototype.toString = function() {
//   console.log(whiz)
// }
//
// dobby.playFetch()
// console.log(dobby)




console.log('QUESTION 6')

function Vector(x, y) {
  this.x = x;
  this.y = y
}

Vector.prototype.plus = function(vect) {
  const newX = this.x + vect.x
  const newY = this.y + vect.y
  return new Vector(newX, newY)
}

Vector.prototype.minus = function(vect) {
  const newX = this.x - vect.x
  const newY = this.y - vect.y
  return new Vector(newX, newY)
}

Vector.prototype.getLength = function() {
  return this.x + this.y
}
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
var v3 = new Vector(3, 4)

//console.log(v1.minus(v2));

console.log(v3.getLength());
