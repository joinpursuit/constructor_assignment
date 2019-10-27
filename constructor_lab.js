// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

function Person(firstName, lastName, middleName){
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
}
let jay = new Person ("Jay", "Fowler", "C")
let cassidy = new Person ("Cassidy", "Beni", "Ena")
console.log(jay["firstName"])

// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.middleName} ${this.lastName}`
}
console.log(jay.fullName())

