

class Manager {
    constructor (officeNum = '') {
        this.officeNum = officeNum
    }
};

Manager.prototype.officeNum = function() {
    return this.officeNum;
}

Manager.prototype.getRole = function() {
    return 'Manager';
}

module.exports = Manager;