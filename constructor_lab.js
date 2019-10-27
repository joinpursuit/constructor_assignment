// 1. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. 
//Create 2 instances of a `Person`. Print one of their first names.

function Person (firstName, lastName, middleName){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
    }
    
    // fullName(){
    //     return this.firstName, this.middleName, this.lastName
    // }


let jay = new Person("Jay", "Jones", "Ant")
let evan = new Person("Evan", "Jones", "joe")

console.log(jay)
console.log(evan)

//b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. 
//Call this method on both the instances you created in part a.

Person.prototype.fullName = function() {
return this.firstName + " "+ this.lastName
}

    console.log(evan.fullName())
    
//2a. Create a constructor function called `Book` that has properties 
//`title`, `author` and `rating`. Create some instances of `Book`.

function Book(title, author,rating){
    this.title = title
    this.author = author
    this.rating = rating
}

let twain = new Book("Author the Mouse", "Mark Twain", 10)

//b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
Book.prototype.isGood =  function() {
    return true
}

console.log(twain.isGood())