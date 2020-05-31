// //Question 1a

// function Person (firstName, lastName, middleName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.middleName = middleName
// }
  
// let cassidy = new Person("Cassidy", "Beni", "E")
// let john = new Person("John", "Doe", "Michael")
  
// console.log(cassidy["firstName"])

// //Question 1b

// Person.prototype.fullName = function() {
//     return `${this.firstName} ${this.middleName} ${this.lastName}`
// }

// console.log(cassidy.fullName())

// //Question 2

function Book (title, author, rating) {
    this.title = title
    this.author = author
    this.rating = rating
}

let firstBook = new Book ("Of Mice and Men", "John Steinbeck", 10)
let secondBook = new Book ("Insomnia", "Stephen King", 10)

Book.prototype.isGood = function() {
    if (this.rating >= 7) {
        return true
    } else {
        return false
    }
}

console.log(firstBook.isGood())