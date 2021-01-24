const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List your collaborators, if any, with links to their GitHub profiles:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide your tests here:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Provide the license to the project here:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },


]).then(response => {

    const README =
    `#${response.title}
    
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
    My github is:https://github.com/${response.github}
    You can directly contact me at: https://github.com/${response.email}

    `

// function to write README file

    fs.writeFile('README.md', README, (err) => {
        err ? console.log("oops") : console.log("Yay!")
    })

});


// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();


