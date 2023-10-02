
function addTwoNum(num1, num2){
    console.log("Addition of two num is :: ", num1+num2);
}

// addTwoNum(2,3)


function logInUserMsg(username){
    // if(username === undefined) ==> if(!username) bcz undefinde considered as false
    if(!username){
        console.log("Please provide username");
        return
    }
    return `${username} is logged in`
}

// logInUserMsg()
// console.log(logInUserMsg("Hitesh"));



// ... is called Rest Operator and also called Spread Operator but they are diff in diff cases
function calculateCartPrice(...num){
    sum = 0 
    num.forEach(element => {
        sum+=element
    });

    return sum
}


console.log(calculateCartPrice(200,300,200));


const user = {
    username:"Mangesh",
    age: 24
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} & age is ${anyObj.age}`);
}

handleObject(user)

handleObject({
    username:"Ketan",
    ag:20
})

handleObject({
    username:"Amit",
    age:40
})


function hanldeArrays(anyArray){
    return anyArray[1]
}

console.log(hanldeArrays([10,20,30]));

console.log(hanldeArrays([10]));


const addValuePrefix = function addTwoPrefix(num){
    return ++num;
}

const addValuePostfix = function addTwoPostfix(num){
    return num++;
}

console.log(addValuePrefix(2));
console.log(addValuePostfix(2));