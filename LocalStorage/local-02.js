// What if we want to store complex data like arrays , objects , array of objects...
// beacuse localstorage me to sari chize string ke format me store hoti hai 

let vehicles = [
    { company: "Honda", model: "2009"},
    {company:"Toyota", model: "2010"}
    ]
console.log(vehicles)

// json.stringify() converts this in string so we can store this in local storage
let stringOfVehicles = JSON.stringify(vehicles)

console.log(typeof stringOfVehicles)

localStorage.setItem("vehicles", stringOfVehicles)

console.log(localStorage)


// Get stored item again in object formate

let storedData = localStorage.getItem("vehicles")

// to acces this data as array object convert into object while getting
let objectFormate = JSON.parse(storedData) 
console.log(vehicles);
console.log(typeof vehicles);