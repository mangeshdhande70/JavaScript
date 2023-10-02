// Singleton => when object is created by constructor then it is singleton 
// Object.create



// object literals

let mySymbol = Symbol("myKey1")
let mySymbol2 = Symbol("myKey2")

let JsUser = {

    name: "Mangesh",
    "full name":"Mangesh Dhande",
    age: 24,
    email: "md7@google.com",
    // if you want to use symbol as key then
    [mySymbol]: "Key1",
    // you can use symbol as below but it'll not treated as symbol
    mySymbol2: "key2",
    lastLoginDays: ["Monday" , "Wednsday"]

}


// console.log(JsUser.email);
// Best Way bcz then full name you can't call using above method
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);

// console.log(JsUser[mySymbol]);
// console.log(JsUser["mySymbol2"]);
// console.log(typeof JsUser.mySymbol2);

// console.log(JsUser);


JsUser.email = "mdmangesh@gmail.com"
console.log(JsUser.email);

// If you want to freez the object means after this object will not be manipulate then
// Object.freeze(JsUser)
// JsUser.email = "md89@google.com"
// console.log(JsUser.email);


// Adding Function in object
JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingWithName = function(){
    console.log(`Hello Js User ${this["full name"]}`);
}

JsUser.greeting()
JsUser.greetingWithName()


console.log("\n ********* using Consle if we call function **********");
console.log(JsUser.greeting());
console.log(JsUser.greetingWithName());

console.log(JsUser);

JsUser.greetingWithMailId =function myFun() {

    console.log(`Hi ${this.email}`);

}

console.log(JsUser);



