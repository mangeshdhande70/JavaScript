// Getting Data from API

// async function getAPIData(){

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(typeof data);
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }

// }

// getAPIData()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users').then(
//     function(response){
//       console.log(response);
// }).catch(function(error){
//     console.log(error);
// })