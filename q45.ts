//Task 45 "Cars:"

// @ts-ignore
function carDetails(manufacturer: string, modelName: string, ...aditionalInfo) {
  const car = { manufacturer, modelName, ...Object.fromEntries(aditionalInfo) };
  return car;
}

const myCarDetails = carDetails(
  "Toyota",
  "Corolla",
  ["Color", "Black"],
  ["Year", 2022]
);

console.log(myCarDetails);
