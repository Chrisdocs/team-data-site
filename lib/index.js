const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');

const cardArr = [];

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
            htmlCard(answers);
            if (answers.addEmp === true) {
                newEmployee();
            } else {
                console.log('New Employee addition complete!');
            }
            break;
        case 'Intern':
            newEmp = new Intern(answers.name, answers.id, answers.email, answers.school);
            htmlCard(answers);
            if (answers.addEmp === true) {
                newEmployee();
            } else {
                console.log('New Employee addition complete!');
            }
            break;
        case 'Engineer':
            newEmp = new Engineer(answers.name, answers.id, answers.email, answers.github)
            htmlCard(answers);
            if (answers.addEmp === true) {
                newEmployee();
            } else {
                console.log('New Employee addition complete!');
            }
            break;
        case 'Manager':
            newEmp = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            htmlCard(answers);
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
});

};

const htmlFile = () => {
    return `<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                
                ${cardArr.length && cardArr.map( card => card )}

            </div>
        </div>
    </div>
</body>
</html>`
}

const htmlCard = (answers) => {
    const cardGen =  `<div class="card employee-card"><div class="card-header"><h2 class="card-title">${answers.name}</h2><h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${answers.role}</h3></div><div class="card-body"><ul class="list-group"><li class="list-group-item">ID: ${answers.id}</li><li class="list-group-item">Email: ${answers.email}<a href="mailto:${answers.email}">${answers.email}</a></li>${answers.role === 'Employee' ? '': answers.role === 'Intern' ? `<li class="list-group-item">School: ${answers.school}</li>` : answers.role === 'Engineer' ? `<li class="list-group-item">GitHub: <a href="https://github.com/${answers.github}" target="_blank" rel="noopener noreferrer">${answers.github}</a></li>` : `<li class="list-group-item">Office Number: ${answers.officeNum}</li>`}</ul></div></div>`

    cardArr.push(cardGen);
    writeFile();
};

const writeFile = () => {
    let fileContent = htmlFile();
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                console.log("Something has gone wrong in the file writing", err);
            } else {
                console.log("File created!")
            }
        }
    )}

module.exports = {newEmployee, htmlFile}