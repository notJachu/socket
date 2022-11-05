let player = {
    nickname: "",
    id: "",
    score: 0,
    answers: [],
    isHost: false
};

let set = {};

let players = {}; // key is player.id

function getInput(){
// form html + submit bttn

}

function compareStrings(data, answers){
//keyed set word is key and count is value
    data.forEach(element => {
        set[element] = (set[element] + 1) || 1;
    });
    answers.forEach(element => {
        set[element] = (set[element] + 1) || 1;
    });
    console.log(set);
    delete set;
}

function getScore(){
//15 ptk tylko ty masz a reszta ma zle
//10 ptk jeszcze jeden ma
//5ptk kilka ma
//0ptk źle

}

function drawScore(catCount){
    const res = document.getElementById('results');
    const tbl = document.createElement("table");
    for(let i in players){
        console.log(i);
        console.log(players[i]);
        const row = document.createElement("tr");
        const title = document.createElement("th");
        const titleText = document.createTextNode(players[i].nickname);
        title.appendChild(titleText);
        row.appendChild(title);
        for(let j = 0; j < catCount; j++){
            const cell = document.createElement("td");
            const cellText = document.createTextNode(players[i].answers[j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
    res.appendChild(tbl);
    res.style.display = 'block';
}