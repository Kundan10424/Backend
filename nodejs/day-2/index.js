


const http = require("http")
const fs = require("fs")
const PORT = 8080

const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: & from ${req.url} New Request Received\n`

    fs.appendFile("log.txt", log, (err)=>{
        if(err){
            console.log("Error writing to the lg fiile",err)
            res.statusCode = 500
            res.end("Internal server error")
        }
        else{ 
            res.end("Hello from server")
        }
    })
})


myServer.listen(PORT, () => {
    console.log(`Server is listing on port ${PORT}`)
})