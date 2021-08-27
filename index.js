// TODO: Include packages needed for this application
var fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter text for your Project Title",
    name: "title", //user input stored here
  },
  {
    type: "input",
    message: "Enter your GitHub username", //add to questions
    name: "github", //user input stored here
  },
  {
    type: "input",
    message: "Enter your COMPLETE Email Address",
    name: "email", //user input stored here
  },
  {
    type: "input", //here could use checkbox
    message: "Enter text for the Section: Description",
    name: "description", //user input stored
  },
  {
    type: "input", //here could use list
    message: "Enter instructions for your Installation section",
    name: "installation", //user input stored here
  },
  {
    type: "input", //here could use list
    message: "Enter text for your Usage section",
    name: "usage", //user input stored here
  },
  {
    type: "list",
    message: "Select License",
    choices: ["MIT", "GNU GPL v3", "Apache","Mozilla"],////MIT Apache Mozilla GNU GPL v3
    name: "license", //user input stored here
  },
  {
    type: "input",
    message: "Enter text for your Contributing section",
    name: "contributing", //user input stored here
  },
  {
    type: "input",
    message: "Enter text for your Test section",
    name: "test", //user input stored here
  },
  {
    type: "input",
    message:
      "Enter instructions on how to reach you for the Section: Questions. Note: your email and GitHub (PRIVIOUSLY INPUTED) will be added here",
    name: "questions", //user input stored here
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    fileName = "GEN-README.md";
    writeToFile(fileName, response);
  });
}

// Function call to initialize app
init();

