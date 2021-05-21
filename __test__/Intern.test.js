const Intern = require('../lib/Intern.js');

test('Gets an interns school', () => {
    const intern = new Intern('UCF');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual('Intern');
});