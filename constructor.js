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



