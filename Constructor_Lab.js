/* Question 1. a:
Write a constructor function called Person that has 3 properties: 
a first name, a last name and a middle name. 
Create 2 instances of a Person. Print one of their first names.
*/

console.log(`Question 1. a :`);

function Person(firstName, lastName, middleName) {
  this.firstName = firstName;
  this.lastName = lastName;
  if (middleName === undefined){
    middleName = '';
  }
  this.middleName = middleName;
}

let person1 = new Person('Sharrar', 'Khan');
let person2 = new Person('Douglas', 'MacKrell', 'N/A');

console.log(`First name of one of the persons : `, person1.firstName)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 1. b:
Write a prototype function in Person called fullName that will return a formatted string 
of an instance's full name. Call this method on both the instances you created in part a.
*/

console.log(`\nQuestion 1. b :`);

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

console.log(`First person's full name : `, person1.fullName());
console.log(`Second person's full name : `, person2.fullName());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 2. a:
Create a constructor function called Book that has properties title, author and rating. Create some instances of Book.
*/

console.log('Question 2. a :');
function Book (title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
}

let book1 = new Book('Labyrinth', 'Catherine Coulter', 6);
let book2 = new Book('Sophia, Princess Among Beasts', 'James Patterson', 8);
let book3 = new Book('America\'s Reluctant Prince: The Life of John F. Kennedy Jr.', 'Steven M. Gillon', 9);
let book4 = new Book('The Inn', 'James Patterson', 8);
let book5 = new Book('Heaven', 'V.C. Andrews', 7);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 2. b :
Add a prototype function to Book called isGood that returns true if its rating is greater than or equal to 7
*/
console.log('Question 2. b :');

Book.prototype.isGoog = function() {
  return this.rating >= 7;
}

console.log(`The book "${book1.title}" is a good book : ${book1.isGoog()}`);
console.log(`The book "${book2.title}" is a good book : ${book2.isGoog()}`);
console.log(`The book "${book3.title}" is a good book : ${book3.isGoog()}`);
console.log(`The book "${book4.title}" is a good book : ${book4.isGoog()}`);
console.log(`The book "${book5.title}" is a good book : ${book5.isGoog()}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 3. a : 
Create a Dog constructor function with four properties: name (string), breed (string), 
mood (string), and hungry (boolean).
*/
console.log('Question 3. a :');
function Dog(name, breed, mood, hungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}

let dog1 = new Dog('Pluto', 'Beagle', 'Playful', false);
let dog2 = new Dog('Rex', 'Husky', 'Engaged', true);
let dog3 = new Dog('Ace', 'Shepherd', 'Relax', false);
console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* Question 3. b: 
Add a prototype function called playFetch. It should set the dog's hungry property to true, 
set its mood property to playful, and log "Ruff!"
*/
console.log('Question 3. b :');
Dog.prototype.playFetch = function() {
  this.hungry = true;
  this.mood = 'playful';
  console.log(this.name, ':  Ruff!');
}

dog2.playFetch();
dog3.playFetch();
console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 3. c: 
Add a prototype function called feed. If the dog is hungry, it should set hungry to false 
and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
*/
console.log('Question 3. c :');
Dog.prototype.feed = function() {
  if (this.hungry) {
    this.hungry = false;
    console.log(this.name, `: Woof!!`);
  } else {
    console.log(this.name, ` doesn't look hungry`);
  }
}
dog1.feed();
dog2.feed();
console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* Question 3. d: 
Add a prototype function called toString that returns a description of the dog:
*/
console.log('Question 3. d :');
Dog.prototype.toString = function() {
  let feeding = 'not hungry';
  if (this.hungry){
    feeding = 'hungry';
  }
  return (`${this.name} is a ${this.mood} and ${feeding} ${this.breed}`);
}

console.log(dog1.toString());
console.log(dog2.toString());
console.log(dog3.toString());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 4
There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
C = (F - 32) / 1.8 
F = 1.8 * C + 32 
K = C + 273

Question 4. a: 
Make an object called freezingPoint that has three properties: celsius, fahrenheit, and kelvin. 
Give them all values equal to the freezing point of water.
*/
console.log('Question 4. a :');
let freezingPoint = {
  celsius: 0,
  Fahrenheit: 32,
  kelvin: 273,
}
console.log(`The water's freezing temperature :`, freezingPoint);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* Question 4. b:
Make a constructor function called Celsius that has one property: celsius, 
and two methods getFahrenheitTemp, and getKelvinTemp.

let outsideTempt = new Celsius(10.0)
tenDegreesCelsius.celsius //returns 10.0
tenDegreesCelsius.getKelvinTemp() //returns 283.0
tenDegreesCelsius.getFahrenheitTemp() //returns 50.0
*/
console.log('Question 4. b :');
function Celsius (temperature) { 
  this.celsius = temperature 
  this.fahrenheit = function getFahrenheitTemp() {
                      return 1.8 * this.celsius + 32
                    };
  this.felvin = function getKelvinTemp() {
                  return this.celsius + 273;
                };   

}

let outsideTempt = new Celsius(10.0);
console.log(`Outside temperature : `, outsideTempt.celsius, `C`);
console.log(`Outside temperature : `, outsideTempt.fahrenheit(), `F`);
console.log(`Outside temperature : `, outsideTempt.felvin(), `K`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* Question 4. c:
Give Celsius a constructor function called isBelowFreezing that returns a Bool 
(true if the temperature is below freezing).
*/

console.log('Question 4. c :');
Celsius.prototype.isBelowFreezing = function () {
  return (this.celsius < freezingPoint.celsius);
}

let temp1 = new Celsius(-5);
let temp2 = new Celsius(1);
let temp3 = new Celsius(0);

console.log(temp1.celsius, `is bellow the freezing temperature`, temp1.isBelowFreezing());
console.log(temp2.celsius, `is bellow the freezing temperature`, temp2.isBelowFreezing());
console.log(temp3.celsius, `is bellow the freezing temperature`, temp3.isBelowFreezing());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 5. a:
Create a constructor function called Movie that has properties 
for name, year, genre, cast, and description. Create an instance of your Movie
*/

console.log(`Question 5. a :`);

function Movie(name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}

let myMovie = new Movie('The Lion King', 2019, 'Comedy',
 ['Donald Glover','Beyoncé','Seth Rogen', 'Chiwetel Ejiofor', 'Billy Eichner'], 
 'Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa.');
 
 console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* Question 5. b:
Create a prototype function inside Movie called blurb that returns a formatted string describing the movie.
Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man 
named Borat who was visiting America from Kazakhstan."
*/

console.log(`Question 5. b :`)
 Movie.prototype.blurb = function(){
   return this.name+' came out in '+this.year+'. \nIt\'s a '+this.genre+' movie starring '+this.cast[0]+ ' as '+this.description
 }

console.log(myMovie.blurb());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


 /* Question 6
Write a constructor Vector that represents a vector in two-dimensional space. 
It takes two number arguments: x and y parameters, which it should be saved to properties of the same name. 
 */

 console.log('Question 6 :');

 function Vector(x, y) {
   this.x = x;
   this.y = y;
 }

 /* Give the Vector prototype two methods, plus and minus, that take another vector as an argument 
 and returns a new vector that has the sum or difference of the two vectors’ 
 (the one in this and the parameter) x and y values.
 */

 Vector.prototype.plus = function(vect) {
   return outVect = new Vector(this.x + vect.x, this.y + vect.y);
 }

 Vector.prototype.minus = function(vect) {
  return outVect = new Vector(this.x - vect.x, this.y - vect.y);
}

let v1 = new Vector(1, 2);
let v2 = new Vector(2, 3);
console.log(`The sum of `, v1,` and `, v2, ` is `, v1.plus(v2));
console.log(`The difference of `, v1,` and `, v2, ` is `, v1.minus(v2));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);

/* Add a method getLength to the prototype that computes the length of the vector ; 
that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
*/

Vector.prototype.getLength = function() {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}
var v3 = new Vector(3, 4)
console.log('The length of ',v3, ' is ', v3.getLength());
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);