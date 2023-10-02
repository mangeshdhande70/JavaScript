
// this refer to current context


const user = {
    username:"Mangesh",
    age: 24,

     welcomeMsg: function(){
           console.log(`${this.username} , welcome to our website`);
           console.log(this);
    }

}

// user.welcomeMsg()
// user.username="rakesh"
// user.welcomeMsg()

console.log(this);

// this is not work in function, it will work only function is written inside object
function chai(){
    let username = "ketan"
    // console.log(this);
    console.log(this.username);
}

// chai()



// ********** Arrow Function ***********

const addNums = (num1,num2) => {
     return num1+num2
}

console.log(addNums(4,5));


// Second Method

const subNums = (num1,num2) => num2-num1 // or const subNums = (num1,num2) => (num2-num1)
console.log(subNums(4,5));


// return object
const retObj = () => ({username:"Mangesh"})
console.log(retObj());


let arr = [1,2,3,4]

console.log(arr);

let i = 0
arr.forEach((n) =>{
    arr[i++] = n+1
})

console.log(arr);


/*** Difference b/w Regular function & Arrow Function  

1. Use of this keyword: Unlike regular functions, arrow functions do not have their own this.
2. Using new keyword: Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow function using the new keyword.

*/

let regularFunction = function(){
    console.log(arguments);
    };


var y= new regularFunction(1,2,3);

let arrowFunction = ()=> {
    console.log(arguments);
};

// new arrowFunction(1,2,3);
