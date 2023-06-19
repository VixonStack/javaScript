
let theEvent = document.querySelector(".btn")

console.log(theEvent);

// here (e) is event object which tells us about event where mouse is clicked or etc.... things
theEvent.addEventListener("click",(e)=>{
    console.log("clicked");
    console.log(e.target);
    theEvent.style.textDecoration = "line-through"
})

// .target will tell us what get target or clicked in this case
