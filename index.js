//Question 1a

function Person (firstName, lastName, middleName) {
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
}
  
let cassidy = new Person("Cassidy", "Beni", "E")
let john = new Person("John", "Doe", "Michael")
  
console.log(cassidy["firstName"])

