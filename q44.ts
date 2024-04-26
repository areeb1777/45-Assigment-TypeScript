//Task 44 "Sandwiches:"

function mySandwiches(...item: string[]) {
  return `I want sandwich of ${item}`;
}
let collection1 = mySandwiches("Ham ", " Cheese ", " Lettuce");
let collection2 = mySandwiches("Turkey ", " Swiss");
let collection3 = mySandwiches();

console.log(collection1);
console.log(collection2);
console.log(collection3);
