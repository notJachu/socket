const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('test', 'hello')
  socket.on('cTest', (data) => {
    console.log(data);
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
})