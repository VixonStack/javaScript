

let a = "Strings"
console.log(a.length);
let b = 'Strings'
console.log(b);
let c = `Strings`
console.log(c);


// Escape sequence character 

let d = 'Don\'t'  // The backslash is use to display single quote it will not get count in proegram and display
console.log(d);

//we have more escape sequence character

let e = "rishabh\nKanojiya" // new line
console.log(e);

let f = "rishabh\"Kanojiya" // 
console.log(f);

let g = "Tab\tdistance" // space of 1 tab
console.log(g);


//strings can't be changes

let p = "Dog"
p[2] = "u"
console.log(p); // will do nothing
