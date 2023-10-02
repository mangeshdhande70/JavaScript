// Immediately Invoked Function Expressions (IIFE)


/*
 the function which execute imediately and to remove the global scope pollution.

 => 'Polluting' the global scope means that you define too many variables that are globally accessible. 
*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')