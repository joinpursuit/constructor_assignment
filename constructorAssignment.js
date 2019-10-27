console.log("## Question 1")

//a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
console.log("a.")
function Person (firstName, middleName, lastName) {
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
}

let miles = new Person("Miles", "Ely", "Belize")
let Phill = new Person("Phill", "Swag", "Johnson")
console.log(miles)


console.log("b.")

//b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
Person.prototype.fullName = function(){console.log(this.firstName + " " +  this.middleName + " " + this.lastName)}
miles.fullName();

console.log("## Question 2")

//a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
console.log("a.")

function Book (title, author , rating){
  this.title =title;
  this.author = author;
  this.rating = rating;
}
let book1 = new Book ("outsiders", "S.E Hinton", 9);
let book2 = new Book ("Animal Farm", "George Orwell", 5);
console.log(book2);
console.log("b.")
Book.prototype.isGood = function(){
 if(this.rating >= 7){
  return true;
} else {
  return false;
}
}
console.log(book2.isGood())


console.log("## Question 3")
console.log("a.")

//a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

function Dog (name, breed, mood, hungry){
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}
console.log("b.")

Dog.prototype.playFetch = function () {
  this.hungry = true;
  this.mood = "playful";
  return "Ruff!"
}

let toto = new Dog ("Toto", "Terrain", "happy", false)
// console.log(toto.playFetch())
// console.log(toto)

console.log("c.")

Dog.prototype.feed = function (){
  if(this.hungry=== true){
    this.hungry = false
    return "Woof!"
  } else {
    return "The dog doesn't look hungry"
  }
}
console.log(toto.feed())

console.log("d.")

Dog.prototype.toString = function (){
  return this.name + " is a " + this.breed + " dog. Whose mood is " + this.mood + " and people always think this dog is hungry which is " + this.hungry + "."
}
console.log(toto.toString())

