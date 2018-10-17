//Question 1
function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.ageOneYear = function () {
  return this.age++;
};

let claire = new Human('Claire', 25);
let john = new Human('John', 30);
let crystal = new Human('Crystal', 20);

let humans = [claire, john, crystal];

humans.forEach((human) => {
  console.log(human.name + ' is ' + human.age + ' years old.');
});

Human.prototype.eating = function () {
  return ` mmm, mmm, mmm, I'm love'n it!`;
};

humans.forEach((human) => {
  console.log(`${human.age} is ${human.name}`);
});

humans.forEach((human) => {
  human.ageOneYear();
  console.log(`${human.age} is the new age for ${human.name}`);
});

humans.forEach((human) => {
  console.log(`${human.name} says "${human.eating()}"`);
});


//Question 2

// function Vector(x, y) {
//   this.x = x;
//   this.y = y;
// }
//
// Vector.prototype.plus = function (addVec) {
//   return new Vector(this.x + addVec.x, this.y + addVec.y);
// };
//
// Vector.prototype.minus = function (reduceVec) {
//   return new Vector(this.x - reduceVec.x, this.y - reduceVec.y);
// };
//
// Vector.prototype.getLength = function (x, y) {
//   return Math.sqrt(this.x * this.x + this.y * this.y);
// };
//
// let v1 = new Vector(1, 2);
// let v2 = new Vector(2, 3);
// let v3 = new Vector(3, 4);
// console.log(v1.plus(v2));
// console.log(v1.minus(v2));
// console.log(v3.getLength());
