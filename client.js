var socket = io('http://localhost:3000');

socket.on('test', (data) =>{
    alert(data);
})

socket.emit('cTest', 'hello server');