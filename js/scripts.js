// Utility functions
function isInteger(input) {
  input = Number(input);
  if (Number.isInteger(input)) {
  return true;
  } else {
    return false;
  }
}
isInteger("not an integer");

//Buisness Logic

function beepBoop(input) {
  let beepBoopArray = input.split(" ");
  console.log(beepBoopArray);
  for (i = 0; i < beepBoopArray.length; i++) { 
    if (beepBoopArray[i].includes("1") && !beepBoopArray[i].includes("2") && !beepBoopArray[i].includes("3")) {
    beepBoopArray[i] = "Beep!";
    } else if (beepBoopArray[i].includes("2") && !beepBoopArray[i].includes("3")) {
    beepBoopArray[i] = "Boop!";
    } else if (beepBoopArray[i].includes("3")) {
      beepBoopArray[i] = "Won't you be my neighbor?"
    }
  }
 return beepBoopArray;
}

beepBoop("0 10 12 23");

//User Interface Logic
let userInputArray = [];
$(document).ready(function() {
  $("form#userInputForm").submit(function(event) {
    event.preventDefault();
    
    const number1 = parseInt($("#input").val());
    userInputArray.push(number1); 

  
    alert(userInputArray);
  });
});