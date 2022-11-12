var socket = io('http://localhost:3000');
//const count = document.getElementById('count');
//const input = document.getElementById('info');
//const message = document.getElementById('message');
//const button = document.getElementById('send');
//const set1 = document.getElementById('set1');
const input = document.getElementById('input');
const connect = document.getElementById('connect');
const wait = document.getElementById('wait');
var p2 = false;

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

// socket.on('playerData', data => {
//     player = data;
//     console.log(player);
// })

// function getSet(){
//     socket.emit('set1');
// }

// socket.on('set', (data) => {
//     console.log(data);
//     compareStrings(data, player.answers)
// })

// socket.on('playerData', data => {
//     player = data;
//     console.log(player);
//     players[player.id];
//     p2 = true;
// })


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
    socket.emit('input', players[myID]);
    input.style.display = 'none';
    wait.style.display = 'block';
    // socket.on('playerData', (data) => {
    //     console.log(data);
    //     players = data;
    //     console.log(players);
    // })
    // socket.on('playerData', (data) => {
    //     p2 = true;
    //     players[data.id] = data;
    // })
    // socket.on('playerData', data => {
    //     player = data;
    //     console.log(player);
    //     players[player.id];
    //     p2 = true;
    // })
    

    // if(p2){
    //     console.log(players);
    //     wait.style.display = 'none';
    //     drawScore(3);
    // }

    // else{
    //     socket.on('playerData', (data) => {
    //         console.log(data);
    //         players[data.id] = data;
    //         wait.style.display = 'none';
    //         drawScore(3);
    //     })
    // }

    socket.on('playerData', (data) => {
        wait.style.display = 'none';
        console.log(data);
        players = data;
        console.log(players);
        drawScore(3);
    })

}

// socket.on('playerData', (data) => {
//     p2 = true;
//     console.log(data);
//     players[data.id] = data;
// })


socket.on('ready', function() {
    console.log("both players are ready");
    wait.style.display = 'none';
    input.style.display = 'block';
})