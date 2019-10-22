// console.log("--Question 1--")
class Person {
    constructor (firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName
    }
    fullName(){
        return `My name is ${this.firstName} ${this.lastName}`
    }
}

let kong = new Person('Cong', 'Yang', 'Song')
let karen = new Person('Karen', 'Morisset', 'Sing')

// console.log(kong)
// console.log(kong.fullName())
// console.log(karen.fullName())

// console.log("--Question 2--")
class Book {
    constructor (title, author, rating) {
        this.title = title;
        this.author = author;
        this.rating = rating
    }
    isGood () {
        if(this.rating >= 7){
            return true
        } else {
           return false
        }
    }
}

let microsoft = new Book ('Microsoft for Dummies', 'Karen', 10)
let mac = new Book ('Mac for Dummies', 'Cong', 7.5)
let linux = new Book ('Linux for Dummies', 'Corey', 4)

// console.log(mac.isGood())

console.log("--Question 3--")
class Dog {
    constructor (name, breed, mood, hungry){
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry
    }
    playFetch() {
        if(this.hungry === true && this.mood === 'playful'){
            return 'Ruff'
        } else {
            return 'No Ruff'
        }
    }
    feed () {
        if(!this.hungry) {
            return 'Woof'
        } else {
            return 'The dog doesn\'t look hungry'
        }
    }
    toString(){
        return `${this.name} is a ${this.breed} that is extremely ${this.mood}`
    }
}
let benji = new Dog ('Benji', 'Morkie', 'lazy', true)

//console.log(benji.toString())
//console.log(benji.playFetch())
//console.log(benji.feed())


console.log("--Question 4a--")

// let freezingpoint ={
//     celsius: 0,
//     fahrenheit: 32,
//     kelvin:  273
// }
// console.log(freezingpoint.celsius)

console.log("--Question 4b--")

const celsius = () =>{
    
}



class Celsius {
    constructor(celsius){
        this.celsius = celsius;
    }

    getFahrenheitTemp(){
        return this.celsius*1.8+32
    }
    getKelvinTemp(){
       return this.celsius+273
    }
    isBelowFreez(){
        if(this.celsius<0){
            return true
        }
        else{ return false}
    }

}

let outsideTempt = new Celsius(10)


// console.log(outsideTempt.celsius)
//  //returns 10.0
// console.log(outsideTempt.getKelvinTemp()) //returns 283.0
// console.log(outsideTempt.getFahrenheitTemp()) //returns 50.0

console.log("--Question 5--")

class Movie {
    constructor(name, year, genre, cast, description){
        this.name = name;
        this.year = year;
        this.genre= genre;
        this.cast = cast;
        this.description = description
    }
    blurb(){
        return `${this.name} came out in ${this.year}. it was odd film starring ${this.cast}. The Film is about ${this.description}`
    }
}

let joker = new Movie("Joker", 2019, "Drama/Thriller", "Joaquin Phenix and Robert De Niro", "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.")
console.log(joker)
console.log(joker.blurb())


console.log("--Question 6--")

class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    plus(vector){
        return new Vector(this.x + vector.x, this.y + vector.y) 
}
    minus(vector){
    return new Vector(this.x - vector.x, this.y - vector.y) 
}
    getLength(){
        return (Math.sqrt((this.x * this.x) + (this.y * this.y)))
    }

}

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.minus(v2));
var v3 = new Vector(3, 4)
console.log(v3.getLength());
