// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];


inquirer
    .prompt([{
            type: 'input',
            message: 'What is the name of your project?',
            name: 'project',
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
            type: 'visual?',
            message: 'Add a screenshot, if applicable.',
            name: 'screenshot',
        },
        {
            type: 'visual?',
            message: 'Add a video.gif, if applicable.',
            name: 'video',
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
        },
    ])
    .then((answers) => {
        console.log(answers);

        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.error(err) : console.log('Successfully created README')
        );

        // answers.confirm === answers.password ?
        // console.log('Success!') :
        // console.log('You forgot your password already?!')

    })
    .catch((error) => {
        if (error.isTtyError) {
            // prompt couldn't be rendered?
        }
    });





// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// function writeToFile('README.md', data) {}


// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );


// Loop through the .name of the prompt questions & write to file with "# " or "## " prepend.


// # Foobar

// Foobar is a Python library for dealing with word pluralization.

// ## Installation

// Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

// ```bash
// pip install foobar
// ```

// ## Usage

// ```python
// import foobar

// # returns 'words'
// foobar.pluralize('word')

// # returns 'geese'
// foobar.pluralize('goose')

// # returns 'phenomenon'
// foobar.singularize('phenomena')
// ```

// ## Contributing
// Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

// Please make sure to update tests as appropriate.

// ## License
// [MIT](https://choosealicense.com/licenses/mit/)




// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();