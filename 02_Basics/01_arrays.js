// JavaScript arrays are resizable and can contain a mix of different data types. 

let myMixArray = [1,"Mangesh",90,3.2,true]

// console.log(myMixArray);

let myArray = [0,1,3,4]
// console.log(myArray[1]);

// myArray.push(6)
// console.log(myArray);
// console.log(myArray.pop());


// to add element in 0th position but not reccomended
myArray.unshift(100)
console.log(myArray);
// to remove elemwent from 0th position  
myArray.shift()
console.log(myArray);


// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(3));
// console.log(myArray.includes(4));

const newArr = myArray.join() // it convert the array (object) to string
// console.log(myArray);
// console.log(newArr);
// console.log(typeof myArray);
// console.log(typeof newArr);


const myNewArr = myArray.slice(1,3)
console.log("A" , myArray);
console.log(myNewArr);


// it manipulate original Array
const myNewArr1 = myArray.splice(1,3)
console.log("A" , myArray);
console.log(myNewArr1);


