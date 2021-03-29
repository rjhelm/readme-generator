// Function to generate readme based on user input
const generate = (answers) => {
    return `
    <h1 align="center">${answers.title}</h1>

    ![badge]((https://img.shields.io/badge/license-${answers.license}-blue)<br />

    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)
    - [License](#license)
    - [Contributions](#contributors)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.install}

    ## Usage
    ${answers.usage}

    ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}-blue)
    <br />
    Project falls under the coverage of ${answers.license} license.
    
    ## Contributions
    ${answers.contributors}

    ## Tests
    ${answers.tests}

    ## Questions
    ${answers.questions}
    <br />
    :octocat: My GitHub: [${answers.gitname}]((https://github.com/${answers.gitname})<br />
    <br />
    My Email: ${answers.email}<br />


    Created by [readme-generator](https://github.com/rjhelm/readme-generator)
    `;
}

module.exports = generate;