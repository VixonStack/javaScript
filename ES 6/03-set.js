
// ** to isme jitni same chize hongi vo print nhi hongi 

let arr = [2,4,5,4,5,4,7,6,8,5,4,6,1]

let unique = new Set(arr)
console.log(unique);

// in set there is no length is size
// if we want size of new Array
console.log(unique.size);

// to ccheck  particular value exist or not

console.log(unique.has(4));

unique.add(89)
console.log(unique);
unique.delete(6)
console.log(unique)