// "flat" method
//It creates a new array with the elements of the subarrays
// "concatenated" into it.
// do not mutate the original array


let arr = [1,2,3, [4,5,6]];

console.log("Before flat ",arr);

let result = arr.flat() //by default 1 value

console.log("After flat ",result)

//But if we have more subarray in subarray than we have to define the level how much we have to flat the array

let newArray = [1,2,3,4,[5,6,[7,8,9]]]
let newResult = newArray.flat()
console.log("Before Flat",newArray);
console.log("After flat witn level One which is default",newResult);

newResult = newArray.flat(2)
console.log("After flat with level 2",newResult);
