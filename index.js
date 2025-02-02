// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(filename = 'README.md', data) {
    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: ('What is the title?'),
        name: 'Title',
      },
      {
        type: 'input',
        message: ('What is your description?'),
        name: 'Description',
      },
      {
        type: 'input',
        message: ('What are the installation instructions?'),
        name: 'Installation',
      },
      {
        type: 'input',
        message: ('What is the Usage?'),
        name: 'Usage',
      },
      {
        type: 'list',
        message: ('What is your License?'),
        name: 'License',
        choices: ['MIT', 'GNU'],
      },
      {
        type: 'input',
        message: ('What are your Contribution Guidelines?'),
        name: 'Contributing',
      },
      {
        type: 'input',
        message: ('What tests can you run?'),
        name: 'Tests',
      },
      {
        type: 'input',
        message: ('Questions?'),
        name: 'Questions',
      },
    ])
    .then((response) => { 
      const markdown = generateMarkdown(response) 
      // Log success message
      writeToFile('README.md', markdown)
      console.log('Responses received successfully!');
    })
}

// Function call to initialize app
init();
