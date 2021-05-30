const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const path = require("./path");
const fs = require("./fs");



function managerInfo(additions) {
    var manager = additions[0]
    const htmlManager = `
    <div class="card mb-3" style="background-color: #ddedf0; border-style: outset; border-width: thick;">
    <div class="card-header" style="background-color: #5ba0b9 ; color: aliceblue; text-center; font-family: 'Franklin Gothic Medium';">ENGINEER</div>
    <div class="card-body" style="font-family:'Trebuchet MS'; font-weight: lighter;">
        <h3 class="card-title; text-center">${manager.name}</h3>
        <ul class="employee-info">
            <li class="employee-info-item" style="background-color: #ddedf0;">ID: ${manager.id}</li>
            <li class="employee-info-item" style="background-color: #ddedf0;">EMAIL: <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li class="employee-info-item" style="background-color: #ddedf0;">OFFICE NUMBER: ${manager.officeNum}
            </li>
        </ul>
    </div>
</div>
    `
    return htmlManager;
}

function engineerCard(additions) {
    const engineersArray = additions.filter((additions) => {
        return additions.getRole() === "Engineer"
    });
    const engineerEmployeesHtml = engineersArray.map(dev => `
        <div class="card mb-3" style="background-color: #ddedf0; border-style: outset; border-width: thick;">
    <div class="card-header" style="background-color: #5ba0b9 ; color: aliceblue; text-center; font-family: 'Franklin Gothic Medium';">ENGINEER</div>
    <div class="card-body" style="font-family:'Trebuchet MS'; font-weight: lighter;">
        <h3 class="card-title; text-center">${dev.name}</h3>
        <ul class="employee-info">
            <li class="employee-info-item" style="background-color: #ddedf0;">ID: ${dev.id}</li>
            <li class="employee-info-item" style="background-color: #ddedf0;">EMAIL: <a href="mailto:${dev.email}">${dev.email}</a>
            </li>
            <li class="employee-info-item" style="background-color: #ddedf0;">GITHUB:
            <a href="https://github.com/${dev.github}" target="_blank">${dev.github}</a>
            </li>
        </ul>
    </div>
</div>
    `

    );
    const engineerCard = engineerEmployeesHtml.join('');
    return engineerCard;
    // console.log(engineerCard);
}

function internCard(additions) {
    const internsArray = additions.filter((additions) => {
        return teamMember.getRole() === "Intern"
    });
    // console.log(internsArray);
    const internsHtml = internsArray.map(intern => `
        <div class="card mb-3" style="background-color: #ddedf0; border-style: outset; border-width: thick;">
    <div class="card-header" style="background-color: #5ba0b9 ; color: aliceblue; text-center; font-family: 'Franklin Gothic Medium';">ENGINEER</div>
    <div class="card-body" style="font-family:'Trebuchet MS'; font-weight: lighter;">
        <h3 class="card-title; text-center">${intern.name}</h3>
        <ul class="employee-info">
            <li class="employee-info-item" style="background-color: #ddedf0;">ID: ${intern.id}</li>
            <li class="employee-info-item" style="background-color: #ddedf0;">EMAIL: <a href="mailto:${intern.email}">${intern.email}</a>
            </li>
            <li class="employee-info-item" style="background-color: #ddedf0;"> SCHOOL: ${intern.school}
            </li>
        </ul>
    </div>
</div>
    `
    );
    const internCard = internsHtml.join('');
    return internCard;
}

function generateHTML(additions) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Page</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body style="background-color: #252c18;">
<header style="background-color: #749397;">
    <nav class="text-center " style="color: lavenderblush; border-bottom-color: rgb(102, 125, 145); border-style: outset; border-width: thick; opacity: 80%; height: 60px; font-family: 'Franklin Gothic Medium';">
        <h1 class="d-inline-block mb-0">Product Development Team</h1>
    </nav>
</header>
<div class="container mt-5">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
        ${managerCard(additions)}
        <br>
        ${engineerCard(additions)}
        <br>
        ${internCard(additions)}

        </div>
    </div>
</div>
</body>

</html>
    `
}
module.exports = generateHTML;