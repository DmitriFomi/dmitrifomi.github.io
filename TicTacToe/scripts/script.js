let player = "X";
let player1First = false;
let gridPlaces = document.getElementsByClassName("tictactoegrid");
let disable = false;
let tie = false;
let name1 = "";
let name2 = "";
let winners = [];
let winnerPos = [];
SetClickEvent();


function PastGames() {
    let winnerBoard = [];
    for(let i = 0; i < gridPlaces.length; i++) {
        winnerBoard.push(gridPlaces[i].innerHTML);
    }
    winners.push({
        Winner: tie ? "TIE" : document.getElementById("player1Move").innerHTML == player ? name1 : name2,
        Symbol: tie ? "" : player,
        GameBoard: winnerBoard,
        WinnerPos: winnerPos
    });

    let cardCont = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardGameBoard = document.createElement("div");

    cardCont.classList.add("card");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("text-center");
    cardGameBoard.classList.add("card-text");
    cardGameBoard.classList.add("text-center");
    cardGameBoard.classList.add("containerTicTacToe");

    let lastResult = winners[winners.length - 1];
    cardTitle.innerHTML = lastResult.Winner == "TIE" ? lastResult.Winner : `Winner: ${lastResult.Winner} (${lastResult.Symbol})`;
    let tictactoerow = null;
    for(let i = 0; i < lastResult.GameBoard.length; i++) {
        /*
            i = 0 % 3 = 0
            i = 1 % 3 = 1
            i = 2 % 3 = 2
            i = 3 % 3 = 0
            i = 4 % 3 = 1
            i = 5 % 3 = 2
            i = 6 % 3 = 0
            i = 7 % 3 = 1
            i = 8 % 3 = 2
            i = 153 % 3 = 0
            i = 247 % 8 = 7
            i = 248 % 8 = 0
        */
        if(i % 3 == 0) { // Moodul 
            tictactoerow = document.createElement("div");
            tictactoerow.classList.add("row");
            tictactoerow.classList.add("tictactoerow");
            cardGameBoard.appendChild(tictactoerow);
        }
        let tictactoegridLeader = document.createElement("div");
        tictactoegridLeader.classList.add("col-4");
        tictactoegridLeader.classList.add("tictactoegridLeader");
        if(lastResult.WinnerPos.indexOf(i) > -1) {
            tictactoegridLeader.classList.add("winner");
        } else if(lastResult.Winner == "TIE") {
            tictactoegridLeader.classList.add("tie");
        }
        tictactoegridLeader.innerHTML = lastResult.GameBoard[i];
        tictactoerow.appendChild(tictactoegridLeader);
    }
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardGameBoard);
    cardCont.appendChild(cardBody);
    document.getElementById("pastGames").appendChild(cardCont);
}

function PlayerClicked(pos) {
    if(!disable) {
        if(gridPlaces[pos].innerHTML.length == 0) {
            gridPlaces[pos].innerHTML = player;
            Victory(false);
            if(!disable) {
                Tie();
            }
            
            if(!disable && !tie) {
                if(player == "X") {
                    player = "O";
                    Npc();
                } else {
                    player = "X";
                }   
            }
             
        } else {
            if(player == "O") {
                Npc();
            }
        }
    }

    
}

function SetClickEvent() {
    for(let i = 0; i < gridPlaces.length; i++) {
        gridPlaces[i].onclick = function() {PlayerClicked(i)};
    }
}

function Victory(npc) {
    if(gridPlaces[0].innerHTML == gridPlaces[1].innerHTML && gridPlaces[0].innerHTML == gridPlaces[2].innerHTML && gridPlaces[0].innerHTML.length != 0) {
        if(!npc) {
            winnerPos = [0, 1, 2];
            gridPlaces[0].classList.add("winner");
            gridPlaces[1].classList.add("winner");
            gridPlaces[2].classList.add("winner");
            disable = true;
        } else {
            return true;
        }
    } else if(gridPlaces[3].innerHTML == gridPlaces[4].innerHTML && gridPlaces[3].innerHTML == gridPlaces[5].innerHTML && gridPlaces[3].innerHTML.length != 0) {
        if(!npc) {
            winnerPos = [3, 4, 5];
            gridPlaces[3].classList.add("winner");
            gridPlaces[4].classList.add("winner");
            gridPlaces[5].classList.add("winner");
            disable = true;
        } else {
            return true;
        }
        
    } else if(gridPlaces[6].innerHTML == gridPlaces[7].innerHTML && gridPlaces[6].innerHTML == gridPlaces[8].innerHTML && gridPlaces[6].innerHTML.length != 0) {
        if(!npc) {
            winnerPos = [6, 7, 8];
            gridPlaces[6].classList.add("winner");
            gridPlaces[7].classList.add("winner");
            gridPlaces[8].classList.add("winner");
            disable = true;
        } else {
            return true;
        }
        
    } else if(gridPlaces[0].innerHTML == gridPlaces[3].innerHTML && gridPlaces[0].innerHTML == gridPlaces[6].innerHTML && gridPlaces[0].innerHTML.length != 0) {
        if(!npc) {
            winnerPos = [0, 3, 6];
            gridPlaces[0].classList.add("winner");
            gridPlaces[3].classList.add("winner");
            gridPlaces[6].classList.add("winner");
            disable = true;
        } else {
            return true;
        }
        
        
    } else if(gridPlaces[1].innerHTML == gridPlaces[4].innerHTML && gridPlaces[1].innerHTML == gridPlaces[7].innerHTML && gridPlaces[1].innerHTML.length != 0) {
        if(!npc) {
            winnerPos = [1, 4, 7];
            gridPlaces[1].classList.add("winner");
            gridPlaces[4].classList.add("winner");
            gridPlaces[7].classList.add("winner");
            disable = true;
        } else {
            return true;
        }
        
    } else if(gridPlaces[2].innerHTML == gridPlaces[5].innerHTML && gridPlaces[2].innerHTML == gridPlaces[8].innerHTML && gridPlaces[2].innerHTML.length != 0) {
        if(!npc) {
            winnerPos = [2, 5, 8];
            gridPlaces[2].classList.add("winner");
            gridPlaces[5].classList.add("winner");
            gridPlaces[8].classList.add("winner");
            disable = true;
        } else {
            return true;
        }
        
    } else if(gridPlaces[0].innerHTML == gridPlaces[4].innerHTML && gridPlaces[0].innerHTML == gridPlaces[8].innerHTML && gridPlaces[0].innerHTML.length != 0) {
        if(!npc) {
            winnerPos = [0, 4, 8];
            gridPlaces[0].classList.add("winner");
            gridPlaces[4].classList.add("winner");
            gridPlaces[8].classList.add("winner");
            disable = true;
        } else {
            return true;
        }
        
    } else if(gridPlaces[2].innerHTML == gridPlaces[4].innerHTML && gridPlaces[2].innerHTML == gridPlaces[6].innerHTML && gridPlaces[2].innerHTML.length != 0) {
        
        if(!npc) {
            winnerPos = [2, 4, 6];
            gridPlaces[2].classList.add("winner");
            gridPlaces[4].classList.add("winner");
            gridPlaces[6].classList.add("winner");
            disable = true;
        } else {
            return true;
        }
    }
}

function Tie(){
    let freeSpace = false;
    for(let i = 0; i < gridPlaces.length; i++) {
        if(gridPlaces[i].innerHTML.length == 0) {
            freeSpace = true;
        }
    }
    tie = !freeSpace; // Tie is when we DID NOT find free space
    if(tie) {
        for(let i = 0; i < gridPlaces.length; i++) {
            gridPlaces[i].classList.add("tie");
        }
    }
}

function Players() {
    name1 = document.getElementById("player1").value;
    name2 = document.getElementById("player2").value;

    let firstMove = GenerateRandomNumber(1, 3);
    player1First = (firstMove == 1);
    if(firstMove == 1) {
        document.getElementById("player1Move").innerHTML = "X";
        document.getElementById("player2Move").innerHTML = "O";
    } else {
        document.getElementById("player1Move").innerHTML = "O";
        document.getElementById("player2Move").innerHTML = "X";
    }
}

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Npc() {
    let npcMove = GenerateRandomNumber(0, 9);
    for(let i = 0; i < gridPlaces.length; i++) {
        if(gridPlaces[i].innerHTML.length == 0) {
            gridPlaces[i].innerHTML = "X";
            let foundWin = Victory(true);
            gridPlaces[i].innerHTML = "";
            if(foundWin) {
                npcMove = i;
                break;
            }
        }
    }

    for(let i = 0; i < gridPlaces.length; i++) {
        if(gridPlaces[i].innerHTML.length == 0) {
            gridPlaces[i].innerHTML = player;
            let foundWin = Victory(true);
            gridPlaces[i].innerHTML = "";
            if(foundWin) {
                npcMove = i;
                break;
            }
        }
    }
    if(!disable && !tie) {
        PlayerClicked(npcMove);
    }
}

function RestartBtn() {
    // Empty game board
    if(disable || tie) {
        PastGames();
    }
    for(let i = 0; i < gridPlaces.length; i++) {
        gridPlaces[i].innerHTML = "";
        gridPlaces[i].classList.remove("winner");
        gridPlaces[i].classList.remove("tie");
    }

    Players();
    disable = false;
    player = "X";
    winnerPos = [];
}

/*
function fibonacci(n) {
    console.log(n);
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }
 
 console.log(fibonacci(10) + " / " + fibonacci(3))*/