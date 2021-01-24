// function to generate markdown for README
function generateMarkdown(response) {
  return `
<h1> ${response.title} </h1>
  
## Description
${response.description}

## Table of Contents (Optional)
[Installation](#Installation)
[Usage](#Usage)
[Tests](#Tests)
[Credits](#Credits)
[License](#License)
[License](#Questions)

## Installation
${response.installation}
    
## Usage 
${response.usage}

## Tests
${response.tests}

## Credits
${response.contribution}

## License
${response.license}

## Questions
My github is:(https://github.com/${response.github})
You can directly contact me at: (${response.email})
`;
}

module.exports = generateMarkdown;
