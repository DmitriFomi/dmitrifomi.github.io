let boardElements = null;
let player = "X";
let winner = false;
let playing = false;
let winnerText = null;
let playerX = "";
let playerO = "";
let history = [];
let counter = 0;
let allMove = [];
let today = new Date().toLocaleDateString("et-ET");

$(document).ready(function() {
    boardElements = document.getElementsByClassName("board");
    winnerText = document.getElementById("winnerText");

    if(localStorage["History"] != undefined) {
        history = JSON.parse(localStorage["History"]);
    }
    ShowCookieHistory();

});

function MakeMove(pos) {
    if(!winner && playing) {
            if(boardElements[pos].innerHTML.length == 0) {
                boardElements[pos].innerHTML = player;
                SaveCurrentMove();
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

function SaveCurrentMove() {
    let currentBoard = [];
    for(let i = 0; i < boardElements.length; i++) {
        currentBoard.push(boardElements[i].innerHTML);
    }
    allMove.push(currentBoard);
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
    allMove = [];

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
            let humanPlayer = player == "X" ? "O" : "X";
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

function CreateAccordion(uniqueDates) {
    let accGistory = document.getElementById("historyAcc");
    /*
        <div class="accordion" id="historyAcc">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#day1" aria-expanded="true" aria-controls="collapseOne">
                        29.10.2025
                    </button>
                </h2>
                <div id="day1" class="accordion-collapse collapse show" data-bs-parent="#historyAcc">
                    <div class="accordion-body">
                        <div class="containerFlex" id="history1">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    */
    for(let i = 0; i < uniqueDates.length; i++) {

        let accordionItem = document.createElement("div");
        let accordionHeader = document.createElement("h2");
        let accordionButton = document.createElement("button");
        let accordionCollapse = document.createElement("div");
        let accordionBody = document.createElement("div");
        let history = document.createElement("div");

        let accordionID = "day" + i;

        accordionItem.classList.add("accordion-item");
        accordionHeader.classList.add("accordion-header");
        accordionButton.classList.add("accordion-button");
        accordionCollapse.classList.add("collapse");
        accordionCollapse.classList.add("accordion-collapse");
        accordionBody.classList.add("accordion-body");
        history.classList.add("containerFlex");


        accGistory.appendChild(accordionItem);
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionCollapse);
        accordionHeader.appendChild(accordionButton);
        accordionCollapse.appendChild(accordionBody);
        accordionBody.appendChild(history);

        accordionButton.innerHTML = uniqueDates[i];
        accordionButton.setAttribute("type", "button");
        accordionButton.setAttribute("data-bs-toggle", "collapse");
        accordionButton.setAttribute("data-bs-target", "#" + accordionID); // Dynamic Value
        accordionButton.setAttribute("aria-expanded", "false");
        
        accordionCollapse.setAttribute("id", accordionID); // Dynamic Value Same as in row 296
        accordionCollapse.setAttribute("data-bs-parent", "#historyAcc");

        history.setAttribute("id", "history1");  // Dynamic Value
        history.innerHTML = "TO-DO";
    }

}

function ShowCookieHistory() {
    let historyContainer = document.getElementById("history");

    let dates = history.map((item) => {
        return item.Date
    });
    let uniqueDates = [...new Set(dates)];

    CreateAccordion(uniqueDates);

    for(let i = 0; i < history.length; i++) {
        let lastHistory = history[i];

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
            boardDiv.classList.add("gameboard-" + counter);
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

        let currentCounter = counter++;
        replayButton.onclick = function() { Replay(currentCounter); };
    }
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
        "WinnerPos": winnerOutcome.WinnerPos,
        "AllMove": allMove,
        "GamePos": counter,
        "Date": today
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
        boardDiv.classList.add("gameboard-" + counter);
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

    let currentCounter = counter++;
    replayButton.onclick = function() { Replay(currentCounter); };


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

    localStorage["History"] = JSON.stringify(history);
    console.log(history);
}

function Replay(boardPos) {
    let historyBoard = document.getElementsByClassName("gameboard-" + boardPos); // col-4 gameboard-POS
    let currentHistory = history[boardPos];

    // Clear History
    for(let i = 0; i < historyBoard.length; i++) {
        historyBoard[i].innerHTML = "";
        historyBoard[i].classList.remove("winner");
    }

    // Play Slow Game
    for(let i = 0; i < currentHistory.AllMove.length; i++) {
        setTimeout(() => {
            for(let j = 0; j < currentHistory.AllMove[i].length; j++) {
                historyBoard[j].innerHTML = currentHistory.AllMove[i][j];
            }
        }, 1000 * i); // Millisecond 1000 -> 1 sec
    }

    setTimeout(() => {
        for(let i = 0; i < currentHistory.WinnerPos.length; i++) {
            historyBoard[currentHistory.WinnerPos[i]].classList.add("winner");
        }
    }, 1000 * (currentHistory.AllMove.length - 1))

}