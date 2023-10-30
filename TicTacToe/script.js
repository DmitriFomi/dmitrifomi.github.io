// Massiivid ehk Array
let name = "Dima";
let city = "Tallinn";
let name2 = "Juku";
let city2 = "Pärnu";

let names = ["Dima" , "Juku"];
let cities = ["Tallinn", "Pärnu"];

console.log(names);
names.push("Mari");
console.log(names);
console.log(names.length)
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// Massiivide lugemine algab "0"
// Viimane element massiivis on pikkus - 1

// sisendid
// mingi muutuja, tavaliselt see on ITERATION ehk i
// Looiline tehe
// tsükli lõppus iteratsiooni suurendamine
for(let i = 0; i < 10; i++) { // FOR tsükell
    console.log(i);
}

// Väga ohtlik
let counter = 0;
while(counter < 10) {
    console.log("Hello");
    counter ++;
}
counter = 0;
while(true) {
    console.log("Hello 2");
    if(counter > 10) {
        break;
    }
    counter++;
}

let globalF = 0;
console.log("VASTUS: " + secondFriend(secondFriend(1, 1), secondFriend(2, 2)));
console.log("GLOBAL: " + globalF);
function secondFriend(x, y) {
    globalF = extraFriend(x, y);
    return extraFriend(x, y);
}

function extraFriend(a, b) {
    return a + b;
}

let marks = "Hello my name is Dmitri and today is good day."
console.log(marks.indexOf("is"));
console.log(marks.substring(5, 2));
console.log(marks.split(" is "));
console.log(cities.join("; "));
console.log(marks.replace("is", "are"));
console.log(marks.replaceAll("is", "are"));
console.log(marks.toLowerCase());
console.log(marks.toUpperCase());
console.log(marks.toUpperCase() == marks.toUpperCase());

// CODE START
let tictactoeElements = document.getElementsByClassName("tictactoeArea");
let playArea = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let winnerFound = false;
document.getElementById("player").innerHTML = player;
console.log(tictactoeElements);
for(let i = 0; i < tictactoeElements.length; i++) { 
    //tictactoeElements[i].id = "pos" + i;
    tictactoeElements[i].onclick = function() {
        MakeMove(i);
    };
}

function MakeMove(pos) {
    if(playArea[pos].length == 0 && !winnerFound) {
        document.getElementsByClassName("tictactoeArea")[pos].innerHTML = player;
        playArea[pos] = player;
        winnerFound = CheckWinner();
        if(winnerFound) {
            document.getElementById("winner").innerHTML = player;
            document.getElementById("moveEl").style.display = "none";
        } else if (CheckTie()) {
            document.getElementById("winner").innerHTML = "TIE";
            document.getElementById("moveEl").style.display = "none";
        } else {
            if(player == "X") {
                player = "O";
            } else {
                player = "X";
            }
            console.log(playArea);
            document.getElementById("player").innerHTML = player;
        }
        //document.getElementById("pos" + pos).innerHTML = "X";
    }
}

// Võitja loogika
// Võitja saab olla 8
// TIE
function CheckWinner() {
    if(playArea[0] == playArea[1] && playArea[1] == playArea[2] && playArea[0] != "") {
        // 1 && 1 && 0 - 0
        // Kas 0 kohal ei ole tühjus
        ChangeColor(0, 1, 2);
        return true;
    } else if(playArea[3] == playArea[4] && playArea[4] == playArea[5] && playArea[3] != "") {
        // 0 && 1 && 1 - 0
        ChangeColor(3, 4, 5);
        return true;
    } else if(playArea[6] == playArea[7] && playArea[7] == playArea[8] && playArea[6] != "") {
        ChangeColor(6, 7, 8);
        return true;
    } else if(playArea[0] == playArea[3] && playArea[3] == playArea[6] && playArea[0] != "") {
        ChangeColor(0, 3, 6);
        return true;
    } else if(playArea[1] == playArea[4] && playArea[4] == playArea[7] && playArea[1] != "") {
        ChangeColor(1, 4, 7);
        return true;
    } else if(playArea[2] == playArea[5] && playArea[5] == playArea[8] && playArea[2] != "") {
        ChangeColor(2, 5, 8);
        return true;
    } else if(playArea[0] == playArea[4] && playArea[4] == playArea[8] && playArea[0] != "") {
        ChangeColor(0, 4, 8);
        return true;
    } else if(playArea[2] == playArea[4] && playArea[4] == playArea[6] && playArea[2] != "") {
        ChangeColor(2, 4, 6);
        return true;
    } else {
        return false;
    }
}

function CheckTie() {
    console.log(playArea.indexOf(""));
    if(playArea.indexOf("") == -1) { // -1 on siis kui seda ei leitud
        return true;
    } else {
        return false;
    }
}

function ChangeColor(pos1, pos2, pos3) {
    let color = "green";
    document.getElementsByClassName("tictactoeArea")[pos1].style.backgroundColor = color;
    document.getElementsByClassName("tictactoeArea")[pos2].style.backgroundColor = color;
    document.getElementsByClassName("tictactoeArea")[pos3].style.backgroundColor = color;
}

/*
    Mängija nime lisamine
    Mängude salvestamine
    AI ehk arvuti vastu mängimine
        Easy - Random positsioon
        Hard - Üritab võita ja üritab mitte kaotada
    
    Tabeli suureks tegemine
    // Rekursioon
    // Travelling salesman problem
*/