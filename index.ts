#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull message:
console.log(chalk.bold.yellow("\n \t\t Mr.Th ~ Words Counter"));
console.log(chalk.cyanBright("=".repeat(55)));

// Input from user:
let answer = await inquirer.prompt([
    {
        name: "words",
        type: "input",
        message: "Please Enter a Sentence",
    }
]);

// Sentence trim & split into words:
let alphab = answer.words.trim().split(" ");

// Counting of words:
console.log("~".repeat(55));
console.log(chalk.bold("-> Words in Sentence:"));
console.log(alphab);
console.log(chalk.bold(`\n -> Total Words Count: ${chalk.redBright(alphab.length)}`));
console.log("~".repeat(55));