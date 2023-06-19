//reduce method

// this method dont return any array

// use to find sum of array

// in this we have two parametrs in fucntion
// one is Accumulator and one is the current.. current is basically the array items
//fo sum we just keep adding current in accumultor so we get our fnal result


let num = [1,4,57,8,99]

//where accumulor and current are just parameters we write anything there,

let sum = num.reduce((accumulator,currentt)=>{
    accumulator = accumulator + currentt;
    return accumulator
})
console.log(sum);