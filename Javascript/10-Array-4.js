// splice
/* splice() is use to add the element in array
splice has basically 3 aruguments
{ 1.where we have to add}
{ 2.How many element we have to delete}..if you want
{ 3 . elements which you want to add}
 It returns the deleted values */

let a = [2,3,4,5,6,7]
a.splice(2,1,12,13,14)
console.log(a);
/*  bsically its mean if have to add elements from a[2] position
and i have to delete 1 element
and i have to add 12,13,14 elements there */ 



//slice()
/* it create a new array by slicing part from it
we decide from where we have to cut the part from the array
it doesn't modify the original it creates new */

let b = [14,15,67,53,35,12,46,24]
let c = b.slice(3)
console.log(c);
console.log(b);
//it will same as we declare it doesnt change original array


//agar humko kisi point se kisi point tak ka array chayie than
let d = b.slice(3,5) // last wala include nhi hota 
console.log(d);



// Array using for loop
//foreach() loop in this we can assign a fuction that wil apply to all the elements of array

let g = [2,3,4,5,6]
g.forEach((element)=>{
    console.log(element * element)   // like we craeted a fucntion that will square
    ;
})
