//Updating and changing the content

//Inner Text
// usme jo text hoga vo de dega , space aur andar jo tags wagera jo hai unhe ignore karega
// Ignore spaces
// Retrieve and set content in Plain text
let text = document.querySelector(".para")
console.log(text.innerText);

// we can update in original html doc.
text.innerText = "Shinchan";


// Inner Html
// usme jo kuch hai html ka sab dikha dega space aur andar ke tags sab

// It does not ignore spaces
// Retrieve and set content in HTML formate

// we can update in original html doc.

console.log(text.innerHTML);
text.innerHTML = "Doremon";