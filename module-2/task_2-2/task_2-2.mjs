"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(2 + 3 * (2 - 4) * 6);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let metres = 25;
let centimetres = 34
let totalMm = (metres * 1000) + (centimetres * 10);
let inches = totalMm / 25.4;
let result = inches.toFixed(2);
printOut(result);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;
let totalminutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);
printOut(totalminutes);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let twototalminutes = 6322.52;
let totaldays = twototalminutes / 60 / 24;
let totalhours = twototalminutes / 60;
let totalseconds = twototalminutes * 60;
printOut("total days: " + totaldays.toFixed(2) + ", total hours: " + totalhours.toFixed(2) + ", total seconds: " + totalseconds.toFixed(2));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let NOK = 76;
let USD = 8.6;
let USDtoNOK = NOK / USD;
let NOKtoUSD = USD / NOK;
let totalUSD = 54;
let totalNOK = 54 * USDtoNOK.toFixed(2);
printOut("1 NOK = " + NOKtoUSD.toFixed(2) + " USD");
printOut("1 USD = " + USDtoNOK.toFixed(2) + " NOK");
printOut("54 USD = " + (54 * USDtoNOK.toFixed(2)).toFixed(2) + " NOK");
printOut((54 * USDtoNOK.toFixed(2)).toFixed(2) + " NOK is 54 USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let stupidexphilflashbacks = "There is much between heaven and earth that we do not understand";
printOut(stupidexphilflashbacks);
printOut("The length of the quote is " + stupidexphilflashbacks.length + " characters");
printOut("The character at position 19 is " + stupidexphilflashbacks.charAt(19));
printOut("The next 8 characters from position 35 is: " + stupidexphilflashbacks.substr(35, 8));
printOut('The index at which the word "earth" starts is: ' + stupidexphilflashbacks.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 greater than or equal to 7? " + (7 >= 7));
printOut('Is "a" greater than "b"? ' + ("a" > "b"));
printOut('Is "2500" less than "abcd"? ' + ("2500" < "abcd"));
printOut('"arne" is not equal to "thomas"? ' + ("arne" != "thomas"));
printOut("(2 equals 5) is this statement true? " + (2 == 5));
printOut('("abcd" is greater than "bcd") is this statement true? ' + ("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text1 = "254"
let number1 = Number(text1);
let text2 = "57.23"
let number2 = Number(text2);
let text3 = "25 kroner"
let number3 = parseInt(text3);
printOut('"254" as a number is ' + number1);
printOut('"57.23" as a number is ' + number2);
printOut('"25 kroner" as a number is ' + number3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.random() * 360;
printOut("Here is a random number between 0 and 360: " + r.toFixed(2));
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
days = 131;
printOut("There are " + (days / 7).toFixed(0) + " weeks and " + (days % 7) + " days in " + days + " days.");
printOut(newLine);