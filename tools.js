const cleanupAnswers = (object) => {
    let x = JSON.stringify(object);
    const regex = /\\r\\n/g;
    object = x.replace(regex, '<br>');
    return object;
  }

  
const getLicenseTag = (object) => {
    let x = JSON.stringify(object);
    console.log("stringified: " + x);
    switch (x) {
      case  "[\"Apache 2.0\"]":
        object = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case  "[\"MIT\"]":
        object = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "[\"GNU GPLv3\"]":
        object = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    return object;
  }

  module.exports={cleanupAnswers,getLicenseTag};