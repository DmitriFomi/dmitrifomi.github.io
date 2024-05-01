// Global Variable
let guessedNumber = document.getElementById("guessedNumber");
let answerEl = document.getElementById("answer");
let guessBtn = document.getElementById("guessBtn");
let restartBtn = document.getElementById("restartBtn");
let generatedNumberEl = document.getElementById("generatedNumbers");
let remainingAnswEl = document.getElementById("remainingAnsw");
let pastAnswerEl = document.getElementById("pastAnswer");
let selectorEl = document.getElementById("selector");
let isDiv = false;
let random1 = 0;
let random2 = 0;
let answers = [];
let pastEquasion = [];

NewGame();

// Functions
function OnSubmit() {
    let userName = document.getElementById("userName").value;
}

function Sum2Numbers(num1, num2) {
    //console.log(`${num1} + ${num2} = ` + (num1 + num2));
    return num1 + num2;
}

Sum2Numbers(1, 1);
Sum2Numbers(5, 6);
Sum2Numbers(7, 10);

function Div2Numbers(num1, num2) {
    return num1 - num2;
}

//console.log(`1 - 1 = ` + Div2Numbers(1, 1));
//console.log(`5 - 6 = ` + Div2Numbers(5, 6));
//console.log(`7 - 10 = ` + Div2Numbers(7, 10));

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function SelectorChanged() {
    Restart(false);
}

// Show user new numbers
function NewGame() {
    let maxGenerNumber = 11;
    let maxEquasion = 3;//Math.pow(maxGenerNumber - 1, maxGenerNumber - 1) * 2;
    random1 = GenerateRandomNumber(1, maxGenerNumber);
    random2 = GenerateRandomNumber(1, maxGenerNumber);
    isDiv = selectorEl.value == "both" ? GenerateRandomNumber(1, 3) == 1 : selectorEl.value == "-"; // Kui on 1 siis tegemist on lahutamisega

    let generatedEquasion = `${random1} ${isDiv ? "-" : "+"} ${random2} `;
    let fondEquasion = false;
    // Tee niikaua kuni on leitud korrektne võrrand
    while(!fondEquasion) {
        fondEquasion = pastEquasion.indexOf(generatedEquasion.trim()) == -1;
        if(!fondEquasion) {
            random1 = GenerateRandomNumber(1, maxGenerNumber);
            random2 = GenerateRandomNumber(1, maxGenerNumber);
            isDiv = GenerateRandomNumber(1, 3) == 1; // Kui on 1 siis tegemist on lahutamisega
            generatedEquasion = `${random1} ${isDiv ? "-" : "+"} ${random2} `;
        }
        if(pastEquasion.length >= maxEquasion) { // 0.0000001%
            alert("You win. Reached maximum");
            pastEquasion = [];
            break;
        }
    }
    generatedNumberEl.innerHTML = generatedEquasion;
    remainingAnswEl.innerHTML = maxEquasion - pastEquasion.length;

    // Reset Style
    guessedNumber.classList.remove("wrong");
    guessedNumber.classList.remove("correct");
    guessedNumber.disabled = false;
    guessedNumber.value = "";
    answerEl.innerHTML = "X";   
    restartBtn.style.display = "none";
    guessBtn.style.display = "block"; 
    guessBtn.disabled = true;
    /*if(answers.length > 0) {
        ShowPastAnswers();
    }*/
    
}

function WinPopUp() {
    if (confirm("Continue playing?")) {
        Restart(true);
    } else {
        guessedNumber.disabled = true;
        guessBtn.disabled = true;
        ShowPastAnswers();
    }
}

function LostPopUp() {
    if (confirm("Try again?")) {
        guessedNumber.value = "";
        answerEl.innerHTML = "X"; 
    } else {
        Restart(true);
    }
}

function GuessNumber() {
    // Local variable is located inside function
    let correctAnsw = isDiv ? Div2Numbers(random1, random2) : Sum2Numbers(random1, random2);

    answers.push({
        "PlayerAnswer": guessedNumber.value,
        "IsCorrect": guessedNumber.value == correctAnsw,
        "CorrectAnwer": correctAnsw,
        "Equasion": (generatedNumberEl.innerHTML + "= " + correctAnsw)
    });

    if(guessedNumber.value == correctAnsw) {
        guessedNumber.classList.remove("wrong");
        guessedNumber.classList.add("correct");
        WinPopUp();
        //location.reload();
    } else {
        /*answerEl.innerHTML = correctAnsw;
        guessedNumber.classList.remove("correct");
        guessedNumber.classList.add("wrong");*/
        LostPopUp();
    }   

    //restartBtn.style.display = "block";
    //guessBtn.style.display = "none";

    console.log(answers);
}

function guessChanged() {
    if(guessedNumber.value == "") {
        answerEl.innerHTML = "X";
        guessBtn.disabled = true;
    } else {
        answerEl.innerHTML = guessedNumber.value;
        guessBtn.disabled = false;
    }
}

function Restart(playerGuessed) {
    if(playerGuessed) {
        pastEquasion.push(generatedNumberEl.innerHTML.trim());
    }
    
    NewGame();
}

function ShowPastAnswers() {
    let lastAnser = answers[answers.length - 1];
    /*
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">User Guessed the numebr</h5>
                <p class="card-text">1 + 1 = 2</p>
            </div>
        </div>
        HTML Element count - 4
            div x 2
            h5 x 1
            p x 1
        answers.push({
            "PlayerAnswer": guessedNumber.value,
            "IsCorrect": guessedNumber.value == correctAnsw,
            "CorrectAnwer": correctAnsw,
            "Equasion": (generatedNumberEl.innerHTML + "= " + correctAnsw)
        });

    */
   for(let i = 0; i < answers.length; i++) {
        let cardCont = document.createElement("div");
        let cardBody = document.createElement("div");
        let cardTitle = document.createElement("h5");
        let cardText = document.createElement("p");


        cardCont.classList.add("card");
        cardCont.classList.add(answers[i].IsCorrect ? "cardCorrect" : "cardWrong");
        cardBody.classList.add("card-body");
        cardTitle.classList.add("card-title");
        cardText.classList.add("card-text");


        cardTitle.innerHTML = answers[i].IsCorrect ? "User Guessed the number" : "User did not Guess the number";
        cardText.innerHTML = `User Guessed: ${answers[i].PlayerAnswer}<br> Equasion: ${answers[i].Equasion}`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardCont.appendChild(cardBody);
        pastAnswerEl.appendChild(cardCont);
   }
}

// TO-DO
/*
    Show if correct or wrong
        Correct - Green
        Wrong - Red
        Input must change color
    Div 2 numbers
        Both sum and div should be
    If Correct Refrersh the page - No good
    Extra button to start again
        Method 1 - Extra button "Restart"
        Method 2 - hide and show buttons
    No repeating Equasion
    Limit to answers
    Save progress
        Show to user past answers
    
    After Correct answer a small popup "Continue playing?"
        Ok - next Equasion
        Cancel - show ansers
    Incorrect answer a small popup "Try again?" / "Are you sure" button
        Ok - Anser again
        Cancel - next Equasion
    User has a choice to have only + or - or both

    HomeWork
        Easy - Remaining Lives 
            Max 5
            If incorrect and user presses Cancel then -1 life
            Game ove if Life == 0
        Hard - Time Limit
            Progress bar fills 100% then -1 life
        Hard - Progress bar starts after first answer
    

    ....
*/