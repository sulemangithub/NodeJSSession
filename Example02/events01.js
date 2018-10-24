const events = require("events");

let eventEmitter = new events.EventEmitter();

eventEmitter.on("on",function(){
    console.log("Event 'ON' executed...");
});

eventEmitter.on("off",function(){
    console.log("Event 'OFF' executed");
});

eventEmitter.emit("on");
eventEmitter.emit("off");

