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

Describe: beepBoop()
Test: "It convert string into integer"
Code: beepBoop(0);
Expected Output: "0"";

Test: "It should create an array starting from 0 until the number that the user inputted"
Code: beepBoop(1);
Expected Output: userInputArray = [0, 1];

Test: "It should convert the array of numbers to an array of strings so that .includes method can be used to evaluate the elements"
Code: userInputArray = [0, 1];
Expected Output: userInputArray = ["0", "1"];

--------------------------------------------
Describe: beepBoopMutate()
Test: "It should replace any 0 in the array with a 0"
Code: beepBoop(0);
Expected Output: [0];

Test: "It should replace any "1" in the array with 'Beep'"
Code: beepBoop(1);
Expected Output: ["Beep"];

Test: "It should replace any "2" in the array with 'Boop'"
Code: beepBoop(2);
Expected Output: ["Boop"];

Test: "It should replace any "3" in the array with 'Won't you be my neighbor?'"
Code: beepBoop(3);
Expected Output: ["Won't you be my neighbor?"];

Test: "It should replace any number with '1' in the array with 'Beep'"
Code: beepBoop(10);
Expected Output: ["Beep"];

Test: "It should replace any number with '2' in the array with 'Boop', and this should override any numbers with '1'"
Code: userInputArray = [12, 20];
Expected Output: ["Boop", Boop"];

Test: "It should replace any number with '3' in the array with 'Won't you be my neighbor', and this should override any numbers with '2' and '1'"
Code: userInputArray = [13, 23, 30];
Expected Output: ["Won't you be my Neighbor", "Won't you be my Neighbor", "Won't you be my Neighbor"];

-------------------------------------------------------
Describe: trimSpace()
Test: "It should remove all empty spaces in user input before input is processed by functions"
Code: trimSpace("    5   ")
Expected Output: "5";

-------------------------------------------------------
Describe: isInteger()
Test: "It should test if user inputted an integer"
Code: isInteger("3.4");
Expected Output: false;

-------------------------------------------------------
Describe: isEmptySpace()
Test: "It should test if user submitted an empty form"
Code: User input = ''
Expected Output: false;

-------------------------------------------------------
Describe: User interface displayed on form submission;

Test: "It should display userInputArray[] in div#output for user to see but without the comma"
Code: userInputArray['Beep', 'Boop'];
Expected Output: BeepBoop

Test: "It should add space between each array item when display in div#output"
Code: userInputArray['Beep', 'Boop'];
Expected Output: Beep Boop

Test: "It will loop through array and create new array with images associated with each output and append each image to list"
Code: userInputArray['Beep'];
Expected Output: image of owl

Test: "It will replace text output of array with image array;
Code: $('#output').hide();
Expected Output: Only div#imageContainer visible




