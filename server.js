const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let users = {};
const player = {
  nickname: "",
  id: "",
  score: 0,
  answers: []
};
let players = {};

app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', connected);

function connected(socket){
  socket.on('newPlayer', (data) => {
    console.log("a new player connected with id: " + socket.id);
    users[socket.id] = data;
    console.log("user's special number: " +users[socket.id]);
    var num = Object.keys(users).length
    console.log("amount of players: " +num);
    io.emit('userCount', num);
    player.nickname = "nick";
    player.id = socket.id;
    player.answers = ["auto", "amarant", "cebula", "losowe cos"];

    players[player.id] = player;

    socket.emit('playerData', players[socket.id]);
  })


  socket.on('update', (data) => {
    console.log(data);
  })


  socket.on('disconnect', function() {
    delete users[socket.id];
    console.log(`player of id: ${socket.id} has disconnected`);
    num = Object.keys(users).length;
    console.log("amount of players: " +num);
    io.emit('userCount', num);
  })
}


server.listen(3000, () => {
  console.log('listening on *:3000');
})