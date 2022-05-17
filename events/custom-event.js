//get back class
//if want custom emitter, extend from class
//otherwise just for emitting and handling events create instance

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//on and emit methods
//keep track of the order
//additional arguments
//built-in modules, utilize it

customEmitter.on('response', (name, id) => {
    console.log(`Data received: User is ${name} with ID ${id}`);
})

customEmitter.emit('response', 'Mak', 5);
