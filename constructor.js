//Jonathan Erquinigo
/*1.
  * Create a Human constructor function that takes in a name and age.
  * Add a prototype function ageOneYear that ages the humans age.
  * Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".
  * Create an instance of the Human class.
    * console log your humans age
    * call ageOneYear on your human //im stuck on this part
    * console log their age again.
    * call eating on your human.*/

function Human(name,age){
  this.name = name;
  this.age = age;
}; // Human constructor

Human.prototype.ageOneYear = function(){
      this.age++
      console.log(this.age)
}; //ageOneYear end
Human.prototype.eating = function(){
      console.log("mmm, mmm, mmm, I'm love'n it");
}; //eating age end

let jonathan = new Human("Jonathan",26)
let mary = new Human("Mary", 30)

jonathan.ageOneYear()
jonathan.eating()

/*Write a constructor Vector that represents a vector in two-dimensional space.
It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

Add a method `getLength` to the prototype that computes the length of the vector ;
that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

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
```*/

// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)

function Vector(x,y){
  this.x = x;
  this.y = y;


};
Vector(1,2)
Vector.prototype.plus = function (vector){
  //add x with vector x and y with vector y and then return results to new vector
console.log(vector.y)
  let newVector = new Vector(this.x + vector.x, this.y + vector.y)
return newVector
  // let newVector2 = new Vector(newVector2 + newVector2 + this.y)

};

Vector.prototype.minus = function(vector){

let newMinusVector = new Vector(this.x - vector.x, this.y - vector.y)
return newMinusVector

};

Vector.prototype.getLength = function(vector){
  //Math.sqrt(9);
//use the pythagorium theorum
  //let length = Math.sqrt((this.x * this.y))
  //return length
  let length = Math.pow(this.x, 2) + Math.pow(this.y,2)

  return length

//   function pythagorean(sideA, sideB){
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }
}


let newVector = function(Vector){

}
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)

console.log(v1.plus(v2))
console.log(v1.minus(v2))
console.log(v1.getLength(v2))
//Vector(v1,v2)


/*var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5*/
