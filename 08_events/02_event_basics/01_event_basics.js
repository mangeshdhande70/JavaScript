
const garden = document.getElementById('garden')

// 2nd way but it is not reccommendet
// garden.onclick = function(){
//     alert("clicked on garden")
// }


// Best Way
// ***** For Bubbling propagation ************
// garden.addEventListener('click', ()=>{
//     console.log("Clicked on gardens")
// },false)

// document.getElementById('images').addEventListener('click',(e)=>{
//     console.log("Clicked inside the ul")
// },false)



// To Disable click event
// document.getElementById('google').addEventListener('click',(e)=>{
//     e.preventDefault()
// })


document.querySelector('#images').addEventListener('click',(e)=>{
    console.log(e.target.tagName);

    if(e.target.tagName === 'IMG'){
        const targetElement =  e.target.parentNode
        console.log(targetElement);
        targetElement.remove()
    }
},false);



