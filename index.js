// Project Variables 
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generate = require('./utils/generate');
const writeFileAsync = util.promisify(fs.writeFile);

// User prompt functions
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Briefly describe your project: '
        },
        {
            type: 'input',
            name: 'install',
            message: 'Include any installation steps: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the uses for the project: '   
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project: ',
            choices: [
                'Academic',
                'Apache',
                'Artistic',
                'Boost',
                'Creative',
                'Educational',
                'Eclipse',
                'GNU',
                'Microsoft',
                'MIT',
                'Mozilla',
                'Open'
            ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who were the main contributors for this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are you including a test?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What if I have questions?'
        },
        {
            type: 'input',
            name: 'gitname',
            message: 'Enter your github username: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address: '
        }
    ]);
}

async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generate(answers);
        await writeFileSync(`./dist/README.md`, generateContent);
        console.log('Your README.md docuemnt succesfully generated!');
    } catch(err) {
        console.log(err);
    }
}

init();