// //Q1

// function Person(firstName, lastName, middleName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.middleName = middleName;
// }

// let sam = new Person("Samantha", "Jimenez", "B")
// let erik = new Person("Erikson", "Castro", "A")

// // console.log(erik.firstName);

// Person.prototype.fullName = function() {console.log(this.firstName + " " + this.middleName + " " + this.lastName)}

// erik.fullName();
// sam.fullName();

// //Q2

// function Book(title, author, rating){
//     this.title= title;
//     this.author= author;
//     this.rating= rating;
// }
// let book1=new Book("Phaedo", "Plato", 10);
// let book2= new Book("Harry Potter", "J.K. Rowling", 6);
// Book.prototype.isGood= function () {
//     if(this.rating>=7){
//     console.log("True");   
// }
// }
// book1.isGood();

//Q3.

function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood; 
    this.hungry = hungry;
}
Dog.prototype.playFetch = function() {
    this.hungry = true;
    this.mood = "playful";
    console.log("Ruff!");
}

let spot = new Dog("spot", "boxer", "angry", true);
// spot.playFetch();
// console.log(spot);

Dog.prototype.feed = function() {
    if(this.hungry === true) {
        hungry = false
        console.log("Woof!")
    } else {
        console.log("The dog doesn't look hungry")
    }
}
// spot.feed();
// console.log(spot);

Dog.prototype.toString = function() {
    console.log(`${this.name} is a ${this.mood} ${this.breed}`);
}
// spot.toString();
// console.log(spot);

//Q4 
let freezingPoint = {
    celsius:0,
    farenheit:32,
    kelvin:273.2
}
function Celsius (celsius){
    this.celsius=celsius;
}
Celsius.prototype.getFahrenheitTemp= function() {
    console.log(1.8 * this.celsius + 32);
}
Celsius.prototype.getKelvinTemp= function() {
    console.log(this.celsius+273);
}    
let outsideTemp = new Celsius(-10.0)
// outsideTemp.getFahrenheitTemp();
// outsideTemp.getKelvinTemp();

Celsius.prototype.isBelowFreezing= function () {
    bool=true;
    if(this.celsius>0){
        bool=false
    }
    console.log(bool)
}

// outsideTemp.isBelowFreezing();

//Q5
function Movie(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description
}

let movie1 = new Movie("Soylent Green", 1973, "thriller", "Charlton Heston", "dystopian thriller film");

Movie.prototype.blurb = function() {
    console.log(`${this.name} is a ${this.year} ${this.genre} film whose protagonist was ${this.cast}.`);
}

// movie1.blurb();

//Q6

function Vector(x,y) {
    this.x=x;
    this.y=y;
}
Vector.prototype.plus= function(vector){
    {return { x: (this.x + vector.x), y: (this.y + vector.y),}};
}
let v1 = new Vector(3, 4)
let v2 = new Vector(2, 3)

// let v1= new Vector(1,2);
// v1.plus(2,3);

// let v2 = new Vector(2,3);
// console.log(v1.plus(v2));

Vector.prototype.minus= function(vector){
    {return { x: (this.x - vector.x), y: (this.y - vector.y),}};
}
// console.log(v1.minus(v2));
Vector.prototype.getLength=function(){
    let c = Math.pow(this.x, 2) + Math.pow(this.y, 2)
    return Math.sqrt(c);
}
// console.log (v1.getLength());

//Q7
function Cylinder(radius, height) {
    this.radius = radius;
    this.height = height
}

let cyl = new Cylinder(5, 7)

Cylinder.prototype.getVolume = function() {
    volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume;
}

// console.log(cyl.getVolume());

Cylinder.prototype.getSurfaceArea = function() {
    area = (2 * Math.PI * Math.pow(this.radius, 2)) + (2 * Math.PI * this.radius * this.height);
    return area;
}

// console.log(cyl.getSurfaceArea());

//Q8
function Post(datePosted,user,text){
    this.datePosted=datePosted;
    this.user=user;
    this.text=text;
}
let newPosts = [
    new Post("2019-10-27", "Samantha", "Hey"), 
    new Post("2019-10-01", "Jenn", "Goodbye"), 
    new Post("2019-10-27", "Erik", "Yo")
];

let newPost2 = new Post("2019-10-27", "Betty", "Bonjour");
// console.log(newPosts);

Post.prototype.today = function() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    if(this.datePosted === date) {
        return true;
    } else {
        return false;
    }
}
// console.log(newPost2.today());

console.log(newPosts.filter((el) => {
    if(el.today()) {
        return el;
    }
}))