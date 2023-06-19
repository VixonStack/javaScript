// Array Methods

// reverse() is mutating method it make changes in orginal array too
let arr = ["A","B","C","D"]

let revArr = arr.reverse();

console.log(revArr);
console.log(arr);


//concat()
let num = [1,2,3,4,46]

let newArr = num.concat(arr)

console.log(newArr);


//join()

// convert an array to string
// we have to mention in brackets how we have to join

let newNum = num.join("-");
console.log(newNum);

newNum = num.join(",");
console.log(newNum);


//Slice Method
// used to Extract part the array
// Array.slice(startIndex, lastIndex (excluded))
// Return new Array of extracted elements

let arrNew = ["orange","apple","mango","Grapes"]
let slicedArr = arrNew.slice(1)
console.log("Sliced Array is " , slicedArr);



// splice method
// used to add new element/s into the array
// Array.splice (index, deleteValue, valueToBeAdded)
// Return deleted items in the form of array
// this make changes in original array

let num1 = [3,5,7,9,2];
let num2 = [3,5,7,9,2];
let updated1 = num1.splice(1,2,6);//(1st index,2 values deleted whiich was 5 and 7 ,  and 6 is added)
let updated2 = num2.splice(3,0,6,9);//(3rd index,0 values deleted,  and 6 and 9 is added)
console.log("Original Array = ", num1)
console.log("updated Array ", updated1)
console.log("Original Array = ", num2)
console.log("updated Array ", updated2)//this will empty coz zero values are deleted

