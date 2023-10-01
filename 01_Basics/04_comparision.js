
console.log("2" > 1); // true "2" automatically convert to number
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
  Reason => Comparision convert null to a number, treating it as ).
  That's why null >= 0 is true and null > 0 is false
*/

console.log("******** For Undedefined *********");
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);

// Strictly Check means check value and dataType
console.log("2" === 2);