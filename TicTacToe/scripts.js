let player = "";
let canPlay = false;
let winner = false;
let tie = false;
let aiMoving = false;

function Player1Changed() {
    let player1 = document.getElementById("player1").value;
    let player2 = document.getElementById("player2").value;
    if(player1 == "O") {
        document.getElementById("player2").value = "X";
    } else {
        document.getElementById("player2").value = "O";
    }
}

function StartGame() {
    let player1 = document.getElementById("player1");
    let playButton = document.getElementById("playButton");
    player1.disabled = true;
    playButton.disabled = true;
    player = player1.value;
    canPlay = true;
}

function MakeMove(pos) {
    if(canPlay && !winner && !tie) {
        let positions = document.getElementsByClassName("position");
        if(positions[pos].innerHTML.length == 0) {
            positions[pos].innerHTML = player;
            CheckWinner();
            if(canPlay && !winner && !tie) {
                if(player == "X") {
                    player = "O";
                } else {
                    player = "X";
                }
                if(document.getElementById("player1").value != player)  {
                    AiMove();
                }
            }
        }
    }
}

// Recursive Function

function CheckWinner() {
    /*
        X "" ""
        0 && 0 && 1 -> 0

        "" "" ""
        0 && 1 && 1 -> 0

        "" X ""
        1 && 0 && 0 -> 0

        X X X
        1 && 1 && 1 -> 1
    */
    let positions = document.getElementsByClassName("position");
    let winnerPos = [-1, -1, -1];
    if(positions[0].innerHTML != "" && positions[0].innerHTML == positions[1].innerHTML && positions[1].innerHTML == positions[2].innerHTML) {
        winnerPos = [0, 1, 2];
    } else if(positions[3].innerHTML != "" && positions[3].innerHTML == positions[4].innerHTML && positions[4].innerHTML == positions[5].innerHTML) {
        winnerPos = [3, 4, 5];
    } else if(positions[6].innerHTML != "" && positions[6].innerHTML == positions[7].innerHTML && positions[7].innerHTML == positions[8].innerHTML) {
        winnerPos = [6, 7, 8];
    } else if(positions[0].innerHTML != "" && positions[0].innerHTML == positions[3].innerHTML && positions[3].innerHTML == positions[6].innerHTML) {
        winnerPos = [0, 3, 6];
    } else if(positions[0].innerHTML != "" && positions[0].innerHTML == positions[4].innerHTML && positions[4].innerHTML == positions[8].innerHTML) {
        winnerPos = [0, 4, 8];
    } else if(positions[2].innerHTML != "" && positions[2].innerHTML == positions[4].innerHTML && positions[4].innerHTML == positions[6].innerHTML) {
        winnerPos = [2, 4, 6];
    } else if(positions[1].innerHTML != "" && positions[1].innerHTML == positions[4].innerHTML && positions[4].innerHTML == positions[7].innerHTML) {
        winnerPos = [1, 4, 7];
    } else if(positions[2].innerHTML != "" && positions[2].innerHTML == positions[5].innerHTML && positions[5].innerHTML == positions[8].innerHTML) {
        winnerPos = [2, 5, 8];
    }

    if(winnerPos[0] != -1) {
        winner = true;
        for(let i = 0; i < winnerPos.length; i++) {
            positions[winnerPos[i]].classList.add("winner");
        }
    }

    let isEmpty = false;
    for(let i = 0; i < positions.length; i++) {
        if(positions[i].innerHTML == "") {
            isEmpty = true;
            break;
        }
    }

    if(!isEmpty) {
        tie = true;
    }

}

function AiMove() {
    let positions = document.getElementsByClassName("position");
    let move = AiCheckWinner(); // Random number 0 -> 8
    if(move == -1) {
        while(true) {
            move = Math.floor(Math.random() * 9);
            if(positions[move].innerHTML.length == 0) {
                MakeMove(move);
                break;
            }
        }   
    } else {
        MakeMove(move);
    }
 
}

function AiCheckWinner() {
    let positions = document.getElementsByClassName("position");
    let copyBoard = [];
    for(let i = 0; i < positions.length; i++) {
        copyBoard.push(positions[i].innerHTML);
    }

    let currentMove = player;
    let enemyWin = -1;
    let aiWin = -1;

    if(player == "X") {
        player = "O";
    } else {
        player = "X";
    }

    // Find position where AI would lose
    for(let i = 0; i < copyBoard.length; i++) {
        if(copyBoard[i] == "") {
            copyBoard[i] = player;
            if(AIWinnerLogic(copyBoard)) {
                copyBoard[i] = "";
                enemyWin = i;
                break;
            }
            copyBoard[i] = "";
        }
    }

    player = currentMove;

    // Find position where AI would WIN
    for(let i = 0; i < copyBoard.length; i++) {
        if(copyBoard[i] == "") {
            copyBoard[i] = player;
            if(AIWinnerLogic(copyBoard)) {
                aiWin = i;
                break;
            }
            copyBoard[i] = "";
        }
    }

    if(aiWin != -1) {
        return aiWin;
    }

    return enemyWin;
}

function AIWinnerLogic(copyBoard) {
    if(copyBoard[0] != "" && copyBoard[0] == copyBoard[1] && copyBoard[1] == copyBoard[2]) {
        return true;
    } else if(copyBoard[3] != "" && copyBoard[3] == copyBoard[4] && copyBoard[4] == copyBoard[5]) {
        return true;
    } else if(copyBoard[6] != "" && copyBoard[6] == copyBoard[7] && copyBoard[7] == copyBoard[8]) {
        return true;
    } else if(copyBoard[0] != "" && copyBoard[0] == copyBoard[3] && copyBoard[3] == copyBoard[6]) {
        return true;
    } else if(copyBoard[0] != "" && copyBoard[0] == copyBoard[4] && copyBoard[4] == copyBoard[8]) {
        return true;
    } else if(copyBoard[2] != "" && copyBoard[2] == copyBoard[4] && copyBoard[4] == copyBoard[6]) {
        return true;
    } else if(copyBoard[1] != "" && copyBoard[1] == copyBoard[4] && copyBoard[4] == copyBoard[7]) {
        return true;
    } else if(copyBoard[2] != "" && copyBoard[2] == copyBoard[5] && copyBoard[5] == copyBoard[8]) {
        return true;
    }  
    return false;
}

/*
    TO-DO - Restart button
        Restore values as they were before start
*/