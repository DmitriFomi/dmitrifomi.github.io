/*
    Reeglid
    Mängu laud: 3x3 - DONE
        HTML
    Mängijad: 2
        HTML
        Javascript - muutuja
    Mängu elemendid: 2 - X ja O
        Saame võtta sama mis player
    Võitmise tingimused: kolm sama sümbolit järjest
*/

/*
    String: X või O
    Int: 1 või 0
    Bool: False/True
*/

/*
    Alguses teeme staatiliselt ja siis muudame dünaamiliseks
    Dünaamiliseks -> MUUTUJA
*/
var player = "X"; // Kes on esimene?
var tiles = document.getElementsByClassName("tile"); // Array
var gameBoard = ["", "", "", "", "", "", "", "", ""]; // Tühi string. Array, me saame teha PUSH ehk lisada elmente
// Array on staatilised ja sinna ei saa lisada uusi elemente. LIST kus saab lisada ja eemaldada elemente
var gameOver = false;
var winners = []; // {winner: "x", board: [], "winner": "o", board: []}
// ["", "", "", "", "", "", "", "", ""] - Tühi
// ["", "", "", "", "", "", "", "", "x"] - Mäng poole peal
// ["x", "0", "x", "x", "0", "x", "x", "0", "x"] - Täis

// Valitud kasti lisame X või O
function MakeMove(pos) {
    if(!gameOver) {
        if(gameBoard[pos].length == 0) {
            tiles[pos].innerHTML = player;
            gameBoard[pos] = player;
            CheckWinner();
            if(player == "X") {
                tiles[pos].classList.add("tileX");
                player = "O";
                AI();
            } else {
                player = "X";
                tiles[pos].classList.add("tileO");
            }
            document.getElementById("palyer").innerHTML = player;
        }
    }
}

function CheckWinner() {
    if(gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2] && gameBoard[0] != "") {
        WinnerIs(player, 0, 1, 2);
    } else if(gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5] && gameBoard[3] != "") {
        WinnerIs(player, 3, 4, 5);
    } else if(gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8] && gameBoard[6] != "") {
        WinnerIs(player, 6, 7, 8);
    } else if(gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6] && gameBoard[0] != "") {
        WinnerIs(player, 0, 3, 6);
    } else if(gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7] && gameBoard[1] != "") {
        WinnerIs(player, 1, 4, 7);
    } else if(gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8] && gameBoard[2] != "") {
        WinnerIs(player, 2, 5, 8);
    } else if(gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8] && gameBoard[0] != "") {
        WinnerIs(player, 0, 4, 8);
    } else if(gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6] && gameBoard[2] != "") {
        WinnerIs(player, 2, 4, 6);
    } else if(gameBoard.indexOf("") == -1) { // Siis kui kõik on täis. Otsi kindlat String meie Array-st ja tagasta selle asukoht
        NoWinner();
    }
}

function WinnerIs(winner, pos1, pos2, pos3) {
    document.getElementById("winner").innerHTML = "Winner: " + winner;
    document.getElementById("winnerDiv").style.display = "block";
    tiles[pos1].classList.add("gameOver");
    tiles[pos2].classList.add("gameOver");
    tiles[pos3].classList.add("gameOver");
    gameOver = true;
    SaveWinner(winner);
}

function NoWinner() {
    document.getElementById("winner").innerHTML = "Tie";
    document.getElementById("winnerDiv").style.display = "block";
    gameOver = true;
    SaveWinner("Tie");
}

// Winneris ja NoWinner - x
// MakeMove - x

for(let i = 0; i < tiles.length; i++) { // Loop all elements.
    tiles[i].addEventListener('click', function() {
        MakeMove(i);
    });
}

function AI() {
    // Ei tohi samasse kohta lisada O
    // Kui 3 samasugust siis on WINNER
    // Lisa O suvalisse kohta
    // Takistada 3 samat X - see on Advanced AI
    // Vaata kas on võimalik 3 O järjestada
    // Random
    var min = 0;
    var max = 9;
    var randomNumber = -1;
    var foundPlace = false;

    // Block X from 3
    player = "X";
    randomNumber = AIInvisibleMoves(-1); //2
    player = "O";
    randomNumber = AIInvisibleMoves(randomNumber); // -1

    if(randomNumber == -1) {
        while(!foundPlace && !gameOver) { // Tee niikaua kuni on TRUE
            randomNumber = Math.floor(Math.random() * (max - min)) + min;
            foundPlace = gameBoard[randomNumber].length == 0; // Peab olema väljapääs et ei jookseks kokku
        }
    }     
    MakeMove(randomNumber);
}

function AIInvisibleMoves(winnerPos) {
    for(var i = 0; i < gameBoard.length; i++) {
        var aiWinner = false;
        if(gameBoard[i].length == 0) {
            gameBoard[i] = player;
            aiWinner = AICheckWinner();
            if(!aiWinner) {
                gameBoard[i] = "";
            } else {
                gameBoard[i] = "";
                return i;
            }
        }
    }
    return winnerPos;
}

function AICheckWinner() {
    if(gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2] && gameBoard[0] != "") {
        return true;
    } else if(gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5] && gameBoard[3] != "") {
        return true;
    } else if(gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8] && gameBoard[6] != "") {
        return true;
    } else if(gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6] && gameBoard[0] != "") {
        return true;
    } else if(gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7] && gameBoard[1] != "") {
        return true;
    } else if(gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8] && gameBoard[2] != "") {
        return true;
    } else if(gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8] && gameBoard[0] != "") {
        return true;
    } else if(gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6] && gameBoard[2] != "") {
        return true;
    }
    return false;
}


function SaveWinner(winner) {
    winners.push({
        "winner": winner,
        "board": gameBoard
    });
    var cardDiv = document.createElement("div");
    var cardGameBoard = document.createElement("div");
    var cardBody = document.createElement("div");
    var cardWinner = document.createElement("h5");
    let htmlGameBoard = document.getElementById("gameBoard");

    cardDiv.classList.add("card");
    cardBody.classList.add("card-body");
    cardWinner.classList.add("card-title");

    //cardGameBoard.appendChild(htmlGameBoard);
    cardDiv.appendChild(cardGameBoard);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardWinner);
    cardGameBoard.innerHTML = htmlGameBoard.innerHTML;
    //cardGameBoard.innerHTML = '<div class="container"><div class="row"><div class="tile col-4"></div><div class="tile col-4"></div><div class="tile col-4"></div></div><div class="row"><div class="tile col-4"></div><div class="tile col-4"></div><div class="tile col-4"></div></div><div class="row"><div class="tile col-4"></div><div class="tile col-4"></div><div class="tile col-4"></div></div></div>'
    cardWinner.innerHTML = "Winner: " + winner;
    leaderboard.appendChild(cardDiv);
    /*
        JSON
        {
            "KEY": "Value",
            "KEY2": "Value2",
            "KEY3": ["Value1", "Value2"],
            "KEY4": {
                "KEY4_1": "Value"
            }
        }
    */
    // winner.slice(0, 2); kustutamine
    /*
    <div class="card" style="width: 18rem;"> -- cardDiv
        <div class="container"> -- cardGameBoard
            <div class="row">
                <div class="tile col-4"></div>
                <div class="tile col-4"></div>
                <div class="tile col-4"></div>
            </div>
            <div class="row">
                <div class="tile col-4"></div>
                <div class="tile col-4"></div>
                <div class="tile col-4"></div>
            </div>
            <div class="row">
                <div class="tile col-4"></div>
                <div class="tile col-4"></div>
                <div class="tile col-4"></div>
            </div>
        </div>
        <div class="card-body"> -- cardBody
            <h5 class="card-title">Winner: X</h5> -- cardWinner
        </div>
    </div>

    */
}

function Restart() {
    player = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    for(var i = 0; i < tiles.length; i++) {
        tiles[i].innerHTML = "";
        tiles[i].classList.remove("gameOver");
        tiles[i].classList.remove("tileX");
        tiles[i].classList.remove("tileO");
        if(i >= 9) {
            break;
        }
    }
}