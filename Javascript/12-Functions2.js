function party(name = "rishabh",time = "night")// here we can provide the default value to the parameters
//so in case if user does provide the parameters it will take defaults values
{
    console.log(`${name} You are Invited to the party at ${time}`);
}

party();//here we are not provinding any parameters so it will take default values
party("prince","morning");








// Arrow Function

// if we are writing in single line we dont have to give parenthesis and return
// just write parameter and function body
let a = myName => `My name is ${myName}` 
console.log(a("Rishabh"));


let b = (myName)=>{
    return `My name is ${myName}`
}

console.log(b("Kanojiya"));



//project
// Function WHich can Uppar case any string

let upper = (string)=>{
    return string.toUpperCase();
}
console.log(upper("rishabh"));