// function Person (firstName, lastName, middleName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.middleName = middleName;
// }
// let henry = new Person('Henry', 'Nunez', 'Saul')
// let patrick = new Person('Patrick', 'Smith', 'Star')

// // console.log(henry.firstName)

// Person.prototype.fullName = function () {return `${this.firstName} ${this.middleName} ${this.lastName}`}

// // console.log(henry.fullName())

// //Question #2

// function Book(title, author, rating){
//     this.title = title;
//     this.author = author;
//     this.rating = rating;

// }
// Book.prototype.isGood = function () {return this.rating >= 7}

// // question #3

// function Dog(name, breed, mood, hungry){
//     this.name = name;
//     this.breed = breed;
//     this.mood = mood;
//     this.hungry = hungry;
// }
// Dog.prototype.playFetch = function () { 
//         this.hungry = true;
//         this.mood = 'playful'
//         console.log('Ruff!')

// }
// Dog.prototype.feed = function () {
//     if(this.hungry === true){
//         this.hungry = false
//         console.log(`Woof!`)
//     }else{
//         console.log(`The dog doesn't look hungry`)
//     }
// }
// Dog.prototype.toString = function () {
//     return `${this.name} ${this.breed} ${this.mood} ${this.hungry}`
// }

// //question 4


// let freezingPoint = {
//     celsius: 0,
//     fahrenheit: 32,
//     kelvin: 273.15
// }
// function Celsius (celsius){
//     this.celsius = celsius,
//     this.getFarenheitnTemp = function () {
//         console.log((celsius * 1.8) + 32)
//     }
//     this.getKelvonTemp = function () {
//         console.log(celsius + 273)
//     }

// }
// Celsius.prototype.isBelowFreezing = function () {
//     if(outsideTempt < freezingPoint){
//         return 'Bool'
//     }
// }



// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0

// function Movie (name, year, genre, cast, description) {
//     this.name = name;
//     this.year = year;
//     this.genre = genre;
//     this.cast = cast;
//     this.description = description;

// }
// let Avengers = new Movie ('Avengers', 2019, 'Action/Thriller', 'Iron Man', 'Super Heroes')
// Movie.prototype.blurb = function () {
//     return `${this.name} came out in ${this.year}. It was ${this.genre} starring ${this.cast} as one of the best ${this.description}`
// }

// console.log(Avengers.blurb())

// function Vector (x, y){
//     this.x = x;
//     this.y = y;
// }
// Vector.prototype.plus = function (v2){
//         let x1 = this.x + v2['x'];
//         let y2 = this.y + v2['y'];
//         return {x1,y2}
//     }
// Vector.prototype.minus = function (v2) {
//         let x = this.x - v2['x']
//         let y = this.y - v2['y']
//         return {x, y}
//     }
    
//     Vector.prototype.getLength = function () {
//        let result = Math.pow(this.x,2) + Math.pow(this.y,2) 
//        return Math.sqrt(result)
//     }


// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5

function Cylinder (radius, height) {
    this.radius = radius;
    this.height = height;
}

Cylinder.prototype.getVolume = function (){
   return Math.floor(Math.PI * Math.pow(this.radius, 2)* this.height)
}
Cylinder.prototype.getSurfaceArea = function (){
    return Math.floor((2(Math.PI * Math.pow(this.radius, 2))) + (2(Math.PI * Math.pow(this.radius) * this.height)))
}
let newCyn = new Cylinder (9,8)
console.log(newCyn.getVolume())