// pass by reference

/* 
 In javascript the array and object if we assign there value to varibale they points on same referrence
 means jis varible me hum uss arry ko store karenge co uski value nhi store karega vo uska memory me jo position hai vo store karega.. vo dono same memory ko point karenge.
 if we make the changes in getArr it will also reflect in arr.
*/
let arr = [1,2,3,4,5,6]
let getArr = arr;

console.log(arr);
console.log(getArr);
console.log(arr == getArr);

getArr[6] = 69;

console.log(arr);
console.log(getArr);


//pass by value

// if we want to just want to share the value of array to variable
// we can use spread operator ...
let newArr = [...arr];
console.log(newArr);

newArr[7] = 45;
console.log(newArr);
console.log(arr); //isme 45 is baar nhi dikhega 


//same for Objects to because at the end array is also an object

