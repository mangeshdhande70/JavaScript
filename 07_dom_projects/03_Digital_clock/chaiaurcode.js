
 const clock = document.getElementById('clock')


//  console.log(date.toLocaleTimeString())

 setInterval(function(){
       const date = new Date()
       clock.innerHTML = date.toLocaleTimeString();
       console.log(clock.innerHTML = date.toLocaleTimeString());
 } , 1000);