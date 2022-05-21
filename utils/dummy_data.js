/*
Two objects here, one dirty (before cleansing) and cleansed.
Use for form seeding.
*/ 

//Good for creating markdown (bottom of index.js).
var dirty =
  {
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
  
//Good for writing files. (bottom of tools.js)
  var cleansed = 
  {
    gitHubName: 'Dr. Emmett Brown',
    emailAddress: 'e.brown@google.com',
    getInContact: `"Do not contact me.<br>I will not answer email correspondence.<br>I'm never home."`,
    projectTitle: 'DeLorean Time Machine',
    description: '"I went back to the future.<br>I saw flying cars.<br>Hey Einstein! <br>I did it!!<br>Great Scott!"',
    install: '"Put on a radiation suit. <br>Grab the stolen plutonium.<br>Insert plutonium into the Flux Capacitor.<br>Sit down in the DeLorean and set the time coordinates.<br>Reach 88MPH.<br>Hang on!<br>"',
    usage: '"![time circuits](https://static.wikia.nocookie.net/bttf/images/d/d5/Time_Circuits_BTTF.png/revision/latest?cb=20110823082816)<br>![DeLorean](https://static.turbosquid.com/Preview/2020/03/17__01_57_35/DeLoreanDMC12TimeMachine3dmodel001.jpgF69C4732-35AD-4879-B3C8-7E72C7001DF3DefaultHQ.jpg)<br>Do not use the time machine for profiteering. <br>Try to be an observer only."',
    license: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    contribute: '"Not presently taking contributions.<br>You would get in the way, no offense.<br>Get off my lawn!"',
    tests: `"Find a dog.<br>Put dog in DeLorean with clock around its neck.<br>Set time circuits to one minute in the future.<br>Remote pilot DeLorean to 88MPH.<br>Dog will come back in exactly one minute.<br>Check dog's clock to current time. <br>Will notice it is precisely one minute behind."`
  }


//Pleace at bottom of index.js for testing. Replace object calls to match dummy_data object you choose.
testData.description = cleanupAnswers(testData.description);
testData.install = cleanupAnswers(testData.install);
testData.contribute = cleanupAnswers(testData.contribute);
testData.tests = cleanupAnswers(testData.tests);
testData.getInContact=cleanupAnswers(testData.getInContact);
testData.usage = cleanupAnswers(testData.usage);
let[license]=testData.license;
testData.license=getLicenseTag(license);
writeMDFile(testData); 
