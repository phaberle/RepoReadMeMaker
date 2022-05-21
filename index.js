const inquirer = require("inquirer");
const fs = require('fs');
const ListPrompt = require("inquirer/lib/prompts/list");
const { Console } = require("console");
const { cleanupAnswers, getLicenseTag, writeMDFile } = require('./utils/tools');


const UserInput = async () => {
    const UserInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'gitHubName',
            message: "REQUIRED ==>What is your GitHub username?",
            validate: gitHubName_1 => {
                if (gitHubName_1) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "REQUIRED ==>What is your email address?",
            validate: emailInput_1 => {
                if (emailInput_1) {
                    return true;
                } else {
                    console.log("Please enter your email address.");
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'getInContact',
            message: 'REQUIRED ==> Enter a minimum of three lines on how contributors can contact you.',
            validate: getInContact_1 => {
                if (getInContact_1.split('\n').length >= 3) {
                    return true;
                } else {
                    console.log("Please information on how you may be contacted.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: "REQUIRED ==> What is the name of your project?",
            validate: projectName_1 => {
                if (projectName_1) {
                    return true;
                } else {
                    console.log("Please enter a name of your project");
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'description',
            message: 'REQUIRED ==> Enter a minimum of three lines describing your motivation or problems you solved.',
            validate: descriptionInput_1 => {
                if (descriptionInput_1.split('\n').length >= 3) {
                    return true;
                } else {
                    console.log("Please enter a description of your project.");
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'install',
            message: 'REQUIRED ==> Enter a minimum of three steps on how to install your project.',
            validate: installInput_1 => {
                if (installInput_1.split('\n').length >= 3) {
                    return true;
                } else {
                    console.log("Please enter steps to install your project.");
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'usage',
            message: "REQUIRED ==> Enter a minimum of three lines on how to use your project.\nCan enter relative path or image URLs using this matrix -> '![ALT Message]([relative/URL path])'",
            validate: installInput_3 => {
                if (installInput_3.split('\n').length >= 3) {
                    return true;
                } else {
                    console.log("Please enter steps to install your project.");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: "REQUIRED => Choose your license (Pick One)...",
            choices: ['Apache 2.0', 'MIT', 'GNU GPLv3'],
            validate(license) {
                if (license.length === 1) {
                    return true;
                } else {
                    console.log("Pick only ONE license.");
                    return false;
                }
            }
        },
        {
            type: "editor",
            name: "contribute",
            message: "REQUIRED ==> How can others contribute to your project? List a minimum of three steps.",
            validate: contribute_1 => {
                if (contribute_1.split('\n').length >= 3) {
                    return true;
                } else {
                    console.log("How can others contribute to your project?");
                    return false;
                }
            }
        },
        {
            type: "editor",
            name: "tests",
            message: "REQUIRED ==> List a minimum of three lines on how testing can be done.",
            validate: testsInput_1 => {
                if (testsInput_1.split('\n').length >= 3) {
                    return true;
                } else {
                    console.log("How can you perform testing?");
                    return false;
                }
            }
        }
    ])

    return UserInput;
};


UserInput()
    .then(UserInput => {
        UserInput.description= cleanupAnswers(UserInput.description);
        UserInput.install= cleanupAnswers(UserInput.install);
        UserInput.contribute=cleanupAnswers(UserInput.contribute);
        UserInput.tests=cleanupAnswers(UserInput.tests);
        UserInput.usage=cleanupAnswers(UserInput.usage);
        UserInput.getInContact=cleanupAnswers(UserInput.getInContact);
        let [license]=UserInput.license;
        UserInput.license=getLicenseTag(license);    
        writeMDFile(UserInput); 
    });

