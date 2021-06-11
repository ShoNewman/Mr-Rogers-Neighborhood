let beepBoopArray = [];
function beepBoop(userInput) {
  if (userInput === 0) {
    return beepBoopArray.push(userInput)
  } else if (userInput === 1) {
    return beepBoopArray.push("Beep!");
  } else if (userInput === 2) {
    return beepBoopArray.push("Boop!");
  }
}
beepBoop(2)
console.log(beepBoopArray);