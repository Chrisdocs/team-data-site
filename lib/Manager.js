const index = require('./index.js');

class Manager {
    constructor (name, id, email, officeNum) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
    }
    getRole() {
        return 'Manager';
    }
};


module.exports = Manager;