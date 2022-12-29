
const userId =1204432 ;
let email =  "md7@gmail.com"
var password = "Md71998"
variable = "Chris Woaks"
let  name;


/*

          const ---> Keyword
 ================================================

* To declare constant variable and u cannot modify the values of that variable.

* always need to initialize the constant variable at the time of it's Declaration otherwise 
  Missing initializer in const declaration Error occurs.

*/

// userId = 123 --> U cannot modify this variable bcz it is constant


/*
                     let keyword
     =============================================== 
      
     * let variable is always recommended to use and this let keyword solve the 
       problem of block Scope and function scope.

     */
email = "mangesh70@gmail.com";


/* 
             var -- Keyword
    ===============================================
     
    * Prefer not to use var bcz of issuein block scope and function scope hence, let come into picture
*/
password = "12345";

/* 
execute but not recommended to use
*/
variable = 123

console.log(userId);

console.table([userId , email , password , variable , name]);