// so the function can acces the object element we use bind


let user = {
    firstName: "tiger",
    lastName: "sharma"
}

function greet() {
    console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost`)
}

let greets = greet.bind(user);
 // here we bind the object with function so it can access the fisrt name and last name  this is same as call and apply but we dont call the function we just bind it .
greets();
