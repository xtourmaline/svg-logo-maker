// include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./utils/generateSVG");

// questions that will prompt the user
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

function writeToFile(fileName, data) {
    content = generateSVG(data);
    fs.writeFile(fileName, content, (err) => err ? console.log(err) : console.log('Success!'));
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("logo.svg", data)
    });
}

// function call to initialize app
init();