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
let array1 = [1, 2];
  let array2 = [3];
  let sum1 = 0;
  let sum2 = 0;
  let characters = 0;
  let safetySwitch = 0;


function weirdExpression() {
  while(true) {
    for (let i = 0; i < array1.length; i++) {
      sum1 += array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
      sum2 += array2[i];
    }

    console.log("Sum1: " + sum1 + " Sum2: " + sum2);
    if (sum1 == sum2) {
      printOut(array1 + " = " + array2);
    }

    let nextNumber1 = array1.length + 1;
    let nextNumber2 = array2.length + 1;

    let highValue1 = array1[array1.length - 1];

    array1.length = 0;
    array2.length = 0;
    sum1 = 0;
    sum2 = 0;

    for (let i = 0; i < nextNumber1 - 1; i++) {
      array1.push(highValue1 + i+ 1);
  }
    highValue1 = array1[array1.length - 1];
    for (let i = 0; i < nextNumber2 - 1; i++) {
      array2.push(highValue1 + i + 1);
  }

    characters = array1.length + array2.length;

  safetySwitch++;

    if (characters > 15) {
      break;
    }
    if (safetySwitch > 15) {
      break;
    }
  }
  printOut("MATH IS HARD")
}

weirdExpression();
printOut("Replace this with you answer!");
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
