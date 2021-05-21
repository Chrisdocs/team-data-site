const fs = require('fs');
const inquirer = require('inquirer');
const writeToFile = require('./utils/index.js');

const employee = require('./lib/Employee.js');

const newEmployee = () => {
return inquirer
    .prompt([
// begin prompt, ask if user wants to create a new employee
    {
        type: 'confirm',
        name: 'empConfirm',
        message: 'Would you like to add a new employee?',
        default: true
    },
// what type of employee
    {
        type: 'list',
        name: 'empType',
        message: 'What type of employee would you like to add?',
        choices: [
            'Intern',
            'Engineer',
            'Manager'
        ],
        when: ({ empConfirm }) => {
            if (empConfirm) {
                return true;
            } else {
                return false;
            }
        },
    },
// global inputs for any employee
//name
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
        },
        when: ({ Intern, Engineer, Manager }) => {
            if (Intern || Engineer || Manager) {
                return true;
            } else {
                return false;
            }
        }
    },
//id
    {
        type: 'number',
        name: 'id',
        message: "Please enter an ID number to assign to the new employee. (required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a valid employee ID number.');
                return false;
            }
        },
        when: ({ Intern, Engineer, Manager }) => {
            if (Intern || Engineer || Manager) {
                return true;
            } else {
                return false;
            }
        }
    },
//email
    {
        type: 'input',
        name: 'email',
        message: "What is the new employee's email address?",
        when: ({ Intern, Engineer, Manager }) => {
            if (Intern || Engineer || Manager) {
                return true;
            } else {
                return false;
            }
        }
    },
// if Intern
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern attend (if any)?",
        when: ({ Intern }) => {
            if (Intern) {
                return true;
            } else {
                return false;
            }
        }
    },
// if Engineer
    {
        type: 'input',
        name: 'github',
        message: "What is the new employee's GitHub username?",
        when: ({ Engineer }) => {
            if (Engineer) {
                return true;
            } else {
                return false;
            }
        }
    },
// if Manager
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