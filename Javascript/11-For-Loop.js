// for Loop

// for (intialization ; condition ; increment/decrement)

let i;
for(let i = 0 ; i <=10 ; i++)
{
    console.log("Number is",i);
}

// Array

let arr = ["one","two","three","four"]
for(let i = 0  ; i<arr.length ; i++)
{
       console.log(arr[i]);
}

let arr1 = [2,3,45,6,78,7,46,46,4,6,45]
for(let i = (arr1.length - 1) ; i >= 0 ; i--){
    console.log(arr1[i]);
}



//All even Number between 12 to 96
for(let i = 12 ; i<=96 ; i++){
   if(  i%2 == 0)
   {
       console.log(i);
   }
}
