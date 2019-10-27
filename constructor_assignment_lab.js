// # Constructor Exercises

// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
function Person(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
}
Person.prototype.fullName = function() {console.log(this.firstName + " " + this.middleName + " " + this.lastName)}
let brittany = new Person("Brittany", "Gaston", "Bernice")
let jovanni = new Person("Jovanni", "Luna", "David")
console.log(brittany.firstName)
brittany.fullName()
jovanni.fullName()

// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.


// ## Question 2

// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
}
Book.prototype.isGood = function() {return this.rating >= 7 ? true : false}
let theGreatGatsby = new Book("The Great Gatsby", "F Scott Fitzgerald", 4)
let ofMice = new Book("Of Mice and Men", "John Steinbeck", 7)
let midsummer = new Book("A Midsummer Night's Dream", "William Shakespeare", 9)
console.log(theGreatGatsby.isGood())
// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

// ## Question 3
function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}
Dog.prototype.playfetch = function() {
    this.hungry = true;
    this.mood = "playful";
    return "Ruff!"}
Dog.prototype.feed = function() {
    if(this.hungry === true){
        this.hungry = false
        return "woof!"
    }else{
        return "The dog doesn't look hungry"
    }
}
Dog.prototype.toString = function() {return this.name + " " + this.breed + " " + this.mood + " " + this.hungry}
let Spot = new Dog("Spot", "Terrier", "Playful", true)
console.log(Spot.feed())
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// d. Add a prototype function called `toString` that returns a description of the dog:

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
let freezingPoint = {celsius: 0, fahrenheit: 32 , kelvin: 272}
function Celsius(celsius) {
    this.celsius = celsius;
}
Celsius.prototype.getFahrenheitTemp = function() {return 1.8 * this.celsius + 32}
Celsius.prototype.getKelvinTemp = function() {return this.celsius + 273}
Celsius.prototype.isBelowFreezing = function() { 
    if(this.celsius < 0) {
    return true
}else{
    return false
    }
}

// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

// ```js
let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius) //returns 10.0
console.log(outsideTempt.getKelvinTemp()) //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()) //returns 50.0
// ```

// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

// ## Question 5

// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

function Movie(name, year, genre, cast, description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
}

let laLaLand = new Movie("La La Land", 2016, "Musical", ["Ryan Gosling", "Emma Stone"], "Musical taking place in LA between two lovers")

// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
Movie.prototype.blurb = function(){return `${this.name} came out in ${this.year}. It was a ${this.genre} starring ${this.cast} and is about a ${this.description}`}
console.log(laLaLand.blurb())

// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."


// ## Question 6
 
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

function Vector (x, y) {
    this.x = x;
    this.y = y;
}

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
Vector.prototype.plus = function(){return new Vector(this.x + v2.x, this.y + v2.y);}
Vector.prototype.minus = function(){return new Vector(this.x + (v2.x * -1), this.y + (v2.y * -1));
}
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
Vector.prototype.getLength = function(){return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));}

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

// ```js
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5
// ```

// ## Question 7

// a. Write a constructor function called `Cylinder` that has properties `radius` and `height`.  Create an instance of a Cylinder.
function Cylinder(radius, height){
    this.radius = radius;
    this.height = height;
}

// b. Add a prototype function `getVolume` that returns the [volume](https://www.mathopenref.com/cylindervolume.html)
Cylinder.prototype.getVolume = function(){ return (Math.PI) * (Math.pow(this.radius, 2)) * this.height}
// c. Add a prototype function `getSurfaceArea` that returns the [surface area](https://www.mathopenref.com/cylinderareamain.html)
Cylinder.prototype.getSurfaceArea = function(){return 2 * (Math.PI) * (this.radius) * (this.radius + this.height)}
let cyl1 = new Cylinder(1, 5);
console.log(cyl1.getVolume())
console.log(cyl1.getSurfaceArea())

// ## Question 8

// [Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)

// a. Write a constructor function called `Post` that has properties `datePosted`, `user`, and `text`.  Create an array of `Post` objects.
function Post(datePosted, user, text){
    this.datePosted = datePosted;
    this.user = user;
    this.text = text;
}
const today = new Date();
let postObjs = [
    new Post(new Date(2019, 07, 04), "Captain America", "It's Fourth of July"),
    new Post(new Date(2019, 10, 27), "Spiderman ", " Today's date"),
    new Post(new Date(2019, 01, 01), "Batman", "Happy New Year")
]

// b. Create a prototype function that returns whether or not the post was made today.

Post.prototype.postedToday = function(){
    const today = new Date();
    if(this.datePosted.getDate() === today.getDate()) {
        return true;
    } else {
        return false;
    }
}
// c. Filter your array of `Post` objects to only include posts made today.
console.log(postObjs[0].postedToday());
console.log(postObjs.filter((post) => post.postedToday()));