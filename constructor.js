// function Human (name, age) {
//   this.name = name;
//   this.age = age;
// }
// Human.prototype.ageOneYear = function () {
//      this.age++;
//     }
//   Human.prototype.eating = function () {
//         return "mmm, mmm, mmm, I'm love'n it";
//     }
//  let koohyar = new Human("Koohyar", 28);
//  console.log(koohyar.age);
//
//
// koohyar.ageOneYear()
// console.log(koohyar.age);
// koohyar.eating()
// console.log(koohyar.eating());


//2.

function Vector(x, y) {
this.x = x;
this.y = y;

}
Vector.prototype.plus = function(obj) {

  return new Vector(this.x + obj.x, this.y + obj.y);

}
let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)

console.log(v1.plus(v2));

Vector.prototype.minus = function (obj) {
  return new Vector(this.x - obj.x, this.y - obj.y);

}

console.log(v1.minus(v2));

Vector.prototype.getLength = function () {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
