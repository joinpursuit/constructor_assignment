// 1
function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.ageOneYear = function() {
  this.age++;
};

Human.prototype.eating = function() {
  console.log("mmm, mmm, mmm, I'm love'n it");
};

let newPerson = new Human("Bob", 25);

console.log(newPerson.age);
newPerson.ageOneYear();
console.log(newPerson.age);
newPerson.eating();

// 2
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vct) {
  return new Vector(this.x + vct.x, this.y + vct.y);
};

Vector.prototype.minus = function(vct) {
  return new Vector(this.x - vct.x, this.y - vct.y);
};

Vector.prototype.getLength = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
