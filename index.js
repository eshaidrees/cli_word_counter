#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        types: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const word = answer.Sentence.trim().split(" ");
console.log(word);
console.log(`Your count word is: ${word.length}`);
