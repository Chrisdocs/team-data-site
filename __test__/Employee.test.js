const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');
const Manager = require('../lib/Manager.js');

test('Creates a new employee', () => {
    const employee = new Employee('Dave', 12345, 'dave@email.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName())
});
