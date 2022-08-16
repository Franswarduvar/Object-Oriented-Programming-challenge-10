const Employee = require("../Lib.folder/Employee");
const Manager = require("../Lib.folder/Manager");

function generateTeam(team){
    function generateManager(manager){
        return `
        <h2 class="card-title">${manager.getName()}</h2>
        <h2 class="card-title">${manager.getId()}</h2>
        <h2 class="card-title">${manager.getEmail()}</h2>
        <h2 class="card-title">${manager.getOfficeNumber()}</h2>
        `
    }
    // function generateEngineer(engineer){

    // }
    // function generateInterm(intern){

    // }
    const html = [];
    html.push(team
        .filter(employee => employee.getRole()==="Manager")
        .map(manager=> generateManager(manager)));
    //  html.push(team
    //         .filter(employee => employee.getRole()==="Engineer")
    //         .map(engineer=> generateEngineer(engineer))
    //         .join(''));
    //         html.push(team
    //             .filter(employee => employee.getRole()==="Intern")
    //             .map(intern=> generateIntern(intern))
    //             .join(''));
                return html.join('');
}


module.exports = team =>{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Script Tags and Console Log</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  
    </head>

    <body>

    ${generateTeam(team)}

    </body>
    `
}
