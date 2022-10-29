var socket = io('http://localhost:3000');
const count = document.getElementById('count');
const input = document.getElementById('info');
const message = document.getElementById('message');
const button = document.getElementById('send');

//socket.on('test', (data) =>{
//    alert(data);
//})

//socket.emit('cTest', 'hello server');

var placeholder = Math.random() % 15;

socket.emit('newPlayer', placeholder);

function communication(){
    socket.emit('update', input.value);
}

socket.on('userCount', data => {
    count.innerHTML = data;
})

button.addEventListener('click', communication);