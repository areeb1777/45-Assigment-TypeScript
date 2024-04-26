//Task 43 "Unchanged Megicians:"

let megicians: string[] = [
  "Neil Patrick Harris",
  "Penn Jillette",
  "Herry Houdini",
];

//   making a copy of an array

let megiciansCopy: string[] = [...megicians];

function show_megicians(greet: string) {
  let withGreetings = "";
  for (let i of megicians) {
    withGreetings += `${greet} ${i}\n`;
  }
  return withGreetings;
}
let makeGreetings = show_megicians("Hello");
let makeArray = makeGreetings.split("\n");
console.log(makeArray);
