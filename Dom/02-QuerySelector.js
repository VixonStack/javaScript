// Getting Html element/s using querySelector/All

//querySelector returns "first element" that match Css Selector
let result = document.querySelector("p")
console.log(result);
console.log(result.textContent);


// To get all matched elements we use querySelectorAll
// queryselectorAll gives result in form of node list 
// nodelist is same as array
let results = document.querySelectorAll("p")
console.log(results);


// acess using class
// if we use queryselectorALl than jitne class honge sare node list ke form me aa jayega
let result2 = document.querySelector(".coderdost")
console.log(result2);

//Acess using id
// if we use queryselectorALl than jitne id honge sare node list ke form me aa jayega
let result3 = document.querySelector("#coders")
console.log(result3);
