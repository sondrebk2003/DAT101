"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let aNumber = []
for (let i = 1; i <= 10; i++) {
  aNumber.push(i);
}
printOut(aNumber.join(", "));
aNumber = [];
for (let i = 10; i >= 1; i--) {
  aNumber.push(i);
}
printOut(aNumber.join(", "));
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
let num1 = 1;
let num2 = 1;
let row = [];
for (let i = num2; i <= 7; i++) {
  while (num1 <= 9) {
    row.push("K" + num1 + "R" + num2)
    num1++;
  } 
  num1 = 1;
  printOut(row.join(", "));
  row = [];
  num2++;
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let maxScore = 236;
let score = Math.floor(Math.random() * 236) + 1;
let gradeA = maxScore * 0.89;
let gradeB = maxScore * 0.77;
let gradeC = maxScore * 0.65;
let gradeD = maxScore * 0.53;
let gradeE = maxScore * 0.41;
let gradeF = maxScore * 0.40;

for let i = 0; i <= 5; i++) {
  if (score >= gradeA) {
    printOut(`Score: ${score} Grade: A`);
  } else if (score >= gradeB) {
    printOut(`Score: ${score} Grade: B`);
  } else if (score >= gradeC) {
    printOut(`Score: ${score} Grade: C`);
  } else if (score >= gradeD) {
    printOut(`Score: ${score} Grade: D`);
  } else if (score >= gradeE) {
    printOut(`Score: ${score} Grade: E`);
  } else {
    printOut(`Score: ${score} Grade: F`);
  }
}
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
