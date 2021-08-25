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
    message: "Enter your GItHub username", //add to questions
    name: "github", //user input stored here
  },
  {
    type: "input",
    message: "Enter COMPLETE Email Address",
    name: "email", //user input stored here
  },
  {
    type: "input", //here could use checkbox
    message: "Enter text for your Description",
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
    choices: ["MIT", "bla", "bla2"],
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
      "Enter text for your Questions section (instructions on how to reach you if other have questions) note: you email (PRIVIOUSLY INPUTED) will be added here",
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

/*{
    title: 'fs',
    github: 'fg',
    email: '4',
    description: 'd',
    installation: 's',
    usage: 'g',
    license: 'Mit',
    contributing: 'w',
    test: '4',
    questions: 'w'
  }
*/

/*
[
    "Enter text for your Project Title",
    "Enter text for your Description",
    "Enter text for your Table of Contents",
    "Enter text for your Installation section",
    "Enter text for your Usage section",
    "Select License",
    "Enter text for your Contributing section",
    "Enter text for your Test section",
    "Enter text for your Questions section",
  ];
  */

/*tip for description {
      What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
  }
  */

/* not sure if i should ask that question
  {
    type: "input", //here could use list
    message: "Enter text for your Table of Contents",
    name: "tableOfContents", //user input stored here
  },
  */