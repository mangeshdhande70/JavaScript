let myDate = new Date()

console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023,0,2)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myDOB = new Date("1998-11-10")
console.log(myDOB.toDateString());
console.log(myDOB.toLocaleDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

// to convert to sec
console.log(Math.round(myTimeStamp/1000));
console.log(Math.floor(Date.now()/1000));



let todayDate = new Date()
console.log(todayDate);
console.log(todayDate.getMonth() + 1);
console.log(todayDate.getDay());

// +1 bcz in JS month is start from 0
console.log(`Month is ${todayDate.getMonth()+1}`);


newDate.toLocaleString('default', {
    weekday: "long",
    
})