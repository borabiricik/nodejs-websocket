const http = require("http");
const { Server } = require("socket.io");
const express = require("express");
const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("bağlandı");

  socket.on("new-user", (data) => {
    socket.broadcast.emit("user-connected", { name: data.name });
  });
});

server.listen(3000);
