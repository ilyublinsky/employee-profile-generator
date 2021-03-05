//JSON
const path = require('path');
const inquirer = require('inquirer');
const fs = ('fs');

//Creates the HTML file
const renderHTMLfile = require("../dist/createHTML");

//Calls classes
const Employee = require("../js/employee");
const Manager = require("../js/manager");
const Engineer = require("../js/engineer");
const Intern = require("../js/intern");

//open array
const team = [];

//Prompt to input the manager's information when starting the app
const teamManagerInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter your name name:",
        default: "Must be a team manager to access this application."
    },

    {
        type: "input",
        name: "id",
        message: "Enter your Manager ID:"
    },

    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    },

    {
        type: "input",
        name: "officeNum",
        message: "Enter your office number:"

    },
]


const addTeamMembers = [
    {
        type: "list",
        name: "employee",
        message: "Which role would you like to create? Please select 'Quit' if you do not have any more additions.",
        choices: ["Engineer", "Intern", "Quit"]
    },

    {
        type: "confirm",
        name: "choice",
        message: "Would you like to add another employee?",
    }
];

//function that starts the application
app();
app() => {
    inquirer
        .prompt (managerQuestions)
        .then(response => {

const managerAuthentication = new Manager(response.name, response.id, response.email, response.officeNum);
team.push(teamManagerInfo);
addNewMember();
});
};

//function that adds a new team member
addTeamMember => () {
    inquirer
        .prompt (newTeamMemberQuestions)
        .then(response => {
            switch (response.addTeamMember);
            case "Engineer"; addEngineer(response.addTeamMember);
                break;
            case "Intern"; addIntern(response.addTeamMember);
                break;
            case "Done":
                renderHTMLfile(team, (err) => {
                    if (err) throw err;
                });
                break;
        });
        
};