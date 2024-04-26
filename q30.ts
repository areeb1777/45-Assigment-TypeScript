//Task 30 "Hello Admin:"

let userNames: string[] = ["Mubashir", "Muneeb", "Daniyal", "Admin", "Ahmed"];

for (let i = 0; i < userNames.length; i++) {
  if (userNames[i] == "Admin") {
    console.log(`Hello ${userNames[i]} would you like to see a status reoprt?`);
  } else {
    console.log(`Hello ${userNames[i]} thankyou for logging in again!`);
  }
}
