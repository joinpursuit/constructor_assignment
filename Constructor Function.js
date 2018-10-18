function Human (name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
};

Human.prototype.ageOneyear = function (){
     this.age = this.age + 1
     return this.age
};

Human.prototype.eating = function (){
    return "mmm, mmm, mmm, I'm love'n it "
};

let jane = new Human ("Jane", 25, "Female")
let jacky = new Human ("Jacky", 28, "Male")

console.log(jane.name)
console.log(jane.age)
console.log(jane.ageOneyear())
console.log(jane.eating())
