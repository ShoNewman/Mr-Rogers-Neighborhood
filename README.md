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

Test: "It should allow only integers to be inputted"
Code: beepBoop("not an integer");
Expected Output: [];

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

Test: "It should check multple user Inputs for the number 1 and return a mutated array with all numbers that include 1 replaced with 'Beep!'"
code: beepBoop("0 10 12 11");
Expected Output: ["0", "Beep!", "Beep!", "Beep!"]

Test: "It should check multple user Inputs for the number 1 and return a mutated array with all numbers that include 1 replaced with 'Beep!' but not numbers that include 2 or 3"
code: beepBoop("0 10 12 13");
Expected Output: ["0", "Beep", "12", "13"]

Test: "It should check multple user Inputs for the number 2 and return a mutated array with all numbers that include 2 replaced with 'Boop!'"
code: beepBoop("0 10 12 13");
Expected Output: ["0", "Beep", "Boop!", "13"]

Test: "It should check multple user Inputs for the number 2 and return a mutated array with all numbers that include 2 replaced with 'Boop!' but not numbers that include 3"
code: beepBoop("0 10 12 23");
Expected Output: ["0", "Beep", "Boop!", "23"]
