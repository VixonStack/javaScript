// In higher order function the function returns the fucntion

let message = (message)=>{
     let userName = (myname)=>{
        return `${myname} ${message} `;
     }
    return userName;
}
console.log(message("You looks smart")("rishabh"));

let newMessage = message("You looks smart") /* message function will return the userName function and this fucntion will store in newMessage so we can provide myname parameter to 
newMessage fucntion*/ 
console.log(newMessage("Prince"));


// Immediately Invoked Function
// execute only once
/* write the fuction in the ()
so that will work as an expresion than add () closed and open brackets than the fucntion will execute
 */
(function(){
console.log("rishabh");
})();
// so this function will execute

(function(namee){
console.log("My name is ",namee);
})("yamraj")
// we can also pass the parameters in outside brackets

