"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function currentTime() {
  const now = new Date();
  printOut(`Current time is: ${now.toLocaleString("no-NB", { timeZone: "Europe/Oslo" })}`);
}

currentTime();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateCircle(radius) {
  printOut("Circle's Radius: " + radius);
  const diameter = radius * 2;
  printOut("Diameter: " + diameter);
  const circumference = 2 * Math.PI * radius;
  printOut("Circumference: " + circumference.toFixed(2));
  const area = Math.PI * radius * radius;
  printOut("Area: " + area.toFixed(2));
}

const funnyRandomNumberFromLike1to100 = Math.floor(Math.random() * 100) + 1;
const funnyRandomNumberFromLike1to50 = Math.floor(Math.random() * 50) + 1;

calculateCircle(funnyRandomNumberFromLike1to100);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateRectangle(length, width) {
  printOut("Rectangle's Length: " + length);
  printOut("Rectangle's Width: " + width);
  const circumference = 2 * (length + width);
  printOut("Circumference: " + circumference);
}

calculateRectangle(funnyRandomNumberFromLike1to100, funnyRandomNumberFromLike1to100 / 2);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperatureScales(typeFrom, typeTo, value) {
  switch (typeFrom.toLowerCase()) {
    case "celsius":
      if (typeTo.toLowerCase() === "fahrenheit") {
        printOut("Converting " + value + "°C to Fahrenheit:");
        const fahrenheit = (value * 9) / 5 + 32;
        printOut(fahrenheit.toFixed(0) + "°F");
      } else if (typeTo.toLowerCase() === "kelvin") {
        printOut("Converting " + value + "°C to Kelvin:");
        const kelvin = value + 273.15;
        printOut(kelvin.toFixed(0) + "K");
      } else {
        printOut("Invalid type, please choose fahrenheit or kelvin", typeTo);
      }
      break;
    case "fahrenheit":
      if (typeTo.toLowerCase() === "celsius") {
        printOut("Converting " + value + "°F to Celsius:");
        const celsius = (value - 32) * 5 / 9;
        printOut(celsius.toFixed(0) + "°C");
      } else if (typeTo.toLowerCase() === "kelvin") {
        printOut("Converting " + value + "°F to Kelvin:");
        const kelvin = (value - 32) * 5 / 9 + 273.15;
        printOut(kelvin.toFixed(0) + "K");
      } else {
        printOut("Invalid type, please choose celsius or kelvin", typeTo);
      }
      break;
    case "kelvin":
      if (typeTo.toLowerCase() === "celsius") {
        printOut("Converting " + value + "K to Celsius:");
        const celsius = value - 273.15;
        printOut(celsius.toFixed(0) + "°C");
      } else if (typeTo.toLowerCase() === "fahrenheit") {
        printOut("Converting " + value + "K to Fahrenheit:");
        const fahrenheit = (value - 273.15) * 9 / 5 + 32;
        printOut(fahrenheit.toFixed(0) + "°F");
      } else {
        printOut("Invalid type, please choose celsius or fahrenheit", typeTo);
      }
      break;
    default:
      console.error("Invalid temperature scale:", typeFrom);
  }
}
convertTemperatureScales("Celsius", "Fahrenheit", funnyRandomNumberFromLike1to50);
convertTemperatureScales("Fahrenheit", "Kelvin", funnyRandomNumberFromLike1to50);
convertTemperatureScales("Kelvin", "Celsius", funnyRandomNumberFromLike1to50);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function VATlessPrice(priceWithVAT, productType) {
  printOut("Price with VAT: " + priceWithVAT);
    if (productType.toLowerCase() === "normal") {
      printOut("Product type: Normal (25% VAT)");
      const stage1 = priceWithVAT * 0.25;
      const priceWithoutVATNormal = priceWithVAT - stage1;
      printOut("Price without VAT: " + priceWithoutVATNormal.toFixed(2));
    }
    else if (productType.toLowerCase() === "food") {
      printOut("Product type: Food (15% VAT)");
      const stage1 = priceWithVAT * 0.15;
      const priceWithoutVATFood = priceWithVAT - stage1;
      printOut("Price without VAT: " + priceWithoutVATFood.toFixed(2));
    }
    else if (productType.toLowerCase() === "hotel" || productType.toLowerCase() === "transport" || productType.toLowerCase() === "cinema") {
      printOut("Product type: Hotel, Transport or Cinema (10% VAT)");
      const stage1 = priceWithVAT * 0.10;
      const priceWithoutVATSpecial = priceWithVAT - stage1;
      printOut("Price without VAT: " + priceWithoutVATSpecial.toFixed(2));
  }  else {
      printOut("Invalid product type:", productType);
    }
}
const products = ["normal", "food", "hotel", "transport", "cinema"];
products.forEach((products) => {
  VATlessPrice(funnyRandomNumberFromLike1to100, products);
});

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function tsdFormula(speed, time, distance) {
  if (speed === null) {
    printOut("Calculating Speed:");
    const calculatedSpeed = distance / time;
    printOut("Speed: " + calculatedSpeed.toFixed(2) + " units/time");
  } else if (time === null) {
    printOut("Calculating Time:");
    const calculatedTime = distance / speed;
    printOut("Time: " + calculatedTime.toFixed(2) + " time units");
  } else if (distance === null) {
    printOut("Calculating Distance:");
    const calculatedDistance = speed * time;
    printOut("Distance: " + calculatedDistance.toFixed(2) + " units");
  } else {
    printOut("Please provide null for the variable you want to calculate.");
  }
}

tsdFormula(null, 2, 100);
tsdFormula(50, null, 200);
tsdFormula(60, 3, null);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function enlargen(string, maxsize, character, direction) {
  let result = string;
  const paddingSize = maxsize - string.length;
  if (paddingSize > 0) {
    const padding = character.repeat(paddingSize);
    if (direction == true) {
      result = padding + string;
    } else if (direction == false) {
      result = string + padding;
    } else {
      printOut("Write true or false for direction! true = left, false = right. Because left is right!");
      return;
    }
  }
  printOut(result);
}

enlargen("YO", 30, "O", false);
enlargen("O", 30, "N", true);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let set1 = [1, 2];
let set2 = [3];
let sum1 = 0;
let sum2 = 0;
let set1FinalIndex = set1.length - 1;
let set2FinalIndex = set2.length - 1;

function proveSaying(count) {

  // CHECKING IF ARRAYS ARE EQUAL
  for (let i = 0; i < set1.length; i++) {
    sum1 += set1[i]
  }
  // console.log("Sum 1 = " + sum1)
  for (let i = 0; i < set2.length; i++) {
    sum2 += set2[i]
  }
  // console.log("Sum 2 = " + sum2)

  if (sum1 == sum2) {
  printOut(set1.join(" + ") + " = " + set2.join(" + "))
  } else {
    // console.log("ERROR: ARRAY 1 " + set1 + " IS NOT EQUAL TO ARRAY 2 " + set2);
  }
  let set1Extension = set1.length;
  let set2Extension = set2.length;


  // UPDATES ARRAY 1 NUMBERS TO COUNT FROM HIGHEST ARRAY 2 NUMBERS, THEN ADDS A NEW INDEX

  for (let i = 0; i < set1Extension; i++) {
    if (i == 0) {
      //console.log("Changing " + set1[i] + " to " + (set2[set2FinalIndex] + 1))
      set1[i] = set2[set2FinalIndex] + 1;
    } else {
      //console.log("Changing " + set1[i] + " to " + (set1[i - 1] + 1))
      set1[i] = set1[i - 1] + 1;
    }
  }
  set1.push(set1[set1FinalIndex] + 1);
  set1FinalIndex = set1.length - 1;
  //console.log(set1);


  // UPDATES ARRAY 2 NUMBERS TO COUNT FROM HIGHEST CHANGED ARRAY 1 NUMBER, THEN ADDS A NEW INDEX

  for (let i = 0; i < set2Extension; i++) {
    if (i == 0) {
      //console.log("Changing " + set2[i] + " to " + (set1[set1FinalIndex] + 1))
      set2[i] = set1[set1FinalIndex] + 1;
    } else {
      //console.log("Changing " + set2[i] + " to " + (set2[i-1] + 1))
      set2[i] = set2[i-1] + 1;
    }
  }
  set2.push(set2[set2FinalIndex] + 1)
  set2FinalIndex = set2.length - 1;
  //console.log(set2)

  //CHECKS HOW MANY TIMES TO RERUN
  if (count == 0) {
    return
  }

  proveSaying(count - 1)
}

proveSaying(10);

printOut("Math is fun!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return  n * factorial(n - 1);
  }
}

printOut("Factorial of 5 is: " + factorial(5));
printOut("Factorial of 10 is: " + factorial(10));

factorial(5);
factorial(10);
printOut(newLine);
