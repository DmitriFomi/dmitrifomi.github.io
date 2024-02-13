let boards = document.getElementsByClassName("boardPos"); 
let startGameBtn = document.getElementById("startGame");
let playerChanged = document.getElementById("firstPlayer");
let currentPlayer = document.getElementById("currentPlayer");
let player = "X"; // Kas X või O
let winnerFound = false; // 2 olekud kas olemas või ei ole
let boardStatus = document.getElementById("boardStatus");
let gameStatusFull = document.getElementById("gameStatusFull");
let restartGame = document.getElementById("restartGame");
/*
    Mängu laud kooseb 9 elemendist 1 -> 9
    List näeb neid 0 -> 8
*/

// boards[0] == kasutaja positsioon 1

function CheckPlayer() {
    let playerChangedValue = playerChanged.value;
    if(playerChangedValue.toUpperCase() == "X" || playerChangedValue.toUpperCase() == "O") {
        player = playerChangedValue.toUpperCase();
        startGameBtn.disabled = false;
    } else {
        startGameBtn.disabled = true;
    }
}

function StartGame() {
    // Lisame igale positsioonile vajutamise võimaluse
    for(let i = 0; i < boards.length; i++) {
        boards[i].onclick = function() {ChangeBoardPos(i)};
    }
    startGameBtn.disabled = true;
    playerChanged.disabled = true;
    currentPlayer.innerHTML = player;
    boardStatus.innerHTML = "Next";
    gameStatusFull.style.display = "block";
}

function RestartGame() {
    startGameBtn.disabled = true;
    playerChanged.disabled = false;
    restartGame.disabled = true;
    gameStatusFull.style.display = "none";
    playerChanged.value = "";
    winnerFound = false;
    for(let i = 0; i < boards.length; i++) {
        boards[i].onclick = function() {};
        boards[i].innerHTML = "";
        boards[i].classList.remove("winner");
    }
}

function ChangeBoardPos(pos) {
    // Kas antud positsioon on tühi
    if(!winnerFound) {
        if(boards[pos].innerHTML.length == 0) {
            // Käigu tegemine ALGUS
            boards[pos].innerHTML = player;
            // LÕPP
            // Kontrolli kes on võitja ALGUS
            winnerFound = CheckWinner();
            if(winnerFound) {
                boardStatus.innerHTML = "Winner";
                restartGame.disabled = false;
            }
            
            // LÕPP

            // Mängija vahetus ALGUS
            if(!winnerFound) {
                if(player == "X") {
                    player = "O";
                } else {
                    player = "X";
                }
                currentPlayer.innerHTML = player;
            }
            
            // LÕPP
        }
    }
}

function CheckWinner() {
    // 3 samat elemenit järjest
    // and ja or x == x && x == o
    //              1   &&   0 ===> 0
    if(boards[0].innerHTML == boards[1].innerHTML && boards[0].innerHTML == boards[2].innerHTML && boards[0].innerHTML != "") {
        boards[0].classList.add("winner");
        boards[1].classList.add("winner");
        boards[2].classList.add("winner");
        return true;
    } else if(boards[3].innerHTML == boards[4].innerHTML && boards[3].innerHTML == boards[5].innerHTML && boards[3].innerHTML != "") {
        boards[3].classList.add("winner");
        boards[4].classList.add("winner");
        boards[5].classList.add("winner");
        return true;
    } else if(boards[6].innerHTML == boards[7].innerHTML && boards[6].innerHTML == boards[8].innerHTML && boards[6].innerHTML != "") {
        boards[6].classList.add("winner");
        boards[7].classList.add("winner");
        boards[8].classList.add("winner");
        return true;
    } else if(boards[0].innerHTML == boards[3].innerHTML && boards[0].innerHTML == boards[6].innerHTML && boards[0].innerHTML != "") {
        boards[0].classList.add("winner");
        boards[3].classList.add("winner");
        boards[6].classList.add("winner");
        return true;
    } else if(boards[1].innerHTML == boards[4].innerHTML && boards[1].innerHTML == boards[7].innerHTML && boards[1].innerHTML != "") {
        boards[1].classList.add("winner");
        boards[4].classList.add("winner");
        boards[7].classList.add("winner");
        return true;
    } else if(boards[2].innerHTML == boards[5].innerHTML && boards[2].innerHTML == boards[8].innerHTML && boards[2].innerHTML != "") {
        boards[2].classList.add("winner");
        boards[5].classList.add("winner");
        boards[8].classList.add("winner");
        return true;
    } else if(boards[0].innerHTML == boards[4].innerHTML && boards[0].innerHTML == boards[8].innerHTML && boards[0].innerHTML != "") {
        boards[0].classList.add("winner");
        boards[4].classList.add("winner");
        boards[8].classList.add("winner");
        return true;
    } else if(boards[2].innerHTML == boards[4].innerHTML && boards[2].innerHTML == boards[6].innerHTML && boards[2].innerHTML != "") {
        boards[2].classList.add("winner");
        boards[4].classList.add("winner");
        boards[6].classList.add("winner");
        return true;
    }
    return false;
}