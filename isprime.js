var readlineSync = require("readline-sync");

var chalk = require("chalk");

var isPrime = true;

console.log(chalk.green( "Let us play a game!!!!"));
console.log("\n");
var username = readlineSync.question("What is your name  ");
console.log("\n");
var number = readlineSync.question(username + " Give me a Positive Number, I will say the number is prime or not -  ");
console.log("\n");
play(number);
function play(number) {
  
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) {
        console.log(chalk.bold.green(number) + ` is a prime number`);
    } else {
        console.log(chalk.bold.red(number) + ` is not a prime number`);
    }
}

}