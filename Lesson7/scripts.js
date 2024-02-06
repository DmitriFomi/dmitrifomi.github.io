let para1 = document.getElementById("para1"); // Kui ei leia siisa NULL / UNDEFINED
console.log(para1);
para1.innerHTML = "Hello world"; // innerHTML - muudab elmenedi sisu
para1.style.color = "Red";

let para2 = document.getElementById("para2"); // Kui ei leia siisa NULL / UNDEFINED
console.log(para2);
para2.innerHTML = "Hello world 2"; // innerHTML - muudab elmenedi sisu
para2.style.fontSize = "25px";

/*let toDoList = document.getElementsByClassName("todoel");
console.log(toDoList);
for(let i = 0; i < toDoList.length; i++) {
    let currentTodo = toDoList[i];
    currentTodo.innerHTML = currentTodo.innerHTML + " - Tehtud";
}*/

function CompleteToDo() {
    let toDoList = document.getElementsByClassName("todoel");
    let completedItem = document.getElementById("doneToDO").value - 1;
    let errrorEl = document.getElementById("todoError");

    console.log(completedItem);
    // Kas see on täis arv?
    // Kas see EI ole täis arv?
    if(!Number.isInteger(completedItem) || completedItem < 0) {
        errrorEl.innerHTML = "Wrong number";
        errrorEl.style.display = "block";
        return;
    }

    if(completedItem >= toDoList.length) {
        errrorEl.innerHTML = "Wrong number";
        errrorEl.style.display = "block";
        return;
    } else {
        errrorEl.style.display = "none";
    }

    // Kas antud To DO on tehtud?
    if(toDoList[completedItem].innerHTML.indexOf("Tehtud") > 0) {
        errrorEl.innerHTML = "Same To DO Elment";
        errrorEl.style.display = "block";
        return;
    }

    // Alla seda on meil elemengiga tegevused
    toDoList[completedItem].innerHTML = toDoList[completedItem].innerHTML + " - Tehtud";
    document.getElementById("doneToDO").value = "";
    console.log(completedItem);
}



let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let genNum1 = 0;
let genNum2 = 0;

let correctAns = 0;
let life = 3; // Ehk katsed



function xAnswer() {
    let x = document.getElementById("x").value;
    let ansX = document.getElementById("ansX");
    let corAns = document.getElementById("corAns");
    let lives = document.getElementById("lives");
    ansX.innerHTML = x;
    if(genNum1 + genNum2 == x) {
        correctAns++;
        ansX.className = "";
        //ansX.className = "bg-success";
        Start();
    } else {
        life--;
        ansX.className = "bg-danger";
    }
    corAns.innerHTML = correctAns;
    lives.innerHTML = life;
}

function GenerateRandomNumber(min, max) {
    /*
        1.6 - 2
        1.5 - 2
        1.4 - 1
        floor - siis kogu aeg tee arv väiksemaks
        round - siis tavaline matemaatika loogika ümardamiseks
        ceil - siis kogu aeg tee arv suuremaks
    */
    return Math.floor(Math.random() * (max - min)) + min;
}

function Start() {
    let difficulty = document.querySelector("input[name='difficulty']:checked").value;
    switch (difficulty) {
        case "easy":
            genNum1 = GenerateRandomNumber(1, 11);
            genNum2 = GenerateRandomNumber(1, 11);
            break;
        case "medium":
            genNum1 = GenerateRandomNumber(1, 51);
            genNum2 = GenerateRandomNumber(1, 51);
            break;
        case "hard":
            genNum1 = GenerateRandomNumber(1, 1000001);
            genNum2 = GenerateRandomNumber(1, 1000001);
            break;
        default:
            break;
    }
    num1.innerHTML = genNum1;
    num2.innerHTML = genNum2;
    ansX.innerHTML = "x";
    let x = document.getElementById("x");
    let doneBtn = document.getElementById("doneBtn");
    x.value = "";
    x.disabled = false;
    doneBtn.disabled = false;
}
