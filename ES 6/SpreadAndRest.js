// Spread (...) operator It is present in the RHS of =

let nums = [2,3,4,5,6];

let newArray = [1, ...nums];

console.log(newArray)

// Syntax of REST(...) Get elements and packed them into array
// Use in LHS
let [a,b,...others] = nums;
console.log(others)