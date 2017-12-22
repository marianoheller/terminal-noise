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
}




function assignCallback( event, cb ) {
    if( !port ) throw Error('Port must be initialized first');
    port.on(event, cb);
}



module.exports = {
    listComNames,
    init
}