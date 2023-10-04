const arr1 = [1,2,3,4,5]

const initialValue = 2

const sum = arr1.reduce( function add(acc , current){
    console.log(`acc :- ${acc} and current Value :- ${current}`);
    return acc+current
},initialValue)

console.log(sum);



const intialValue1 =0

// only first time in accumulator stored the value of initialvalue and then stored (accumulator+currentValue)
const sumOfValues = arr1.reduce(
    (accumulator,currentValue) => accumulator+currentValue, intialValue1
    );

 
console.log(sumOfValues);    