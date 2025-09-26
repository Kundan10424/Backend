import http from "http"
import WebSocket, {WebSocketServer} from "ws"

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res)=> {
    console.log((new Date()) + " Received request" + req.url)
    res.end("WebSocket Server is running")
})

const wss = new WebSocketServer({server})

wss.on("connection", function connection(ws) {
    console.log("New client connected")

    ws.on("error", function error(err) {
        console.error(`WebSocket error: ${err}`)
    })

    ws.on("message", function message(data) {

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(`New message from client: ${data}`)
        }
        console.log(`Message sent to client: ${data}`)

    })
    })



    ws.send("Hello! Connection message from server")

    ws.on("close", function close() {
        console.log("Client disconnected")
    })


})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})