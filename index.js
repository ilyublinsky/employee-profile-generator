//JSON
const path = require('path');
const inquirer = require('inquirer');
const fs = ('fs');

//open array
const team = [];

//Prompt to input the manager's information when starting the app
const teamManagerInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter your name:",
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


const additions = [
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
        .prompt (teamManagerInfo)
        .then(response => {

const managerAuthentication = new Manager(response.name, response.id, response.email, response.officeNum);
team.push(managerAuthentication);
addTeamMembers();
});
};

//function that adds a new team member
function addTeamMembers() {
    inquirer
        .prompt (newTeam)
        .then(answer => {
            switch (answer.additions) {
            case "Engineer": addEngineer(answer.additions);
                break;
            case "Intern": addIntern(answer.additions);
                break;
            case "Done":
                break;
        };
    });   
};

//engineer choice with github addition

function addEngineer(choice) {
    for (var i = 0; i < teamManagerInfo.length; i++) {
        if (teamManagerInfo[i].name === "officeNumber") {
            teamManagerInfo.splice(i, 1);
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

//intern choice with school question
function addIntern(choice) {
    const internQuestion = {
        type: "input",
        name: "school",
        message: `Enter the school the ${answerChoosed} is associated with: `,
    };
    teamManagerInfo.push(internQuestion);
    teamManagerInfo[0].message = `Enter the name of the ${answerChoosed}:`;
    inquirer
        .prompt(internQuestion)
        .then(answer => {

            const newInternInfo = new Intern(answer.name, answer.id, answer.email, answer.school);
            team.push(newInternInfo);
            addTeamMembers();
        });
    for (var i = 0; i < teamManagerInfo.length; i++) {
        if (teamManagerInfo[i].name === "school") {
            teamManagerInfo.splice(i, 1);
            break;
        };
    };
}