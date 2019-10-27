// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: 
// a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.


function Person (firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
}
let syn = new Person("syn", "perez", "forrest lee");
let maria = new Person("maria", "martinez", "liza");


// b. Write a prototype function in `Person` called `fullName` that will return a 
// formatted string of an instance's full name. 
// Call this method on both the instances you created in part a.

Person.prototype.fullName = function() {console.log(this.firstName + " " + this.middleName + " " + this.lastName)}
syn.fullName()
maria.fullName()

// ## Question 2

// a. Create a constructor function called `Book` that has properties `title`, 
// `author` and `rating`. Create some instances of `Book`.

function Book (title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
}

let theCat = new Book ("The Cat In The Hat", "Dr. Seuss", 10);
let oneFish = new Book ("One Fish, Two Fish", "Dr. Seuss", 10);
let fiftyShades = new Book ("50 Shades of Grey", "E.L. James", 2);

// // b. Add a prototype function to `Book` called `isGood` that returns 
// `true` if its rating is greater than or equal to 7

Book.prototype.isGood = function () {this.rating > 7 ? console.log(true) : console.log(false)}
theCat.isGood();
fiftyShades.isGood();

// ## Question 3

// // a. Create a `Dog` constructor function with four properties: 
// `name (string), breed (string), mood (string), and hungry (boolean)`.

function Dog (name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}
let dmx = new Dog ("DMX", "Ruff Riders", "Angry", false);
let snoop = new Dog ("Snoop", "Doggy Dog", "Chill", true)

// // b. Add a prototype function called `playFetch`. It should set the dog's 
// `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

Dog.prototype.playFetch = function() {
    if (this.hungry === false) {
        this.hungry = true 
        this.mood = "Playful"
        console.log("Ruff!");
    }
}
dmx.playFetch();
console.log(dmx);

// // c. Add a prototype function called `feed`. If the dog is hungry, 
// it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, 
// it should log "The dog doesn't look hungry"

Dog.prototype.feed = function() {
    if (this.hungry === true) {
        this.hungry = false
        console.log("Woof")
    } else {
        console.log("This dog doesn't look hungry")
    }
}

dmx.feed();
console.log(dmx);

// // d. Add a prototype function called `toString` that returns 
// a description of the dog:

Dog.prototype.toString = function() {console.log(this.name + " " + this.breed + " " + this.mood + " " + this.hungry)}
dmx.toString();

// There are three common scales that are used to measure temperature: 
// Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// // a. Make an object called `freezingPoint` that has three properties: `celsius`, 
// `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273
}

// // b. Make a constructor function called `Celsius` that has one property:
//  `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

function Celsius(celsius) {
    this.celsius = celsius;
}

Celsius.prototype.getFahrenheitTemp = function() {
    console.log((this.celsius * 1.8) + 32)
}

Celsius.prototype.getKelvinTemp = function() {
    console.log(this.celsius + 273)
}
let celsius = new Celsius (-5)
celsius.getFahrenheitTemp();
celsius.getKelvinTemp();

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```

// // c. Give `Celsius` a prototype function called `isBelowFreezing` that 
// returns a `Bool` (true if the temperature is below freezing).

Celsius.prototype.isBelowFreezing = function() {
   this.celsius < 0 ? console.log(true) : console.log(false)
}
celsius.isBelowFreezing();

// ## Question 5

// a. Create a constructor function called `Movie` that has properties 
// for `name`, `year`, `genre`, `cast`, and `description`. Create an instance 
// of your `Movie`

function Movie (name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
}
let rogerRabbit = new Movie ("Who Framed Roger Rabbit", 1988, "Cartoon", "Roger Rabbit, Jessica Rabbit", "Wacky toon movie");
console.log(rogerRabbit);

// // b. Create an prototype function inside `Movie` called `blurb` that 
// returns a formatted string describing the movie.

Movie.prototype.blurb = function() {
    console.log(this.name + " came out in " + this.year + ". It is a  " + this.genre + ". Starring  " + this.cast + ". It is a " + this.description)
}

rogerRabbit.blurb();

// // Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen 
// as a man named Borat who was visiting America from Kazakhstan."

// ## Question 6
 
// // Write a constructor Vector that represents a vector in two-dimensional space.
// // It takes two number arguments: `x` and `y` parameters, which it should be 
// saved to properties of the same name.

function Vector (x, y) {
    this.x = x;
    this.y = y;
}


// // Give the Vector prototype two methods, `plus` and `minus`, that take another 
// vector as an argument and
// // returns a new vector that has the sum or difference of the two vectors’ 
// (the one in `this` and the parameter) x and y values.

Vector.prototype.plus = function(vector) {return {x: this.x + vector.x, y : this.y + vector.y}};
Vector.prototype.minus = function(vector) {return {x: this.x - vector.x, y : this.y - vector.y}};
let v1 = new Vector (5, 7);
let v2 = new Vector (2, 3);

console.log(v1.plus(v2))
console.log(v1.minus(v2))

// // Add a method `getLength` to the prototype that computes the length of the 
// vector ;

Vector.prototype.getLength = function() {
    return Math.sqrt(this.x**2 + this.y**2);
}

console.log(v1.getLength());


// // that is, the distance of the point (x, y) 
// from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5

// ## Question 7

// // a. Write a constructor function called `Cylinder` that has properties 
// `radius` and `height`.  Create an instance of a Cylinder.

function Cynlinder (radius, height) {
    this.radius = radius;
    this.height = height;
}

let cyn = new Cynlinder (5, 10);


// // b. Add a prototype function `getVolume` that returns the 
// [volume](https://www.mathopenref.com/cylindervolume.html)

Cynlinder.prototype.getVolume = function() {
    return (Math.PI * (this.radius**2) * this.height)
}

console.log(cyn.getVolume());

// // c. Add a prototype function `getSurfaceArea` that returns the 
// [surface area](https://www.mathopenref.com/cylinderareamain.html)

Cynlinder.prototype.getSurfaceArea = function() {
    return (2 * Math.PI * (this.radius**2) + 2 * Math.PI * (this.radius) * this.height);
}

console.log(cyn.getSurfaceArea());

// // ## Question 8

// // a. Write a constructor function called `Post` that has properties 
// `datePosted`, `user`, and `text`.  Create an array of `Post` objects.

function Post (datePosted, user, text) {
    this.datePosted = datePosted;
    this.user = user;
    this.text = text;
}


const now = new Date;
let reallyNow = now.getFullYear();
Post.prototype.todayOrNaw = function() {return this.datePosted === reallyNow ? true : false}



// // b. Create a prototype function that returns whether or not the post 
// was made today.

let firstPost = new Post(reallyNow, "corey", "hello world");
let secondPost = new Post(1992, "Jon", "goodbye world");
let thirdPost = new Post(1994, "Robin", "merry xmas");

let posts = [firstPost,secondPost,thirdPost];
// console.log(posts[firstPost].todayOrNaw());
// console.log(posts.secondPost.todayOrNaw());

// console.log(reallyNow)
// console.log(secondPost)

// // c. Filter your array of `Post` objects to only include posts made today.


console.log(firstPost.todayOrNaw());
console.log(secondPost.todayOrNaw());
// console.log(posts.secondPost[datePosted].todayOrNaw())

let newArray = []
function todayOnly(array) {
    const now = new Date;
    let reallyNow = now.getFullYear();
return posts.filter(el => {
    if (posts[this.datePosted] === reallyNow) {
    } 
    return newArray.push(this.datePosted);
})
}
console.log(todayOnly(newArray));