
const arr = [1,2,3,4,5]

function User(username,password){
     this.username = username;
     this.password = password;
}

User.prototype.getUsername = function(){
    return this.username;
};

let newUser = new User("Mangesh" , "1234")

console.log(newUser);
console.log(newUser.getUsername());
