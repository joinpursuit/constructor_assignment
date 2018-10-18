// Question 1:
function Human(name, age) {
  this.name = name;
  this.age = age;
  }

  Human.prototype.ageOneYear = function() {
    this.age++;
  }

  Human.prototype.eating = function() {
    console.log(`Mmm, mmm, mmm, I'm love'n it.`);
  }


let becky = new Human('Becky', '27');

console.log(`${becky.name} is ${becky.age} years old.`);
becky.ageOneYear();
console.log(`${becky.name} is now ${becky.age} years old.`);
becky.eating();

// Question 2:

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function(vector) {
      return new Vector(this.x + vector.x, this.y + vector.y);
    };
    this.minus = function(vector) {
      return new Vector(this.x - vector.x, this.y + vector.y);
    };
    this.getLength = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
  }
}


var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// => 5
