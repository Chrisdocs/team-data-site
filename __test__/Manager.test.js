const Manager = require('../lib/Manager.js');

test('Creates a new manager', () => {
    const manager = new Manager('Carl');

    expect(manager.name).toBe('Carl');
})
