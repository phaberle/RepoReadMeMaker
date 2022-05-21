const cleanupAnswers = (object) => {
    let x = JSON.stringify(object);
    const regex = /\\r\\n/g;
    object = x.replace(regex, '<br>');
    return object;
  }
  
  const getLicenseTag = (string) => {
    let x = string
    switch (x) {
      case  "Apache 2.0":
        string = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case  "MIT":
        string = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "GNU GPLv3":
        string = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    object= [x,string];
    return object;
  }

const writeMDFile =(object)=>{
console.log(object);
}

  module.exports={cleanupAnswers,getLicenseTag,writeMDFile};