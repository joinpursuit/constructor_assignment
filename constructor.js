console.log("Question 1")
//a.
function Person(firstName, lastName, middleName) {
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
}
Person.prototype.fullName = function() {
    console.log(`${this.firstName}${this.middleName}${this.lastName}`)
}
let person1 = new Person("Brandon ", "Brown ", "O'neil ")
let person2 = new Person("Deja ", "flynn ", "Lauren ")
// console.log(person1)
person1.fullName()

console.log("Question 2")

function Book(title, author, rating) {
    this.title = title
    this.author = author
    this.rating = rating

}
Book.prototype.isGood = function(){
     if(this.rating >= 7) {
         return true
     }else {
         return false
     }
}

let book1 = new Book("Ulysses", "James Joyce", 5)
let book2 = new Book("Great Expectations", "Charles Dickens", 8)
let book3 = new Book("The Great Gatsby", "F.S Fitzgerald", 10)

console.log(book1.isGood())


console.log("Question 3")

function Dog(name, breed, mood, hungry) {
    this.name = name
    this.breed = breed
    this.mood = mood
    this.hungry = hungry
}
Dog.prototype.playFetch = function() {
    this.hungry = true
    this.mood = "playful "
    console.log("Ruff!")
}
Dog.prototype.feed = function () {
    if(this.hungry === true){
        this.hungry = false
        console.log("Woof!")
    }else {
        console.log("The dog doesn't look hungry")
        
    }
}
Dog.prototype.toString = function(){
    console.log(`${this.name}${this.breed}${this.mood}${this.hungry}`)
}
let dog1 = new Dog("Bingo ", "Husky ", "Happy ", false)
dog1.playFetch()
dog1.feed()
dog1.toString()

console.log("Question 4")


let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.2
}
function Celsius(celsius) {
    this.celsius = celsius
    
}

Celsius.prototype.getFahrenheitTemp = function() {
    return 1.8 * this.celsius + 32
}
Celsius.prototype.getKelvinTemp = function() {
    return this.celsius + 273
}
Celsius.prototype.isBelowFreezing = function() {
    if(this.celsius < 0){
        return true
    } else {
        return false
    }
}
let outsideTempt = new Celsius(-1)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
console.log(outsideTempt.isBelowFreezing())
console.log('QUESTION 5')

function Movie(name,year,genre,cast,description){
        this.name = name
        this.year = year
        this.genre = genre
        this.cast = cast
        this.description =description
}
Movie.prototype.blurb = function(){
    console.log(`${this.name}${this.year}${this.genre}${this.description}`)
}
let movie1 = new Movie('Coming to America ', '1984 ', 'comedy ', 'Eddie and Arsenio ', 'funny AF!');
let movie2 = new Movie('Harlem Knights', '1986', 'comedy', 'Eddie and Richard', 'super funny!');
movie1.blurb()

console.log('QUESTION 6')
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
​
Vector.prototype.plus = function (vector) {
   return new Vector(this.x + vector.x, this.y + vector.y)
}
​
Vector.prototype.minus = function (vector) {
   return new Vector(this.x - vector.x, this.y - vector.y)
}
​
Vector.prototype.getLength = function (vector) {
   return (Math.sqrt((this.x * this.x) + (this.y * this.y)))
}
​
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));

console.log(v1.minus(v2));

​
var v3 = new Vector(3, 4)
console.log(v3.getLength());
console.log('QUESTION 7')


function Cylinder(radius, height){
    this.radius = radius
    this.height = height
}
Cylinder.prototype.getVolume = function(){
    return this.radius * this.radius * 3.14 * this.height
}
Cylinder.prototype.getSurfaceArea = function(){
    return (this.radius * this.radius * 2 * 3.14)  + (this.radius * this.height*2 * 3.14)
}
let cylinder1 = new Cylinder(5,10)
console.log(cylinder1.getSurfaceArea())

console.log('QUESITON 8')

function Post (datePosted, user, text){
    this.datePosted = datePosted
    this.user = user
    this.text = text
}
let postObj = {

}
Post.prototype.postedToday = function(){
    // let todaysDate = 
    if(this.datePosted = todaysDate){
        return true
    } else {
        return false
    }
}
Post.prototype.filterPost = function(){
    if()
}