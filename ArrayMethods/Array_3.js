// Map Method

// Create New array from Original array By applying
// Transformation function
//length of new array is equal to old array

let salaries = [3000, 5000, 8000, 6000, 9000];

let newSalaries = salaries.map((salary) =>{
let incrementedAmount = salary/2;
return salary + incrementedAmount  //jo ye return karega uska Array bnega
})
console.log("After 50% Incrementation New Salaries are ",newSalaries)



//Filter Method

let gifts = ["Watch","Ring","Chocolates","Teddy-Bear","Watch","Ring","Watch","Ring","Chocolates","Teddy-Bear"]
// Now You want to filter only "Watch" Gifts
let filteredArray = gifts.filter((gift) =>{
if (gift == "Watch")
{
    return gift
}
})
// It return "new" array
console.log("Filterd Array",filteredArray)
console.log(gifts) 



//one more example

let num = [-3,4,-5,9,3,-7,4,-8]

let onlypositive = num.filter((positive)=>{
    if(positive > 0)
    {
      return positive 
    }
})
console.log(num);
console.log(onlypositive);//iss array me only positive numbers honge