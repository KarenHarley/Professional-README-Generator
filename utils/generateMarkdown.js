// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
 

  if (license == "") {
    return "";
    
  } else if (license === "MIT") {
    return `[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]${renderLicenseLink(
      license
    )}`;
    
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]${renderLicenseLink(
      license
    )}`;
    
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]${renderLicenseLink(
      license
    )}`;
    
  } else if (license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]${renderLicenseLink(
      license
    )}`;
    
  }
}

//function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {

  if (license === "MIT") {
    return `(https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)`;
  } else if (license === "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "GNU GPL v3") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

//function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license == "") {
    return "";
  } 
  return `
  ## License
  The license used for this project: ${license}`;
}

function generateMarkdown({
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
}) {


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

  - GitHub: https://github.com/${github}
  - Email: ${email}
    
    `;
}
module.exports = generateMarkdown; 


