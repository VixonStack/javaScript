// we can add , remove , replace the classes using javascript 

let heading = document.querySelector("h2");
// by using class list we can see the all the classes applied on h2.
console.log(heading.classList);


//Add class
heading.classList.add("newclass");
// so the class name newclass will added to h2

console.log(heading.classList);




// Remove class
heading.classList.remove("rishabh")
// co the class rishabh will remove from h2

console.log(heading.classList);



// Replace class
heading.classList.replace("newclass","oldclass")
// so the class name newclass will be replaced by oldclass

console.log(heading.classList);