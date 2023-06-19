// setTimeOut and setInterval


/* 1) setTimeOut
Run fucntion "once" after "Interval" of time

syntax
setTimeOut(function/code,delay,argument1,......,nth argument)
*/

function timepass(namee){
    console.log("This is Timepass " + namee);
}

setTimeout(timepass,3000,"raju") // 3000 ms = 3 seconds


//we can direct define fucntion inside argument

setTimeout(function(){
    console.log("Timepass");
},3000);



/* 2) setInterval
run function repeatly and start after some interval ;

syntax
setInterval(function/code,delay,argument1,......,nth argument)
*/
function greeting(){
    console.log("Happy Birthday");
}
setInterval(greeting,4000) // this will keep printing Happy birthday after 4seconds