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

