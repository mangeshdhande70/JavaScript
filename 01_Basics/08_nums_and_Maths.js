
const score = 400
console.log(score);

// Specifically cast (Strictly)
let balance = new Number(5000)
console.log(balance);

let floatvalue = new Number(5000.1934567)
console.log(floatvalue.toFixed(2));

console.log(floatvalue.toPrecision(5));

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


// If you are creating ludo game and there you want 1 to 6 random then

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);