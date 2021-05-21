const index = require('./index.js');

class Engineer {
    constructor (name, id, email, github='') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
};

Engineer.prototype.getGithub = function() {
    return `github.com/${this.github}`
};

Engineer.prototype.getRole = function() {
    return 'Engineer'
};

module.exports = Engineer;