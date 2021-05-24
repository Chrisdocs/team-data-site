const index = require('./index.js');

class Engineer {
    constructor (name, id, email, github='') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    getGithub() {
        return `github.com/${this.github}`
    }
    getRole() {
        return 'Engineer'
    }
};

module.exports = Engineer;