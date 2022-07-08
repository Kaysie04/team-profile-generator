const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

function start() {


    function makeTeam () {
        return inquirer
        .prompt ([
            {
                type: "list",
                name: "addEmployeeType",
                message: "What type of employee do you want to add?",
                choices: ["Manager", "Engineer", "Intern", "I do not want to add anymore employees"]
            }
        ])

    }
    function choiceManager() {
        return inquirer
        .prompt([
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

        ])
    }

    function choiceEngineer() {
        return inquirer
        .prompt([
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

        ])
    }

    function choiceIntern() {
        return inquirer
        .prompt([
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

        ])
    }
};

start();
