{
    /* <iframe src="https://drive.google.com/file/d/1YsBMiwOW5LaTHsJT0jmLYIq7OE8b49V-/preview" width="640" height="480"></iframe> */
}


// Create a function that returns a license badge based on which license is passed in; if there is no license, return an empty string.

// const getAnswers = require('../index.js');

// let myLicense = chosenLicense;

// let myLicense = ' MIT (recommended)';
// let myLicense = ' Apache License 2.0';
// let myLicense = ' ISC License';
// let myLicense = ' GNU GPLv3';

// let myLicense = localStorage.getItem('licenseLocalStorage');

// let licenseAnswers = generateAnswers(answers.license);
// generateAnswers();

function renderLicenseBadge(myLicense) {
    // function renderLicenseBadge(license) {
    // if (answers.license === ' MIT (recommended)') {
    //     then(answers.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
    // } else if (answers.license === ' Apache License 2.0') {
    //     then(answers.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
    // } else if (answers.license === ' ISC License') {
    //     then(answers.badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)');
    // } else if (answers.license === ' GNU GPLv3') {
    //     then(answers.badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)');
    // } else {
    //     answers.badge = '';
    // };

    // if (myLicense === ' MIT (recommended)') {
    //     then(answers.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
    // } else if (myLicense === ' Apache License 2.0') {
    //     then(answers.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
    // } else if (myLicense === ' ISC License') {
    //     then(answers.badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)');
    // } else if (myLicense === ' GNU GPLv3') {
    //     then(answers.badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)');
    // } else {
    //     answers.badge = '';
    // };
    // console.log(answers.badge);

    // if (answers.license === ' MIT (recommended)') {
    //     then(answers.badge = '[![License: MIT](https://img.shields.io/npm/l/readme-generator.svg)](https://opensource.org/licenses/MIT)');
    // } else if (answers.license === ' Apache License 2.0') {
    //     then(answers.badge = '[![License](https://img.shields.io/npm/l/readme-generator.svg)](https://opensource.org/licenses/Apache-2.0)');
    // } else if (answers.license === ' ISC License') {
    //     then(answers.badge = '[![License: ISC](https://img.shields.io/npm/l/readme-generator.svg)](https://opensource.org/licenses/ISC)');
    // } else if (answers.license === ' GNU GPLv3') {
    //     then(answers.badge = '[![License: AGPL v3](https://img.shields.io/npm/l/readme-generator.svg)](http://www.gnu.org/licenses/agpl-3.0)');
    // } else {
    //     answers.badge = '';
    // };
};

// Create a function that returns the license link; if there is no license, return an empty string.
function renderLicenseLink(license) {
    // if (license === ' MIT (recommended)') {
    //     then(console.log(`Link href='https://opensource.org/licenses/MIT'`));
    // } else if (license === ' Apache License 2.0') {
    //     then(console.log(`Link href='https://opensource.org/licenses/Apache-2.0'`));
    // } else if (license === ' ISC License') {
    //     then(console.log(`Link href='https://opensource.org/licenses/ISC'`));
    // } else if (license === ' GNU GPLv3') {
    //     then(console.log(`Link href='http://www.gnu.org/licenses/agpl-3.0'`));
    // } else {
    //     console.log(``);
    // };
};

// Create a function that returns the license section of README; if there is no license, return an empty string.
function renderLicenseSection(license) {
    // if (license === ' MIT (recommended)') {
    //     then(answers.license.innerText = '[![License: MIT](https://opensource.org/licenses/MIT)](https://opensource.org/licenses/MIT)');
    // } else if (license === ' Apache License 2.0') {
    //     then(answers.license.innerText = '[![License](https://https://opensource.org/licenses/Apache-2.0)](https://opensource.org/licenses/Apache-2.0)');
    // } else if (license === ' ISC License') {
    //     then(answers.license.innerText = '[![License: ISC](https://opensource.org/licenses/ISC)](https://opensource.org/licenses/ISC)');
    // } else if (license === ' GNU GPLv3') {
    //     then(answers.license.innerText = '[![License: AGPL v3](http://www.gnu.org/licenses/agpl-3.0)](http://www.gnu.org/licenses/agpl-3.0)');
    // } else {
    //     answers.license.innerText = '';
    // };
};

// Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `# ${answers.title.toUpperCase()}

## Badge
${answers.badge}
// Different method of adding to page

## Description
${answers.description}
    
## Motivation
${answers.motivation}
    
## Problem
${answers.problem}
    
## Table of Contents
${answers.contents}
    
## Screenshot
// Add manually
    
## Video Instructions
// Add manually
    
## Installation
${answers.installation}
    
## Usage
${answers.usage}
    
## Tests
${answers.tests}
    
## Roadmap
${answers.roadmap}
    
## Support
${answers.support}
    
## Contribution
${answers.contribution}
    
## Acknowledgment
${answers.acknowledgment}
    
## Contact
${answers.questions1}
${answers.questions2}

## License
${answers.license}
// Need to add link to page, too

## Status
${answers.status}
    `
};

// getAnswers();
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();

module.exports = generateMarkdown;