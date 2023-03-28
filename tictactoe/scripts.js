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
var gameBoard = ["", "", "", "", "", "", "", "", ""]; // Tühi string
// ["", "", "", "", "", "", "", "", ""] - Tühi
// ["", "", "", "", "", "", "", "", "x"] - Mäng poole peal
// ["x", "0", "x", "x", "0", "x", "x", "0", "x"] - Täis

// Valitud kasti lisame X või O
function MakeMove(pos) {
    if(gameBoard[pos].length == 0) {
        tiles[pos].innerHTML = player;
        gameBoard[pos] = player;
        CheckWinner();
        if(player == "X") {
            tiles[pos].classList.add("tileX");
            player = "O";
        } else {
            player = "X";
            tiles[pos].classList.add("tileO");
        }
        document.getElementById("palyer").innerHTML = player;
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
}

function NoWinner() {
    document.getElementById("winner").innerHTML = "Tie";
    document.getElementById("winnerDiv").style.display = "block";
}


for(let i = 0; i < tiles.length; i++) { // Loop all elements.
    tiles[i].addEventListener('click', function() {
        MakeMove(i);
    });
}
