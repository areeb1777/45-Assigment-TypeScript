//Task 42 "Great Megicians:"

let megicians: string[] = [
  "Neil Patrick Harris",
  "Penn Jillette",
  "Herry Houdini",
];

function show_megicians(greet: string) {
  for (let i of megicians) {
    console.log(greet, i);
  }
}
show_megicians("Hello, How are you Mr.");
