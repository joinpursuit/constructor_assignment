# Constructor Exercises

1.
  * Create a Human constructor function that takes in a name and age.
  * Add a prototype function ageOneYear that ages the humans age.
  * Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".
  * Create an instance of the Human class.
    * console log your humans age
    * call ageOneYear on your human
    * console log their age again.
    * call eating on your human.

function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.ageOneYear = function () {
   return this.age += 1
}
Human.prototype.eating = function yum(){
  console.log("pah tah pah, pah, paaahhhhhh..I'm lovin' it")
}
let jon = new Human("Jon",25);
let snoop = new Human("Snoop", 420);
let example = new Human("Optimus", 5000);
let huhu = [jon,snoop,example]
 function gimmeage() {
   huhu.forEach(el => {
     console.log(el.name + " is " + el.age " years old.")
     })
 }
console.log(jon.ageOneYear)
//////////////////////
i logged the age two ways cause im not certain which way you want us to do it.

let huhu = [jon,snoop,example]
function gimmeage() {
   huhu.forEach(el => {
     console.log(`${el.name} is ${el.age} years old.`)
     })
console.log(jon.age)
////////////////////////////////////

console.log(jon.eating())


2.
Write a constructor Vector that represents a vector in two-dimensional space.
It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

Add a method `getLength` to the prototype that computes the length of the vector ;
that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

function Vector(x, y){
  this.x = x;
  this.y = y;
}

Vector.prototype.add = function(avector) {
  let newx = this.x + avector.x;
   let newy = this.y + avector.y;
   return [newx, newy]
}
Vector.prototype.minus = function(avector) {
  let newx = this.x - avector.x;
   let newy = this.y - avector.y;
   return [newx, newy]
}
Vector.prototype.getLength = function (vec) {
   let newx =this.x, newy =this.y
  let distance = Math.sqrt((Math.pow(newx,2))+(Math.pow(newy,2)))
  return distance
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
