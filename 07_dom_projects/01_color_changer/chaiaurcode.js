

let buttons = document.querySelectorAll(".button")
// console.log(buttons);
const body = document.body

buttons.forEach((e)=>{
 
    e.addEventListener("click" , (c)=>{
        const id = c.target.id 
        body.style.backgroundColor = id;

        // console.log(c);
        // console.log(c.target);
        // const id = c.target.id 
        // console.log(id);
        // switch(id){

        //   case 'grey':   
        //       body.style.backgroundColor = id;
        //       break;

        //   case 'white':   
        //       body.style.backgroundColor = id;
        //       break;  

        //   case 'blue':   
        //       body.style.backgroundColor = id;
        //       break;   
              
        //   case 'yellow':   
        //       body.style.backgroundColor = id;
        //       break;  
              
        //  default :   
        //       body.style.backgroundColor = 'black';
        //       break; 
        // }


    })


})