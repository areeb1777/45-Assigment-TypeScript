//Task 37 "Large Shirts:"

// function make_shirt(size: string, label: string) {
//     return size + label;
//   }
//   let myFun = make_shirt("Large ", "I Love TypeScript");
//   console.log(myFun);

// making large as default

//   function make_shirt(size: string = "Large", label: string) {
//     return size + label;
//   }
//   let myFun = make_shirt(undefined, " I Love TypeScript");
//   console.log(myFun);

// making medium as default

//   function make_shirt(size: string = "Medium", label: string) {
//     return size + label;
//   }
//   let myFun = make_shirt(undefined, " I Love TypeScript");
//   console.log(myFun);

//making shirt of any size

function make_shirt(size: string, label: string) {
  return size + label;
}
let myFun = make_shirt("Any size ", "I Love TypeScript");
console.log(myFun);
