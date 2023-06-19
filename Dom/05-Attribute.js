// Getting and Setting attribute of element

let Link = document.querySelector('a')
// to anchor tag pe jo attritbut hoga usko hum yha se get kar sakte hai like yaha humne anchor tag ka href attribute get kiya hai 
console.log(Link.getAttribute('href'))

// Set the attribute
// ths se hum uske attribute ko change bhi kar sakte hai
//using setttribute than jo attribute change karna hai vo than jisse change karna hai vo.

console.log(Link.setAttribute('href',"https://www.Facebook.com"));


// href ke alwa aur bhi koi attribute change ki jaa sakti hai like classes , id , src, many more....

