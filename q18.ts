//Task 18 "Seeing the World:"

let placesToVisit: string[] = [
  "Pakistan",
  "Turkey",
  "Saudi Arabia",
  "Japan",
  "China",
];
//Original Order
console.log("Original Order:", placesToVisit);
//Alphabetical Order
console.log("Alphabetical Order:", [...placesToVisit].sort());
//Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", placesToVisit);
//Reverse Alphabetical order
console.log("Reverse Alphabetical order:", [...placesToVisit].sort().reverse());
//Show that your array is still in its original order by printing it again
console.log("Original order after reverse sorting:", placesToVisit);
//Reverse Order
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
//Reverse the order of your list. Print the array to show that its order has changed
placesToVisit.reverse();
console.log("Back to Original order:", placesToVisit);
//Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
//sort the array in reverse Alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse Alphabetical order:", placesToVisit);
