const inquirer = require('inquirer');



function queryConfig(comNames) {
    const queryComName = {
        type: 'list',
        name: 'comName',
        message: 'Elija el puerto a usar',
        choices: comNames
    }
    const queryConfig = {
        type: 'input',
        name: 'baudRate',
        message: 'Escriba el baud rate deseado',
        validate: function(input) {
            const possibleBaudRates = [110, 150, 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 230400, 460800, 921600];
            return possibleBaudRates.includes(Number(input));
        }
    }
    return inquirer.prompt([queryComName, queryConfig]).then(answers => {
        answers.baudRate = Number(answers.baudRate);
        return answers;
    });
}


function queryAction() {
    const queryActions = {
        
    }
}



module.exports = {
    queryConfig
}