
const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()

    },1000)
})

promiseOne.then(function(){
    console.log("Promise is resolved");
})


new Promise(function(resolve,reject){
    console.log("Async 2 is complete");
    resolve()
}).then(()=>{
    console.log("Promise 2nd is resolved");
})

// new promise
new Promise(function(resolve,reject){
    const res = 10/0;
    resolve(res)
}).then((result)=>{
    console.log(result);
})


// if error occured in promise
new Promise(function(resolve,reject){
    const error = true;
    if(!error){
        resolve({username:"Md7@gmail.com",password:"1234"})
    }else{
        reject("Error occured")
    }
}).then((user)=>{
    console.log(result);
}).catch(function(error){
    console.log(error);
})

// one then block sending response to another one

new Promise((resolve, reject) => {
    const error = false
    if(!error){
        resolve({username:"sudo@gmail.com",password:"12345678"})
    }else{
        reject("Something went wrong!!!!!!!!!!!!")
    }
}).then(function(user){
    return user.username;
}).then((username)=>{
     console.log("Username :: => ", username);
}).catch(function(error){
    console.log(`Error:: root caused by :: ${error}`);
})



