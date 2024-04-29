let player = "X";
let player1First = false;
let gridPlaces = document.getElementsByClassName("tictactoegrid");
let disable = false;
let tie = false;
let name1 = "";
let name2 = "";
SetClickEvent();


function PlayerClicked(pos) {

    if(!disable) {
        if(gridPlaces[pos].innerHTML.length == 0) {
            gridPlaces[pos].innerHTML = player;
            if(player == "X") {
                player = "O";
            } else {
                player = "X";
            }    
        } 
        Victory();
        if(!disable) {
            Tie();
        }
    }

    
}

function SetClickEvent() {
    for(let i = 0; i < gridPlaces.length; i++) {
        gridPlaces[i].onclick = function() {PlayerClicked(i)};
    }
}

function Victory() {
    if(gridPlaces[0].innerHTML == gridPlaces[1].innerHTML && gridPlaces[0].innerHTML == gridPlaces[2].innerHTML && gridPlaces[0].innerHTML.length != 0) {
        gridPlaces[0].classList.add("winner");
        gridPlaces[1].classList.add("winner");
        gridPlaces[2].classList.add("winner");
        disable = true;
    } else if(gridPlaces[3].innerHTML == gridPlaces[4].innerHTML && gridPlaces[3].innerHTML == gridPlaces[5].innerHTML && gridPlaces[3].innerHTML.length != 0) {
        gridPlaces[3].classList.add("winner");
        gridPlaces[4].classList.add("winner");
        gridPlaces[5].classList.add("winner");
        disable = true;
    } else if(gridPlaces[6].innerHTML == gridPlaces[7].innerHTML && gridPlaces[6].innerHTML == gridPlaces[8].innerHTML && gridPlaces[6].innerHTML.length != 0) {
        gridPlaces[6].classList.add("winner");
        gridPlaces[7].classList.add("winner");
        gridPlaces[8].classList.add("winner");
        disable = true;
    } else if(gridPlaces[0].innerHTML == gridPlaces[3].innerHTML && gridPlaces[0].innerHTML == gridPlaces[6].innerHTML && gridPlaces[0].innerHTML.length != 0) {
        gridPlaces[0].classList.add("winner");
        gridPlaces[3].classList.add("winner");
        gridPlaces[6].classList.add("winner");
        disable = true;
    } else if(gridPlaces[1].innerHTML == gridPlaces[4].innerHTML && gridPlaces[1].innerHTML == gridPlaces[7].innerHTML && gridPlaces[1].innerHTML.length != 0) {
        gridPlaces[1].classList.add("winner");
        gridPlaces[4].classList.add("winner");
        gridPlaces[7].classList.add("winner");
        disable = true;
    } else if(gridPlaces[2].innerHTML == gridPlaces[5].innerHTML && gridPlaces[2].innerHTML == gridPlaces[8].innerHTML && gridPlaces[2].innerHTML.length != 0) {
        gridPlaces[2].classList.add("winner");
        gridPlaces[5].classList.add("winner");
        gridPlaces[8].classList.add("winner");
        disable = true;
    } else if(gridPlaces[0].innerHTML == gridPlaces[4].innerHTML && gridPlaces[0].innerHTML == gridPlaces[8].innerHTML && gridPlaces[0].innerHTML.length != 0) {
        gridPlaces[0].classList.add("winner");
        gridPlaces[4].classList.add("winner");
        gridPlaces[8].classList.add("winner");
        disable = true;
    } else if(gridPlaces[2].innerHTML == gridPlaces[4].innerHTML && gridPlaces[2].innerHTML == gridPlaces[6].innerHTML && gridPlaces[2].innerHTML.length != 0) {
        gridPlaces[2].classList.add("winner");
        gridPlaces[4].classList.add("winner");
        gridPlaces[6].classList.add("winner");
        disable = true;
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