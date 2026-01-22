"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const accountTypes = {
    normal: "Brukskonto",
    saving: "Sparekonto",
    credit: "Kreditkonto",
    pension: "Pensjonskonto"
}
printOut(Object.values(accountTypes).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let currencyTypes = {}
createCurrencyTypes()

class TAccount {
    #type
    #name
    #balance
    #withdrawCount
    #currencyType = currencyTypes.NOK;
    constructor(aName, type, balance) {
        this.#type = type;
        this.#name = aName;
        if (balance == undefined) {
            this.#balance = 0;
        } else {
            this.#balance = balance;
        }
    }

    toString() {
        return printOut([this.#name, this.#type].join(" = "))
    }

    setType(aType) {
        printOut("Account is changed from" + this.#type + " to " + this.#type);
        this.#type = aType;
        this.#withdrawCount = 0;
    }

    getBalance() {
        return printOut(this.#balance);
    }

    deposit(aAmount) {
        this.#balance += aAmount;
        return printOut("Deposited " + aAmount + " into " + this.#name + ". New balance is " + this.#balance + this.#currencyType.denomination)
    }

    withdraw(aAmount) {
        if (this.#balance < aAmount) {
            return printOut("Error, the withdraw amount is higher than your balance");
        } else if (this.#withdrawCount > 2) {
            return printOut("You can't withdraw from a Sparekonto more than three times!")
        } else if (this.#type == accountTypes.pension) {
            return printOut("You can't withdraw form a Pensjonskonto!")
        } else {
            this.#balance -= aAmount;
            this.#withdrawCount ++;
            return printOut("Withdrawal of " + aAmount + " from " + this.#name + ", new balance is " + this.#balance + this.#currencyType.denomination);
        }
    }

    setCurrencyType(aType) {
        switch(aType) {
            case currencyTypes.NOK.name:
                this.#currencyType = currencyTypes.NOK;
                break;
            case currencyTypes.EUR.name:
                this.#currencyType = currencyTypes.EUR;
                break;
            case currencyTypes.USD.name:
                this.#currencyType = currencyTypes.USD;
                break;
            case currencyTypes.GBP.name:
                this.#currencyType = currencyTypes.GBP;
                break;
            case currencyTypes.INR.name:
                this.#currencyType = currencyTypes.INR;
                break;
            case currencyTypes.AUD.name:
                this.#currencyType = currencyTypes.AUD;
                break;
            case currencyTypes.PHP.name:
                this.#currencyType = currencyTypes.PHP;
                break;
            case currencyTypes.SEK.name:
                this.#currencyType = currencyTypes.SEK;
                break;
            case currencyTypes.CAD.name:
                this.#currencyType = currencyTypes.CAD;
                break;
            case currencyTypes.THB.name:
                this.#currencyType = currencyTypes.THB;
                break;
            default:
                printOut("Error: " + aType + " is an invalid currency!")
                break;
        }
    }

    #currencyConvert(aType) {
        this.#currencyType = aType
        try {
            return currencyTypes.NOK.value / this.#currencyType.value * aType.value;
        } catch (error) {
            console.log("ERROR: This is an invalid type to convert!")
        }
    }

    convertCurrency(aType) {
        return this.#currencyConvert(aType)
    }
}

const myAccount = new TAccount("myAccount", accountTypes.normal);
myAccount.toString()
myAccount.setType(accountTypes.saving);
myAccount.toString();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(10);
myAccount.setType(accountTypes.pension);
myAccount.withdraw(10);
myAccount.setType(accountTypes.saving);
myAccount.withdraw(40);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function createCurrencyTypes() {
    currencyTypes = {
        NOK: {
            value: 1.0000,
            name: "Norske kroner",
            denomination: "kr"
        },
        EUR: {
            value: 0.0985,
            name: "Europeiske euro",
            denomination: "€"
        },
        USD: {
            value: 0.1091,
            name: "United States dollar",
            denomination: "$"
        },
        GBP: {
            value: 0.0847,
            name: "Pound sterling",
            denomination: "£"
        },
        INR: {
            value: 7.8309,
            name: "Indiske rupee",
            denomination: "₹"
        },
        AUD: {
            value: 0.1581,
            name: "Australienske dollar",
            denomination: "A$"
        },
        PHP: {
            value: 6.5189,
            name: "Filippinske peso",
            denomination: "₱"
        },
        SEK: {
            value: 1.0580,
            name: "Svenske kroner",
            denomination: "kr"
        },
        CAD: {
            value: 0.1435,
            name: "Canadiske dollar",
            denomination: "C$"
        },
        THB: {
            value: 3.3289,
            name: "Thai baht",
            denomination: "฿"
        }
    }
};

myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// I do not understand the assignment

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);
