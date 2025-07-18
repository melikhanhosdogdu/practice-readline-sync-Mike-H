const readline = require('readline-sync');

let userName = readline.question("What's your name? ");
console.log("Hello, " + userName + "! Welcome to the JS quiz.\n");

let q1 = readline.question("1. What data type is used for text? ");
console.log("Your answer: " + q1);

let q2 = readline.question("2. What keyword is used to declare a variable in JavaScript? ");
console.log("Your answer: " + q2);

let q3 = readline.question("3. What is 5 + 10? (Type a number) ");
console.log("Your answer: " + q3);

let q4 = readline.question("4. Is 'false' a Boolean or a String? ");
console.log("Your answer: " + q4);

let q5 = readline.question("5. What is the result of typeof null? ");
console.log("Your answer: " + q5);

console.log("\nThank you for taking the quiz, " + userName + "!");

