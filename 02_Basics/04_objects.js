const tinderUser = new Object() // this is singleton object
const newTinderUser = {}       // this it non-singlton object

newTinderUser.id = 123
newTinderUser.name = "sammy"
newTinderUser.isloggedIn = false

// console.log(newTinderUser);


const regularUser = {
    email: "md7@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Mangesh",
            lastname:"Dhande"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname);




const obj1 = {1:"a" , 2:"b", 3:"c"}
const obj2 = {4:"d" , 5:"e", 6:"f"}
const obj3 = {1:"g" , 2:"h"}

// Merging two or more Objects
// const obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(obj4);

//using Spread Operator
const obj4 = {...obj1,...obj2}
// console.log(obj4);


const users = [
    {
        id:12,
        name:"Mangesh",
        age:24
    },
    {
        id:13,
        name:"Rakesh",
        age:24
    },
    {
        id:15,
        name:"Amit",
        age:24
    }
]

// console.log(users[1].name);

// console.log(newTinderUser);

// getting all the keys
// console.log(Object.keys(newTinderUser));
// console.log(Object.values(newTinderUser));
// console.log(Object.entries(newTinderUser));

// propert is present in object or not
// console.log(newTinderUser.hasOwnProperty('isloggedIn'));
// console.log(newTinderUser.hasOwnProperty('islogoff'));


console.log("******* Object de-structure *********");

const course = {
    coursename:"JS in Hindi",
    courseprice: 999,
    courseInstructor: "Hitesh Chaoudhary"
}

console.log(course.courseInstructor);

// Objecy 
const {courseInstructor} = course
console.log(courseInstructor);

// U can also use
const {courseprice: price} = course
console.log(price);