/* in java script if we define any fucntion it will automatically get on the top
we cant see them but they are execute first
so if we run the function before declaring the function it will work
only this type of function declarition will work

function nameFunction(){

}
*/

test(); // here we call the function before declaring the function

function test(){
    console.log("This is Test");
}

// This will Not work
/* 

test2();
 let b = test2(){
     console.log("This is Test 2");
 }

*/