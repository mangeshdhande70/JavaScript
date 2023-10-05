
 const form = document.querySelector("form")
//  console.log(form);


 form.addEventListener(('submit'),(e)=>{
    
    e.preventDefault()

    const height= parseInt(document.querySelector('#height').value);
    // console.log(height);
    const weight= parseInt(document.querySelector('#weight').value);
    // console.log(weight);

    const result = document.querySelector('#results')
    // console.log(result);
    // result.textContent = "BMI"


    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<spam>Your BMI is :: ${bmi}<spam>`

        if(bmi<18.6){
            const target = document.querySelector('#uw')
            // console.log(target);
            const p= document.createElement('p')
            p.innerText = "Under Weight = Less than 18.6"
            p.style.color = 'red'
            p.style.fontSize = "20px"

            target.replaceWith(p)

        }else if(bmi>24.9){
            const target = document.querySelector('#ow')
            const p= document.createElement('p')
            p.innerText = "Overweight = Greater than 24.9"
            p.style.color = 'red'
            p.style.fontSize = "20px"
            target.replaceWith(p)
        }else{
            const target = document.querySelector('#nl')
            const p= document.createElement('p')
            p.innerText = "Normal Range = 18.6 and 24.9"
            p.style.color = 'green'
            p.style.fontSize = "20px"
            target.replaceWith(p)
        }

    }



 })