// 1.
//   * Create a Human constructor function that takes in a name and age.
//   * Add a prototype function ageOneYear that ages the humans age.
//   * Add a prototype function eating, that logs "mmm, mmm, mmm, I'm love'n it".
//   * Create an instance of the Human class.
//     * console log your humans age
//     * call ageOneYear on your human
//     * console log their age again.
//     * call eating on your human.

class Human {
  constructor(name, age){
    this.name = name;
    this.age = age;
  };
    Human.prototype.ageOneYear = function (){
      this.age++;
    };
    Human.prototype.eating = function (){
      console.log( `mmm, mmm, mmm, I'm loving it`)
    };
    let Trey = new Human("Trey", 31)

    console.log(Trey);
    Trey.ageOneYear();
    console.log(Trey.age);
   Trey.eating();
}
