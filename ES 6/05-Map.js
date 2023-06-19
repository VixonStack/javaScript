// Maps in JavaScript: We can use any type of key or value
// advance form of object
const myMap = new Map();
const key1 = 'myStr'
const key2 = {}
const key3 = function(){}

// Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');
console.log(myMap);

let value1 = myMap.get(key1)
console.log(value1);

// to get the size of map

console.log(myMap.size);


// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}
// Get only keys
for (let key of myMap.keys()) {
    console.log('key is ', key);
}
// Get only values
for (let value of myMap.values()) {
    console.log('value is ', value);
}