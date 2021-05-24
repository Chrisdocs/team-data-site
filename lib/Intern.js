const index = require('./index.js');

class Intern {
    constructor (name, id, email, school= '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;