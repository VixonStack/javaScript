

function rishabh1(element)  // <--- In there we write the parameters for much valur our function is going to take
{
    return (element * element);  // this is function which returns the square
                                // After return statement function will end uske baad kuch bhi likho vo
                               //work nhi karega
}
let x = 45
let y = 72
let a = rishabh1(y)
console.log(a);


//same functions with 2 parameters

function rishabh2(element1, element2)  // <--- In there we write the parameters for much valur our function is going to take
{
    return (element1 * element2);    // this is function which returns the products
}
// let x = 45
// let y = 72   commenting because alreday defined upside



let b = rishabh2(x, y)
console.log(b);


// if aur function does not return any value we can just call function
function myFunction() {
    console.log("Hello world");
    console.log("Hello How are You");

}
myFunction();



//average function
const prompt = require("prompt-sync")({ sigint: true });

function average(x, y, z) {
    return ((x + y + z) / 3)
}

let l = prompt("Enter The Number : ")
let m = prompt("Enter The Number : ")
let n = prompt("Enter The Number : ")
l = Number(l)
m = Number(m)
n = Number(n)
let k = average(l, m, n)
console.log(k);





//login function just timepass 

function login(username, password) {
    console.log(`${username},Logged Sucessfully`);
}

let s = prompt("Enter The name")
let o = prompt("Enter The Pass")
login(s, o)

