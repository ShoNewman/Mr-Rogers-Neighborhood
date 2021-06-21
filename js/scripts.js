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

function beepBoop(userInput) {
  let input = parseInt(userInput);
  let userInputArray = [];
  for (let i = 0; i <= input; i++ ) {
    userInputArray.push(i);  
  }
  return userInputArray.toString().split(',');  
}

function beepBoopMutate(userInputArray) {
  for (i = 0; i < userInputArray.length; i++ ) {
    if (i === 0) {
      userInputArray[i] = i;
    } else if (userInputArray[i].includes('1') && !userInputArray[i].includes('2') && !userInputArray[i].includes('3')) {
      userInputArray[i] = "Beep!"; 
    } else if (userInputArray[i].includes('2') && !userInputArray[i].includes('3')) {
      userInputArray[i] = "Boop!";
    } else if (userInputArray[i].includes('3')) {
      userInputArray[i] = "Won't you be my neighbor?";
    } else {
      userInputArray[i] = userInputArray[i];
    } 
  }
    return userInputArray;
}

//User Interface Logic
let userInputArray = [];
$(document).ready(function() {
  $("form#userInputForm").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    $("#imageContainer").hide;

    let userInput = $("#input").val();
    userInput = trimSpace(userInput)
    let checkInteger = isInteger(userInput);
    let checkEmptySpace = isEmptySpace(userInput);
  
    if (!checkInteger) {
      alert ("Please enter a whole number!");
    } else if (!checkEmptySpace) {
      alert("You entered empty space! Please enter a number!");
    } else {
      userInputArray = beepBoop(userInput);
      userInputArray = beepBoopMutate(userInputArray);
    }
    $('#output').html(userInputArray.join(' '));
  });

  $('#beepBoop').click(function() {
    for (i=0; i < userInputArray.length; i++) {
      if (userInputArray[i] == "Beep!") {
        $('#output').hide();
        $('#imageUl').append('<li class="float-left"><img src="img/Beep.png" alt="Beep" class="imageBeep"></li>');
      } else if (userInputArray[i] == "Boop!") {
        $('#output').hide();
        $('#imageUl').append('<li class="float-left"><img src="img/Boop.png" alt="Boop" class="imageBoop"></li>');
      } else if (userInputArray[i] == "Won't you be my neighbor?") {
        $('#output').hide();
        $('#imageUl').append('<li class="float-left"><img src="img/neighbor.png" alt="Neighbor" class="imageNeighbor"></li>');
      }
    }
    $(".imageBeep").click(function() {
      var img = $(".imageBeep");
      img.animate({height: '80%', opacity: '0.4'}, "600");
      img.animate({width: '80%', opacity: '1'}, "900");
      img.animate({height: '200%', opacity: '1'}, "600");
      img.animate({width: '110%', opacity: '1'}, "800");
    });
    $(".imageBoop").click(function() {
      var img = $(".imageBoop");
      img.animate({width: '0', opacity: '0.4'}, "100");
      img.animate({width: '80%', opacity: '1'}, "100");
    });
    $(".imageNeighbor").click(function() {
      var img = $(".imageNeighbor");
      img.animate({width: '140%', opacity: '1'}, "100");
      img.animate({width: '80%', opacity: '1'}, "100");
    });
  });
});
