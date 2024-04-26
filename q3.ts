//Task 03 "Names Cases:"

let personName = "Areeb Malik";
console.log("Lower Case", personName.toLowerCase());
console.log("Upper Case", personName.toUpperCase());
console.log(
  "Title Case",
  personName.replace(/\b\w/g, (c) => c.toUpperCase())
);
