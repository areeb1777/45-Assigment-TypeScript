//Task 15 "Changing Guest List:"

let guestList: string[] = ["Ahmed", "Mubashir", "Adil", "Muneeb", "Daniyal"];
console.log("Dinner Invitation:");
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`
  );
}
let unableToAttend: string = guestList[2];
console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.`);
guestList[2] = "Adil";
console.log("Updated Dinner Invitation:");
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`
  );
}
