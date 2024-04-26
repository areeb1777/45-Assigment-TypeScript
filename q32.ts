//Task 32 "Check Usernames:"

let currUsers = ["Mubashir", "Ahmed", "Muneeb", "Daniyal", "Ali"];
let newUsers = ["Muqeet", "Salman", "Ahmed", "Mubashir", "Shazim"];

newUsers.forEach((newUsers) => {
  let newUserLower = newUsers.toLowerCase();

  let userNameTaken = currUsers.some(
    (currUsers) => currUsers.toLowerCase() === newUserLower
  );

  if (userNameTaken) {
    console.log(`${newUsers} is the new member added`);
    currUsers.push(newUsers);
  }
});

console.log(currUsers);
