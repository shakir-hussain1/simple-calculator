#! /usr/bin/env node 
// This calculator is created by me
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        message: "Enter 1st number",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter 2nd number",
        type: "number",
        name: "num2"
    },
    {
        message: "Select which operation you want to perform: ",
        type: "list",
        name: "operator",
        choices: ["Addition + ", "Subtraction - ", "Multiplication * ", "Division / ", "Modulus % ", "Exponent ** "]
    }]);
if (answer.operator === "Addition + ") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === "Subtraction - ") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === "Multiplication * ") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === "Division / ") {
    console.log(answer.num1 / answer.num2);
}
else if (answer.operator === "Modulus % ") {
    console.log(answer.num1 % answer.num2);
}
else if (answer.operator === "Exponent ** ") {
    console.log(answer.num1 ** answer.num2);
}
else {
    console.log("enter valid operator");
}
