#! /usr/bin/env node

import inquirer from "inquirer";
// ATM Machine Project
let balance = 100000;
const userpin = 1234;

console.log("Welcome to the ATM Machine");
// while(true) {
let userInput = await inquirer.prompt([
  {
    name: "userpin",
    type: "number",
    message: "Enter your pin",
  },
]);
if (userInput.userpin === userpin) {
  console.log("pin verified successfully");
  let userChoice = await inquirer.prompt([
    {
      name: "Choice",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Check Balance", "Exit"],

      message: "What do you want to do?",
    },
  ]);
  if (userChoice.Choice === "Withdraw") {
    let withdrawAmount = await inquirer.prompt([
      {
        name: "Amount",
        type: "number",
        message: "Enter the amount to withdraw",
      },
    ]);
    if (withdrawAmount.Amount <= balance) {
      balance -= withdrawAmount.Amount;
      console.log("Withdraw successful");
      console.log(`Your new balance is $${balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }
  if (userChoice.Choice === "Fast Cash") {
    let fastCashAmount = await inquirer.prompt([
      {
        name: "Amount",
        type: "list",
        message: "Enter the amount to withdraw",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    if (fastCashAmount.Amount <= balance) {
      balance -= fastCashAmount.Amount;
      console.log(" Fast cash withdraw successful");
      console.log(`Your new balance is $${balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }
  if (userChoice.Choice === "Check Balance") {
    console.log(`Your current balance is $${balance}`);
  }
  if (userChoice.Choice === "Exit") {
    console.log("Exit");
    console.log("Thank you for using the our ATM Machine");
  }
} else {
  console.log("Invalid pin! Please insert valid pin...");
}
// }
