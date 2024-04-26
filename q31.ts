//Task 31 "No Users:"

let userNames: string[] = ["Mubashir", "Muneeb", "Daniyal", "Admin", "Ahmed"];

// userNames = []

if (userNames.length > 0) {
  for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] == "Admin") {
      console.log(
        ` \n Hello ${userNames[i]} would you like to see a status reoprt? \n`
      );
    } else {
      console.log(`Hello ${userNames[i]} thankyou for logging in again!`);
    }
  }
} else {
  console.log("We need to find some users!");
}
