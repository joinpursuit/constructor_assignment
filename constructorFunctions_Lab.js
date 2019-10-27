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