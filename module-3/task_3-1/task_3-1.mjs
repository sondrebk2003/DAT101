"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeup = Math.floor(Math.random() * 3) + 6;
printOut("You woke up at: " + wakeup.toFixed(0) + " o'clock")
if (wakeup < 7) {
  printOut("You woke up early")
} else if (wakeup > 6 && wakeup < 8) {
  printOut("You woke up on time")
} else if (wakeup > 7) {
  printOut("You woke up too late")
};

if (wakeup === 6) {
  printOut("I woke up at 6 o'clock, therefore I will drive to school")
} else if (wakeup === 7) {
  printOut("I woke up at 7 o'clock, therefore I will take the bus to school")
} else if (wakeup === 8) {
  printOut("I woke up at 8 o'clock, therefore I will drive to school")
};

wakeup = Math.floor(Math.random() * 2) + 7;
if (wakeup.toFixed(0) == 7) {
  printOut("I woke up at 7 o'clock, therefore I will take the bus to school")
} else {
  printOut("I woke up at " + wakeup.toFixed(0) + " o'clock, therefore I take the train to school")
};
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let intvar = Math.floor(Math.random() * 21) - 10;
printOut (`The number is ${intvar}`);
if (intvar < 0) {
  printOut("The number is negative")
} else if (intvar > 0) {
  printOut("The number is positive")
} else {
  printOut("The number is zero")
};
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSize = Math.floor(Math.random() * 8) + 1
printOut("The image size is: " + imageSize + "MB");
if (imageSize >= 4) {
  printOut("Thank you.")
} else {
  printOut("The image is too small.")};
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("The image size is still: " + imageSize + "MB");
if (imageSize < 4) {
  printOut("The image is too small.")
} else if (imageSize >= 4 && imageSize < 6) {
  printOut("Thank you.")
} else if (imageSize >= 6) {
  printOut("The image is too large.")
};
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("The month is: " + monthName);
if (monthName.includes('r')) {
  printOut("You must take Vitamin D")
} else {
  printOut("You don't need to take Vitamin D")
};
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "January" ||
    monthName === "Mars" ||
    monthName === "Mai" ||
    monthName === "Juli" ||
    monthName === "August" ||
    monthName === "October" ||
    monthName === "December") {
      printOut("This month has 31 days")
} else if (monthName === "February") {
      printOut("This month has 28 days")
} else {
      printOut("This month has 30 days")
};
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "Mars" || monthName === "Mai") {
  printOut(monthName + ": The gallery is closed for refurbishment.");
} else if (monthName === "April") {
  printOut(monthName + ": The gallery is closed in the main building, but OPEN in temporary premises next door.");
} else {
  printOut(monthName + ": The gallery is OPEN as usual.");
};
printOut(newLine);
