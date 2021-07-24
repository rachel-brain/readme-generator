// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}


// Links to the badges for the Licenses:
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
// [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `# ${answers.title.toUpperCase()}

## Description
${answers.description}
    
## Motivation
${answers.motivation}
    
## Problem
${answers.problem}
    
## Table of Contents
${answers.contents}
    
## Badge
${answers.badge}
// Different method of adding to page
    
## Screenshot
${answers.screenshot}
    
## Video
${answers.video}
    
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
    
## Status
${answers.status}
    `
};

module.exports = generateMarkdown;