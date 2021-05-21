class Intern {
    constructor (school = '') {
        this.school = school;
    }
};

Intern.prototype.getRole = function() {
    return 'Intern';
}

module.exports = Intern;