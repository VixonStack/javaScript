//Ternery Operator

// condition ? exprIfTrue : exprIfFalse

const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter The Age : ")
 
console.log("you are", (a<18 ? "kid" : "Adult"));
                //      ^^^  ^       ^
//                       This is terney



// let b = 42
// console.log(b>40? b + a : b);


 

//Multiple Ternery 


let age = prompt("Your Age : ");

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message );