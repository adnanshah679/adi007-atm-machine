#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //Doller $
let myPin = 2022;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin?",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select operations",
            type: "list",
            choices: ["withdraw", "check your balance", "fast cash"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount >= myBalance) {
            console.log(`Insufficient balance! You cannot withdraw more than your balance.`);
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "check your balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAnswer.operation === "fast cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Select your fast cash amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 15000, 20000]
            }
        ]);
        if (fastCashAnswer.amount > myBalance) {
            console.log(`Insufficient balance! You cannot withdraw more than your balance.`);
        }
        else {
            myBalance -= fastCashAnswer.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code!!!");
}
