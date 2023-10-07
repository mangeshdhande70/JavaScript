

/*

                     Event Propagation => capturing & bubbling. 
     ========================================================================                

     1. Bubbling:- When an event happens on a component, it first runs the event handler on it, then on its parent component, then all the way up on other ancestors’ components. By default, all event handles through this order from center component event to outermost component event.
   
     2. Capturing:- It is the opposite of bubbling. The event handler is first on its parent component and then on the component where it was actually wanted to fire that event handler. In short, it means that the event is first captured by the outermost element and propagated to the inner elements. It is also called trickle down.

*/



const garden = document.getElementById('garden')

// garden.addEventListener('click', ()=>{
//     alert("Clicked on gardens")

// })

// document.getElementById('images').addEventListener('click',(e)=>{
//     alert("Clicked inside the ul")
// })


/*
               ***** For Capturing propagation ************
  =================================================================================
There is three parameter in addEventListener, 1st is type of event listner, 2nd is function & 3rd is 
event propogation which is boolean value and by default is false means Bubbling & another one is capturing

*/
garden.addEventListener('click', (e)=>{
    alert("Clicked on gardens")
    // to stop the event propogation
    e.stopPropagation()
},false)

document.getElementById('images').addEventListener('click',(e)=>{
    alert("Clicked on ul")
    
},false)



