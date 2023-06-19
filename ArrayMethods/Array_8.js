//FlatMap()
// combination of Map function and Flat

// Sorting of Array

// sorting array using sort method

// By default sort method is used to sort strings

// It firstly convert everything into string and then

let letters = ["d","e","f","a","b"];

console.log(letters.sort());

let nums = [2,5,7,-1,-22,-43];

console.log(nums.sort()) //Unexpected
// if a-b < 0 => a < b => A,B (Keep order same)
// if a-b> 0 => a > b => B,A (Switch the order)

let correctSort = nums.sort((a,b)=>{
    if(a<b)
    {
     return -1 ;
    }
    else if(a>b)
    { 
      return 1;
    }
})

console.log(correctSort);