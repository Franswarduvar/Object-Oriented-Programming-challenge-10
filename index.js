const inquirer = require("inquirer");
const Engineer = require('./Lib.folder/Engineer');
const Intern = require('./Lib.folder/Intern');
const Manager = require('./Lib.folder/Manager');
const HTML = require('./SRC.folder/HTML');
const path = require('path');
const fs = require('fs');
const { create } = require("domain");
const teamMember = [];
const DIST_DIR = path.resolve(__dirname,'dist');
const DistPath = path.join(DIST_DIR,'Team-index.html');
function application(){

function createManager(){
inquirer.prompt([{
    type:'input',
    name:'ManagerName',
    message:'What is the managers name?',
},{
    type:'input',
    name:'ManagerId',
    message:'What is the managers ID?',
},{
    type:'input',
    name:'ManagerEmail',
    message:'What is the managers Email?',
},{
    type:'input',
    name:'ManagerOfficeNumber',
    message:'What is the managers Office Number?',
}
])
.then(answers =>{
    const manager = new Manager(answers.ManagerName,answers.ManagerID,answers.ManagerEmail,answers.ManagerOfficeNumber)
    teamMember.push(manager)
    createTeam()
})
}
function createTeam(){
    inquirer.prompt([{
        type: 'list',
        name: 'Managerchoice',
        message: 'Who would you like to add to the list?',
        choices:['Engineer','Intern','All finished']
        
    }])
    .then(answer =>{
        switch(answer.Managerchoice){
            case 'Engineer':
            createEngineer();
            break
            case 'Intern':
            createIntern();
            break
            default:
            assembleTeam()
        }
    })
}
function createEngineer(){
    inquirer.prompt([{
        type:'input',
        name:'EngineersName',
        message:'What is the Engineers name?',
    },{
        type:'input',
        name:'EngineerID',
        message:'What is the Engineers ID?',
    },{
        type:'input',
        name:'EngineerEmail',
        message:'What is the Engineers Email?',
    },{
        type:'input',
        name:'EngineerGithub',
        message:'What is the Engineers github?',
    }
    ])

    .then(answers =>{
        const engineer = new Engineer(answers.EngineersName,answers.EngineerID,answers.EngineerEmail,answers.EngineerGithub)
        teamMember.push(engineer)
        createTeam()
    })
}
function createIntern(){
    inquirer.prompt([{
        type:'input',
        name:'InternName',
        message:'What is the Intern name?',
    },{
        type:'input',
        name:'InternID',
        message:'What is the Intern ID?',
    },{
        type:'input',
        name:'InternEmail',
        message:'What is the Intern Email?',
    },{
        type:'input',
        name:'InternSchool',
        message:'What is the Intern School?',
    }
    ])

    .then(answers =>{
        const intern = new Intern(answers.InternName,answers.InternID,answers.InternEmail,answers.InternSchool)
        teamMember.push(intern)
        createTeam()
    })
}

function assembleTeam(){
    if(!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(DistPath, HTML(teamMember),'utf-8');
}

createManager()
}
application()