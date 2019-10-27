function Person(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName
}
Person.prototype.fullName = function() {return this.fullName = this.firstName + " " + this.lastName + " " + this.middleName};


let corey = new Person("Corey", "Loadovsky", "Catman");
let danielle = new Person('Danielle', "Cherry", "Renee");
// console.log(corey["firstName"]);




console.log(corey.fullName())