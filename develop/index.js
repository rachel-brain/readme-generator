// Access packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What was the motivation for your project?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'What problem does this solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'Provide a Table of Contents.',
        name: 'contents',
    },
    {
        type: 'badge?',
        message: 'Add a badge, if applicable.',
        name: 'badge',
    },
    {
        type: 'input',
        message: 'Describe how to install your application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe how to use your application.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Explain any tests you used to fine-tune your project.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'List any ideas for future releases or upgrades to the application.',
        name: 'roadmap',
    },
    {
        type: 'input',
        message: 'List any support you provide for your application.',
        name: 'support',
    },
    {
        type: 'input',
        message: 'Detail any requirements if you are open to contibutions.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Acknowledge here other authors who have collaborated on this project.',
        name: 'acknowledgment',
    },
    {
        type: 'input',
        message: 'Provide your GitHub username.',
        name: 'questions1',
    },
    {
        type: 'input',
        message: 'Provide your email address.',
        name: 'questions2',
    },
    {
        type: 'checkbox',
        message: 'Which license have you applied to this project?',
        name: 'license',
        choices: [' MIT (recommended)', ' Apache License 2.0', ' ISC License', ' GNU GPLv3'],
    },
    {
        type: 'input',
        message: 'Comment on the project status, if applicable.',
        name: 'status',
    }
];

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const fileName = 'README.md';
            const readmePageContent = generateMarkdown(answers);
            // const chosenLicense = answers.license;
            // console.log(chosenLicense);

            // Create a function to write README file
            fs.writeFile(fileName, readmePageContent, (err) => {
                err ? console.log(err) : console.log('Successfully created README')
            });
        });
}

// Call the function to initialize app
init();