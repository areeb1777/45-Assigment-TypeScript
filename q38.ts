//Task 38 "Cities:"

function describe_city(nameOfCity: string, country: string = "Pakistan") {
  return `${nameOfCity} is in ${country}`;
}

// 3 citites

let city1 = describe_city("Karachi");
let city2 = describe_city("Istanbul", "Turkey");
let city3 = describe_city("Lahore");

console.log(city1);
console.log(city2);
console.log(city3);
