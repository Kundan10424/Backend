


//! ASSIGNMENT-1 
//* CREATE A PROGRAM USING NODE.JS EVENTEMITTER THAT:

//? LISTEN FOR MULTIPLE TYPES OF USER EVENTS (E.G., LOGIN, LOGOUT, PURCHASE, AND PROFILE UPDATE).

//? TRACKS HOW MANY TIMES EACH EVENT IS EMITTED.

//? LOGS A SUMMARY OF ALL EVENTS OCCURANCES WHEN A SPECIAL SUMMARY EVENT IS TRIGGERED.

const EVENTEMITTER = require("events")
const fs = require("fs")

const Useremitter = new EVENTEMITTER()

const eventCounts = {
    login: 0,
    logout: 0,
    purchase: 0,
    update: 0
}

const Logfile = "eventlog.json"

if(fs.existsSync(Logfile)){
    const data = fs.readFileSync(Logfile, 'utf-8')
    Object.assign(eventCounts, JSON.parse(data))
}

function saveCount(){
    fs.writeFileSync(Logfile, JSON.stringify(eventCounts, null, 2))
}

//* creating multiple events

Useremitter.on("LOGIN", (username) => {
    eventCounts.login++
    console.log(`${username} Logged in Successfully.✅`)
    saveCount()
})

Useremitter.on("LOGOUT", (username) => {
    eventCounts.logout++
    console.log(`${username} Logged out Successfully.❌`)
    saveCount()
})

Useremitter.on("PURCHASE", (username, item) => {
    eventCounts.purchase++
    console.log(`${username} purchased🛒 ${item}.`)
    saveCount()
})

Useremitter.on("PROFILE_UPDATE", (username, field) => {
    eventCounts.update++
    console.log(`${username} updated their profile field: ${field}.`)
    saveCount()
})

Useremitter.on("SUMMARY", () => {
    console.log("\n Events Summary:")
    console.log(`Logins: ${eventCounts.login}`)
    console.log(`Logouts: ${eventCounts.logout}`)
    console.log(`Purchases: ${eventCounts.purchase}`)
    console.log(`Updates: ${eventCounts.update}`)
})

// emitting events

Useremitter.emit("LOGIN", "Kundan")
Useremitter.emit("LOGOUT", "Kundan")
Useremitter.emit("PURCHASE", "Kundan", "Bread")
Useremitter.emit("PROFILE_UPDATE", "Kundan", "Profile picture")
Useremitter.emit("SUMMARY")
