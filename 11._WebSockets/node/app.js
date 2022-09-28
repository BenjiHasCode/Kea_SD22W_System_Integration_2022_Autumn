import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(express.static("public"))


import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("ping", (data) => {
        socket.emit("pong", data);
    });

    socket.on("get_name", (name) => {
        if (name == "Benji") {
            socket.emit("name_response", `Ah yes ${name} is a good name`);
        } else if (name == "") {
            socket.emit("name_response", "Type a name you degenerate!");
        } else {
            socket.emit("name_response", `${name} is okay I guess..`);
        }
    });
});


server.listen(8080, () => {
    console.log("Server is running on port", 8080);
});