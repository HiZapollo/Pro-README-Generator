// imports
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// questions
const questions = [
    'Please enter the title for your project: ',
    'Provide a short description of your project: ',
    'Please enter the steps required to install your project: ',
    'Please provide instructions on how to use your project: ',
    'Please select the license for your project: ',
    'Please provide instructions on how someone could contribute to your project: ',
    'Please provide instructions on how to run tests of your project: ',
    'Provide your Github username: ',
    'Provide your email address: '
];

// writes the file with the data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README created!');
    })
}

// Begins the prompts and generates the file with the input data
function init() {
    inquirer.prompt([
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
            type: 'input',
            message: questions[2],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'list',
            message: questions[4],
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
            message: questions[5],
            name: 'contribution',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        },
    ])
    .then((response) =>{
        const fileContent = generateMarkdown(response);
        writeToFile('README.md', fileContent);
    })
}

// Function call to initialize app
init();
