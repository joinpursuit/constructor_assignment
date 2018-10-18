// function Human (name,age){
//   this.name = name;
//   this.age = age;
// }
//
// Human.prototype.ageOneYear = function (){
//   this.age++;
//   return `${this.age}`;
// }
//
// Human.prototype.eating = function (){
//   return "mmm, mmm, mmm, I'm love'n it"
// }
//
// let Andre = new Human("Andres", 28);
// let YoungerAndre = new Human("YoungerAndre", 21);
// let OlderAndre = new Human("OlderAndre", 29);
//
// let Humans = [Andre,YoungerAndre,OlderAndre]
// Humans.forEach((Human)=>{
//    console.log(Human.age)
// })
// for(let i = 0; i < Humans.length; i++) {
//     console.log(Humans[i].age);
// } originally what I did, until Rinat and I improved on the foreach. I swear I did the same thing as my result for logging the humans ages. and decided to work only after rinat input her ideas.
// Humans.forEach((Human)=>{
//   console.log(Human.ageOneYear());
// })
//
// Humans.forEach((Human)=>{
//    console.log(Human.age)
// })
//
// Humans.forEach((Human)=>{
//   console.log(Human.eating());
// })


//2.

function Vector (x,y){
  this.x = x;
  this.y = y;
}

let A = new Vector (1,2)
let B = new Vector (2,3)
let O = new Vector (0,0)
let C = new Vector (3,4)
Vector.prototype.plus = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};
// // // here we have the argument vector that RETURNS A NEW VECTOR NOT NAMED V3. It returns just a new vector. AND WHAT IT RETURNS IS your constructor function property X plus argument vector.x, && constructor property Y plus arguement vector Y.
//
// Vector.prototype.minus = function (vector){
//   return new Vector(this.x - vector.x, this.y - vector.y)
// };
//


// console.log(A.plus(B));
// console.log(A.minus(B));

Vector.prototype.getDistance = function (vector){
 return Math.sqrt((vector.x- this.x ** 2) + (vector.y -this.y ** 2))
}
// I attempted this, only b/c i misread the question and thought this was what we were looking for

Vector.prototype.getLength = function (vector){
  return Math.sqrt(this.x ** 2 + this.y ** 2)
}
//console.log(C.getLength());
//console.log(C.getDistance(A));
//Rinat taught me  number**(exponent) Thank you Rinat
