//a. Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name. 
//Create 2 instances of a `Person`. Print one of their first names.

function Person(firstName, middleName, lastName){
	this.firstName = firstName;
	this.middleName = middleName;
	this.lastName = lastName;
}

let chuck = new Person('chuck', 'ezefunna', 'okonkwo-aguolu');
let ekene = new Person('ekene', 'dilichukwu', 'okonkwo-aguolu');

console.log(chuck.firstName);

//b. Write a prototype function in `Person` called `fullName` that will return a formatted string
// of an instance's full name. Call this method on both the instances you created in part a.

Person.prototype.fullName = function(){
	return `${this.firstName} ${this.middleName} ${this.lastName}`;
}

console.log(chuck.fullName());
console.log(ekene.fullName());

//2a. Create a constructor function called `Book` that has properties `title`,
// `author` and `rating`. Create some instances of `Book`.

function Book(title, author, rating){
	this.title = title;
	this.author = author;
	this.rating = rating;
}

let amazingBook = new Book('Hyperion', 'Dan Simmons', 10);
let averageBook = new Book('Atlas Shrugged', 'Ayn Rand', 8);
let trashBook = new Book('Stephen A Smith, A Life Story', 'Stephen A Smith', 0.1);

//2b. b. Add a prototype function to `Book` called `isGood` that returns `true`
// if its rating is greater than or equal to 7

Book.prototype.isGood = function(){
	return this.rating > 7;
}

console.log(trashBook.isGood());

//3a.a. Create a `Dog` constructor function with four properties: `name (string), breed (string),
// mood (string), and hungry (boolean)`.

function Dog(name, breed, mood, hungry){
	this.name = name;
	this.breed = breed;
	this.mood = mood;
	this.hungry = hungry;
};



//3b. Add a prototype function called `playFetch`. It should set the dog's `hungry` property to 
//`true`, set its mood property to `playful`, and log "Ruff!"

Dog.prototype.playFetch = function(){
	this.hungry = true;
	this.mood = 'playful'
	console.log('Ruff');
}

//3c. c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, 
//it should log "The dog doesn't look hungry"

Dog.prototype.feed = function(){
	if(this.hungry){
		this.hungry = false;
		console.log('Woof');
	}
	else{
		console.log('The dog doesnt look hungry');
	}
}

//3d. Add a prototype function called `toString` that returns a description of the dog:

Dog.prototype.toString = function(){
	let sentence;
	if(this.hungry){
		sentence = 'up for some treats!'
	}
	else{
		sentence = 'up to run around outside!'
	}
	return `This${this.breed}'s name is ${this.name} and is the goodest boy. Right now he is in a ${this.mood} mood and is ${sentence}`
}

let napoleon = new Dog('napoleon', 'golden retriever', 'happy', true);
napoleon.playFetch();
napoleon.feed();
napoleon.feed();

console.log(napoleon.toString());

//4a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`,
// and `kelvin`. Give them all values equal to the freezing point of water.

const freezingPoint = {
	celsius : 0,
	fahrenheit: 32,
	kelvin: 273
};

//4b. Make a constructor function called `Celsius` that has one property: `celsius`, 
//and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

function Celsius(celsius){
	this.celsius = celsius;
	this.getFahrenheitTemp = function(){
		return 1.8 * this.celsius + 32; 
	}
	this.getKelvinTemp = function(){
		return 273 + this.celsius;;
	}

	this.isBelowFreezing = function(){
		return this.celsius < 32;
	}
}

let tenDegreesCelsius = new Celsius(10.0)
console.log(tenDegreesCelsius.celsius) //returns 10.0
console.log(tenDegreesCelsius.getKelvinTemp()) //returns 283.0
console.log(tenDegreesCelsius.getFahrenheitTemp()) //returns 50

//c. Give `Celsius` a constructor function called `isBelowFreezing` 
//that returns a `Bool` (true if the temperature is below freezing).

//5a. Create a constructor function called `Movie` that has properties
// for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

function Movie(name, year, genre, cast, description){
	this.name = name;
	this.year = year;
	this.genre = genre;
	this.cast = cast;
	this.description = description;
}

let bestMovie = new Movie('The Dark Knight', 2008, 'superhero action', 'heath ledger', 'it was an ok movie');

//.5b. Create an prototype function inside `Movie` called `blurb` that returns a formatted
// string describing the movie.

Movie.prototype.blurb = function(){
	return `${this.name} came out in ${this.year}. It was a ${this.genre} which starred ${this.cast}. ${this.description}`;
}

console.log(bestMovie.blurb());

//6Write a constructor Vector that represents a vector in two-dimensional space.
//It takes two number arguments: `x` and `y` parameters, which it should be saved to
// properties of the same name.


function Vector(x, y){
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vector){
	return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector){
	return new Vector(this.x - vector.x, this.y - vector.y);
}

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

//Add a method `getLength` to the prototype that computes the length of the vector ;
//that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

Vector.prototype.getLength = function(){
	return Math.sqrt((this.x * this.x) + (this.y * this.y))
}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5












