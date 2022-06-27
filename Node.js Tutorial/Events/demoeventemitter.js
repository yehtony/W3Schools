var events = require('events'); // events module can create-, fire-, and listen for- events.
var eventEmitter = new events.EventEmitter(); //event properties and methods are an instance of an EventEmitter object

//create an event handler
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//assign the eventhandler to an event
eventEmitter.on('scream', myEventHandler);

//fire the 'scream' event
eventEmitter.emit('scream');

//git author test