// console.log("## Question 1")

// //a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
// console.log("a.")
// function Person (firstName, middleName, lastName) {
//   this.firstName = firstName;
//   this.middleName = middleName;
//   this.lastName = lastName;
// }

// let miles = new Person("Miles", "Ely", "Belize")
// let Phill = new Person("Phill", "Swag", "Johnson")
// console.log(miles)


// console.log("b.")

// //b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
// Person.prototype.fullName = function(){console.log(this.firstName + " " +  this.middleName + " " + this.lastName)}
// miles.fullName();

// console.log("## Question 2")

// //a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
// console.log("a.")

// function Book (title, author , rating){
//   this.title =title;
//   this.author = author;
//   this.rating = rating;
// }
// let book1 = new Book ("outsiders", "S.E Hinton", 9);
// let book2 = new Book ("Animal Farm", "George Orwell", 5);
// console.log(book2);
// console.log("b.")
// Book.prototype.isGood = function(){
//  if(this.rating >= 7){
//   return true;
// } else {
//   return false;
// }
// }
// console.log(book2.isGood())


// console.log("## Question 3")
// console.log("a.")

// //a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

// function Dog (name, breed, mood, hungry){
//   this.name = name;
//   this.breed = breed;
//   this.mood = mood;
//   this.hungry = hungry;
// }
// console.log("b.")

// Dog.prototype.playFetch = function () {
//   this.hungry = true;
//   this.mood = "playful";
//   return "Ruff!"
// }

// let toto = new Dog ("Toto", "Terrain", "happy", false)
// // console.log(toto.playFetch())
// // console.log(toto)

// console.log("c.")

// Dog.prototype.feed = function (){
//   if(this.hungry=== true){
//     this.hungry = false
//     return "Woof!"
//   } else {
//     return "The dog doesn't look hungry"
//   }
// }
// console.log(toto.feed())

// console.log("d.")

// Dog.prototype.toString = function (){
//   return this.name + " is a " + this.breed + " dog. Whose mood is " + this.mood + " and people always think this dog is hungry which is " + this.hungry + "."
// }
// console.log(toto.toString())

// console.log("##Question 4")
// console.log("a")

// let freezingPoint = {
//   celsius: 0,
//   fahrenheit: 32,
//   kelvin: 273,
// }

// console.log("b")
// console.log("")

// function Celsius (celsius) {
//   this.celsius = celsius
// } 
// Celsius.prototype.getFahrenheitTemp = function () {
//   return (this.celsius * 1.8) + 32
// }
// Celsius.prototype.getKelvinTemp = function (){
//   return this.celsius + 273
// }

// let tempCel = new Celsius(5)

// console.log(tempCel.getFahrenheitTemp())
// //c

// Celsius.prototype.isFreezingBelow = function (){
//   if(this.celsius < 0){
//     return true
//   } else {
//     return false
//   }
// }

// console.log(tempCel.isFreezingBelow())






// //5

// function Movie (name, year, genre, cast, description){
//   this.name = name
//   this.year = year
//   this.genre = genre
//   this.cast = cast
//   this.description = description
// }

// Movie.prototype.blurb = function (){
//   return "The movie " + this.name + " was made in " + this.year + " starring " + this.cast + " . " + this.description
// }

// let myMovie = new Movie("The Mustang", 2019, "drama" ,"Matthias Schoenaerts, Jason Mitchell, Bruce Dern, and Gideon Adlon," , " This movie drew from a real-life prison rehabilitation program in Carson City, Nevada, in which inmates train wild mustangs to ready them for sale or adoption.")

// console.log(myMovie.blurb())


// //6

function Vector(x, y) {
    this.x = x
    this.y = y
}
Vector.prototype.plus= function (v) {
      let vect = new Vector
      vect.x = this.x + v.x
      vect.y = this.y + v.y
      return vect
    }
Vector.prototype.minus= function (v) {
      let vect = new Vector
      vect.x = this.x - v.x
      vect.y = this.y - v.y
      return vect
    }
Vector.prototype.getLength = function (){
  return Math.hypot(this.x, this.y)
}




    let vec1 = new Vector(1, 2)
    let vec2 = new Vector(2, 3)
    let vec3 = new Vector(3, 4)
 console.log(vec1.plus(vec2))
 console.log(vec1.minus(vec2))
 console.log(vec3.getLength())


 //7

 function Cylinder (radius, height){
      this.radius = radius
      this.height = height
 }
 Cylinder.prototype.getVolume = function (){
    return  this.height * Math.PI * Math.pow(this.radius, 2)
 }
 Cylinder.prototype.getSurfaceArea = function (){
    let pi = 3.142
    return 2 * pi * Math.pow(this.radius, 2) + (2 * pi * this.radius * this.height)
 }
 
let bottle = new Cylinder(3, 9)
 console.log(bottle.getSurfaceArea())
 console.log(bottle.getVolume())

 8//

 function Post (datePosted, user, text){
   this.datePosted = datePosted
   this.user = user
   this.text = text
 }
 Post.prototype.today = function (date) {
  if(this.datePosted === date){
      return true
  } else {
      return false
  }
}
let now = new Date ()
let postArr = [new Post(new Date(2019, 10, 27), "Sihame", "Whats up?")]

console.log(postArr)
