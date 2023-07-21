// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    'Please enter the title for your project: ',
    'Provide a short description of your project: ',
    'Do you want a table of contents for your README? ',
    'Please enter the steps required to install your project: ',
    'Please provide instructions on how to use your project: ',
    'Please select the license for your project: ',
    'Please provide instructions on how someone could contribute to your project: ',
    'Please provide instructions on how to run tests of your project: ',
    'Provide ways to get into contact with you for additional questions: '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'confirm',
            message: questions[2],
            name: 'table',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'usage',
        },
        {
            type: 'list',
            message: questions[5],
            name: 'license',
            choices: [
                'MIT License',
                'GNU AGPLv3',
                'GNU GPLv3',
                'GNU LPGLv3',
                'Mozilla Public License 2.0',
                'Apache License 2.0',
                'Boost Software License 1.0',
                'The Unlicense'
            ],
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contribution',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'questions',
        },
    ])
    .then((response) =>{
        //const {title, description, table, installation, usage, license, contribution, tests, questions} = response;
        const fileContent = generateMarkdown(response);
        writeToFile('README.md', fileContent);
    })
}

// Function call to initialize app
init();
