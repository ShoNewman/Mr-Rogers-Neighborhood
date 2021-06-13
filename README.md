Describe: beepBoop(userInput)
Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: [0];

Test: "It should return an array with a 'Beep' if the number 1 is inputted"
Code: beepBoop(1);
Expected Output: ["Beep"];

Test: "It should return an array with a 'Boop' if the number 2 is inputted"
Code: beepBoop(2);
Expected Output: ["Boop"];

Test: "It should return an array with a 'Won't you be my neighbor?' if the number 3 is inputted"
Code: beepBoop(2);
Expected Output: ["Won't you be my neighbor?"];

Test: "It should return an array with 'Beep' if the number includes 1"
Code: beepBoop(10);
Expected Output: ["Beep"];

Test: "It should only return an array with 'Beep' if the number includes 1 and does not include the numbers 2"
Code: beepBoop(12);
Expected Output: false;

Test: "It should only return an array with 'Beep' if the number includes 1 and does not include the numbers 3"
Code: beepBoop(13);
Expected Output: false;

Test: "It should only return an array with 'Boop' if the number includes 2 and does not include the number 3"
Code: beepBoop(23);
Expected Output: false;

Test: "It should return an array with 'Won't you be my neighbor' if the number includes 3"
Code: beepBoop(23);
Expected Output: ["Won't you be my neighbor?"];



-------------------------------------------------------
Describe: checkInteger(userInput)
Test: "It should allow only integers to be inputted"
Code: isInteger("3.4");
Expected Output: false;

Test: "It should remove all empty spaces in user input before input is used proccesed by functions"
Code: trimSpace("    5   ")
Expected Output: "5";

-------------------------------------------------------
Describe: userInputArray[]
Test: "It should take value of user input and add it to userInputArray"
Code: userInput = "3";
Expected Output: userInputArray["3"];

Test: "It should ensure that user input is only an integer"
Code: userInput = "3.5";
Expected Output: false;

Test: "It should ensure that user input does not contain any spaces"
Code: userInput = "   5   ";
Expected Output: "5";

Test: "It should display userInputArray[] in div#output for user to see and should update each time user enters new input"
Code: userInputArray['Beep', 'Boop'];
Expected Output: <div id="output">Beep, Boop</div>

Test: "It remove ',' and add space between each array item when display in div#output"
Code: userInputArray['Beep', 'Boop'];
Expected Output: <div id="output">Beep Boop</div>

Test: "It will loop through array and create new array with images associated with each output and append each image to list"
Code: userInputArray['Beep'];
Expected Output: <li><img src="img/Beep.png" alt="Beep"></li>

Test: "It will replace text output of array with image array;
Code: $('#output').hide();
Expected Output: Only div#imageContainer visible


