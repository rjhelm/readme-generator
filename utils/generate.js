// Function to generate readme based on user input
const generate = (answers) => {
    return `
    <h1 align="center">${answers.title}</h1>

    ![badge]((https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

    ## Project Content Links
    - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)

    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.install}

    ## Usage
    ${answers.usage}

    `
}