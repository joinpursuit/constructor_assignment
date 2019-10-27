// # Constructor Exercises

// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
function Person(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
}
let person1 = new Person("Ashya", "Lamina", "Manning")
let person2 = new Person("David", "Peter", "Maravillas")
let person3 = new Person("Jon", "Jay", "Jones")
console.log(person1.firstName)

// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
Person.prototype.fullName = function() {
    console.log(this.firstName + " " + this.middleName + " " + this.lastName)
}
person1.fullName()



// ## Question 2

// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
}
let book1 = new Book("Harry Potter", "J.K. Rowling", 8)
let book2 = new Book("Radical Candor", "Kim Scott", 10)
let book3 = new Book("The Great Gasby", "F. Scott Fitzgerald", 6)
// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
Book.prototype.isGood = function() {
    if (this.rating >= 7) {
        return true
    } else {
        return false
    }
}
console.log(book1.isGood())



// ## Question 3

// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}
let happy = new Dog("Happy", "pug", "happy", true)
let chip = new Dog("Chip", "dalmation", "hyper", false)

// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
Dog.prototype.playFetch = function() {
    this.hungry = true;
    this.mood = "playful";
    console.log("Ruff")
}
happy.playFetch()
console.log(happy)

// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
Dog.prototype.feed = function() {
    if (this.hungry === true) {
        return this.hungry = false
    } else {
        return "This dog doesn't look hungry!"
    }
}
console.log(chip.feed())

// d. Add a prototype function called `toString` that returns a description of the dog:
Dog.prototype.toString = function() {
    return this.name + " is a " + this.breed + " who is always " + this.mood
}
console.log(chip.toString())

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
let freezingPoint = {"celsius": 0, "fahrenheit": 32, "kelvin": 273}

// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
function Celsius(celsius) {
    this.celsius = celsius;
}
Celsius.prototype.getFahrenheitTemp = function() {
    return this.celsius * 1.8 + 32;
}
Celsius.prototype.getKelvinTemp = function() {
    return this.celsius + 273;
}

// ```js
let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
console.log(outsideTempt.celsius)
console.log(outsideTempt.getKelvinTemp())
console.log(outsideTempt.getFahrenheitTemp())

// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
Celsius.prototype.isBelowFreezing = function() {
    if (this.celsius < 0) {
        return true
    } else {
        return false 
    }
}

console.log(outsideTempt.isBelowFreezing())

// ## Question 5

// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
function Movie (name,year,genre,cast, description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
}
let movie = new Movie( "harry potter" , 2009, "fantasy", "Daniel Radcliff", "battle of the wizards")

// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.

Movie.prototype.blurb = function(){
    return this.name + " was made in " + this.year + " was a " + this.genre + " film about " + this.description
}

console.log(movie.blurb())

// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."


// ## Question 6
 
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

function Vector(x,y){
    this.x = x;
    this.y = y
}

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
Vector.prototype.plus = function(newVector){
    let newX = this.x + newVector.x;
    let newY = this.y + newVector.y
    let newVec = new Vector(newX,newY)
    return newVec
}

Vector.prototype.minus = function(newVector){
    let newX = this.x - newVector.x;
    let newY = this.y - newVector.y
    let newVec = new Vector(newX,newY)
    return newVec
}



// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

Vector.prototype.getLength = function(){
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))

}

// ```js
let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// // => 5
// ```

// ## Question 7

// a. Write a constructor function called `Cylinder` that has properties `radius` and `height`.  Create an instance of a Cylinder.
function Cylinder(radius, height){
    this.radius = radius;
    this.height = height;
}

let cylinder1 = new Cylinder (4,7)

// b. Add a prototype function `getVolume` that returns the [volume](https://www.mathopenref.com/cylindervolume.html)

Cylinder.prototype.getVolume = function(){
    return Math.PI*Math.pow(this.radius,2)*this.height
}

console.log(cylinder1.getVolume())
// c. Add a prototype function `getSurfaceArea` that returns the [surface area](https://www.mathopenref.com/cylinderareamain.html)
Cylinder.prototype.getSurfaceArea = function(){
    return Math.PI*Math.pow(this.radius,2)
}

console.log(cylinder1.getSurfaceArea())

// ## Question 8

// [Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)

// a. Write a constructor function called `Post` that has properties `datePosted`, `user`, and `text`.  Create an array of `Post` objects.

function Post(datePosted,user, text) {
    this.datePosted = datePosted;
    this.user = user
    this.text = text
}

let post1 = new Post(new Date("2019/10/27"),"corey","hi")
let post2 = new Post(new Date("2019/10/26"),"john","bye")
let post3 = new Post(new Date("2019/10/25"),"celine","bonjour")

posts = [post1,post2,post3]
console.log(posts)
// b. Create a prototype function that returns whether or not the post was made today.
Post.prototype.madeToday= function(){
     if(this.datePosted.getDate() === new Date().getDate()){
        return true
    } else{
        return false
    }
}

console.log(posts.map(el =>{
    return el.madeToday()
}))

// c. Filter your array of `Post` objects to only include posts made today.

console.log(posts.filter(el =>{
    return el.datePosted.getDate() === new Date().getDate()
}))