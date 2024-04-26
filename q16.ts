//Task 16 "More Guests:"

let guestArr: string[] = ["Mubashir", "Ahmed", "Daniyal", "Muneeb"];

let canNotAttend: string = "Muneeb";
let newGuest: string = "Ali";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);

// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`)
// )

//Part 2 Begining
let guestBeginig: string = "Azam";
guestArr.unshift(guestBeginig);
// console.log(guestArr);

//Part 3 Middle
let middleGuest: string = "Wasi";
let middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr);

//Part 4 Append
guestArr.push("Zohaib");
// console.log(guestArr);

//Part 5
guestArr.map((items) =>
  console.log(
    `Dear ${items}, you are invited in the more people category in the dinner`
  )
);
