'use strict';
const SerialPort = require('serialport');


var port;


function listComNames() {
    return SerialPort.list()
    .then( (ret) => {
        const comNames = ret.map( (port) => port.comName );
        return comNames;
    })
    .catch( (err) => {
        console.log(err);
    });
}


function openPort(portname, baudRate, extraOptions) {
    port = new SerialPort( portname, {
        baudRate: baudRate,
        autoOpen: false,
        ...extraOptions
    });
    port.pause();
}


function init( config , extraOptions ) {
    openPort(config.comName, config.baudRate, extraOptions );
    port.on('data', console.log );
    return;
}

function read() {
    console.log("Making single read");
    return port.read();
}

function listen() {
    console.log("Listening port...");
    port.resume();
}

function assignCallback( event, cb ) {
    if( !port ) throw Error('Port must be initialized first');
    port.on(event, cb);
}


function performAction( actionName ) {
    switch(actionName) {
        case 'read':
            console.log(read());
            break;
        case 'listen':
            return listen();
            break;
        case 'write':
            console.log("WRINTING");
            break;
        default:
            throw Error('Action name not valid');
            break;
    }
}


module.exports = {
    listComNames,
    init,
    performAction
}