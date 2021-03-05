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
function app() {
    inquirer
        .prompt (managerQuestions)
        .then(response => {

const managerAuthentication = new Manager(response.name, response.id, response.email, response.officeNum);
team.push(teamManagerInfo);
addTeamMembers();
});
};

//function that adds a new team member
function addTeamMembers() {
    inquirer
        .prompt (newTeam)
        .then(answer => {
            switch (answer.addTeamMembers) {
            case "Engineer": addEngineer(answer.addTeamMembers);
                break;
            case "Intern": addIntern(answer.addTeamMembers);
                break;
            case "Done":
                renderHTMLfile(team, (err) => {
                    if (err) throw err;
                });
                break;
        };
    });   
};

//engineer choice with github addition

function addEngineer(choice) {
    for (var i = 0; i < managerQuestions.length; i++) {
        if (managerQuestions[i].name === "officeNumber") {
            managerQuestions.splice(i, 1);
            break;
         };
    };

const engineerQuestion = {
    type: "input",
    name: "github",
    message: `Add the ${choice}'s Github account:`
};

managerQuestions.push(engineerQuestion);
managerQuestions[0].message = `Enter the name of the ${choice}:`;
inquirer
    .prompt(managerQuestions)
    .then(answer => {
        const newEngineerInfo = new Engineer(answer.name, answer.id, answer.email, answer.github);
        team.push(newEngineerInfo);
        addTeamMembers();
    });
    for (var i = 0; i < managerQuestions.length; i++) {
        if (managerQuestions[i].name === "gitHubUsername") {
            managerQuestions.splice(i, 1);
            break;
        };
    };
}