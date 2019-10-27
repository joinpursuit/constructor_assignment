//Q1a

function Person(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
}

let sam = new Person("Samantha", "Jimenez", "B")
let erik = new Person("Erikson", "Castro", "A")

// console.log(erik.firstName);

//Q1b

Person.prototype.fullName = function() {console.log(this.firstName + " " + this.middleName + " " + this.lastName)}

erik.fullName();
sam.fullName();