# _Mr Roger's Neighborhood_

#### _Web application transforming numbers into words and words into pictures with animation effects_

#### By _**Shoshana Newman**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git and Github_

## Description

_This browser application takes user inputs and checks if they are whole numbers than creates an array that mutates the numbers into the words "Beep" for numbers containing 1, "Boop" for numbers containing 2 and "Won't you be my neighbor?" for numbers containing 3". When a user clicks a second button labeled "Beep! Boop!" the words are transformed corresponding pictures which can be clicked on to initiate an animation effect._

## Setup/Installation Requirements

* _Navigate to: [Mr Roger's Neighborhood](https://shonewman.github.io/Mr-Rogers-Neighborhood/index.html "Mr Roger's Neighborhood")_
* _To clone and run this application you will need to have [Git](https://git-scm.com/"Git" "Git") installed on your system_
* _Then clone this repository [Repository](hhttps://github.com/ShoNewman/Mr-Rogers-Neighborhood.git "Repository") to your computer using the following commands in your terminal:_
- Clone repository to your computer:
  - $ git clone https://github.com/ShoNewman/Mr-Rogers-Neighborhood.git
- Open the index.html in your browser
  - $ open index.html

## Known Bugs

* _All animations with same class animate at same time instead of individually_
* _If you click "Beep! Boop!" button more than twice without submitting more inputs it will spit out duplicates of the images associated with the existing array_
* _If there are more than 5 images, the images float oddly_

## License

_Copyright 2021 Shoshana Newman_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact Information

_Shoshana Newman [sho.newman@gmail.com](mailto:sho.newman@gmail.com)_

----------------------------------------
Test Driven Development

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
Expected Output: image of owl

Test: "It will replace text output of array with image array;
Code: $('#output').hide();
Expected Output: Only div#imageContainer visible




