//Task 19 "Dinner Guests:"

let myFreinds: string[] = ["Mubashir", "Ahmed", "Muneeb", "Daniyal"];
console.log(
  `I am inviting ${myFreinds.length} freinds to my dinner which are following\n`
);

for (let i = 0; i < myFreinds.length; i++) {
  console.log(`${i + 1}. ${myFreinds[i]}`);
}
