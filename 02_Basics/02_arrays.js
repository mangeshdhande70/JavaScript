
let marvel_heroes = ["thor", "captain_america","Ironman"]
let dc_heroes = ["flash" , "superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

 let all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

// Best Way to merge two or more arrays
let all_new_heroes = [...all_heroes,...dc_heroes]
console.log(all_new_heroes);


let another_array = [1,3,[4,5],6,[6,7,[9,8]]]

// if u want to convert above array in single then
let another_real_array = another_array.flat(Infinity)
console.log(another_real_array);


// Checking the type is array or not
console.log(Array.isArray("Hitesh"))

// Converting to array from another type
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
