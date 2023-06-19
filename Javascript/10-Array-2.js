let a = [1,2,23,4,5]
console.log(a);
console.log(typeof a);


// To string ()
// convert the array to string
let b = a.toString()
console.log(b);
console.log(typeof b);



// join () 
// is use to join the array by the thing we will write in join fuction also become string

let c = a.join("-")
console.log(c)
console.log(typeof c);


// pop () is remove last element form array and this returns the last element

a.pop() // last value get removed
console.log(a); 



// i am creating new arry for every example becuse this method changes in the main array so value for upcoming eg will change


let d = [11,12,13,14]
let e = d.pop() // pop return the last value and that value get stored in e
console.log(e);


// push () insert the element is last at array and return the length of new array

let j = [11,12,13,14]
j.push(15)
console.log(j);

let neww = [11,12,13,14]
let k = neww.push(15)
console.log(k); // return 5 becuse after pushing value 15 array lenth become 5














