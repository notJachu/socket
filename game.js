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