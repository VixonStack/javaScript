const ticket = new Promise(function (resolve, reject) {
    const isBoarded = false;
    // if this wil true than resolve wala waork karega
    //mtlb .then wala execute hoga
    if (isBoarded) {
        resolve("You are not in the Flight");
    } else {
        reject("Your flight has been cancelled");
    }
});
// function inside then will run as resolve 
// jo resolve me hoga vo ye as a parameter lega
ticket.then((data) => {
    console.log("wohoo", data);
})

// function inside catch will run as reject 
// jo reject me hoga vo ye as a parameter lega
ticket.catch((data) => {
    console.log("oh no", data);
})
ticket.finally(() => {
    console.log("I will always be executed");
});