const events = require("events");

class Classroom
{
    constructor(){
        this.eventEmitter = new events.EventEmitter();
        this.eventEmitter.on("doorOpened",this.switchOnLights);
        this.eventEmitter.on("doorClosed",this.switchOffLights);
    }

    doorOpen()
    {
        console.log("Door opened..");
        this.eventEmitter.emit("doorOpened");
    }

    doorClose()
    {
        console.log("Door closed..");
        this.eventEmitter.emit("doorClosed");
    }


    switchOnLights()
    {
        console.log("Lights are switched on...");
    }
    
    switchOffLights()
    {
        console.log("Lights are switched off");
    }
}

module.exports = Classroom;