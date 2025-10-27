let boardElements = null;
let player = "X";
let winner = false;
let playing = false;
let winnerText = null;
let playerX = "";
let playerO = "";
let history = [];
let conter = 0;

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
                        winnerText.innerHTML = "Winner is " + (player == "X" ? playerX : playerO);
                    } else {
                        winnerText.innerHTML = "TIE";
                    }
                    SaveGame();
                } else {
                    if(player == "X") {
                        player = "O";
                    } else {
                        player = "X";
                    }
                    if(player == "X" && playerX == "AI" || player == "O" && playerO == "AI") {
                        AIMove();
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
        if(tie && boardElements[0].innerHTML.length != 0) {
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

    if(playerX == "AI") {
        AIMove();
    }
}

function RestartGame() {
    for(let i = 0; i < boardElements.length; i++) {
        boardElements[i].innerHTML = "";
        boardElements[i].classList.remove("winner");
    }
    winnerText.innerHTML = "";
    player = "X";
    winner = false;

    if(playerX == "AI") {
        AIMove();
    }
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

function AIMove() {
    let min = 0;
    let max = 9;
    let move = -1;

    if(move == -1) {
        // When AI Wins
        for(let i = 0; i < boardElements.length; i++) {
            if(boardElements[i].innerHTML == 0) {
                boardElements[i].innerHTML = player;
                let tmpWinner = CheckWinner();
                boardElements[i].innerHTML = "";
                if(tmpWinner != null) {
                    move = i;
                    break;
                }
            }
        }
    }

    if(move == -1) {
        // When AI Loses
        for(let i = 0; i < boardElements.length; i++) {
            let humanPlayer = playerX == "AI" ? "O" : "X";
            if(boardElements[i].innerHTML == 0) {
                boardElements[i].innerHTML = humanPlayer;
                let tmpWinner = CheckWinner();
                boardElements[i].innerHTML = "";
                if(tmpWinner != null) {
                    move = i;
                    break;
                }
            }
        }
    }


    if(move == -1) {
        // Random Move
        move = Math.floor(Math.random() * max) + min;
        while(true) {
            if(boardElements[move].innerHTML.length == 0) {
                break;
            }
            move = Math.floor(Math.random() * max) + min;
        }
    }

    MakeMove(move);
}

function SaveGame() {
    let winnerOutcome = CheckWinner();
    let gameBoardHistory = [];
    let winnerName = winnerText.innerHTML ;
    let historyContainer = document.getElementById("history");

    for(let i = 0; i < boardElements.length; i++) {
        gameBoardHistory.push(boardElements[i].innerHTML);
    }

    history.push({
        "GameBoard": gameBoardHistory,
        "Winner": winnerName,
        "WinnerPos": winnerOutcome.WinnerPos
    });

    let lastHistory = history[history.length - 1];

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("historyCard");

    let cont = document.createElement("div");
    let cardBody = document.createElement("div");

    cont.classList.add("container");
    let divRow = null;
    for(let i = 0; i < lastHistory.GameBoard.length; i++) {
        if(i % 3 == 0) {
            divRow = document.createElement("div");
            divRow.classList.add("row");
            cont.appendChild(divRow);
        }
        if(i == 3) {
            divRow.classList.add("midBoardRow");
        }
        let boardDiv = document.createElement("div");
        boardDiv.classList.add("col-4");
        if(i % 3 == 1) {
            boardDiv.classList.add("midBoardCol");
        }
        boardDiv.innerHTML = lastHistory.GameBoard[i];
        if(lastHistory.WinnerPos.includes(i)) {
            boardDiv.classList.add("winner");
        }

        divRow.appendChild(boardDiv);
    }


    cardBody.classList.add("card-body");

    let cardText = document.createElement("p");
    cardText.innerHTML = lastHistory.Winner;
    cardText.classList.add("centerText");
    cardText.classList.add("card-text");

    let replayButton = document.createElement("button");
    replayButton.classList.add("btn");
    replayButton.classList.add("btn-primary");
    replayButton.innerHTML = "Replay";

    card.appendChild(cont);
    cardBody.append(cardText);
    card.appendChild(cardBody);
    card.append(replayButton);
    historyContainer.appendChild(card);

    cont.setAttribute("id", "gameboard-" + conter);
    replayButton.onclick = function() { Replay(0); };


    /*
        <div class="card historyCard">
                
            <div class="container">
                <div class="row">
                    <div class="board col-4">O</div>                        0
                    <div class="board col-4 midBoardCol winner">X</div>     1
                    <div class="board col-4">O</div>                        2
                </div>
                <div class="row midBoardRow">
                    <div class="board col-4"></div>                         3
                    <div class="board col-4 midBoardCol winner">X</div>     4
                    <div class="board col-4"></div>                         5
                </div>
                <div class="row">
                    <div class="board col-4"></div>                         6
                    <div class="board col-4 midBoardCol winner">X</div>     7
                    <div class="board col-4"></div>                         8
                </div>
            </div>

            <div class="card-body">
                <p class="card-text centerText">Winner is AI</p>
            </div>

            <button class="btn btn-primary replaybtn">Replay</button>

        </div>
    */

    console.log(history);
}

function Replay(boardPos) {
    console.log("Replay Board: " + boardPos);
}