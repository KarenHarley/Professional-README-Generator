// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  //console.log(license.license);

  if (license == " ") {
    return " ";
    //  console.log("empty string")
  } else if (license === "MIT") {
    return `[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]${renderLicenseLink(license)}`;
    //console.log("worked!")
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `(https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)`;
    //console.log("worked!")
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == " ") {
    return " ";
  }
  return `## License
  ${license}`;
}

const dataDEMO = {
  title: "Karen",
  description: "My house",
  installation: "I like dogs",
  usage: "bla bla",
  license: "MIT",
  contributing: "contirbuting",
  test: "test",
  questions: "questions",
  github: "github",
  email: "email",
};
//console.log(dataDEMO)

renderLicenseBadge(dataDEMO);
//generateMarkdown(dataDEMO)

// TODO: Create a function to generate markdown for README
function generateMarkdown(dataDEMO) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    test,
    questions,
    github,
    email,
  } = dataDEMO;

  //${renderLicenseBadge(license)}
  return `
  ${renderLicenseBadge(license)}
  # ${title}
  ## Description
  ${description}
  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ${renderLicenseSection(license)}
  ## Contribute
  ${contributing}
  ## Tests
  ${test}
  ## Questions
  ${questions}

  - GitHub: ${github}
  - Email: ${email}
    
    `;
}
//module.exports = generateMarkdown; not yet

console.log(generateMarkdown(dataDEMO));
//console.log(renderLicenseBadge())

//[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)
