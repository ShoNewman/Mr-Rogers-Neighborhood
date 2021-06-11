// let beepBoopArray = [];

// function beepBoop() {
//   for (let i = 0; i < beepBoopArray.length; i++) {
//     if (i === 0) {
//       return i;
//     } else if (i.includes(1) && !i.includes(2) && !i.includes(3)) {
//       return beepBoopArray.push("Beep!");
//     } else if (i.includes(2) && !i.includes(3)) {
//       return beepBoopArray.push("Boop!");
//     } else if (i.includes(3)) {
//       return beepBoopArray.push("Won't you be my neighbor?");
//     }

//     if (i != Number.isInteger(userInput)) {
//       return false;
//     }
//   }
// }
// beepBoop("23")
// console.log(beepBoopArray);

function beepBoop(input) {
  let beepBoopArray = input.split(" ");
  console.log(beepBoopArray);
  for (i = 0; i < beepBoopArray.length; i++) { 
    if (beepBoopArray[i].includes("1") && !beepBoopArray[i].includes("2") && beepBoopArray[i].includes("3")) {
    beepBoopArray[i] = "Beep";
    }
  }
 return beepBoopArray;
}

beepBoop("0 10 12 11");
