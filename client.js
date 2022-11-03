var socket = io('http://localhost:3000');
const count = document.getElementById('count');
const input = document.getElementById('info');
const message = document.getElementById('message');
const button = document.getElementById('send');
const set1 = document.getElementById('set1');


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

socket.on('playerData', data => {
    player = data;
    console.log(player);
})

function getSet(){
    socket.emit('set1');
}

socket.on('set', (data) => {
    console.log(data);
    compareStrings(data, player.answers)
})

button.addEventListener('click', communication);
set1.addEventListener('click', getSet);