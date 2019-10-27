console.log("Question 1")

function Person(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
}

Person.prototype.fullName = function () {
    console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)
}
let karen = new Person("Karen", "Morisset", "A")
let brutus = new Person("Kevin", "Brutus", "A")

karen.fullName()
brutus.fullName()

console.log("Question 2")
function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
}

Book.prototype.isGood = function () {
    if(this.rating >= 7) {
        return true 
    } else {
        return false
    }
}
let book1 = new Book("Notebook", "Karen", 9)
let book2 = new Book("PenPal", "Brutus", 6)

console.log(book1.isGood())

console.log("Question 3")

function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}

Dog.prototype.playFetch = function () {
    this.mood = "playful", this.hungry = true
    console.log("Ruff!")
}

Dog.prototype.feed = function () {
    if(this.hungry === true){
        this.hungry = false
        console.log(this.name + " Woof!")
    } else {
        console.log(this.name + " The dog doesn't look hungry")
    }
}

Dog.prototype.toString = function () {
    console.log(`${this.name} is a ${this.breed}. This dog is extremely ${this.mood}. Is the dog hungry? ${this.hungry}`)
}
let cook = new Dog("Cookie", "porkie", "hyper", true)
let ben = new Dog("Benji", "morkie", "lazy", true)
let max = new Dog("Max", "yorkiepoo", "excited", false)

cook.feed()
console.log(cook)
max.toString()
// console.log(max)

console.log("Question 4")

let freezingPoint = {
    "celsius": 0,
    "fahrenheit": 32,
    "kelvin": 273
}

function Celsius(celsius){
    this.celsius = celsius;
}

Celsius.prototype.getFahrenheit = function () {
    return 1.8 * this.celsius + 32
}

Celsius.prototype.getKelvinTemp = function () {
    return this.celsius + 273
}

Celsius.prototype.isBelowFreezing = function () {
    if(this.celsius < 0){
        return true
    } else {
        return false
    }
}
let outsideTempt = new Celsius(10.0)

console.log(outsideTempt.getFahrenheit())
console.log(outsideTempt.getKelvinTemp())
console.log(outsideTempt.isBelowFreezing())

console.log("Question 5")

function Movie(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
}
Movie.prototype.blurb = function () {
    return `${this.name} came out in ${this.year}. The movie is about ${this.description}, starring ${this.cast}.`
}
let movie1 = new Movie("Gemini Man", 2019, "action", "Will Smith", "a hitman who is targeted by a younger clone of himself while on the run from the government")
console.log(movie1.blurb())

console.log("Question 6")

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
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5

function Cylinder(radius, height){
    this.radius = radius;
    this.height = height;
}

Cylinder.prototype.getVolume = function () {
    return Math.floor(Math.PI * (this.radius * this.radius) * this.height)
}

Cylinder.prototype.getSurfaceArea = function () {
    return Math.floor(2 * Math.PI * this.radius * (this.radius + this.height))
}
let cyl = new Cylinder(2,5)

console.log(cyl.getSurfaceArea())

console.log("Question 8")

function Post(datePosted, user, text){
    this.datePosted = datePosted;
    this.user = user;
    this.text = text;
}

Post.prototype.today = function () {
    const today = new Date()
    if(this.datePosted.getDate() === today.getDate()){
        return true
    } else {
        return false
    }
}


let postArr = ([new Post(new Date(2019,10,27), "Karen", "hey lol"), 
new Post(new Date(2019,10,26), "Kevin", "hello")])
// const today = new Date(); 

console.log(postArr.filter(el => el.today()))