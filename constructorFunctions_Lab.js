// ## Question 1
// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

function Person (firstName, lastName, middleName) {
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
}

let kong = new Person ("Kong", "Yang", "Song")
let nilber = new Person ("Nilber", "Remon", "None")
console.log(nilber)

Person.prototype.fullName = function () {console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)}
// nilber.fullName()
// kong.fullName()

// ## Question 2
//Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

function Book (title, author, rating) {
    this.title = title
    this.author = author
    this.rating = rating
}

let web = new Book ("Web for Dummies","Dummies", 7)
let barad = new Book ("Meeting the Universe Halfway", "Karen Barad", 9)

Book.prototype.isGood = function (ratingGood) {
    let good = false
    if (this.rating >= ratingGood) {
        good = true
    }
    return good
}

console.log(web)
console.log(web.isGood(8))
console.log("Question 3")
// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
// d. Add a prototype function called `toString` that returns a description of the dog:

function Dog (name, breed, mood, hungry){
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry
}

Dog.prototype.playFetch = function () {
        this.hungry = true;
        this.mood = "playful";
        console.log("ruff")
    }

Dog.prototype.feed = function (){
    if (this.hungry === true){
        this.hungry = false;
        console.log("WOOFF")
    }else{
        console.log("The Dog is not hungary")
    }
}
Dog.prototype.toString = function(){
    console.log(`${this.name} is ${this.mood} and the breed is ${this.breed}`)
}

let garnet = new Dog("Garnet", "Mix Shepherd", "peaceful", true)
console.log(garnet)
// garnet.playFetch()
// console.log(garnet)

garnet.feed()
garnet.toString()

console.log("Question 4")
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
//  constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
// ```js
// ```
// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273
}
function Celsius (celsius){
    this.celsius = celsius
}

Celsius.prototype.isBelowFreezing= function(){
    if(this.celsius<=freezingPoint["celsius"]){
        return console.log(true)
    }
    else {
        return console.log(false)
    }
}

Celsius.prototype.getFahrenheitTemp = function() {
    console.log(1.8*(this.celsius)+32)
}

Celsius.prototype.getKelvinTemp = function() {
    console.log(this.celsius+273)
}


let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius) //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
outsideTempt.isBelowFreezing() //returns 50.0
console.log("Question 5")
// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
function Movie (name,year,genre,cast, description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description
}

let nezha = new Movie("Ne Zha", 2019, "Animation", "voice cast: Yangting Lu", "Born with unique powers, a boy is recruited to fight demons and save the community that fears him.")

Movie.prototype.blurb = function(){
    return console.log(`${this.name} come out ${this.year} was a(n) ${this.genre} movie starring ${this.cast} as about ${this.description}`)
}

nezha.blurb()

console.log("Question 6")
 
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

function Vector(x,y){
    this.x = x;
    this.y = y
}

Vector.prototype.plus = function(vector){
    return new Vector(this.x + vector.x, this.y+vector.y)
}

Vector.prototype.minus = function(vector){
    return new Vector(this.x-vector.x , this.y-vector.y)
}

Vector.prototype.getLength = function(){
    return Math.sqrt((this.x*this.x) + (this.y*this.y))
}

let v1 = new Vector(1,2)
console.log(v1)
let v2 = new Vector(2,3)
console.log(v2)
console.log(v1.plus(v2))
console.log(v1.minus(v2))
console.log(v2.getLength())

console.log("Question 7")
// a. Write a constructor function called `Cylinder` that has properties `radius` and `height`.  Create an instance of a Cylinder.
// b. Add a prototype function `getVolume` that returns the [volume](https://www.mathopenref.com/cylindervolume.html)
// c. Add a prototype function `getSurfaceArea` that returns the [surface area](https://www.mathopenref.com/cylinderareamain.html)

function Cylinder (radius, height){
    this.radius= radius;
    this.height=height
}
Cylinder.prototype.getVolume = function(){
    return Math.PI*(Math.pow(this.radius,2))*this.height
}
Cylinder.prototype.getSurfaceArea = function(){
    return ( 2*Math.PI*Math.pow(this.radius,2) + (2*Math.PI*this.radius*this.height))
}

let c1 = new Cylinder(2,4)
console.log(c1)
console.log(c1.getVolume())
console.log(c1.getSurfaceArea())

console.log("Question 8")
// [Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)
// a. Write a constructor function called `Post` that has properties `datePosted`, `user`, and `text`.  Create an array of `Post` objects.
// b. Create a prototype function that returns whether or not the post was made today.
// c. Filter your array of `Post` objects to only include posts made today.

function Post(datePosted,user,text){
    this.datePosted= datePosted;
    this.user=user;
    this.text=text
}
let new1 = new Post((new Date("Septmber 23, 2019")),"Nilber", "Class was Good")
let new2 = new Post((new Date("October 27, 2019")),"Kong", "Class was NOT Good")
console.log(new1);
console.log(new2);
Post.prototype.todayPost = function(){
    const now = new Date();
    if (this.datePosted.getDate() === now.getDate() && this.datePosted.getMonth() === now.getMonth()){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

new2.todayPost()

console.log("Question 8-b")
let newPost = [new1,new2];
filterToday = function(arry){
    const now = new Date();
   return arry.filter(el=>{
      if (el.datePosted.getDate() === now.getDate() && el.datePosted.getMonth() === now.getMonth()){
    return el
    }
    })
    }

console.log(filterToday(newPost))

// console.log(now)
// View the output