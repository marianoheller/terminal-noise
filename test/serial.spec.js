'use strict';
const SerialPort = require('serialport/test');
const MockBinding = SerialPort.Binding;
 
// Create a port and enable the echo and recording.
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
const port = new SerialPort('/dev/ROBOT')