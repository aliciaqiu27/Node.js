const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for User
function promptUser() {
    return inquirer.prompt([
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
        choices:[
        'MIT',
        'MIT',
        'MIT',

        ]
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
]
)};

// function to write README file
async function init() {
    try {
        // Ask user questions and generate responses
        const response = await promptUser();
        const generateContent = generateMarkdown(response);
        // Write new README.md to dist directory
        await writeFileAsync('README.md', generateContent);
        console.log('Success! README created.');
    } catch (err) {
        console.log('err');
    }
}

init();
