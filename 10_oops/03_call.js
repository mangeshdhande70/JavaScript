

function SetUsername(username){
    this.username = username
    console.log("Called");
}


function createUser(username , email, password){
   
    SetUsername.call( this,username)
    this.email = email
    this.password = password
}


const chai = new createUser("chai" , "chai@fb.com" , "12345")
console.log(chai);