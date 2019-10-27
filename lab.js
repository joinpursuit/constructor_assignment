// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: 
// a first name, a last name and a middle name.
//  Create 2 instances of a `Person`. Print one of their first names.

// b. Write a prototype function in `Person` called `fullName` 
// that will return a formatted string of an instance's full name.
//  Call this method on both the instances you created in part a.


function Person (firstName, lastName, middleName){

    this.firstName =firstName
    this.lastName = lastName
    this.middleName = middleName

}

Person.prototype.printName = function () {console.log(this.firstName+" "+this.middleName+" "+this.lastName)}
let Dani =  new Person ("Danny", "A", "L")
let Apple = new Person("Johnny", "Seed","Apple")

// console.log(Apple)

Apple.printName()




// QUESTION 2

function Book(title,aurthor,rating) {
    this.title   =   title
    this.aurthor = aurthor
    this.rating = rating
}
Book.prototype.isGood = function () {if (this.rating >= 7){return true } else {return false} }
let book1 = new Book('The Big Book Of Fun','Johny Walker', 6)

// console.log(book1.isGood())


// Question 3
// a. Create a `Dog` constructor function with four
//  properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

// b. Add a prototype function called `playFetch`.
//  It should set the dog's `hungry` property to `true`, 
//  set its mood property to `playful`, and log "Ruff!"


function Dog (name,breed,mood,hungry){

    this.name = name
    this.breed = breed
    this.mood = mood
    this.hungry = hungry


}

Dog.prototype.playFetch = function (){ this.hungry = true, this.mood = "playfull", console.log("Ruff! Ruff!")}

Dog.prototype.feed = function(){
    if(this.hungry === true){

        this.hungry = false
        // console.log("Woof!")
    }else{

        // console.log("The dog doesnt look hungy!")
    }

}

Dog.prototype.toString = function(){console.log(`${this.name} is a ${this.breed} and is ${this.mood} that is ${this.hungry}`) }


let dog1 = new Dog ("Goodboy", "Pitbull","Happy", true)

// dog1.toString()



// Question 4


const freezingPoint = {celsius: 0, fahrenheit: 32, kelvin: 273}

function Celsius(celsius){
    this.celsius = celsius
}
Celsius.prototype.getFahrenheitTemp = function () {return (1.8 * this.celsius) + 32}

Celsius.prototype.getKelvinTemp =  function () {return this.celsius + 273} 

let outsideTempt = new Celsius(10.0)
// console.log(outsideTempt)
// console.log(outsideTempt.getFahrenheitTemp())
// console.log(outsideTempt.getKelvinTemp())


// 5

function Movie(name,year,genre, cast,description){

    this.name = name
    this.year = year
    this.genre = genre
    this.cast = cast
    this.description = description

}

let movie1 = new Movie("BadBoys 1", 1995, "action", "Will Smith, Martin Lawrence","Miami-Dade detectives Mike Lowrey (Will Smith) and Marcus Burnett (Martin Lawrence) blow a fuse when $100 million worth of heroin they recently confiscated is heisted from station headquarters." )

Movie.prototype.blurb = function (){ console.log(`${this.name} came out in ${this.year}.It is a ${this.genre} starring ${this.cast}. In the movie, ${this.description}`)}



// Question 6

function Vector (x,y) {
    this.x = x
    this.y = y
}
Vector.prototype.plus = function (vector2) {
    let x1 = this.x + vector2['x']
    let y2 = this.y + vector2['y']
    // return {x1,y2}
}

Vector.prototype.minus = function (vector2) {
    let x1 = this.x - vector2['x']
    let y1 = this.y - vector2['y']
    // return {x1,y1}
}

Vector.prototype.getLength = function () {
   let result = Math.pow(this.x,2) + Math.pow(this.y,2) 
//    return Math.sqrt(result)
}

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
// console.log(v1.plus(v2))
// console.log(v1.minus(v2))
var v3 = new Vector(3, 4)
// console.log(v3.getLength())


// Question 7

function Cylinder(radius,height){

    this.radius = radius
    this.height = height

}

Cylinder.prototype.getVolume = function () {
    // return Math.floor(Math.PI *(this.radius*this.radius) * this.height)
}

//area	=	2	π	 r	2 	+	2	π	r	h

Cylinder.prototype.getSurfaceArea = function () {
    return Math.floor(((2 * Math.PI)* Math.pow(this.radius,2) ) + (2 * Math.PI * this.radius * this.height))

}


let Cylinder1 = new Cylinder (2,3)

// console.log(Cylinder1.getVolume())

// console.log(Cylinder1.getSurfaceArea())




//  Question 8



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