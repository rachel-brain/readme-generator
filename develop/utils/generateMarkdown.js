// Create a function that returns a license badge based on which license is passed in; if there is no license, return an empty string.
// This code does not work:
// function renderLicenseBadge(chosenLicense) {
// if (chosenLicense === ' MIT (recommended)') {
//     then(answers.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
// } else if (chosenLicense === ' Apache License 2.0') {
//     then(answers.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
// } else if (chosenLicense === ' ISC License') {
//     then(answers.badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)');
// } else if (chosenLicense === ' GNU GPLv3') {
//     then(answers.badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)');
// } else {
//     answers.badge = '';
// };
// };

// Create a function that returns the license link; if there is no license, return an empty string.
// This code does not work:
// function renderLicenseLink(chosenLicense) {
// if (chosenLicense === ' MIT (recommended)') {
//     then(answers.licenseLink = `Link href='https://opensource.org/licenses/MIT'`);
// } else if (chosenLicense === ' Apache License 2.0') {
//     then(answers.licenseLink = `Link href='https://opensource.org/licenses/Apache-2.0'`);
// } else if (chosenLicense === ' ISC License') {
//     then(answers.licenseLink = `Link href='https://opensource.org/licenses/ISC'`);
// } else if (chosenLicense === ' GNU GPLv3') {
//     then(answers.licenseLink = `Link href='http://www.gnu.org/licenses/agpl-3.0'`);
// } else {
//     answers.licenseLink = '';
// };
// };

// Create a function that returns the license section of README; if there is no license, return an empty string.
// This code does not work:
// function renderLicenseSection(chosenLicense) {
// if (chosenLicense === ' MIT (recommended)') {
//     then(answers.license.innerText = '[![License: MIT](https://opensource.org/licenses/MIT)](https://opensource.org/licenses/MIT)');
// } else if (chosenLicense === ' Apache License 2.0') {
//     then(answers.license.innerText = '[![License](https://https://opensource.org/licenses/Apache-2.0)](https://opensource.org/licenses/Apache-2.0)');
// } else if (chosenLicense === ' ISC License') {
//     then(answers.license.innerText = '[![License: ISC](https://opensource.org/licenses/ISC)](https://opensource.org/licenses/ISC)');
// } else if (chosenLicense === ' GNU GPLv3') {
//     then(answers.license.innerText = '[![License: AGPL v3](http://www.gnu.org/licenses/agpl-3.0)](http://www.gnu.org/licenses/agpl-3.0)');
// } else {
//     answers.license.innerText = '';
// };
// };

// Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `# ${answers.title.toUpperCase()}

## Badge
${answers.badge}
// Still to debug the code to render the badge

## Description
${answers.description}
    
## Motivation
${answers.motivation}
    
## Problem
${answers.problem}

## Table of Contents
[User Story](https://github.com/rachel-brain/readme-generator#user-story)

[Screenshot](https://github.com/rachel-brain/readme-generator#screenshot)

[Installation](https://github.com/rachel-brain/readme-generator#installation)

[Usage](https://github.com/rachel-brain/readme-generator#usage)

[Contact](https://github.com/rachel-brain/readme-generator#contact)

[GitHub URL](https://github.com/rachel-brain/readme-generator#github-url)


## User Story
${answers.story}
    
## Screenshot
// Add screenshot manually
    
## Video Instructions
// Add link manually
// Add video manually
    
## Installation
${answers.installation}
    
## Usage
${answers.usage}
    
## Tests
${answers.tests}
    
## Future Upgrades
${answers.upgrades}
    
## Support
${answers.support}
    
## Contribution
${answers.contribution}
    
## Acknowledgment
${answers.acknowledgment}
    
## Contact
${answers.questions1}
${answers.questions2}

## GitHub Url
${answers.githubrepo}

## License
${answers.license}
// Still to debug the code to render the link to the chosen license
// Still to debug the code to render the text of the license

## Status
${answers.status}
    `
};

// renderLicenseBadge();
// renderLicenseLink();
// renderLicenseSection();

module.exports = generateMarkdown;