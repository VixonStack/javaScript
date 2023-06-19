// Some and Every Methods

// some method return true if any element in array pass the given test

// every method returns true if every element in array pass the given test


let scores = [11,13,15,17,19,21]
let checkScore = scores.some((score)=>{
      return score > 20 ;
})

console.log("some Element",checkScore);



let scores2 = [21,22,23,24,25,26]
let checkScore2 = scores2.every((score)=>{
    return score > 20
})
console.log("Every elements",checkScore2);