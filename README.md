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
Expected Output: ("Beep")

Test: "It should only return an array with 'Beep' if the number includes 1 and does not include the numbers 2"
Code: beepBoop(12);
Expected Output: false;
