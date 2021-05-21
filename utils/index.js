const fs = require('fs');

const writeToFile = (answers) => {
    fs.writeFile('../employees/employeeObj.js', answers, err => {
        if (err) {
            console.log('you had an error:', err);
        } else {
            console.log('Employee created!');
        }
    });
};

module.exports = writeToFile;