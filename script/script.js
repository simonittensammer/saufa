let playerNameInputs = document.getElementById('playerNameInputs');

let playerNameInput = '<input type="text" class="playerNameInput" placeholder="Player Name">';
let playerNames = [];

for(let i = 0; i < 2; i++) {
    playerNameInputs.innerHTML += playerNameInput;
}

function addPlayerNameInput() {
    playerNames = []
    playerNameInputs.childNodes.forEach(getInputValues);

    playerNameInputs.innerHTML += playerNameInput;

    playerNameInputs.childNodes.forEach(setInputValues);
}

function startGame() {
    playerNames = []
    playerNameInputs.childNodes.forEach(getInputValues);
    playerNames = playerNames.filter(element => {
        return element != null && element != '';
    });
    
    console.log(playerNames);
}

function getInputValues(element, index) {
    playerNames.push(element.value)
}

function setInputValues(element, index) {
    if (playerNames[index]) {
        element.value = playerNames[index];
    }
}