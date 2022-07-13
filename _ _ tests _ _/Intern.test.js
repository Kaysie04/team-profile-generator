const Intern = require("../lib/Intern")
const intern = new Intern("george", 1234, "george@gmail.com", 'UT Austin')

test('testing getSchool()', () => {
    expect(intern.getSchool()).toEqual('UT Austin') 
})

test('testing getRole()', () => {
    expect(intern.getRole()).toEqual('Intern')
})