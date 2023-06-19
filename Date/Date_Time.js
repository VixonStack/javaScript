// Date and Time 

// Date object always Carry Date and Time
// format new Date(year,month 0-11,date,hour,minute,seconds,milliseconds)
let date = new Date();
console.log(date);

date = new Date(2005,5,26,2,45,34)
console.log(date);
// If we want year from Date
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay()); // days of week 0-6 0=sun , 9=sat
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
// To get the string 
console.log(date.toISOString());


//getTime() btata hai ki uss date se aaj tak kitne millisecods bitte hai
console.log(date.getTime());
console.log(new Date(0));


// if we want to change just use set on the place of get

console.log(date.setFullYear(2010));
console.log(date);