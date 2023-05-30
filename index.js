const { generateSVG } = require('./lib/shapes');
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const questions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter text for the logo. Must not be longer than 3 characters.',
          filter: (answers) => {
            return answers.toUpperCase()
        } ,
          validate: (answers) => {
            if (answers.length > 3){
              return 'Text must not be longer than 3 characters.'
            } else {
              return true;
            }
          }
        },
        {
          type: 'input',
          name: 'textColor',
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
          name: 'shapeColor',
          message: 'Enter a shape color:',
        }
      ]);
};

function init() {
    questions()
    .then((answers) => writeFile('./examples/logo.svg', generateSVG(answers)))
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.error(err))
};

init();