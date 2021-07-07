// # Constructor Exercises

// ## Question 1

// a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

function Person(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.fullName = function() {
        console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)
    }
}

let james = new Person('James', 'Kirk', 'Tiberius');
let jabba = new Person('Jabba', 'Hutt', 'the');

console.log(james.firstName);

// b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

james.fullName()
jabba.fullName()

// ## Question 2

// a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.isGood = function() {
        if (rating >= 7) {
            return true
        } else {
            return false
        }
    }
}

let bluestEye = new Book('The Bluest Eye', 'Toni Morrison', 8);
let holes = new Book('Holes', 'Louis Sachar', 9);
let dominic = new Book('Dominic', 'William Steig', 7.5)

// b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

console.log(bluestEye.isGood())

// ## Question 3

// a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}

// b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

Dog.prototype.playFetch = function(dog) {
    dog.hungry = true
    dog.mood = 'playful'
    console.log('Ruff!!')
}

// c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

Dog.prototype.feed = function(dog) {
    if (dog.hungry = true) {
        dog.hungry = false
    } else {
        console.log('The dog doesnt look hungry...')
    }
}

// d. Add a prototype function called `toString` that returns a description of the dog:

Dog.prototype.toString = function() {
    return `The ${this.name} is of the ${this.breed}. It is currently ${this.mood}.`
}

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.2
}


// b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

function Celsius() {
    this.getFahrenheitTemp = function(temp) {
        return (temp * 9) / 5 + 32
    };
    this.getKelvinTemp = function(temp) {
        return + 273.15
    };
}

// ```js
// let outsideTempt = new Celsius(10.0)
// tenDegreesCelsius.celsius //returns 10.0
// tenDegreesCelsius.getKelvinTemp() //returns 283.0
// tenDegreesCelsius.getFahrenheitTemp() //returns 50.0
// ```

// c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

Celsius.prototype.isBelowFreezing = function(temp) {
    if (freezingPoint.celsius < 0) {
        return
    }
}

// ## Question 5

// a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

function Movie(name, year, genre, cast) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
}

let pursuit = new Movie('Pursuit the Movie', 2019, 'action', ['Hupaul Camacho', 'Dante Flowers', 'Voneil Brown'])

// b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.

Movie.prototype.blurb = function () {
    return `${this.name} came out in ${this.year}, starring ${this.cast}, a team of new dewvelopers working on an important project`
}

// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."


// ## Question 6
 
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

function Vector(x, y) {
    this.x = x;
    this.y = y
}

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

let vector1 = new Vector(7, 8);
let vector2 = new Vector(4, 3)

Vector.prototype.plus = function(a, b) {
    this.x = this.x + a
    this.y = this.y + b
    return `${this.x}, ${this.y}`
}

Vector.prototype.minus = function(a, b) {
    this.x = this.x - a
    this.y = this.y - b
    return `${this.x}, ${this.y}`
}

console.log(vector1.plus(2, 1));

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

let origin = new Vector(0, 0)

Vector.prototype.getLength = function () {

}

```js
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5
```
