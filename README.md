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

function Human(name,age){
  this.name = name;
  this.age = age;
}

//because we know the function is a prototype and will be applied to a variable with AGE INCLUDED this.age will read

Human.prototype.ageOneYear = function(number){
  this.age++
}

Human.prototype.eating = function (){
  console.log("mmm, mmm, mmm, I'm love'n it")
};

//Create an instance of the Human class.
let david = new Human ("David", 32);

//console log your humans age
console.log (david.age)

//call ageOneYear on your human
david.ageOneYear();

//console log their age again.
console.log(david.age);

//call eating on your human.
david.eating();

2.
Write a constructor Vector that represents a vector in two-dimensional space.
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
```

function Vector(x,y){
  this.x = x;
  this.y = y;
}
  Vector.prototype.plus = function(num1){
      let x = this.x + num1.x;
      let y = this.y + num1.y;
      let v3 = new Vector (x,y)
      return v3
    }
    Vector.prototype.minus = function(num1){
      let x = this.x - num1.x;
      let y = this.y - num1.y;
      let v4 = new Vector (x,y)
      return v4
    }
    Vector.prototype.getLength = function(num1){
      return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }

let v1 = new Vector (3,4)
let v2 = new Vector (4,5)
let vector =[v1,v2]
console.log (vector)
console.log(v1.plus(v2))
console.log(v1.minus(v2))
console.log(v1.getLength())
