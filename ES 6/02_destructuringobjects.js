const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

//we use curly bracket to destruture objects
let {name , categories} = restaurant
console.log(name , categories);


let { name : restaurantName , categories : CategoriesName} = restaurant
console.log(restaurantName , CategoriesName);


//default values
let  {Menu = [] , starterMenu = []} = restaurant
console.log(Menu , starterMenu);
//so Menu is not preent in our object so it will get the default value

//Mutating
let a = 12;
let b = 17;
let obj = 
{
    a:56,
    b:67
};
({a,b} = obj); // mutating value of a and b to 56 and 67
console.log(a,b);