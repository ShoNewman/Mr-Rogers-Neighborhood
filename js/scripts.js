// Utility functions
function trimSpace(input) {
  return input.trim();
}
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

function beepBoop(userInput) {
  if (userInput === 0) {
    return userInput;
  } else if (userInput.includes(1) && !userInput.includes(2) && !userInput.includes(3)) {
    return "Beep!";
  } else if (userInput.includes(2) && !userInput.includes(3)) {
    return "Boop!";
  } else if (userInput.includes(3)) {
    return "Won't you be my neighbor?";
  } else {
    return userInput;
  }
  
}

beepBoop("0 10 12 23");

//User Interface Logic
let userInputArray = [];
$(document).ready(function() {
  $("form#userInputForm").submit(function(event) {
    event.preventDefault();
      
    let userInput = $("#input").val();
    let trimUserInput = trimSpace(userInput)
  
   
    let checkInteger = isInteger(trimUserInput);
    console.log(checkInteger)
    if (!checkInteger) {
      alert ("Not an integer!");
  
    } 
  });
});