// **************** Var ********************


var a = 45
var b = 4
console.log(a);

if (b = 4) {
    var a = 78
    console.log(a); // here a = 78
}
console.log(a);  // Now a = 78 out of the if and else too
//var value can get changed outside the block too


// **************** Let ********************


//But in Case of let
let c = 8
console.log(c);
if (b = 4) {
    let c = 68
    console.log(c); // here c = 68
}

console.log(c);  // but here c will 8 which was defined


// **************** const ********************
// constant will cant be changed

const pi = 3.142
// let pi = 12   will throw error
console.log(pi);
