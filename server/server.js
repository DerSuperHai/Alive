const http = require('http')
const express = require('express')
const socketio = require("socket.io")
const port = 8080
const app = express()

const clientPath = "client"
console.log("Serving static from "+clientPath)
app.use(express.static(clientPath))

const server = http.createServer(app)

const io = socketio(server)

io.on("connection", (sock) =>{
    console.log("Someone connected")
    sock.emit("message", "Hi, you are connected with id :" + sock.id)

    sock.on('disconnect', function() {
        console.log('disconnected:'+sock.id);
    });

    sock.emit("init", sock.id)
})

server.on("error", (err)=>{
    console.error("Server error: ", err)
})

server.listen(port, ()=>{
    console.log("Server is listening on port " + port)
})


