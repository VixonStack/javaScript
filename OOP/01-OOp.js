//  constructor are also a function the main difference is jab hum constructor ko call karte hai to hum new keyword lga ke call karte hai
// constructor bnate waqt hum fist letter captial rakhte hai 
// aur constructor ke andar uske parameters ko "this.paramaeter = parameter" aisa rakhte hai

function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();//this will create a randowm number
    this.balance = balance;
}
const rakeshAccount = new BankAccount('Rakesh K', 1000);
console.log(rakeshAccount);
const johnAccount = new BankAccount('John', 2000);
console.log(rakeshAccount);

// we can also acess there key 

console.log(rakeshAccount.accountNumber);
console.log(johnAccount.balance);
