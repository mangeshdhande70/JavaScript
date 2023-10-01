
/*

        Primitive Datatypes
==================================

7 Types=> String, Number, Boolean, null, undefined, BigInt, Symbol

        Reference Datatypes (Non-Primitive)
==================================================

Array, objects, Functions


*/


let score = 123
let isLoggedIn = false
const pi = 3.14
let name ="Mangesh"
let value = null
let num  // undefined

// bigInt
let bigNumber = 123456723n
console.log(typeof bigNumber);


let id = Symbol("123")
let anotherId = Symbol("123")

console.log(id);
console.log(anotherId);
console.log(id === anotherId);


// Array
console.log("***** Array ******");
let array = ["Rakesh" , 24 , 6.5]
console.log(array);
console.log("Type of Array :: "+typeof array);

// Objects
console.log("\n***** Object ******");
let myObject = {
    name:"Mangesh",
    age: 24,
    height: 6.5
}
console.log(myObject);
console.log("Type of Object :: "+typeof myObject);


// Function
console.log("\n***** Function ******");
let myFunction = function(){
    console.log("hello World");
    return 1;
}

myFunction()
console.log("Type Of Function :: "+typeof myFunction); // also called Object function
