const Manager = require('../lib/Manager.js');

test('Gets manager office number', () => {
    const manager = new Manager('123');

    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual(expect.any(String));
})
