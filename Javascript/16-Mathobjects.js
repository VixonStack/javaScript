// Math object is a built in object in javascript


// 1 . for round off

let a = 6.7

console.log(Math.round(a)); // round to nearest integer
console.log(Math.floor(a)); // round to down
console.log(Math.ceil(a)); // round to up
console.log(Math.trunc(a)); // removes the decimal part


// to generate random
// we have to multiply jinke bich ka number chayie than + 1
// kyuki vo unke bich ka generate karega lekin hummme agar 5 bhi chayie to + 1 karna pdta hai

let numRandom = (Math.random() * 5 ) + 1 // jinke bich tak number generate hona chayie + 1
console.log(Math.trunc(numRandom));


// if we want to find highest number in this array

let numCollection = [2,3,5,8,92,6,23]
console.log(Math.max(...numCollection));