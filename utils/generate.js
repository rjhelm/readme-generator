// Function to generate readme based on user input
const generate = (answers) => {
    return `
    <h1 align="center">${answers.title}</h1>

    ![badge]((https://img.shields.io/badge/license-${answers.license}?style=plastic&logo=appveyor?labelColor=blueviolet?color=blue)<br />

    ## Project Content Links
    - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)
    - [License](#license)
    -

    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.install}

    ## Usage
    ${answers.usage}

    ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}?style=plastic&logo=appveyor?labelColor=blueviolet?color=blue)
    </br>
    Project falls under the coverage of ${answers.license} license.
    `
}