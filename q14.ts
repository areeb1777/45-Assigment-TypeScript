//Task 14 "Guest List:"
let guestList: string[] = ["Mubashir", "Ahmed", "Muneeb", "Daniyal"];
console.log("Dinner Invitation:");
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`
  );
}
