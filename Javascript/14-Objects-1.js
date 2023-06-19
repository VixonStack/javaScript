//Objects

let car = {
    company:"Bmw",
    color:"Purple",
    model:"suv"
}
console.log(car);

console.log(car.color);


//Also This way
console.log(car["color"]);

let property = "color";

console.log(car[property]);

let bike = {
    company:"bullet",
    color:"black",
    model:"classic"
}
console.log(bike);

// if we want the the array of the key value of the bike 

let keyArr = Object.keys(bike)
console.log(keyArr);

// if we want the the array of the  value of the bike keys 

let propArr = Object.values(bike)
console.log(propArr);

//want array of both  key value

let mixAll = Object.entries(bike)
console.log(mixAll);