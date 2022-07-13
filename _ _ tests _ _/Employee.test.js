
const Employee = require("../lib/Employee")
const employee = new Employee("george", 1234, "george@gmail.com")

test('testing employee class', () => { 
    expect(typeof employee == "object").toEqual(true)
})

test('testing getname()', () => {
    expect(employee.getName()).toEqual("george")
})

test('testing getId()', () => {
    expect(employee.getId()).toEqual(1234)
})

test('testing getEmail()', () => {
    expect(employee.getEmail()).toEqual('george@gmail.com')
})

test('testing getRole()', () => {
    expect(employee.getRole()).toEqual('Employee')
})