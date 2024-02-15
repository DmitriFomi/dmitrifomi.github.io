let boards = document.getElementsByClassName("boardPos"); 
let startGameBtn = document.getElementById("startGame");
let playerChanged = document.getElementById("firstPlayer");
let currentPlayer = document.getElementById("currentPlayer");
let player = "X"; // Kas X või O
let winnerFound = false; // 2 olekud kas olemas või ei ole
let isTie = false;
let boardStatus = document.getElementById("boardStatus");
let gameStatusFull = document.getElementById("gameStatusFull");
let restartGame = document.getElementById("restartGame");
let pastGamesEl = document.getElementById("pastGames");
let currentGameEl = document.getElementById("currentGame");
let pastGames = []; 
let winnerPos = [];
let aiMoving = false;

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
        boards[i].onclick = function() {ChangeBoardPos(i, true)};
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
    isTie = false;
    winnerPos = [];
    for(let i = 0; i < boards.length; i++) {
        boards[i].onclick = function() {};
        boards[i].innerHTML = "";
        boards[i].classList.remove("winner");
    }
}

function ChangeBoardPos(pos, playerMove) {
    // Kas antud positsioon on tühi
    if(!winnerFound) {
        if(boards[pos].innerHTML.length == 0) {
            // Käigu tegemine ALGUS
            boards[pos].innerHTML = player;
            // LÕPP
            // Kontrolli kes on võitja ALGUS
            winnerFound = CheckWinner();
            if(!winnerFound) {
                isTie = CheckTie();
            }
            
            if(winnerFound) {
                boardStatus.innerHTML = "Winner";
                restartGame.disabled = false;
                SaveGame();
            } else if (isTie) {
                boardStatus.innerHTML = "Winner";
                currentPlayer.innerHTML = "None";
                restartGame.disabled = false;
                SaveGame();
            }
            
            // LÕPP

            // Mängija vahetus ALGUS
            if(!winnerFound && !isTie) {
                if(player == "X") {
                    player = "O";
                } else {
                    player = "X";
                }
                currentPlayer.innerHTML = player;
                if(playerMove) {
                    ChangeBoardPos(AiMove(), false);
                }
                
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
        winnerPos = [0, 1, 2];
        return true;
    } else if(boards[3].innerHTML == boards[4].innerHTML && boards[3].innerHTML == boards[5].innerHTML && boards[3].innerHTML != "") {
        winnerPos = [3, 4, 5];
        return true;
    } else if(boards[6].innerHTML == boards[7].innerHTML && boards[6].innerHTML == boards[8].innerHTML && boards[6].innerHTML != "") {
        winnerPos = [6, 7, 8];
        return true;
    } else if(boards[0].innerHTML == boards[3].innerHTML && boards[0].innerHTML == boards[6].innerHTML && boards[0].innerHTML != "") {
        winnerPos = [0, 3, 6];
        return true;
    } else if(boards[1].innerHTML == boards[4].innerHTML && boards[1].innerHTML == boards[7].innerHTML && boards[1].innerHTML != "") {
        winnerPos = [1, 4, 7];
        return true;
    } else if(boards[2].innerHTML == boards[5].innerHTML && boards[2].innerHTML == boards[8].innerHTML && boards[2].innerHTML != "") {
        winnerPos = [2, 5, 8];
        return true;
    } else if(boards[0].innerHTML == boards[4].innerHTML && boards[0].innerHTML == boards[8].innerHTML && boards[0].innerHTML != "") {
        winnerPos = [0, 4, 8];
        return true;
    } else if(boards[2].innerHTML == boards[4].innerHTML && boards[2].innerHTML == boards[6].innerHTML && boards[2].innerHTML != "") {
        winnerPos = [2, 4, 6];
        return true;
    }
    return false;
}

function AiCheckWinner(currentBoard) {
    if(currentBoard[0] == currentBoard[1] && currentBoard[0] == currentBoard[2] && currentBoard[0] != "") {
        return true;
    } else if(currentBoard[3] == currentBoard[4] && currentBoard[3] == currentBoard[5] && currentBoard[3] != "") {
        return true;
    } else if(currentBoard[6] == currentBoard[7] && currentBoard[6] == currentBoard[8] && currentBoard[6] != "") {
        return true;
    } else if(currentBoard[0] == currentBoard[3] && currentBoard[0] == currentBoard[6] && currentBoard[0] != "") {
        return true;
    } else if(currentBoard[1] == currentBoard[4] && currentBoard[1] == currentBoard[7] && currentBoard[1] != "") {
        return true;
    } else if(currentBoard[2] == currentBoard[5] && currentBoard[2] == currentBoard[8] && currentBoard[2] != "") {
        return true;
    } else if(currentBoard[0] == currentBoard[4] && currentBoard[0] == currentBoard[8] && currentBoard[0] != "") {
        return true;
    } else if(currentBoard[2] == currentBoard[4] && currentBoard[2] == currentBoard[6] && currentBoard[2] != "") {
        return true;
    }
    return false;
}

function CheckTie() {
    let currentBoard = [];
    for(let i = 0; i < boards.length; i++) {
        currentBoard.push(boards[i].innerHTML);
    }
    if(currentBoard.indexOf("") == -1) {
        return true;
    }

    return false;    
}

function SaveGame() {
    let currentBoard = [];
    for(let i = 0; i < winnerPos.length; i++) {
        boards[winnerPos[i]].classList.add("winner");
    }

    for(let i = 0; i < boards.length; i++) {
        currentBoard.push(boards[i].innerHTML);
    }

    /*if(isTie) {
        pastGames.push({
            winner: "None",
            board: currentBoard,
            winnerPos: winnerPos
        });
    } else {
        pastGames.push({
            winner: player,
            board: currentBoard,
            winnerPos: winnerPos
        });
    }*/

    // if loogika ehk küsimus ? true : false
    pastGames.push({
        winner: isTie ? "None" : player,
        board: currentBoard,
        winnerPos: winnerPos
    });
}

function AiMove() {
    let currentBoard = [];
    let move = -1;
    for(let i = 0; i < boards.length; i++) {
        currentBoard.push(boards[i].innerHTML);
    }


    // Otsi kaotamise koht
    for(let i = 0; i < currentBoard.length; i++) {
        if(currentBoard[i].length == 0) {
            currentBoard[i] = "X";
            if(AiCheckWinner(currentBoard)) {
                move = i;
            }
            currentBoard[i] = "";
        }
    }

    // Otsi parem koht
    for(let i = 0; i < currentBoard.length; i++) {
        if(currentBoard[i].length == 0) {
            currentBoard[i] = "O";
            if(AiCheckWinner(currentBoard)) {
                move = i;
            }
            currentBoard[i] = "";
        }
    }

    // Kui paremat kohta ei ole tee suvaline käik
    if(move == -1) {
        while(true) {
            move = GenerateRandomNumber(0, currentBoard.length);
            console.log("AI move: " + move);
            if(currentBoard[move].length == 0) {
                break;
            }
        }
    }
    
    return move;
}

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}