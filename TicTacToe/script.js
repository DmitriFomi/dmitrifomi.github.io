// Massiivid ehk Array
let name = "Dima";
let city = "Tallinn";
let name2 = "Juku";
let city2 = "Pärnu";

let names = ["Dima" , "Juku"];
let cities = ["Tallinn", "Pärnu"];

let x1 = null;
let x2 = "";

//console.log(x2.length);
//console.log(x1.length);


//console.log(names);
names.push("Mari");
//console.log(names);
//console.log(names.length)
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
// Massiivide lugemine algab "0"
// Viimane element massiivis on pikkus - 1

// sisendid
// mingi muutuja, tavaliselt see on ITERATION ehk i
// Looiline tehe
// tsükli lõppus iteratsiooni suurendamine
for(let i = 0; i < 10; i++) { // FOR tsükell
    //console.log(i);
}

// Väga ohtlik
let counter = 0;
while(counter < 10) {
    //console.log("Hello");
    counter ++;
}
counter = 0;
while(true) {
    //console.log("Hello 2");
    if(counter > 10) {
        break;
    }
    counter++;
}

let globalF = 0;
//console.log("VASTUS: " + secondFriend(secondFriend(1, 1), secondFriend(2, 2)));
//console.log("GLOBAL: " + globalF);
function secondFriend(x, y) {
    globalF = extraFriend(x, y);
    return extraFriend(x, y);
}

function extraFriend(a, b) {
    return a + b;
}

let marks = "Hello my name is Dmitri and today is good day."
/*console.log(marks.indexOf("is"));
console.log(marks.substring(5, 2));
console.log(marks.split(" is "));
console.log(cities.join("; "));
console.log(marks.replace("is", "are"));
console.log(marks.replaceAll("is", "are"));
console.log(marks.toLowerCase());
console.log(marks.toUpperCase());
console.log(marks.toUpperCase() == marks.toUpperCase());*/

// CODE START
let tictactoeElements = document.getElementsByClassName("tictactoeArea");
let playArea = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let winnerFound = false;
let canPlay = false;
let playerXName = "";
let playerOName = "";
let ai = false;
let aiHard = false; // Kui false -> Easy, true -> Hard
let savedGames = [];
let winningPos = [-1, -1, -1];
let winningColor = "green";
document.getElementById("player").innerHTML = player;
//console.log(tictactoeElements);
for(let i = 0; i < tictactoeElements.length; i++) { 
    //tictactoeElements[i].id = "pos" + i;
    tictactoeElements[i].onclick = function() {
        MakeMove(i);
    };
}

function MakeMove(pos) {
    if(playArea[pos].length == 0 && !winnerFound && canPlay) {
        document.getElementsByClassName("tictactoeArea")[pos].innerHTML = player;
        playArea[pos] = player;
        winnerFound = CheckWinner(false);
        if(winnerFound) {
            UpdatePlayerNames("winner");  
            document.getElementById("moveEl").style.display = "none";
            document.getElementById("winnerPara").style.display = "block";
            document.getElementById("restartbtn").disabled = false;
            SaveGame(player);
        } else if (CheckTie()) {
            document.getElementById("winner").innerHTML = "TIE";
            document.getElementById("moveEl").style.display = "none";
            document.getElementById("winnerPara").style.display = "block";
            document.getElementById("restartbtn").disabled = false;
            SaveGame("TIE");
        } else {
            if(player == "X") {
                player = "O";
            } else {
                player = "X";
            }
            //console.log(playArea);
            /*if(player == "X") {
                document.getElementById("player").innerHTML = playerXName + " (" + player + ")";
            } else {
                document.getElementById("player").innerHTML = playerOName + " (" + player + ")";
            }*/
            // Lambda funktsioon ehk ühe rea funktsioon
            // If loogika ? true : false
            UpdatePlayerNames("player"); 
            if(ai && player == "O") {
                /*var delayInMilliseconds = 2000;
                setTimeout(function() {
                    MakeMove(AiMove());
                }, delayInMilliseconds);*/
                MakeMove(AiMove());
            }    
            
            
        }
        //document.getElementById("pos" + pos).innerHTML = "X";
    }
}

// Võitja loogika
// Võitja saab olla 8
// TIE
function CheckWinner(aiCheck) {
    if(playArea[0] == playArea[1] && playArea[1] == playArea[2] && playArea[0] != "") {
        // 1 && 1 && 0 - 0
        // Kas 0 kohal ei ole tühjus
        if(!aiCheck) {
            ChangeColor(0, 1, 2);
        }
        return true;
    } else if(playArea[3] == playArea[4] && playArea[4] == playArea[5] && playArea[3] != "") {
        // 0 && 1 && 1 - 0
        if(!aiCheck) {
            ChangeColor(3, 4, 5);
        }
        return true;
    } else if(playArea[6] == playArea[7] && playArea[7] == playArea[8] && playArea[6] != "") {
        if(!aiCheck) {
            ChangeColor(6, 7, 8);
        }
        return true;
    } else if(playArea[0] == playArea[3] && playArea[3] == playArea[6] && playArea[0] != "") {
        if(!aiCheck) {
            ChangeColor(0, 3, 6);
        }
        return true;
    } else if(playArea[1] == playArea[4] && playArea[4] == playArea[7] && playArea[1] != "") {
        if(!aiCheck) {
            ChangeColor(1, 4, 7);
        }
        return true;
    } else if(playArea[2] == playArea[5] && playArea[5] == playArea[8] && playArea[2] != "") {
        if(!aiCheck) {
            ChangeColor(2, 5, 8);
        }
        return true;
    } else if(playArea[0] == playArea[4] && playArea[4] == playArea[8] && playArea[0] != "") {
        if(!aiCheck) {
            ChangeColor(0, 4, 8);
        }
        return true;
    } else if(playArea[2] == playArea[4] && playArea[4] == playArea[6] && playArea[2] != "") {
        if(!aiCheck) {
            ChangeColor(2, 4, 6);
        }
        return true;
    } else {
        return false;
    }
}

function CheckTie() {
    //console.log(playArea.indexOf(""));
    if(playArea.indexOf("") == -1) { // -1 on siis kui seda ei leitud
        return true;
    } else {
        return false;
    }
}

function ChangeColor(pos1, pos2, pos3) {
    document.getElementsByClassName("tictactoeArea")[pos1].style.backgroundColor = winningColor;
    document.getElementsByClassName("tictactoeArea")[pos2].style.backgroundColor = winningColor;
    document.getElementsByClassName("tictactoeArea")[pos3].style.backgroundColor = winningColor;
    winningPos = [pos1, pos2, pos3];
}

function StartGame() {
    playerXName = document.getElementById("playerX").value;
    playerOName = document.getElementById("playerO").value;
    ai = document.getElementById("aiCheck").checked;
    aiHard = document.getElementById("aiDifficulty").checked;
    document.getElementById("player").innerHTML = playerXName + " (" + player + ")";
    document.getElementById("infoArea").style.display = "block";
    document.getElementById("playerX").disabled = true;
    document.getElementById("playerO").disabled = true;
    document.getElementById("aiCheck").disabled = true;
    document.getElementById("aiDifficulty").disabled = true;
    document.getElementById("startbtn").disabled = true;

    canPlay = true;
}

function UpdatePlayerNames(id) {
    document.getElementById(id).innerHTML = (ai ? "AI" : (player == "X" ? playerXName : playerOName)) + " (" + player + ")";
}

function AiMove() {
    let aiMove = Math.floor(Math.random() * 9);
    
    // Hard AI logic
    if(aiHard) {
        for(let i = 0; i < playArea.length; i++) {
            if(playArea[i].length == 0) {
                playArea[i] = "X";
                let isWinningMove = CheckWinner(true);
                playArea[i] = "";
                if(isWinningMove) {
                    aiMove = i;
                    break;
                }
            }
        }
        for(let i = 0; i < playArea.length; i++) {
            if(playArea[i].length == 0) {
                playArea[i] = "O";
                let isWinningMove = CheckWinner(true);
                playArea[i] = "";
                if(isWinningMove) {
                    aiMove = i;
                    break;
                }
            }
        }
    }

    while(true) {
        if (playArea[aiMove].length == 0) {
            break;
        }
        aiMove = Math.floor(Math.random() * 9);
    }
    return aiMove;
}

function ShowAiDifficulty() {
    let isAiChecked = document.getElementById("aiCheck").checked;
    document.getElementById("aiCheckDiff").style.display = isAiChecked ? "block" : "none";
}

function RestartGame() {
    playArea = ["", "", "", "", "", "", "", "", ""];
    winningPos = [-1, -1, -1];
    player = "X";
    winnerFound = false;
    canPlay = false;
    playerXName = "";
    playerOName = "";
    ai = false;
    aiHard = false;

    playerXName = document.getElementById("playerX").value = "";
    playerOName = document.getElementById("playerO").value = "";
    ai = document.getElementById("aiCheck").checked = false;
    aiHard = document.getElementById("aiDifficulty").checked = false;
    document.getElementById("infoArea").style.display = "none";
    document.getElementById("moveEl").style.display = "block";
    document.getElementById("playerX").disabled = false;
    document.getElementById("playerO").disabled = false;
    document.getElementById("aiCheck").disabled = false;
    document.getElementById("aiDifficulty").disabled = false;
    document.getElementById("startbtn").disabled = false;
    document.getElementById("restartbtn").disabled = true;
    document.getElementById("aiCheckDiff").style.display = "none";
    

    for(let i = 0; i < tictactoeElements.length; i++) {
        tictactoeElements[i].innerHTML = "";
        tictactoeElements[i].style.backgroundColor = null;
    }
}

function SaveGame(winner) {
    savedGames.push({
        PlayArea: playArea,
        WinningPos: winningPos,
        PlayerX: playerXName,
        PlayerO: ai ? "AI" : playerOName,
        Ai: ai,
        AiHard: aiHard,
        Winner: winner
    });
    GenerateHsistory();
    // JSON - JavaScript Object Notation
    /*
        Auto ehk Car
            Hind
            Mudel
            Värv
            Võimsus
            ....
        Auto1
            100
            BMW
            Hall
            1000 horsepower
        Auto2
            200
            Audi
            Must
            200 horsepower
    */
    
}

function GenerateHsistory() {
    console.log(savedGames);
    document.getElementById("savedGames").innerHTML = "";
    for(let j = 0; j < savedGames.length; j++) {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.classList.add("historymargin");
        
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        
        let cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.classList.add("text-center");
        cardTitle.innerHTML = "Winner: (" + savedGames[j].Winner + ")";
        
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("container");
        cardContainer.classList.add("tictactoeContHistory");
        let playRow = null;
        
        for(let i = 0; i < savedGames[j].PlayArea.length; i++) {    
            if(i == 0 || i == 3 || i == 6) { // i == 0 || i == 3 || i == 6 ehk i % != 0
                playRow = document.createElement("div");
                playRow.classList.add("row");
                playRow.classList.add("text-center");
                cardContainer.appendChild(playRow);
            }        
            let playData = document.createElement("div");
            playData.classList.add("col-4");
            playData.innerHTML = savedGames[j].PlayArea[i];
            if(savedGames[j].WinningPos.indexOf(i) != -1 ) {
                playData.style.backgroundColor = winningColor;
            }
            playRow.appendChild(playData);
        }
        cardDiv.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardContainer)
        document.getElementById("savedGames").appendChild(cardDiv);
    }

    
    
    
    
    /*
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-center">Winner: (O)</h5>
            <div class="container tictactoeCont">
                <div class="row text-center">
                    <div class="col-4 tictactoeArea"></div>
                    <div class="col-4 tictactoeArea"></div>
                    <div class="col-4 tictactoeArea"></div>
                </div>
                <div class="row text-center">
                    <div class="col-4 tictactoeArea"></div>
                    <div class="col-4 tictactoeArea"></div>
                    <div class="col-4 tictactoeArea"></div>
                </div>
                <div class="row text-center">
                    <div class="col-4 tictactoeArea"></div>
                    <div class="col-4 tictactoeArea"></div>
                    <div class="col-4 tictactoeArea"></div>
                </div>
            </div>
        </div>
    </div>
    */
}

/*
    Mängija nime lisamine - DONE
    AI ehk arvuti vastu mängimine
        Easy - Random positsioon
        Hard - Üritab võita ja üritab mitte kaotada
            Esimene käik võib olla suvaline - Kindlate reeglite teadmine
    Mängude salvestamine
    
    Tabeli suureks tegemine
    // Rekursioon
    // Travelling salesman problem
*/