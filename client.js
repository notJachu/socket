var socket = io('http://localhost:3000');
//const count = document.getElementById('count');
//const input = document.getElementById('info');
//const message = document.getElementById('message');
//const button = document.getElementById('send');
//const set1 = document.getElementById('set1');
const input = document.getElementById('input');
const connect = document.getElementById('connect');
const wait = document.getElementById('wait');


//socket.on('test', (data) =>{
//    alert(data);
//})

//socket.emit('cTest', 'hello server');


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

//button.addEventListener('click', communication);
//set1.addEventListener('click', getSet);

connect.onsubmit = function(e){
    e.preventDefault();
    myID = socket.id;
    player.id = myID;
    player.nickname = document.getElementById('name').value;
    players[myID] = player;
    socket.emit('newPlayer', player);
    connect.style.display = 'none';
    wait.style.display = 'block';
    //input.style.display = 'block';
}

input.onsubmit = function(e){
    e.preventDefault();
    panstwo = document.getElementById('panstwo').value;
    miasto = document.getElementById('miasto').value;
    placeholder = document.getElementById('placeholder').value;
    player.answers = [panstwo, miasto, placeholder];
    players[myID] = player;
    socket.emit('input', {id: myID, answers: player.answers});
    input.style.display = 'none';
    wait.style.display = 'block';
}

socket.on('ready', function() {
    console.log("both players are ready");
    wait.style.display = 'none';
    input.style.display = 'block';
})