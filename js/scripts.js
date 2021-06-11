let beepBoopArray = [];
function beepBoop(userInput) {
  if (userInput === 0) {
    return beepBoopArray.push(userInput)
  } if (userInput === 1) {
    return beepBoopArray.push("Beep!");
  }
}
beepBoop(1)
console.log(beepBoopArray);