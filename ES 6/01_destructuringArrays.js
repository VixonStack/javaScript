const arr = ["rishabh","myname","name"]
const [x,y,z] = arr; //here we are assigning the value to x and y and z
console.log(x);
console.log(y);
console.log(z);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

//suppose we want the first 2 elements of categories

let [first , second] = restaurant.categories
console.log(first);
console.log(second);
// if we want first and than 3rd element so we can skip element using blank space

 let [firstt, , secondd] = restaurant.categories
//the blak space between first and second means we are skiping one data so it will skip pizzeria and go to vegeterian
console.log(firstt);
console.log(secondd);

//we can swap there values too
//in first the value of second will store and in second value of first will store
[firstt , secondd] = [secondd,firstt]
console.log(firstt);
console.log(secondd);

//nested array destructuring
let g = [4,5,[6,7]]
//if we want 6 and 7
//this 2 empty space means we are skiping 4 and 5
let [, ,[k,l]] = g
console.log(k,l);


//Default values
//here 1 is deafault value of p,q,r
let [p = 1, q = 1 , r = 1] = [7,8]
//while destruturing p and q will get assgined but r dosent get assgined because there are not enough values
//so r will display the default value which assigned to it
console.log(p,q,r);