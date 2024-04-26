//Task 17 "Shrinking Guest List:"

let guests: string[] = ["Mubashir", "Ahmed", "Zeeshan", "Muneeb", "Azam"];

console.log("Due to limited space, only two people can be invited for dinner.");

while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, You're no longer invited to dinner.`);
}

guests.forEach((guests) => {
  console.log(`Dear ${guests}, You're still invited to dinner`);
});

guests.pop();
guests.pop();

console.log("Final Guest List", guests);
