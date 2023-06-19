// modify the Objects
let bike = {
    company:"bullet",
    color:"black",
    model:"classic"
}
console.log(bike);
bike.color = "pink"

console.log(bike);


//Delete property of objects

let object = {
    prop1 : "smthing1",
    prop2 : "smthing2",
    prop3 : "smthing3",
}

delete object.prop2;

console.log(object);


//Methods are generally the function that is defined in object

let rishabh = {
    age : function(year){
        return 2023 - year ;
    }
}

console.log(rishabh.age(2005));

// This keyword

//if we want to use the object's property in same object than we use "this" keyword.

let detail = {
  firstName:"rohit",
  lastName:"sharma",
  team:"Mi",
  trophy:"5",
  getdeatils: function(){
    return `${this.firstName} ${this.lastName} is in ipl team ${this.team} and he have 
    ${this.trophy} trophies`
  }
}

console.log(detail.getdeatils());