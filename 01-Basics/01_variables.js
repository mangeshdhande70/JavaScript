
const accountId = 1234
let accountEmail = "md7@gmail.com"
var accountPassword = "12345"
currentCity = "Nagpur"
let accountState;

// accoundId = 5555

console.log(accountId);

/*
  Prefer not to use var 
  because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,currentCity,accountState])
