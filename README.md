# Constructor Exercises

## Question 1

a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

```
function Person(firstName, middleName, lastName) {
  this.firstName = firstName
  this.middleName = middleName
  this.lastName = lastName
}

let patrick = new Person(`Patrick`, `George`, `Smith`)

```

b. Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
```


Person.prototype.fullName = function() {return `${this.firstName} ${this.middleName} ${this.lastName}`}


```

## Question 2

a. Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
```
function Book(title, author, rating) {
  this.title = title
  this.author = author
  this.rating = rating
}

let huckleberryFinn= new Book(`Adventures of Huckleberry Finn`, `Mark Twain', 9)

```

b. Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

```

Book.prototype.isGood = function () {this.rating >= 7? return true};

```


## Question 3

a. Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
```
function Dog(name, breed, mood, hungry) {
  this.name = name
  this.breed = breed
  this.mood = mood
  this.hungry = hungry
}

````
b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

```

Dog.prototype.playFetch = function () {
  this.hungry = true
  this.mood = `playful`
  console.log(`Ruff!`);
};


```

c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

```
Dog.prototype.feed = function(){
  if(this.hungry === true) {
    this.hungry = false
    console.log('Woof)
  } else {
    console.log("The dog doesn't look hungry")
  }
}

```

d. Add a prototype function called `toString` that returns a description of the dog:

```
Dog.prototype.toString = function() {
  console.log(`My dogs name is ${this.name}. He is a ${this.mood} ${this.breed}.`)
}


```

## Question 4

There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

C = (F - 32) / 1.8
F = 1.8 * C + 32
K = C + 273

a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

```
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.15
}

```

b. Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

```

function Celsius (celsius) {
  this.celsius = celsius,
  this.getFahrenheitTemp = function() {
    console.log(`It is ${(celsius * 1.8) + 32} degrees in Fahrenheit`)
  }, 
  this.getKelvinTemp = function() {
    console.log(`It is ${Math.floor(celsius + 273.15)} degrees in Kelvin`)
  }
}



let outsideTempt = new Celsius(10.0)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0

```

c. Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

```
Celsius.prototype.isBelowFreezing = function () {
  console.log(outsideTempt.celsius < freezingPoint.celsius)
}
outsideTempt.isBelowFreezing()


```

## Question 5

a. Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

```
function Movie (name, year, genre, cast, description) {
  this.name = name,
  this.year = year,
  this.genre = genre,
  this.cast = cast,
  this.description = description
}
let Avengers = new Movie ('Avengers Endgame', 2019, 'Comics', ['Ironman', 'Captain America' ], 'Superhero Movie'

```

b. Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.
```
Movie.prototype.blurb = function () {
  return console.log(`The ${this.genre} movie ${this.name} released in ${this.year} cast: ${this.cast}. Description: ${this.description}`)
}
```


## Question 6
 
Write a constructor Vector that represents a vector in two-dimensional space.
It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

Add a method `getLength` to the prototype that computes the length of the vector ;
that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

[Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

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
```
function Vector(x, y) {
  this.x = x
  this.y = y
}

Vector.prototype.plus = function (vector) {return { x: (this.x + vector.x), y: (this.y + vector.y),}};
Vector.prototype.minus = function (vector) {return { x: (this.x - vector.x), y: (this.y - vector.y),}};
Vector.prototype.getLength = function () {return Math.pow(this.x * this.x + this.y * this.y, 1 / 2)};

```
## Question 7

```


function Cylinder(radius,height){

    this.radius = radius
    this.height = height

}

Cylinder.prototype.getVolume = function () {
    return Math.floor(Math.PI *(this.radius*this.radius) * this.height)
}


Cylinder.prototype.getSurfaceArea = function () {
    return Math.floor(((2 * Math.PI)* Math.pow(this.radius,2) ) + (2 * Math.PI * this.radius * this.height))

}

```


## Question 8

[Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)

a. Write a constructor function called Post that has properties datePosted, user, and text. Create an array of Post objects.

```
function Post (datePosted, user, text) {
    this.datePosted = datePosted;
    this.user = user;
    this.text = text;
} 

```