const inquirer = require("inquirer");
const fs = require('fs');
const ListPrompt = require("inquirer/lib/prompts/list");
const { Console } = require("console");
const { cleanupAnswers, getLicenseTag, writeMDFile } = require('./tools.js');


const UserInput = () => {
    return inquirer.prompt([        
        {
            type: 'input',
            name: 'gitHubName',
            message: "REQUIRED ==>What is your GitHub username?",
            validate: gitHubName => {
                if (gitHubName) {
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
            validate: emailInput => {
                if (emailInput) {
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
            validate: getInContact => {
                if (getInContact.split('\n').length >= 3) {
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
        validate: projectName => {
            if (projectName) {
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
        message: 'REQUIRED ==> Enter a minimum of three steps on how to install your project.',
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
        type: 'editor',
        name: 'usage',
        message: "REQUIRED ==> Enter a minimum of three lines on how to use your project.\nCan enter relative path or image URLs using this matrix -> '![ALT Message]([relative/URL path])'",
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
        message: "REQUIRED ==> List a minimum of three lines on how testing can be done.",
        validate: testsInput => {
            if (testsInput.split('\n').length >= 3) {
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


// UserInput()
//     .then(UserInput => {
//         UserInput.description= cleanupAnswers(UserInput.description);
//         UserInput.install= cleanupAnswers(UserInput.install);
//         UserInput.contribute=cleanupAnswers(UserInput.contribute);
//         UserInput.tests=cleanupAnswers(UserInput.tests);
//         UserInput.usage=cleanupAnswers(UserInput.usage);
//         UserInput.getInContact=cleanupAnswers(UserInput.getInContact);
//         let [license]=UserInput.license;
//         UserInput.license=getLicenseTag(license);
    
//         writeMDFile(UserInput); 
//     });

var testData = {    
        gitHubName: 'Dr. Emmett Brown',
        emailAddress: 'e.brown@gmail.com',
        getInContact: 'Do not contact me.\r\n' +
          'I will not answer email correspondence.\r\n' +
          'I want cookies.',
        projectTitle: 'DeLorean Time Machine',
        description: 'I went back to the future.\r\n' +
          'I saw flying cars.\r\n' +
          'Hey Einstein! \r\n' +
          'I did it!!\r\n' +
          'Great Scott!',
        install: 'Put on a radiation suit. \r\n' +
          'Grab the stolen plutonium.\r\n' +
          'Insert plutonium into the Flux Capacitor.\r\n' +
          'Sit down in the DeLorean and set the time coordinates.\r\n' +
          'Reach 88MPH.\r\n' +
          'Hang on!',
        usage: '![time circuits](https://static.wikia.nocookie.net/bttf/images/d/d5/Time_Circuits_BTTF.png/revision/latest?cb=20110823082816)\r\n' +
          '![DeLorean](https://static.turbosquid.com/Preview/2020/03/17__01_57_35/DeLoreanDMC12TimeMachine3dmodel001.jpgF69C4732-35AD-4879-B3C8-7E72C7001DF3DefaultHQ.jpg)\r\n' +
          'Do not use the time machine for profiteering. \r\n' +
          'Try to be an observer only.',
        license: [ 'MIT' ],
        contribute: 'Not presently taking contributions.\r\n' +
          'You would get in the way, no offense.\r\n' +
          'The kind of work I do is not for amateur scientists.',
        tests: 'Find a dog.\r\n' +
          'Put dog in DeLorean with clock around its neck.\r\n' +
          'Set time circuits to one minute in the future.\r\n' +
          'Remote pilot DeLorean to 88MPH.\r\n' +
          'Dog will come back in exactly one minute.\r\n' +
          "Check dog's clock to current time. \r\n" +
          'Will notice it is precisely one minute behind.'
      }
testData.description = cleanupAnswers(testData.description);
testData.install = cleanupAnswers(testData.install);
testData.contribute = cleanupAnswers(testData.contribute);
testData.tests = cleanupAnswers(testData.tests);
let[license]=testData.license;
testData.license=getLicenseTag(license);
testData.license = getLicenseTag(testData.license);
writeMDFile(testData); 