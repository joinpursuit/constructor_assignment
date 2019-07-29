console.log('===============Question 1=============');
function Person(first, middle, last) {
this.first = first;
this.middle = middle;
this.last = last;
}

let rapper1 = new Person('Aubrey', 'Drake', 'Graham');
let rapper2 = new Person('Shawn', 'Corey', 'Carter');
console.log(rapper1.first);

Person.prototype.full = function() {
  console.log(`${this.first} ${this.middle} ${this.last}`);;
};

rapper1.full();
rapper2.full();

console.log('================QUESTION 2=============');
function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
}

let book1 = new Book('silence of the lambs', 'Thomas Harris', '9');
let book2 = new Book('kiss the girls', 'james patterson', '5');
let book3 = new Book('Hamlet', 'Will Shakespear', '10');
Book.prototype.best = function() {
  console.log(`${this.rating}` >= 7);
};
book2.best();

console.log('================QUESTION 3================');
function Dog(name, breed, mood, hungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.hungry = hungry;
}
let dog1 = new Dog('rollie', 'Pug', 'fun', true);
let dog2 = new Dog('Bingo', 'Beagle', 'calm', false);
console.log('question 3b');

Dog.prototype.playFetch = function() {
  console.log(`${this.hungry} ${this.mood} Ruff`);
};
dog2.playFetch('Ruff');
console.log('question3c');
Dog.prototype.feed = function() {
  console.log(`${this.hungry} the dog doesnt look hungry`);
};
dog1.feed();
console.log('question3d');
Dog.prototype.toString = function() {
  console.log(`${this.name} ${this.breed} ${this.mood} ${this.hungry}`);
}
dog1.toString();
dog2.toString();
console.log('====================QUESTION4==================');
let temp = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273,
    freezingPoint: function () {
        console.log(temp);
      },

    getTemp: function () {
        return `${this.celsius} ${this.fahrenheit} ${this.kelvin}`;
      },
    };

temp.getTemp();

console.log('=============QUESTION 5=================');
function Movie(name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}

let movie1 = new Movie('Coming to America', '1984', 'comedy', 'Eddie and Arsenio', 'funny AF!');
let movie2 = new Movie('Harlem Knights', '1986', 'comedy', 'Eddie and Richard', 'super funny!');
Movie.prototype.blurb = function () {
  console.log(`${this.name} came out ${this.year} it was a ${this.genre} starring ${this.cast}
     and it was ${this.description}`);
};

movie1.blurb();
movie2.blurb();

console.log('==================QUESTION 6==========');
