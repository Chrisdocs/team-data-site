const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee.js');

const Engineer = require('./Engineer.js');

const Intern = require('./Intern.js');

const Manager = require('./Manager.js');


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
        name: 'role',
        message: 'What type of employee would you like to add?',
        choices: [
            'Employee',
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
        when: ({ role }) => {
            if (role === 'Employee' || role === 'Intern' || role === 'Engineer' || role === 'Manager') {
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
        when: ({ role }) => {
            if (role === 'Employee' || role === 'Intern' || role === 'Engineer' || role === 'Manager') {
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
        when: ({ role }) => {
            if (role === 'Employee' || role === 'Intern' || role === 'Engineer' || role === 'Manager') {
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
        when: ({ role }) => {
            if (role === 'Intern') {
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
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
// if Manager
    {
        type: 'input',
        name: 'officeNum',
        message: "What is the employee's office number (if any)?",
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
// check to see if user wants to add additional employees
    {
        type: 'confirm',
        name: 'addEmp',
        message: "Would you like to add any additional employees?",
        default: true
    }
])
.then(answers => {
    let newEmp;
//check for role and pass inputs to constructor function in /lib
    switch (answers.role) {
        case 'Employee':
            newEmp = new Employee(answers.name, answers.id, answers.email);
            console.log(newEmp);
            if (answers.addEmp === true) {
                newEmployee();
            } else {
                console.log('New Employee addition complete!');
            }
            break;
        case 'Intern':
            newEmp = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(newEmp);
            if (answers.addEmp === true) {
                newEmployee();
            } else {
                console.log('New Employee addition complete!');
            }
            break;
        case 'Engineer':
            newEmp = new Engineer(answers.name, answers.id, answers.email, answers.github)
            console.log(newEmp);
            if (answers.addEmp === true) {
                newEmployee();
            } else {
                console.log('New Employee addition complete!');
            }
            break;
        case 'Manager':
            newEmp = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            console.log(newEmp);
            if (answers.addEmp === true) {
                newEmployee();
            } else {
                console.log('New Employee addition complete!');
            }
            break;
        default:
            console.log('Sorry, there seems to be an error with your selection.')
    }
})
.catch(err => {
    if (err) {
        return (err);
    }
})

};

module.exports = newEmployee;