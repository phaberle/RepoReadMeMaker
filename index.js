const inquirer = require("inquirer");
const fs = require('fs');
const ListPrompt = require("inquirer/lib/prompts/list");
const { Console } = require("console");
const {cleanupAnswers,getLicenseTag} = require('./tools.js');


const UserInput = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'projectTitle',
        message: "REQUIRED ==> What is the name of your project?",
        validate: projectInput => {
            if (projectInput) {
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
        message: 'REQUIRED ==> Enter a minimum of three lines describing your (motivation or problems you solved).',
        validate: descriptionInput => {
            if (descriptionInput.split('\n').length >= 3) {
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
        message: 'REQUIRED ==> Enter a minimum of three steps to install your project.',
        validate: installInput => {
            if (installInput.split('\n').length >= 3) {
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
        validate: contribute => {
            if (contribute.split('\n').length >= 3) {
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
        message: "REQUIRED ==> List a minimum of three lines how testing can be done.",
        validate: testsInput => {
            if (testsInput.split('\n').length>=3) {
                return true;
            } else {
                console.log("How can you perform testing?");
                return false;
            }
        }
    }
    ])
        .then(UserInput => {

            return UserInput;
        })

};


UserInput()
    .then(UserInput => {
        console.log(UserInput);
    })