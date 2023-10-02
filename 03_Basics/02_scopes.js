
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

if(true){
    let a = 40
    const b = 50
    var c =60
}

// console.log(a); it is not declare
// console.log(b); it is not declare
console.log(c); // but it will print and var treated as global so most of the dev avoid var 



function one(){
    username = "Mangesh"

    function two(){
        website = "youTube"
        console.log(username)
    }
    // console.log(website);

    two()
}

one()



console.log(addOne(20)) // u can call addOne

function addOne(num){
    return ++num;
}


// result(90) => You wil get "Cannot access 'result' before initialization" bcz we are storing the result inside result and it is not yet intialize

const result = function addTwoPrefix(num){
    return num+2;
}

console.log(result(90));