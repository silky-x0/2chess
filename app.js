const express = require("express");
const socket = require("socket.io");
const http = require("http");
const {Chess} = require("chess.js")
const path = require("path")

const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

io.on("connection", function(uniqueSocket) {
    console.log("Player Connected");

    if(!players.white){
        players.white = uniqueSocket.id;
        uniqueSocket.emit("playerRole", "W");
    }else if(!players.black){
        players.black = uniqueSocket.id;
        uniqueSocket.emit("playerRole", "B");
    }else{
        uniqueSocket.emit("spectatorRole");
    }
});

server.listen(3000, function(){
    console.log("Working");
});