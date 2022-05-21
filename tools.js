const fs = require('fs');

const cleanupAnswers = (object) => {
  let x = JSON.stringify(object);
  const regex = /\\r\\n/g;
  object = x.replace(regex, '<br>');
  return object;
}

const getLicenseTag = (string) => {
  let x = string
  switch (x) {
    case "Apache 2.0":
      string = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT":
      string = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPLv3":
      string = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  object = [x, string];
  return object;
}

const writeMDFile = (object) => {
  const { gitHubName, emailAddress, getInContact, projectTitle, description, install, usage, contribute, tests } = object;
  const license = object.license[0];
  const licURL = object.license[1];

  let template =
    `
# ${projectTitle}

## Description
${description}

## License
${license}<br>
${licURL}

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation
${install}

## Usage
${usage}

## Contribute
${contribute}

## Testing
${tests}

## Questions
GitHub User Name: ${gitHubName}<br>
Email Address: ${emailAddress}

### How to reach me with additional questions:
${getInContact}
`;

const regex = /"/g;
const dir = "./dist";
template = template.replace(regex, '');
if(!fs.existsSync(dir)){fs.mkdirSync(dir)};
 if(saveFile(template)){console.log("File successfully created.\nCheck the dist folder.");}
}

const saveFile=(template) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', template, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true
      });
    });
  });
}


module.exports = { cleanupAnswers, getLicenseTag, writeMDFile };

