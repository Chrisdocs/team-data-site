class Engineer {
    constructor (github = '') {
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