// Find Method
//returns the first element we are looking for

let students = [{ id: 1, name: "alex" }, { id: 2, name: "john" }, { id: 1, name: "Paul" }]


let result = students.find(student => {
    return student.id === 1
})

console.log(result)

// find 1st even Number
let numberss = [1, 4, 556, 2, 3, 1, 33, 4, 4546]

let topper = numberss.find((number) => {
    return number % 2 === 0
})
console.log(topper);




// findIndex method
// Execuate function for each array element
// It return "index" of that array element who "first"
// test "Otherwise" -1

let ages = [21,18,19,17,23];

let results = ages.findIndex(age =>{
return age > 15;
})

console.log("The index of result",results)

