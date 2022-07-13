const Engineer = require("../lib/Engineer")
const engineer = new Engineer("george", 1234, "george@gmail.com", 'george04')

test('testng getGithub()', () => {
    expect(engineer.getGithub()).toEqual('george04')
})

test('testing getRole()', () => {
    expect(engineer.getRole()).toEqual('Engineer')
})