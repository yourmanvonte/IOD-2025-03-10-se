const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

const users = {};

io.on("connection", (socket) => {
    console.log("A user connected");

    // handles user nicknames
    socket.on("set-nickname", (nickname) => {
        users[socket.id] = nickname;
        socket.broadcast.emit("user-connected", nickname);
        io.emit("online-users", Object.values(users));
    });

    // handles user/chat messages
    socket.on("chat-message", (msg) => {
        socket.broadcast.emit("chat-message", {
            message: msg.message,
            nickname: users[socket.id],
        });
    });

    // handles when someone is typing
    socket.on("typing", () => {
        socket.broadcast.emit("typing", users[socket.id]);
    });

    // handles when users disconnect
    socket.on("disconnect", () => {
        const name = users[socket.id];
        delete users[socket.id];
        socket.broadcast.emit("user-disconnected", name);
        io.emit("online-users", Object.values(users));
    });
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
