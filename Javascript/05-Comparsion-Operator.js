// Comparison Operators

/*
== equals to
!= not equals to

=== equal with same data type
!== not equal with same data type
*/

a = 4
b = 4 
console.log("a==b",a == b);

a = 5
a = 6
console.log("a==b",a == b);
console.log("a!=b",a != b);

a = 5
b = "5"
console.log("a==b",a==b); // will give true
console.log("a===b",a===b); // will not because type is not same

a = 5
b = "4"
console.log("a!=b",a!=b); // will give true
console.log("a!==b",a!==b);// also will true because type is not same
