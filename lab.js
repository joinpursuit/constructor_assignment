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

console.log(Apple)

Apple.printName()


