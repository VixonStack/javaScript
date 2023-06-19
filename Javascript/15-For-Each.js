let arr = ["one","two","Three","Four"]

arr.forEach(function(element){ 
    console.log(element);
})
//you can choose any keyword in parameter


//Objects inside Array

let list = [{userName:"prince",pass:"1234"},{userName:"Thala",pass:"koyal"}]

for(i=0;i<list.length;i++){
    console.log(list[i]);
}

for(i=0;i<list.length;i++){
    console.log(list[i].userName);
}

