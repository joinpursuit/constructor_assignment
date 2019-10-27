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

//Q2a

function Book(title, author, rating){
    this.title= title;
    this.author= author;
    this.rating= rating;
}
let book1=new Book("Phaedo", "Plato", 10);
let book2= new Book("Harry Potter", "J.K. Rowling", 6);
Book.prototype.isGood= function () {
    if(this.rating>=7){
    console.log("True");   
}
}
book1.isGood();
