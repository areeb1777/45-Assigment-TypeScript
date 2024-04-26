//Task 24 "More Conditional Tests:"

// equality and inequality
let myName = "Areeb Malik";
console.log(myName == "Areeb Malik"); // true     // equal to
console.log(myName !== "areeb malik"); // true     // not equal to

//Numbrics
let myNumber = 10;
console.log(myNumber == 10);
console.log(myNumber !== 10);
console.log(myNumber > 5);
console.log(myNumber < 5);
console.log(myNumber <= 5);
console.log(myNumber >= 5);

// && or ||
let num1 = 10;
let num2 = 5;

console.log(num1 > 9 && num2 < 5); //false
//          true        false
console.log(num1 > 9 || num2 < 5); //true
//          true        false

let myArr = [2, 3, "Areeb"];
let myString = "Areeb Malik";

console.log(Array.isArray(myArr)); //true
console.log(Array.isArray(myString)); //false
