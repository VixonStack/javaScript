
//shift() remove the first element of aaray and return the element which got removed

let a = [2, 3, 4, 5, 6]
a.shift()
console.log(a);

let b = [2, 3, 4, 5, 6]
let c = b.shift()
console.log(c); // 2 will removed from arry so 2 get print




//unshift() add new element at the starting of array and return the length of new array

let d = [2, 3, 4, 5, 6]
d.unshift(1)
console.log(d);


let e = [2, 3, 4, 5, 6]
let f = e.unshift(1)
console.log(f); // will print 6 because new element got added in array

//delete [] is a operator like others are function ()
// delete[] is use to delete elements in the array
// but array ki lenghth change nhi hoti
let g = [2, 3, 4, 5, 6]
delete g[0]
console.log(g);
console.log(g.length); // will 5 because affect nhi hoti 




//concat() this will join different array's in one

let array1 = [1, 2, 3]
let array2 = [8, 9, 10]

let newarray = array1.concat(array2)
console.log(newarray);
console.log(newarray.length);

let array3 = [11, 12, 13]
let fresharray = array1.concat(array2, array3) // can join more array
console.log(fresharray);




//sort() sort the array is alphabatically form ~ modify the original array

let i = [4, 2, 7, 5, 9, 7, 4]
i.sort()
console.log(i);

// for asending and desending we have to create a function to compare the if fuction return a - b is  than asending if b - a than desending

let compare = (x, y) => {
    return x - y
} // x-y than it is in asending chote se bda minus     kiya if y-x than it will in desending
let j = [4, 2, 7, 5, 9, 7, 4]
j.sort(compare)
console.log(j);

//reverse () array ko reverse kar deta hai

// let k = [1, 2, 3, 4, 5, 6]
// k.reverse()
// console.log("Reverse array is", k);

let kj = (jk) => {
    return jk + 1;
}
console.log(kj(6));



