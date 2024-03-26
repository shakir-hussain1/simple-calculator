#! /usr/bin/env node
import inquirer from 'inquirer';
let answer = await inquirer.prompt([{ message: "Enter 1st number", type: "number", name: "num1" },
    { message: "Enter 2nd number", type: "number", name: "num2" },
    {
        message: "Select one of the operators to perform poeration", type: "list", name: "operator", choices: ["Addition + ", "Subtraction - ", "Multiplication * ", "Division / ", "Modulus % ", "Exponent ** "]
    },
]);
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
    console.log("The End 👋");
}
