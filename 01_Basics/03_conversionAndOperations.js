let score = "33"
let num = "22a"

console.log(typeof score);
console.log(typeof(num));

let scoreInNumber = Number(score)
let numInNumber = Number(num)

console.log(typeof scoreInNumber);
console.log(typeof numInNumber);
console.log(scoreInNumber);
console.log(numInNumber)

/*
 Coverting to Number
 ===================================================================

  String consist only Number then               => "33" = 33
  String consist alphanumeric Value then "22ab" => NaN (Not a Number)
  Boolean convert to Number                     => true = 1, false = 0

*/


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

isLoggedIn = 0
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let sum = 33
let stringSum = String(sum)
console.log(stringSum);
console.log(typeof stringSum)



// ********************* Operations *********************************

console.log("1"+2);
console.log(1+"2");
console.log(1+2+"3");
console.log(3 + 4 * 5 % 3);


console.log(+true);
console.log(+"");