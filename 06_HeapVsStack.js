// All Primitive datatypes stored in Stack Memroy and Non-Primitive Stored in Heap Memory

console.log("******** For Primitive **********");
let myEmail = "md7@gmail.com"
let copyEmail = myEmail

console.log(myEmail);
console.log(copyEmail);

console.log("******** After Updation in copyEmail **********");
copyEmail = "mangesh70@gmail.com"
console.log(myEmail);
console.log(copyEmail);


console.log("\n******** For Non-Primitive (Reference) **********");

let myObject = {
    email: "md7@gmail.com",
    upi: "md@upi"
}

let copyObject = myObject

console.log(myObject);
console.log(copyObject);

console.log("\n******** After Updation in copyObject **********");
myObject.email = "mangeshdhande70@gmail.com"
console.log(myObject);
console.log(copyObject);