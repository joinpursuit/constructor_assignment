// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties:
// a first name, a last name and a middle name. Create 2 instances of a `Person`.
// Print one of their first names.

function Person(firstName, lastName, middelName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middelName = middelName;
}
Person.prototype.fullName = function() {console.log(this.firstName + " " + this.middelName + " " + this.lastName)}



// b. Write a prototype function in `Person` called `fullName` that will return
// a formatted string of an instance's full name. Call this method on both the
// instances you created in part a.

let jason = new Person("Jason", "Allen", "Pearson")
let gillian = new Person("Gillian", "Maria", "A")
console.log(jason.firstName)
jason.fullName()
gillian.fullName()

// 2. ## Question 2
// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`.
// Create some instances of `Book`.

function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
}
Book.prototype.isGood = function() {
    if(this.rating >= 7) {
        return true
    } else {
        return false
    }
}
let Potter = new Book("Harry Potter", "J.K. Rowling", 6.5)
let Points = new Book("Decision Points", "George W. Bush", 2)
let Gatsby = new Book ("The Great Gatsby", "F. Scott Fitzgerald", 8)
console.log(Potter.isGood())

// b. Add a prototype function to `Book` called `isGood` that returns `true` if its
// rating is greater than or equal to 7


// ## Question 3

// a. Create a `Dog` constructor function with four properties: `name (string),
// breed (string), mood (string), and hungry (boolean)`.

// b. Add a prototype function called `playFetch`.
// It should set the dog's `hungry` property to `true`, set its mood property to `playful`,
// and log "Ruff!"

// c. Add a prototype function called `feed`. If the dog is hungry, it should
//set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog
// doesn't look hungry"

// d. Add a prototype function called `toString` that returns a description of the dog:

function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}
Dog.prototype.playFetch = function() {
    this.hungry = true;
    this.mood = "playful";
    return "Ruff Ruff!"
}
Dog.prototype.feed = function() {
    if(this.hungry = false) {
        return "Woof!"
    } else {
        return "The dog doesn't look hungry!"
    }
}
Dog.prototype.toString = function() {
return this.toString = "This dog is named " + this.name + " and she is a " + this.breed + ". She is " + this.mood + " and it's " + this.hungry + " that she's hungry.";
}

let zola = new Dog("Zola", "Pitbull", "Tired", false)
console.log(zola.playFetch())
console.log(zola.feed())
console.log(zola.toString())

// Question 4
  freezingPoint = {celsius:0, fahrenheit: 32, kelvin: 273}
  celsius
  function celsius(celsius){
    this.celsius = celsius
    }
  celsius.prototype.getFahrenheitTemp = function () {return (1.8 * this.celsius) + 32}
  celsius.prototype.getKelvinTemp = function() {return (this.celsius + 273)}

  let outsideTempt = new celsius (10.0)
  console.log(outsideTempt.getFahrenheitTemp());
  console.log(outsideTempt.getKelvinTemp());

  // QUESTION: 5
  function Movie(name, year, genre, cast, description){
    this.name = name;
    this.year = year;
    this. genre = genre;
    this.cast = cast;
    this.description = description;
    Movie.prototype.blurb = function() {return this.name + " is a film from " + this.year + " is an " + this.genre + " film. Starring " + this.cast + " is about " + this.description}
  }
let borat = new Movie ("Borat", 2006, "odd", "Sacha Baron Cohen", "man named Borat who was visiting America from Kazakhstan.")
console.log(borat.blurb());

// QUESTION:6
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function (vector) {
   return new Vector(this.x + vector.x, this.y + vector.y)
}
Vector.prototype.minus = function (vector) {
   return new Vector(this.x - vector.x, this.y - vector.y)
}
Vector.prototype.getLength = function (vector) {
   return (Math.sqrt((this.x * this.x) + (this.y * this.y)))
}
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
console.log(v1.minus(v2));
var v3 = new Vector(3, 4)
console.log(v3.getLength());



// QUESTION: 7
function Cylinder (radius,height){
  this.radius = radius;
  this.height = height;
}
Cylinder.prototype.getVolume = function() {return (Math.PI * (this.radius * this.radius) * this.height)}
Cylinder.prototype.getSurfaceArea = function() {return (2* Math.PI * this.radius * this.height) + 2* Math.PI * (this.radius * this.radius)}
let cylinder = new Cylinder(15,20)
console.log(cylinder.getVolume());
console.log(cylinder.getSurfaceArea());

// QUESTION: 8
function Post(datePosted,user,text){
    this.datePosted = datePosted
    this.user = user
    this.text = text
 }
 let todayDate = new Date()
 Post.prototype.today = function (){
    if (todayDate.getYear() === this.datePosted.getYear() && todayDate.getMonth() === this.datePosted.getMonth() && todayDate.getDay() === this.datePosted.getDay()){
        return true
    }else{
       return false
    }
 }
 let post1 = new Post(new Date("October 31 2018"),'dug','hi')
 let post2 = new Post(new Date("October 27 2019"),'dug','bye')
 let postObj = [
    post1,
    post2
 ]
 console.log(todayDate)
 // console.log(postObj)
 console.log(post2.today())
 