function Vector(x, y){
  this.x = x;
  this.y = y;
}

let v1 = new Vector(2,5)
let v2 = new Vector(3,7)

console.log(v1);
console.log(v2);

Vector.prototype.plus = function(vec){
  let sum1 = this.x + vec.x
  let sum2 = this.y + vec.y
  return `x: ${sum1}, y: ${sum2}`
};
console.log(v1.plus(v2));

Vector.prototype.minus = function(vec){
  let sum1 = this.x - vec.x
  let sum2 = this.y - vec.y
  return `x: ${sum1}, y: ${sum2}`
};
console.log(v1.minus(v2));

Vector.prototype.getLength = function(){
  return Math.hypot(this.x, this.y)
}
let v3 = new Vector(3, 4)
console.log(v3);
console.log(v3.getLength());
