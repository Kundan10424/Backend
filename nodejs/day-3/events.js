


const EventEmitter = require("events")

const emitter = new EventEmitter()

// keymethods of events
//* on(eventName,Listener/callback function) -- use to create a custom event

emitter.on("Greet", (args)=>{
    console.log(`Hello World! ${args.id} ${args.firstName} ${args.lastname}`)
})

//* emit(eventName, [args]) -- use to execute that event

emitter.emit("Greet", {
    id: 1,
    firstName: "Kundan",
    lastname: "Kumar"
})
