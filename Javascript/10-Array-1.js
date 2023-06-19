let a = [23, 23, 4, 34, 4, 242, "me", null, undefined]
console.log(a);
console.log(a.length);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a[7]);




//changing the valueof array   // array can be change
let b = [1, 2, 3, 4, 5]
b[2] = 10
console.log(b);



// adding new value to array

b[5] = 6
console.log(b);



//we can join the array in string
let arr = ["dal","chawal","bhaji","roti"]
console.log(arr.join()); // by default comma will come between them

// we can also decide how to join them like unke bich me kya ho
console.log(arr.join(" "));
console.log(arr.join("-"));
console.log(arr.join(" and "));


//Index of
//we can get the index of any element of array

let arr1 = ["nobita","giyan","dekisugi","suneo"]
console.log(arr1.indexOf("suneo")); // the position or index where suneo is present in array