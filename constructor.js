// /* ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. 
// Create 2 instances of a `Person`. Print one of their first names. */

// /* b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. 
// Call this method on both the instances you created in part a. */

// // function Person(firstName, middleName, lastName) {
// //     this.firstName = firstName;
// //     this.middleName = middleName;
// //     this.lastName = lastName;
// // }

// // Person.prototype.fullName = function() {
// //     return this.firstName + " " + this.middleName + " " + this.lastName
// // }

// // let phil = new Person("Phil", "O", "Awich")
// // let john = new Person("John", "A", "Jones")
// // console.log(phil)
// // console.log(john)
// // console.log(phil.fullName())

// // ## Question 2

// // a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

// // function Book(title, author, rating) {
// //     this.title = title;
// //     this.author = author;
// //     this.rating = rating;
// // }
// //     let harryPotter = new Book("Harry potter", "J K Rowling", 5);
// //     let gameOfThrone = new Book("Game of Thrones", "George R R Martin", 9)

// // b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

// // Book.prototype.isGood = function() {
// //     if(this.rating >= 7){
// //         return true;
// //     } else {
// //         return false
// //     }
// // }

// // console.log(harryPotter.isGood())

// // ## Question 3

// // a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

// function Dog(name, breed, mood, hungry) {
//     this.name = name;
//     this.breed = breed;
//     this.mood = mood;
//     this.hungry = hungry;
// }
// Dog.prototype.playFetch = function() {
//         this.hungry = true 
//         this.mood = "playful"
//         console.log("ruff")
// }
// Dog.prototype.feed = function() {
//     if (this.hungry === true) { 
//         this.hungry = false
//         console.log("woof")
//     } else {
//         console.log("the dog doesn't look hungry")
//     }
// }
// Dog.prototype.toString = function() {
//     console.log(`${this.name} is a ${this.breed} and is ${this.mood} and hunger is ${this.hungry}.`)
// }

// let airBud = new Dog("Air Bud", "Golden Retriever", "Angry", false)
// let catDog = new Dog("Cat Dog", "Weiner Dog", "Crazy", true)

// // airBud.playFetch()
// // console.log(airBud)
// // airBud.playFetch()
// // airBud.feed()
// // airBud.toString()

// // catDog.playFetch()
// // catDog.feed()
// // catDog.toString()

// // b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

// // c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// // d. Add a prototype function called `toString` that returns a description of the dog:

// // ## Question 4

// // There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// // C = (F - 32) / 1.8
// // F = 1.8 * C + 32
// // K = C + 273

// // a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`.
// //  Give them all values equal to the freezing point of water.

// let  freezingPoint = {
//     celsius : 0,
//     fahrenheit : 32,
//     kelvin: 273

// }


// // b. Make a constructor function called `Celsius` that has one property:
// //  `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

// function Celsius (celsius){
//     this.celsius = celsius;
// }

// Celsius.prototype.getFahrenheitTemp = function() {
//     return 1.8 * this.celsius +32;
// }
// Celsius.prototype.getKelvinTemp = function() {
//     return this.celsius + 273
// }

// Celsius.prototype.isBelowFrezzing = function() {
//     if( this.celsius > freezingPoint.celsius){
//         return false
//     } else if( this.getKelvinTemp > freezingPoint.kelvin){
//         return false
//     } else if(this.getFahrenheitTemp > freezingPoint.fahrenheit){
//         return false
//     } else {
//         return true
//     }
    
    
// }

// let outsideTempt = new Celsius(-1)
// // console.log(outsideTempt.getFahrenheitTemp())
// // console.log(outsideTempt.getKelvinTemp())
// console.log(outsideTempt.isBelowFrezzing())


// // ## Question 5

// // a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

// function Movie(name, year, genre, cast, description) {
//     this.name = name;
//     this.year = year;
//     this.genre = genre;
//     this.cast = cast;
//     this.description = description
// }  
// Movie.prototype.blurb = function() {
//     return `${this.name} ${this.year} ${this.genre} ${this.cast} ${this.description}`
// }

// let transformers = new Movie("Transformers", 2007, "Action", "Shai LaBeouf", "More than meets the eyes")
// console.log(transformers.blurb())

// // b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.


// // Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."

// //

// // Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."

// // ## Question 6
 
// // Write a constructor Vector that represents a vector in two-dimensional space.
// // It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

// // Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// // returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// // Add a method `getLength` to the prototype that computes the length of the vector ;
// // that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// // [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

function Vector (x,y){
    this.x = x
    this.y = y;
}

Vector.prototype.plus = function(vector){
    let sumX = this.x + vector.x
    let sumY = this.y + vector.y
    let newVector = new Vector(sumX, sumY)
    return newVector
}

Vector.prototype.minus = function(vector){
    let minusX = this.x - vector.x
    let minusY = this.y - vector.y
    let newVector = new Vector(minusX, minusY);
    return newVector;
}

Vector.prototype.getLength = function(){
    return(Math.sqrt((this.x * this.x) + (this.y * this.y)));
}

let vec1 = new Vector(1,2);
let vec2 = new Vector(2,3);
console.log(vec1.minus(vec2))

let vec3 = new Vector(3,4)
console.log(vec3.getLength())

// // ## Question 7

// // a. Write a constructor function called `Cylinder` that has properties `radius` and `height`.  Create an instance of a Cylinder.

// // b. Add a prototype function `getVolume` that returns the [volume](https://www.mathopenref.com/cylindervolume.html)

// // c. Add a prototype function `getSurfaceArea` that returns the [surface area](https://www.mathopenref.com/cylinderareamain.html)

// function Cylinder(radius, height) {
//     this.radius = radius;
//     this.height = height;
// }
// Cylinder.prototype.getVolume = function() {
//     let volume = Math.PI * (this.radius * this.radius) * (this.height) 
//     return volume
// }
// Cylinder.prototype.getSurfaceArea = function() {
//     let surfaceArea = (Math.PI * 2) * (this.radius) * (this.height) + (Math.PI * 2) * (this.radius * this.radius)
//     return surfaceArea
// }


// let circle = new Cylinder(5, 10)
// console.log(Math.PI * 2)
// console.log(circle.getVolume())
// console.log(circle.getSurfaceArea())

// ## Question 8

// [Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)

// a. Write a constructor function called `Post` that has properties `datePosted`, `user`, and `text`.  Create an array of `Post` objects.

// b. Create a prototype function that returns whether or not the post was made today.

// c. Filter your array of `Post` objects to only include posts made today.

function Post(datePosted, user, text){
    this.datePosted = datePosted;
    this.user = user;
    this.text = text;
}

// let postObj = [{
//     date : (2019,10,27),
//     user : "Phil",
//     text: "Hello world"
// },
// {
//     date : (2019,10,30),
//     user : "Jay",
//     text: "Hello world 2"
// }];
const now = new Date();


Post.prototype.made = function(){
    if(this.datePosted === now.getDate()){
        return true
    } else {
        return false
    }
}

// Post.prototype.isFilter = function(postObj){
//     postObj.filter((el) => {
//         if(el.date === now.getDate()){
//             return "Works"
//         }
//     })
// }

console.log(now.getDate())

let dailyNews = new Post((2019,10,27), "John", "Hello world")
console.log(dailyNews.made())
// console.log(dailyNews.isFilter())

let postObj = [new Post((2019,10,27),"John", "Hello World"),new Post((2019,10,30),"Phil", "Hello World 1")]

console.log(postObj.filter((el) => {
    return el["date"] === now.getDate()
}))