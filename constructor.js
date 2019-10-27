/* ## Question 1

a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. 
Create 2 instances of a `Person`. Print one of their first names. */

/* b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. 
Call this method on both the instances you created in part a. */

function Person(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName + " " + this.middleName + " " + this.lastName
}

let phil = new Person("Phil", "O", "Awich")
let john = new Person("John", "A", "Jones")
console.log(phil)
console.log(john)
console.log(phil.fullName())



