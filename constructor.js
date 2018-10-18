//1.
// * Create a Human constructor function that takes in a name and age.
function Human(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
};

//* Add a prototype function ageOneYear that ages the humans age.

Human.prototype.ageOneYear = function(){
  this.age++
};

//* Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".
Human.prototype.eating = function(){
  console.log("mmm, mmm, mmm, I'm love'n it");
}

//  * Create an instance of the Human class.
let ani = new Human("Ani", 32, "basting");
let ron = new Human("Ron", 30, "avocado");
let ann = new Human("Ann", 28, "the sun");

let arr = [ani, ron, ann]

// //for loops to:------------

// * log humans age
// * call ageOneYear on your human
// * log their age again.
// * call eating on your human.

for (let i = 0; i < arr.length; i++) {

  console.log(
    `${arr[i].name}: Hi, I'm ${arr[i].name} and I'm ${arr[i].age}.`
  );
}

for (let j = 0; j < arr.length; j++) {

  arr[j].ageOneYear()

  console.log(
    `${arr[j].name}: My birthday was one second ago, so now I'm ${arr[j].age}. I enjoy ${arr[j].hobby}.`
  );

  arr[j].eating()
}

//----------------

// //Or, no for loop and only one person:
//
// // * console log your humans age
//     console.log(
//       `${ani.name}: Hi, I'm ${ani.name} and I'm ${ani.age}.`
//     );
//
// // * call ageOneYear on your human
//     ani.ageOneYear();
//
// // * console log their age again.
//     console.log(
//       `${ani.name}: My birthday was one second ago, so now I'm ${ani.age}. I enjoy ${ani.hobby}.`
//     );
//
// // * call eating on your human.
//     ani.eating();

//-------------------------------------



// // 2
function Vector (x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (vec) {
  let v1 = new Vector(this.x + vec.x, this.y + vec.y)
  return v1
};

Vector.prototype.minus = function (vec) {
  let v1 = new Vector(this.x - vec.x, this.y - vec.y)
  return v1
};

Vector.prototype.getLength = function () {
  dist = Math.sqrt( (this.x ** 2) + (this.y ** 2) )

  return dist
};

let v1 = new Vector(1,2);
let v2 = new Vector(2,3);
let v3 = new Vector(3,4);

console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v3.getLength());



















//
