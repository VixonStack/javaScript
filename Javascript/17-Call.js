let myName = {
    first : "Rohit",
    last: "sharma",
    fullName : function(){
        console.log(this.first + " " + this.last);
    }
}
myName.fullName();
/*fullname jo function hai vo hai myName object me lekin hum chate hai vo myName1 me bhi chale to hum usko function ko call karte hai myname1 ke liye
myName.fullname.call(myName1)
agar koi arhgument hai function me to iske baad comaa lgake likh sakte hai
nichhe example hai
*/

let myName1 = {
    first : "Mohit",
    last: "verma"
};
myName.fullName.call(myName1);

// we can also pass arguments in that 

let myNamee = {
    first : "Rohit",
    last: "sharma",
    fullName : function(name){
        console.log(this.first + " " + this.last + name);
    }
}

myName.fullName();

let myNamee1 = {
    first : "Mohit",
    last: "verma",
}
myNamee.fullName.call(myNamee1,"raju");


// in apply we pass argument using array

myNamee.fullName.apply(myNamee1,["raju"]);
