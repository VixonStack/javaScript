// Local Storage
// In local storage value store in the form of strings



// set item
// get item 
// update item 

// setItem(key,value)
// key and value both are strings 
localStorage.setItem("Name","Rishabh")
localStorage.setItem("Age",18)
// console.log(localStorage);


// once Item got set if we want to get The we use
//getItem("key")
// in this we only have to give key 

console.log(localStorage.getItem("Name"));

//update
// to update if we pass new value in set item it will get update

localStorage.setItem("Age",16)
console.log(localStorage);



// Remove Item
// if we want remove just give the key of that element

localStorage.removeItem("Age")
console.log(localStorage);


