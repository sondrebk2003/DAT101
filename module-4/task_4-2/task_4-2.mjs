"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const anArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (let i = 0; i < anArray.length; i++) {
    printOut(anArray[i]);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(anArray.join(", "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const string = "Hei på deg, hvordan har du det?"
const stringArray = [];
let word = "";

for (let i = 0; i < string.length; i++) {
    let letter = string.charAt(i);
    if ((letter == " ") || (i == string.length - 1)) {
        stringArray.push(word);
        word = "";
    } else {
        word += letter;
    }
}
let stringarrayjasonedlol = JSON.stringify(stringArray)
printOut(stringarrayjasonedlol)

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const nameArray = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeElement(arrayName, removeWhat) {
    const newArray = arrayName.filter((element) => !element.includes(removeWhat));
    return newArray
}

let jsonnameArray = JSON.stringify(nameArray);
let jsonnameArrayWithoutNina = JSON.stringify(removeElement(nameArray, "Nina"))
printOut(jsonnameArray);
printOut(jsonnameArrayWithoutNina);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boyArray = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]
const mergedArray = nameArray.concat(boyArray);

let mergedArrayjsond = JSON.stringify(mergedArray);
printOut(mergedArrayjsond);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    #Title
    #Author
    #ISBN

    constructor(aTitle, aAuthor, aISBN) {
        this.#Title = aTitle;
        this.#Author = aAuthor;
        this.#ISBN = aISBN;
    }

    toString() {
        return [this.#Title, this.#Author, this.#ISBN].join(", ");
    }
}

const surroundedByIdiots = new TBook ("Surrounded by Idiots", "Thomas Erikson", "9781250179937");
const eloquentJavaScript = new TBook ("Eloquent JavaScript", "Marjin Haverbeke", "9781593279509");
const cSharpAIO = new TBook ("C# 10.0 All-in-One For Dummies", "John Paul Mueller", "9781119839071");

const books = [surroundedByIdiots, eloquentJavaScript, cSharpAIO];

books.forEach((element) => {
    printOut(element.toString());
})

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Monday"},
    WeekDay2: {value: 0x02, name: "Tuesday"},
    WeekDay3: {value: 0x04, name: "Wednesday"},
    WeekDay4: {value: 0x08, name: "Thursday"},
    WeekDay5: {value: 0x10, name: "Friday"},
    WeekDay6: {value: 0x20, name: "Saturday"},
    WeekDay7: {value: 0x40, name: "Sunday"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Workdays"},
    Weekends: {value: 0x20 + 0x40, name: "Weekend"},
}

const keys = Object.keys(EWeekDays);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    printOut(key)
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const funnyNumbers = [7,9,15,9,18,15,4,17,4,8,9,4,17,12,10,16,19,14,7,14,19,2,10,10,8,4,17,5,4,7,7,4,13,13,13]
printOut(funnyNumbers.sort((a, b) => {return a - b;}).join(", "));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const counts = {}

for (let i = 0; i < funnyNumbers.length; i++) {
    const num = funnyNumbers[i];

    if (counts[num]) {
        counts[num]++;
    } else {
        counts[num] = 1;
    }
}
printOut(counts)

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const bigAssArray = [
]

for (let i = 0; i < 5; i++) {
    //create an array here
    const arrayRow = [];
    for (let j = 0; j < 9; j++) {
        //push 9 values in here
        let value = "R" + i.toString() + "C" + j.toString()
        arrayRow.push(value);
    }
    bigAssArray.push(arrayRow)
}

const bigArrayjson = JSON.stringify(bigAssArray);
//printOut(bigArrayjson);
printOut(bigAssArray);
printOut("Row 2 column 4 (with index beginning at 0 and not 1): " + bigAssArray[2][4])

printOut(newLine);
