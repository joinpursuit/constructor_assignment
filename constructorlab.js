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