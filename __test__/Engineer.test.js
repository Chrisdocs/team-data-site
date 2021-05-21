const Engineer = require('../lib/Engineer.js');

test('Creates a new engineer', () => {
    const engineer = new Engineer('Laura');

    expect(engineer.name).toBe('Laura');
});