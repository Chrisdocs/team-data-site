const index = require('./index.js');

class Intern {
    constructor (name, id, email, school= '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
};

Intern.prototype.getRole = function() {
    return 'Intern';
}

module.exports = Intern;