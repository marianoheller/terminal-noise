'use strict';
const Serial = require('./src/serial');
const Prompter = require('./src/prompter');




console.log("Bienvenidooooo!!!!");
Serial.listComNames()
.then( Prompter.queryConfig )
.then( (config) => {
    Serial.init(config)
} )
.then( () => Prompter.queryAction )
.catch( (err) => {
    console.log(err);
})





