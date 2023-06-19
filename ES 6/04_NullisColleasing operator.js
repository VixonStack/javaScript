//Nullish coleasing operator is looks like this   ??
//for nullish operator zero and " " empty string are truthy values
//nulish values are : null , undefined

let a = 0;
let b = a || 10;
console.log(b);
//  || this is or operator 0 is falsy value to dono me se jo true hoga vo answer hoga
//so answer will be 10;


//nulish values are : null , undefined
//for nullish operator zero and " " empty string are truthy values

b = a ?? 10;
console.log(b);
