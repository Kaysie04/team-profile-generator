
const Manager = require("../lib/Manager")
const manager = new Manager("george", 1234, "george@gmail.com", 224967)

test('testing getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toEqual(224967)
})

test('testing getRole()', () => {
    expect(manager.getRole()).toEqual('Manager')
})