let boardElements = null;
let player = "X";
let winner = false;
let playing = false;
let winnerText = null;
let playerX = "";
let playerO = "";

$(document).ready(function() {
    boardElements = document.getElementsByClassName("board");
    winnerText = document.getElementById("winnerText");
});

function MakeMove(pos) {
    if(!winner && playing) {
            if(boardElements[pos].innerHTML.length == 0) {
                boardElements[pos].innerHTML = player;
                let winnerOutcome = CheckWinner();
                if(winnerOutcome != null) {
                    MarkWinners(winnerOutcome);
                    winner = true;
                    if(winnerOutcome.Winner) {
                        winnerText.innerHTML = "Winner is " + player;
                    } else {
                        winnerText.innerHTML = "TIE";
                    }
                } else {
                    if(player == "X") {
                        player = "O";
                    } else {
                        player = "X";
                    }
                }
            }
    }
}

function CheckWinner() {
    // | | 
    // true && true && false -> False
    // 1 && 1 && 0 -> 0

    // |X| 
    // false && true && false -> False
    // 0 && 1 && 0 -> 0

    // X| | 
    // false && false && true -> False
    // 0 && 0 && 1 -> 0

    // X|X| 
    // true && false && true -> False
    // 1 && 0 && 1 -> 0

    // X|X|X
    // true && true && true -> True
    // 1 && 1 && 1 -> 1

    let output = null;

    if(boardElements[0].innerHTML == boardElements[1].innerHTML && boardElements[0].innerHTML == boardElements[2].innerHTML && boardElements[0].innerHTML.length != 0) {
        output = {
            "Winner": true,
            "WinnerPos": [0, 1, 2]
        }
    } else if(boardElements[3].innerHTML == boardElements[4].innerHTML && boardElements[3].innerHTML == boardElements[5].innerHTML && boardElements[3].innerHTML.length != 0) {
        output = {
            "Winner": true,
            "WinnerPos": [3, 4, 5]
        }
    } else if(boardElements[6].innerHTML == boardElements[7].innerHTML && boardElements[6].innerHTML == boardElements[8].innerHTML && boardElements[6].innerHTML.length != 0) {
        output = {
            "Winner": true,
            "WinnerPos": [6, 7, 8]
        }
    } else if(boardElements[0].innerHTML == boardElements[3].innerHTML && boardElements[0].innerHTML == boardElements[6].innerHTML && boardElements[0].innerHTML.length != 0) {
        output = {
            "Winner": true,
            "WinnerPos": [0, 3, 6]
        }
    } else if(boardElements[1].innerHTML == boardElements[4].innerHTML && boardElements[1].innerHTML == boardElements[7].innerHTML && boardElements[1].innerHTML.length != 0) {
        output = {
            "Winner": true,
            "WinnerPos": [1, 4, 7]
        }
    } else if(boardElements[2].innerHTML == boardElements[5].innerHTML && boardElements[2].innerHTML == boardElements[8].innerHTML && boardElements[2].innerHTML.length != 0) {
        output = {
            "Winner": true,
            "WinnerPos": [2, 5, 8]
        }
    } else if(boardElements[0].innerHTML == boardElements[4].innerHTML && boardElements[0].innerHTML == boardElements[8].innerHTML && boardElements[0].innerHTML.length != 0) {
        output = {
            "Winner": true,
            "WinnerPos": [0, 4, 8]
        }
    } else if(boardElements[2].innerHTML == boardElements[4].innerHTML && boardElements[2].innerHTML == boardElements[6].innerHTML && boardElements[2].innerHTML.length != 0) {
        output = {
            "Winner": true,
            "WinnerPos": [2, 4, 6]
        }
    } else {
        let tie = true;
        for(let i = 0; i < boardElements.length; i++) {
            if(boardElements[i].innerHTML.length == 0) {
                tie = false;
                break;
            }
        }
        if(tie) {
            output = {
                "Winner": false,
                "WinnerPos": []
            }
        }
    }

    return output;
}

function MarkWinners(winnerOutcome) {
    /*
        {
            "Winner": true,
            "WinnerPos": [0, 3, 6]
        }
    */
    for(let i = 0; i < boardElements.length; i++) {
        if(winnerOutcome.WinnerPos.includes(i)) {
            boardElements[i].classList.add("winner");
        }
    }
}

function StartGame() {
    playing = true;
    document.getElementById("startGame").disabled = true;
    document.getElementById("restartGame").disabled = false;
    playerX = document.getElementById("playerX").value;
    playerO = document.getElementById("playerO").value;
    document.getElementById("playerX").disabled = true;
    document.getElementById("playerO").disabled = true;

    console.log(playerX);
    console.log(playerO);
}

function RestartGame() {
    for(let i = 0; i < boardElements.length; i++) {
        boardElements[i].innerHTML = "";
        boardElements[i].classList.remove("winner");
    }
    winnerText.innerHTML = "";
    player = "X";
    winner = false;
}

function PlayerNameChanged() {
    /*let playerName = document.getElementById(playerID).value;
    players.push({
        "Name": playerName,
        "Symbol": playerID.substring(6, 7)
    });
    console.log(players);*/

    document.getElementById("startGame").disabled = !(document.getElementById("playerX").value.length != 0 && document.getElementById("playerO").value.length != 0);
}
