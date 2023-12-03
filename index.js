// include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./utils/generateSVG");

// 
const questions = [
    {
        name: "text",
        type: "input",
        message: "Enter your text (max: 3 characters):"
    },
    {
        name: "textColor",
        type: "input",
        message: "Enter a color keyword (OR a hexadecimal number) for text:"
    },
    {
        name: "shape",
        type: "list",
        message: "Enter a color keyword (OR a hexadecimal number) for text:",
        choices: ["circle", "triangle", "square"]
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Enter a color keyword (OR a hexadecimal number) for shape:"
    }
]

