const Manager = require( "./lib/Manager.js");
const Engineer = require( "./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require ("fs");
const path  = require ("path");
const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, "index.html");
const createTeam= require ("./src/blueprint.js");
let teamArray = []

   
    const makeTeam = () => {
        return inquirer.prompt ([
            {
                type: "list",
                name: "addEmployeeType",
                message: "What type of employee do you want to add?",
                choices: ["Manager", "Engineer", "Intern", "I do not want to add anymore employees"]
            }
        ]).then (answers => {
            switch (answers.addEmployeeType) {
                case "Manager": {
                    choiceManager();
                    break;
                }
                case "Engineer": {
                    choiceEngineer();
                    break;
                }
                case "Intern": {
                    choiceIntern();
                    break;
                }
                default:
            }  
        })

    }
    const choiceManager = () => {
         return inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the manager's ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            makeTeam();
        })
    }

    const choiceEngineer = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's ID number?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the engineer's Github username?"
            }
        ]) .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
            teamArray.push(engineer);
            makeTeam();
        })
    }

    const choiceIntern = () => {
         return inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "internID",
                message: "What is the intern's ID number?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern go to?"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            makeTeam();
        })
    }

    makeTeam();

    

    // function createHTML () {
    //     console.log("Your team profiles have been created!")
    //     fs.writeFileSync(distPath, createTeam(teamArray), "UTF-8")
    // }

    // createHTML();





