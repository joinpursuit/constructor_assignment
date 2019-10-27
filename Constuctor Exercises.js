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

// ## Question 2
// a. Create a constructor function called `Book` that has properties 
// `title`, `author` and `rating`. Create some instances of `Book`.
// b. Add a prototype function to `Book` called `isGood` that returns 
// `true` if its rating is greater than or equal to 7

function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    
}
let harris = new Book("True blood", "C. Harris", 4);
let haverbeke = new Book("Eloquent JavaScript", "Marijn Haverbeke", 8);

Book.prototype.isGood = function() {
    if(this.rating >= 7) {
        return true
    } else {
        return false
    }
}
console.log(haverbeke.isGood());

// ## Question 3
// a. Create a `Dog` constructor function with four properties: 
// `name (string), breed (string), mood (string), and hungry (boolean)`.
// b. Add a prototype function called `playFetch`. It should set the dog's 
// `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
// d. Add a prototype function called `toString` that returns a description of the dog: