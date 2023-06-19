

let a = "Name"
console.log(a.toUpperCase()); // will convert to uppercase
let b = "Name"
console.log(b.toLowerCase()); // willconvert to lowercase


// replace Method
let c = "Rishabhkanojiya"
console.log(c.replace("kanojiya","Yadav")); // jo replace karna hai than jisse replace karna hai 
let d = c.replace("kanojia","pandey")
console.log(d);


//Concat Method
// Adding Two different Strings

let name1 = "rishabh "
console.log(name1.concat("1 " +" 2")); // add kar do


//Trim Method

let name2 = "       space       "
console.log(name2);
console.log(name2.trim()); // space will removed
console.log(name1[2]);


// Include Method
// ye use hota hai dekhne ke liye ki particualr string me vo chiz hai ya nhi

let Name = "RajMohan"
console.log(Name.includes("Raj")); // This will true because Raj Mohan me Raj 


//slice Method
// sirf itna hi part print hoga jitna slice hua hai

let nameRishabh = "RohitSharma"
console.log(nameRishabh.slice(0,4)); // 0-3


//split method 
//jha se chahe waise split kar sakte hai
// ek array ke form me result ata hai 
// This is also string to array conversion
// ( ) me aisa parameter likha hai jha se split karna hai usse seperater kehte hai 
let fruits = "apple grapes custard papaya"
let array = console.log(fruits.split("a"));
console.log(array);


let number = "two,three,four"
console.log(number.split(","));