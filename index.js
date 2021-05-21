const fs = require('fs');
const inquirer = require('inquirer');
const writeToFile = require('./utils/index.js');

const employee = require('./lib/Employee.js');

const newEmployee = () => {
return inquirer
    .prompt([

    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name? (required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a valid employee name.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'title',
        message: "What is the employee's title? (required)",
        choices: [
            'Intern',
            'Employee',
            'Engineer',
            'Manager'
        ],
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You must choose a title.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email? (require)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter a valid email.')
            }
        }
    }
])
.then(answers => {
    writeToFile(answers);
    console.log(answers);
})
.catch(err => {
    if (err) {
        return (err);
    }
})

};

function getName() {
    return 'Dave';
}

// newEmployee();

module.exports = { getName };