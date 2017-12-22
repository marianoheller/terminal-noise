'use strict';
const Serial = require('./src/serial');
const Prompter = require('./src/prompter');

/*


console.log("Bienvenidooooo!!!!");
Serial.listComNames()
.then( Prompter.queryConfig )
.then( Serial.init )
.then( Prompter.queryAction )
.then( Serial.performAction )
.then( Prompter.waitForCancel )
.catch( (err) => {
    console.log(err);
})
*/




function loop(promise, fn) {
    return promise
    .then(fn)
    .then(function (wrapper) {
        return !wrapper.done ? loop(Promise.resolve(wrapper.value), fn) : wrapper.value;
    });
}

loop(Promise.resolve(1), function (i) {
    console.log(i);
    return {
        done: i > 10,
        value: ++i
    };
})
.then(function () {
    console.log('done');
})
.catch( console.log );