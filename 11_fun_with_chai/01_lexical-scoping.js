

function outer(){
    const name = "Hitesh"
    function inner(){
        // the outer function properties are accessible to inner but not vice versa
        console.log(name);
    }
    inner()
}

// inner()
outer()

// Example 2

function outer2(){
    const name = "Hitesh"
    function inner2(){
        let age = 24
        // the outer function properties are accessible to inner but not vice versa
        console.log(name);
    }

    function inner3(){
        // the outer function properties are accessible to inner but not vice versa
        console.log(name);
         // You can't access the other inner function only Parent function properties are accessible
        // console.log(age);
    }
    inner3()
}

outer2()