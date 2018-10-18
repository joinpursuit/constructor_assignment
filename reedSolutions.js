function Human (name, age) {
  this.name = name;
  this.age = age;
};

Human.prototype.ageOneYear = function () {
  this.age++
};

Human.prototype.eating = function() {
  console.log("mmm, mmm...");
}

let dan = new Human("Dan", 32);

console.log(dan.age);
dan.ageOneYear();
console.log(dan.age);


//bonus stuff

let mary = new Human("Mary", 23);
let wanda = new Human("Wanda", 77);
let paul = new Human("Paul", 13);

let arr = [mary, wanda, paul];
//arr = arr.map(el) => cannot have const here to actually redefine the value ofarr

for (let i = 0; i < arr.length; i++) {
  arr[i].ageOneYear()

  for (let j = 0; j < arr.length; j++) {
    console.log(`${arr[i].name} and ${arr[j].name} aged a year!!`);
  }
}
