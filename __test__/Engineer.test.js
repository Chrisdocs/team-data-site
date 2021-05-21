const Engineer = require('../lib/Engineer.js');

test('Gets an engineers github username', () => {
    const engineer = new Engineer('Username');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getGithub()).toBe('github.com/Username');
    expect(engineer.getRole()).toBe('Engineer');
});