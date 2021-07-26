# README FILE GENERATOR
A professional README.md file generator created by using a command line application.


## Badge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
An app that quickly and easily creates a high quality README file by using a command line application to present a number of prompts for the user to answer which then generates one. This allows the project creator to devote more time to working on the project.
    
## Motivation
To save time in drafting a README file as one is required for every project repo.
    
## Problem
It saves time and avoids missing an important aspect of the README file.

## User Story
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Screenshot
screenshot.JPG
    
## Video Instructions
https://drive.google.com/file/d/1CQyXKJYK_oyPBgV5Ru2x6FqpnBWts3AE/view

walkthrough-of-readme-generator.gif
    
## Installation
The application will be invoked by typing the following command in the terminal to install inquirer:

```bash
npm i inquirer
```

Then, typing the following command in the terminal will initiate the prompts to collate the information required in the README file:

```bash
node index.js
```
    
## Usage
The user will be presented with a series of prompts which s/he will answer with as much, or as little, information as they decide.  S/he can skip the section by entering without typing a response.

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Future Upgrades
Saving some of the more repetitive responses (such as chosen License and Contact details) would save more time for the developer.

## Contact
https://github.com/rachel-brain

rachel.brain@internode.on.net

## GitHib URL
https://github.com/rachel-brain/readme-generator

## License
MIT

https://opensource.org/licenses/MIT

## Status
Live


---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
