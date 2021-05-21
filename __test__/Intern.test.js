const Intern = require('../lib/Intern.js');

test('Creates a new intern.', () => {
    const intern = new Intern('Sue');

    expect(intern.name).toBe('Sue');
});