//parent element

let parentElement = document.querySelector(".Parent")
console.log(parentElement);



// all 3 paragraph inside this parent div are children of this div and all 3 paragraphs are siblings of each other
console.log(parentElement.children);

/* This will give an html collection of child 
 but we cannot run any any loops on html collection so we can convert html collection into array using array.from()
than we can run any loop on it */

console.log(Array.from(parentElement.children))



// Child element

let childElement = document.querySelector(".child1");
console.log(childElement.parentElement);
//  here we can get parent element using child element


// Next siblings of child 

console.log(childElement.nextElementSibling);
console.log(childElement.previousElementSibling);
// this childElement is first sibling than iske pehle koi aur hoga nhi isliye null


