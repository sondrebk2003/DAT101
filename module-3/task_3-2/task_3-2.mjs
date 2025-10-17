"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let i = 1; i <= 10; i++) {
  printOut(i);
}
for (let i = 10; i >= 1; i--) {
  printOut(i);
}
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numberGuesser = Math.floor(Math.random() * 60) + 1;
while (numberGuesser !== 42) {
  numberGuesser = Math.floor(Math.random() * 60) + 1;
  printOut(console.log(`Guessed number ${numberGuesser}`));
  if (numberGuesser === 42) {
    printOut("Guessed the correct number 42!");
  }
}
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let guess = Math.floor(Math.random() * 1000000) + 1;
let attempts = 0;
const time = Date.now();
while (guess !== 424242) {
  guess = Math.floor(Math.random() * 1000000) + 1;
  attempts++;
}
printOut(`Guessed the correct number 424242 in ${attempts} attempts! it took ${(Date.now() - time)} milliseconds!`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let forPrimes = [];
function isPrimeNumber(num) {
  for (let i = 2; i * i <= num; i++ ) {
    if (num === 1) {return false};
    if (num % i === 0) {return false};
  }
  return true;
}
for (let i = 2; i <= 200; i++) {
  if (isPrimeNumber(i) === true) {
    forPrimes.push(i);
  }
}
printOut(forPrimes.join(", "));

let num = 2;
let primes = [];
while (num <= 200) {
  if (isPrimeNumber(num) === true) {
    primes.push(num);
  }
  num++;
}
printOut(primes.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
