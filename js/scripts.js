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
function isEmptySpace(input) {
  if (input.length === 0) {
    return false;
  } else {
    return true;
  }
}

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
    let checkEmptySpace = isEmptySpace(number2);
  
    if (!checkInteger) {
      alert ("Not an integer!");
    } else if (!checkEmptySpace) {
      alert("You entered empty space! Please enter a number!");

    } else {
      let mutatedUserInput = beepBoop(trimUserInput);
      console.log(mutatedUserInput);
      userInputArray.push(mutatedUserInput); 
    }
  }
  
  let userInputString = userInputArray.join(" ");
  $('#output').text(userInputString);
});
