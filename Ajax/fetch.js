
let myData = document.querySelector("#myText")

function getData(){
  fetch("text.txt").then((response)=>{
    return response.text();
  }).then((data)=>{
   myData.textContent = data;
  })
}
getData();