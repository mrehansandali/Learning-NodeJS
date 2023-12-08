const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}


const myEmitter = new MyEmitter();

myEmitter.on("DoorBell",()=>{
    console.log("Open the door")
    setTimeout(() => {
        console.log("The person is still on the door")
    }, 3000);
})
myEmitter.emit("DoorBell")
console.log("script is still running")