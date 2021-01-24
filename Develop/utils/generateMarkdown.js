// function to generate markdown for README
function generateMarkdown(response) {
  return `
<h1> ${response.title} </h1>
  
## Description
${response.description}

## Table of Contents (Optional)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Credits](#Credits)
* [License](#License)
* [License](#Questions)

## Installation
${response.installation}
    
## Usage 
${response.usage}

## Tests
${response.tests}

## Credits
${response.contribution}

## License
![license](https://img.shields.io/badge/License-${response.license}-brightgreen)

## Questions
<br>My github is: :octocat: https://github.com/${response.github}</br>
<br>You can directly contact me at: :e-mail: ${response.email}</br>
`;
}

module.exports = generateMarkdown;
