const EventEmitter = require("events")

const MyFirstEmitter = new EventEmitter();
MyFirstEmitter.on('greet' , (name) => {
    console.log(`Hello ${name}`)
})

MyFirstEmitter.emit('greet' , 'Rishikesh')