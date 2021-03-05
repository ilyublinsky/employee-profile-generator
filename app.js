//JSON
const path = require('path');
const inquirer = require('inquirer');
const fs = ('fs');

//Creates the HTML file
const renderHTMLfile = require("../dist/createHTML");

//Calls all the classes
const Employee = require("../js/employee");
const Manager = require("../js/manager");
const Engineer = require("../js/engineer");
const Intern = require("../js/intern");

//Prompt to input the manager's information when starting the app
const managerInfo = [
    {
        type: "input",
        name: "name",
        message: "Enter your name name:",
        default: "Must be a manager to access this application."
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
        name: "office#",
        message: "Enter your office number:"

    },
]
