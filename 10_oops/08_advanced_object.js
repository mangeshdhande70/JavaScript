
const pi = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(pi);

// why we are  not able to change the value of pi 
// bcz in backend below properties are false
/* 
     writable: false,
     enumerable: false,
     configurable: false
  */


 let chai = {
    username:"Mangesh",
    email:"md7@gmail.com",
    age:24
 }    


let props = Object.getOwnPropertyDescriptor(chai,"username")
console.log(props);

for (const [key,value] of Object.entries(chai)) {

    console.log(`${key} : ${value}`);
    
}


// to change properties of username
Object.defineProperty(chai,"username",{
      writable: false,
      enumerable: false,
     configurable: false

});

let afterDefineProperty = Object.getOwnPropertyDescriptor(chai,"username")
console.log(afterDefineProperty);

// if you make enumerable: false then that perticular prop will not iterate

for (const [key,value] of Object.entries(chai)) {
    // console.log(`${key}`);
    console.log(`${key} : ${value}`);
    
}