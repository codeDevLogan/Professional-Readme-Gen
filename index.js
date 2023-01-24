// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gM = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'How would you describe your project? What was your motivation, your why, what problem were you trying to solve, and what did you learn while building the app?',
    },
    {
        type: 'input',
        name: 'installSteps',
        message: 'What steps can a future dev take to install your application? (Enter "N/A" if there is not Install process.)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how a user can use your application.'
    },
    {
        type: 'input',
        name: 'contributeGuide',
        message: 'Give a short guide for a dev who wants to contribute.'
    },
    {
        type: 'input',
        name: 'deployUrl',
        message: 'Provide a link to the Deployed Application'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide an email for Users and Devs to reach you at for questions:'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Provide your Git Hub username for users and devs to look you up.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which liscence are you using?',
        choices: ['MIT License', 'Apache_2.0', 'BSD_3', 'BSD_2', 'N/A']
    },
    {
        type: 'input',
        name: 'testsGuide',
        message: 'Do you have any tests the user or a future dev can use to test your application? (Enter "N/A" if there are no tests.)'
    }
    // {
    //     type: 'list',
    //     message: 'What is your preferred method of communication?',
    //     name: '',
    //     choices: ['email', 'phone', 'telekinesis'],
    // },
    // {
    //     type: 'checkbox',
    //     message: 'What languages do you know?',
    //     name: 'stack',
    //     choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    // },
    // {
    //     type: 'list',
    //     message: 'What is your preferred method of communication?',
    //     name: 'contact',
    //     choices: ['email', 'phone', 'telekinesis'],
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => err ? console.error(err) : console.log('README Generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        
        writeToFile('README.md', gM.generateMarkdown(response));
    }) 
}

// Function call to initialize app
init();
