const generateMarkdown = require("./lib/shapes");
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const questions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter text for the logo. Must not be more than 3 characters.',
        },
        {
          type: 'input',
          name: 'textcolor',
          message: 'Enter a text color:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo:',
            choices: [
                'Circle',
                'Square',
                'Triangle'
            ]
        },
        {
          type: 'input',
          name: 'shapecolor',
          message: 'Enter a shape color:',
        }
      ]);
};

function init() {
    questions()
    .then((answers) => writeFile('./examples/logo.svg', shapes(answers)))
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.error(err))
};

init();