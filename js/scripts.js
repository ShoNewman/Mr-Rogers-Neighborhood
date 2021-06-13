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


//User Interface Logic
let userInputArray = [];
$(document).ready(function() {
  $("form#userInputForm").submit(function(event) {
    event.preventDefault();

    let userInput = $("#input").val();
    let trimUserInput = trimSpace(userInput)
  
    let checkInteger = isInteger(trimUserInput);
    let checkEmptySpace = isEmptySpace(trimUserInput);
  
    if (!checkInteger) {
      alert ("Please enter a whole number!");
    } else if (!checkEmptySpace) {
      alert("You entered empty space! Please enter a number!");
    } else {
      let mutatedUserInput = beepBoop(trimUserInput);
      console.log(mutatedUserInput);
      userInputArray.push(mutatedUserInput); 
    }

    let userInputString = userInputArray.join(" ");
    $('#output').text(userInputString);

  });
  $('#beepBoop').one('click', (function() {
    for (i=0; i < userInputArray.length; i++) {
      if (userInputArray[i] == "Beep!") {
        $('#output').hide();
        $('#images').append('<li><img src="img/Beep.png" alt="Beep"></li>');
      } else if (userInputArray[i] == "Boop!") {
        $('#output').hide();
        $('#images').append('<li><img src="img/Boop.png" alt="Boop"></li>')
      } else if (userInputArray[i] == "Won't you be my neighbor?") {
        $('#output').hide();
        $('#images').append('<li><img src="img/Neighbor.png" alt="Neighbor"></li>')
      }
    }
    $(this).prop('disabled', true);
  }));

});
